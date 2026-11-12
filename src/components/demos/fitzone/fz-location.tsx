import { useState } from "react";
import { MapPin } from "lucide-react";

export function FzLocation() {
  const locations = [
    { name: "Montpellier", postalCode: "34000" },
    { name: "Lattes", postalCode: "34970" },
    { name: "Castelnau-le-Lez", postalCode: "34170" },
    { name: "Mauguio", postalCode: "34130" },
    { name: "Pérols", postalCode: "34470" },
  ];

  const [search, setSearch] = useState("");
  const [result, setResult] = useState<"covered" | "outside" | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = search.trim().toLowerCase();

    if (!value) {
      setResult(null);
      return;
    }

    const location = locations.find(
      (location) => location.name.toLowerCase() === value || location.postalCode === value,
    );

    setResult(location ? "covered" : "outside");
  }

  return (
    <section id="localisation" className="mx-auto max-w-7xl px-8 py-16 sm:py-20">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-semibold tracking-wider text-red-500 uppercase">Ancrage Local</p>

        <h2 className="mt-4 font-oswald text-5xl font-bold tracking-wide uppercase sm:text-6xl">
          Salle de sport{" "}
          <span className="bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            proche de chez toi
          </span>
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Situé en plein cœur du 2ème arrondissement de [Ville], vérifiez si votre zone d'habitation
          donne droit à nos offres locales exclusives.
        </p>
      </div>

      {/* Location checker */}
      <div className="mx-auto mt-12 max-w-2xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">
            Vérification géographique
          </p>

          <h3 className="mt-2 text-2xl font-bold">Vérifie ton éligibilité locale</h3>

          <p className="mt-3 text-muted-foreground">
            Découvre si tu peux profiter de nos offres réservées aux habitants des communes
            voisines.
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <MapPin
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3 size-8 -translate-y-1/2 text-muted-foreground"
              />

              <input
                type="text"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setResult(null);
                }}
                placeholder="Ex. Montpellier ou 34000"
                aria-label="Code postal ou commune"
                className="h-20 w-full rounded-md border bg-background pr-4 pl-12 text-xl! font-semibold placeholder:text-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              />
            </div>

            <button
              type="submit"
              className="h-20 cursor-pointer rounded-md bg-linear-to-br from-red-500 to-orange-500 px-6 font-oswald text-xl font-bold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-lg"
            >
              Vérifier la zone
            </button>
          </form>

          <p className="mt-3 text-sm text-muted-foreground">
            Saisis ton code postal (ex. : 34000, 34970) pour vérifier si tu es dans notre zone.
          </p>

          {/* Result */}
          {result === "covered" && (
            <div className="mt-5 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Bonne nouvelle !</p>

              <p className="mt-2 flex items-start gap-2">
                <span className="text-xl">🎉</span>
                <span>
                  Éligibilité confirmée ! Utilise le code exclusif{" "}
                  <strong className="text-red-500">FIT-VIP</strong> pour débloquer ton essai gratuit
                  et une boisson protéinée offerte à ton arrivée !
                </span>
              </p>
            </div>
          )}

          {result === "outside" && (
            <div className="mt-5 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Commune non répertoriée</p>

              <p className="mt-2 text-sm text-muted-foreground">
                Contacte-nous pour vérifier si tu peux bénéficier de nos offres locales.
              </p>
            </div>
          )}

          {/* Covered locations */}
          <div className="mt-6 flex flex-wrap gap-2">
            {locations.map((location) => (
              <span
                key={location.postalCode}
                className="rounded-full border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground"
              >
                {location.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
