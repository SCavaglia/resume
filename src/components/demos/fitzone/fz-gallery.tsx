export function FzGallery() {
  const items = [
    {
      id: "a",
      alt: "Plateau CrossFit",
      title: "Plateau CrossFit",
      description: "Équipement Rogue & Racks",
      emoji: "🏋️",
    },
    {
      id: "b",
      alt: "Studio Yoga",
      title: "Studio Yoga",
      description: "Calme & Lumière tamisée",
      emoji: "🧘",
    },
    {
      id: "c",
      alt: "Ring de Boxe",
      title: "Ring de Boxe",
      description: "Sacs de frappe & Sparring",
      emoji: "🥊",
    },
    {
      id: "d",
      alt: "Espace Cardio",
      title: "Espace Cardio",
      description: "Tapis, Rameurs & Assault AirBikes",
      emoji: "🏃",
    },
    {
      id: "e",
      alt: "Studio Pilates",
      title: "Studio Pilates",
      description: "Renforcement profond & Ballons",
      emoji: "🤸",
    },
    {
      id: "f",
      alt: "Zone Récupération",
      title: "Zone Récupération",
      description: "Sauna & Bain froid",
      emoji: "🧖",
    },
  ];

  return (
    <section id="club" className="mx-auto max-w-7xl px-8 py-16 sm:py-20">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-semibold tracking-wider text-red-500 uppercase">Le Club</p>

        <h2 className="mt-4 font-oswald text-5xl font-bold tracking-wide uppercase sm:text-6xl">
          Nos espaces{" "}
          <span className="bg-linear-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            en images
          </span>
        </h2>

        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Découvrez un plateau d'entraînement de 800m² combinant performance technique, modernité et
          confort.
        </p>
      </div>

      {/* Gallery */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:scale-105 hover:border-red-500"
          >
            <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden bg-muted">
              <span
                role="img"
                aria-label={item.alt}
                className="text-7xl transition-all duration-300 group-hover:-translate-y-4"
              >
                {item.emoji}
              </span>

              <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-transparent p-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-oswald text-xl font-semibold text-foreground uppercase">
                  {item.title}
                </h3>

                <p className="mt-1 font-oswald tracking-wider text-red-500 uppercase">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
