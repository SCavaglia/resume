export function Hero() {
    return (
        <section id="accueil" className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Créons quelque chose ensemble.
            </h1>

            <p className="max-w-xl text-muted-foreground">
                Développeur web spécialisé dans la création de sites modernes et performants.
            </p>

            <a
                href="#contact"
                className="rounded-md bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-90"
            >
                Me contacter
            </a>
        </section>
    );
}
