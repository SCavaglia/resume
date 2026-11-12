import { Beef, Wine } from "lucide-react";

export function BgHero() {
  return (
    <section id="accueil" className="relative -mt-30 overflow-hidden bg-neutral-950">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[1px] opacity-50"
        style={{
          backgroundImage: "url('/resume/bistrot-gourmand/hero_bg.webp')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-orange-950/15" />

      {/* Dégradé inférieur */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent from-0% via-transparent via-90% to-background to-100%" />

      {/* Contenu */}
      <div className="relative mx-auto max-w-2xl px-4 pt-34 pb-36">
        {/* Eyebrow */}
        <div className="mx-auto flex w-fit items-center gap-10 rounded border border-red-950 bg-red-900/85 px-8 py-2 text-sm tracking-widest text-white uppercase">
          <Wine className="size-5" />
          <span>Cuisine Française & Saisonnière</span>
          <Beef className="size-5" />
        </div>

        {/* Titre */}
        <h1 className="mt-8 text-center font-playfair text-7xl font-thin tracking-wide text-white [font-variant-caps:small-caps] leading-24! lg:text-8xl">
          Le Bistrot Gourmand
        </h1>

        {/* Sous-titre */}
        <p className="mt-8 text-center font-playfair text-2xl font-thin tracking-wide text-yellow-500 [font-variant-caps:small-caps] lg:text-3xl">
          Une table parisienne authentique depuis 2010
          <div className="pt-1 text-lg">✦</div>
        </p>

        {/* Description */}
        <p className="mt-2 text-center text-lg leading-8 tracking-wide text-neutral-200">
          Des produits frais rigoureusement sélectionnés au marché, une atmosphère conviviale et le respect des recettes de tradition.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#reservation"
            className="rounded-xs bg-red-900/90 px-6 py-4 text-center text-lg font-semibold tracking-widest text-white uppercase transition-all duration-300 sm:px-10 sm:py-8 hover:-translate-y-1 hover:bg-red-950"
          >
            Réserver une table
          </a>

          <a
            href="#carte"
            className="rounded-xs border-2 px-6 py-4 text-center text-lg font-semibold tracking-widest text-white uppercase bg-black/35 transition-all duration-300 sm:px-10 sm:py-8 hover:-translate-y-1 hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500 hover:backdrop-blur-md"
          >
            Découvrir la carte
          </a>
        </div>
      </div>
    </section>
  );
}
