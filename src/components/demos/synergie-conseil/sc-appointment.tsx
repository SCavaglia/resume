import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Laptop,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const specialties = [
  {
    title: "Droit & Juridique B2B",
    description: "Avocats d'affaires associés, fusions, contrats commerciaux.",
  },
  {
    title: "Expertise-Comptable",
    description: "Tenue, bilan, optimisation fiscale et déclarations sociales.",
  },
  {
    title: "Conseil & Transformation",
    description: "Stratégie d'entreprise et performance d'exploitation.",
  },
  {
    title: "Gestion de Patrimoine",
    description: "Transmission d'actifs et fiscalité des dirigeants.",
  },
];

const formats = [
  {
    title: "Visioconférence",
    description: "Entretien sécurisé via Microsoft Teams ou Zoom.",
    icon: Laptop,
  },
  {
    title: "Présentiel au Cabinet",
    description: "Accueil dans nos salons, 32 Boulevard Malesherbes, Paris 8e.",
    icon: Building2,
  },
  {
    title: "Appel Téléphonique",
    description: "Ligne directe sécurisée.",
    icon: Phone,
  },
];

const days = ["Lundi prochain", "Mardi prochain", "Mercredi prochain", "Jeudi prochain"];

const slots = ["09h30", "11h00", "14h30", "16h00"];

const steps = ["Spécialité", "Format", "Créneau & Validation"];

type AppointmentData = {
  specialty: string;
  format: string;
  day: string;
  slot: string;
  name: string;
  company: string;
  email: string;
};

const initialData: AppointmentData = {
  specialty: "",
  format: "",
  day: "",
  slot: "",
  name: "",
  company: "",
  email: "",
};

