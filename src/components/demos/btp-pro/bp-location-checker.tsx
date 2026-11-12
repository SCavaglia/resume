import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock3, Info, MapPin, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const locations = [
  { name: "Reims", postalCode: "51100" },
  { name: "Tinqueux", postalCode: "51430" },
  { name: "Cormontreuil", postalCode: "51350" },
  { name: "Bétheny", postalCode: "51450" },
  { name: "Bezannes", postalCode: "51430" },
  { name: "Les Mesneux", postalCode: "51370" },
];

type LocationItem = (typeof locations)[number];
type SearchResult = LocationItem | "outside" | null;

function normalize(value: string) {
  return value
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function BpLocationChecker() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<SearchResult>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const search = normalize(query);

    if (!search) {
      setResult(null);
      return;
    }

    const location = locations.find(
      (item) => normalize(item.name) === search || item.postalCode.trim() === search,
    );

    setResult(location ?? "outside");
  };

  return (
    <div className="mx-auto w-full max-w-3xl rounded-2xl border bg-card p-6 shadow-sm sm:p-8 lg:col-start-1 lg:row-start-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <MapPin
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />

          <Input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setResult(null);
            }}
            placeholder="Code postal ou commune"
            aria-label="Code postal ou commune"
            className="pl-9"
          />
        </div>

        <Button type="submit" className="shrink-0">
          <Search aria-hidden="true" />
          Vérifier
        </Button>
      </form>

      <div aria-live="polite" className="mt-6">
        {result && result !== "outside" ? (
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
            <p className="flex items-center gap-4 font-semibold">
              <CheckCircle2 aria-hidden="true" className="size-5 text-green-500" />
              Zone couverte — {result.name.toUpperCase()}
            </p>

            <p className="mt-4 ml-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Clock3 aria-hidden="true" className="size-4 shrink-0" />
              Déplacement rapide en moins de 35 min (proche Bezannes).
            </p>
          </div>
        ) : result === "outside" ? (
          <div className="rounded-xl border bg-muted/40 p-4">
            <p className="flex items-center gap-4 font-semibold">
              <Info aria-hidden="true" className="size-5 text-muted-foreground" />
              Zone limitrophe ou hors zone standard
            </p>

            <p className="mt-4 ml-9 text-sm text-muted-foreground">
              Nous intervenons occasionnellement au-delà. Contactez-nous pour confirmation.
            </p>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Vérifiez si votre commune se trouve dans notre zone d'intervention.
          </p>
        )}
      </div>

      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
        {locations.map((location) => (
          <span
            key={`${location.name}-${location.postalCode}`}
            className="rounded-full border bg-background px-3 py-1.5 text-sm text-muted-foreground"
          >
            {location.name} ({location.postalCode})
          </span>
        ))}
      </div>
    </div>
  );
}
