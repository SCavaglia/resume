import { BpLocationChecker } from "./bp-location-checker";

export function BpLocation() {
  const address = "Reims, France";

  return (
    <section id="zone-intervention" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Titre principal */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Nous intervenons près de chez vous
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 bg-primary" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Informations et vérification */}
          <div className="lg:col-start-1 lg:row-start-1">
            <div className="ml-0 sm:ml-8 lg:ml-0">
              <p className="w-fit border border-primary bg-secondary p-2 text-sm font-semibold tracking-wider text-primary uppercase">
                Proximité [Ville]
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-balance uppercase">
                Où travaillons-nous ?
              </h3>

              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                Basée à [Ville], l'entreprise BTP PRO intervient au quotidien dans un périmètre de
                25 kilomètres couvrant la ville de [Ville] et l'ensemble des 25 communes de
                l'agglomération (Tinqueux, Cormontreuil, Bezannes, Bétheny,
                Saint-Brice-Courcelles...).
              </p>
            </div>
          </div>

          {/* Vérification de la zone */}
          <BpLocationChecker />

          {/* Carte géographique */}
          <div className="relative mx-auto h-75 w-full max-w-md overflow-hidden rounded-2xl border md:max-w-xl lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-100">
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
      </div>
    </section>
  );
}
