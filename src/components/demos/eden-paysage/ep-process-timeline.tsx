import {
    Check,
    ClipboardList,
    DraftingCompass,
    Shovel,
    Sprout,
} from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Consultation & Étude sur place',
        description:
            "Nous nous déplaçons chez vous à [Ville] pour comprendre vos envies, étudier l'ensoleillement et l'architecture globale.",
        details: [
            'Visite conseil de 2h par un paysagiste/architecte',
            'Écoute active de votre cahier des charges',
            'Première analyse technique de faisabilité',
        ],
        icon: ClipboardList,
    },
    {
        number: '02',
        title: 'Modélisation 3D & Plans',
        description:
            'Nos concepteurs réalisent des visuels 3D et des plans détaillés pour vous aider à vous projeter.',
        details: [
            'Perspectives 3D photoréalistes sous 2 semaines',
            "Sélection complète d'échantillons de matériaux",
            'Chiffrage exact et transparent à la ligne',
        ],
        icon: DraftingCompass,
    },
    {
        number: '03',
        title: 'Chantier & Suivi expert',
        description:
            'Nos paysagistes réalisent votre projet avec rigueur, accompagnés par un conducteur de travaux dédié.',
        details: [
            'Approvisionnements et engins adaptés à la ville',
            'Réunion de chantier hebdomadaire avec photos',
            'Respect des normes environnementales et de voisinage',
        ],
        icon: Shovel,
    },
    {
        number: '04',
        title: 'Réception & Accompagnement',
        description:
            'Nous réceptionnons le chantier avec vous et vous conseillons pour préserver votre jardin dans le temps.',
        details: [
            'Signature du procès-verbal de fin de travaux',
            "Conseils personnalisés pour l'entretien",
            'Accompagnement après la livraison',
        ],
        icon: Sprout,
    },
];

export function EpProcessTimeline() {
    return (
        <section id="methode" className="px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                        Notre méthode
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                        Votre projet de A à Z
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                        De la première rencontre à la livraison, nous vous
                        accompagnons à chaque étape de votre projet paysager.
                    </p>
                </div>

                <div className="relative">
                    {/* Ligne centrale */}
                    <div className="absolute top-0 bottom-0 left-5 w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />

                    <div className="space-y-12 sm:space-y-16">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={step.number}
                                    className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-5 sm:grid-cols-2 sm:gap-12"
                                >
                                    {/* Point sur la ligne */}
                                    <div className="absolute top-7 left-5 z-10 flex size-9 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground sm:left-1/2">
                                        <span className="text-xs font-bold">
                                            {index + 1}
                                        </span>
                                    </div>

                                    {/* Carte : alternance gauche / droite */}
                                    <div
                                        className={`col-start-2 min-w-0 ${
                                            isLeft
                                                ? 'sm:col-start-1 sm:row-start-1 sm:pr-2'
                                                : 'sm:col-start-2 sm:row-start-1 sm:pl-2'
                                        }`}
                                    >
                                        <article className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:p-7">
                                            <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <Icon
                                                    className="size-6"
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <p className="mb-2 text-sm font-semibold tracking-widest text-primary uppercase">
                                                Étape {step.number}
                                            </p>

                                            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                                                {step.title}
                                            </h3>

                                            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                                {step.description}
                                            </p>

                                            <ul className="mt-6 space-y-3">
                                                {step.details.map((detail) => (
                                                    <li
                                                        key={detail}
                                                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                                                    >
                                                        <Check
                                                            className="mt-0.5 size-4 shrink-0 text-primary"
                                                            aria-hidden="true"
                                                        />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </article>
                                    </div>

                                    {/* Espace opposé à la carte sur desktop */}
                                    <div
                                        aria-hidden="true"
                                        className={`hidden sm:block ${
                                            isLeft
                                                ? 'sm:col-start-2 sm:row-start-1'
                                                : 'sm:col-start-1 sm:row-start-1'
                                        }`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
