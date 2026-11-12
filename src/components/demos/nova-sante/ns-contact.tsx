import { Accessibility, Clock, MapPin, Navigation, Phone, TrainFront } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: (
      <>
        25 Avenue de la Santé
        <br />
        75012 Paris
      </>
    ),
  },
  {
    icon: Clock,
    title: "Horaires d'ouverture",
    content: (
      <>
        Lundi au Vendredi : 8h – 19h
        <br />
        Samedi : 9h – 13h
      </>
    ),
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: (
      <>
        Accueil :{" "}
        <a
          href="tel:+33153678901"
          className="font-medium text-foreground transition-colors hover:text-primary"
        >
          01 53 67 89 01
        </a>
        <br />
        Urgences (Samu) :{" "}
        <a
          href="tel:15"
          className="font-medium text-foreground transition-colors hover:text-primary"
        >
          15
        </a>
      </>
    ),
  },
  {
    icon: TrainFront,
    title: "Accès transports",
    content: (
      <>
        Métro Ligne 6 — Station Santé
        <br />
        Parking souterrain gratuit réservé
      </>
    ),
  },
];

export function NsContact() {
  return (
    <section id="contact" className="scroll-mt-6 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            Infos Pratiques
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Nous trouver facilement
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground sm:text-lg">
            La clinique est accessible aux personnes à mobilité réduite (normes PMR) et dispose d'un
            ascenseur.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactInfo.map(({ icon: Icon, title, content }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-semibold">{title}</h3>
                <div className="text-sm leading-relaxed text-muted-foreground">{content}</div>
              </div>
            ))}

            <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/40 p-5 sm:col-span-2">
              <Accessibility className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                Accès PMR, ascenseur et espaces adaptés pour vous accueillir dans les meilleures
                conditions.
              </p>
            </div>
          </div>

          <div className="flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-border bg-muted/30">
            <div className="relative flex flex-1 flex-col items-center justify-center gap-4 overflow-hidden p-8 text-center">
              <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:24px_24px]" />
              </div>

              <div className="relative flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <MapPin className="size-7" aria-hidden="true" />
              </div>

              <div className="relative">
                <h3 className="text-xl font-semibold">NovaSanté - [Ville] 12ème</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  25 Avenue de la Santé, 75012 [Ville]
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=25+Avenue+de+la+Sant%C3%A9%2C+75012+Paris"
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Navigation className="size-4" aria-hidden="true" />
                Ouvrir dans Google Maps
              </a>
            </div>

            <div className="border-t border-border bg-card px-6 py-4">
              <p className="text-center text-xs text-muted-foreground">
                NovaSanté · [Ville] 12ème · Accès PMR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
