import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  HeartPulse,
  Info,
  Phone,
  ShieldAlert,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type UrgencyLevel = "emergency" | "soon" | "stable";

const symptoms: {
  id: string;
  label: string;
  level: UrgencyLevel;
}[] = [
  {
    id: "bleeding",
    label: "Hémorragie abondante / Perte de conscience",
    level: "emergency",
  },
  {
    id: "breathing",
    label: "Difficultés respiratoires aiguës",
    level: "emergency",
  },
  {
    id: "ingestion",
    label: "Ingestion d'objet suspect / Vomissements répétés",
    level: "emergency",
  },
  {
    id: "pain",
    label: "Boiterie soudaine / Douleur au toucher",
    level: "soon",
  },
  {
    id: "itching",
    label: "Grattage excessif / Puces visibles",
    level: "stable",
  },
  {
    id: "appetite",
    label: "Perte d'appétit légère (moins de 24h)",
    level: "stable",
  },
];

const recommendations = {
  emergency: {
    icon: ShieldAlert,
    title: "URGENCE ABSOLUE",
    subtitle: "CONTACTEZ-NOUS IMMÉDIATEMENT",
    description:
      "Chaque minute compte. Ne tentez pas de nourrir votre animal et ne provoquez pas de vomissement. Contactez immédiatement un service vétérinaire d'urgence pour obtenir des instructions et préparer sa prise en charge.",
    phone: "00 00 00 00 00",
    phoneLabel: "Ligne d'urgence vétérinaire",
    action: "Appeler en urgence",
    style: {
      container: "border-red-200 bg-red-50 dark:border-red-900/60 dark:bg-red-950/30",
      icon: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300",
      title: "text-red-800 dark:text-red-300",
      text: "text-red-800/80 dark:text-red-200/80",
      phone: "text-red-800 dark:text-red-300",
      button: "bg-red-700 text-white hover:bg-red-800 dark:bg-red-700 dark:hover:bg-red-600",
    },
  },
  soon: {
    icon: AlertTriangle,
    title: "CONSULTATION RECOMMANDÉE",
    subtitle: "FAITES ÉVALUER VOTRE ANIMAL AUJOURD'HUI",
    description:
      "L'état de votre animal nécessite l'avis d'un professionnel dans les prochaines heures. Surveillez attentivement son comportement et contactez notre clinique pour demander un rendez-vous prioritaire.",
    phone: "02 40 12 34 56",
    phoneLabel: "Clinique vétérinaire",
    action: "Appeler la clinique",
    style: {
      container: "border-orange-200 bg-orange-50 dark:border-orange-900/60 dark:bg-orange-950/30",
      icon: "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300",
      title: "text-orange-800 dark:text-orange-300",
      text: "text-orange-800/80 dark:text-orange-200/80",
      phone: "text-orange-800 dark:text-orange-300",
      button:
        "bg-orange-700 text-white hover:bg-orange-800 dark:bg-orange-700 dark:hover:bg-orange-600",
    },
  },
  stable: {
    icon: CheckCircle2,
    title: "SITUATION STABLE",
    subtitle: "SOINS COURANTS",
    description:
      "Aucun signe d'urgence immédiate n'est identifié dans ce questionnaire. Vous pouvez prévoir une consultation classique dans les prochains jours. En cas d'aggravation, de nouveaux symptômes ou de doute, contactez votre vétérinaire sans attendre.",
    phone: null,
    phoneLabel: null,
    action: "Prendre rendez-vous",
    style: {
      container: "border-green-200 bg-green-50 dark:border-green-900/60 dark:bg-green-950/30",
      icon: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
      title: "text-green-800 dark:text-green-300",
      text: "text-green-800/80 dark:text-green-200/80",
      phone: "text-green-800 dark:text-green-300",
      button:
        "bg-green-700 text-white hover:bg-green-800 dark:bg-green-700 dark:hover:bg-green-600",
    },
  },
};

