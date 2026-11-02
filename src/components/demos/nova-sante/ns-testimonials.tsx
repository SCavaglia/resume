import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

type Testimonial = {
    text: string;
    name: string;
    detail: string;
};

type NsTestimonialsProps = {
    testimonials?: Testimonial[];
};

const defaultTestimonials: Testimonial[] = [
    {
        text: "Un accueil irréprochable et un secrétariat très professionnel. Les médecins prennent vraiment le temps d'expliquer et de coordonner les soins. Le cabinet est d'une propreté exemplaire, très rassurant.",
        name: 'Pierre V.',
        detail: 'Patient suivi en médecine générale',
    },
    {
        text: "J'ai été reçue par M. Renard pour une rééducation du genou post-opératoire. Prise en charge très rigoureuse et dynamique. Équipement moderne sur place et ambiance conviviale.",
        name: 'Marie L.',
        detail: 'Patiente en kinésithérapie sportive',
    },
    {
        text: "Le système de prise de rendez-vous en ligne est d'une grande fluidité. Très pratique pour choisir son spécialiste et voir directement les créneaux disponibles. Je recommande NovaSanté sans hésitation !",
        name: 'Julien M.',
        detail: 'Consultation dentaire',
    },
];

export function NsTestimonials({
    testimonials = defaultTestimonials,
}: NsTestimonialsProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (testimonials.length === 0) return null;

    const goTo = (index: number) => {
        setActiveIndex((index + testimonials.length) % testimonials.length);
    };

    return (
        <section id="temoignages" className="px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-5xl">
                {/* Introduction */}
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                        Témoignages
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                        Le retour de nos patients
                    </h2>

                    <p className="mt-5 leading-relaxed text-muted-foreground sm:text-lg">
                        Nous plaçons la qualité de l'accueil et de l'écoute au
                        cœur de notre démarche médicale.
                    </p>
                </div>

                {/* Cadre unique avec défilement horizontal */}
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`,
                        }}
                        aria-live="polite"
                    >
                        {testimonials.map((testimonial, index) => (
                            <article
                                key={`${testimonial.name}-${index}`}
                                className="flex w-full shrink-0 flex-col p-6 sm:p-10 lg:p-14"
                            >
                                <Quote
                                    className="mb-6 size-10 text-primary/40"
                                    aria-hidden="true"
                                />

                                <div
                                    className="mb-6 flex gap-1 text-amber-500"
                                    aria-label="5 étoiles sur 5"
                                >
                                    {Array.from(
                                        { length: 5 },
                                        (_, starIndex) => (
                                            <Star
                                                key={starIndex}
                                                className="size-4 fill-current"
                                                aria-hidden="true"
                                            />
                                        ),
                                    )}
                                </div>

                                <blockquote className="min-h-32 px-12 text-lg leading-relaxed sm:text-xl">
                                    « {testimonial.text} »
                                </blockquote>

                                <div className="mt-8 border-t border-border pt-6">
                                    <p className="font-semibold">
                                        {testimonial.name}
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {testimonial.detail}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">
                            {String(activeIndex + 1).padStart(2, '0')}
                        </span>
                        {' / '}
                        {String(testimonials.length).padStart(2, '0')}
                    </p>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => goTo(activeIndex - 1)}
                            aria-label="Témoignage précédent"
                            className="flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        >
                            <ChevronLeft className="size-5" />
                        </button>

                        <div className="flex items-center gap-2">
                            {testimonials.map((testimonial, index) => (
                                <button
                                    key={`${testimonial.name}-dot-${index}`}
                                    type="button"
                                    onClick={() => goTo(index)}
                                    aria-label={`Afficher le témoignage ${index + 1}`}
                                    aria-current={
                                        activeIndex === index
                                            ? 'true'
                                            : undefined
                                    }
                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                        activeIndex === index
                                            ? 'w-8 bg-primary'
                                            : 'w-2.5 bg-border hover:bg-primary/50'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => goTo(activeIndex + 1)}
                            aria-label="Témoignage suivant"
                            className="flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        >
                            <ChevronRight className="size-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
