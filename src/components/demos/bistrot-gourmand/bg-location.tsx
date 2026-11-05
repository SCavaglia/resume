import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";

export function BgLocation() {
  const address = "28 Rue de la Table, 75002 [Ville], France";

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="acces" className="mx-auto max-w-7xl px-8 pt-46 pb-36">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
        {/* Partie 1 : Informations pratiques */}
        <div className="flex flex-col gap-8 pl-16">
          <div className="max-w-2xl">
            <p>Accès</p>

            <h2 className="mt-2 font-playfair text-5xl tracking-wide [font-variant-caps:small-caps] sm:text-6xl">
              Nous Trouver & Contacter
            </h2>

            <div className="mt-2 text-xl text-yellow-500">✦</div>
          </div>
          {/* Localisation */}
          <div className="flex gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-600">
              <MapPin className="size-6" aria-hidden="true" />
            </div>

            <div>
              <h3 className="mb-2 font-playfair text-xl font-semibold">Localisation</h3>

              <p className="leading-relaxed text-muted-foreground">
                28 Rue de la Table
                <br />
                75002 [Ville], France
              </p>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-yellow-700 transition-colors hover:text-yellow-800 hover:underline"
              >
                Itinéraire Google Maps
                <Navigation className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Horaires */}
          <div className="flex gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-600">
              <Clock className="size-6" aria-hidden="true" />
            </div>

            <div className="min-w-0">
              <h3 className="mb-3 font-playfair text-xl font-semibold">Horaires d'ouverture</h3>

              <div className="space-y-3 text-sm leading-relaxed">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                  <span className="font-medium">Mardi – Jeudi</span>
                  <span className="text-muted-foreground">12h00 – 14h00 · 19h00 – 22h00</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                  <span className="font-medium">Vendredi – Samedi</span>
                  <span className="text-muted-foreground">12h00 – 14h00 · 19h00 – 23h00</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                  <span className="font-medium">Dimanche – Lundi</span>
                  <span className="text-muted-foreground">Fermé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-600">
              <Phone className="size-6" aria-hidden="true" />
            </div>

            <div>
              <h3 className="mb-3 font-playfair text-xl font-semibold">Contact direct</h3>

              <a
                href="tel:+33000000000"
                className="mb-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                Par téléphone : 00 00 00 00 00
              </a>

              <a
                href="mailto:contact@exemple.fr"
                className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                Par email : contact@exemple.fr
              </a>
            </div>
          </div>
        </div>

        {/* Partie 2 : Google Maps */}
        <div className="mx-32 h-96 overflow-hidden rounded border bg-muted shadow-sm lg:mr-24 lg:ml-0 lg:h-116 lg:w-96">
          <iframe
            title="Localisation du Bistrot Gourmand sur Google Maps"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
            className="size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
