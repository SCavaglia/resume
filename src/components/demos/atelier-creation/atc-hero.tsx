import { ArrowRight, Sparkles } from 'lucide-react';

export function AtcHero() {
    return (
        <section
            id="accueil"
            className="overflow-hidden bg-[#F8F5EF] px-6 py-16 text-[#30291F] md:py-24 dark:bg-[#201D18] dark:text-[#F4EDE1]"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                {/* Gauche */}
                <div className="flex flex-col items-start gap-6">
                    <span className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.2em] text-[#9A753D] uppercase">
                        <Sparkles className="size-4" />
                        Fait main en France
                    </span>

                    <h1 className="font-serif text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                        L'authenticité
                        <span className="block text-[#A27B45] italic">
                            faite à la main
                        </span>
                    </h1>

                    <p className="max-w-xl text-base leading-8 text-[#6F665A] sm:text-lg dark:text-[#C6BBAA]">
                        Ébénisterie d'art, céramique tournée main, maroquinerie
                        cousue au point sellier et bijouterie fine forgée à la
                        cheville. Découvrez des objets de caractère chargés
                        d'histoire pour magnifier votre quotidien.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-3">
                        <a
                            href="#collection"
                            className="group inline-flex items-center gap-3 bg-[#30291F] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#9A753D] dark:bg-[#E9DFCE] dark:text-[#30291F] dark:hover:bg-[#C6A46A]"
                        >
                            Découvrir la collection
                            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>

                        <a
                            href="#sur-mesure"
                            className="inline-flex items-center gap-2 border border-[#B9A991] px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-[#9A753D] hover:bg-[#EEE6D9] dark:hover:bg-[#30291F]"
                        >
                            Projet sur-mesure
                        </a>
                    </div>

                    <div className="mt-6 flex items-center gap-4 text-xs tracking-[0.15em] text-[#9A753D] uppercase">
                        <span className="h-px w-10 bg-[#B9A991]" />
                        Des pièces uniques, façonnées avec passion
                    </div>
                </div>

                {/* Droite */}
                <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
                    <div className="absolute -top-5 -right-5 z-10 flex size-16 items-center justify-center rounded-full border border-[#B9A991] bg-[#F8F5EF] text-2xl text-[#9A753D] dark:bg-[#201D18]">
                        ✧
                    </div>

                    <div className="relative overflow-hidden">
                        <img
                            src="/demos/atelier-creation/hero-visual.jpg"
                            alt="Pièce artisanale façonnée à la main dans un atelier"
                            className="aspect-4/5 w-full object-cover object-[right_center]"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                            <p className="font-serif text-3xl italic sm:text-4xl">
                                L'Atelier
                            </p>

                            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs tracking-[0.15em] text-white/90 uppercase sm:text-sm">
                                <span>⟡</span>
                                <span>Matières nobles & Savoir-faire</span>
                                <span>⟡</span>
                            </div>

                            <p className="mt-3 text-sm text-white/75">
                                [Ville], Bretagne
                            </p>
                        </div>
                    </div>

                    <div className="absolute -bottom-4 -left-4 z-0 h-24 w-24 border-b border-l border-[#B9A991]" />
                </div>
            </div>
        </section>
    );
}
