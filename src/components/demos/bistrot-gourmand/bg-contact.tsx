import { MapPin, Clock, Phone, ShoppingBag } from "lucide-react";

export function BgContact() {
  return (
    <section id="infos" className="pt-46">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-center font-playfair text-5xl tracking-wide [font-variant-caps:small-caps] sm:text-6xl">
            Retrouvez-nous
          </h2>

          <div className="mt-2 text-xl text-yellow-500">✦</div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 text-red-900 sm:grid-cols-2 lg:grid-cols-4 dark:text-red-200">
          <div className="group flex flex-col items-center gap-3 rounded border bg-yellow-500/5 px-6 py-16 text-center transition-all duration-300 hover:border-yellow-700">
            <MapPin
              className="size-14 rounded-full border bg-yellow-500/5 p-4 transition-all duration-600 group-hover:border-yellow-700"
              aria-hidden="true"
            />
            <h3 className="mt-8 font-playfair text-2xl font-semibold [font-variant-caps:small-caps]">
              Adresse
            </h3>
            <p>
              28 Rue de la Table
              <br />
              75002 [Ville]
            </p>
          </div>

          <div className="group flex flex-col items-center gap-3 rounded border bg-yellow-500/5 px-6 py-16 text-center transition-all duration-300 hover:border-yellow-700">
            <Clock
              className="size-14 rounded-full border bg-yellow-500/5 p-4 transition-all duration-600 group-hover:border-yellow-700"
              aria-hidden="true"
            />
            <h3 className="mt-8 font-playfair text-2xl font-semibold [font-variant-caps:small-caps]">
              Horaires
            </h3>
            <p>
              Mar - Sam : 12h-14h · 19h-22h
              <br />
              Vendredi - Samedi : jusqu'à 23h
            </p>
          </div>

          <div className="group flex flex-col items-center gap-3 rounded border bg-yellow-500/5 px-6 py-16 text-center transition-all duration-300 hover:border-yellow-700">
            <Phone
              className="size-14 rounded-full border bg-yellow-500/5 p-4 transition-all duration-600 group-hover:border-yellow-700"
              aria-hidden="true"
            />
            <h3 className="mt-8 font-playfair text-2xl font-semibold [font-variant-caps:small-caps]">
              Téléphone
            </h3>
            <p>00 00 00 00 00</p>
          </div>

          <div className="group flex flex-col items-center gap-3 rounded border bg-yellow-500/5 px-6 py-16 text-center transition-all duration-300 hover:border-yellow-700">
            <ShoppingBag
              className="size-14 rounded-full border bg-yellow-500/5 p-4 transition-all duration-600 group-hover:border-yellow-700"
              aria-hidden="true"
            />
            <h3 className="mt-8 font-playfair text-2xl font-semibold [font-variant-caps:small-caps]">
              À Emporter
            </h3>
            <p>
              Ajoutez des plats au panier à l'aide des boutons (+) pour commander en Click &
              Collect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
