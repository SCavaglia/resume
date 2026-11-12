import { useMemo, useState } from "react";
import { ArrowRight, BedDouble, MapPin, Ruler, Search, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const properties = [
  {
    id: 1,
    title: "Maison contemporaine Lyon 3e",
    location: "Lyon 3e",
    type: "Maison contemporaine",
    transaction: "À vendre",
    price: 385000,
    priceLabel: "385 000 €",
    surface: 120,
    rooms: 5,
    bedrooms: 3,
    description: "Jardin clos 500 m² · Garage indépendant.",
    image: "/resume/maison-reve/maison_lyon.webp",
  },
  {
    id: 2,
    title: "Appartement Haussmannien Paris 11e",
    location: "Paris 11e",
    type: "Appartement",
    transaction: "À vendre",
    price: 245000,
    priceLabel: "245 000 €",
    surface: 68,
    rooms: 3,
    bedrooms: 2,
    description: "Balcon filant · Parquet & moulures · Ascenseur.",
    image: "/resume/maison-reve/app_paris.webp",
  },
  {
    id: 3,
    title: "Studio meublé Lyon Centre",
    location: "Lyon Centre",
    type: "Studio",
    transaction: "Location",
    price: 680,
    priceLabel: "680 € / mois",
    surface: 25,
    rooms: 1,
    bedrooms: 0,
    description: "Rénové · Décoration contemporaine · Calme · Libre de suite.",
    image: "/resume/maison-reve/studio_lyon.webp",
  },
];

const propertyTypes = ["Tous les types", "Maison", "Appartement", "Studio", "Villa", "Loft"];

const budgets = [
  { label: "Tous les budgets", value: 0 },
  { label: "Jusqu’à 100 000 €", value: 100000 },
  { label: "Jusqu’à 250 000 €", value: 250000 },
  { label: "Jusqu’à 400 000 €", value: 400000 },
  { label: "Jusqu’à 600 000 €", value: 600000 },
];

export function MrShowroom() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Tous les types");
  const [budget, setBudget] = useState("0");
  const [filtersApplied, setFiltersApplied] = useState({
    location: "",
    type: "Tous les types",
    budget: 0,
  });

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesLocation = property.location
        .toLowerCase()
        .includes(filtersApplied.location.toLowerCase());

      const matchesType =
        filtersApplied.type === "Tous les types" ||
        property.type.toLowerCase().includes(filtersApplied.type.toLowerCase());

      const matchesBudget = filtersApplied.budget === 0 || property.price <= filtersApplied.budget;

      return matchesLocation && matchesType && matchesBudget;
    });
  }, [filtersApplied]);

  function handleFilter() {
    setFiltersApplied({
      location,
      type,
      budget: Number(budget),
    });
  }

  return (
    <section
      id="showroom"
      className="bg-[#f8f6f2] px-4 py-20 text-[#39342e] sm:px-6 lg:px-8 dark:bg-[#211e1a] dark:text-[#f4eee5]"
    >
      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-[#a78d6d] uppercase">
            <span className="h-px w-8 bg-[#bfa888]" />
            Notre sélection
            <span className="h-px w-8 bg-[#bfa888]" />
          </span>

          <h2 className="font-cormorant text-4xl font-medium sm:text-5xl lg:text-6xl">
            Le Showroom Immobilier
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#777066] sm:text-base dark:text-[#b8afa3]">
            Une sélection exclusive d'appartements de caractère, villas d'architectes et lofts
            urbains.
          </p>
        </div>

        {/* Filtres */}
        <div className="mb-12 rounded-sm border border-[#e5ded3] bg-white p-5 shadow-sm sm:p-7 dark:border-[#39332b] dark:bg-[#29251f]">
          <div className="mb-5 flex items-center gap-2 text-sm font-semibold">
            <SlidersHorizontal className="h-4 w-4 text-[#a78d6d]" />
            Trouvez votre bien idéal
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto]">
            {/* Secteur géographique */}
            <div className="space-y-2">
              <label
                htmlFor="mr-location"
                className="text-xs font-medium text-[#777066] dark:text-[#b8afa3]"
              >
                Secteur géographique
              </label>
              <div className="relative">
                <MapPin className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#a78d6d]" />
                <Input
                  id="mr-location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") handleFilter();
                  }}
                  placeholder="Ex. Lyon, Paris..."
                  className="h-11 rounded-sm border-[#e5ded3] pl-10 dark:border-[#494136] dark:bg-[#211e1a]"
                />
              </div>
            </div>

            {/* Type de bien */}
            <div className="space-y-2">
              <label
                htmlFor="mr-type"
                className="text-xs font-medium text-[#777066] dark:text-[#b8afa3]"
              >
                Type de bien
              </label>
              <select
                id="mr-type"
                value={type}
                onChange={(event) => setType(event.target.value)}
                className="h-11 w-full rounded-sm border border-[#e5ded3] bg-white px-3 text-sm outline-none focus:border-[#bfa888] dark:border-[#494136] dark:bg-[#211e1a]"
              >
                {propertyTypes.map((propertyType) => (
                  <option key={propertyType} value={propertyType}>
                    {propertyType}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <label
                htmlFor="mr-budget"
                className="text-xs font-medium text-[#777066] dark:text-[#b8afa3]"
              >
                Budget maximum
              </label>
              <select
                id="mr-budget"
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
                className="h-11 w-full rounded-sm border border-[#e5ded3] bg-white px-3 text-sm outline-none focus:border-[#bfa888] dark:border-[#494136] dark:bg-[#211e1a]"
              >
                {budgets.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Bouton */}
            <div className="flex items-end">
              <Button
                onClick={handleFilter}
                className="h-11 w-full rounded-sm bg-[#a78d6d] px-6 text-white hover:bg-[#927858] lg:w-auto"
              >
                <Search className="mr-2 h-4 w-4" />
                Filtrer les biens
              </Button>
            </div>
          </div>
        </div>

        {/* Résultats */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-[#777066] dark:text-[#b8afa3]">
            <span className="font-semibold text-[#39342e] dark:text-[#f4eee5]">
              {filteredProperties.length}
            </span>{" "}
            bien{filteredProperties.length > 1 ? "s" : ""} disponible
            {filteredProperties.length > 1 ? "s" : ""}
          </p>
        </div>

        {/* Cartes */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <article
                key={property.id}
                className="group overflow-hidden border border-[#e5ded3] bg-white transition-shadow duration-300 hover:shadow-xl dark:border-[#39332b] dark:bg-[#29251f]"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-[#e9e3d9]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <span className="absolute top-4 left-4 bg-[#a78d6d] px-3 py-1.5 text-[10px] font-semibold tracking-wider text-white uppercase">
                    {property.transaction}
                  </span>
                </div>

                {/* Informations */}
                <div className="p-6">
                  <p className="mb-2 flex items-center gap-1.5 text-xs text-[#9b8b75]">
                    <MapPin className="h-3.5 w-3.5" />
                    {property.location}
                  </p>

                  <h3 className="font-cormorant text-2xl font-semibold text-[#39342e] dark:text-[#f4eee5]">
                    {property.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#8a8176] dark:text-[#b8afa3]">{property.type}</p>

                  <p className="mt-5 font-cormorant text-3xl font-semibold text-[#a78d6d]">
                    {property.priceLabel}
                  </p>

                  <div className="my-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-[#eee9e1] py-4 text-xs text-[#777066] dark:border-[#494136] dark:text-[#b8afa3]">
                    <span className="flex items-center gap-1.5">
                      <Ruler className="h-4 w-4 text-[#a78d6d]" />
                      {property.surface} m²
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BedDouble className="h-4 w-4 text-[#a78d6d]" />
                      {property.rooms} pièces
                    </span>
                  </div>

                  <p className="min-h-12 text-sm leading-6 text-[#777066] dark:text-[#b8afa3]">
                    {property.description}
                  </p>

                  <a
                    href={`#bien-${property.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#a78d6d] uppercase transition-colors hover:text-[#806747]"
                  >
                    Consulter le dossier
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-[#d8cbbb] py-16 text-center dark:border-[#494136]">
            <Search className="mx-auto mb-4 h-8 w-8 text-[#bfa888]" />
            <h3 className="font-cormorant text-2xl">Aucun bien trouvé</h3>
            <p className="mt-2 text-sm text-[#777066] dark:text-[#b8afa3]">
              Essayez de modifier vos critères de recherche.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setLocation("");
                setType("Tous les types");
                setBudget("0");
                setFiltersApplied({
                  location: "",
                  type: "Tous les types",
                  budget: 0,
                });
              }}
              className="mt-5 rounded-sm border-[#bfa888] text-[#927858] hover:bg-[#f4f0e9]"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
