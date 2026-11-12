import { Clock3, Phone, ShieldCheck, UserRoundCheck } from "lucide-react";

import { BpMultistepForm } from "@/components/demos/btp-pro/bp-multistep-form";

export function BpSimulator() {
  return (
    <section id="simulateur" className="scroll-mt-24 py-24 bg-black/90 dark:bg-black/50">
      <div className="container mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:px-8">
        {/* Informations à gauche */}
        <div className="flex flex-1 flex-col gap-6">
          <div className="space-y-6">
            <div className="space-y-6">
              <h2 className="text-left text-3xl font-semibold tracking-tight text-balance text-background uppercase sm:text-4xl dark:text-foreground">
                Simulateur de budget en temps réel
              </h2>

              <div className="h-1 w-20 bg-primary" />

              <p className="text-left text-base leading-relaxed text-secondary dark:text-muted-foreground">
                Utilisez notre configurateur interactif pour estimer le budget indicatif de vos
                travaux en 4 étapes simples. Obtenez instantanément une fourchette tarifaire.
              </p>
            </div>
          </div>

          {/* Avantages */}
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="size-10 shrink-0 border bg-secondary p-2 text-primary" />

              <div>
                <h3 className="font-semibold text-primary-foreground dark:text-foreground">
                  Estimation transparente
                </h3>

                <p className="text-sm text-secondary dark:text-muted-foreground">
                  Pas de tarification cachée, des prix calculés selon des barèmes d'artisans réels.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <UserRoundCheck className="size-10 shrink-0 border bg-secondary p-2 text-primary" />

              <div>
                <h3 className="font-semibold text-primary-foreground dark:text-foreground">
                  Suivi personnalisé
                </h3>

                <p className="text-sm text-secondary dark:text-muted-foreground">
                  L'estimation est validée et affinée gratuitement par un artisan lors d'une visite.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock3 className="size-10 shrink-0 border bg-secondary p-2 text-primary" />

              <div>
                <h3 className="font-semibold text-primary-foreground dark:text-foreground">
                  Engagement 24h
                </h3>

                <p className="text-sm text-secondary dark:text-muted-foreground">
                  Un conseiller technique vous rappelle sous un jour ouvré après votre demande.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-sm border bg-card p-4 pl-8 pr-16 lg:mx-0 lg:w-full lg:pr-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary">
              <Phone className="size-6 text-background" />
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Ligne directe service technique</p>

              <a
                href="tel:0000000000"
                className="text-3xl font-semibold text-black hover:underline dark:text-white"
              >
                00 00 00 00 00
              </a>
            </div>
          </div>
        </div>

        {/* Formulaire à droite */}
        <div className="w-full flex-1">
          <BpMultistepForm />
        </div>
      </div>
    </section>
  );
}
