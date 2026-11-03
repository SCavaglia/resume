import { BpLocationChecker } from "./bp-location-checker";

export function BpLocation() {
    return (
        <section id="zone-intervention" className="scroll-mt-24 py-20">
            <div className="mx-auto max-w-7xl px-4">
                {/* Titre principal */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
                        Nous intervenons près de chez vous
                    </h2>

                    <div className="mx-auto mt-3 h-1 w-20 bg-primary" />
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
                    {/* Informations et vérification */}
                    <div className="lg:col-start-1 lg:row-start-1">
                        <div className="ml-0 sm:ml-8 lg:ml-0">
                            <p className="w-fit border border-primary bg-secondary p-2 text-sm font-semibold tracking-wider text-primary uppercase">
                                Proximité [Ville]
                            </p>

                            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-balance uppercase">
                                Où travaillons-nous ?
                            </h3>

                            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                                Basée à [Ville], l'entreprise BTP PRO intervient au quotidien dans un périmètre de
                                25 kilomètres couvrant la ville de [Ville] et l'ensemble des 25 communes de
                                l'agglomération (Tinqueux, Cormontreuil, Bezannes, Bétheny, Saint-Brice-Courcelles...).
                            </p>
                        </div>
                    </div>

                    {/* Vérification de la zone */}
                    <BpLocationChecker />

                    {/* Carte géographique */}
                    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border md:max-w-xl lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-100">
                        <img
                            src="/demos/batitop/location_light.png"
                            alt="Carte de la zone d'intervention autour de [Ville]"
                            className="block h-full w-full object-fill opacity-50"
                        />

                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-primary/15"
                        >
                            <div />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
