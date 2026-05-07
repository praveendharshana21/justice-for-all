import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/lang-context";
import { toast } from "sonner";

export function PetitionForm() {
  const { t } = useLang();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const schema = z.object({
    full_name: z.string().trim().min(1, t.validation_required).max(100),
    email: z.string().trim().email(t.validation_email).max(255),
    phone: z.string().trim().max(50).optional().or(z.literal("")),
    
    reason: z.string().trim().max(1000).optional().or(z.literal("")),
    consent: z.literal(true, { errorMap: () => ({ message: t.validation_consent }) }),
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      full_name: String(fd.get("full_name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      reason: String(fd.get("reason") || ""),
      consent: fd.get("consent") === "on",
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("signatures").insert({
      full_name: parsed.data.full_name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      reason: parsed.data.reason || null,
      consent: true,
    });
    setSubmitting(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(t.thank_you);
    setDone(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field label={t.full_name} required>
        <input name="full_name" required maxLength={100} className={inputCls} />
      </Field>
      <Field label={t.email} required>
        <input name="email" type="email" required maxLength={255} className={inputCls} />
      </Field>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={t.phone}>
          <input name="phone" maxLength={50} className={inputCls} />
        </Field>
        <Field label={t.country}>
          <input name="country" maxLength={100} className={inputCls} />
        </Field>
      </div>
      <Field label={t.reason}>
        <textarea name="reason" rows={4} maxLength={1000} className={inputCls} />
      </Field>
      <label className="flex items-start gap-3 text-base text-foreground/90 cursor-pointer">
        <input type="checkbox" name="consent" required className="mt-1 h-5 w-5 accent-primary" />
        <span>{t.consent}</span>
      </label>
      <button
        type="submit"
        disabled={submitting || done}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl py-5 rounded-xl shadow-lg shadow-primary/30 transition disabled:opacity-60"
      >
        {submitting ? t.loading : done ? "✓ " + t.thank_you : t.submit}
      </button>
    </form>
  );
}

const inputCls =
  "w-full px-4 py-3 rounded-lg border-2 border-border bg-card text-foreground text-base focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {children}
    </div>
  );
}
