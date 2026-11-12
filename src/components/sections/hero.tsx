export function Hero() {
  return (
    <section
      id="accueil"
      className="flex min-h-[40vh] flex-col items-center justify-center gap-6 px-4"
    >
      <div className="py-3 pl-6 border-l-3">
        <h1 className="pb-2 text-xl font-bold tracking-tight sm:text-2xl">Développeur web</h1>
        <h2 className="pb-6 text-lg font-bold tracking-tight sm:text-xl">
          Principalement sur React et Laravel
        </h2>

        <p className="pb-1 max-w-xl text-muted-foreground">
          Mail :{" "}
          <a href="mailto:sebastien.cavaglia@gmail.com" className="text-primary hover:underline">
            sebastien.cavaglia@gmail.com
          </a>
        </p>
        <p className="max-w-xl text-muted-foreground">
          GitHub :{" "}
          <a
            href="https://github.com/SCavaglia"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/SCavaglia
          </a>
        </p>
      </div>
    </section>
  );
}
