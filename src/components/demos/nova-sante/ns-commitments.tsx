import { BadgeCheck, HeartHandshake, ShieldCheck, Wallet } from 'lucide-react';

const commitments = [
    {
        icon: BadgeCheck,
        title: 'Agrément ARS & CPAM',
        description:
            "Tous nos praticiens sont enregistrés auprès de l'Agence Régionale de Santé (ARS) et conventionnés secteur 1 ou 2.",
    },
    {
        icon: ShieldCheck,
        title: 'Dossier Médical Sécurisé',
        description:
            'Respect strict du secret médical et du RGPD. Vos dossiers patients sont stockés sur un hébergeur certifié HDS.',
    },
    {
        icon: Wallet,
        title: 'Tiers Payant Accepté',
        description:
            'Prise en charge directe de la part obligatoire Sécurité Sociale et mutuelles partenaires pour limiter vos avances de frais.',
    },
];

export function NsCommitments() {
    return (
        <section id="engagements" className="px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl gap-12">
                {/* Partie gauche : Introduction */}
                <div className="flex flex-col items-center gap-5">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <HeartHandshake className="size-6" aria-hidden="true" />
                    </div>

                    <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                        Nos Engagements
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Une structure de santé engagée
                    </h2>

                    <p className="max-w-lg text-center leading-relaxed text-muted-foreground">
                        Nous assurons des soins éthiques et professionnels
                        conformes aux exigences ordinales.
                    </p>
                </div>

                {/* Partie droite : Engagements */}
                <div className="flex flex-col md:flex-row">
                    {commitments.map((commitment) => {
                        const Icon = commitment.icon;

                        return (
                            <article
                                key={commitment.title}
                                className="flex flex-col items-center gap-5 py-6"
                            >
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Icon
                                        className="size-5"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-center text-lg font-semibold">
                                        {commitment.title}
                                    </h3>

                                    <p className="text-center text-xs leading-relaxed text-balance text-muted-foreground sm:text-base lg:mx-4">
                                        {commitment.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
