
import { HeartRate } from "@/components/animations/heart-rate";
import { Zap } from "lucide-react";

export function FzHero() {
    return (
        <section id="accueil" className="relative overflow-hidden py-24 lg:py-20">
            {/* Background */}
            <div className="absolute inset-0 bg-zinc-950/87" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-90% to-background to-100%" />

            {/* Content */}
            <div className="relative mx-auto flex flex-col items-center justify-center gap-4 px-4 lg:max-w-7xl lg:flex-row lg:gap-0">
                <div className="max-w-2xl">
                    <div className="mx-auto flex w-fit items-center gap-2 rounded-lg border border-red-500 bg-red-500/10 px-3 py-2 font-semibold tracking-wider text-red-500 uppercase lg:mx-0">
                        <Zap />
                        Saison active 2026
                    </div>

                    <h1 className="mt-6 text-center font-oswald text-[clamp(4rem,7vw,5.8rem)] leading-18 font-bold tracking-wide text-white uppercase lg:text-left lg:leading-21">
                        Dépasse
                        <span className="block bg-gradient-to-br from-red-500 to-orange-500 bg-clip-text text-transparent">
                            Tes limites
                        </span>
                    </h1>

                    <p className="mt-4 pr-0 text-center font-cabin text-lg leading-8 tracking-wide text-neutral-200 lg:pr-20 lg:text-left">
                        Plongez dans l'expérience FitZone [Ville] 2 : CrossFit intensif, Boxe, Yoga Vinyasa, Pilates & HIIT.
                        Plus de 50 cours par semaine encadrés par des coachs d'exception pour forger votre physique et
                        booster votre mental.
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-4 font-oswald lg:justify-start">
                        <a
                            href="#contact"
                            className="rounded-md bg-linear-to-br from-red-500 to-orange-500 px-10 py-8 text-lg font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgb(239_68_68_/60%),0_16px_30px_-8px_rgb(249_115_22_/70%)]"
                        >
                            Simuler mon pass
                        </a>

                        <a
                            href="#services"
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
