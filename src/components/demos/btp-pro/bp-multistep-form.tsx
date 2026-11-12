import { useState } from "react";
import {
  BrickWall,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Droplet,
  Fence,
  PaintRoller,
  SunSnow,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const trades = [
  { value: "plomberie", label: "Plomberie", icon: Droplet, basePrice: 120 },
  { value: "electricite", label: "Électricité", icon: Zap, basePrice: 110 },
  { value: "maconnerie", label: "Maçonnerie", icon: BrickWall, basePrice: 140 },
  { value: "peinture", label: "Peinture", icon: PaintRoller, basePrice: 70 },
  { value: "menuiserie", label: "Menuiserie", icon: Fence, basePrice: 150 },
  { value: "isolation", label: "Isolation", icon: SunSnow, basePrice: 130 },
] as const;

const finishes = [
  {
    value: "standard",
    label: "Standard",
    stars: 3,
    multiplier: 1,
    description: "Finition durable et soignée.",
  },
  {
    value: "premium",
    label: "Premium",
    stars: 4,
    multiplier: 1.2,
    description: "Matériaux de qualité supérieure.",
  },
  {
    value: "prestige",
    label: "Prestige",
    stars: 5,
    multiplier: 1.45,
    description: "Prestations haut de gamme.",
  },
] as const;

export function BpMultistepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const [trade, setTrade] = useState<(typeof trades)[number]["value"]>(trades[0].value);
  const [surface, setSurface] = useState(60);
  const [finish, setFinish] = useState<(typeof finishes)[number]["value"]>(finishes[0].value);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const selectedTrade = trades.find((t) => t.value === trade)!;
  const selectedFinish = finishes.find((f) => f.value === finish)!;

  const price = Math.round(surface * selectedTrade.basePrice * selectedFinish.multiplier);

  const steps = ["Projet", "Surface", "Finitions", "Coordonnées"];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      setIsCompleted(true);
    } else {
      setCurrentStep((s) => s + 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="mx-auto w-full max-w-3xl space-y-5 rounded-2xl border bg-card p-5 shadow-sm sm:p-8 lg:max-w-xl lg:p-4">
        <div className="mx-auto max-w-lg space-y-5 py-8 text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check className="size-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Simulation terminée !</h2>

            <p className="text-muted-foreground">
              Votre simulation est terminée. Aucune demande n'a été envoyée : ceci est uniquement
              une maquette interactive.
            </p>
          </div>

          <div className="rounded-xl border bg-muted/30 p-5 text-left">
            <p className="text-sm text-muted-foreground">Votre estimation</p>

            <p className="mt-1 text-3xl font-semibold">
              {(price - 200).toLocaleString("fr-FR")} ━ {(price + 225).toLocaleString("fr-FR")} €
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              {selectedTrade.label} · {surface} m² · {selectedFinish.label}
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Merci {name.trim() || "pour votre visite"} !
          </p>
        </div>

        <Button onClick={handleRestart} className="rounded-lg">
          Recommencer
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl space-y-2 rounded-2xl border bg-card p-5 shadow-sm sm:p-8 lg:max-w-xl lg:p-4">
      {/* Navigation */}
      <nav aria-label="Étapes de la simulation" className="mb-0">
        <ol className="mb-2 flex items-start border-b pb-2">
          {steps.map((label, index) => {
            const isActive = currentStep === index;
            const isDone = currentStep > index;

            return (
              <li key={label} className="flex flex-1 items-start last:flex-none">
                <button
                  type="button"
                  onClick={() => index < currentStep && setCurrentStep(index)}
                  disabled={index >= currentStep}
                  className="flex flex-col items-center gap-2 text-xs text-muted-foreground transition-colors sm:text-sm"
                >
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-full border",
                      isActive || isDone ? "border-green-500/40 bg-green-500/30" : "border-border",
                    )}
                  >
                    {isDone ? <Check className="size-4" /> : index + 1}
                  </span>

                  <span className="text-center">{label}</span>
                </button>

                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      "mx-2 mt-4 h-px flex-1",
                      isDone ? "bg-green-500/30" : "bg-border",
                    )}
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Étape 1 */}
      {currentStep === 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Choisissez votre type de travaux :
          </h2>

          <div className="grid gap-3 sm:grid-cols-3">
            {trades.map((item) => {
              const Icon = item.icon;
              const isSelected = trade === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setTrade(item.value)}
                  className={cn(
                    "flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border p-2 text-center transition-colors",
                    isSelected
                      ? "border-primary bg-primary/5 ring-1 ring-primary"
                      : "border-border hover:border-primary/50 hover:bg-muted/50",
                  )}
                >
                  <Icon
                    className={cn("size-6", isSelected ? "text-primary" : "text-muted-foreground")}
                  />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Étape 2 */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Estimez la surface à rénover :</h2>

          <div className="rounded-xl border bg-muted/20 p-6">
            <div className="mb-6 flex items-baseline justify-between">
              <span className="text-sm text-muted-foreground">Surface estimée</span>

              <span className="text-3xl font-semibold">
                {surface} <span className="text-base font-normal">m²</span>
              </span>
            </div>

            <Slider
              min={10}
              max={200}
              step={5}
              value={[surface]}
              onValueChange={(value) => setSurface(Array.isArray(value) ? (value[0] ?? 10) : value)}
            />

            <div className="mt-3 flex justify-between text-xs text-muted-foreground">
              <span>10 m²</span>
              <span>200 m²</span>
            </div>
          </div>
        </div>
      )}

      {/* Étape 3 */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Sélectionnez la gamme de finitions :
          </h2>

          <div className="flex flex-col gap-4">
            {finishes.map((item) => {
              const isSelected = finish === item.value;

              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setFinish(item.value)}
                  className={cn(
                    "flex items-center justify-between rounded-xl border p-5 text-left transition-colors",
                    isSelected
                      ? "border-primary bg-primary/5 ring-1 ring-primary"
                      : "border-border hover:border-primary/50 hover:bg-muted/50",
                  )}
                >
                  <span>
                    <span className="flex items-center gap-2">
                      <span className="text-xl font-semibold tracking-wide">{item.label}</span>

                      <span className="text-amber-500">{"★".repeat(item.stars)}</span>
                    </span>

                    <span className="mt-1 block text-muted-foreground">{item.description}</span>

                    <span className="mt-1 block text-sm text-muted-foreground">
                      {item.multiplier === 1
                        ? "Tarif de base"
                        : `+${Math.round((item.multiplier - 1) * 100)} % sur le tarif de base`}
                    </span>
                  </span>

                  {isSelected && <Check className="size-5 text-primary" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Étape 4 */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Coordonnées pour l'envoi du chiffrage détaillé :
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nom</Label>

              <Input
                id="name"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Adresse e-mail</Label>

              <Input
                id="email"
                type="email"
                placeholder="vous@exemple.fr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Estimation */}
      <div className="pt-2" aria-live="polite">
        <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-primary/20 bg-primary/5 p-5">
          <div className="flex items-center gap-2 self-start">
            <ClipboardCheck />
            Votre estimation en direct :
          </div>

          <ul className="list-disc space-y-2 pl-6 text-lg font-semibold">
            <li>Prestation : {selectedTrade.label}</li>
            <li>Surface : {surface} m²</li>
            <li>Finition : {selectedFinish.label}</li>
          </ul>

          <p className="text-4xl font-bold tabular-nums">
            {(price - 200).toLocaleString("fr-FR")} ━ {(price + 225).toLocaleString("fr-FR")} €
          </p>

          <p className="text-center text-xs text-muted-foreground">
            TVA 10 % incluse (rénovation de plus de 2 ans). Estimation indicative à confirmer selon
            le projet.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-3 border-t pt-5">
        <Button
          variant="outline"
          className="rounded-lg"
          disabled={isFirstStep}
          onClick={() => setCurrentStep((s) => s - 1)}
        >
          <ChevronLeft />
          Retour
        </Button>

        <Button className="rounded-lg" onClick={handleNext}>
          {isLastStep ? "Terminer la simulation" : "Continuer"}

          {!isLastStep && <ChevronRight />}
        </Button>
      </div>
    </div>
  );
}
