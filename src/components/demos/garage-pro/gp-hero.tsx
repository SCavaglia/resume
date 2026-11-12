import { ArrowRight, BadgeCheck, ClipboardCheck, ShieldCheck, Wrench } from "lucide-react";

type Props = {
  className?: string;
};

export function GpHero({ className = "" }: Props) {
  return (
    <section
      id="accueil"
      className={`relative isolate flex min-h-[700px] items-center overflow-hidden bg-[#f4f5f7] text-[#0f1115] transition-colors duration-300 dark:bg-[#0f1115] dark:text-white ${className}`}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/demos/garage-pro/hero-bg.jpg')",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-white/65 dark:bg-[#0f1115]/75" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-white via-white/90 to-white/40 dark:from-[#0f1115] dark:via-[#0f1115]/90 dark:to-[#0f1115]/40" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-white/70 via-transparent to-white/20 dark:from-[#0f1115]/70 dark:via-transparent dark:to-[#0f1115]/20" />

      {/* Content */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-10">
        {/* Left */}
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2.5 border border-[#0f1115]/15 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-[#0f1115]/80 uppercase backdrop-blur-md dark:border-white/20 dark:bg-white/10 dark:text-white/90">
            <BadgeCheck className="size-4 text-[#e63946]" />
            Garage Agréé — Charte Qualité 2026
          </div>

          <h1 className="text-4xl leading-[1.12] font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Votre auto entre
            <br />
            les mains <span className="text-[#e63946]">d'experts</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#454951] sm:text-lg dark:text-neutral-300">
            Atelier mécanique multi-marques, diagnostic électronique, carrosserie et vente de
            véhicules d'occasion certifiés à [Ville]. Devis transparent et travaux garantis.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#e63946] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#c92e3b]"
            >
              Calculer et réserver
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#showroom"
              className="inline-flex min-h-14 items-center justify-center gap-3 border border-[#0f1115]/20 bg-white/50 px-7 py-4 text-sm font-semibold text-[#0f1115] backdrop-blur-sm transition-colors hover:border-[#e63946] hover:text-[#e63946] dark:border-white/30 dark:bg-white/5 dark:text-white dark:hover:border-[#e63946] dark:hover:text-[#e63946]"
            >
              Voir le showroom
              <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#0f1115]/15 pt-7 text-sm text-[#454951] dark:border-white/15 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-5 text-[#e63946]" />
              Travaux garantis
            </div>

            <div className="flex items-center gap-2">
              <Wrench className="size-5 text-[#e63946]" />
              Toutes marques
            </div>
          </div>
        </div>

        {/* Right: glass cards */}
        <div className="flex flex-col gap-5 lg:pl-8">
          {/* Diagnostic card */}
          <div className="relative overflow-hidden border border-[#0f1115]/10 bg-white/65 p-7 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-9 dark:border-white/20 dark:bg-white/10 dark:shadow-black/20">
            <div className="absolute top-0 right-0 size-32 translate-x-12 -translate-y-12 rounded-full bg-[#e63946]/15 blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex size-12 items-center justify-center border border-[#e63946]/30 bg-[#e63946]/10 text-[#e63946]">
                <ClipboardCheck className="size-6" />
              </div>

              <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#e63946] uppercase">
                Expertise & précision
              </p>

              <h2 className="text-2xl font-bold sm:text-3xl">Diagnostic en 1h</h2>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#454951] dark:text-neutral-300">
                Rapport électronique complet de vos calculateurs moteur pour identifier précisément
                l'origine de chaque anomalie.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#454951]/80 dark:text-white/70">
                <span className="size-2 rounded-full bg-emerald-500" />
                Diagnostic électronique
              </div>
            </div>
          </div>

          {/* Warranty card */}
          <div className="relative overflow-hidden border border-[#0f1115]/10 bg-white/65 p-7 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-9 dark:border-white/20 dark:bg-white/10 dark:shadow-black/20">
            <div className="absolute right-0 bottom-0 size-32 translate-x-12 translate-y-12 rounded-full bg-[#e63946]/15 blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex size-12 items-center justify-center border border-[#e63946]/30 bg-[#e63946]/10 text-[#e63946]">
                <ShieldCheck className="size-6" />
              </div>

              <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#e63946] uppercase">
                Engagement qualité
              </p>

              <h2 className="text-2xl font-bold sm:text-3xl">Garanties préservées</h2>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#454951] dark:text-neutral-300">
                Entretien conforme au carnet constructeur pour préserver vos garanties et assurer la
                longévité de votre véhicule.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#454951]/80 dark:text-white/70">
                <BadgeCheck className="size-4 text-emerald-500" />
                Respect des préconisations constructeur
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
