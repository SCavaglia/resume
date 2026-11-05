import { HeartRate } from "@/components/animations/heart-rate";
import { Zap } from "lucide-react";

export function FzHero() {
  return (
    <section id="accueil" className="scroll-mt-24 relative overflow-hidden py-24 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_70%)]" />
      <div className="absolute -top-32 -right-32 size-96 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-linear-to-br from-blue-950/50 via-purple-950/50 to-black" />
      <div className="absolute inset-0 bg-linear-to-br from-transparent from-0% via-transparent via-90% to-black to-100%" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent from-0% via-transparent via-97% to-background to-100%" />
      {/* Content */}
      <div className="relative mx-auto flex flex-col items-center justify-center gap-4 px-4 lg:max-w-7xl lg:flex-row lg:gap-0">
        <div className="max-w-2xl">
          <div className="-rotate-1 mx-auto flex w-fit items-center gap-2 rounded-lg border border-red-500 bg-red-500/10 px-3 py-2 font-semibold tracking-wider text-red-500 uppercase lg:mx-0">
            <Zap />
            Saison active 2026
          </div>

          <h1 className="-rotate-1 mt-6 text-center font-oswald text-[clamp(4rem,7vw,5.8rem)] leading-18 font-bold tracking-wide text-white uppercase lg:text-left lg:leading-23">
            Dépasse
            <span className="rotate-2 block bg-linear-to-br from-red-500 to-orange-500 bg-clip-text text-transparent">Tes limites</span>
          </h1>

          <p className="mt-4 pr-0 text-center font-cabin text-lg leading-8 tracking-wide text-neutral-200 lg:pr-20 lg:text-left">
            Plongez dans l'expérience FitZone [Ville] 2 : CrossFit intensif, Boxe, Yoga Vinyasa, Pilates & HIIT. Plus de 50 cours par
            semaine encadrés par des coachs d'exception pour forger votre physique et booster votre mental.
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 font-oswald lg:justify-start">
            <a
              href="#simulateur"
              className="rounded-md bg-linear-to-br from-red-500 to-orange-500 px-10 py-8 text-lg font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgb(239_68_68_/60%),0_16px_30px_-8px_rgb(249_115_22_/70%)]"
            >
              Simuler mon pass
            </a>

            <a
              href="#contact"
              className="rounded-md border-2 bg-transparent px-10 py-8 text-lg font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-transparent hover:text-red-500"
            >
              Séance d'essai gratuite
            </a>
          </div>
        </div>

        <div className="min-w-xs">
          <HeartRate />
        </div>
      </div>
    </section>
  );
}
