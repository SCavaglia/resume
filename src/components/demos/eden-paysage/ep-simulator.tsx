import { useState, type FormEvent } from 'react';
import {
    ArrowLeft,
    ArrowRight,
    Check,
    CheckCircle2,
    Clock,
    Hammer,
    RotateCcw,
    ShieldCheck,
    Sparkles,
    Trees,
    Ruler,
    Phone,
} from 'lucide-react';

const services = [
    {
        name: 'Paysagisme',
        description: 'Jardin, terrasse & aménagement extérieur',
        icon: Trees,
        rates: [103.05, 134.4],
    },
    {
        name: 'Cuisine sur-mesure',
        description: 'Conception et installation personnalisée',
        icon: Hammer,
        rates: [850, 1250],
    },
    {
        name: "Architecture d'intérieur",
        description: 'Réaménagement et conception des espaces',
        icon: Sparkles,
        rates: [500, 850],
    },
    {
        name: 'Piscine & Spa',
        description: 'Piscine, plage et espace détente',
        icon: Ruler,
        rates: [900, 1400],
    },
];

const finishes = [
    {
        name: 'Gamme Standard éco',
        shortName: 'Standard',
        description:
            'Matériaux locaux, essences de bois résineux français, carrelage grès cérame standard.',
        multiplier: 1,
    },
    {
        name: 'Gamme Résidentielle qualitative',
        shortName: 'Résidentielle',
        description:
            'Matériaux haut de gamme durables : pierre reconstituée, bois exotique, quartz composite.',
        multiplier: 1.2,
    },
    {
        name: 'Gamme Prestige / Sur-mesure',
        shortName: 'Prestige',
        description:
            "Matériaux d'exception : pierre naturelle de Bourgogne, bois Ipé, céramique haut de gamme.",
        multiplier: 1.5,
    },
];

const steps = ['Métier', 'Surface', 'Finitions', 'Rendez-vous'];

const formatPrice = (price: number) =>
    Math.round(price).toLocaleString('fr-FR');

