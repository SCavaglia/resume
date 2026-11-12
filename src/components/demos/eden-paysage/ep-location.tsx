import { useState } from "react";
import { CheckCircle2, MapPin, Search, XCircle } from "lucide-react";

const communes = [
  { name: "Lyon", postalCode: "69000" },
  { name: "Villeurbanne", postalCode: "69100" },
  { name: "Bron", postalCode: "69500" },
  { name: "Écully", postalCode: "69130" },
  { name: "Tassin-la-Demi-Lune", postalCode: "69160" },
  { name: "Caluire-et-Cuire", postalCode: "69300" },
  { name: "Saint-Priest", postalCode: "69800" },
  { name: "Meyzieu", postalCode: "69330" },
  { name: "Oullins", postalCode: "69600" },
  { name: "Dardilly", postalCode: "69570" },
];

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function EpLocation() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const address = "Reims, France";

  const normalizedQuery = normalize(query);

  const exactMatch = communes.find(
    (commune) =>
      normalize(commune.name) === normalizedQuery || commune.postalCode === normalizedQuery,
  );

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearched(true);
  }

  return (
    <section id="zone" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Gauche : informations et recherche */}
          <div className="min-w-0 flex-1">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              Région de [Ville]
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Notre zone de chalandise
            </h2>

            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Situés à [Ville], nos compagnons paysagistes et techniciens d'aménagement se déplacent
              dans toute l'agglomération pour étudier vos projets de rénovation de jardin, pose de
              pergolas bioclimatiques et création de pièces d'eau de standing.
            </p>

            <div className="mt-8">
              <h3 className="font-semibold">Vérifiez si nous intervenons dans votre commune</h3>

              <form onSubmit={handleSearch} className="mt-4 flex flex-col gap-3 sm:flex-row">
                <div className="relative min-w-0 flex-1">
                  <MapPin
                    className="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    value={query}
                    onChange={(event) => {
                      setQuery(event.target.value);
                      setSearched(false);
                    }}
                    placeholder="Commune ou code postal"
                    aria-label="Commune ou code postal"
                    className="h-12 w-full rounded-xl border border-input bg-background pr-4 pl-11 text-sm transition outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!normalizedQuery}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Search className="size-4" aria-hidden="true" />
                  Tester l'éligibilité
                </button>
              </form>

              {searched && (
                <div
                  role="status"
                  className={`mt-4 flex items-start gap-3 rounded-xl border p-4 ${
                    exactMatch
                      ? "border-green-600/20 bg-green-600/5"
                      : "border-destructive/20 bg-destructive/5"
                  }`}
                >
                  {exactMatch ? (
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600" />
                  ) : (
                    <XCircle className="mt-0.5 size-5 shrink-0 text-destructive" />
                  )}

                  <div>
                    <p className="font-semibold">
                      {exactMatch
                        ? `${exactMatch.name} : zone desservie !`
                        : "Commune non référencée"}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {exactMatch
                        ? "Nous intervenons dans cette commune. Contactez-nous pour étudier votre projet."
                        : "Nous ne pouvons pas confirmer notre intervention dans cette commune. Contactez-nous pour vérifier votre adresse."}
                    </p>
                  </div>
                </div>
              )}

              <p className="mt-3 text-xs text-muted-foreground">
                Saisissez une commune ou un code postal de la métropole.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {communes.map((commune) => (
                <button
                  key={commune.name}
                  type="button"
                  onClick={() => {
                    setQuery(commune.name);
                    setSearched(false);
                  }}
                  className="rounded-full border border-border bg-muted/40 px-3 py-2 text-xs font-medium transition hover:border-primary/40 hover:bg-primary/5"
                >
                  {commune.name} ({commune.postalCode})
                </button>
              ))}
            </div>
          </div>

          {/* Droite : carte illustrative */}
          <div className="w-full min-w-0 flex-1">
            <div className="relative isolate min-h-[420px] overflow-hidden rounded-3xl border border-border bg-muted sm:min-h-[500px]">
              <iframe
                title="Localisation d'Eden Paysage sur Google Maps"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                className="absolute inset-0 size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Carte illustrative — zone d'intervention indicative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
