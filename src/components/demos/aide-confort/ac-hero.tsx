import { ArrowRight, BadgeCheck } from "lucide-react";

export function AcHero() {
  return (
    <section
      id="accueil"
      className="scroll-mt-24 bg-linear-to-br from-sky-100 via-white to-teal-50 dark:from-sky-950 dark:via-background dark:to-teal-950"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-background px-4 py-2 font-medium text-sky-800 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-300">
            <BadgeCheck />
            Organisme Agréé par l'État
          </div>

          <h1 className="text-4xl leading-none font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Du temps pour vous,
            <span className="block text-sky-600 dark:text-sky-400">
              du soutien pour vos proches
            </span>
          </h1>

          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Aide-ménagère, garde d'enfants, auxiliaire de vie et portage de repas à [Ville]. Nos
            équipes qualifiées s'occupent de tout pour votre confort, avec 50% de crédit d'impôt
            immédiat.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#simulateur"
              className="group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-sky-500 via-blue-500 to-teal-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
            >
              Calculer mon budget
              <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center rounded-lg border border-border bg-background/70 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:bg-sky-100 hover:ring-2 dark:hover:bg-sky-900"
            >
              Découvrir nos services
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-xl">
          <div className="relative">
            <img
              src="/resume/aide-confort/hero-visual.jpg"
              alt="Une aide à domicile accompagnant une personne âgée"
              className="aspect-[16/9] rounded-2xl object-cover shadow-xl lg:aspect-[4/3] lg:h-auto"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-background p-4 shadow-lg sm:block">
              <p className="text-2xl font-bold text-sky-600 dark:text-sky-400">50%</p>
              <p className="text-sm text-muted-foreground">de crédit d'impôt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
