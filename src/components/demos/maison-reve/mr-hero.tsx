import { ArrowRight, Sparkles } from 'lucide-react';

export function MrHero() {
    return (
        <section
            id="accueil"
            className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#e9e3d9] text-[#39352e] dark:bg-[#25221e] dark:text-[#f2ede5]"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/demos/maison-reve/hero_bg.webp')",
                }}
            />

            {/* Light / dark overlays */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(246,243,237,0.96)_0%,rgba(239,233,224,0.88)_45%,rgba(233,227,217,0.48)_100%)] dark:bg-[linear-gradient(90deg,rgba(27,25,22,0.96)_0%,rgba(34,30,26,0.85)_45%,rgba(34,30,26,0.45)_100%)]" />

            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#e9e3d9]/50 via-transparent to-transparent dark:from-[#25221e]/60" />

            {/* Content */}
            <div className="mx-auto w-full max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
                <div className="max-w-3xl">
                    <div className="mb-8 inline-flex items-center gap-3">
                        <Sparkles className="size-4 text-[#a58b68] dark:text-[#c7aa83]" />
                        <span className="text-xs font-semibold tracking-[0.25em] text-[#927b5d] uppercase dark:text-[#c7aa83]">
                            Expertise & Prestige de [Ville]
                        </span>
                    </div>

                    <h1 className="font-cormorant text-5xl leading-[1.08] font-medium tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                        L'art de valoriser
                        <br />
                        votre{' '}
                        <span className="text-[#a58b68] italic dark:text-[#c7aa83]">
                            patrimoine
                        </span>
                    </h1>

                    <div className="mt-8 h-px w-20 bg-[#a58b68]/70 dark:bg-[#c7aa83]/70" />

                    <p className="mt-8 max-w-2xl text-sm leading-8 text-[#625b52] sm:text-base dark:text-[#d0c7ba]">
                        De l'estimation certifiée à la négociation finale, notre
                        agence vous accompagne pour concrétiser vos projets
                        d'achat, de vente ou de location à [Ville] et sa
                        métropole.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#showroom"
                            className="group inline-flex items-center justify-center gap-3 bg-[#a58b68] px-8 py-4 text-xs font-semibold tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#8e7656]"
                        >
                            EXPLORER LE SHOWROOM
                            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>

                        <a
                            href="#estimation"
                            className="group inline-flex items-center justify-center gap-3 border border-[#8e806d]/60 bg-white/20 px-8 py-4 text-xs font-semibold tracking-[0.15em] text-[#51483e] backdrop-blur-sm transition-all duration-300 hover:border-[#a58b68] hover:bg-white/50 dark:border-[#d2c5b3]/50 dark:bg-black/10 dark:text-[#f2ede5] dark:hover:bg-white/10"
                        >
                            ESTIMER EN 2 MINUTES
                            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom decoration */}
            <div className="absolute right-8 bottom-8 hidden items-center gap-3 text-[10px] font-medium tracking-[0.2em] text-[#766e64] uppercase md:flex dark:text-[#c5b9a9]">
                <span className="h-px w-10 bg-current opacity-50" />
                L'immobilier autrement
            </div>
        </section>
    );
}
