import { useState } from 'react';
import { Calculator, CheckCircle2, MapPin, Wallet } from 'lucide-react';

const services = [
    { value: 'menage', label: 'Ménage et Repassage', rate: 28 },
    { value: 'enfants', label: "Garde d'enfants à domicile", rate: 30 },
    { value: 'seniors', label: 'Aide et Présence aux seniors', rate: 32 },
    { value: 'repas', label: 'Portage de repas équilibrés', rate: 28 },
    { value: 'administratif', label: 'Assistance Administrative', rate: 30 },
    { value: 'bricolage', label: 'Bricolage et Petits travaux', rate: 35 },
];

const simulatedPostalCodes: Record<string, string> = {
    '75001': 'Paris 1er',
    '75011': 'Paris 11e',
    '75015': 'Paris 15e',
    '75020': 'Paris 20e',
};

const euro = (amount: number) =>
    amount.toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR',
    });

export function AcSimulator() {
    const [service, setService] = useState('menage');
    const [hours, setHours] = useState(10);
    const [postalCode, setPostalCode] = useState('');
    const [postalResult, setPostalResult] = useState<string | null>(null);
    const [validated, setValidated] = useState(false);

    const selectedService =
        services.find((item) => item.value === service) ?? services[0];

    const weeklyCost = selectedService.rate * hours;
    const taxCredit = weeklyCost * 0.5;
    const remainingCost = weeklyCost - taxCredit;

    function checkPostalCode() {
        const normalizedCode = postalCode.trim();
        const commune = simulatedPostalCodes[normalizedCode];

        setPostalResult(
            commune
                ? `Zone de démonstration reconnue : ${commune}. Vérification fictive uniquement.`
                : 'Code postal non reconnu dans cette démonstration. Essayez 75001, 75011, 75015 ou 75020.',
        );
    }

    return (
        <section id="simulateur" className="px-6 py-20 md:py-28">
            <div className="mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                    <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-400">
                        <Calculator className="size-4" />
                        Simulateur gratuit
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Simulateur de Budget & Déduction
                    </h2>
                </div>

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                    {/* Partie 1 : paramètres */}
                    <div className="flex min-w-0 flex-1 flex-col gap-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
                        <div>
                            <h3 className="text-2xl font-bold">
                                Estimez votre reste à charge
                            </h3>

                            <p className="mt-3 leading-7 text-muted-foreground">
                                Sélectionnez votre type de service d'aide à
                                domicile et ajustez vos heures hebdomadaires
                                pour visualiser l'impact du crédit d'impôt
                                immédiat de 50%.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label
                                htmlFor="ac-service"
                                className="font-semibold"
                            >
                                1. Nature de l'aide souhaitée
                            </label>

                            <select
                                id="ac-service"
                                value={service}
                                onChange={(event) => {
                                    setService(event.target.value);
                                    setValidated(false);
                                }}
                                className="h-12 w-full rounded-lg border border-input bg-background px-4 text-sm transition-colors outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                            >
                                {services.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <label
                                    htmlFor="ac-hours"
                                    className="font-semibold"
                                >
                                    2. Volume horaire estimé
                                </label>

                                <span className="rounded-lg bg-sky-100 px-3 py-1.5 text-sm font-bold text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                                    {hours} h / semaine
                                </span>
                            </div>

                            <input
                                id="ac-hours"
                                type="range"
                                min={1}
                                max={40}
                                step={1}
                                value={hours}
                                onChange={(event) => {
                                    setHours(Number(event.target.value));
                                    setValidated(false);
                                }}
                                className="h-2 w-full cursor-pointer accent-sky-600"
                            />

                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>1 h / sem.</span>
                                <span>20 h</span>
                                <span>40 h / sem.</span>
                            </div>
                        </div>

                        <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-5 dark:border-sky-900 dark:bg-sky-950/30">
                            <div className="flex items-center gap-2 font-semibold">
                                <MapPin className="size-5 text-sky-600 dark:text-sky-400" />
                                Votre commune est-elle éligible ?
                            </div>

                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                Saisissez le code postal de votre domicile pour
                                simuler une vérification de zone.
                            </p>

                            <form
                                className="mt-4 flex flex-col gap-3 sm:flex-row"
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    checkPostalCode();
                                }}
                            >
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={5}
                                    value={postalCode}
                                    onChange={(event) => {
                                        setPostalCode(
                                            event.target.value.replace(
                                                /\D/g,
                                                '',
                                            ),
                                        );
                                        setPostalResult(null);
                                    }}
                                    placeholder="Ex. : 75011"
                                    aria-label="Code postal"
                                    className="h-11 min-w-0 flex-1 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                                />

                                <button
                                    type="submit"
                                    className="h-11 rounded-lg bg-sky-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
                                >
                                    Vérifier
                                </button>
                            </form>

                            {postalResult && (
                                <p
                                    aria-live="polite"
                                    className="mt-3 text-sm leading-5 text-muted-foreground"
                                >
                                    {postalResult}
                                </p>
                            )}

                            <p className="mt-3 text-xs text-muted-foreground">
                                Démonstration fictive basée sur quelques codes
                                postaux de Paris. Aucune vérification réelle
                                n'est effectuée.
                            </p>
                        </div>
                    </div>

                    {/* Partie 2 : résultat dynamique */}
                    <div className="flex w-full flex-col rounded-2xl border border-sky-200 bg-background p-6 shadow-lg sm:p-8 lg:sticky lg:top-24 lg:w-[400px] lg:flex-none dark:border-sky-900">
                        <div className="flex items-center gap-3">
                            <div className="flex size-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                                <Wallet className="size-6" />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold">
                                    Votre budget hebdomadaire
                                </h3>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    Estimation indicative
                                </p>
                            </div>
                        </div>

                        <p className="mt-4 text-sm leading-6 text-muted-foreground">
                            Estimation basée sur les tarifs indicatifs de notre
                            agence de [Ville].
                        </p>

                        <div className="mt-8 flex flex-col gap-5">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="font-medium">
                                        Tarif horaire public
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Tarif brut indicatif
                                    </p>
                                </div>

                                <p className="text-lg font-bold tabular-nums">
                                    {euro(selectedService.rate)}
                                </p>
                            </div>

                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="font-medium">
                                        Coût brut hebdomadaire
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {hours} h × {euro(selectedService.rate)}
                                    </p>
                                </div>

                                <p className="text-lg font-bold tabular-nums">
                                    {euro(weeklyCost)}
                                </p>
                            </div>

                            <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
                                <div>
                                    <p className="font-medium text-emerald-700 dark:text-emerald-400">
                                        Crédit d'impôt de 50%
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Avantage estimé
                                    </p>
                                </div>

                                <p className="text-lg font-bold text-emerald-700 tabular-nums dark:text-emerald-400">
                                    − {euro(taxCredit)}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 rounded-xl bg-sky-600 p-5 text-white">
                            <p className="text-sm font-medium text-sky-100">
                                Votre reste à charge réel estimé
                            </p>

                            <p className="mt-2 text-4xl font-bold tracking-tight tabular-nums">
                                {euro(remainingCost)}
                            </p>

                            <p className="mt-2 text-sm text-sky-100">
                                par semaine après déduction de 50%
                            </p>
                        </div>

                        <p className="mt-5 text-xs leading-5 text-muted-foreground">
                            * Simulation indicative sous réserve de
                            l'application de l'article 199 sexdecies du Code
                            Général des Impôts (CGI) ouvrant droit à réduction
                            fiscale ou crédit d'impôt. Tarifs et calculs
                            fictifs, sans valeur contractuelle.
                        </p>

                        <button
                            type="button"
                            onClick={() => setValidated(true)}
                            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700"
                        >
                            {validated ? (
                                <>
                                    <CheckCircle2 className="size-5" />
                                    Simulation validée
                                </>
                            ) : (
                                'Valider cette simulation'
                            )}
                        </button>

                        {validated && (
                            <p
                                role="status"
                                className="mt-3 text-center text-sm text-muted-foreground"
                            >
                                Simulation validée côté interface uniquement.
                                Aucune donnée n'a été envoyée.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
