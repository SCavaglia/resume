import { useState } from 'react';
import {
    ChevronDown,
    Clock,
    HelpCircle,
    PawPrint,
    ShieldCheck,
} from 'lucide-react';

const questions = [
    {
        question: 'Quels vaccins sont obligatoires pour un séjour en pension ?',
        answer: 'Pour la sécurité de tous nos pensionnaires, nous exigeons les vaccins de base à jour (Rage, Maladie de Carré, Hépatite, Parvovirose) ainsi que le vaccin contre la Toux du Chenil pour les chiens, et le Typhus/Coryza pour les chats.',
    },
    {
        question:
            "Comment se déroule une urgence en dehors des horaires d'ouverture ?",
        answer: "Nous disposons d'un service de garde partenaire assurant la continuité des soins 7j/7 et 24h/24. En cas d'urgence absolue, composez directement notre numéro dédié d'urgence au 00 00 00 00 00 pour être mis en relation avec le vétérinaire de garde.",
    },
    {
        question:
            'Puis-je apporter les croquettes habituelles de mon animal en pension ?',
        answer: "Absolument. Nous conseillons même fortement d'apporter son alimentation habituelle pour éviter tout trouble digestif lié à une transition de nourriture trop brutale.",
    },
    {
        question:
            "Combien de temps à l'avance faut-il réserver la pension forestière ?",
        answer: "Les places étant limitées pour garantir une attention maximale à chaque animal, nous conseillons de réserver au moins 2 mois à l'avance pour les vacances scolaires d'été et de Noël, et 2 à 3 semaines à l'avance pour les week-ends classiques.",
    },
];

export function PcFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            className="relative overflow-hidden bg-[#f5f1eb] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-[#211e1a]"
        >
            {/* Décoration */}
            <div className="pointer-events-none absolute top-20 -left-40 size-96 rounded-full bg-[#c5a98b]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-[#a5a58d]/10 blur-3xl" />

            <div className="relative mx-auto max-w-4xl">
                {/* En-tête */}
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b49a7b]/30 bg-[#b49a7b]/10 px-4 py-2 text-sm font-medium text-[#8b7257] dark:text-[#d0b99c]">
                        <HelpCircle className="size-4" />
                        Des réponses à vos questions
                    </div>

                    <h2 className="font-cormorant text-4xl font-semibold tracking-tight text-[#3d352d] sm:text-5xl lg:text-6xl dark:text-[#f3eae0]">
                        Foire Aux Questions
                    </h2>

                    <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                        <span className="h-px w-12 bg-[#b49a7b]/60" />
                        <span className="text-[#a88b6b]">✦</span>
                        <span className="h-px w-12 bg-[#b49a7b]/60" />
                    </div>

                    <p className="mt-6 text-base leading-8 text-[#756b60] sm:text-lg dark:text-[#bdb2a5]">
                        Pour vous accompagner au mieux dans le quotidien avec
                        vos petits compagnons.
                    </p>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                    {questions.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <article
                                key={item.question}
                                className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 dark:bg-[#2c2721] ${
                                    isOpen
                                        ? 'border-[#c5a98b]/70 shadow-md shadow-[#6b5845]/5 dark:border-[#80674c]'
                                        : 'border-[#e8dfd3] hover:border-[#c5a98b]/50 dark:border-[#494035]'
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${index}`}
                                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                                >
                                    <span
                                        className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                                            isOpen
                                                ? 'bg-[#92785b] text-white'
                                                : 'bg-[#f2ece4] text-[#92785b] dark:bg-[#41372d] dark:text-[#d0b99c]'
                                        }`}
                                    >
                                        <PawPrint className="size-5" />
                                    </span>

                                    <span className="flex-1 font-cormorant text-xl leading-snug font-semibold text-[#443a30] sm:text-2xl dark:text-[#f0e6da]">
                                        {item.question}
                                    </span>

                                    <ChevronDown
                                        className={`size-5 shrink-0 text-[#92785b] transition-transform duration-300 dark:text-[#d0b99c] ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                <div
                                    id={`faq-answer-${index}`}
                                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                        isOpen
                                            ? 'grid-rows-[1fr]'
                                            : 'grid-rows-[0fr]'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-[#eee8e0] px-5 pt-5 pb-6 sm:px-6 sm:pl-[4.5rem] dark:border-[#494035]">
                                            <p className="text-sm leading-7 text-[#776e64] sm:text-base dark:text-[#bdb2a5]">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Bas de section */}
                <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-[#e8dfd3] bg-white/70 px-6 py-6 text-center dark:border-[#494035] dark:bg-[#2c2721]/70">
                    <div className="flex size-11 items-center justify-center rounded-full bg-[#f2ece4] text-[#92785b] dark:bg-[#41372d] dark:text-[#d0b99c]">
                        <ShieldCheck className="size-5" />
                    </div>

                    <p className="font-cormorant text-xl font-semibold text-[#443a30] dark:text-[#f0e6da]">
                        Une question supplémentaire ?
                    </p>

                    <p className="max-w-lg text-sm leading-6 text-[#8a7e70] dark:text-[#b5a797]">
                        Notre équipe est à votre écoute pour vous renseigner et
                        vous accompagner.
                    </p>

                    <a
                        href="#contact"
                        className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-[#92785b] underline-offset-4 transition-colors hover:text-[#725a40] hover:underline dark:text-[#d0b99c] dark:hover:text-[#e8d3b8]"
                    >
                        Contactez-nous
                        <Clock className="size-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
