import { ArrowRight, Maximize2, Users } from 'lucide-react';

const accommodations = [
    {
        name: 'La Chambre Lavande',
        subtitle: 'Chambre double',
        details: '25 m² • Terrasse Privée',
        description:
            'Idéale pour un couple. Lit King Size, salle d’eau en travertin et terrasse privative ombragée par une tonnelle de jasmin odorant.',
        price: 120,
        image: '/demos/echappee-belle/chambre-lavande.webp',
        alt: 'La Chambre Lavande, chambre de charme au Domaine des Sources à Gordes',
        guests: '2 personnes',
    },
    {
        name: 'La Suite des Vignes',
        subtitle: 'Suite Junior',
        details: '45 m² • Vue Piscine',
        description:
            'Spacieuse et lumineuse. Salon de lecture avec cheminée d’époque, baignoire îlot en travertin et vue panoramique sur les monts du Luberon.',
        price: 180,
        image: '/demos/echappee-belle/suite-vignes.webp',
        alt: 'La Suite des Vignes, suite de prestige au Domaine des Sources à Gordes',
        guests: '2 personnes',
    },
    {
        name: 'Le Mas Provençal',
        subtitle: 'Gîte d’exception',
        details: '110 m² • Jardin Privé',
        description:
            'Maison en pierre indépendante pour 4 personnes. Cuisine provençale équipée, grand salon voûté, terrasse avec pergola et bassin de fraîcheur exclusif.',
        price: 350,
        image: '/demos/echappee-belle/mas-provencal.webp',
        alt: 'Le Mas Provençal, gîte indépendant au Domaine des Sources à Gordes',
        guests: '4 personnes',
    },
];

export function EbAccommodations() {
    return (
        <section
            id="hebergements"
            className="scroll-mt-24 bg-[rgb(250,248,245)] px-6 py-20 text-[rgb(35,39,32)] sm:px-10 lg:py-28 dark:bg-[#1e211b] dark:text-[#f0ece3]"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-4 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.25em] text-[rgb(201,157,99)] uppercase">
                        <span className="h-px w-8 bg-[rgb(201,157,99)]" />
                        Hébergements de Charme
                        <span className="h-px w-8 bg-[rgb(201,157,99)]" />
                    </p>

                    <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
                        Nos suites{' '}
                        <span className="text-[rgb(74,87,64)] italic dark:text-[#a2b095]">
                            &amp; Gîtes
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                        Des espaces d'exception alliant le charme de la pierre
                        ancienne au confort contemporain.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {accommodations.map((accommodation) => (
                        <article
                            key={accommodation.name}
                            className="group flex h-full flex-col overflow-hidden border border-[#DED8CC] bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#30291F]/5 dark:border-[#414438] dark:bg-[#292c24]"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={accommodation.image}
                                    alt={accommodation.alt}
                                    loading="lazy"
                                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute top-4 right-4 bg-[rgb(250,248,245)]/95 px-4 py-2 backdrop-blur-sm dark:bg-[#1e211b]/95">
                                    <span className="font-serif text-xl text-[rgb(74,87,64)] dark:text-[#c3cbb8]">
                                        {accommodation.price} €
                                    </span>
                                    <span className="ml-1 text-xs text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                        / nuit
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col p-6 sm:p-7">
                                <p className="text-xs font-medium tracking-[0.16em] text-[rgb(201,157,99)] uppercase">
                                    {accommodation.subtitle}
                                </p>

                                <h3 className="mt-2 font-serif text-2xl">
                                    {accommodation.name}
                                </h3>

                                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                    <span className="inline-flex items-center gap-1.5">
                                        <Maximize2 className="size-3.5 text-[rgb(201,157,99)]" />
                                        {accommodation.details}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <Users className="size-3.5 text-[rgb(201,157,99)]" />
                                        {accommodation.guests}
                                    </span>
                                </div>

                                <p className="mt-5 flex-1 text-sm leading-7 text-[rgb(110,116,104)] dark:text-[#b5b7aa]">
                                    {accommodation.description}
                                </p>

                                <a
                                    href="#reservation"
                                    className="group/link mt-7 inline-flex items-center justify-between border-t border-[#DED8CC] pt-5 text-sm font-medium text-[rgb(74,87,64)] transition-colors hover:text-[rgb(201,157,99)] dark:border-[#414438] dark:text-[#c3cbb8] dark:hover:text-[#c99d63]"
                                >
                                    Estimer le séjour
                                    <ArrowRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
