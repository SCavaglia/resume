import { useState } from 'react';
import { ChevronDown, Flower2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
    {
        question:
            "Sous combien de temps livrez-vous les photos et le film de l'événement ?",
        answer: "Afin de garantir une qualité esthétique irréprochable et un travail chromatique minutieux, nos clichés photographiques HD retouchés sont livrés dans un délai de 4 à 6 semaines via une galerie sécurisée et un coffret d'art en bois. Les films et teasers cinématiques sont quant à eux livrés sous 8 à 10 semaines.",
    },
    {
        question:
            'Que se passe-t-il si un appareil tombe en panne ou si un artiste est malade ?',
        answer: "Le travail en collectif est notre plus grande force. Tous nos artistes doublent systématiquement leur matériel sur place (boîtiers photos, objectifs, régie son, microphones) et enregistrent sur double carte mémoire. En cas de force majeure ou de maladie d'un intervenant attitré, un autre artiste équivalent du collectif est dépêché en doublure immédiate sans surcoût.",
    },
    {
        question:
            'Comment prévoyez-vous la météo pour les décorations florales extérieures ?',
        answer: "Pour chaque scénographie et aménagement extérieur (cérémonie laïque, dîner plein air), nous concevons dès la phase d'étude un plan de repli technique (Plan B) en intérieur ou sous tente nomade en accord avec les gestionnaires de votre domaine. Nos structures décoratives florales sont lestées et consolidées pour parer aux coups de vent.",
    },
    {
        question:
            'Quels sont les termes de facturation et les échéances de paiement ?',
        answer: "Pour sécuriser la date de votre événement avec nos prestataires artistiques, un acompte d'engagement de 40% est demandé à la signature du devis. Le solde restant (60%) est à régulariser au plus tard 15 jours avant la date de début de l'événement. Un paiement échelonné peut être mis en place sur demande lors du rendez-vous d'étude.",
    },
    {
        question: "L'agence dispose-t-elle d'assurances professionnelles ?",
        answer: "Oui. Moment Studio et l'ensemble de ses artistes affiliés disposent d'assurances Responsabilité Civile Professionnelle (RC Pro) à hauteur de couverture de grande échelle, requises pour intervenir dans tous les grands monuments historiques de prestige, châteaux et espaces de réception européens.",
    },
];

export function SmFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className="relative isolate overflow-hidden bg-[#f7f5ef] px-6 py-24 sm:px-10 lg:py-32 dark:bg-[#171613]"
        >
            {/* Décorations */}
            <div className="pointer-events-none absolute top-20 -left-40 -z-10 size-96 rounded-full bg-[#c5a04e]/10 blur-[110px] dark:bg-[#c5a04e]/8" />
            <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 size-96 rounded-full bg-[#c5a04e]/10 blur-[110px] dark:bg-[#c5a04e]/8" />

            <div className="mx-auto max-w-7xl">
                {/* En-tête */}
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c5a04e]/30 bg-[#c5a04e]/10 px-4 py-2">
                        <Sparkles className="size-3.5 text-[#a77b27]" />
                        <span className="text-[10px] font-semibold tracking-[0.22em] text-[#967021] uppercase dark:text-[#d6b76d]">
                            Des réponses précises
                        </span>
                    </div>

                    <h2 className="font-cormorant text-4xl font-medium tracking-tight text-[#29251e] sm:text-5xl lg:text-6xl dark:text-[#f5f0e6]">
                        Questions{' '}
                        <span className="text-[#a77b27] dark:text-[#c5a04e]">
                            d'Hôtes
                        </span>
                    </h2>

                    <div className="my-6 flex items-center justify-center gap-3">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c5a04e]" />
                        <Flower2 className="size-4 text-[#b18a3c]" />
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c5a04e]" />
                    </div>

                    <p className="text-sm leading-7 text-[#777166] sm:text-base dark:text-[#aaa397]">
                        Consultez les réponses apportées par notre collectif
                        pour organiser votre événement en toute sérénité.
                    </p>
                </div>

                {/* FAQ */}
                <div className="mx-auto max-w-4xl space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className={cn(
                                    'group overflow-hidden rounded-2xl border bg-white/70 transition-all duration-300 dark:bg-[#211f1a]/80',
                                    isOpen
                                        ? 'border-[#c5a04e]/50 shadow-[0_12px_40px_-20px_rgba(167,123,39,0.25)]'
                                        : 'border-[#d9d2c3]/60 hover:border-[#c5a04e]/40 dark:border-white/10',
                                )}
                            >
                                <button
                                    type="button"
                                    aria-expanded={isOpen}
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="flex w-full items-center gap-5 px-6 py-6 text-left sm:px-8"
                                >
                                    <span
                                        className={cn(
                                            'hidden shrink-0 font-cormorant text-2xl transition-colors sm:block',
                                            isOpen
                                                ? 'text-[#a77b27]'
                                                : 'text-[#b9b1a2] dark:text-[#777064]',
                                        )}
                                    >
                                        0{index + 1}
                                    </span>

                                    <span
                                        className={cn(
                                            'flex-1 text-sm leading-6 font-medium transition-colors sm:text-base',
                                            isOpen
                                                ? 'text-[#8f6823] dark:text-[#d6b76d]'
                                                : 'text-[#39352e] group-hover:text-[#8f6823] dark:text-[#eee9df] dark:group-hover:text-[#d6b76d]',
                                        )}
                                    >
                                        {faq.question}
                                    </span>

                                    <span
                                        className={cn(
                                            'flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                                            isOpen
                                                ? 'rotate-180 border-[#c5a04e] bg-[#c5a04e] text-white'
                                                : 'border-[#d9d2c3] text-[#a77b27] group-hover:border-[#c5a04e] dark:border-white/15',
                                        )}
                                    >
                                        <ChevronDown className="size-4" />
                                    </span>
                                </button>

                                <div
                                    className={cn(
                                        'grid transition-[grid-template-rows] duration-300 ease-in-out',
                                        isOpen
                                            ? 'grid-rows-[1fr]'
                                            : 'grid-rows-[0fr]',
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-[#c5a04e]/15 px-6 pt-5 pb-7 sm:px-8">
                                            <p className="text-sm leading-7 text-[#777166] sm:pl-12 dark:text-[#aaa397]">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Contact */}
                <div className="mt-14 text-center">
                    <p className="text-sm text-[#777166] dark:text-[#aaa397]">
                        Une autre question concernant votre événement ?
                    </p>
                    <a
                        href="#contact"
                        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#967021] underline decoration-[#c5a04e]/40 underline-offset-4 transition-colors hover:text-[#765317] dark:text-[#d6b76d] dark:hover:text-[#ead49b]"
                    >
                        Échangeons autour de votre projet
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
