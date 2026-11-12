import { ArrowUpRight, Gem, Shirt, ShoppingBag, Footprints } from "lucide-react";

const categories = [
  {
    title: "Prêt-à-porter",
    description:
      "Des essentiels intemporels aux coupes élégantes, pensés pour accompagner chaque instant.",
    icon: Shirt,
    number: "01",
  },
  {
    title: "Chaussures",
    description:
      "Des matières nobles et des lignes épurées pour allier confort et allure au quotidien.",
    icon: Footprints,
    number: "02",
  },
  {
    title: "Maroquinerie",
    description:
      "Des pièces de caractère façonnées avec soin, pour traverser les saisons avec élégance.",
    icon: ShoppingBag,
    number: "03",
  },
  {
    title: "Accessoires & Bijoux",
    description:
      "Les détails subtils qui révèlent une personnalité et donnent du caractère à chaque tenue.",
    icon: Gem,
    number: "04",
  },
];

export function MnProductCategories() {
  return (
    <section
      id="rayons"
      className="bg-[#faf8f5] px-6 py-20 text-[#29251f] lg:px-8 lg:py-28 dark:bg-[#191714] dark:text-[#f3eee6]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#bfa888]" />
            <span className="text-xs font-medium tracking-[0.25em] text-[#9c8263] uppercase dark:text-[#c7aa83]">
              Maison Nouvelle
            </span>
            <span className="h-px w-8 bg-[#bfa888]" />
          </div>

          <h2 className="font-cormorant text-4xl font-medium sm:text-5xl lg:text-6xl">
            Nos <span className="text-[#b49a79] italic">Univers</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#766e64] sm:text-base dark:text-[#bdb5a9]">
            Des pièces conçues pour durer, alliant lignes minimalistes et savoir-faire traditionnel.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <a
                key={category.number}
                href="#catalogue"
                className="group relative flex min-h-[290px] flex-col overflow-hidden border border-[#ded7cc] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#bfa888] hover:shadow-xl hover:shadow-[#8b7658]/10 sm:p-8 dark:border-white/10 dark:bg-[#211e1a] dark:hover:border-[#bfa888]/60 dark:hover:shadow-black/20"
              >
                {/* Number */}
                <span className="absolute top-7 right-7 font-cormorant text-sm text-[#b5a58f]">
                  {category.number}
                </span>

                {/* Icon */}
                <div className="mb-10 flex size-14 items-center justify-center border border-[#bfa888]/40 bg-[#bfa888]/10 text-[#a58b68] transition-all duration-500 group-hover:bg-[#bfa888] group-hover:text-white dark:text-[#c7aa83]">
                  <Icon className="size-6" strokeWidth={1.4} />
                </div>

                <h3 className="font-cormorant text-2xl font-medium transition-colors duration-300 group-hover:text-[#a58b68] dark:group-hover:text-[#c7aa83]">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#766e64] dark:text-[#aaa196]">
                  {category.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-7">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#9c8263] uppercase dark:text-[#c7aa83]">
                    Découvrir
                  </span>

                  <ArrowUpRight className="size-5 text-[#bfa888] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                {/* Decorative bottom line */}
                <div className="absolute right-0 bottom-0 left-0 h-0.5 origin-left scale-x-0 bg-[#bfa888] transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
