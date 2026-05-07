import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/lang-context";

type Sig = {
  id: string;
  full_name: string | null;
  country: string | null;
  reason: string | null;
  created_at: string | null;
};

export function SupportersList() {
  const { t } = useLang();
  const [sigs, setSigs] = useState<Sig[]>([]);

  const load = async () => {
    const { data } = await supabase
      .from("signatures_public")
      .select("id, full_name, country, reason, created_at")
      .order("created_at", { ascending: false })
      .limit(30);
    if (data) setSigs(data as Sig[]);
  };

  useEffect(() => {
    load();
    const channel = supabase
      .channel("sig-list")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "signatures" }, () => load())
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-center text-foreground">{t.supporters}</h2>
        <p className="text-center text-lg text-muted-foreground mt-3">{t.supporters_sub}</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sigs.map((s) => (
            <div key={s.id} className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="font-bold text-foreground text-lg">{s.full_name}</div>
              {s.country && <div className="text-sm text-muted-foreground mt-1">{s.country}</div>}
              {s.reason && (
                <p className="text-sm text-foreground/80 mt-3 line-clamp-3 italic">"{s.reason}"</p>
              )}
            </div>
          ))}
          {sigs.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-12">—</p>
          )}
        </div>
      </div>
    </section>
  );
}
