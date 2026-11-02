import {
    BadgeCheck,
    Banknote,
    CalendarCheck,
    ClipboardCheck,
} from 'lucide-react';

const guarantees = [
    {
        icon: BadgeCheck,
        title: 'Intervenants Qualifiés',
        description:
            'Tous nos auxiliaires sont recrutés sur diplôme et expérience, formés en continu et soumis à un contrôle de casier judiciaire.',
    },
    {
        icon: Banknote,
        title: 'Avantage Fiscal de 50%',
        description:
            'Grâce à notre agrément SAP, vous déduisez 50% du montant de vos factures de vos impôts. Avance immédiate disponible.',
    },
    {
        icon: CalendarCheck,
        title: 'Flexibilité Totale',
        description:
            "Sans aucun engagement de durée. Vous pouvez suspendre, décaler ou annuler une prestation par simple appel téléphonique 48h à l'avance.",
    },
    {
        icon: ClipboardCheck,
        title: 'Télégestion & Suivi',
        description:
            'Notre application vous donne accès au planning de vos intervenants, à la télégestion de présence et à vos factures mensuelles.',
    },
];

export function AcWarranty() {
    return (
        <section className="bg-sky-50/70 px-6 py-20 md:py-24 dark:bg-sky-950/20">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Vos Garanties Sérénité
                    </h2>

                    <p className="mt-4 leading-7 text-muted-foreground">
                        Choisir Aide & Confort, c'est l'assurance d'un service
                        encadré d'une fiabilité totale pour simplifier votre
                        quotidien.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {guarantees.map(({ icon: Icon, title, description }) => (
                        <article
                            key={title}
                            className="rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                                <Icon className="size-6" strokeWidth={1.8} />
                            </div>

                            <h3 className="font-semibold">{title}</h3>

                            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                {description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