export function ScAppointment() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<AppointmentData>(initialData);
  const [errors, setErrors] = useState<string[]>([]);
  const [confirmed, setConfirmed] = useState(false);

  const updateData = (field: keyof AppointmentData, value: string) => {
    setData((current) => ({ ...current, [field]: value }));
    setErrors([]);
  };

  const validateStep = () => {
    const missing: string[] = [];

    if (step === 1 && !data.specialty) {
      missing.push("Sélectionnez une spécialité.");
    }

    if (step === 2 && !data.format) {
      missing.push("Sélectionnez un format de rendez-vous.");
    }

    if (step === 3) {
      if (!data.day) missing.push("Sélectionnez un jour.");
      if (!data.slot) missing.push("Sélectionnez un créneau.");
      if (!data.name.trim()) missing.push("Renseignez votre nom et prénom.");
      if (!data.company.trim()) missing.push("Renseignez votre entreprise.");
      if (!data.email.trim()) {
        missing.push("Renseignez votre adresse email.");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        missing.push("L'adresse email renseignée est invalide.");
      }
    }

    setErrors(missing);
    return missing.length === 0;
  };

  const handleContinue = () => {
    if (!validateStep()) return;

    if (step < 3) {
      setStep((current) => current + 1);
    } else {
      setConfirmed(true);
    }
  };

  const restart = () => {
    setData(initialData);
    setStep(1);
    setErrors([]);
    setConfirmed(false);
  };

  return (
    <section
      id="prendre-rdv"
      className="relative isolate overflow-hidden bg-[#f5f3ee] px-6 py-24 sm:px-10 lg:px-16 dark:bg-[#0d1f2d]"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute top-20 -left-40 size-96 rounded-full bg-[#b4966e]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-[#35536b]/10 blur-[110px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b4966e]/30 bg-[#b4966e]/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[#94764e] uppercase dark:text-[#d0b997]">
            <CalendarDays className="size-4" />
            Échangeons ensemble
          </div>

          <h2 className="font-cormorant text-4xl font-semibold text-[#172b3a] sm:text-5xl lg:text-6xl dark:text-[#f5f3ee]">
            Prendre un{" "}
            <span className="text-[#a88960] dark:text-[#c6a77e]">Rendez-vous Conseil</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#77736c] sm:text-base dark:text-[#b6c0c8]">
            Échangez avec nos experts et bénéficiez d'un premier entretien personnalisé pour étudier
            vos enjeux professionnels.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#b4966e]/20 bg-white shadow-[0_25px_80px_-35px_rgba(13,31,45,0.25)] dark:bg-[#142b3b] dark:shadow-black/20">
          {/* Progress */}
          {!confirmed && (
            <div className="border-b border-[#b4966e]/15 px-6 py-7 sm:px-10">
              <div className="mb-5 flex items-center justify-between gap-3">
                {steps.map((label, index) => {
                  const number = index + 1;
                  const active = step === number;
                  const completed = step > number;

                  return (
                    <div key={label} className="flex flex-1 items-center gap-2">
                      <div
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-all",
                          completed && "border-[#a88960] bg-[#a88960] text-white",
                          active &&
                            "border-[#a88960] bg-[#a88960]/10 text-[#94764e] dark:text-[#d0b997]",
                          !active &&
                            !completed &&
                            "border-[#d9d4cb] text-[#aaa49a] dark:border-white/15 dark:text-white/40",
                        )}
                      >
                        {completed ? <Check className="size-4" /> : number}
                      </div>

                      <span
                        className={cn(
                          "hidden text-xs font-medium sm:block",
                          active
                            ? "text-[#172b3a] dark:text-[#f5f3ee]"
                            : "text-[#aaa49a] dark:text-white/40",
                        )}
                      >
                        {label}
                      </span>

                      {index < steps.length - 1 && (
                        <div className="ml-auto h-px min-w-3 flex-1 bg-[#e7e2d9] dark:bg-white/10" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="h-1 overflow-hidden rounded-full bg-[#e7e2d9] dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-[#b4966e] transition-all duration-500"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="p-6 sm:p-10 lg:p-12">
            {confirmed ? (
              /* Confirmation */
              <div className="mx-auto max-w-2xl py-6 text-center">
                <div className="mx-auto mb-7 flex size-20 items-center justify-center rounded-full border border-[#b4966e]/30 bg-[#b4966e]/10 text-[#a88960] dark:text-[#d0b997]">
                  <CheckCircle2 className="size-10" />
                </div>

                <span className="text-xs font-semibold tracking-[0.2em] text-[#a88960] uppercase dark:text-[#c6a77e]">
                  Demande enregistrée
                </span>

                <h3 className="mt-3 font-cormorant text-4xl font-semibold text-[#172b3a] sm:text-5xl dark:text-[#f5f3ee]">
                  Confirmation de Rendez-vous
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#77736c] dark:text-[#b6c0c8]">
                  Merci, {data.name} ({data.company}). Votre demande d'entretien conseil a été
                  enregistrée avec succès.
                </p>

                <div className="my-9 rounded-xl border border-[#b4966e]/20 bg-[#f8f6f1] p-6 text-left sm:p-8 dark:bg-white/[0.04]">
                  <h4 className="mb-5 flex items-center gap-2 font-semibold text-[#172b3a] dark:text-[#f5f3ee]">
                    <CalendarDays className="size-4 text-[#a88960]" />
                    Récapitulatif de votre rendez-vous
                  </h4>

                  <div className="space-y-4 text-sm">
                    {[
                      ["Expertise", data.specialty],
                      ["Format", data.format],
                      ["Créneau", `${data.day} à ${data.slot}`],
                      ["Cabinet", "32 Boulevard Malesherbes, 75008 Paris"],
                      ["Email", data.email],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex flex-col gap-1 border-b border-[#b4966e]/10 pb-3 last:border-0 last:pb-0 sm:flex-row sm:justify-between sm:gap-4"
                      >
                        <span className="text-[#89847b] dark:text-[#aab5bd]">{label}</span>
                        <span className="font-medium text-[#172b3a] sm:text-right dark:text-[#f5f3ee]">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8 flex items-start gap-3 rounded-lg border border-[#b4966e]/20 bg-[#b4966e]/5 p-4 text-left">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#a88960]" />
                  <p className="text-xs leading-6 text-[#77736c] dark:text-[#b6c0c8]">
                    Une invitation d'agenda contenant les informations pratiques de votre entretien
                    sera envoyée à l'adresse {data.email}.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-2 rounded-md bg-[#b4966e] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#9d8058] hover:shadow-lg hover:shadow-[#b4966e]/20"
                >
                  <ArrowLeft className="size-4" />
                  Recommencer
                </button>
              </div>
            ) : (
              <>
                {/* Step heading */}
                <div className="mb-9">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#a88960] uppercase dark:text-[#c6a77e]">
                    Étape {step} sur 3
                  </span>

                  <h3 className="mt-2 font-cormorant text-3xl font-semibold text-[#172b3a] sm:text-4xl dark:text-[#f5f3ee]">
                    {step === 1 && "Sélectionnez le domaine d'expertise"}
                    {step === 2 && "Choisissez le format de l'entretien"}
                    {step === 3 && "Sélectionnez votre créneau & validez"}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#77736c] dark:text-[#b6c0c8]">
                    {step === 1 &&
                      "Choisissez la compétence requise pour votre consultation conseil."}
                    {step === 2 && "Nos associés s'adaptent à vos impératifs de confidentialité."}
                    {step === 3 &&
                      "Choisissez votre jour et votre heure. Remplissez ensuite vos coordonnées professionnelles."}
                  </p>
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {specialties.map((specialty, index) => (
                      <button
                        key={specialty.title}
                        type="button"
                        onClick={() => updateData("specialty", specialty.title)}
                        className={cn(
                          "group relative flex min-h-36 flex-col rounded-xl border p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
                          data.specialty === specialty.title
                            ? "border-[#b4966e] bg-[#b4966e]/10 shadow-md shadow-[#b4966e]/10"
                            : "border-[#b4966e]/20 bg-white hover:border-[#b4966e]/50 dark:bg-white/[0.02]",
                        )}
                      >
                        <div className="flex w-full items-center justify-between">
                          <span className="text-xs font-semibold tracking-[0.15em] text-[#b4966e]">
                            0{index + 1}
                          </span>
                          <span
                            className={cn(
                              "flex size-5 items-center justify-center rounded-full border transition-all",
                              data.specialty === specialty.title
                                ? "border-[#a88960] bg-[#a88960] text-white"
                                : "border-[#d9d4cb] dark:border-white/20",
                            )}
                          >
                            {data.specialty === specialty.title && <Check className="size-3" />}
                          </span>
                        </div>

                        <span className="mt-4 font-semibold text-[#172b3a] dark:text-[#f5f3ee]">
                          {specialty.title}
                        </span>

                        <span className="mt-2 text-xs leading-5 text-[#89847b] dark:text-[#aab5bd]">
                          {specialty.description}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="grid gap-4 md:grid-cols-3">
                    {formats.map((format) => {
                      const Icon = format.icon;

                      return (
                        <button
                          key={format.title}
                          type="button"
                          onClick={() => updateData("format", format.title)}
                          className={cn(
                            "relative flex min-h-52 flex-col items-start rounded-xl border p-6 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
                            data.format === format.title
                              ? "border-[#b4966e] bg-[#b4966e]/10 shadow-md shadow-[#b4966e]/10"
                              : "border-[#b4966e]/20 bg-white hover:border-[#b4966e]/50 dark:bg-white/[0.02]",
                          )}
                        >
                          <div className="flex w-full items-center justify-between">
                            <Icon className="size-7 text-[#a88960] dark:text-[#c6a77e]" />

                            <span
                              className={cn(
                                "flex size-5 items-center justify-center rounded-full border",
                                data.format === format.title
                                  ? "border-[#a88960] bg-[#a88960] text-white"
                                  : "border-[#d9d4cb] dark:border-white/20",
                              )}
                            >
                              {data.format === format.title && <Check className="size-3" />}
                            </span>
                          </div>

                          <span className="mt-7 font-semibold text-[#172b3a] dark:text-[#f5f3ee]">
                            {format.title}
                          </span>

                          <span className="mt-2 text-xs leading-5 text-[#89847b] dark:text-[#aab5bd]">
                            {format.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="grid gap-9 lg:grid-cols-2">
                    <div>
                      <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#172b3a] dark:text-[#f5f3ee]">
                        <CalendarDays className="size-4 text-[#a88960]" />
                        Sélectionner le jour
                      </h4>

                      <div className="grid grid-cols-2 gap-3">
                        {days.map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => updateData("day", day)}
                            className={cn(
                              "rounded-lg border px-3 py-4 text-xs font-medium transition-all",
                              data.day === day
                                ? "border-[#b4966e] bg-[#b4966e]/10 text-[#94764e] dark:text-[#d0b997]"
                                : "border-[#b4966e]/20 text-[#77736c] hover:border-[#b4966e]/60 dark:text-[#b6c0c8]",
                            )}
                          >
                            {day}
                          </button>
                        ))}
                      </div>

                      <h4 className="mt-8 mb-4 flex items-center gap-2 text-sm font-semibold text-[#172b3a] dark:text-[#f5f3ee]">
                        <Clock3 className="size-4 text-[#a88960]" />
                        Créneaux disponibles
                      </h4>

                      <div className="grid grid-cols-2 gap-3">
                        {slots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => updateData("slot", slot)}
                            className={cn(
                              "flex flex-col items-center gap-1 rounded-lg border px-3 py-4 transition-all",
                              data.slot === slot
                                ? "border-[#b4966e] bg-[#b4966e]/10 text-[#94764e] dark:text-[#d0b997]"
                                : "border-[#b4966e]/20 text-[#77736c] hover:border-[#b4966e]/60 dark:text-[#b6c0c8]",
                            )}
                          >
                            <span className="text-sm font-semibold">{slot}</span>
                            <span className="text-[10px]">30 min · Gratuit</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#172b3a] dark:text-[#f5f3ee]">
                        <Building2 className="size-4 text-[#a88960]" />
                        Vos coordonnées professionnelles
                      </h4>

                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="appointment-name"
                            className="mb-2 block text-xs font-medium text-[#77736c] dark:text-[#b6c0c8]"
                          >
                            Nom & Prénom
                          </label>
                          <input
                            id="appointment-name"
                            type="text"
                            autoComplete="name"
                            value={data.name}
                            onChange={(event) => updateData("name", event.target.value)}
                            placeholder="Jean Dupont"
                            className="h-12 w-full rounded-lg border border-[#b4966e]/20 bg-transparent px-4 text-sm text-[#172b3a] transition-colors outline-none placeholder:text-[#aaa49a] focus:border-[#b4966e] dark:text-[#f5f3ee]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="appointment-company"
                            className="mb-2 block text-xs font-medium text-[#77736c] dark:text-[#b6c0c8]"
                          >
                            Nom de votre entreprise
                          </label>
                          <input
                            id="appointment-company"
                            type="text"
                            autoComplete="organization"
                            value={data.company}
                            onChange={(event) => updateData("company", event.target.value)}
                            placeholder="Entreprise SAS"
                            className="h-12 w-full rounded-lg border border-[#b4966e]/20 bg-transparent px-4 text-sm text-[#172b3a] transition-colors outline-none placeholder:text-[#aaa49a] focus:border-[#b4966e] dark:text-[#f5f3ee]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="appointment-email"
                            className="mb-2 block text-xs font-medium text-[#77736c] dark:text-[#b6c0c8]"
                          >
                            Email professionnel
                          </label>
                          <input
                            id="appointment-email"
                            type="email"
                            autoComplete="email"
                            value={data.email}
                            onChange={(event) => updateData("email", event.target.value)}
                            placeholder="jean@entreprise.fr"
                            className="h-12 w-full rounded-lg border border-[#b4966e]/20 bg-transparent px-4 text-sm text-[#172b3a] transition-colors outline-none placeholder:text-[#aaa49a] focus:border-[#b4966e] dark:text-[#f5f3ee]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Validation errors */}
                {errors.length > 0 && (
                  <div
                    role="alert"
                    className="mt-7 rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-3 text-xs leading-6 text-red-600 dark:text-red-300"
                  >
                    {errors.map((error) => (
                      <p key={error}>• {error}</p>
                    ))}
                  </div>
                )}

                {/* Navigation */}
                <div className="mt-10 flex flex-col-reverse justify-between gap-3 border-t border-[#b4966e]/15 pt-7 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => {
                      setErrors([]);
                      setStep((current) => Math.max(1, current - 1));
                    }}
                    disabled={step === 1}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#b4966e]/30 px-6 py-3 text-sm font-medium text-[#77736c] transition-colors hover:border-[#b4966e] hover:text-[#94764e] disabled:invisible dark:text-[#b6c0c8]"
                  >
                    <ArrowLeft className="size-4" />
                    Retour
                  </button>

                  <button
                    type="button"
                    onClick={handleContinue}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-[#b4966e] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-[#b4966e]/15 transition-all hover:-translate-y-0.5 hover:bg-[#9d8058] hover:shadow-lg"
                  >
                    {step === 3 ? "Confirmer l'entretien" : "Continuer"}
                    {step === 3 ? <Check className="size-4" /> : <ArrowRight className="size-4" />}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {!confirmed && (
          <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-[#89847b] dark:text-[#aab5bd]">
            <ShieldCheck className="size-4 text-[#a88960]" />
            Vos informations sont traitées de manière strictement confidentielle.
          </p>
        )}
      </div>
    </section>
  );
}
