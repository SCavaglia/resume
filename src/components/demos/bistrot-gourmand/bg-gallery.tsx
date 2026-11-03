import { useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog";

const galleryItems = [
    {
        id: "a",
        src: "/demos/bistrot-gourmand/gallery-01.jpg",
        alt: "Salade niçoise",
    },
    {
        id: "b",
        src: "/demos/bistrot-gourmand/gallery-02.jpg",
        alt: "Tartare de saumon",
    },
    {
        id: "c",
        src: "/demos/bistrot-gourmand/gallery-03.jpg",
        alt: "Risotto aux champignons",
    },
    {
        id: "d",
        src: "/demos/bistrot-gourmand/gallery-04.jpg",
        alt: "Spaghetti à la carbonara",
    },
    {
        id: "e",
        src: "/demos/bistrot-gourmand/gallery-05.jpg",
        alt: "Saumon grillé",
    },
    {
        id: "f",
        src: "/demos/bistrot-gourmand/gallery-06.webp",
        alt: "Verre de vin rouge",
    },
];

export function BgGallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const selectedItem =
        selectedIndex !== null ? galleryItems[selectedIndex] : null;

    const showPrevious = () => {
        setSelectedIndex((current) =>
            current === null
                ? null
                : (current - 1 + galleryItems.length) % galleryItems.length,
        );
    };

    const showNext = () => {
        setSelectedIndex((current) =>
            current === null
                ? null
                : (current + 1) % galleryItems.length,
        );
    };

    return (
        <section id="gallerie" className="py-24">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                {/* En-tête */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-playfair text-5xl tracking-wide [font-variant-caps:small-caps] sm:text-6xl">
                        Galerie Gourmande
                    </h2>

                    <div className="mt-2 text-xl text-yellow-500">✦</div>

                    <p className="mx-auto mt-4 max-w-xl text-center text-lg font-light text-muted-foreground">
                        Un aperçu de nos assiettes et de notre savoir-faire
                        culinaire au quotidien.
                    </p>
                </div>

                {/* Galerie */}
                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 place-content-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryItems.map((item, index) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedIndex(index)}
                            aria-label={`Agrandir : ${item.alt}`}
                            className="group relative aspect-square overflow-hidden rounded-2xl border border-border/60 bg-card shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-yellow-500 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:outline-none"
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                                className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                                <div className="flex w-full items-center justify-between p-5 text-white">
                                    <span className="font-playfair text-xl">
                                        {item.alt}
                                    </span>
                                    <Images className="size-5 shrink-0" />
                                </div>
                            </div>

                            {/* Décoration */}
                            <div className="absolute inset-3 rounded-xl border border-white/0 transition-all duration-500 group-hover:border-white/50" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <Dialog
                open={selectedIndex !== null}
                onOpenChange={(open) => {
                    if (!open) setSelectedIndex(null);
                }}
            >
                <DialogContent className="max-w-5xl border-none bg-black/95 p-3 text-white sm:p-5">
                    <DialogTitle className="sr-only">
                        {selectedItem?.alt ?? "Galerie photo"}
                    </DialogTitle>

                    <DialogDescription className="sr-only">
                        Photographie agrandie. Utilisez les flèches pour
                        parcourir la galerie.
                    </DialogDescription>

                    {selectedItem && (
                        <div className="relative flex flex-col items-center">
                            <div className="relative flex h-[65vh] w-full items-center justify-center">
                                <img
                                    src={selectedItem.src}
                                    alt={selectedItem.alt}
                                    className="max-h-full max-w-full rounded-lg object-contain"
                                />

                                {/* Navigation précédente */}
                                <button
                                    type="button"
                                    onClick={showPrevious}
                                    aria-label="Image précédente"
                                    className="absolute left-2 flex size-11 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-yellow-600"
                                >
                                    <ChevronLeft className="size-7" />
                                </button>

                                {/* Navigation suivante */}
                                <button
                                    type="button"
                                    onClick={showNext}
                                    aria-label="Image suivante"
                                    className="absolute right-2 flex size-11 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-yellow-600"
                                >
                                    <ChevronRight className="size-7" />
                                </button>
                            </div>

                            <div className="flex w-full items-center justify-between px-2 pt-4">
                                <p className="font-playfair text-lg">
                                    {selectedItem.alt}
                                </p>

                                <span className="text-sm text-white/60">
                                    {selectedIndex! + 1} / {galleryItems.length}
                                </span>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}