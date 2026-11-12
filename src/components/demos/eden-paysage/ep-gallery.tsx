import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const categories = [
  "Tous nos projets",
  "Architecture Paysagère",
  "Architecture d'Intérieur",
  "Cuisines de Prestige",
  "Piscines & Spas",
];

const projects = [
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    alt: "Jardin Zen d’architecte avec terrasse en bois de teck et allée en dalles de pierre",
    category: "Architecture Paysagère",
    categoryLabel: "Jardin",
    title: "Jardin Zen & Piscine Miroir",
    location: "Villa Contemporaine Ecully",
    description:
      "Aménagement d’une terrasse en bois de teck, allées de pierre de Bourgogne et végétation méditerranéenne.",
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    alt: "Salon au style biophilique contemporain avec grandes baies vitrées et éléments en bois de chêne",
    category: "Architecture d'Intérieur",
    categoryLabel: "Intérieur",
    title: "Salon Biophilique Lumineux",
    location: "Appartement T5 Tassin",
    description:
      "Réécriture complète des volumes, création de claustras en chêne massif et ameublement sur-mesure.",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    alt: "Cuisine ouverte de luxe en noyer avec îlot central en marbre blanc",
    category: "Cuisines de Prestige",
    categoryLabel: "Cuisine",
    title: "Cuisine Ouverte en Noyer & Marbre",
    location: "Penthouse Lyon 6ème",
    description:
      "Cuisine haut de gamme avec îlot monobloc en marbre de Carrare et rangements intégrés en noyer.",
  },
  {
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc",
    alt: "Piscine miroir à débordement avec plage en dalles de grès cérame au coucher du soleil",
    category: "Piscines & Spas",
    categoryLabel: "Piscine",
    title: "Couloir de Nage Miroir",
    location: "Propriété Saint-Cyr",
    description:
      "Construction d’une piscine miroir à débordement périphérique et plage en grès cérame naturel.",
  },
];

export function EpGallery() {
  const [activeCategory, setActiveCategory] = useState("Tous nos projets");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) => activeCategory === "Tous nos projets" || project.category === activeCategory,
      ),
    [activeCategory],
  );

  const selectedProject = selectedIndex !== null ? filteredProjects[selectedIndex] : null;

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex - 1 + filteredProjects.length) % filteredProjects.length);
  }, [selectedIndex, filteredProjects]);

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex + 1) % filteredProjects.length);
  }, [selectedIndex, filteredProjects]);

  // Fermer avec Échap et naviguer avec les flèches.
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject, closeLightbox, showPrevious, showNext]);

  const changeCategory = (category: string) => {
    setActiveCategory(category);
    setSelectedIndex(null);
  };

  return (
    <section id="realisations" className="scroll-mt-24 bg-background px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-primary uppercase">
            Notre savoir-faire
          </p>

          <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl">
            Nos Projets Récents
          </h2>

          <p className="mt-5 font-cabin text-base leading-7 text-muted-foreground sm:text-lg">
            Découvrez notre sélection de réalisations d'exception à Lyon et ses alentours. Cliquez
            sur n'importe quel projet pour ouvrir la fiche détaillée.
          </p>
        </div>

        {/* Category selector */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => changeCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground shadow-md"
                  : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group overflow-hidden rounded-xl border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />

                <span className="absolute top-4 left-4 rounded-full bg-background/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground backdrop-blur-sm">
                  {project.categoryLabel}
                </span>

                <div className="absolute right-4 bottom-4 flex size-10 translate-y-3 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Maximize2 className="size-4" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>

                <p className="mt-1 text-sm font-medium text-primary">{project.location}</p>

                <p className="mt-3 font-cabin text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Fermer la galerie"
            className="absolute top-5 right-5 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="size-6" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Projet précédent"
            className="absolute left-3 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft className="size-7" />
          </button>

          <div
            className="flex max-h-full w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.alt}
              className="max-h-[70vh] w-full rounded-lg object-contain"
            />

            <div className="mt-6 text-center text-white">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                {selectedProject.categoryLabel} · {selectedProject.location}
              </p>

              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{selectedProject.title}</h3>

              <p className="mx-auto mt-3 max-w-2xl font-cabin text-sm leading-6 text-white/70 sm:text-base">
                {selectedProject.description}
              </p>

              <p className="mt-5 text-xs tracking-widest text-white/50">
                {selectedIndex! + 1} / {filteredProjects.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Projet suivant"
            className="absolute right-3 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
          >
            <ChevronRight className="size-7" />
          </button>
        </div>
      )}
    </section>
  );
}
