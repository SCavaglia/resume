import { useState } from 'react';
import { ArrowRight, Clock, Hammer, Sparkles } from 'lucide-react';

const domains = [
    {
        value: 'ebenisterie',
        label: 'Ébénisterie',
        emoji: '🪑',
        base: 300,
        materials: [
            { label: 'Chêne massif local (Breton)', price: 100 },
            { label: 'Noyer massif', price: 180 },
        ],
    },
    {
        value: 'ceramique',
        label: 'Céramique',
        emoji: '🏺',
        base: 100,
        materials: [
            { label: 'Grès de Bretagne', price: 20 },
            { label: 'Porcelaine fine', price: 60 },
        ],
    },
    {
        value: 'maroquinerie',
        label: 'Maroquinerie',
        emoji: '👛',
        base: 80,
        materials: [
            { label: 'Cuir à tannage végétal', price: 40 },
            { label: 'Cuir pleine fleur', price: 80 },
        ],
    },
    {
        value: 'bijouterie',
        label: 'Bijouterie',
        emoji: '💍',
        base: 120,
        materials: [
            { label: 'Argent 925', price: 30 },
            { label: 'Or jaune 18 carats', price: 250 },
        ],
    },
];

const complexities = [
    {
        label: 'Épurée / Petite',
        multiplier: 1,
        weeks: 2,
        description: 'Forme simple, détails minimalistes',
    },
    {
        label: 'Standard',
        multiplier: 1.5,
        weeks: 4,
        description: 'Finitions soignées, détails travaillés',
    },
    {
        label: 'Complexe / Grande',
        multiplier: 2.2,
        weeks: 8,
        description: 'Pièce élaborée, finitions complexes',
    },
];

const euro = (amount: number) =>
    amount.toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
    });

