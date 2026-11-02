import { useState } from 'react';

import { DemosSectionHeading } from '@/components/demos/typography/demos-section-heading';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const plans = [
    {
        id: 'decouverte',
        name: 'Pass Découverte',
        price: 29,
        description: 'Musculation & 2 cours/sem',
    },
    {
        id: 'illimite',
        name: 'Pass Illimité',
        price: 49,
        description: 'Tous cours & muscu illimités',
    },
    {
        id: 'premium',
        name: 'Pass Premium',
        price: 79,
        description: 'Illimité + 2 coachings/m',
    },
] as const;

const options = [
    {
        id: 'nutrition',
        name: 'Plan Nutritionnel sur-mesure',
        description: 'Suivi personnalisé et recettes mensuelles',
        price: 20,
    },
    {
        id: 'recuperation',
        name: 'Accès Espace Récupération',
        description: 'Sauna, hammam & cryothérapie en accès libre',
        price: 15,
    },
    {
        id: 'vestiaire',
        name: 'Serviette & Vestiaire Privé',
        description:
            'Serviette propre fournie à chaque séance et casier attitré',
        price: 8,
    },
] as const;

const COACHING_PRICE = 15;
const DISCOUNT_RATE = 0.15;

type PlanId = (typeof plans)[number]['id'];
type OptionId = (typeof options)[number]['id'];

const currency = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2,
});

const roundedCurrency = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
});

