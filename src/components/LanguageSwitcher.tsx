import { useLang } from "@/lib/lang-context";
import { LANGS, Lang } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useLang();
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Globe className="h-6 w-6 text-primary shrink-0" aria-hidden />
      <label htmlFor="lang-select" className="sr-only">{t.language}</label>
      <select
        id="lang-select"
        value={lang}
        onChange={(e) => setLang(e.target.value as Lang)}
        className="text-lg sm:text-xl font-bold bg-card border-2 border-primary rounded-lg px-4 py-2 sm:px-5 sm:py-3 text-foreground shadow-sm cursor-pointer hover:bg-secondary transition focus:outline-none focus:ring-4 focus:ring-primary/30"
      >
        {LANGS.map((l) => (
          <option key={l.code} value={l.code}>{l.native}</option>
        ))}
      </select>
    </div>
  );
}
