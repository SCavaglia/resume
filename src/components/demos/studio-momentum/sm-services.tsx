import {
    Camera,
    Clapperboard,
    CalendarHeart,
    Music2,
    Flower2,
    Boxes,
    ArrowUpRight,
    Sparkles,
} from 'lucide-react';

const services = [
    {
        number: '01',
        icon: Camera,
        title: "Photographie d'Art",
        description:
            "Reportage éditorial de haute précision. Un travail de la lumière naturelle et de la composition pour capturer l'élégance de chaque instant fugace.",
        tags: ['Reportage', 'Éditorial', 'Portrait'],
    },
    {
        number: '02',
        icon: Clapperboard,
        title: 'Cinéma & Motion',
        description:
            "Films d'auteur captés en format cinéma 4K. Des teasers de lancement captivants et des films de mariage poétiques montés sur-mesure.",
        tags: ['Film 4K', 'Teaser', 'Motion'],
    },
    {
        number: '03',
        icon: CalendarHeart,
        title: 'Wedding Planning',
        description:
            "Coordination rigoureuse et recherche des prestataires d'exception. Conception de la scénographie florale et organisation millimétrée du jour J.",
        tags: ['Coordination', 'Organisation', 'Scénographie'],
    },
    {
        number: '04',
        icon: Music2,
        title: 'DJ & Scénographie Sonore',
        description:
            "Systèmes de sonorisation haut de gamme et invisibles. Direction musicale sur-mesure et sets DJ dynamiques pour une ambiance d'exception.",
        tags: ['DJ', 'Sonorisation', 'Direction musicale'],
    },
    {
        number: '05',
        icon: Flower2,
        title: 'Fleurs & Scénographie',
        description:
            "Design floral monumental, création d'ambiances lumineuses délicates et agencement mobilier stylisé pour transcender vos espaces de réception.",
        tags: ['Design floral', 'Décoration', 'Lumière'],
    },
    {
        number: '06',
        icon: Boxes,
        title: "Logistique d'Événements",
        description:
            'Location de structures, sonorisation de grande échelle, lumières architecturales extérieures et coordination des flux techniques de prestataires.',
        tags: ['Technique', 'Structures', 'Coordination'],
    },
];