export function PcUrgencyChecker() {
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);

  const selected = symptoms.find((symptom) => symptom.id === selectedSymptom);
  const result = selected ? recommendations[selected.level] : null;
  const ResultIcon = result?.icon;

  return (
    <section
      id="urgences"
      className="scroll-mt-6 relative overflow-hidden bg-[#faf8f5] px-4 py-20 sm:px-6 lg:px-8 lg:py-28 dark:bg-[#211e1a]"
    >
      {/* Décoration */}
      <div className="pointer-events-none absolute top-20 -left-40 size-96 rounded-full bg-[#c5a98b]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-[#a5a58d]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* En-tête */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b49a7b]/30 bg-[#b49a7b]/10 px-4 py-2 text-sm font-medium text-[#8b7257] dark:text-[#d0b99c]">
            <HeartPulse className="size-4" />
            Santé & Prévention
          </div>

          <h2 className="font-cormorant text-4xl font-semibold tracking-tight text-[#3d352d] sm:text-5xl lg:text-6xl dark:text-[#f3eae0]">
            Trieur d'Urgences Vétérinaires
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#b49a7b]/60" />
            <span className="text-[#a88b6b]">✦</span>
            <span className="h-px w-12 bg-[#b49a7b]/60" />
          </div>

          <p className="mt-6 text-base leading-8 text-[#756b60] sm:text-lg dark:text-[#bdb2a5]">
            Votre animal présente des symptômes inhabituels ? Utilisez notre questionnaire
            d'auto-évaluation pour obtenir une première indication sur le degré d'urgence.
          </p>
        </div>

        {/* Carte du questionnaire */}
        <div className="overflow-hidden rounded-3xl border border-[#e8dfd3] bg-white shadow-xl shadow-[#6b5845]/10 dark:border-[#494035] dark:bg-[#2c2721] dark:shadow-black/20">
          <div className="border-b border-[#eee8e0] px-6 py-7 sm:px-9 dark:border-[#494035]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#f2ece4] text-[#92785b] dark:bg-[#41372d] dark:text-[#d0b99c]">
                <Stethoscope className="size-5" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest text-[#a88b6b] uppercase">
                  Auto-évaluation
                </p>
                <h3 className="font-cormorant text-2xl font-semibold text-[#443a30] dark:text-[#f0e6da]">
                  Quel est l'état de votre compagnon ?
                </h3>
              </div>
            </div>

            <p className="text-sm leading-6 text-[#8a7e70] dark:text-[#b5a797]">
              Sélectionnez le symptôme principal pour savoir comment réagir :
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 px-6 py-7 sm:px-9">
            {symptoms.map((symptom, index) => {
              const active = selectedSymptom === symptom.id;

              return (
                <button
                  key={symptom.id}
                  type="button"
                  onClick={() => setSelectedSymptom(symptom.id)}
                  aria-pressed={active}
                  className={`group flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 ${
                    active
                      ? "border-[#a88b6b] bg-[#f3ece3] shadow-sm dark:border-[#b49a7b] dark:bg-[#41372d]"
                      : "border-[#eee8e0] bg-[#fcfbf9] hover:border-[#c5a98b]/70 hover:bg-[#faf7f2] dark:border-[#494035] dark:bg-[#26221e] dark:hover:border-[#80674c] dark:hover:bg-[#332c24]"
                  }`}
                >
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold transition-colors ${
                      active
                        ? "bg-[#92785b] text-white"
                        : "bg-[#eee8e0] text-[#92785b] dark:bg-[#41372d] dark:text-[#d0b99c]"
                    }`}
                  >
                    {active ? (
                      <CheckCircle2 className="size-4" />
                    ) : (
                      String(index + 1).padStart(2, "0")
                    )}
                  </span>

                  <span
                    className={`flex-1 text-sm leading-6 font-medium sm:text-base ${
                      active
                        ? "text-[#725a40] dark:text-[#f0dfc9]"
                        : "text-[#554b40] dark:text-[#e2d8cc]"
                    }`}
                  >
                    {symptom.label}
                  </span>

                  <ChevronRight
                    className={`size-5 shrink-0 transition-transform ${
                      active
                        ? "translate-x-1 text-[#92785b]"
                        : "text-[#b5a797] group-hover:translate-x-1"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Résultat */}
          {result && ResultIcon && (
            <div className="px-6 pb-7 sm:px-9">
              <div
                aria-live="polite"
                className={`animate-in rounded-2xl border p-6 duration-300 fade-in slide-in-from-bottom-3 sm:p-7 ${result.style.container}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${result.style.icon}`}
                  >
                    <ResultIcon className="size-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className={`text-xs font-bold tracking-widest ${result.style.title}`}>
                      {result.subtitle}
                    </p>
                    <h4
                      className={`mt-1 font-cormorant text-2xl font-bold sm:text-3xl ${result.style.title}`}
                    >
                      {result.title}
                    </h4>
                    <p className={`mt-4 text-sm leading-7 ${result.style.text}`}>
                      {result.description}
                    </p>

                    {result.phone && (
                      <div className="mt-5 rounded-xl border border-current/10 bg-white/50 p-4 dark:bg-black/10">
                        <p className={`mb-2 text-xs font-medium ${result.style.text}`}>
                          {result.phoneLabel}
                        </p>
                        <a
                          href={`tel:${result.phone.replaceAll(" ", "")}`}
                          className={`flex items-center gap-2 text-xl font-bold tracking-wide transition-opacity hover:opacity-70 ${result.style.phone}`}
                        >
                          <Phone className="size-5" />
                          {result.phone}
                        </a>
                      </div>
                    )}

                    <Button
                      render={
                        <a
                          href={
                            result.phone ? `tel:${result.phone.replaceAll(" ", "")}` : "#contact"
                          }
                        />
                      }
                      className={`mt-5 h-11 w-full sm:w-auto ${result.style.button}`}
                    >
                      {result.action}
                      <ChevronRight className="ml-2 size-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSymptom(null)}
                className="mt-4 text-sm font-medium text-[#92785b] underline-offset-4 transition-colors hover:text-[#725a40] hover:underline dark:text-[#d0b99c] dark:hover:text-[#e8d3b8]"
              >
                Réinitialiser le questionnaire
              </button>
            </div>
          )}
        </div>

        {/* Avertissement */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#e8dfd3] bg-[#f3eee7] p-4 dark:border-[#494035] dark:bg-[#2c2721]">
          <Info className="mt-0.5 size-5 shrink-0 text-[#92785b] dark:text-[#d0b99c]" />
          <p className="text-xs leading-6 text-[#796e61] dark:text-[#bdb2a5]">
            <strong className="font-semibold text-[#554b40] dark:text-[#e2d8cc]">
              Information importante :
            </strong>{" "}
            cet outil est indicatif et ne remplace ni un diagnostic ni un avis vétérinaire. En cas
            de doute, d'aggravation ou de symptôme inquiétant, contactez immédiatement un
            vétérinaire. Les difficultés respiratoires, pertes de conscience et hémorragies
            importantes nécessitent une prise en charge d'urgence.
          </p>
        </div>
      </div>
    </section>
  );
}
