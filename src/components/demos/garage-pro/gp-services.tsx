import {
    ArrowUpRight,
    CarFront,
    ClipboardCheck,
    Paintbrush,
    Sparkles,
    Truck,
    Wrench,
} from 'lucide-react';

const services = [
    {
        icon: Wrench,
        title: 'Mécanique Générale',
        description:
            'Entretien courant, révisions périodiques, freinage, kit embrayage, remplacement de courroie de distribution et géométrie des trains roulants.',
    },
    {
        icon: Paintbrush,
        title: 'Carrosserie & Peinture',
        description:
            'Débosselage sans peinture (DSP) pour impacts de grêle, réparation de tôlerie après collision, peinture en cabine et rénovation des optiques de phares.',
    },
    {
        icon: CarFront,
        title: 'Pneumatiques & Géométrie',
        description:
            'Vente et montage de pneumatiques été, hiver ou 4 saisons toutes marques. Équilibrage des roues et parallélisme électronique 3D.',
    },
    {
        icon: ClipboardCheck,
        title: 'Pré-contrôle & Passage CT',
        description:
            'Diagnostic pré-contrôle technique gratuit. Nous emmenons nous-mêmes votre véhicule dans notre centre partenaire agréé pour sa validation.',
    },
    {
        icon: Sparkles,
        title: 'Detailing & Lavage Pro',
        description:
            'Nettoyage en profondeur intérieur/extérieur, shampouinage des sièges, traitement cuir, lustrage de carrosserie et traitement céramique longue durée.',
    },
    {
        icon: Truck,
        title: 'Dépannage & Assistance 24/7',
        description:
            'Remorquage rapide en cas de panne de batterie, crevaison ou accident dans toute l’agglomération de [Ville]. Intervention sous 35 minutes.',
    },
];

type GpServicesProps = {
    className?: string;
};

export function GpServices({ className }: GpServicesProps) {
    return (
        <section
            id="services"
            className={`relative overflow-hidden bg-[#f4f5f7] px-6 py-24 transition-colors duration-300 dark:bg-[#0f1115] ${className ?? ''}`}
        >
            {/* Décoration d'arrière-plan */}
            <div className="pointer-events-none absolute top-20 -right-40 size-96 rounded-full bg-[#e63946]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* En-tête */}
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#e63946] uppercase">
                        <span className="h-px w-7 bg-[#e63946]" />
                        Notre expertise
                        <span className="h-px w-7 bg-[#e63946]" />
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight text-[#0f1115] sm:text-4xl lg:text-5xl dark:text-white">
                        Nos prestations{' '}
                        <span className="text-[#e63946]">Atelier</span>
                    </h2>

                    <p className="mt-5 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                        De l’entretien courant aux réparations les plus
                        complexes, notre équipe prend soin de votre véhicule
                        avec exigence et savoir-faire.
                    </p>
                </div>

                {/* Cartes */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                className="group relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#e63946]/40 hover:shadow-xl hover:shadow-[#e63946]/10 dark:border-white/10 dark:bg-[#191c22] dark:hover:border-[#e63946]/50"
                            >
                                {/* Numéro décoratif */}
                                <span className="absolute top-5 right-6 text-5xl font-black text-neutral-100 transition-colors duration-300 group-hover:text-[#e63946]/10 dark:text-white/[0.035] dark:group-hover:text-[#e63946]/10">
                                    0{index + 1}
                                </span>

                                {/* Icône */}
                                <div className="relative mb-7 flex size-14 items-center justify-center rounded-xl bg-[#e63946]/10 text-[#e63946] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e63946] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#e63946]/25">
                                    <Icon size={26} strokeWidth={1.8} />
                                </div>

                                <h3 className="mb-3 text-xl font-bold text-[#17191e] transition-colors duration-300 group-hover:text-[#e63946] dark:text-white">
                                    {service.title}
                                </h3>

                                <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                                    {service.description}
                                </p>

                                {/* Indicateur de survol */}
                                <div className="mt-6 flex items-center justify-between">
                                    <span className="h-1 w-10 rounded-full bg-[#e63946] transition-all duration-300 group-hover:w-20" />

                                    <ArrowUpRight
                                        size={20}
                                        className="text-neutral-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#e63946] dark:text-neutral-600"
                                    />
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
