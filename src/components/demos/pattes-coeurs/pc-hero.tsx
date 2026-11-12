import { ArrowRight, Heart, PawPrint, Stethoscope } from "lucide-react";

export function PcHero() {
  return (
    <section
      id="accueil"
      className="scroll-mt-12 relative isolate overflow-hidden bg-[linear-gradient(160deg,rgb(245,240,235)_0%,rgb(237,229,218)_35%,rgb(225,212,194)_70%,rgb(212,195,171)_100%)] px-4 py-20 text-[#443b34] sm:px-6 lg:px-8 dark:bg-[linear-gradient(160deg,rgb(43,38,33)_0%,rgb(51,44,37)_35%,rgb(61,49,39)_70%,rgb(70,55,42)_100%)] dark:text-[#f0e7dc]"
    >
      {/* Cercles décoratifs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full border border-[#9c8068]/10 dark:border-[#c2a487]/10" />
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full border border-[#9c8068]/10 dark:border-[#c2a487]/10" />
      <div className="pointer-events-none absolute right-[-140px] bottom-[-180px] h-[500px] w-[500px] rounded-full border border-[#9c8068]/10 dark:border-[#c2a487]/10" />
      <div className="pointer-events-none absolute right-[-90px] bottom-[-130px] h-[400px] w-[400px] rounded-full border border-[#9c8068]/10 dark:border-[#c2a487]/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Partie gauche : Texte */}
        <div className="flex flex-col items-start">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#9c8068]/20 bg-white/40 px-4 py-2 text-xs font-semibold tracking-wide text-[#80664f] dark:border-[#c2a487]/20 dark:bg-white/5 dark:text-[#d4b99c]">
            <PawPrint className="h-4 w-4" />
            Bien-être animal [Ville]
          </div>

          <h1 className="max-w-xl font-cormorant text-5xl leading-[1.08] font-semibold tracking-tight text-[#443b34] sm:text-6xl lg:text-7xl dark:text-[#f2e9df]">
            Prenez soin de vos{" "}
            <span className="text-[#9c7657] dark:text-[#c6a17e]">compagnons</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#716459] sm:text-lg dark:text-[#c2b4a5]">
            Cabinet vétérinaire moderne, pension forestière tout confort, ostéopathie et éducation
            positive. Une équipe d'experts passionnés pour le bonheur et la vitalité de vos animaux
            de compagnie.
          </p>

          {/* Boutons */}
          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#sejour"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#8c6b50] px-7 text-sm font-semibold text-white shadow-md shadow-[#8c6b50]/15 transition-all hover:-translate-y-0.5 hover:bg-[#76563e] dark:bg-[#b18c68] dark:text-[#241d17] dark:hover:bg-[#c4a17e]"
            >
              Simuler un séjour
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#9c8068]/40 bg-white/30 px-7 text-sm font-semibold text-[#70563f] transition-all hover:-translate-y-0.5 hover:bg-white/60 dark:border-[#c2a487]/40 dark:bg-white/5 dark:text-[#e1cbb3] dark:hover:bg-white/10"
            >
              <Heart className="mr-2 h-4 w-4" />
              Prendre RDV
            </a>
          </div>

          {/* Signature */}
          <div className="mt-12 flex items-center gap-3 border-t border-[#9c8068]/20 pt-6 dark:border-[#c2a487]/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 text-[#8c6b50] dark:bg-white/10 dark:text-[#c6a17e]">
              <Stethoscope className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#57483b] dark:text-[#e9ddcf]">
                Une approche globale du bien-être
              </p>
              <p className="mt-0.5 text-xs text-[#87786b] dark:text-[#b7a593]">
                Soins, accompagnement et sérénité
              </p>
            </div>
          </div>
        </div>

        {/* Partie droite : Photo */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          {/* Décoration derrière la photo */}
          <div className="absolute -top-5 -right-5 h-full w-full rounded-4xl border border-[#9c8068]/25 dark:border-[#c2a487]/20" />
          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#b99b7d]/20 blur-2xl dark:bg-[#b18c68]/15" />

          {/* Cadre photo */}
          <div className="relative rounded-[1.75rem] border border-white/70 bg-white/50 p-3 shadow-2xl shadow-[#70563f]/15 dark:border-[#bda487]/20 dark:bg-[#3b3027]/80 dark:shadow-black/30">
            <div className="relative aspect-4/4.5 overflow-hidden rounded-[1.25rem] bg-[#d8c8b5]">
              <img
                src="/resume/pattes-coeur/hero_vet_care.webp"
                alt="Cabinet vétérinaire et pension Pattes & Cœurs à [Ville]"
                className="h-full w-full object-cover"
              />

              {/* Dégradé sur la photo */}
              <div className="absolute inset-0 bg-linear-to-t from-[#211b16]/75 via-transparent to-transparent" />

              {/* Informations sur la photo */}
              <div className="absolute right-0 bottom-0 left-0 p-6 text-white sm:p-8">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                  <PawPrint className="h-4 w-4" />
                  Pattes & Cœurs
                </div>

                <h2 className="max-w-sm font-cormorant text-3xl leading-tight font-semibold sm:text-4xl">
                  Cabinet Vétérinaire et Pension Pattes & Cœurs à [Ville]
                </h2>

                <p className="mt-3 text-sm text-white/80">Médecine douce & Soins attentionnés</p>

                <div className="mt-4 flex items-center gap-2 text-xs text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c6a98a]" />
                  [Ville] Centre & Sud
                </div>
              </div>
            </div>
          </div>

          {/* Élément décoratif flottant */}
          <div className="absolute -bottom-8 left-6 flex items-center gap-3 rounded-2xl border border-white/70 bg-[#faf7f2]/95 px-4 py-3 shadow-lg shadow-[#70563f]/10 sm:left-10 dark:border-[#c2a487]/20 dark:bg-[#352b23]/95 dark:shadow-black/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e9ded1] text-[#8c6b50] dark:bg-[#514032] dark:text-[#d0ae89]">
              <Heart className="h-5 w-5 fill-current" />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#57483b] dark:text-[#f0e5d8]">
                Le bien-être avant tout
              </p>
              <p className="text-xs text-[#87786b] dark:text-[#b9a895]">Pour tous vos compagnons</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
