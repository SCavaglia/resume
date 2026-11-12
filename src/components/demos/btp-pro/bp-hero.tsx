import { Phone, ShieldCheck } from "lucide-react";

export function BpHero() {
    return (
        <section id="accueil" className="scroll-mt-24 relative overflow-hidden">

            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-950" />
            {/* Image de fond */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20 blur-[1px]"
                style={{ backgroundImage: "url('/resume/batitop/hero_bg.jpg')" }}
            />

            {/* Dégradé inférieur */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-0% via-transparent via-90% to-background to-100%" />

            <div className="relative container mx-auto px-4 py-24 lg:py-32">
                <div className="relative flex flex-col items-center justify-center gap-12 lg:flex-row">
                    {/* Contenu principal */}
                    <div className="max-w-lg lg:pb-24">
                        <div className="mx-auto -mt-4 mb-4 flex w-fit items-center gap-2 border border-[color-mix(in_srgb,var(--primary-without-black)_50%,white)] px-3 py-1 font-semibold text-[color-mix(in_srgb,var(--primary-without-black)_50%,white)] uppercase lg:mx-0">
                            <ShieldCheck className="size-5" />
                            Artisans Référencés RGE / Qualibat
                        </div>

                        <h1 className="text-center text-4xl leading-14 font-bold text-white uppercase sm:text-5xl lg:text-left">
                            Artisans d’excellence pour vos travaux de rénovation
                        </h1>

                        <p className="my-4 text-center font-cabin text-base leading-7 text-neutral-200 lg:pr-20 lg:pl-2 lg:text-left">
                            Rénovation intérieure, plomberie technique, électricité générale et maçonnerie à [Ville]. Nous
                            concrétisons vos projets avec rigueur, dans le respect des délais et du budget.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-wrap justify-center gap-10 pt-8 lg:justify-start">
                            <a
                                href="#simulateur"
                                className="bg-primary-without-white p-6 rounded-xl text-xl font-semibold text-white uppercase transition-all duration-300 ease-in hover:-translate-y-1 hover:text-black hover:bg-white hover:shadow-lg"
                            >
                                Calculer mon devis
                            </a>

                            <a
                                href="#avant-apres"
                                className="border border-input bg-background p-6 rounded-xl text-xl uppercase font-semibold transition-all duration-300 ease-in hover:-translate-y-1 hover:gap-3 hover:border-white hover:bg-primary/5 hover:text-background hover:backdrop-blur-sm dark:hover:text-white"
                            >
                                Voir nos chantiers
                            </a>

                            <a
                                href="#contact"
                                className="animate-grow-neon bg-red-700 px-14 py-6 rounded-xl text-xl font-semibold text-white uppercase transition-all duration-300 hover:bg-red-500/80 hover:text-white"
                            >
                                <Phone className="mr-2 inline-block size-5" />
                                Dépannage 24h/24
                            </a>
                        </div>
                    </div>

                    {/* Statistiques */}
                    <div className="mt-12 p-8 self-start rounded-2xl border-muted-foreground/30 bg-white/1 pl-6 shadow-xl backdrop-blur-md lg:mt-12">
                        <div className="flex flex-row flex-wrap gap-6 lg:flex-col">
                            <div className="border-l-4 border-primary-without-black pr-12 pl-4 text-left text-primary-without-black">
                                <p className="text-2xl font-bold tracking-tight sm:text-3xl">15+</p>
                                <p className="mt-1 leading-5 tracking-wide text-secondary dark:text-secondary-foreground">
                                    Années d'expérience
                                </p>
                            </div>

                            <div className="border-l-4 border-primary-without-black pr-12 pl-4 text-left text-primary-without-black">
                                <p className="text-2xl font-bold tracking-tight sm:text-3xl">450+</p>
                                <p className="mt-1 leading-5 tracking-wide text-secondary dark:text-secondary-foreground">
                                    Chantiers livrés
                                </p>
                            </div>

                            <div className="border-l-4 border-primary-without-black pr-12 pl-4 text-left text-primary-without-black">
                                <p className="text-2xl font-bold tracking-tight sm:text-3xl">10 ans</p>
                                <p className="mt-1 leading-5 tracking-wide text-secondary dark:text-secondary-foreground">
                                    Garantie Décennale
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}