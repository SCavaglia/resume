import { useState } from 'react';

const filters = [
    { label: 'Tout', value: 'tout' },
    { label: 'Soins Visage', value: 'visage' },
    { label: 'Coiffure', value: 'coiffure' },
    { label: 'Onglerie', value: 'onglerie' },
    { label: 'Massages', value: 'massages' },
];

const photos = [
    {
        id: 1,
        src: '/resume/salon-lumieres/photo-gal-visage-01.jpg',
        alt: 'Soin du visage en institut',
        category: 'visage',
    },
    {
        id: 2,
        src: '/resume/salon-lumieres/photo-gal-coiffure-01.jpg',
        alt: 'Coiffure réalisée au salon',
        category: 'coiffure',
    },
    {
        id: 3,
        src: '/resume/salon-lumieres/photo-gal-onglerie-01.jpg',
        alt: 'Manucure et soin des ongles',
        category: 'onglerie',
    },
    {
        id: 4,
        src: '/resume/salon-lumieres/photo-gal-massages-01.jpg',
        alt: 'Massage relaxant en cabine',
        category: 'massages',
    },
    {
        id: 5,
        src: '/resume/salon-lumieres/photo-gal-coiffure-02.jpg',
        alt: 'Soin et mise en beauté des cheveux',
        category: 'coiffure',
    },
];

export function SlGallery() {
    const [activeFilter, setActiveFilter] = useState('tout');

    const filteredPhotos =
        activeFilter === 'tout'
            ? photos
            : photos.filter((photo) => photo.category === activeFilter);

    return (
        <section id="galerie" className="px-6 py-20 sm:px-8 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="w-fit translate-y-8">
                    <div className="flex items-center gap-2 text-[#C5A059]">
                        <div className="h-0.5 w-12 rounded-full bg-[#C5A059]" />
                        <div className="text-sm font-semibold tracking-widest uppercase">
                            Inspirations
                        </div>
                    </div>

                    <h2 className="mt-8 font-playfair text-5xl leading-none">
                        Un aperçu de notre
                        <span className="block text-[#6E6E73] italic dark:text-muted-foreground">
                            maison de soins
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

                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredPhotos.map((photo) => (
                        <figure
                            key={photo.id}
                            className="group overflow-hidden rounded-xl bg-muted"
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                loading="lazy"
                                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
