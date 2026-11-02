import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SmHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#faf8f2] px-4 pt-28 pb-20 sm:px-6 lg:px-8 lg:pt-36 lg:pb-28 dark:bg-[#171613]">
      {/* Dégradés décoratifs */}
      <div className="pointer-events-none absolute -top-40 -left-48 h-[500px] w-[500px] rounded-full bg-[#c49a45]/15 blur-[120px] dark:bg-[#c49a45]/10" />
      <div className="pointer-events-none absolute top-1/4 -right-40 h-[450px] w-[450px] rounded-full bg-[#e5c982]/30 blur-[130px] dark:bg-[#a98235]/10" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-[#c49a45]/50 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Contenu gauche */}
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b58a35]/40 bg-[#e9d7aa]/30 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[#80601e] uppercase dark:border-[#c5a04e]/40 dark:bg-[#c5a04e]/10 dark:text-[#e2c47f]">
            <Sparkles className="h-4 w-4" />
            Collectif d'Artistes Événementiels
          </div>

          <h1 className="max-w-3xl font-cormorant text-5xl leading-[1.05] font-semibold tracking-tight text-[#29251e] sm:text-6xl lg:text-7xl xl:text-[5.5rem] dark:text-[#f5f0e5]">
            Donnez vie à vos{" "}
            <span className="relative inline-block text-[#a77b27] dark:text-[#dfbd70]">
              événements
              <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-[#a77b27] to-transparent dark:from-[#dfbd70]" />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#6e675b] sm:text-lg dark:text-[#c0b8a8]">
            Moment Studio réunit des photographes de renom, des vidéastes de cinéma, des designers floraux et des DJs d'exception sous une
            même direction artistique. Nous concevons et coordonnons des événements prestigieux sur-mesure à [Ville] et dans toute l'Europe.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button
              render={<a href="#contact" />}
              className="h-13 rounded-full bg-[#a77b27] px-7 text-sm font-semibold text-white shadow-lg shadow-[#a77b27]/20 transition-all hover:-translate-y-0.5 hover:bg-[#89631e] dark:bg-[#c5a04e] dark:text-[#211b10] dark:hover:bg-[#dfbd70]"
            >
              Simuler un devis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              render={<a href="#portfolio" />}
              variant="outline"
              className="h-13 rounded-full border-[#c6b58f] bg-transparent px-7 text-sm font-semibold text-[#55472e] transition-all hover:border-[#a77b27] hover:bg-[#eadfca]/50 hover:text-[#80601e] dark:border-[#6d5b37] dark:text-[#e4d4ad] dark:hover:border-[#c5a04e] dark:hover:bg-[#c5a04e]/10 dark:hover:text-[#f0d99e]"
            >
              Parcourir le portfolio
              <ArrowDownRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Signature */}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-12 bg-[#b58a35] dark:bg-[#c5a04e]" />
            <p className="text-xs font-medium tracking-[0.2em] text-[#8a7650] uppercase dark:text-[#bba36e]">
              L'art de créer des instants uniques
            </p>
          </div>
        </div>

        {/* Visuel droite */}
        <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
          {/* Halo décoratif */}
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#d8b86d]/30 via-transparent to-[#9c742c]/20 blur-2xl dark:from-[#c5a04e]/15 dark:to-[#c5a04e]/10" />

          {/* Cadre photo */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-[#c6a65f]/50 bg-[#e9dfcc] p-2 shadow-2xl shadow-[#6b5125]/15 dark:border-[#8c713d]/50 dark:bg-[#29251d] dark:shadow-black/40">
            <div className="relative h-full w-full overflow-hidden rounded-[1.1rem]">
              <img
                src="/demos/studio-momentum/hero.jpg"
                alt="Moment Studio - Ambiance luxe événementielle"
                className="h-full w-full object-cover"
              />

              {/* Voile photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/10" />

              {/* Décoration supérieure */}
              <div className="absolute top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/15 text-[#f1d58d] backdrop-blur-sm">
                ✦
              </div>

              {/* Signature sur la photo */}
              <div className="absolute inset-x-6 bottom-8 text-center text-white">
                <p className="text-xs font-medium tracking-[0.35em] text-[#f0d58e] uppercase">⟡ Paris Marais ⟡</p>

                <h2 className="mt-3 font-cormorant text-5xl font-semibold tracking-wide sm:text-6xl">Moment Studio</h2>

                <div className="mx-auto my-4 flex items-center justify-center gap-3 text-[#e6c779]">
                  <span className="h-px w-10 bg-current" />
                  <span>✦</span>
                  <span className="h-px w-10 bg-current" />
                </div>

                <p className="text-xs tracking-[0.3em] text-white/85 uppercase">Collectif Artistique</p>
              </div>
            </div>
          </div>

          {/* Ornement extérieur */}
          <div className="pointer-events-none absolute -top-5 -right-5 h-24 w-24 rounded-tr-[2rem] border-t border-r border-[#b58a35]/70 dark:border-[#c5a04e]/60" />
          <div className="pointer-events-none absolute -bottom-5 -left-5 h-24 w-24 rounded-bl-[2rem] border-b border-l border-[#b58a35]/70 dark:border-[#c5a04e]/60" />

          {/* Badge flottant */}
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#d8c69e] bg-[#fffdf8]/95 px-5 py-4 shadow-xl shadow-[#6b5125]/10 backdrop-blur-md sm:-left-10 sm:px-6 dark:border-[#5d4d30] dark:bg-[#28241c]/95 dark:shadow-black/30">
            <p className="font-cormorant text-2xl font-semibold text-[#8d6827] dark:text-[#dfbd70]">Sur-mesure</p>
            <p className="mt-1 text-[10px] font-medium tracking-[0.18em] text-[#746957] uppercase dark:text-[#bcb09a]">Paris · Europe</p>
          </div>

          {/* Petit ornement */}
          <div className="pointer-events-none absolute top-1/3 -right-8 hidden text-5xl text-[#b58a35]/50 sm:block dark:text-[#c5a04e]/40">
            ⟡
          </div>
        </div>
      </div>
    </section>
  );
}
