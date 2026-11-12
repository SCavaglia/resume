import { Clock, Phone, PhoneCall } from "lucide-react";

export function AcCallbackRequest() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-2xl bg-linear-to-br from-sky-800 to-teal-900 p-8 text-center text-white sm:p-12">
        <Phone className="size-10" />

        <h2 className="text-3xl font-bold tracking-tight">
          Une question ? Besoin d'une aide urgente ?
        </h2>

        <p className="max-w-2xl leading-7 text-sky-100">
          Saisissez votre numéro de portable. Notre coordinatrice de l'agence de [Ville] vous
          rappelle sous 15 minutes pour étudier votre besoin en direct.
        </p>

        <form
          className="flex w-full max-w-lg flex-col gap-3 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="tel"
            placeholder="Votre numéro de portable"
            aria-label="Votre numéro de portable"
            className="h-12 min-w-0 flex-1 rounded-lg border border-white/20 bg-white px-4 text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-white/50"
          />

          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Être rappelé
            <PhoneCall className="size-4" />
          </button>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-sky-100">
          <Clock className="size-4" />
          <span>Rappel express sous 15 min</span>
        </div>

        <p className="text-xs text-sky-100/80">
          Service gratuit, ouvert du lundi au vendredi de 9h à 18h. Données non conservées.
        </p>
      </div>
    </section>
  );
}
