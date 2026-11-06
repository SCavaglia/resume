import { cn } from "@/lib/utils";

export function SlHero() {
  return (
    <section id="accueil" className="relative isolate min-h-screen overflow-hidden bg-neutral-950">
      {/* Background */}
      <div className={cn("pointer-events-none absolute inset-0 bg-[url('/resume/salon-lumieres/hero_bg.webp')] bg-cover bg-center blur-[1px] opacity-50")} />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#C5A059]/5" />
      <div className="pointer-events-none absolute inset-0 bg-black/15" />

      {/* Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-neutral-900 from-0% via-transparent via-30% to-transparent to-100%" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-neutral-800 from-0% via-transparent via-60% to-transparent to-100%" />
      <div className="pointer-events-none absolute -right-60 -top-60 size-164 rounded-full bg-linear-to-tr from-[#e6d5b8] to-white opacity-30 blur-[124px]" />
      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4">
        <div className="relative max-w-4xl pt-34 pb-36 pl-0 text-left md:pl-12">
          {/* Eyebrow */}
          <div className="mt-12 flex items-center gap-2 text-sm font-semibold tracking-widest text-[#c5a059] uppercase">
            <div className="h-0.5 w-12 rounded-full bg-current" />
            Maison de Beauté & Bien-être · Paris 1er
          </div>

          {/* Title */}
          <h1 className="mt-12 font-playfair text-5xl leading-none font-thin tracking-tight text-white md:text-7xl lg:text-[82px]">
            L'art de sublimer
            <span className="block text-[#e6d5b8]">votre éclat naturel</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 tracking-wide text-neutral-200">
            Une parenthèse suspendue où chaque soin devient un rituel d'exception. Alliance d'expertise scientifique et de détente absolue.
          </p>

          {/* Actions */}
          <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <a
              href="#reservation"
              className="rounded-xs bg-[rgb(197,160,89)] px-8 py-6 font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:-translate-y-1 hover:bg-[rgb(144,116,64)]"
            >
              Réserver mon instant →
            </a>

            <a
              href="#carte"
              className="rounded-xs border-2 bg-transparent px-8 py-6 font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500 hover:backdrop-blur-md"
            >
              Faire mon diagnostic beauté
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
