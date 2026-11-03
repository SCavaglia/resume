import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
    {
        question: 'Comment prendre un rendez-vous à NovaSanté ?',
        answer: "Vous pouvez planifier votre consultation directement sur ce site via notre assistant interactif ci-dessous, en choisissant le praticien et le créneau qui vous convient. Vous pouvez également nous contacter par téléphone pendant nos horaires d'ouverture.",
    },
    {
        question:
            'Quels sont les tarifs pratiqués et le taux de remboursement ?',
        answer: "Nos médecins et kinésithérapeutes sont conventionnés et agréés par la Sécurité Sociale (Secteur 1 et Secteur 2). Pour les spécialités comme l'ostéopathie, la diététique ou la psychologie, la Sécurité Sociale ne prend pas en charge l'acte, mais nous vous fournissons une facture détaillée pour un remboursement par votre mutuelle de santé.",
    },
    {
        question: 'Le tiers payant est-il appliqué à la clinique ?',
        answer: 'Oui, pour les actes concernés, nous pratiquons le tiers payant sur la part obligatoire de la Sécurité Sociale. Veuillez présenter votre carte Vitale à jour ainsi que votre carte de mutuelle lors de votre visite.',
    },
    {
        question: 'Proposez-vous des téléconsultations à distance ?',
        answer: 'Oui, les médecins généralistes et la psychologue de notre clinique proposent des téléconsultations à distance. Celles-ci se font sur rendez-vous sécurisé via un lien dédié qui vous sera envoyé par SMS ou par email avant la consultation.',
    },
];

export function NsFaq() {
    return (
        <section id="faq" className="scroll-mt-6 px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-4xl">
                {/* Introduction */}
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                        FAQ
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                        Questions fréquentes
                    </h2>

                    <p className="mt-5 leading-relaxed text-muted-foreground sm:text-lg">
                        Nous répondons à vos interrogations concernant le
                        fonctionnement de notre clinique.
                    </p>
                </div>

                {/* Questions */}
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={faq.question}
                            value={`question-${index + 1}`}
                            className="border-b border-border py-2"
                        >
                            <AccordionTrigger className="gap-4 py-5 text-left text-base font-medium hover:text-primary hover:no-underline sm:text-lg">
                                {faq.question}
                            </AccordionTrigger>

                            <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
