import { ArrowRight, ChevronDown } from "lucide-react";

export function EbHero() {
  return (
    <section
      id="accueil"
      className="scroll-mt-24 relative overflow-hidden bg-[rgb(250,248,245)] text-[rgb(35,39,32)] dark:bg-[#1e211b] dark:text-[#f0ece3]"
    >
      {/* Gradient */}
      <div className="pointer-events-none absolute -right-32 -top-32 size-[500px] rounded-full bg-[#607055]/30 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 -top-20 size-[400px] rounded-full bg-[#c99d63]/20 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#607055]/15 via-transparent to-[#c99d63]/15" />

      {/* Contenu */}
      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="relative z-10 flex flex-col items-start">
          <p className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.25em] text-[rgb(201,157,99)] uppercase">
            <span className="h-px w-8 bg-[rgb(201,157,99)]" />
            Maison d'Hôtes de Prestige
          </p>

          <h1 className="max-w-xl font-serif text-5xl leading-[1.12] tracking-tight sm:text-6xl xl:text-7xl">
            L'art de vivre
            <br />
            en{" "}
            <span className="font-normal text-[rgb(74,87,64)] italic dark:text-[#a2b095]">
              Haute Provence
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[rgb(110,116,104)] sm:text-lg dark:text-[#b5b7aa]">
            Nichée au cœur des paysages préservés du Luberon, au pied du célèbre village suspendu de
            Gordes, notre bastide en pierre sèche du XVIIIème siècle vous ouvre ses portes pour une
            parenthèse hors du temps. Calme absolu, piscine chauffée et art de vivre provençal.
          </p>

          <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href="#reservation"
              className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[rgb(96,112,85)] px-7 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-[rgb(74,87,64)] dark:bg-[#7f916f] dark:hover:bg-[#91a382]"
            >
              Simuler mon séjour
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#chambres"
              className="inline-flex min-h-14 items-center justify-center border border-[rgb(201,157,99)]/50 px-7 py-4 text-sm font-medium text-[rgb(35,39,32)] transition-colors duration-300 hover:bg-[rgb(201,157,99)]/10 dark:border-[#c99d63]/60 dark:text-[#f0ece3] dark:hover:bg-[#c99d63]/10"
            >
              Découvrir nos chambres
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <span className="text-2xl text-[rgb(201,157,99)]">⟡</span>
            <div>
              <p className="font-serif text-lg">Le Domaine</p>
              <p className="mt-1 text-xs tracking-[0.15em] text-[rgb(110,116,104)] uppercase dark:text-[#b5b7aa]">
                Havre de Paix provençal
              </p>
            </div>
            <span className="text-2xl text-[rgb(201,157,99)]">⟡</span>
          </div>
        </div>

        {/* Visuel */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -top-3 -right-3 h-32 w-32 border-t border-r border-[rgb(201,157,99)]/70 sm:-top-5 sm:-right-5" />

          <div className="relative aspect-4/5 max-h-170 overflow-hidden">
            <img
              src="/resume/echappee-belle/hero-visual.webp"
              alt="Le Domaine des Sources, bastide provençale de prestige à Gordes"
              className="size-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

            <div className="absolute right-6 bottom-6 left-6 border border-white/40 bg-[rgb(250,248,245)]/95 p-5 backdrop-blur-sm sm:right-8 sm:bottom-8 sm:left-8 sm:p-6 dark:border-white/15 dark:bg-[#292c24]/95">
              <p className="text-xs tracking-[0.2em] text-[rgb(201,157,99)] uppercase">
                Le Domaine des Sources
              </p>
              <p className="mt-2 font-serif text-xl sm:text-2xl dark:text-[#f0ece3]">
                Bastide Provençale de Prestige à Gordes
              </p>
            </div>
          </div>

          <div className="absolute -bottom-3 -left-3 h-32 w-32 border-b border-l border-[rgb(201,157,99)]/70 sm:-bottom-5 sm:-left-5" />
        </div>
      </div>

      <a
        href="#le-domaine"
        aria-label="Découvrir le domaine"
        className="flex flex-col items-center gap-2 text-[rgb(110,116,104)] transition-colors hover:text-[rgb(74,87,64)] dark:text-[#b5b7aa] dark:hover:text-[#c99d63]"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Découvrir</span>
        <ChevronDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}
