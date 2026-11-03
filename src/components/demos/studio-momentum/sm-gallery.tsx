import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Camera, ChevronLeft, ChevronRight, Flower2, MapPin, X } from "lucide-react";

type Category = "Mariages" | "Entreprise & Galas" | "Soirées Privées" | "Mode & Éditoriaux";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  category: Category;
  image: string;
  type: string;
  client: string;
  deliverables: string;
  presentation: string;
};

const categories = ["Tous nos projets", "Mariages", "Entreprise & Galas", "Soirées Privées", "Mode & Éditoriaux"] as const;

const projects: Project[] = [
  {
    id: 1,
    title: "Clara & Sophian",
    subtitle: "Mariage Clara & Sophian - Moment Studio",
    location: "Château de Vaux-le-Vicomte",
    category: "Mariages",
    image: "/resume/studio-momentum/portfolio_vaux.webp",
    type: "Mariage d'Exception",
    client: "Particulier",
    deliverables: "Photo, Film 4K, Coordination & Fleurs",
    presentation:
      "Un mariage royal rassemblant 180 convives dans les jardins à la française et les salons dorés de Vaux-le-Vicomte. Nos équipes ont géré le reportage photo complet avec lumière naturelle, la réalisation d'un film cinématique avec drone de nuit, ainsi que toute la scénographie florale baroque.",
  },
  {
    id: 2,
    title: "L'Oréal Luxe",
    subtitle: "L'Oréal Luxe - Moment Studio",
    location: "Palais de Tokyo — Paris",
    category: "Entreprise & Galas",
   image: "/resume/studio-momentum/portfolio_loreal.webp",
    type: "Événement de Marque",
    client: "L'Oréal Luxe",
    deliverables: "Direction artistique, Photo, Vidéo & Scénographie",
    presentation:
      "Une soirée immersive imaginée pour célébrer l'univers du luxe et de la beauté. Une scénographie contemporaine, des installations lumineuses et une couverture photo et vidéo complète ont accompagné cette expérience exclusive au cœur de Paris.",
  },
  {
    id: 3,
    title: "Vogue Editorial",
    subtitle: "Vogue Editorial - Moment Studio",
    location: "Serres d'Auteuil — Paris",
    category: "Mode & Éditoriaux",
   image: "/resume/studio-momentum/portfolio_vogue.webp",
    type: "Production Éditoriale",
    client: "Vogue",
    deliverables: "Photographie, Direction artistique & Stylisme",
    presentation:
      "Une production éditoriale inspirée par la rencontre entre la haute couture et la nature. Nos équipes ont imaginé une direction artistique élégante, sélectionné les décors et coordonné le shooting au sein des serres historiques.",
  },
  {
    id: 4,
    title: "Gala Chanel",
    subtitle: "Gala Chanel - Moment Studio",
    location: "Grand Palais — Paris",
    category: "Entreprise & Galas",
   image: "/resume/studio-momentum/portfolio_chanel.webp",
    type: "Gala Prestige",
    client: "Chanel",
    deliverables: "Photo, Film, Décoration & Coordination",
    presentation:
      "Une réception d'exception dans un lieu emblématique parisien. De l'accueil des invités à la mise en lumière des espaces, chaque détail a été pensé pour créer une atmosphère raffinée et offrir une expérience mémorable.",
  },
  {
    id: 5,
    title: "Anniversaire Bohème",
    subtitle: "Anniversaire Bohème - Moment Studio",
    location: "Rooftop Privé — Le Marais",
    category: "Soirées Privées",
    image: "/resume/studio-momentum/portfolio_boheme.webp",
    type: "Célébration Privée",
    client: "Particulier",
    deliverables: "Décoration florale, Photo, DJ & Coordination",
    presentation:
      "Une célébration intimiste sur un rooftop parisien, pensée autour d'une ambiance bohème et chaleureuse. Mobilier naturel, compositions florales, musique live et reportage photo ont donné vie à cette soirée sur mesure.",
  },
  {
    id: 6,
    title: "Collection Capsule",
    subtitle: "Collection Capsule - Moment Studio",
    location: "Jacquemus Campaign",
    category: "Mode & Éditoriaux",
  image: "/resume/studio-momentum/portfolio_jacquemus.webp",
    type: "Campagne de Mode",
    client: "Jacquemus",
    deliverables: "Photographie, Vidéo & Direction artistique",
    presentation:
      "Une campagne visuelle autour d'une collection capsule, portée par une esthétique solaire et minimaliste. Moment Studio a accompagné la production du shooting, de la recherche de lieu à la création des contenus photo et vidéo.",
  },
];

