import { createFileRoute } from "@tanstack/react-router";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SignatureCounter } from "@/components/SignatureCounter";
import { PetitionForm } from "@/components/PetitionForm";
import { SupportersList } from "@/components/SupportersList";
import { useLang } from "@/lib/lang-context";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Release the 2022 Protesters — Justice and Freedom Now" },
      {
        name: "description",
        content:
          "Sign the petition calling for the release of peaceful 2022 Aragalaya protesters facing legal proceedings. English, Sinhala, Tamil.",
      },
      { property: "og:title", content: "Release the 2022 Protesters — Justice and Freedom Now" },
      {
        property: "og:description",
        content: "A respectful petition for justice and fairness for peaceful Aragalaya participants.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLang();
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="#top" className="font-black text-lg sm:text-xl text-primary">
            Aragalaya<span className="text-accent">·</span>Justice
          </a>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="hero-gradient">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-accent bg-accent/10 px-4 py-2 rounded-full">
              Public Petition
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground">
              {t.hero_headline}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.hero_sub}
            </p>
          </div>

          <div className="mt-16 bg-card/80 backdrop-blur border-2 border-primary/20 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-primary/10">
            <SignatureCounter />
            <div className="mt-10 flex justify-center">
              <a
                href="#sign"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl sm:text-2xl px-10 py-5 rounded-2xl shadow-xl shadow-accent/30 transition transform hover:scale-105"
              >
                {t.cta_sign} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Petition content */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground">{t.petition_title}</h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/85">
            {t.petition.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="sign" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground">{t.form_title}</h2>
          <p className="mt-2 text-muted-foreground">{t.form_subtitle}</p>
          <div className="mt-8">
            <PetitionForm />
          </div>
        </div>
      </section>

      {/* Supporters */}
      <SupportersList />

      <footer className="py-10 px-4 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} · A peaceful petition for justice.
      </footer>
    </div>
  );
}
