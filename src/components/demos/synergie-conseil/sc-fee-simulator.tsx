import { useState } from 'react';
import {
    ArrowRight,
    Calculator,
    Check,
    ChevronDown,
    FileText,
    Handshake,
    Landmark,
    Sparkles,
} from 'lucide-react';

const legalStructures = [
    { label: 'Micro-entreprise', value: 'micro', price: 0 },
    { label: 'Entreprise individuelle', value: 'ei', price: 20 },
    { label: 'EURL / SARL', value: 'sarl', price: 40 },
    { label: 'SASU / SAS', value: 'sas', price: 60 },
    { label: 'Holding', value: 'holding', price: 90 },
    { label: 'Autre structure', value: 'other', price: 50 },
];

const services = [
    {
        label: 'Secrétariat juridique & contrats',
        description: 'Formalités annuelles, rédaction et suivi de contrats.',
        value: 'legal',
        price: 0,
    },
    {
        label: 'Expertise comptable & fiscale',
        description: 'Suivi comptable, déclarations et optimisation fiscale.',
        value: 'accounting',
        price: 120,
    },
    {
        label: 'Conseil stratégique & gestion',
        description: "Pilotage, accompagnement et performance d'entreprise.",
        value: 'strategy',
        price: 220,
    },
    {
        label: 'Gestion de patrimoine',
        description: 'Structuration patrimoniale et stratégie de transmission.',
        value: 'wealth',
        price: 280,
    },
    {
        label: 'Accompagnement global',
        description: 'Une approche pluridisciplinaire et coordonnée.',
        value: 'global',
        price: 450,
    },
];

