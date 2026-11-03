import { ShieldCheck, Clock, Sprout } from 'lucide-react';

const faqs = [
    {
        icon: Clock,
        question: 'Quels sont vos délais pour la modélisation 3D ?',
        answer: 'Après notre premier rendez-vous sur place à [Ville] et la validation de votre cahier des charges, nos concepteurs dessinent vos plans 3D sous 10 à 15 jours ouvrés.',
    },
    {
        icon: ShieldCheck,
        question: "Les travaux d'aménagement sont-ils garantis ?",
        answer: "Oui, l'intégralité de nos ouvrages de maçonnerie paysagère (terrasses béton, murets de soutènement, dalles) et menuiseries est couverte par notre garantie décennale SMABTP.",
    },
    {
        icon: Sprout,
        question: "Prenez-vous en charge l'entretien annuel ?",
        answer: "Nous proposons des contrats d'entretien de jardin annuels ou saisonniers (taille de haies, entretien de pelouse, débroussaillage) éligibles au crédit d'impôt service à la personne.",
    },
];

export function EpFaqWarranty() {
    return (
        <section id="faq" className="scroll-mt-24 px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                        Vos garanties
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Questions fréquentes & garanties
                    </h2>
                </div>

                <div className="flex flex-col gap-6 lg:flex-row">
                    {faqs.map((faq) => {
                        const Icon = faq.icon;

                        return (
                            <article
                                key={faq.question}
                                className="flex min-w-0 flex-1 flex-col rounded-2xl border border-border bg-card p-6 sm:p-8 lg:min-w-[280px]"
                            >
                                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Icon
                                        className="size-6"
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3 className="text-lg leading-snug font-semibold">
                                    {faq.question}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                                    {faq.answer}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
