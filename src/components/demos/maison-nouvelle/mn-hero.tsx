import { ArrowRight } from 'lucide-react';

export function MnHero() {
    return (
        <section
            id="accueil"
            className="relative overflow-hidden bg-[linear-gradient(135deg,rgb(246,243,238)_0%,rgb(232,226,217)_50%,rgb(220,212,199)_100%)] text-[#29251f] dark:bg-[linear-gradient(135deg,rgb(35,32,28)_0%,rgb(28,25,22)_50%,rgb(19,18,16)_100%)] dark:text-[#f3eee6]"
        >
            <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
                {/* Texte */}
                <div className="relative z-10 flex flex-col items-start">
                    <div className="mb-7 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#bfa888]" />
                        <span className="text-xs font-medium tracking-[0.25em] text-[#9c8263] uppercase dark:text-[#c7aa83]">
                            Nouvelle collection
                        </span>
                    </div>

                    <h1 className="font-cormorant text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl lg:text-7xl">
                        Nouvelle Collection
                        <br />
                        <span className="italic">Éthique</span>
                    </h1>

                    <p className="mt-6 font-cormorant text-2xl text-[#9c8263] italic sm:text-3xl dark:text-[#c7aa83]">
                        Le raffinement dans la simplicité
                    </p>

                    <p className="mt-7 max-w-lg text-sm leading-8 text-[#625b52] sm:text-base dark:text-[#c3bcb2]">
                        Découvrez notre vestiaire singulier et nos pièces
                        intemporelles de créateurs français. Des matières
                        naturelles nobles, une fabrication éthique et locale
                        pour un style d'une élégance durable.
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#catalogue"
                            className="group inline-flex items-center justify-center gap-3 bg-[#bfa888] px-7 py-4 text-xs font-semibold tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#a99070]"
                        >
                            EXPLORER LE CATALOGUE
                            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>

                        <a
                            href="#disponibilite"
                            className="group inline-flex items-center justify-center gap-3 border border-[#8c8173]/70 px-7 py-4 text-xs font-semibold tracking-[0.15em] text-[#51483e] transition-all duration-300 hover:border-[#bfa888] hover:bg-[#bfa888]/10 dark:border-[#a99b88]/60 dark:text-[#e5ddd1] dark:hover:border-[#c7aa83] dark:hover:bg-[#c7aa83]/10"
                        >
                            VÉRIFIER EN BOUTIQUE
                            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[560px]">
                    <img
                        src="/demos/maison-nouvelle/hero-visual.jpg"
                        alt="Collection de vêtements élégants aux matières naturelles"
                        className="absolute inset-0 size-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

                    <div className="absolute right-5 bottom-5 border border-white/50 bg-black/20 px-5 py-3 text-xs tracking-[0.2em] text-white backdrop-blur-sm">
                        L'ÉLÉGANCE DURABLE
                    </div>
                </div>
            </div>
        </section>
    );
}
