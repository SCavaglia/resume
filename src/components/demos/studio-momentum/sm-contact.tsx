import { cn } from "@/lib/utils";
import { ArrowUpRight, Clock3, Flower2, Mail, MapPin, Phone, Sparkles } from "lucide-react";

const inputStyles =
  "w-full rounded-xl border border-[#d9d2c3] bg-[#faf9f5] px-4 py-3 text-sm text-[#39352e] outline-none transition-all placeholder:text-[#aaa397] focus:border-[#c5a04e] focus:ring-2 focus:ring-[#c5a04e]/15 dark:border-white/10 dark:bg-[#171613] dark:text-[#f5f0e6] dark:placeholder:text-[#777064]";

export function SmContact() {
  return (
    <section
      id="devis"
      className="relative isolate overflow-hidden bg-[#f7f5ef] px-6 py-24 sm:px-10 lg:py-32 dark:bg-[#171613]"
    >
      {/* Décorations */}
      <div className="pointer-events-none absolute top-20 -left-40 -z-10 size-96 rounded-full bg-[#c5a04e]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 size-96 rounded-full bg-[#c5a04e]/10 blur-[110px]" />

      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c5a04e]/30 bg-[#c5a04e]/10 px-4 py-2">
            <Sparkles className="size-3.5 text-[#a77b27]" />
            <span className="text-[10px] font-semibold tracking-[0.22em] text-[#967021] uppercase dark:text-[#d6b76d]">
              Étude de Projet Gratuite
            </span>
          </div>

          <h2 className="font-cormorant text-4xl font-medium tracking-tight text-[#29251e] sm:text-5xl lg:text-6xl dark:text-[#f5f0e6]">
            Décrivez votre <span className="text-[#a77b27] dark:text-[#c5a04e]">projet</span>
          </h2>

          <div className="my-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#c5a04e]" />
            <Flower2 className="size-4 text-[#b18a3c]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#c5a04e]" />
          </div>

          <p className="text-sm leading-7 text-[#777166] sm:text-base dark:text-[#aaa397]">
            Renseignez vos envies et recevez une proposition artistique et un devis affiné sous 48
            heures.
          </p>
        </div>

        {/* Contenu */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Informations */}
          <div className="flex flex-col rounded-3xl border border-[#d9d2c3]/60 bg-[#eeebe2] p-8 sm:p-10 dark:border-white/10 dark:bg-[#211f1a]">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#a77b27] uppercase dark:text-[#c5a04e]">
                Parlons de votre événement
              </span>
              <h3 className="mt-3 font-cormorant text-3xl font-medium text-[#29251e] sm:text-4xl dark:text-[#f5f0e6]">
                Racontez-nous votre histoire
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#777166] dark:text-[#aaa397]">
                Chaque événement est unique. Notre collectif vous accompagne pour imaginer une
                expérience artistique qui vous ressemble.
              </p>
            </div>

            <div className="my-9 h-px bg-linear-to-r from-[#c5a04e]/50 via-[#c5a04e]/15 to-transparent" />

            <div className="space-y-7">
              <ContactInfo
                icon={MapPin}
                label="Le Cabinet Parisien"
                value="15 Rue de la Création, 75003 Paris (Le Marais)"
              />
              <ContactInfo
                icon={Phone}
                label="Téléphone secrétariat"
                value="01 44 56 78 90"
                href="tel:+33144567890"
              />
              <ContactInfo
                icon={Mail}
                label="Email agence"
                value="hello@exemple.fr"
                href="mailto:hello@exemple.fr"
              />
            </div>

            <div className="mt-auto pt-10">
              <div className="relative overflow-hidden rounded-2xl border border-[#c5a04e]/30 bg-white/60 p-6 dark:bg-[#171613]/60">
                <div className="pointer-events-none absolute -top-8 -right-8 size-28 rounded-full bg-[#c5a04e]/10 blur-2xl" />

                <div className="relative flex items-center gap-2 text-[#967021] dark:text-[#d6b76d]">
                  <Sparkles className="size-4" />
                  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase">
                    Consultation offerte
                  </span>
                </div>

                <p className="relative mt-4 text-sm leading-7 text-[#777166] dark:text-[#aaa397]">
                  Nous étudions gratuitement votre cahier des charges et concevons la direction
                  artistique de votre projet lors d'un premier entretien conseil de 45 minutes.
                </p>

                <div className="relative mt-5 flex items-center gap-2 text-xs font-medium text-[#967021] dark:text-[#d6b76d]">
                  <Clock3 className="size-3.5" />
                  45 minutes dédiées à votre projet
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-3xl border border-[#d9d2c3]/60 bg-white/80 p-8 shadow-[0_20px_60px_-35px_rgba(70,55,30,0.25)] sm:p-10 dark:border-white/10 dark:bg-[#211f1a]">
            <div className="mb-8">
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#a77b27] uppercase dark:text-[#c5a04e]">
                Votre demande
              </span>
              <h3 className="mt-3 font-cormorant text-3xl font-medium text-[#29251e] sm:text-4xl dark:text-[#f5f0e6]">
                Votre étude personnalisée
              </h3>
            </div>

            <form onSubmit={(event) => event.preventDefault()} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Nom & Prénom">
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Votre nom complet"
                    className={inputStyles}
                  />
                </FormField>

                <FormField label="Adresse Email">
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="vous@exemple.fr"
                    className={inputStyles}
                  />
                </FormField>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Numéro de Téléphone">
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+33 6 00 00 00 00"
                    className={inputStyles}
                  />
                </FormField>

                <FormField label="Type d'événement prévu">
                  <select name="event_type" required defaultValue="" className={inputStyles}>
                    <option value="" disabled>
                      Sélectionnez un événement
                    </option>
                    <option>Mariage</option>
                    <option>Événement d'entreprise</option>
                    <option>Soirée privée</option>
                    <option>Gala & Réception</option>
                    <option>Événement mode & éditorial</option>
                    <option>Autre projet</option>
                  </select>
                </FormField>
              </div>

              <FormField label="Message (Détails & Vision)">
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Parlez-nous de votre événement, de vos envies, de l'ambiance souhaitée..."
                  className={cn(inputStyles, "min-h-36 resize-y")}
                />
              </FormField>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#967021] via-[#b18a3c] to-[#967021] px-6 py-4 text-xs font-semibold tracking-[0.16em] text-white uppercase shadow-lg shadow-[#967021]/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#967021]/25"
              >
                Envoyer ma demande de projet
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <p className="text-center text-[11px] leading-5 text-[#999184] dark:text-[#817b70]">
                Votre demande sera étudiée avec attention par notre équipe.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#c5a04e]/30 bg-white/70 text-[#a77b27] dark:bg-[#171613]/60 dark:text-[#c5a04e]">
        <Icon className="size-4" />
      </div>

      <div className="min-w-0 pt-0.5">
        <span className="block text-[10px] font-semibold tracking-[0.14em] text-[#a77b27] uppercase dark:text-[#c5a04e]">
          {label}
        </span>
        {href ? (
          <a
            href={href}
            className="mt-1 block text-sm leading-6 break-words text-[#514b40] transition-colors hover:text-[#967021] dark:text-[#d4cec2] dark:hover:text-[#d6b76d]"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 text-sm leading-6 text-[#514b40] dark:text-[#d4cec2]">{value}</p>
        )}
      </div>
    </div>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-[10px] font-semibold tracking-[0.14em] text-[#777166] uppercase dark:text-[#aaa397]">
        {label}
      </span>
      {children}
    </label>
  );
}
