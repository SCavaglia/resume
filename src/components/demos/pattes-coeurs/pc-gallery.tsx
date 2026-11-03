import { useEffect, useState } from 'react';
import { Heart, PawPrint, X, ZoomIn } from 'lucide-react';

const gallery = [
    {
        name: 'Louna',
        breed: 'Golden Retriever',
        activity: 'Pension',
        image: '/resume/pattes-coeur/gal_louna.webp',
        alt: 'Louna, Golden Retriever, profitant de son séjour à la pension',
        size: 'lg',
    },
    {
        name: 'Misty',
        breed: 'Chartreux',
        activity: 'Consultation',
        image: '/resume/pattes-coeur/gal_misty.webp',
        alt: 'Misty, chat Chartreux pendant une consultation vétérinaire',
        size: 'sm',
    },
    {
        name: 'Caramel',
        breed: 'Lapin',
        activity: 'Bilan de santé',
        image: '/resume/pattes-coeur/gal-caramel.jpg',
        alt: 'Caramel, lapin pendant son bilan de santé',
        size: 'sm',
    },
    {
        name: 'Nuggets',
        breed: 'Hamster',
        activity: 'Soins NAC',
        image: '/resume/pattes-coeur/gal-nuggets.jpg',
        alt: 'Nuggets, hamster recevant des soins adaptés aux NAC',
        size: 'sm',
    },
    {
        name: 'Kiwi',
        breed: 'Perruche',
        activity: 'Examen des plumes',
        image: '/resume/pattes-coeur/gal-kiwi.jpg',
        alt: 'Kiwi, perruche pendant un examen de ses plumes',
        size: 'sm',
    },
    {
        name: 'Rocky',
        breed: 'Berger Allemand',
        activity: 'Éducation',
        image: '/resume/pattes-coeur/gal-rocky.jpg',
        alt: "Rocky, Berger Allemand pendant une séance d'éducation canine",
        size: 'lg',
    },
];

export function PcGallery() {
    const [activeImage, setActiveImage] = useState<number | null>(null);

    useEffect(() => {
        if (activeImage === null) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setActiveImage(null);
            if (event.key === 'ArrowRight') {
                setActiveImage((current) =>
                    current === null ? null : (current + 1) % gallery.length,
                );
            }
            if (event.key === 'ArrowLeft') {
                setActiveImage((current) =>
                    current === null
                        ? null
                        : (current - 1 + gallery.length) % gallery.length,
                );
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [activeImage]);

    return (
        <section
            id="galerie"
            className="relative overflow-hidden bg-[#faf8f5] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-[#211e1a]"
        >
            {/* Décoration */}
            <div className="pointer-events-none absolute top-20 -left-40 size-96 rounded-full bg-[#c5a98b]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-[#a5a58d]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* En-tête */}
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b49a7b]/30 bg-[#b49a7b]/10 px-4 py-2 text-sm font-medium text-[#8b7257] dark:text-[#d0b99c]">
                        <Heart className="size-4" />
                        Instantanés de bonheur
                    </div>

                    <h2 className="font-cormorant text-4xl font-semibold tracking-tight text-[#3d352d] sm:text-5xl lg:text-6xl dark:text-[#f3eae0]">
                        Compagnons Heureux
                    </h2>

                    <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                        <span className="h-px w-12 bg-[#b49a7b]/60" />
                        <span className="text-[#a88b6b]">✦</span>
                        <span className="h-px w-12 bg-[#b49a7b]/60" />
                    </div>

                    <p className="mt-6 text-base leading-8 text-[#756b60] sm:text-lg dark:text-[#bdb2a5]">
                        Nos pensionnaires et patients au cours de leurs
                        activités, soins et moments de détente.
                    </p>
                </div>

                {/* Galerie */}
                <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[250px] lg:grid-cols-3">
                    {gallery.map((item, index) => (
                        <button
                            key={item.name}
                            type="button"
                            onClick={() => setActiveImage(index)}
                            aria-label={`Agrandir la photo de ${item.name}, ${item.breed}`}
                            className={`group relative overflow-hidden rounded-2xl bg-[#e8dfd3] text-left shadow-md shadow-[#6b5845]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6b5845]/15 focus-visible:ring-2 focus-visible:ring-[#92785b] focus-visible:ring-offset-4 focus-visible:outline-none dark:bg-[#41372d] dark:focus-visible:ring-offset-[#211e1a] ${
                                item.size === 'lg' ? 'sm:row-span-2' : ''
                            }`}
                        >
                            <img
                                src={item.image}
                                alt={item.alt}
                                loading="lazy"
                                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Agrandir */}
                            <div className="absolute top-4 right-4 flex size-10 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                <ZoomIn className="size-5" />
                            </div>

                            {/* Légende */}
                            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                                <div>
                                    <p className="font-cormorant text-2xl font-semibold text-white sm:text-3xl">
                                        {item.name}
                                    </p>
                                    <p className="mt-0.5 text-sm text-white/80">
                                        {item.breed}
                                    </p>
                                    <span className="mt-3 inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                        {item.activity}
                                    </span>
                                </div>

                                <PawPrint className="mb-1 size-5 shrink-0 text-white/70" />
                            </div>
                        </button>
                    ))}
                </div>

                <p className="mt-8 text-center text-sm text-[#968979] dark:text-[#a99b89]">
                    <ZoomIn className="mr-1 inline size-4" />
                    Cliquez sur une photo pour l'agrandir
                </p>
            </div>

            {/* Lightbox */}
            {activeImage !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Photo de ${gallery[activeImage].name}`}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={() => setActiveImage(null)}
                >
                    <button
                        type="button"
                        onClick={() => setActiveImage(null)}
                        aria-label="Fermer la galerie"
                        className="absolute top-5 right-5 z-10 flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                        <X className="size-5" />
                    </button>

                    <button
                        type="button"
                        aria-label="Photo précédente"
                        onClick={(event) => {
                            event.stopPropagation();
                            setActiveImage(
                                (activeImage - 1 + gallery.length) %
                                    gallery.length,
                            );
                        }}
                        className="absolute left-3 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
                    >
                        ‹
                    </button>

                    <div
                        className="flex max-h-full max-w-5xl flex-col items-center"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={gallery[activeImage].image}
                            alt={gallery[activeImage].alt}
                            className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl"
                        />
                        <div className="mt-5 text-center">
                            <h3 className="font-cormorant text-3xl font-semibold text-white">
                                {gallery[activeImage].name}
                            </h3>
                            <p className="mt-1 text-sm text-white/70">
                                {gallery[activeImage].breed} ·{' '}
                                {gallery[activeImage].activity}
                            </p>
                            <p className="mt-2 text-xs text-white/50">
                                {activeImage + 1} / {gallery.length}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        aria-label="Photo suivante"
                        onClick={(event) => {
                            event.stopPropagation();
                            setActiveImage((activeImage + 1) % gallery.length);
                        }}
                        className="absolute right-3 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
                    >
                        ›
                    </button>
                </div>
            )}
        </section>
    );
}
