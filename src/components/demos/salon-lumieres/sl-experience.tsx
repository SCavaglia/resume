export function SlExperience() {
    return (
        <section
            className="relative isolate overflow-hidden mb-24 bg-cover bg-center px-6 pb-8 pl-16 sm:py-8"
            style={{
                backgroundImage:
                    "url('/resume/salon-lumieres/experience_bg.webp')",
            }}
        >
            {/* Overlay sombre */}
            <div className="absolute inset-0 -z-10 bg-black/80" />

            <div className="relative max-w-2xl text-white">
                <div className="flex items-center gap-2 text-[#C5A059]">
                    <div className="h-0.5 w-12 rounded-full bg-[#C5A059]" />
                    <div className="text-sm font-semibold tracking-widest uppercase">
                        L'expérience exclusive
                    </div>
                </div>

                <h2 className="mt-6 font-playfair text-5xl leading-none">
                    Bien plus qu'un soin —
                    <span className="block text-[#E6D5B8] italic">
                        un rituel d'éveil des sens
                    </span>
                </h2>

                <p className="mt-4 leading-loose text-balance text-white/80">
                    À votre arrivée, une infusion florale bio personnalisée. En
                    cabine, le doux murmure d'un fond sonore enveloppant et la
                    chaleur apaisante de nos tables de massage ergonomiques.
                    Vivez une déconnexion mentale et sensorielle totale.
                </p>

                <a
                    href="#prestations"
                    className="mt-6 inline-flex items-center gap-2 rounded bg-[#C5A059] p-4 text-sm font-semibold tracking-wider uppercase transition-opacity hover:opacity-70"
                >
                    Vivre l'expérience <span aria-hidden="true">→</span>
                </a>
            </div>
        </section>
    );
}
