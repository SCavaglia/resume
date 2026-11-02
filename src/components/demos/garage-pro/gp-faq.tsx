import { useState } from 'react';
import {
    ArrowUpRight,
    ChevronDown,
    CircleHelp,
    ShieldCheck,
} from 'lucide-react';

const faqs = [
    {
        question:
            'Puis-je faire réviser un véhicule sous garantie constructeur ?',
        answer: "Absolument. Grâce à la réglementation européenne (Règlement N° 461/2010), vous êtes libre de faire réviser votre véhicule chez le réparateur indépendant de votre choix dès le premier jour. Nous respectons strictement le plan d'entretien officiel constructeur, ce qui garantit la préservation de vos droits à la garantie.",
    },
    {
        question: 'Quelles garanties offrez-vous sur vos réparations ?',
        answer: 'Toutes nos réparations de mécanique, embrayage, freinage ou carrosserie sont couvertes par une garantie de 24 mois sur les pièces et la main d’œuvre. Nous utilisons exclusivement des pièces de rechange d’origine certifiée (Bosch, Brembo, Valeo...) ou équivalentes.',
    },
    {
        question: 'Prêtez-vous un véhicule de remplacement ?',
        answer: "Oui. GARAGE PRO met gratuitement à votre disposition un véhicule de courtoisie de catégorie A ou B (essence ou électrique) le temps de l'immobilisation de votre voiture dans notre atelier. Il vous suffit de le signaler lors de votre réservation de rendez-vous en ligne ou par téléphone.",
    },
    {
        question: 'Quel est le délai pour le passage au contrôle technique ?',
        answer: "Nous pouvons prendre en charge votre voiture et l'emmener au contrôle technique sous 48 heures ouvrées. Nous effectuons au préalable un pré-contrôle complet dans notre atelier afin de réparer d'éventuels défauts éliminatoires et vous éviter ainsi une contre-visite payante.",
    },
];

type GpFaqProps = {
    className?: string;
};

export function GpFaq({ className }: GpFaqProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setActiveIndex((current) => (current === index ? null : index));
    };

    return (
        <section
            id="faq"
            className={`relative overflow-hidden bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#15171c] ${className ?? ''}`}
        >
            <div className="pointer-events-none absolute top-20 -right-40 size-96 rounded-full bg-[#e63946]/5 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                {/* En-tête */}
                <div className="lg:sticky lg:top-28 lg:self-start">
                    <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#e63946] uppercase">
                        <span className="h-px w-7 bg-[#e63946]" />
                        Besoin d'informations ?
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight text-[#0f1115] sm:text-4xl lg:text-5xl dark:text-white">
                        Questions fréquentes{' '}
                        <span className="text-[#e63946]">& Engagements</span>
                    </h2>

                    <p className="mt-6 text-base leading-8 text-neutral-600 dark:text-neutral-400">
                        Transparence, qualité et sérénité : retrouvez les
                        réponses aux questions les plus fréquentes concernant
                        nos prestations et nos engagements.
                    </p>

                    <div className="mt-9 rounded-2xl border border-[#e63946]/15 bg-[#e63946]/5 p-6">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-[#e63946]/10 text-[#e63946]">
                            <ShieldCheck size={25} />
                        </div>

                        <h3 className="mt-5 text-lg font-bold text-[#17191e] dark:text-white">
                            Notre engagement qualité
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                            Des réparations garanties, des tarifs transparents
                            et un accompagnement personnalisé à chaque étape.
                        </p>

                        <a
                            href="#contact"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#e63946] transition-all hover:gap-3"
                        >
                            Une autre question ?
                            <ArrowUpRight size={17} />
                        </a>
                    </div>
                </div>

                {/* Accordéon */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <article
                                key={faq.question}
                                className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                                    isOpen
                                        ? 'border-[#e63946]/40 bg-[#f9f9fa] shadow-lg shadow-[#e63946]/5 dark:bg-[#1e2128]'
                                        : 'border-neutral-200 bg-white hover:border-[#e63946]/30 hover:shadow-md dark:border-white/10 dark:bg-[#1e2128]'
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center gap-4 px-5 py-6 text-left sm:px-7"
                                >
                                    <span
                                        className={`flex size-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                                            isOpen
                                                ? 'bg-[#e63946] text-white shadow-md shadow-[#e63946]/20'
                                                : 'bg-neutral-100 text-neutral-500 group-hover:bg-[#e63946]/10 group-hover:text-[#e63946] dark:bg-white/5 dark:text-neutral-400'
                                        }`}
                                    >
                                        <CircleHelp size={22} />
                                    </span>

                                    <span className="flex-1 text-base leading-snug font-bold text-[#17191e] transition-colors group-hover:text-[#e63946] sm:text-lg dark:text-white">
                                        {faq.question}
                                    </span>

                                    <span
                                        className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                                            isOpen
                                                ? 'rotate-180 bg-[#e63946]/10 text-[#e63946]'
                                                : 'bg-neutral-100 text-neutral-500 dark:bg-white/5 dark:text-neutral-400'
                                        }`}
                                    >
                                        <ChevronDown size={19} />
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                        isOpen
                                            ? 'grid-rows-[1fr]'
                                            : 'grid-rows-[0fr]'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-neutral-200/80 px-5 pt-5 pb-6 sm:px-7 dark:border-white/10">
                                            <p className="pl-0 text-sm leading-8 text-neutral-600 sm:pl-[3.75rem] dark:text-neutral-400">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}

                    <p className="flex items-center justify-center gap-2 pt-4 text-xs text-neutral-500 dark:text-neutral-400">
                        <ShieldCheck size={15} className="text-[#e63946]" />
                        GARAGE PRO — Votre satisfaction, notre priorité.
                    </p>
                </div>
            </div>
        </section>
    );
}