export function EpSimulator() {
    const [step, setStep] = useState(0);
    const [serviceIndex, setServiceIndex] = useState(0);
    const [surface, setSurface] = useState(40);
    const [finishIndex, setFinishIndex] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        postalCode: '',
        description: '',
    });

    const service = services[serviceIndex];
    const finish = finishes[finishIndex];

    const lowEstimate = surface * service.rates[0] * finish.multiplier;
    const highEstimate = surface * service.rates[1] * finish.multiplier;

    function updateForm(field: keyof typeof form, value: string) {
        setForm((current) => ({ ...current, [field]: value }));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitted(true);
    }

    function restart() {
        setStep(0);
        setServiceIndex(0);
        setSurface(40);
        setFinishIndex(0);
        setSubmitted(false);
        setForm({
            name: '',
            phone: '',
            email: '',
            postalCode: '',
            description: '',
        });
    }

    return (
        <section id="simulateur" className="px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
                    {/* Colonne gauche */}
                    <div className="lg:sticky lg:top-24 lg:w-[40%]">
                        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                            Votre projet, notre expertise
                        </p>

                        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                            Simulez le budget de votre projet d'aménagement
                        </h2>

                        <p className="mt-6 text-base leading-8 text-muted-foreground">
                            Utilisez notre configurateur budgétaire intelligent
                            pour estimer la fourchette de prix de votre
                            aménagement sous 2 minutes. Notre simulateur intègre
                            des prix indicatifs de paysagisme, terrasse et
                            maçonnerie paysagère à [Ville].
                        </p>

                        <div className="mt-9 space-y-6">
                            <div className="flex gap-4">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <ShieldCheck className="size-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">
                                        Simplicité & Transparence
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                        Une estimation budgétaire honnête et
                                        directe basée sur des prix indicatifs.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Sparkles className="size-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">
                                        Étude 3D offerte
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                        Pour tout projet qualifié, nos
                                        architectes paysagistes modélisent vos
                                        plans en 3D gratuitement.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Clock className="size-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">
                                        Rendez-vous sous 48h
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                        Notre bureau d'études planifie avec vous
                                        un rendez-vous d'évaluation sur place
                                        sous 2 jours ouvrés.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="tel:0478563412"
                            className="mt-9 flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                        >
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                <Phone className="size-5" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Bureau d'études [Ville]
                                </p>
                                <p className="mt-1 font-semibold">
                                    00 00 00 00 00
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Colonne droite : simulateur */}
                    <div className="min-w-0 flex-1">
                        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                            {!submitted ? (
                                <>
                                    {/* Navigation des étapes */}
                                    <div className="border-b border-border bg-muted/30 px-5 py-6 sm:px-8">
                                        <div className="grid grid-cols-4 gap-2">
                                            {steps.map((label, index) => {
                                                const isComplete = index < step;
                                                const isCurrent =
                                                    index === step;

                                                return (
                                                    <button
                                                        key={label}
                                                        type="button"
                                                        onClick={() => {
                                                            if (index < step)
                                                                setStep(index);
                                                        }}
                                                        disabled={index > step}
                                                        className="group flex min-w-0 flex-col items-center gap-2 disabled:cursor-default"
                                                        aria-current={
                                                            isCurrent
                                                                ? 'step'
                                                                : undefined
                                                        }
                                                    >
                                                        <span
                                                            className={`flex size-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                                                                isComplete ||
                                                                isCurrent
                                                                    ? 'border-primary bg-primary text-primary-foreground'
                                                                    : 'border-border bg-background text-muted-foreground'
                                                            }`}
                                                        >
                                                            {isComplete ? (
                                                                <Check className="size-4" />
                                                            ) : (
                                                                index + 1
                                                            )}
                                                        </span>
                                                        <span
                                                            className={`truncate text-xs font-medium sm:text-sm ${
                                                                isCurrent
                                                                    ? 'text-foreground'
                                                                    : 'text-muted-foreground'
                                                            }`}
                                                        >
                                                            {label}
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <form
                                        onSubmit={handleSubmit}
                                        className="p-5 sm:p-8"
                                    >
                                        {/* Étape 1 : métier */}
                                        {step === 0 && (
                                            <div>
                                                <h3 className="text-xl font-semibold sm:text-2xl">
                                                    Quel type d'aménagement
                                                    souhaitez-vous ?
                                                </h3>
                                                <p className="mt-2 text-sm text-muted-foreground">
                                                    Sélectionnez la prestation
                                                    qui correspond à votre
                                                    projet.
                                                </p>

                                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                                    {services.map(
                                                        (item, index) => {
                                                            const Icon =
                                                                item.icon;
                                                            const selected =
                                                                serviceIndex ===
                                                                index;

                                                            return (
                                                                <button
                                                                    key={
                                                                        item.name
                                                                    }
                                                                    type="button"
                                                                    onClick={() =>
                                                                        setServiceIndex(
                                                                            index,
                                                                        )
                                                                    }
                                                                    className={`relative flex items-start gap-4 rounded-2xl border p-4 text-left transition-all ${
                                                                        selected
                                                                            ? 'border-primary bg-primary/5 ring-1 ring-primary'
                                                                            : 'border-border hover:border-primary/40'
                                                                    }`}
                                                                >
                                                                    <span
                                                                        className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${
                                                                            selected
                                                                                ? 'bg-primary text-primary-foreground'
                                                                                : 'bg-muted text-muted-foreground'
                                                                        }`}
                                                                    >
                                                                        <Icon className="size-5" />
                                                                    </span>
                                                                    <span className="min-w-0">
                                                                        <span className="block font-semibold">
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </span>
                                                                        <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                                                                            {
                                                                                item.description
                                                                            }
                                                                        </span>
                                                                    </span>
                                                                    {selected && (
                                                                        <CheckCircle2 className="absolute top-3 right-3 size-4 shrink-0 text-primary" />
                                                                    )}
                                                                </button>
                                                            );
                                                        },
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Étape 2 : surface */}
                                        {step === 1 && (
                                            <div>
                                                <h3 className="text-xl font-semibold sm:text-2xl">
                                                    Configurez les dimensions du
                                                    projet
                                                </h3>
                                                <p className="mt-2 text-sm text-muted-foreground">
                                                    Indiquez la surface
                                                    approximative à aménager.
                                                </p>

                                                <div className="mt-10 rounded-2xl border border-border bg-muted/20 p-6 sm:p-8">
                                                    <div className="flex items-center justify-between gap-4">
                                                        <label
                                                            htmlFor="ep-surface"
                                                            className="text-sm font-medium"
                                                        >
                                                            Surface au sol
                                                            approximative
                                                        </label>
                                                        <span className="text-2xl font-semibold text-primary tabular-nums">
                                                            {surface} m²
                                                        </span>
                                                    </div>

                                                    <input
                                                        id="ep-surface"
                                                        type="range"
                                                        min={10}
                                                        max={200}
                                                        step={5}
                                                        value={surface}
                                                        onChange={(event) =>
                                                            setSurface(
                                                                Number(
                                                                    event.target
                                                                        .value,
                                                                ),
                                                            )
                                                        }
                                                        className="mt-8 w-full cursor-pointer accent-primary"
                                                    />

                                                    <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                                                        <span>10 m²</span>
                                                        <span>100 m²</span>
                                                        <span>200 m²</span>
                                                    </div>

                                                    <div className="mt-8 flex items-start gap-3 rounded-xl bg-primary/5 p-4">
                                                        <Ruler className="mt-0.5 size-5 shrink-0 text-primary" />
                                                        <p className="text-sm leading-6 text-muted-foreground">
                                                            Une estimation même
                                                            approximative suffit
                                                            pour commencer. Les
                                                            dimensions exactes
                                                            seront confirmées
                                                            lors de l'étude.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Étape 3 : finitions */}
                                        {step === 2 && (
                                            <div>
                                                <h3 className="text-xl font-semibold sm:text-2xl">
                                                    Matériaux et types de
                                                    finitions
                                                </h3>
                                                <p className="mt-2 text-sm text-muted-foreground">
                                                    Choisissez le niveau de
                                                    finition qui vous
                                                    correspond.
                                                </p>

                                                <div className="mt-6 space-y-3">
                                                    {finishes.map(
                                                        (item, index) => {
                                                            const selected =
                                                                finishIndex ===
                                                                index;

                                                            return (
                                                                <button
                                                                    key={
                                                                        item.name
                                                                    }
                                                                    type="button"
                                                                    onClick={() =>
                                                                        setFinishIndex(
                                                                            index,
                                                                        )
                                                                    }
                                                                    className={`relative w-full rounded-2xl border p-5 text-left transition-all ${
                                                                        selected
                                                                            ? 'border-primary bg-primary/5 ring-1 ring-primary'
                                                                            : 'border-border hover:border-primary/40'
                                                                    }`}
                                                                >
                                                                    <div className="flex items-start gap-3">
                                                                        <span
                                                                            className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border ${
                                                                                selected
                                                                                    ? 'border-primary bg-primary text-primary-foreground'
                                                                                    : 'border-muted-foreground/40'
                                                                            }`}
                                                                        >
                                                                            {selected && (
                                                                                <Check className="size-3" />
                                                                            )}
                                                                        </span>
                                                                        <span className="min-w-0 flex-1">
                                                                            <span className="flex flex-wrap items-center gap-2 font-semibold">
                                                                                {
                                                                                    item.name
                                                                                }
                                                                                {index ===
                                                                                    0 && (
                                                                                    <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold tracking-wide text-primary uppercase">
                                                                                        Recommandé
                                                                                    </span>
                                                                                )}
                                                                            </span>
                                                                            <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                                                                                {
                                                                                    item.description
                                                                                }
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </button>
                                                            );
                                                        },
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Étape 4 : coordonnées */}
                                        {step === 3 && (
                                            <div>
                                                <h3 className="text-xl font-semibold sm:text-2xl">
                                                    Coordonnées pour l'étude
                                                    personnalisée
                                                </h3>
                                                <p className="mt-2 text-sm text-muted-foreground">
                                                    Ces informations permettront
                                                    de préparer votre premier
                                                    échange.
                                                </p>

                                                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                                                    <div className="sm:col-span-2">
                                                        <label
                                                            htmlFor="ep-name"
                                                            className="mb-2 block text-sm font-medium"
                                                        >
                                                            Nom & prénom *
                                                        </label>
                                                        <input
                                                            id="ep-name"
                                                            required
                                                            autoComplete="name"
                                                            value={form.name}
                                                            onChange={(event) =>
                                                                updateForm(
                                                                    'name',
                                                                    event.target
                                                                        .value,
                                                                )
                                                            }
                                                            placeholder="Votre nom complet"
                                                            className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm transition outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label
                                                            htmlFor="ep-phone"
                                                            className="mb-2 block text-sm font-medium"
                                                        >
                                                            Numéro de téléphone
                                                            *
                                                        </label>
                                                        <input
                                                            id="ep-phone"
                                                            required
                                                            type="tel"
                                                            autoComplete="tel"
                                                            value={form.phone}
                                                            onChange={(event) =>
                                                                updateForm(
                                                                    'phone',
                                                                    event.target
                                                                        .value,
                                                                )
                                                            }
                                                            placeholder="00 00 00 00 00"
                                                            className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm transition outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label
                                                            htmlFor="ep-email"
                                                            className="mb-2 block text-sm font-medium"
                                                        >
                                                            Adresse e-mail *
                                                        </label>
                                                        <input
                                                            id="ep-email"
                                                            required
                                                            type="email"
                                                            autoComplete="email"
                                                            value={form.email}
                                                            onChange={(event) =>
                                                                updateForm(
                                                                    'email',
                                                                    event.target
                                                                        .value,
                                                                )
                                                            }
                                                            placeholder="vous@exemple.fr"
                                                            className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm transition outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                                                        />
                                                    </div>

                                                    <div className="sm:col-span-2">
                                                        <label
                                                            htmlFor="ep-postal-code"
                                                            className="mb-2 block text-sm font-medium"
                                                        >
                                                            Code postal
                                                            (Métropole de
                                                            [Ville]) *
                                                        </label>
                                                        <input
                                                            id="ep-postal-code"
                                                            required
                                                            inputMode="numeric"
                                                            autoComplete="postal-code"
                                                            pattern="[0-9]{5}"
                                                            maxLength={5}
                                                            value={
                                                                form.postalCode
                                                            }
                                                            onChange={(event) =>
                                                                updateForm(
                                                                    'postalCode',
                                                                    event.target.value
                                                                        .replace(
                                                                            /\D/g,
                                                                            '',
                                                                        )
                                                                        .slice(
                                                                            0,
                                                                            5,
                                                                        ),
                                                                )
                                                            }
                                                            placeholder="Ex. : 69006"
                                                            className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm transition outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                                                        />
                                                    </div>

                                                    <div className="sm:col-span-2">
                                                        <label
                                                            htmlFor="ep-description"
                                                            className="mb-2 block text-sm font-medium"
                                                        >
                                                            Description de votre
                                                            projet{' '}
                                                            <span className="font-normal text-muted-foreground">
                                                                (optionnel)
                                                            </span>
                                                        </label>
                                                        <textarea
                                                            id="ep-description"
                                                            rows={4}
                                                            value={
                                                                form.description
                                                            }
                                                            onChange={(event) =>
                                                                updateForm(
                                                                    'description',
                                                                    event.target
                                                                        .value,
                                                                )
                                                            }
                                                            placeholder="Décrivez vos envies, vos contraintes ou vos inspirations..."
                                                            className="w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm transition outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Récapitulatif du budget */}
                                        <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/4 p-5 sm:p-6">
                                            <p className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                                                Votre estimation budgétaire
                                                indicative
                                            </p>

                                            <div className="mt-4 space-y-2 text-sm">
                                                <div className="flex flex-wrap justify-between gap-2">
                                                    <span className="text-muted-foreground">
                                                        Prestation
                                                    </span>
                                                    <span className="font-medium">
                                                        {service.name}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap justify-between gap-2">
                                                    <span className="text-muted-foreground">
                                                        Surface
                                                    </span>
                                                    <span className="font-medium">
                                                        {surface} m²
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap justify-between gap-2">
                                                    <span className="text-muted-foreground">
                                                        Finitions
                                                    </span>
                                                    <span className="font-medium">
                                                        {finish.shortName}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="my-5 border-t border-primary/15" />

                                            <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                                                {formatPrice(lowEstimate)} –{' '}
                                                {formatPrice(highEstimate)} €
                                            </p>
                                            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                                                <CheckCircle2 className="size-4 shrink-0 text-primary" />
                                                Plans 3D et premier rendez-vous
                                                d'étude offerts
                                            </p>
                                            <p className="mt-3 text-xs leading-5 text-muted-foreground">
                                                Estimation indicative non
                                                contractuelle. Le devis final
                                                dépend notamment des contraintes
                                                techniques et des matériaux
                                                retenus.
                                            </p>
                                        </div>

                                        {/* Navigation inférieure */}
                                        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            {step > 0 ? (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setStep(
                                                            (current) =>
                                                                current - 1,
                                                        )
                                                    }
                                                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border px-5 text-sm font-semibold transition hover:bg-muted"
                                                >
                                                    <ArrowLeft className="size-4" />
                                                    Étape précédente
                                                </button>
                                            ) : (
                                                <span />
                                            )}

                                            {step < 3 ? (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setStep(
                                                            (current) =>
                                                                current + 1,
                                                        )
                                                    }
                                                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                                                >
                                                    Étape suivante
                                                    <ArrowRight className="size-4" />
                                                </button>
                                            ) : (
                                                <button
                                                    type="submit"
                                                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                                                >
                                                    Chiffrer mon projet
                                                    <ArrowRight className="size-4" />
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                </>
                            ) : (
                                /* Confirmation finale */
                                <div className="px-6 py-14 text-center sm:px-12 sm:py-20">
                                    <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <CheckCircle2 className="size-9" />
                                    </div>

                                    <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                                        Simulation terminée
                                    </p>

                                    <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                                        Votre projet prend forme !
                                    </h3>

                                    <p className="mx-auto mt-4 max-w-md leading-7 text-muted-foreground">
                                        Merci {form.name}. Votre simulation est
                                        terminée. Votre budget indicatif pour un
                                        projet de {service.name.toLowerCase()}{' '}
                                        est de :
                                    </p>

                                    <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-primary/20 bg-primary/4 p-6">
                                        <p className="text-3xl font-semibold tracking-tight">
                                            {formatPrice(lowEstimate)} –{' '}
                                            {formatPrice(highEstimate)} €
                                        </p>
                                        <p className="mt-3 text-sm text-muted-foreground">
                                            {surface} m² · Finitions{' '}
                                            {finish.shortName}
                                        </p>
                                    </div>

                                    <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-muted-foreground">
                                        Pour transformer cette estimation en
                                        devis, contactez notre bureau d'études
                                        au 00 00 00 00 00.
                                    </p>

                                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                                        <a
                                            href="tel:0478563412"
                                            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                                        >
                                            <Phone className="size-4" />
                                            Contacter le bureau d'études
                                        </a>

                                        <button
                                            type="button"
                                            onClick={restart}
                                            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border px-6 text-sm font-semibold transition hover:bg-muted"
                                        >
                                            <RotateCcw className="size-4" />
                                            Recommencer
                                        </button>
                                    </div>

                                    <p className="mt-6 text-xs text-muted-foreground">
                                        Ceci est une démonstration : aucune
                                        coordonnée n'a été envoyée ni
                                        enregistrée.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
