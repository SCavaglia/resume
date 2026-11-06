import { ArrowUpRight, Flower2, Hand, Scissors, Sparkles } from 'lucide-react';
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
        description: 'Des soins personnalisés pour révéler l’éclat naturel de votre peau.',
        category: 'visage',
        icon: Sparkles,
    },
    {
        id: 'massages-monde',
        title: 'Massages du monde',
        description: 'Un moment de détente profonde inspiré des traditions du monde.',
        category: 'massages',
        icon: Flower2,
    },
    {
        id: 'coiffure-couleur',
        title: 'Coiffure & couleur',
        description: 'Des coupes et des colorations adaptées à votre style.',
        category: 'coiffure',
        icon: Scissors,
    },
    {
        id: 'manucure',
        title: 'Manucure & beauté des ongles',
        description: 'Prenez soin de vos mains avec des prestations délicates et soignées.',
        category: 'onglerie',
        icon: Hand,
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
    {filteredServices.map((service) => {
        const Icon = service.icon;

        return (
            <article
                key={service.id}
                className="
                    group relative overflow-hidden rounded-2xl
                    border border-[#d6c4a5]/50
                    bg-linear-to-br from-[#fffdf9] via-[#faf5ed] to-[#f3eadd]
                    p-7
                    shadow-sm shadow-[#b99b70]/5
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:border-[#c5a059]/70
                    hover:shadow-xl hover:shadow-[#b99b70]/15
                    dark:border-[#806c55]/40
                    dark:from-[#25221e] dark:via-[#211e1a] dark:to-[#191714]
                    dark:hover:border-[#c5a059]/60
                    dark:hover:shadow-[#c5a059]/10
                "
            >
                {/* Halo décoratif */}
                <div className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-[#d6b98c]/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0 dark:bg-[#c5a059]/15" />

                {/* Icône */}
                <div className="
                    relative mb-8 flex size-14 items-center justify-center rounded-xl
                    border border-[#d6b98c]/40
                    bg-linear-to-br from-[#f5eadd] to-[#ead9bd]
                    text-[#806342]
                    shadow-sm shadow-[#b99b70]/10
                    transition-all duration-300
                    group-hover:scale-105 group-hover:shadow-md
                    dark:from-[#514332] dark:to-[#30291f]
                    dark:text-[#d8c19b]
                    dark:border-[#a88960]/40
                ">
                    <Icon className="size-6" strokeWidth={1.5} />
                </div>

                {/* Contenu */}
                <div className="relative">
                    <h3 className="
                        mb-3 font-playfair text-2xl font-medium
                        text-[#40372d] transition-colors duration-300
                        group-hover:text-[#a88960]
                        dark:text-[#f1e8db]
                        dark:group-hover:text-[#d8c19b]
                    ">
                        {service.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#81796f] dark:text-[#aaa096]">
                        {service.description}
                    </p>
                </div>

                {/* Décoration inférieure */}
                <div className="relative mt-8 flex items-center justify-between border-t border-[#d6c4a5]/40 pt-5 dark:border-[#806c55]/30">
                    <span className="text-xs font-medium tracking-widest text-[#a88960] uppercase">
                        Découvrir
                    </span>

                    <ArrowUpRight className="
                        size-5 text-[#a88960]
                        transition-transform duration-300
                        group-hover:translate-x-1 group-hover:-translate-y-1
                        dark:text-[#c5a77e]
                    " />
                </div>
            </article>
        );
    })}
</div>
            </div>
        </section>
    );
}
