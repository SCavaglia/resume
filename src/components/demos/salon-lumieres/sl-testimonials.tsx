import { useState } from "react";

const testimonials = [
  {
    name: "Sophie M.",
    subtitle: "Fidèle depuis 2021",
    text: "« Une adresse d'exception à [Ville]. L'accueil est discret, le lieu somptueux. Mais c'est surtout le soin visage personnalisé de Clara qui a littéralement transfiguré ma peau fatiguée. Une pépite. »",
  },
  {
    name: "Camille L.",
    subtitle: "Fidèle depuis 2022",
    text: "« Tout ici appelle à la sérénité. Le personnel fait preuve d'une attention méticuleuse au détail. J'y vais chaque mois pour ma manucure et mes tensions musculaires. Incontournable. »",
  },
  {
    name: "Julie R.",
    subtitle: "Cliente depuis 2024",
    text: "« Au-delà de l'excellence technique, Naïma apporte de précieux conseils personnalisés sur la coloration végétale. Mes cheveux n'ont jamais été aussi vigoureux et brillants. »",
  },
];

export function SlTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="temoignages" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-center text-sm font-medium tracking-widest text-[#C5A059] uppercase">
          Témoignages
        </p>

        <h2 className="mb-10 font-playfair text-3xl font-normal tracking-tight sm:text-5xl">
          Ce que partagent nos clientes
        </h2>

        <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
          <span className="mb-4 block font-serif text-5xl text-primary">“</span>

          <p
            key={activeIndex}
            className="animate-slide-left mb-8 font-playfair text-xl leading-relaxed tracking-tight italic md:text-2xl lg:text-3xl"
          >
            {testimonials[activeIndex].text}
          </p>

          <p className="flex items-center justify-center gap-2 font-medium text-[#C5A059]">
            {testimonials[activeIndex].name}
            <span className="flex items-center gap-2 text-muted-foreground">
              <div className="h-0.5 w-8 rounded-full bg-muted-foreground" />
              {testimonials[activeIndex].subtitle}
            </span>
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Afficher le témoignage ${index + 1}`}
              aria-pressed={activeIndex === index}
              className={`h-3.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-primary"
                  : "w-3.5 bg-muted-foreground/30 hover:bg-primary/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