export function SmServices() {
    return (
        <section
            id="services"
            className="scroll-mt-6 relative isolate overflow-hidden bg-[#f5f1e8] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-[#171613]"
        >
            {/* Ambiance dorée */}
            <div className="pointer-events-none absolute top-20 -left-40 h-96 w-96 rounded-full bg-[#c49a45]/10 blur-[120px] dark:bg-[#c49a45]/10" />
            <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#e5c982]/20 blur-[120px] dark:bg-[#a98235]/10" />

            <div className="relative mx-auto max-w-7xl">
                {/* En-tête */}
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#b58a35]/40 bg-[#e9d7aa]/30 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#80601e] uppercase dark:border-[#c5a04e]/40 dark:bg-[#c5a04e]/10 dark:text-[#e2c47f]">
                        <Sparkles className="h-4 w-4" />
                        Prestations d'Élite
                    </span>

                    <h2 className="mt-6 font-cormorant text-4xl font-semibold text-[#29251e] sm:text-5xl lg:text-6xl dark:text-[#f5f0e5]">
                        Nos Services
                    </h2>

                    <div className="mt-5 flex items-center justify-center gap-3 text-[#b58a35] dark:text-[#c5a04e]">
                        <span className="h-px w-12 bg-current" />
                        <span>✦</span>
                        <span className="h-px w-12 bg-current" />
                    </div>

                    <p className="mt-5 text-base leading-relaxed text-[#6e675b] sm:text-lg dark:text-[#c0b8a8]">
                        Des compétences unifiées pour garantir la perfection
                        artistique de votre projet.
                    </p>
                </div>

                {/* Cartes */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.number}
                                className="group relative isolate overflow-hidden rounded-2xl border border-[#e2d8c5] bg-[#fffdf8] p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#c5a04e]/70 hover:shadow-[0_20px_55px_-18px_rgba(167,123,39,0.28)] sm:p-8 dark:border-[#49402f] dark:bg-[#211e19] dark:hover:border-[#c5a04e]/60 dark:hover:shadow-[0_20px_55px_-18px_rgba(197,160,78,0.18)]"
                            >
                                {/* Reflet doré animé */}
                                <div className="pointer-events-none absolute -inset-y-full -left-1/2 z-0 w-1/2 rotate-[25deg] bg-gradient-to-r from-transparent via-[#d9b65e]/25 to-transparent opacity-0 blur-md transition-all duration-1000 ease-in-out group-hover:left-[150%] group-hover:opacity-100" />

                                {/* Halo intérieur */}
                                <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-[#e6ca82]/0 via-transparent to-[#c49a45]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#e6ca82]/10 group-hover:to-[#c49a45]/5 group-hover:opacity-100 dark:group-hover:from-[#c49a45]/10 dark:group-hover:to-[#c49a45]/5" />

                                <div className="relative z-10">
                                    {/* Numéro + icône */}
                                    <div className="mb-8 flex items-start justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d9c69d] bg-gradient-to-br from-[#f7efd9] to-[#e9d7aa]/60 text-[#92702d] shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#b58a35] group-hover:from-[#e7cb83] group-hover:to-[#c49a45] group-hover:text-[#382a12] group-hover:shadow-[0_8px_25px_rgba(167,123,39,0.3)] dark:border-[#67542f] dark:from-[#393020] dark:to-[#302719] dark:text-[#dfbd70] dark:group-hover:border-[#c5a04e] dark:group-hover:from-[#c5a04e] dark:group-hover:to-[#98712e] dark:group-hover:text-[#211b10]">
                                            <Icon className="h-6 w-6 transition-transform duration-500 group-hover:rotate-[-8deg]" />
                                        </div>

                                        <span className="font-cormorant text-2xl font-semibold text-[#c2ae82]/70 transition-colors duration-500 group-hover:text-[#a77b27] dark:text-[#78643e] dark:group-hover:text-[#dfbd70]">
                                            {service.number}
                                        </span>
                                    </div>

                                    {/* Texte */}
                                    <h3 className="font-cormorant text-3xl font-semibold text-[#302a20] transition-colors duration-300 group-hover:text-[#8d6827] dark:text-[#f0e8d8] dark:group-hover:text-[#dfbd70]">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 min-h-[112px] text-sm leading-7 text-[#746b5d] dark:text-[#bcb09e]">
                                        {service.description}
                                    </p>

                                    {/* Séparateur */}
                                    <div className="my-6 h-px w-full bg-gradient-to-r from-[#b58a35]/50 via-[#b58a35]/15 to-transparent transition-all duration-500 group-hover:from-[#a77b27] group-hover:via-[#c5a04e]/50 dark:from-[#8b713e]/50 dark:group-hover:from-[#c5a04e]" />

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-[#e3d8c2] bg-[#f8f4eb] px-3 py-1.5 text-[10px] font-medium tracking-wider text-[#81704f] uppercase transition-colors duration-300 group-hover:border-[#c5a04e]/40 group-hover:bg-[#f3ead6] group-hover:text-[#80601e] dark:border-[#514630] dark:bg-[#2b271e] dark:text-[#b9a77e] dark:group-hover:border-[#c5a04e]/40 dark:group-hover:bg-[#393020] dark:group-hover:text-[#dfbd70]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Petit détail décoratif */}
                                    <div className="absolute right-0 bottom-0 flex h-9 w-9 translate-x-2 translate-y-2 items-center justify-center rounded-full border border-[#c5a04e]/0 text-[#a77b27]/0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:border-[#c5a04e]/40 group-hover:text-[#a77b27] dark:group-hover:text-[#dfbd70]">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Signature */}
                <div className="mt-14 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.2em] text-[#9a8253] uppercase dark:text-[#bba36e]">
                    <span className="h-px w-10 bg-current" />
                    Une direction artistique, mille possibilités
                    <span className="h-px w-10 bg-current" />
                </div>
            </div>
        </section>
    );
}
