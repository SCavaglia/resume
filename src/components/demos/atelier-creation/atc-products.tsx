import { ArrowRight } from 'lucide-react';

const products = [
    {
        emoji: '🪑',
        title: 'Tabouret design chêne massif',
        price: '320 €',
        description:
            'Assemblage traditionnel à tenon et mortaise. Fini avec une huile naturelle protectrice.',
    },
    {
        emoji: '🏺',
        title: 'Vase Céladon grès émaillé',
        price: '145 €',
        description:
            "Vase tourné main. Émail céladon craquelé préparé à l'atelier à base de cendres de bois.",
    },
    {
        emoji: '👛',
        title: 'Portefeuille cuir collet végétal',
        price: '89 €',
        description:
            'Maroquinerie fine cousue main au point sellier. Teinture végétale naturelle.',
    },
    {
        emoji: '💍',
        title: 'Bague argent & pierre de lune',
        price: '168 €',
        description:
            "Bijouterie d'art forgée à la main. Pierre de lune naturelle sertie sur-mesure.",
    },
];

export function AtcProducts() {
    return (
        <section
            id="collection"
            className="bg-[#F8F5EF] px-6 py-20 text-[#30291F] md:py-28 dark:bg-[#201D18] dark:text-[#F4EDE1]"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-4 text-sm font-medium tracking-[0.25em] text-[#A27B45] uppercase">
                        Catalogue d'Art
                    </p>

                    <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
                        Pièces uniques de la collection
                    </h2>

                    <p className="mt-5 leading-7 text-[#6F665A] dark:text-[#C6BBAA]">
                        Chaque création de notre catalogue est unique, signée de
                        la main de l'artisan et prête à rejoindre votre demeure.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <article
                            key={product.title}
                            className="group flex flex-col border border-[#DED4C4] bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#A27B45] hover:shadow-xl dark:border-[#494033]"
                        >
                            <div className="mb-6 flex aspect-square items-center justify-center bg-[#EEE6D9] text-7xl transition-transform duration-300 group-hover:scale-[1.03] dark:bg-[#30291F]">
                                {product.emoji}
                            </div>

                            <h3 className="font-serif text-xl leading-snug font-semibold">
                                {product.title}
                            </h3>

                            <p className="mt-3 text-xl font-semibold text-[#A27B45]">
                                {product.price}
                            </p>

                            <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
                                {product.description}
                            </p>

                            <a
                                href="#contact"
                                className="group/link mt-6 inline-flex items-center gap-2 border-t border-[#DED4C4] pt-4 text-sm font-medium transition-colors hover:text-[#A27B45] dark:border-[#494033]"
                            >
                                Voir les détails & stocks
                                <ArrowRight className="size-4 shrink-0 transition-transform duration-300 group-hover/link:translate-x-1" />
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
