import { useLang } from "@/lib/lang-context";
import { LANGS, Lang } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLang();
  return (
    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
      <Globe className="h-7 w-7 text-primary shrink-0" aria-hidden />
      <span className="sr-only">{t.language}</span>
      <div
        role="group"
        aria-label={t.language}
        className="inline-flex rounded-xl border-2 border-primary bg-card shadow-sm overflow-hidden"
      >
        {LANGS.map((l) => {
          const active = lang === l.code;
          return (
            <button
              key={l.code}
              type="button"
              onClick={() => setLang(l.code as Lang)}
              aria-pressed={active}
              className={[
                "px-5 py-3 sm:px-7 sm:py-4 text-xl sm:text-2xl font-extrabold tracking-wide transition focus:outline-none focus:ring-4 focus:ring-primary/30",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary",
              ].join(" ")}
            >
              {l.native}
            </button>
          );
        })}
      </div>
    </div>
  );
}
