import { useState } from 'react';
import {
    ArrowLeft,
    ArrowRight,
    Building2,
    Check,
    CheckCircle2,
    Home,
    MapPin,
    Sparkles,
    Store,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

type PropertyType = 'apartment' | 'house' | 'loft' | 'commercial';

const propertyTypes = [
    {
        value: 'apartment' as const,
        label: 'Appartement',
        description: 'Appartement en résidence',
        icon: Building2,
    },
    {
        value: 'house' as const,
        label: 'Maison Individuelle',
        description: 'Maison avec ou sans extérieur',
        icon: Home,
    },
    {
        value: 'loft' as const,
        label: 'Loft / Prestige',
        description: 'Bien atypique ou haut de gamme',
        icon: Sparkles,
    },
    {
        value: 'commercial' as const,
        label: 'Local commercial',
        description: 'Commerce ou espace professionnel',
        icon: Store,
    },
];

const roomOptions = [
    '1 pièce',
    '2 pièces',
    '3 pièces',
    '4 pièces',
    '5 pièces +',
];

const conditionOptions = [
    { value: 'renovated', label: 'Entièrement rénové' },
    { value: 'good', label: 'Bon état général' },
    { value: 'refresh', label: 'Quelques travaux à prévoir' },
    { value: 'renovation', label: 'Rénovation complète' },
];

const steps = [
    { number: 1, label: 'Nature du bien' },
    { number: 2, label: 'Configuration' },
    { number: 3, label: 'Localisation' },
    { number: 4, label: 'Estimation' },
];

const basePrices: Record<PropertyType, number> = {
    apartment: 4200,
    house: 3900,
    loft: 5200,
    commercial: 2800,
};

const conditionMultipliers = {
    renovated: 1.1,
    good: 1,
    refresh: 0.92,
    renovation: 0.8,
};

export function MrSimulator() {
    const [step, setStep] = useState(1);
    const [propertyType, setPropertyType] = useState<PropertyType | null>(null);
    const [surface, setSurface] = useState([80]);
    const [rooms, setRooms] = useState('3 pièces');
    const [postalCode, setPostalCode] = useState('');
    const [condition, setCondition] = useState('good');
    const [estimatedValue, setEstimatedValue] = useState<number | null>(null);

    const [showConfirmation, setShowConfirmation] = useState(false);

    const canContinue = () => {
        if (step === 1) return propertyType !== null;
        if (step === 2) return surface[0] >= 10;
        if (step === 3) return /^\d{5}$/.test(postalCode) && condition !== '';
        return true;
    };

    const calculateEstimate = () => {
        if (!propertyType) return;

        const roomBonus = rooms === '5 pièces +' ? 1.04 : 1;
        const conditionMultiplier =
            conditionMultipliers[
                condition as keyof typeof conditionMultipliers
            ];

        // Simulation indicative : prix moyen au m² selon le type et le secteur.
        const postalPrefix = Number(postalCode.slice(0, 2));
        const locationMultiplier =
            postalPrefix === 75
                ? 1.25
                : postalPrefix === 69
                  ? 1.08
                  : postalPrefix === 13
                    ? 0.95
                    : 1;

        const estimate =
            surface[0] *
            basePrices[propertyType] *
            roomBonus *
            conditionMultiplier *
            locationMultiplier;

        setEstimatedValue(Math.round(estimate / 1000) * 1000);
        setStep(4);
    };

    const formatPrice = (price: number) =>
        new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
            maximumFractionDigits: 0,
        }).format(price);

    const goBack = () => {
        setStep((current) => Math.max(1, current - 1));
    };

    const goNext = () => {
        if (!canContinue()) return;

        if (step === 3) {
            calculateEstimate();
            return;
        }

        setStep((current) => Math.min(4, current + 1));
    };

    return (
        <section
            id="estimation"
            className="bg-[#f4f1eb] px-4 py-20 text-[#39342e] sm:px-6 lg:px-8 dark:bg-[#191714] dark:text-[#f4eee5]"
        >
            <div className="mx-auto max-w-5xl">
                {/* En-tête */}
                <div className="mb-12 text-center">
                    <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#a78d6d] uppercase">
                        <span className="h-px w-8 bg-[#bfa888]" />
                        Évaluation Mandat
                        <span className="h-px w-8 bg-[#bfa888]" />
                    </span>

                    <h2 className="font-cormorant text-4xl font-medium sm:text-5xl lg:text-6xl">
                        Simulateur en Ligne
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#777066] sm:text-base dark:text-[#b8afa3]">
                        Évaluez la valeur de marché de votre appartement ou
                        maison en 4 étapes clés avant visite.
                    </p>
                </div>

                {/* Conteneur du formulaire */}
                <div className="border border-[#e5ded3] bg-white shadow-sm dark:border-[#39332b] dark:bg-[#211e1a]">
                    {/* Progression */}
                    <div className="border-b border-[#eee9e1] px-5 py-7 sm:px-10 dark:border-[#39332b]">
                        <div className="mx-auto flex max-w-2xl items-center">
                            {steps.map((item, index) => {
                                const isCompleted = step > item.number;
                                const isActive = step === item.number;

                                return (
                                    <div
                                        key={item.number}
                                        className="flex flex-1 items-center last:flex-none"
                                    >
                                        <div className="flex flex-col items-center">
                                            <div
                                                className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                                                    isCompleted || isActive
                                                        ? 'border-[#a78d6d] bg-[#a78d6d] text-white'
                                                        : 'border-[#ded6ca] bg-transparent text-[#9b9184] dark:border-[#494136]'
                                                }`}
                                            >
                                                {isCompleted ? (
                                                    <Check className="h-4 w-4" />
                                                ) : (
                                                    item.number
                                                )}
                                            </div>

                                            <span
                                                className={`mt-2 hidden text-[10px] tracking-wide sm:block ${
                                                    isActive
                                                        ? 'font-semibold text-[#a78d6d]'
                                                        : 'text-[#9b9184]'
                                                }`}
                                            >
                                                {item.label}
                                            </span>
                                        </div>

                                        {index < steps.length - 1 && (
                                            <div
                                                className={`mx-2 mb-5 h-px flex-1 sm:mx-4 ${
                                                    step > item.number
                                                        ? 'bg-[#a78d6d]'
                                                        : 'bg-[#e5ded3] dark:bg-[#494136]'
                                                }`}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contenu des étapes */}
                    <div className="min-h-[440px] px-5 py-9 sm:px-10 sm:py-12">
                        {/* ÉTAPE 1 */}
                        {step === 1 && (
                            <div className="mx-auto max-w-3xl">
                                <div className="mb-9">
                                    <span className="text-xs font-semibold tracking-widest text-[#a78d6d]">
                                        ÉTAPE 01
                                    </span>

                                    <h3 className="mt-3 font-cormorant text-3xl font-medium sm:text-4xl">
                                        Quelle est la nature de votre bien ?
                                    </h3>

                                    <p className="mt-3 text-sm text-[#777066] dark:text-[#b8afa3]">
                                        Sélectionnez la catégorie architecturale
                                        correspondante.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {propertyTypes.map((property) => {
                                        const Icon = property.icon;
                                        const selected =
                                            propertyType === property.value;

                                        return (
                                            <button
                                                key={property.value}
                                                type="button"
                                                onClick={() =>
                                                    setPropertyType(
                                                        property.value,
                                                    )
                                                }
                                                className={`group relative flex items-center gap-4 border p-5 text-left transition-all ${
                                                    selected
                                                        ? 'border-[#a78d6d] bg-[#f8f5ef] dark:bg-[#302a22]'
                                                        : 'border-[#e5ded3] hover:border-[#bfa888] dark:border-[#494136] dark:hover:border-[#a78d6d]'
                                                }`}
                                            >
                                                <div
                                                    className={`flex h-12 w-12 shrink-0 items-center justify-center transition-colors ${
                                                        selected
                                                            ? 'bg-[#a78d6d] text-white'
                                                            : 'bg-[#f1ede6] text-[#a78d6d] dark:bg-[#302a22]'
                                                    }`}
                                                >
                                                    <Icon className="h-6 w-6" />
                                                </div>

                                                <div>
                                                    <p className="font-cormorant text-xl font-semibold">
                                                        {property.label}
                                                    </p>
                                                    <p className="mt-1 text-xs text-[#8a8176] dark:text-[#b8afa3]">
                                                        {property.description}
                                                    </p>
                                                </div>

                                                {selected && (
                                                    <CheckCircle2 className="absolute top-3 right-3 h-5 w-5 text-[#a78d6d]" />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* ÉTAPE 2 */}
                        {step === 2 && (
                            <div className="mx-auto max-w-3xl">
                                <div className="mb-10">
                                    <span className="text-xs font-semibold tracking-widest text-[#a78d6d]">
                                        ÉTAPE 02
                                    </span>

                                    <h3 className="mt-3 font-cormorant text-3xl font-medium sm:text-4xl">
                                        Quelle est sa configuration spatiale ?
                                    </h3>

                                    <p className="mt-3 text-sm text-[#777066] dark:text-[#b8afa3]">
                                        Ajustez la surface de plancher et le
                                        nombre de pièces de vie.
                                    </p>
                                </div>

                                {/* Surface */}
                                <div className="mb-12">
                                    <div className="mb-6 flex items-center justify-between">
                                        <label className="text-sm font-semibold">
                                            Surface Habitable (m²)
                                        </label>

                                        <span className="font-cormorant text-3xl font-semibold text-[#a78d6d]">
                                            {surface[0]} m²
                                        </span>
                                    </div>

                                    <Slider
                                        value={surface}
                                        onValueChange={setSurface}
                                        min={10}
                                        max={350}
                                        step={5}
                                        className="py-2"
                                    />

                                    <div className="mt-3 flex justify-between text-xs text-[#9b9184]">
                                        <span>10 m²</span>
                                        <span>180 m²</span>
                                        <span>350 m²</span>
                                    </div>
                                </div>

                                {/* Pièces */}
                                <div>
                                    <p className="mb-4 text-sm font-semibold">
                                        Nombre de pièces principales
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                                        {roomOptions.map((room) => {
                                            const selected = rooms === room;

                                            return (
                                                <button
                                                    key={room}
                                                    type="button"
                                                    onClick={() =>
                                                        setRooms(room)
                                                    }
                                                    className={`border px-3 py-4 text-sm transition-colors ${
                                                        selected
                                                            ? 'border-[#a78d6d] bg-[#a78d6d] font-semibold text-white'
                                                            : 'border-[#e5ded3] hover:border-[#bfa888] dark:border-[#494136]'
                                                    }`}
                                                >
                                                    {room}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ÉTAPE 3 */}
                        {step === 3 && (
                            <div className="mx-auto max-w-3xl">
                                <div className="mb-10">
                                    <span className="text-xs font-semibold tracking-widest text-[#a78d6d]">
                                        ÉTAPE 03
                                    </span>

                                    <h3 className="mt-3 font-cormorant text-3xl font-medium sm:text-4xl">
                                        Où se situe-t-il et quel est son état ?
                                    </h3>

                                    <p className="mt-3 text-sm text-[#777066] dark:text-[#b8afa3]">
                                        Renseignez le code postal et le niveau
                                        général de rénovation.
                                    </p>
                                </div>

                                <div className="space-y-7">
                                    {/* Code postal */}
                                    <div className="space-y-3">
                                        <label
                                            htmlFor="mr-postal-code"
                                            className="text-sm font-semibold"
                                        >
                                            Code postal
                                        </label>

                                        <div className="relative">
                                            <MapPin className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[#a78d6d]" />

                                            <Input
                                                id="mr-postal-code"
                                                value={postalCode}
                                                onChange={(event) =>
                                                    setPostalCode(
                                                        event.target.value
                                                            .replace(/\D/g, '')
                                                            .slice(0, 5),
                                                    )
                                                }
                                                placeholder="Ex. 69003"
                                                inputMode="numeric"
                                                maxLength={5}
                                                className="h-12 rounded-none border-[#e5ded3] pl-11 focus-visible:border-[#a78d6d] focus-visible:ring-[#a78d6d] dark:border-[#494136] dark:bg-[#29251f]"
                                            />
                                        </div>

                                        {postalCode.length > 0 &&
                                            postalCode.length !== 5 && (
                                                <p className="text-xs text-red-600">
                                                    Veuillez saisir un code
                                                    postal à 5 chiffres.
                                                </p>
                                            )}
                                    </div>

                                    {/* État général */}
                                    <div className="space-y-3">
                                        <label
                                            htmlFor="mr-condition"
                                            className="text-sm font-semibold"
                                        >
                                            État général
                                        </label>

                                        <select
                                            id="mr-condition"
                                            value={condition}
                                            onChange={(event) =>
                                                setCondition(event.target.value)
                                            }
                                            className="h-12 w-full rounded-none border border-[#e5ded3] bg-white px-4 text-sm outline-none focus:border-[#a78d6d] dark:border-[#494136] dark:bg-[#29251f]"
                                        >
                                            {conditionOptions.map((option) => (
                                                <option
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ÉTAPE 4 */}
                        {step === 4 && (
                            <div className="mx-auto max-w-3xl text-center">
                                <span className="text-xs font-semibold tracking-widest text-[#a78d6d]">
                                    VOTRE RÉSULTAT
                                </span>

                                <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#f1ede6] text-[#a78d6d] dark:bg-[#302a22]">
                                    <Sparkles className="h-8 w-8" />
                                </div>

                                <h3 className="mt-6 font-cormorant text-3xl font-medium sm:text-4xl">
                                    Votre estimation de marché personnalisée
                                </h3>

                                <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#777066] dark:text-[#b8afa3]">
                                    Calcul basé sur l'indice moyen des
                                    transactions du secteur.
                                </p>

                                <div className="my-9 border border-[#e5ded3] bg-[#faf8f5] px-5 py-8 dark:border-[#494136] dark:bg-[#29251f]">
                                    <p className="text-xs font-semibold tracking-[0.2em] text-[#8a8176] uppercase">
                                        Estimation indicative de valeur
                                    </p>

                                    <p className="mt-4 font-cormorant text-5xl font-semibold text-[#a78d6d] sm:text-6xl">
                                        {estimatedValue !== null
                                            ? formatPrice(estimatedValue)
                                            : '—'}
                                    </p>

                                    <p className="mt-3 text-xs text-[#9b9184]">
                                        Valeur indicative non contractuelle
                                    </p>
                                </div>

                                <p className="mx-auto max-w-2xl text-sm leading-7 text-[#777066] dark:text-[#b8afa3]">
                                    Pour concrétiser votre vente ou location,
                                    notre agence réalise une expertise physique
                                    détaillée sous 48h. Ce rapport officiel et
                                    certifié vous est remis gracieusement.
                                </p>

                                {showConfirmation && (
                                    <div className="mt-6 flex items-center justify-center gap-2 bg-[#f1ede6] p-4 text-sm text-[#756044] dark:bg-[#302a22] dark:text-[#d8c6aa]">
                                        <CheckCircle2 className="h-5 w-5 shrink-0" />
                                        Votre demande de visite est prête à être
                                        étudiée par notre agence.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col-reverse gap-3 border-t border-[#eee9e1] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 dark:border-[#39332b]">
                        {step > 1 ? (
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={goBack}
                                className="h-11 rounded-none text-[#777066] hover:bg-[#f4f1eb] hover:text-[#39342e] dark:hover:bg-[#302a22] dark:hover:text-[#f4eee5]"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Précédent
                            </Button>
                        ) : (
                            <div />
                        )}

                        {step < 4 ? (
                            <Button
                                type="button"
                                onClick={goNext}
                                disabled={!canContinue()}
                                className="h-12 rounded-none bg-[#a78d6d] px-8 text-white hover:bg-[#927858] disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                {step === 3 ? 'Estimer la valeur' : 'Continuer'}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        ) : (
                            <Button
                                type="button"
                                onClick={() => setShowConfirmation(true)}
                                className="h-12 rounded-none bg-[#a78d6d] px-8 text-white hover:bg-[#927858]"
                            >
                                Confirmer et planifier visite physique
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        )}
                    </div>
                </div>

                {/* Mention informative */}
                <p className="mt-6 text-center text-xs leading-6 text-[#9b9184]">
                    Cette simulation est fournie à titre indicatif et ne
                    constitue pas une expertise immobilière officielle.
                </p>
            </div>
        </section>
    );
}