export function DemosSimulatorFormulasFitzone() {
    const [selectedPlan, setSelectedPlan] = useState<PlanId>('premium');
    const [selectedOptions, setSelectedOptions] = useState<OptionId[]>([
        'nutrition',
        'recuperation',
        'vestiaire',
    ]);
    const [coachingCount, setCoachingCount] = useState(1);
    const [annualCommitment, setAnnualCommitment] = useState(true);

    const plan = plans.find((item) => item.id === selectedPlan)!;

    const optionsTotal = options
        .filter((option) => selectedOptions.includes(option.id))
        .reduce((total, option) => total + option.price, 0);

    const coachingTotal = coachingCount * COACHING_PRICE;
    const subtotal = plan.price + optionsTotal + coachingTotal;
    const discount = annualCommitment ? subtotal * DISCOUNT_RATE : 0;
    const total = subtotal - discount;
    const weeklyTotal = (total * 12) / 52;

    const selectedOptionNames = [
        ...options
            .filter((option) => selectedOptions.includes(option.id))
            .map((option) => option.name),
        ...(coachingCount > 0 ? [`${coachingCount}x Coaching personnel`] : []),
    ];

    function toggleOption(optionId: OptionId) {
        setSelectedOptions((current) =>
            current.includes(optionId)
                ? current.filter((id) => id !== optionId)
                : [...current, optionId],
        );
    }

    return (
        <section id="simulateur" className="mx-auto max-w-7xl px-8 pt-46">
            <DemosSectionHeading
                eyebrow="Calculateur de Formules"
                title="Configure"
                titleHighlight="ton abonnement"
                description="Sélectionnez votre pass de base, ajoutez des options selon vos envies et obtenez votre devis en temps réel."
                eyebrowClassName="text-center text-base uppercase font-bold tracking-widest bg-gradient-to-br from-red-500 to-orange-500 bg-clip-text text-transparent"
                titleClassName="mt-4 text-center text-6xl font-oswald uppercase font-black tracking-wide"
                titleHighlightClassName="bg-gradient-to-br from-red-500 to-orange-500 bg-clip-text text-transparent"
                descriptionClassName="mt-4 mx-auto max-w-xl text-center text-lg font-light text-muted-foreground"
            />

            <div className="mt-10 flex flex-col gap-6 px-8 lg:flex-row lg:items-start">
                {/* Configuration */}
                <div className="min-w-0 flex-1 rounded-2xl border bg-card p-5 shadow-sm sm:p-7">
                    {/* Choix du pass */}
                    <div>
                        <h2 className="text-lg font-semibold">
                            1. Choisissez votre Pass
                        </h2>

                        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {plans.map((item) => {
                                const isSelected = selectedPlan === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        aria-pressed={isSelected}
                                        onClick={() => setSelectedPlan(item.id)}
                                        className={cn(
                                            'flex flex-col items-start rounded-xl border p-4 text-left transition-all',
                                            isSelected
                                                ? 'border-primary bg-primary/5 ring-1 ring-primary'
                                                : 'border-border hover:border-primary/50 hover:bg-muted/40',
                                        )}
                                    >
                                        <span className="text-sm font-semibold">
                                            {item.name}
                                        </span>

                                        <span className="mt-3 text-2xl font-bold tracking-tight">
                                            {item.price}€
                                            <span className="text-sm font-normal text-muted-foreground">
                                                /m
                                            </span>
                                        </span>

                                        <span className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                            {item.description}
                                        </span>

                                        <span
                                            className={cn(
                                                'mt-4 rounded-full px-2.5 py-1 text-xs font-medium',
                                                isSelected
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'bg-muted text-muted-foreground',
                                            )}
                                        >
                                            {isSelected
                                                ? 'Sélectionné'
                                                : 'Choisir'}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Options à la carte */}
                    <div className="mt-9">
                        <h2 className="text-lg font-semibold">
                            2. Options à la carte
                        </h2>

                        <div className="mt-4 flex flex-col gap-3">
                            {options.map((option) => {
                                const isSelected = selectedOptions.includes(
                                    option.id,
                                );

                                return (
                                    <label
                                        key={option.id}
                                        className={cn(
                                            'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                                            isSelected
                                                ? 'border-primary/60 bg-primary/5'
                                                : 'border-border hover:bg-muted/40',
                                        )}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() =>
                                                toggleOption(option.id)
                                            }
                                            className="mt-1 size-4 shrink-0 accent-primary"
                                        />

                                        <span className="min-w-0 flex-1">
                                            <span className="block text-sm font-semibold">
                                                {option.name}
                                            </span>
                                            <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                                                {option.description}
                                            </span>
                                        </span>

                                        <span className="shrink-0 text-sm font-semibold">
                                            +{option.price}€/m
                                        </span>
                                    </label>
                                );
                            })}

                            {/* Coaching personnel */}
                            <div className="rounded-xl border p-4">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-sm font-semibold">
                                            Coaching Personnel Supplémentaire
                                        </h3>
                                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                            Séance individuelle de 60 minutes
                                            avec un coach dédié.
                                        </p>
                                        <p className="mt-2 text-sm font-medium">
                                            +{COACHING_PRICE}€/mois par séance
                                        </p>
                                    </div>

                                    <span className="shrink-0 rounded-full bg-muted px-2.5 py-1 text-xs font-medium">
                                        {coachingCount}/4
                                    </span>
                                </div>

                                <div className="mt-5">
                                    <input
                                        type="range"
                                        min={0}
                                        max={4}
                                        step={1}
                                        value={coachingCount}
                                        onChange={(event) =>
                                            setCoachingCount(
                                                Number(event.target.value),
                                            )
                                        }
                                        aria-label="Nombre de coachings personnels supplémentaires"
                                        aria-valuetext={`${coachingCount} séance${coachingCount > 1 ? 's' : ''}`}
                                        className="w-full cursor-pointer accent-primary"
                                    />

                                    <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                                        {[0, 1, 2, 3, 4].map((count) => (
                                            <button
                                                key={count}
                                                type="button"
                                                onClick={() =>
                                                    setCoachingCount(count)
                                                }
                                                aria-pressed={
                                                    coachingCount === count
                                                }
                                                className={cn(
                                                    'rounded px-2 py-1 transition-colors',
                                                    coachingCount === count
                                                        ? 'font-semibold text-primary'
                                                        : 'hover:text-foreground',
                                                )}
                                            >
                                                {count}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mt-3 flex items-center justify-between border-t pt-3">
                                        <span className="text-sm text-muted-foreground">
                                            {coachingCount === 0
                                                ? 'Aucun coaching'
                                                : `${coachingCount} séance${coachingCount > 1 ? 's' : ''} supplémentaire${coachingCount > 1 ? 's' : ''}`}
                                        </span>

                                        <span className="font-semibold">
                                            +{coachingTotal}€/m
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Engagement annuel */}
                            <label
                                className={cn(
                                    'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                                    annualCommitment
                                        ? 'border-primary/60 bg-primary/5'
                                        : 'border-border hover:bg-muted/40',
                                )}
                            >
                                <input
                                    type="checkbox"
                                    checked={annualCommitment}
                                    onChange={(event) =>
                                        setAnnualCommitment(
                                            event.target.checked,
                                        )
                                    }
                                    className="mt-1 size-4 shrink-0 accent-primary"
                                />

                                <span className="min-w-0 flex-1">
                                    <span className="block text-sm font-semibold">
                                        Engagement 12 mois
                                    </span>
                                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                                        Profitez de 15% de réduction immédiate
                                        sur l'ensemble.
                                    </span>
                                </span>

                                <span className="shrink-0 rounded-full bg-green-500/10 px-2.5 py-1 text-sm font-semibold text-green-600">
                                    -15%
                                </span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Récapitulatif du devis */}
                <aside className="min-w-0 flex-1 rounded-2xl border bg-card p-5 shadow-sm sm:p-7 lg:sticky lg:top-34">
                    <h2 className="text-xl font-semibold">Détails du Devis</h2>

                    <div className="mt-6 space-y-5">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Formule
                                </p>
                                <p className="mt-1 font-medium">{plan.name}</p>
                            </div>

                            <p className="shrink-0 font-semibold">
                                {plan.price} €/mois
                            </p>
                        </div>

                        <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                                <p className="text-sm text-muted-foreground">
                                    Options
                                </p>

                                {selectedOptionNames.length > 0 ? (
                                    <ul className="mt-2 space-y-1.5 text-sm">
                                        {selectedOptionNames.map((name) => (
                                            <li
                                                key={name}
                                                className="flex items-start gap-2"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="text-primary"
                                                >
                                                    ✓
                                                </span>
                                                <span>{name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="mt-1 text-sm">
                                        Aucune option sélectionnée
                                    </p>
                                )}
                            </div>

                            <p className="shrink-0 font-semibold">
                                +{optionsTotal + coachingTotal} €/mois
                            </p>
                        </div>

                        <div className="flex items-start justify-between gap-4 border-t pt-4">
                            <div>
                                <p className="font-medium">
                                    {annualCommitment
                                        ? 'Engagement 12 mois'
                                        : 'Sans engagement annuel'}
                                </p>
                                {annualCommitment && (
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Réduction de 15%
                                    </p>
                                )}
                            </div>

                            <p
                                className={cn(
                                    'shrink-0 font-semibold',
                                    annualCommitment
                                        ? 'text-green-600'
                                        : 'text-muted-foreground',
                                )}
                            >
                                {annualCommitment
                                    ? `−${currency.format(discount).replace('€', '').trim()} €/mois`
                                    : '0 €/mois'}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl bg-muted/50 p-5">
                        <p className="text-sm text-muted-foreground">
                            Total mensuel
                        </p>

                        <p className="mt-1 text-4xl font-bold tracking-tight">
                            {roundedCurrency.format(total)}
                            <span className="ml-1 text-base font-normal text-muted-foreground">
                                /mois
                            </span>
                        </p>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Soit environ{' '}
                            <span className="font-semibold text-foreground">
                                {currency.format(weeklyTotal)}
                            </span>{' '}
                            par semaine
                        </p>
                    </div>

                    <button
                        type="button"
                        className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-br from-red-500 to-orange-500 px-5 py-3.5 font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
                    >
                        Réserver avec ce forfait
                        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                    </button>

                    <p className="mt-3 text-center text-xs text-muted-foreground">
                        Simulation indicative, sans réservation ni paiement.
                    </p>
                </aside>
            </div>
        </section>
    );
}
