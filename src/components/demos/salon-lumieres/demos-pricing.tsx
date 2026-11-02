const packages = [
    {
        name: 'Sérénité',
        subtitle: 'Idéal pour se ressourcer',
        price: '120 €',
        duration: 'Forfait 2 Heures',
        features: [
            'Soin visage éclat (60 min)',
            'Massage ciblé du dos (30 min)',
            'Soin des mains & cuticules (30 min)',
            'Infusion florale aromatique incluse',
        ],
        action: 'Réserver le forfait',
        href: '#reservation',
    },
    {
        name: 'Lumière Signature',
        subtitle: 'Notre expérience emblématique',
        price: '220 €',
        duration: "Forfait 3h30 d'Exception",
        features: [
            'Diagnostic & Soin Biologique Recherche (75 min)',
            'Massage holistique corps complet (60 min)',
            'Manucure avec pose semi-permanente (45 min)',
            'Brushing ou coiffage créatif (30 min)',
            'Coupe de champagne & macarons',
        ],
        action: 'Réserver le forfait',
        href: '#reservation',
        featured: true,
    },
    {
        name: 'Coffrets Cadeaux',
        subtitle: 'Offrez une parenthèse enchantée',
        price: 'Libre',
        duration: 'À partir de 50 €',
        features: [
            'Valable 1 an sur tous nos rituels',
            'Écrin cadeau et carte velours',
            'Version numérique e-gift instantanée',
            "Personnalisation de l'écrin",
        ],
        action: 'Offrir une carte',
        href: '#cadeaux',
    },
];

export function DemosPricing() {
    return (
        <section id="forfaits" className="px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl">
                {/* En-tête */}
                <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
                    <p className="mb-3 text-sm font-medium tracking-[0.2em] text-[#C5A059] uppercase">
                        Nos forfaits
                    </p>

                    <h2 className="mb-5 font-playfair text-3xl font-normal tracking-tight sm:text-5xl">
                        Une parenthèse rien qu'à vous
                    </h2>

                    <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Découvrez nos rituels d'exception, imaginés pour vous
                        offrir un moment de détente absolue et révéler votre
                        beauté naturelle.
                    </p>
                </div>

                {/* Cartes */}
                <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
                    {packages.map((item) => (
                        <article
                            key={item.name}
                            className={`relative flex flex-col rounded-lg border p-7 sm:p-8 ${
                                item.featured
                                    ? 'border-[#C5A059] bg-[#F5EFE5] shadow-lg lg:-my-3 lg:py-11 dark:bg-[#29251F]'
                                    : 'border-border bg-card'
                            }`}
                        >
                            {item.featured && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#C5A059] px-4 py-1 text-xs font-medium tracking-wider whitespace-nowrap text-white uppercase">
                                    Populaire
                                </span>
                            )}

                            <div className="mb-6">
                                <h3 className="mb-2 font-playfair text-3xl font-medium">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {item.subtitle}
                                </p>
                            </div>

                            <div className="mb-6 border-b border-border pb-6">
                                <p className="font-playfair text-6xl font-thin tracking-tight">
                                    {item.price}
                                </p>

                                <p className="mt-2 text-sm font-medium text-[#C5A059]">
                                    {item.duration}
                                </p>
                            </div>

                            <ul className="mb-8 flex-1 space-y-4">
                                {item.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-start gap-3 text-sm leading-relaxed"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="mt-0.5 shrink-0 text-[#C5A059]"
                                        >
                                            ✓
                                        </span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={item.href}
                                className={`inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-center text-sm font-medium transition-colors ${
                                    item.featured
                                        ? 'bg-[#C5A059] text-white hover:bg-[#B18D48]'
                                        : 'border border-[#C5A059] text-foreground hover:bg-[#C5A059]/10'
                                }`}
                            >
                                {item.action}
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
