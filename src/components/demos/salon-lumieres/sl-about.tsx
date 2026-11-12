import { Reveal } from "@/components/animations/reveal";
import { Check } from "lucide-react";

export default function SlAbout() {
  return (
    <>
      <section id="notre-maison" className="pt-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-center gap-4 px-8 lg:flex-row">
          <Reveal
            direction="right"
            delay={250}
            className="relative flex w-full items-center justify-center px-8"
          >
            <img
              src="/resume/salon-lumieres/about_img.webp"
              className="aspect-video w-full min-w-md rounded-md object-cover lg:aspect-3/4 lg:max-w-xl dark:opacity-50"
            />

            <div className="absolute right-0 -bottom-10 w-fit rounded-md bg-[#C5A059] px-4 py-2 text-white md:px-10 md:py-6">
              <span className="block text-center font-playfair text-4xl md:text-6xl">14</span>
              <span className="text-[10px] font-semibold tracking-widest uppercase md:text-xs">
                Ans de savoir-faire
              </span>
            </div>
          </Reveal>
          <Reveal direction="left" delay={250} className="flex max-w-xl flex-col px-8">
            <div className="flex items-center gap-2 text-[#C5A059]">
              <div className="h-0.5 w-12 rounded-full bg-[#C5A059]" />
              <div className="text-sm font-semibold tracking-widest uppercase">Notre Maison</div>
            </div>
            <h2 className="mt-8 font-playfair text-5xl leading-none">
              Un sanctuaire dédié à la
              <span className="block text-[#6E6E73] italic dark:text-muted-foreground">
                beauté holistique
              </span>
            </h2>
            <p className="mt-8 text-balance text-[#6E6E73] dark:text-muted-foreground">
              Fondée en 2010 au cœur de la prestigieuse rue du Faubourg Saint-Honoré, la Maison
              LUMIÈRE réinvente l'institut de beauté traditionnel. Ici, nous pensons que la beauté
              extérieure est le reflet d'une harmonie intérieure profonde.
            </p>
            <p className="mt-4 text-balance text-[#6E6E73] dark:text-muted-foreground">
              Chacun de nos protocoles est conçu sur-mesure et s'appuie sur la rigueur de marques de
              renommée mondiale, telles que *Biologique Recherche* et *Caudalie*, pour garantir des
              résultats immédiats et durables dans un cocon protecteur de calme.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Check className="text-[#C5A059]" />
                Cosmétique professionnelle
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-[#C5A059]" />
                Diagnostics cutanés technologiques
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-[#C5A059]" />
                Praticiennes certifiées CIDESCO
              </div>
              <div className="font- flex items-center gap-2">
                <Check className="text-[#C5A059]" />
                Espace privé haut de gamme
              </div>
            </div>
            <button className="mt-12 w-fit rounded bg-black p-4 text-sm font-semibold text-white uppercase transition-all duration-300 hover:-translate-y-1 hover:bg-[#C5A059] dark:bg-white dark:text-black dark:hover:bg-[#C5A059] dark:hover:text-white">
              Explorez nos soins
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
