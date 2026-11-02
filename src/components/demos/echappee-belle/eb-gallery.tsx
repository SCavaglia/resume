import { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

type GalleryImage = {
    title: string;
    subtitle: string;
    image: string;
    alt: string;
};

const images: GalleryImage[] = [
    {
        title: 'La Bastide',
        subtitle: 'Pierre sèche du XVIIIème siècle',
        image: '/demos/echappee-belle/gallery-bastide.jpg',
        alt: 'La bastide provençale en pierre du Domaine des Sources',
    },
    {
        title: 'Le Jardin',
        subtitle: 'Oliviers centenaires & lavande',
        image: '/demos/echappee-belle/gallery-jardin.jpg',
        alt: 'Jardin provençal avec oliviers et lavande',
    },
    {
        title: 'La Piscine',
        subtitle: 'Bassin chauffé à 28°C',
        image: '/demos/echappee-belle/gallery-piscine.jpg',
        alt: 'Piscine extérieure du Domaine des Sources',
    },
    {
        title: 'La Table d’Hôtes',
        subtitle: 'Cuisine de saison du terroir',
        image: '/demos/echappee-belle/gallery-table.jpg',
        alt: 'Table dressée pour un dîner provençal',
    },
    {
        title: 'Espace Massage',
        subtitle: 'Soin relaxant en plein air',
        image: '/demos/echappee-belle/gallery-massage.jpg',
        alt: 'Espace de massage extérieur au cœur du jardin',
    },
    {
        title: 'La Cave',
        subtitle: 'Sélection de crus du Luberon',
        image: '/demos/echappee-belle/gallery-cave.jpg',
        alt: 'Cave à vin et sélection de crus du Luberon',
    },
];

type Props = {
    className?: string;
};

export function EbGallery({ className = '' }: Props) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const activeImage = activeIndex !== null ? images[activeIndex] : null;

    const closeLightbox = () => setActiveIndex(null);

    const showPrevious = () => {
        setActiveIndex((current) =>
            current === null
                ? null
                : (current - 1 + images.length) % images.length,
        );
    };

    const showNext = () => {
        setActiveIndex((current) =>
            current === null ? null : (current + 1) % images.length,
        );
    };

    return (
        <section
            id="galerie"
            className={`bg-[#faf8f5] px-4 py-20 text-[#232720] transition-colors duration-300 sm:px-6 lg:px-8 dark:bg-[#1e211b] dark:text-[#f0ece3] ${className}`}
        >
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-12 max-w-3xl">
                    <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#c99d63] uppercase">
                        <span className="h-px w-10 bg-[#c99d63]" />
                        Galerie Visuelle
                    </p>

                    <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Le Domaine{' '}
                        <span className="text-[#4a5740] italic dark:text-[#a2b095]">
                            en images
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-[#6e7468] sm:text-lg dark:text-[#b5b7aa]">
                        Découvrez les recoins cachés de notre havre de paix
                        provençal de 2 hectares.
                    </p>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                        <button
                            key={image.title}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Agrandir : ${image.title}`}
                            className="group relative aspect-[4/3] overflow-hidden bg-[#e8e4da] text-left outline-none focus-visible:ring-2 focus-visible:ring-[#879477] focus-visible:ring-offset-4 dark:bg-[#34372e] dark:focus-visible:ring-offset-[#1e211b]"
                        >
                            <img
                                src={image.image}
                                alt={image.alt}
                                loading="lazy"
                                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                                <h3 className="font-serif text-2xl">
                                    {image.title}
                                </h3>

                                <p className="mt-1 text-sm text-white/80">
                                    {image.subtitle}
                                </p>
                            </div>

                            <span className="absolute top-4 right-4 flex size-10 items-center justify-center border border-white/40 bg-black/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                <span className="text-xl">+</span>
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {activeImage && activeIndex !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Galerie : ${activeImage.title}`}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm sm:p-8"
                    onClick={closeLightbox}
                >
                    {/* Close */}
                    <button
                        type="button"
                        onClick={closeLightbox}
                        aria-label="Fermer la galerie"
                        className="absolute top-5 right-5 z-10 flex size-11 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/15"
                    >
                        <X className="size-5" />
                    </button>

                    {/* Previous */}
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            showPrevious();
                        }}
                        aria-label="Image précédente"
                        className="absolute left-3 z-10 flex size-11 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/15 sm:left-8"
                    >
                        <ArrowLeft className="size-5" />
                    </button>

                    {/* Image */}
                    <div
                        className="flex max-h-full w-full max-w-5xl flex-col items-center"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={activeImage.image}
                            alt={activeImage.alt}
                            className="max-h-[75vh] max-w-full object-contain"
                        />

                        <div className="mt-6 text-center text-white">
                            <h3 className="font-serif text-2xl sm:text-3xl">
                                {activeImage.title}
                            </h3>

                            <p className="mt-2 text-sm text-white/60">
                                {activeImage.subtitle}
                            </p>

                            <p className="mt-4 text-xs tracking-widest text-white/40">
                                {String(activeIndex + 1).padStart(2, '0')}
                                {' / '}
                                {String(images.length).padStart(2, '0')}
                            </p>
                        </div>
                    </div>

                    {/* Next */}
                    <button
                        type="button"
                        onClick={(event) => {
                            event.stopPropagation();
                            showNext();
                        }}
                        aria-label="Image suivante"
                        className="absolute right-3 z-10 flex size-11 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/15 sm:right-8"
                    >
                        <ArrowRight className="size-5" />
                    </button>
                </div>
            )}
        </section>
    );
}