export function ScFeeSimulator() {
    const [structure, setStructure] = useState('micro');
    const [service, setService] = useState('legal');

    const selectedStructure = legalStructures.find(
        (item) => item.value === structure,
    )!;

    const selectedService = services.find((item) => item.value === service)!;

    const monthlyPrice = 180 + selectedStructure.price + selectedService.price;

    const formatPrice = (price: number) =>
        new Intl.NumberFormat('fr-FR').format(price);

    return (
        <section
            id="honoraires"
            className="relative isolate overflow-hidden bg-[#f5f3ee] px-6 py-24 sm:px-10 lg:px-16 dark:bg-[#0d1f2d]"
        >
            {/* Background decorations */}
            <div className="pointer-events-none absolute top-0 -left-40 size-96 rounded-full bg-[#b4966e]/10 blur-[110px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-[#35536b]/10 blur-[110px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mb-14 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b4966e]/30 bg-[#b4966e]/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[#94764e] uppercase dark:text-[#d0b997]">
                        <Calculator className="size-4" />
                        Transparence & accompagnement
                    </div>

                    <h2 className="font-cormorant text-4xl font-semibold text-[#172b3a] sm:text-5xl lg:text-6xl dark:text-[#f5f3ee]">
                        Simulateur d'Honoraires{' '}
                        <span className="text-[#a88960] dark:text-[#c6a77e]">
                            Mensuels
                        </span>
                    </h2>

                    <div className="mx-auto mt-6 flex items-center justify-center gap-3">
                        <span className="h-px w-12 bg-[#b4966e]/50" />
                        <Sparkles className="size-4 text-[#b4966e]" />
                        <span className="h-px w-12 bg-[#b4966e]/50" />
                    </div>
                </div>

                <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
                    {/* Left: configuration */}
                    <div className="rounded-2xl border border-[#b4966e]/20 bg-white p-7 shadow-sm sm:p-10 dark:bg-[#142b3b]">
                        <div className="mb-9">
                            <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-[#b4966e]/10 text-[#a88960] dark:text-[#c6a77e]">
                                <Landmark className="size-6" />
                            </div>

                            <h3 className="font-cormorant text-3xl font-semibold text-[#172b3a] dark:text-[#f5f3ee]">
                                Construisez votre estimation
                            </h3>

                            <p className="mt-3 max-w-xl text-sm leading-7 text-[#77736c] dark:text-[#b6c0c8]">
                                Estimez de manière transparente les tarifs
                                d'honoraires de notre Cabinet Malesherbes pour
                                l'accompagnement annuel récurrent ou au projet.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Legal structure */}
                            <div>
                                <label
                                    htmlFor="fee-structure"
                                    className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#172b3a] dark:text-[#f5f3ee]"
                                >
                                    <span className="flex size-6 items-center justify-center rounded-full bg-[#b4966e]/15 text-xs text-[#94764e]">
                                        1
                                    </span>
                                    Structure juridique
                                </label>

                                <div className="relative">
                                    <select
                                        id="fee-structure"
                                        value={structure}
                                        onChange={(event) =>
                                            setStructure(event.target.value)
                                        }
                                        className="h-14 w-full appearance-none rounded-lg border border-[#b4966e]/25 bg-[#f8f6f1] px-4 pr-12 text-sm font-medium text-[#172b3a] transition-colors outline-none focus:border-[#b4966e] dark:bg-white/4 dark:text-[#f5f3ee]"
                                    >
                                        {legalStructures.map((item) => (
                                            <option
                                                key={item.value}
                                                value={item.value}
                                                className="text-[#172b3a] dark:text-[#f5f3ee]"
                                            >
                                                {item.label}
                                            </option>
                                        ))}
                                    </select>

                                    <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-[#a88960]" />
                                </div>
                            </div>

                            {/* Service */}
                            <div>
                                <label
                                    htmlFor="fee-service"
                                    className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#172b3a] dark:text-[#f5f3ee]"
                                >
                                    <span className="flex size-6 items-center justify-center rounded-full bg-[#b4966e]/15 text-xs text-[#94764e]">
                                        2
                                    </span>
                                    Nature de l'accompagnement
                                </label>

                                <div className="relative">
                                    <select
                                        id="fee-service"
                                        value={service}
                                        onChange={(event) =>
                                            setService(event.target.value)
                                        }
                                        className="h-14 w-full appearance-none rounded-lg border border-[#b4966e]/25 bg-[#f8f6f1] px-4 pr-12 text-sm font-medium text-[#172b3a] transition-colors outline-none focus:border-[#b4966e] dark:bg-white/[0.04] dark:text-[#f5f3ee]"
                                    >
                                        {services.map((item) => (
                                            <option
                                                key={item.value}
                                                value={item.value}
                                                className="text-[#172b3a] dark:text-[#f5f3ee]"
                                            >
                                                {item.label}
                                            </option>
                                        ))}
                                    </select>

                                    <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-[#a88960]" />
                                </div>

                                <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-[#89847b] dark:text-[#aab5bd]">
                                    <FileText className="mt-0.5 size-3.5 shrink-0 text-[#b4966e]" />
                                    {selectedService.description}
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 flex items-start gap-3 border-t border-[#b4966e]/15 pt-6">
                            <ShieldCheckIcon />
                            <p className="text-xs leading-6 text-[#89847b] dark:text-[#aab5bd]">
                                Cette estimation est indicative et ne constitue
                                pas un devis contractuel. Chaque mission fait
                                l'objet d'une étude personnalisée.
                            </p>
                        </div>
                    </div>

                    {/* Right: result */}
                    <div className="relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[#172b3a] via-[#102333] to-[#0b1925] p-8 text-white shadow-xl shadow-[#172b3a]/15 sm:p-10">
                        {/* Decorative elements */}
                        <div className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full border border-[#b4966e]/15" />
                        <div className="pointer-events-none absolute -top-10 -right-10 size-44 rounded-full border border-[#b4966e]/10" />
                        <div className="pointer-events-none absolute -bottom-32 -left-20 size-72 rounded-full bg-[#b4966e]/10 blur-[70px]" />

                        <div className="relative flex flex-1 flex-col">
                            <div className="mb-8 flex items-center gap-3">
                                <div className="flex size-11 items-center justify-center rounded-xl border border-[#b4966e]/30 bg-[#b4966e]/10 text-[#d0b997]">
                                    <Calculator className="size-5" />
                                </div>
                                <div>
                                    <span className="text-xs font-semibold tracking-[0.2em] text-[#d0b997] uppercase">
                                        Votre simulation
                                    </span>
                                    <h3 className="mt-1 font-cormorant text-2xl font-semibold">
                                        Estimation d'honoraires
                                    </h3>
                                </div>
                            </div>

                            <div className="mb-8 border-y border-white/10 py-8">
                                <div className="flex items-end gap-2">
                                    <span className="font-cormorant text-7xl font-semibold tracking-tight text-[#d0b997] sm:text-8xl">
                                        {formatPrice(monthlyPrice)}
                                    </span>
                                    <span className="mb-3 text-2xl text-[#d0b997]">
                                        €
                                    </span>
                                </div>
                                <p className="mt-2 text-sm tracking-wide text-white/55">
                                    / mois · Estimation indicative
                                </p>
                            </div>

                            <div className="mb-8 space-y-5">
                                <div className="flex items-start gap-3">
                                    <Check className="mt-0.5 size-4 shrink-0 text-[#c6a77e]" />
                                    <div>
                                        <p className="text-xs text-white/45">
                                            Structure juridique
                                        </p>
                                        <p className="mt-1 text-sm font-medium text-white/90">
                                            {selectedStructure.label}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Check className="mt-0.5 size-4 shrink-0 text-[#c6a77e]" />
                                    <div>
                                        <p className="text-xs text-white/45">
                                            Accompagnement sélectionné
                                        </p>
                                        <p className="mt-1 text-sm font-medium text-white/90">
                                            {selectedService.label}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto rounded-xl border border-[#b4966e]/20 bg-white/[0.04] p-5">
                                <div className="mb-3 flex items-center gap-2 text-[#d0b997]">
                                    <Handshake className="size-4" />
                                    <span className="text-xs font-semibold tracking-[0.15em] uppercase">
                                        Une approche sur-mesure
                                    </span>
                                </div>

                                <p className="text-sm leading-6 text-white/65">
                                    Secrétariat annuel de société & rédaction de
                                    contrats d'indépendant.
                                </p>
                            </div>

                            <a
                                href="#contact"
                                className="mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#b4966e] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c6a77e] hover:shadow-lg hover:shadow-[#b4966e]/20"
                            >
                                Solliciter une offre sur-mesure
                                <ArrowRight className="size-4" />
                            </a>

                            <p className="mt-4 text-center text-[10px] tracking-wide text-white/35">
                                Estimation non contractuelle · Sous réserve
                                d'étude
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ShieldCheckIcon() {
    return (
        <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#b4966e]/10 text-[#a88960] dark:text-[#c6a77e]">
            <Check className="size-4" />
        </div>
    );
}
