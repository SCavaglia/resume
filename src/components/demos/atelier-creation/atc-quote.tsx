import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export function AtcQuote() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="me-contacter"
      className="bg-[#F8F5EF] px-6 py-20 text-[#30291F] sm:px-10 lg:py-28 dark:bg-[#201D18] dark:text-[#F4EDE1]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.25em] text-[#A27B45] uppercase">
            Commandes et Devis
          </p>
          <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">Prendre contact</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6F665A] sm:text-base dark:text-[#C6BBAA]">
            Une question sur une pièce unique, une demande de visite d'atelier à Rennes, ou un
            projet sur-mesure ? Écrivez-nous.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Informations de contact */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="mb-7 flex items-center gap-3 font-serif text-2xl">
                <span className="text-[#A27B45]">📍</span>
                L'Atelier Création
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#EDE5D8]">
                    <MapPin className="size-5 text-[#A27B45]" />
                  </div>
                  <div>
                    <p className="font-medium">Adresse de l'Atelier</p>
                    <p className="mt-1 text-sm leading-6 text-[#6F665A] dark:text-[#C6BBAA]">
                      6 Rue des Métiers d'Art, 35000 Rennes (Bretagne)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#EDE5D8]">
                    <Phone className="size-5 text-[#A27B45]" />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a
                      href="tel:0299567890"
                      className="mt-1 block text-sm text-[#6F665A] transition-colors hover:text-[#A27B45] dark:text-[#C6BBAA]"
                    >
                      02 99 56 78 90
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#EDE5D8]">
                    <Mail className="size-5 text-[#A27B45]" />
                  </div>
                  <div>
                    <p className="font-medium">Adresse Email</p>
                    <a
                      href="mailto:contact@exemple.fr"
                      className="mt-1 block text-sm break-all text-[#6F665A] transition-colors hover:text-[#A27B45] dark:text-[#C6BBAA]"
                    >
                      contact@exemple.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#DED4C4] bg-[#F0E9DE] p-6 sm:p-7">
              <h4 className="mb-4 flex items-center gap-3 font-serif text-lg text-[#30291F]">
                <span className="text-xl text-[#A27B45]">⟡</span>
                Visite de l'Atelier
              </h4>
              <p className="text-sm leading-7 text-[#6F665A]">
                L'atelier est ouvert aux visiteurs du mercredi au samedi (10h-12h • 14h-18h). Venez
                découvrir nos artisans à l'œuvre et observer les matières brutes.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#A27B45]">
                <Clock className="size-4" />
                <span>Mercredi – Samedi</span>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="border border-[#DED4C4] bg-white/60 p-6 sm:p-9 dark:bg-white/5">
            <h3 className="mb-7 font-serif text-2xl">Votre Demande</h3>

            {submitted ? (
              <div className="border border-[#DED4C4] bg-[#F0E9DE] p-6">
                <p className="font-serif text-xl">Merci pour votre message !</p>
                <p className="mt-2 text-sm leading-6 text-[#6F665A]">
                  Votre demande est prête. Ceci est une démonstration : aucun message n'a été
                  envoyé.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-sm font-medium text-[#A27B45] underline underline-offset-4"
                >
                  Revenir au formulaire
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="atc-name" className="text-sm font-medium">
                      Nom &amp; Prénom
                    </label>
                    <input
                      id="atc-name"
                      name="name"
                      type="text"
                      placeholder="Votre nom complet"
                      required
                      className="h-12 min-w-0 border border-[#DED4C4] bg-transparent px-4 text-sm transition-colors outline-none placeholder:text-[#A49A8C] focus:border-[#A27B45]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="atc-email" className="text-sm font-medium">
                      Adresse Email
                    </label>
                    <input
                      id="atc-email"
                      name="email"
                      type="email"
                      placeholder="vous@exemple.fr"
                      required
                      className="h-12 min-w-0 border border-[#DED4C4] bg-transparent px-4 text-sm transition-colors outline-none placeholder:text-[#A49A8C] focus:border-[#A27B45]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="atc-phone" className="text-sm font-medium">
                    Numéro de Téléphone
                  </label>
                  <input
                    id="atc-phone"
                    name="phone"
                    type="tel"
                    placeholder="00 00 00 00 00"
                    className="h-12 border border-[#DED4C4] bg-transparent px-4 text-sm transition-colors outline-none placeholder:text-[#A49A8C] focus:border-[#A27B45]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="atc-subject" className="text-sm font-medium">
                    Sujet de votre demande
                  </label>
                  <select
                    id="atc-subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="h-12 w-full border border-[#DED4C4] bg-[#F8F5EF] px-4 text-sm transition-colors outline-none focus:border-[#A27B45]"
                  >
                    <option value="" disabled>
                      Choisissez un sujet
                    </option>
                    <option value="sur-mesure">Création sur-mesure</option>
                    <option value="produit">Question sur un produit</option>
                    <option value="personnalisation">Personnalisation &amp; gravure</option>
                    <option value="visite">Visite de l'atelier</option>
                    <option value="commande">Suivi d'une commande</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="atc-message" className="text-sm font-medium">
                    Votre Message
                  </label>
                  <textarea
                    id="atc-message"
                    name="message"
                    rows={5}
                    placeholder="Parlez-nous de votre projet..."
                    required
                    className="resize-y border border-[#DED4C4] bg-transparent px-4 py-3 text-sm leading-6 transition-colors outline-none placeholder:text-[#A49A8C] focus:border-[#A27B45]"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-2 flex min-h-12 w-full items-center justify-center gap-3 bg-[#30291F] px-6 py-4 text-sm font-medium text-[#F8F5EF] transition-colors hover:bg-[#A27B45]"
                >
                  Envoyer mon message à l'Atelier
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-center text-xs leading-5 text-[#8A8073]">
                  Démonstration frontend : le formulaire n'envoie aucune donnée.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
