import { ArrowUpRight, CalendarDays, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScHero() {
  return (
    <section className="relative isolate flex min-h-[720px] items-center overflow-hidden bg-[linear-gradient(135deg,rgb(9,20,29)_0%,rgb(13,31,45)_50%,rgb(26,42,58)_100%)] px-6 py-32 sm:px-10 lg:min-h-[800px]">
      {/* Dégradés lumineux */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-52 -right-40 size-[650px] rounded-full bg-[#b4966e]/10 blur-[130px]" />
        <div className="absolute -bottom-72 -left-40 size-[600px] rounded-full bg-[#39718a]/15 blur-[140px]" />
        <div className="absolute top-[20%] left-[40%] size-[350px] rounded-full bg-[#b4966e]/[0.06] blur-[100px]" />

        {/* Formes géométriques abstraites */}
        <div className="absolute top-1/2 -right-32 size-[520px] -translate-y-1/2 rotate-45 rounded-[100px] border border-white/[0.045]" />
        <div className="absolute top-1/2 -right-16 size-[390px] -translate-y-1/2 rotate-45 rounded-[80px] border border-[#b4966e]/[0.12]" />
        <div className="absolute top-1/2 -right-4 size-[260px] -translate-y-1/2 rotate-45 rounded-[60px] border border-white/[0.04]" />

        {/* Traits décoratifs */}
        <div className="absolute top-[18%] right-[12%] h-32 w-px rotate-45 bg-gradient-to-b from-transparent via-[#b4966e]/30 to-transparent" />
        <div className="absolute right-[25%] bottom-[16%] h-px w-48 rotate-[-35deg] bg-gradient-to-r from-transparent via-[#b4966e]/25 to-transparent" />

        {/* Grain subtil */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 0.6px, transparent 0.6px)",
            backgroundSize: "5px 5px",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#b4966e]/30 bg-[#b4966e]/[0.08] px-5 py-2.5 backdrop-blur-sm">
            <Sparkles className="size-3.5 text-[#c7aa84]" />
            <span className="text-[10px] font-semibold tracking-[0.24em] text-[#d0b997] uppercase sm:text-xs">
              Cabinet Pluridisciplinaire B2B
            </span>
          </div>

          {/* Titre */}
          <h1 className="font-cormorant text-5xl leading-[1.2] font-medium tracking-tight text-[#f4f2ed] sm:text-6xl lg:text-7xl xl:text-[84px]">
            L'excellence juridique
            <span className="mt-2 block bg-gradient-to-r from-[#b4966e] via-[#dfc49f] to-[#b4966e] bg-clip-text text-transparent">
              et stratégique
            </span>
          </h1>

          {/* Ligne décorative */}
          <div className="my-9 flex items-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-[#b4966e] to-[#b4966e]/20" />
            <div className="size-1.5 rotate-45 bg-[#b4966e]" />
          </div>

          {/* Description */}
          <p className="max-w-2xl text-base leading-8 text-[#c1cbd1] sm:text-lg sm:leading-9">
            Avocats d'affaires, experts-comptables, notaires et consultants d'élite unis pour accompagner la croissance, structurer la
            conformité et sécuriser le patrimoine de votre entreprise.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              render={<a href="#contact" />}
              size="lg"
              className="group h-14 rounded-lg bg-[#b4966e] px-7 text-sm font-semibold text-[#111c24] shadow-lg shadow-[#b4966e]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c5a77f] hover:shadow-xl hover:shadow-[#b4966e]/25"
            >
              <CalendarDays className="mr-2 size-4" />
              Prendre RDV en ligne
              <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>

            <Button
              render={<a href="#honoraires" />}
              size="lg"
              variant="outline"
              className="h-14 rounded-lg border-white/20 bg-white/[0.04] px-7 text-sm font-semibold text-[#f4f2ed] backdrop-blur-sm transition-all duration-300 hover:border-[#b4966e]/60 hover:bg-[#b4966e]/10 hover:text-white"
            >
              Estimer nos honoraires
              <ArrowUpRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Repère décoratif inférieur */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#b4966e]/40 to-transparent" />
    </section>
  );
}