export function AtcSimulator() {
    const [domainValue, setDomainValue] = useState('ebenisterie');
    const [materialIndex, setMaterialIndex] = useState(0);
    const [complexityIndex, setComplexityIndex] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const domain =
        domains.find((item) => item.value === domainValue) ?? domains[0];
    const material = domain.materials[materialIndex] ?? domain.materials[0];
    const complexity = complexities[complexityIndex];

    const subtotal = domain.base + material.price;
    const total = Math.round(subtotal * complexity.multiplier);

    function selectDomain(value: string) {
        setDomainValue(value);
        setMaterialIndex(0);
        setSubmitted(false);
    }

    return (
        <section
            id="sur-mesure"
            className="bg-[#F8F5EF] px-6 py-20 text-[#30291F] md:py-28 dark:bg-[#201D18] dark:text-[#F4EDE1]"
        >
            <div className="mx-auto max-w-7xl">
                <header className="mx-auto mb-14 max-w-3xl text-center">
                    <p className="mb-4 text-sm font-medium tracking-[0.25em] text-[#A27B45] uppercase">
                        Atelier de Création
                    </p>

                    <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
                        Configurez votre sur-mesure
                    </h2>

                    <p className="mt-5 text-base leading-8 text-[#6F665A] sm:text-lg dark:text-[#C6BBAA]">
                        Estimez en direct le budget et le délai de confection
                        pour une création sur-mesure façonnée spécialement pour
                        vous.
                    </p>
                </header>

                <div className="flex flex-col items-start gap-8 lg:flex-row">
                    {/* Partie 1 : configuration */}
                    <div className="flex min-w-0 flex-1 flex-col gap-10 border border-[#DED4C4] bg-background p-6 sm:p-8 dark:border-[#494033]">
                        <div>
                            <h3 className="font-serif text-2xl font-semibold">
                                1. Choisissez le domaine d'art
                            </h3>

                            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                {domains.map((item) => {
                                    const selected = domainValue === item.value;

                                    return (
                                        <button
                                            key={item.value}
                                            type="button"
                                            aria-pressed={selected}
                                            onClick={() =>
                                                selectDomain(item.value)
                                            }
                                            className={`flex flex-col items-center gap-3 border p-4 text-center transition-all duration-300 hover:-translate-y-1 ${
                                                selected
                                                    ? 'border-[#A27B45] bg-[#EEE6D9] ring-1 ring-[#A27B45] dark:bg-[#30291F]'
                                                    : 'border-[#DED4C4] hover:border-[#A27B45] dark:border-[#494033]'
                                            }`}
                                        >
                                            <span className="text-4xl">
                                                {item.emoji}
                                            </span>
                                            <span className="text-sm font-medium">
                                                {item.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl font-semibold">
                                2. Sélectionnez la matière première
                            </h3>

                            <select
                                value={materialIndex}
                                onChange={(event) => {
                                    setMaterialIndex(
                                        Number(event.target.value),
                                    );
                                    setSubmitted(false);
                                }}
                                className="mt-5 h-12 w-full border border-[#DED4C4] bg-background px-4 text-sm transition-colors outline-none focus:border-[#A27B45] focus:ring-2 focus:ring-[#A27B45]/20 dark:border-[#494033]"
                            >
                                {domain.materials.map((item, index) => (
                                    <option key={item.label} value={index}>
                                        {item.label} (+{euro(item.price)})
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="font-serif text-2xl font-semibold">
                                    3. Complexité & Dimensions
                                </h3>
                                <span className="text-sm text-[#A27B45]">
                                    {complexity.multiplier.toFixed(1)}×
                                </span>
                            </div>

                            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                Taille de la pièce et niveau de détails
                                d'assemblage.
                            </p>

                            <input
                                type="range"
                                min={0}
                                max={2}
                                step={1}
                                value={complexityIndex}
                                onChange={(event) => {
                                    setComplexityIndex(
                                        Number(event.target.value),
                                    );
                                    setSubmitted(false);
                                }}
                                aria-label="Complexité et dimensions"
                                className="mt-6 h-2 w-full cursor-pointer accent-[#A27B45]"
                            />

                            <div className="mt-4 grid grid-cols-3 gap-2">
                                {complexities.map((item, index) => (
                                    <button
                                        key={item.label}
                                        type="button"
                                        onClick={() => {
                                            setComplexityIndex(index);
                                            setSubmitted(false);
                                        }}
                                        className={`border px-2 py-3 text-center text-xs transition-colors sm:text-sm ${
                                            complexityIndex === index
                                                ? 'border-[#A27B45] bg-[#EEE6D9] font-semibold dark:bg-[#30291F]'
                                                : 'border-[#DED4C4] text-muted-foreground dark:border-[#494033]'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>

                            <p className="mt-4 text-sm text-muted-foreground">
                                {complexity.description}
                            </p>
                        </div>
                    </div>

                    {/* Partie 2 : estimation dynamique */}
                    <aside className="w-full border border-[#B9A991] bg-background p-6 sm:p-8 lg:sticky lg:top-24 lg:w-[400px] lg:flex-none">
                        <div className="flex items-center gap-3">
                            <div className="flex size-12 items-center justify-center bg-[#EEE6D9] text-[#9A753D] dark:bg-[#30291F]">
                                <Sparkles className="size-6" />
                            </div>

                            <div>
                                <p className="text-xs tracking-[0.2em] text-[#A27B45] uppercase">
                                    Votre projet
                                </p>
                                <h3 className="mt-1 font-serif text-2xl font-semibold">
                                    Détails de la Commission
                                </h3>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-5 border-b border-[#DED4C4] pb-6 dark:border-[#494033]">
                            <div className="flex items-start justify-between gap-4">
                                <span className="text-sm text-muted-foreground">
                                    Domaine d'art
                                </span>
                                <span className="text-right text-sm font-semibold">
                                    {domain.label}
                                </span>
                            </div>

                            <div className="flex items-start justify-between gap-4">
                                <span className="text-sm text-muted-foreground">
                                    Tarif de base
                                </span>
                                <span className="text-sm font-semibold">
                                    {euro(domain.base)}
                                </span>
                            </div>

                            <div className="flex items-start justify-between gap-4">
                                <span className="text-sm text-muted-foreground">
                                    Matière première
                                </span>
                                <span className="max-w-[60%] text-right text-sm font-semibold">
                                    {material.label} (+{euro(material.price)})
                                </span>
                            </div>

                            <div className="flex items-start justify-between gap-4">
                                <span className="text-sm text-muted-foreground">
                                    Complexité sélectionnée
                                </span>
                                <span className="text-right text-sm font-semibold">
                                    {complexity.label} (×
                                    {complexity.multiplier.toFixed(1)})
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 bg-[#F8F5EF] p-5 dark:bg-[#30291F]">
                            <p className="text-sm text-muted-foreground">
                                Estimation budgétaire
                            </p>
                            <p className="mt-2 font-serif text-4xl font-semibold text-[#A27B45]">
                                {euro(total)}
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="size-4 text-[#A27B45]" />
                                Confection estimée : {complexity.weeks}{' '}
                                {complexity.weeks > 1 ? 'semaines' : 'semaine'}
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setSubmitted(true)}
                            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#30291F] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#9A753D] dark:bg-[#E9DFCE] dark:text-[#30291F] dark:hover:bg-[#C6A46A]"
                        >
                            {submitted
                                ? 'Demande préparée'
                                : 'Lancer ma demande de création'}
                            <ArrowRight className="size-4" />
                        </button>

                        {submitted && (
                            <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
                                Maquette uniquement : votre configuration n'a
                                pas été envoyée.
                            </p>
                        )}

                        <p className="mt-4 text-center text-xs text-muted-foreground">
                            <Hammer className="mr-1 inline size-3.5" />
                            Estimation indicative, ajustée après échange avec
                            l'artisan.
                        </p>
                    </aside>
                </div>
            </div>
        </section>
    );
}
