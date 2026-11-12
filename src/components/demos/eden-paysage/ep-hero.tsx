import { ArrowRight, Leaf, Phone } from "lucide-react";

export function EpHero() {
  return (
    <section id="accueil" className="scroll-mt-24 relative isolate min-h-[650px] overflow-hidden">
      {/* Image de fond */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/resume/eden-paysage/hero_bg.webp')",
        }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/75" aria-hidden="true" />

      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_400px] lg:gap-16">
        {/* Texte gauche */}
        <div className="max-w-2xl text-white">
          <p className="mb-5 flex items-center gap-2 text-sm font-medium tracking-[0.2em] text-white/80 uppercase">
            <Leaf className="size-4" aria-hidden="true" />
            Paysagistes & créateurs d'espaces verts
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
            Votre jardin,
            <br />
            <span className="text-lime-300">notre passion.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Nous imaginons et réalisons des jardins uniques, pensés pour sublimer votre extérieur et
            vous rapprocher de la nature.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-lime-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-lime-700"
            >
              Parlons de votre projet
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>

            <a
              href="#realisations"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Nos réalisations
            </a>
          </div>
        </div>

        {/* Carte droite */}
        <div className="rounded-2xl border border-white/20 bg-white/50 p-7 text-neutral-900 shadow-2xl backdrop-blur-md sm:p-8">
          <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-lime-100 text-lime-800">
            <Leaf className="size-6" aria-hidden="true" />
          </div>

          <p className="text-sm font-medium tracking-wider text-lime-800 uppercase">Eden Paysage</p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Donnons vie à votre extérieur.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            Création de jardins, aménagement paysager et entretien : un accompagnement personnalisé
            de la conception à la réalisation.
          </p>

          <div className="my-6 h-px bg-neutral-200" />

          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold">Création paysagère</p>
              <p className="mt-1 text-sm text-neutral-600">Des espaces extérieurs à votre image.</p>
            </div>

            <div>
              <p className="text-sm font-semibold">Entretien de jardins</p>
              <p className="mt-1 text-sm text-neutral-600">Un jardin soigné toute l'année.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-lime-700 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-lime-800"
          >
            <Phone className="size-4" aria-hidden="true" />
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}
