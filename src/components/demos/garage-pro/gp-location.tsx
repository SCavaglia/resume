import { useState } from 'react';
import {
    ArrowUpRight,
    CheckCircle2,
    Clock3,
    MapPin,
    Navigation,
    Truck,
} from 'lucide-react';

const communes = [
    { name: 'Lyon', postalCode: '69000' },
    { name: 'Villeurbanne', postalCode: '69100' },
    { name: 'Bron', postalCode: '69500' },
    { name: 'Vénissieux', postalCode: '69200' },
    { name: 'Caluire-et-Cuire', postalCode: '69300' },
    { name: 'Saint-Priest', postalCode: '69800' },
    { name: 'Vaulx-en-Velin', postalCode: '69120' },
    { name: 'Écully', postalCode: '69130' },
    { name: 'Tassin-la-Demi-Lune', postalCode: '69160' },
    { name: 'Meyzieu', postalCode: '69330' },
];

type GpLocationProps = {
    className?: string;
};

export function GpLocation({ className }: GpLocationProps) {
    const [location, setLocation] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [checked, setChecked] = useState(false);

    const filteredCommunes = communes.filter((commune) =>
        `${commune.name} ${commune.postalCode}`
            .toLowerCase()
            .includes(location.toLowerCase()),
    );

    const handleSelect = (name: string, postalCode: string) => {
        setLocation(`${name} (${postalCode})`);
        setSelectedLocation(name);
        setShowSuggestions(false);
        setChecked(false);
    };

    const handleCheck = () => {
        const value = location.trim().toLowerCase();

        if (!value) return;

        const commune = communes.find(
            (item) =>
                value.includes(item.name.toLowerCase()) ||
                value.includes(item.postalCode),
        );

        setSelectedLocation(commune?.name ?? '');
        setChecked(true);
        setShowSuggestions(false);
    };

    return (
        <section
            id="location"
            className={`relative overflow-hidden bg-[#f4f5f7] px-6 py-24 transition-colors duration-300 dark:bg-[#0f1115] ${className ?? ''}`}
        >
            <div className="pointer-events-none absolute top-20 -left-40 size-96 rounded-full bg-[#e63946]/5 blur-3xl" />

            <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
                {/* Partie gauche : informations et recherche */}
                <div>
                    <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#e63946] uppercase">
                        <span className="h-px w-7 bg-[#e63946]" />
                        Région de [Ville] & Remorquage Urgent
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight text-[#0f1115] sm:text-4xl lg:text-5xl dark:text-white">
                        Assistance <span className="text-[#e63946]">24/7</span>
                        <br />
                        Remorquage dans la Métropole
                    </h2>

                    <p className="mt-6 text-base leading-8 text-neutral-600 dark:text-neutral-400">
                        Notre service de dépanneuses est d'astreinte jour et
                        nuit. Nous couvrons l'ensemble des 25 communes autour de
                        [Ville] (Villeurbanne, Bron, Caluire, Décines, Meyzieu,
                        Écully...) pour des remorquages vers notre atelier ou le
                        lieu de votre choix.
                    </p>

                    {/* Indicateurs */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-[#191c22]">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#e63946]/10 text-[#e63946]">
                                <Clock3 size={22} />
                            </div>
                            <div>
                                <p className="font-bold text-[#17191e] dark:text-white">
                                    24h / 24
                                </p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                    7j / 7
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-[#191c22]">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#e63946]/10 text-[#e63946]">
                                <Truck size={22} />
                            </div>
                            <div>
                                <p className="font-bold text-[#17191e] dark:text-white">
                                    25 communes
                                </p>
                                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                    Zone couverte
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Recherche */}
                    <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-[#191c22]">
                        <h3 className="mb-2 text-lg font-bold text-[#17191e] dark:text-white">
                            Estimer le temps de trajet de la dépanneuse
                        </h3>

                        <p className="mb-5 text-sm text-neutral-500 dark:text-neutral-400">
                            Saisissez votre code postal ou commune de panne.
                        </p>

                        <div className="relative">
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <div className="relative flex-1">
                                    <MapPin
                                        size={19}
                                        className="absolute top-1/2 left-4 -translate-y-1/2 text-neutral-400"
                                    />
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(event) => {
                                            setLocation(event.target.value);
                                            setShowSuggestions(true);
                                            setChecked(false);
                                        }}
                                        onFocus={() => setShowSuggestions(true)}
                                        onKeyDown={(event) => {
                                            if (event.key === 'Enter')
                                                handleCheck();
                                            if (event.key === 'Escape')
                                                setShowSuggestions(false);
                                        }}
                                        placeholder="Ex. Lyon ou 69000"
                                        className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 pr-4 pl-11 text-sm text-neutral-900 transition-all outline-none placeholder:text-neutral-400 focus:border-[#e63946] focus:ring-2 focus:ring-[#e63946]/15 dark:border-white/10 dark:bg-[#101217] dark:text-white"
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={handleCheck}
                                    disabled={!location.trim()}
                                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#e63946] px-6 text-sm font-bold text-white shadow-md shadow-[#e63946]/20 transition-all hover:bg-[#cf2938] hover:shadow-lg hover:shadow-[#e63946]/25 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    Vérifier
                                    <ArrowUpRight size={17} />
                                </button>
                            </div>

                            {/* Suggestions */}
                            {showSuggestions &&
                                location.trim() &&
                                filteredCommunes.length > 0 && (
                                    <div className="absolute top-full right-0 left-0 z-20 mt-2 max-h-60 overflow-y-auto rounded-xl border border-neutral-200 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-[#22252c]">
                                        {filteredCommunes.map((commune) => (
                                            <button
                                                key={commune.postalCode}
                                                type="button"
                                                onClick={() =>
                                                    handleSelect(
                                                        commune.name,
                                                        commune.postalCode,
                                                    )
                                                }
                                                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-white/5"
                                            >
                                                <span className="font-medium text-neutral-800 dark:text-neutral-200">
                                                    {commune.name}
                                                </span>
                                                <span className="text-xs text-neutral-400">
                                                    {commune.postalCode}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                        </div>

                        {/* Résultat */}
                        {checked && (
                            <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                                <CheckCircle2
                                    size={20}
                                    className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                                />
                                <div>
                                    <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                                        {selectedLocation
                                            ? `${selectedLocation} : zone couverte`
                                            : 'Vérification à confirmer'}
                                    </p>
                                    <p className="mt-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                                        {selectedLocation
                                            ? 'Notre équipe peut prendre en charge votre demande. Contactez-nous pour connaître le délai réel d’intervention.'
                                            : 'Cette adresse ne figure pas dans notre liste de communes. Contactez-nous pour vérifier la disponibilité du dépannage.'}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Communes */}
                        <div className="mt-6 border-t border-neutral-200 pt-5 dark:border-white/10">
                            <p className="mb-3 text-xs font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                                Nos principales zones d'intervention
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {communes.map((commune) => (
                                    <button
                                        key={commune.postalCode}
                                        type="button"
                                        onClick={() =>
                                            handleSelect(
                                                commune.name,
                                                commune.postalCode,
                                            )
                                        }
                                        className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-600 transition-all hover:border-[#e63946]/40 hover:bg-[#e63946]/5 hover:text-[#e63946] dark:border-white/10 dark:bg-white/5 dark:text-neutral-400 dark:hover:text-[#e63946]"
                                    >
                                        {commune.name} ({commune.postalCode})
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partie droite : carte */}
                <div className="relative">
                    <div className="absolute -inset-3 rounded-3xl bg-[#e63946]/10 blur-2xl" />

                    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-black/10 dark:border-white/10 dark:bg-[#191c22]">
                        {/* En-tête de la carte */}
                        <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-5 py-4 dark:border-white/10">
                            <div>
                                <h3 className="font-bold text-[#17191e] dark:text-white">
                                    GARAGE PRO [Ville]
                                </h3>
                                <p className="mt-1 flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                                    <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                                    Aire de dépannage active
                                </p>
                            </div>

                            <div className="flex size-11 items-center justify-center rounded-xl bg-[#e63946]/10 text-[#e63946]">
                                <Navigation size={21} />
                            </div>
                        </div>

                        {/* Carte Google Maps */}
                        <div className="relative aspect-[4/5] min-h-[380px] bg-neutral-200 sm:aspect-[5/4] lg:aspect-[4/5] dark:bg-[#252830]">
                            <iframe
                                title="Carte de la zone de dépannage GARAGE PRO à [Ville]"
                                src="https://maps.google.com/maps?q=Lyon%2C%20France&t=&z=10&ie=UTF8&iwloc=&output=embed"
                                className="absolute inset-0 size-full border-0 grayscale-[0.25]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />

                            {/* Badge de zone */}
                            <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-white/20 bg-[#0f1115]/90 p-4 text-white shadow-xl backdrop-blur-md">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#e63946]">
                                        <Truck size={21} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">
                                            [Ville] & 25 communes limitrophes
                                        </p>
                                        <p className="mt-1 text-xs text-neutral-300">
                                            Rhône, 69
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pied de carte */}
                        <div className="flex items-center justify-between gap-3 px-5 py-4">
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                Assistance et remorquage 24/7
                            </span>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Lyon%2C+France"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e63946] transition-colors hover:text-[#cf2938]"
                            >
                                Ouvrir la carte
                                <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