export function SmGallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Tous nos projets");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "Tous nos projets" ? projects : projects.filter((project) => project.category === activeCategory);

  const selectedIndex = selectedProject ? filteredProjects.findIndex((project) => project.id === selectedProject.id) : -1;

  const closeLightbox = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const showPrevious = useCallback(() => {
    if (selectedIndex < 0) return;
    const previousIndex = (selectedIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[previousIndex]);
  }, [selectedIndex, filteredProjects]);

  const showNext = useCallback(() => {
    if (selectedIndex < 0) return;
    const nextIndex = (selectedIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
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

  // Si on change de filtre, on ferme la fiche actuellement ouverte.
  const handleCategoryChange = (category: (typeof categories)[number]) => {
    setActiveCategory(category);
    closeLightbox();
  };

  return (
    <>
      <section id="portfolio" className="scroll-mt-6 relative overflow-hidden bg-[#faf8f2] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-[#171613]">
        {/* Décoration */}
        <div className="pointer-events-none absolute top-40 -left-40 h-96 w-96 rounded-full bg-[#c49a45]/10 blur-[120px] dark:bg-[#c49a45]/10" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#e5c982]/20 blur-[120px] dark:bg-[#a98235]/10" />

        <div className="relative mx-auto max-w-7xl">
          {/* En-tête */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#b58a35]/40 bg-[#e9d7aa]/30 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#80601e] uppercase dark:border-[#c5a04e]/40 dark:bg-[#c5a04e]/10 dark:text-[#e2c47f]">
              <Camera className="h-4 w-4" />
              Réalisations Récentes
            </span>

            <h2 className="mt-6 font-cormorant text-4xl font-semibold text-[#29251e] sm:text-5xl lg:text-6xl dark:text-[#f5f0e5]">
              Notre Portfolio
            </h2>

            <div className="mt-5 flex items-center justify-center gap-3 text-[#b58a35] dark:text-[#c5a04e]">
              <span className="h-px w-12 bg-current" />
              <span>✦</span>
              <span className="h-px w-12 bg-current" />
            </div>

            <p className="mt-5 text-base leading-relaxed text-[#6e675b] sm:text-lg dark:text-[#c0b8a8]">
              Découvrez une sélection de nos plus beaux événements immortalisés par nos artistes.
            </p>
          </div>

          {/* Filtres */}
          <div className="mb-10 flex justify-start overflow-x-auto pb-3 sm:justify-center">
            <div className="flex min-w-max items-center gap-2 rounded-full border border-[#e2d8c5] bg-white/70 p-1.5 dark:border-[#49402f] dark:bg-[#242119]">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    aria-pressed={isActive}
                    className={`rounded-full px-5 py-3 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                      isActive
                        ? "bg-[#a77b27] text-white shadow-md shadow-[#a77b27]/20 dark:bg-[#c5a04e] dark:text-[#211b10]"
                        : "text-[#716653] hover:bg-[#eee5d4] hover:text-[#80601e] dark:text-[#bcb09a] dark:hover:bg-[#393225] dark:hover:text-[#e7d29d]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Galerie */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedProject(project)}
                className={`group relative block w-full overflow-hidden rounded-2xl text-left outline-none focus-visible:ring-2 focus-visible:ring-[#b58a35] focus-visible:ring-offset-4 dark:focus-visible:ring-offset-[#171613] ${
                  index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
                aria-label={`Découvrir le projet ${project.title}`}
              >
                <div
                  className={`relative overflow-hidden bg-[#e9dfcc] dark:bg-[#29251d] ${index === 0 ? "aspect-video" : "aspect-4/5"}`}
                >
                  <img
                    src={project.image}
                    alt={project.subtitle}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/5 opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                  {/* Catégorie */}
                  <span className="absolute top-5 left-5 rounded-full border border-white/30 bg-black/25 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Informations */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-7">
                    <div>
                      <h3 className="font-cormorant text-3xl font-semibold text-white sm:text-4xl">{project.title}</h3>
                      <p className="mt-2 flex items-center gap-1.5 text-xs text-white/80 sm:text-sm">
                        <MapPin className="h-3.5 w-3.5 text-[#e6c779]" />
                        {project.location}
                      </p>
                    </div>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#e6c779] group-hover:bg-[#c5a04e] group-hover:text-[#211b10]">
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="py-16 text-center text-[#716653] dark:text-[#bcb09a]">Aucun projet dans cette catégorie.</p>
          )}

          {/* Bas de galerie */}
          <div className="mt-12 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.2em] text-[#9a8253] uppercase dark:text-[#bba36e]">
            <span className="h-px w-10 bg-current" />
            L'élégance dans chaque détail
            <span className="h-px w-10 bg-current" />
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-3 backdrop-blur-md sm:p-6 lg:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`Détails du projet ${selectedProject.title}`}
        >
          <div className="relative flex h-full max-h-[850px] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-[#c5a04e]/30 bg-[#faf8f2] shadow-2xl lg:flex-row dark:bg-[#1d1a15]">
            {/* Fermer */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Fermer"
              className="absolute top-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-[#c5a04e] hover:text-[#211b10]"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Photo gauche */}
            <div className="relative min-h-[260px] flex-1 overflow-hidden bg-[#29251d] lg:min-h-0 lg:w-[58%] lg:flex-none">
              <img
                key={selectedProject.id}
                src={selectedProject.image}
                alt={selectedProject.subtitle}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/10" />

              <div className="absolute right-6 bottom-6 left-6 text-white sm:bottom-9 sm:left-9">
                <p className="text-xs font-semibold tracking-[0.25em] text-[#e6c779] uppercase">Moment Studio · Portfolio</p>
                <h3 className="mt-3 font-cormorant text-4xl font-semibold sm:text-5xl lg:text-6xl">{selectedProject.title}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
                  <MapPin className="h-4 w-4 text-[#e6c779]" />
                  {selectedProject.location}
                </p>
              </div>

              {/* Navigation */}
              {filteredProjects.length > 1 && (
                <div className="absolute right-6 bottom-6 flex gap-2 sm:right-9 sm:bottom-9">
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Projet précédent"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-md transition-colors hover:bg-[#c5a04e] hover:text-[#211b10]"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Projet suivant"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-md transition-colors hover:bg-[#c5a04e] hover:text-[#211b10]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Informations droite */}
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:w-[42%] lg:flex-none">
              <div className="p-6 sm:p-9 lg:p-10">
                {/* Type de projet */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#b58a35]/40 bg-[#e9d7aa]/30 px-3 py-1.5 text-[10px] font-semibold tracking-[0.17em] text-[#80601e] uppercase dark:border-[#c5a04e]/40 dark:bg-[#c5a04e]/10 dark:text-[#e2c47f]">
                  <Flower2 className="h-3.5 w-3.5" />
                  {selectedProject.type}
                </div>

                <h2 className="mt-5 font-cormorant text-4xl leading-tight font-semibold text-[#29251e] sm:text-5xl dark:text-[#f5f0e5]">
                  {selectedProject.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-[#756b60] dark:text-[#c0b8a8]">
                  {selectedProject.title} — {selectedProject.location}
                </p>

                <div className="my-7 h-px bg-linear-to-r from-[#b58a35]/60 via-[#b58a35]/20 to-transparent" />

                {/* Détails */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.18em] text-[#9a8253] uppercase dark:text-[#bba36e]">Client</p>
                    <p className="mt-2 text-sm font-medium text-[#393329] dark:text-[#eee5d5]">{selectedProject.client}</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.18em] text-[#9a8253] uppercase dark:text-[#bba36e]">
                      Lieu du Projet
                    </p>
                    <p className="mt-2 flex items-start gap-1.5 text-sm font-medium text-[#393329] dark:text-[#eee5d5]">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#a77b27] dark:text-[#c5a04e]" />
                      {selectedProject.location}
                    </p>
                  </div>
                </div>

                {/* Livrables */}
                <div className="mt-7">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#9a8253] uppercase dark:text-[#bba36e]">
                    Livrables & Prestations
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#51473d] dark:text-[#d5cbbb]">{selectedProject.deliverables}</p>
                </div>

                {/* Présentation */}
                <div className="mt-7">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#9a8253] uppercase dark:text-[#bba36e]">Présentation</p>
                  <p className="mt-3 text-sm leading-7 text-[#6e675b] dark:text-[#c0b8a8]">{selectedProject.presentation}</p>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={closeLightbox}
                  className="mt-9 flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#a77b27] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#a77b27]/15 transition-all hover:-translate-y-0.5 hover:bg-[#89631e] dark:bg-[#c5a04e] dark:text-[#211b10] dark:hover:bg-[#dfbd70]"
                >
                  S'inspirer de ce projet
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="mt-4 flex w-full items-center justify-center gap-2 py-2 text-xs font-semibold tracking-[0.16em] text-[#8a7650] uppercase transition-colors hover:text-[#a77b27] dark:text-[#bba36e] dark:hover:text-[#e2c47f]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Retour au portfolio
                </button>

                {/* Compteur */}
                <p className="mt-6 text-center text-[10px] font-medium tracking-[0.2em] text-[#a69a8c] uppercase dark:text-[#82766a]">
                  Projet {selectedIndex + 1} / {filteredProjects.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
