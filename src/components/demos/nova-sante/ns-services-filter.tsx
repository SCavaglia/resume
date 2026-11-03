import { useState } from 'react';
import {
    Activity,
    ArrowUpRight,
    Brain,
    Check,
    HeartPulse,
    Stethoscope,
} from 'lucide-react';

const filters = [
    'Toutes les spécialités',
    'Médecine & Dentaire',
    'Kinésithérapie & Ostéo',
    'Psychologie & Nutrition',
] as const;

type Filter = (typeof filters)[number];

const services = [
    {
        title: 'Consultation Médecine Générale',
        description:
            "Consultation de suivi, traitement des pathologies aiguës, prévention, renouvellement d'ordonnance et vaccinations.",
        category: 'Médecine & Dentaire',
        priceLabel: 'Secteur 1 / Base Sécu',
        price: '26,50 €',
        icon: Stethoscope,
    },
    {
        title: 'Détartrage & Bilan Bucco-dentaire',
        description:
            'Examen annuel préventif, nettoyage complet des dents et élimination du tartre supra-gingival.',
        category: 'Médecine & Dentaire',
        priceLabel: 'Tarif conventionné',
        price: '43,38 €',
        icon: HeartPulse,
    },
    {
        title: 'Séance de Kinésithérapie',
        description:
            'Rééducation fonctionnelle sur ordonnance. Traumatologie, rhumatologie ou kiné respiratoire.',
        category: 'Kinésithérapie & Ostéo',
        priceLabel: 'Avec ordonnance (tiers payant)',
        price: '16,13 € – 20,43 €',
        icon: Activity,
    },
    {
        title: "Consultation d'Ostéopathie",
        description:
            'Approche globale par thérapie manuelle pour soulager les tensions musculo-squelettiques (dos, cervicales, crânien).',
        category: 'Kinésithérapie & Ostéo',
        priceLabel: 'Facture pour Mutuelle (Hors Sécu)',
        price: '70,00 €',
        icon: Activity,
    },
    {
        title: 'Suivi Psychologique Individuel',
        description:
            "Accompagnement clinique de l'adulte ou de l'adolescent. Burn-out, anxiété, gestion émotionnelle et thérapie de soutien.",
        category: 'Psychologie & Nutrition',
        priceLabel: 'Remboursement Mutuelles',
        price: '60,00 €',
        icon: Brain,
    },
    {
        title: 'Bilan Diététique & Nutrition',
        description:
            "Analyse des habitudes alimentaires, définition d'objectifs personnalisés et plan de rééquilibrage nutritionnel adapté.",
        category: 'Psychologie & Nutrition',
        priceLabel: 'Remboursement Mutuelles',
        price: '55,00 €',
        icon: HeartPulse,
    },
];

export function NsServicesFilter() {
    const [activeFilter, setActiveFilter] = useState<Filter>(
        'Toutes les spécialités',
    );

    const filteredServices =
        activeFilter === 'Toutes les spécialités'
            ? services
            : services.filter((service) => service.category === activeFilter);

    return (
        <section id="specialites" className="scroll-mt-6 px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl">
                {/* Introduction */}
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                        Tarifs & Spécialités
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                        Nos disciplines & honoraires
                    </h2>

                    <p className="mt-5 leading-relaxed text-muted-foreground sm:text-lg">
                        Sélectionnez une discipline pour afficher les actes
                        pratiqués et les tarifs indicatifs avant remboursement.
                    </p>
                </div>

                {/* Filtres */}
                <div className="mb-10 flex flex-wrap justify-center gap-3">
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter;

                        return (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setActiveFilter(filter)}
                                aria-pressed={isActive}
                                className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                                    isActive
                                        ? 'border-primary bg-primary text-primary-foreground'
                                        : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground'
                                }`}
                            >
                                {isActive && <Check className="size-4" />}
                                {filter}
                            </button>
                        );
                    })}
                </div>

                {/* Cartes de prestations */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredServices.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                            >
                                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Icon
                                        className="size-6"
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3 className="text-lg leading-snug font-semibold">
                                    {service.title}
                                </h3>

                                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                                    {service.description}
                                </p>

                                <div className="mt-6 border-t border-border pt-5">
                                    <p className="text-xs leading-relaxed text-muted-foreground">
                                        {service.priceLabel}
                                    </p>

                                    <p className="mt-1 text-xl font-semibold tracking-tight">
                                        {service.price}
                                    </p>
                                </div>

                                <a
                                    href="#rendez-vous"
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:opacity-80"
                                >
                                    Prendre rendez-vous
                                    <ArrowUpRight
                                        className="size-4"
                                        aria-hidden="true"
                                    />
                                </a>
                            </article>
                        );
                    })}
                </div>

                <p className="mt-8 text-center text-xs leading-relaxed text-muted-foreground">
                    Tarifs indicatifs présentés à titre de démonstration. Les
                    honoraires et remboursements réels dépendent du praticien,
                    de la prestation et de votre couverture.
                </p>
            </div>
        </section>
    );
}
