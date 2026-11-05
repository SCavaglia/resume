import { useState } from 'react';

const filters = [
    { label: 'Tous', value: 'tous' },
    { label: 'Visage', value: 'visage' },
    { label: 'Massages', value: 'massages' },
    { label: 'Coiffure', value: 'coiffure' },
    { label: 'Onglerie', value: 'onglerie' },
];

const services = [
    {
        id: 'soins-visage',
        title: 'Soins du visage',
        description:
            'Des soins personnalisés pour révéler l’éclat naturel de votre peau.',
        category: 'visage',
    },
    {
        id: 'massages-monde',
        title: 'Massages du monde',
        description:
            'Un moment de détente profonde inspiré des traditions du monde.',
        category: 'massages',
    },
    {
        id: 'coiffure-couleur',
        title: 'Coiffure & couleur',
        description: 'Des coupes et des colorations adaptées à votre style.',
        category: 'coiffure',
    },
    {
        id: 'manucure',
        title: 'Manucure & beauté des ongles',
        description:
            'Prenez soin de vos mains avec des prestations délicates et soignées.',
        category: 'onglerie',
    },
];

export function SlServices() {
    const [activeFilter, setActiveFilter] = useState('tous');

    const filteredServices =
        activeFilter === 'tous'
            ? services
            : services.filter((service) => service.category === activeFilter);

    return (
        <section id="prestations" className="scroll-mt-24 px-6 pb-20 sm:px-8 lg:pb-28">
            <div className="mx-auto max-w-7xl">
                <div className="w-fit translate-y-8">
                    <div className="flex items-center gap-2 text-[#C5A059]">
                        <div className="h-0.5 w-12 rounded-full bg-[#C5A059]" />
                        <div className="text-sm font-semibold tracking-widest uppercase">
                            Prestations d'exception
                        </div>
                    </div>

                    <h2 className="mt-8 font-playfair text-5xl leading-none">
                        Nos Rituels de Soins
                        <span className="block text-[#6E6E73] italic dark:text-muted-foreground">
                            sur-mesure
                        </span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-end gap-3">
                    {filters.map((filter) => {
                        const isActive = activeFilter === filter.value;

                        return (
                            <button
                                key={filter.value}
                                type="button"
                                onClick={() => setActiveFilter(filter.value)}
                                aria-pressed={isActive}
                                className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                                    isActive
                                        ? 'border-primary bg-primary text-primary-foreground'
                                        : 'border-border bg-background text-foreground hover:border-primary hover:text-primary'
                                }`}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredServices.map((service) => (
                        <article
                            key={service.id}
                            className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                        >
                            <h3 className="mb-3 font-serif text-xl font-medium">
                                {service.title}
                            </h3>

                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {service.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
