import { useState } from "react";

type Answer = {
  value: string;
  label: string;
};

const questions = [
  {
    title: "Quel est votre type de peau ?",
    description: "Choisissez la réponse qui vous correspond le mieux.",
    answers: [
      { value: "dry", label: "Peau sèche ou inconfortable" },
      { value: "oily", label: "Peau grasse ou à imperfections" },
      { value: "combination", label: "Peau mixte" },
      { value: "sensitive", label: "Peau sensible ou réactive" },
    ],
  },
  {
    title: "Quel est votre objectif beauté prioritaire ?",
    description: "Quel résultat aimeriez-vous privilégier ?",
    answers: [
      {
        value: "glow",
        label: "Retrouver de l’éclat et de la luminosité",
      },
      {
        value: "firmness",
        label: "Lisser les rides et raffermir la peau",
      },
      { value: "purity", label: "Purifier la peau et affiner son grain" },
      {
        value: "relaxation",
        label: "Me détendre et relâcher les tensions",
      },
    ],
  },
];

const recommendations: Record<string, string> = {
  dry: "Privilégiez un rituel axé sur le confort et l'hydratation.",
  oily: "Privilégiez un rituel équilibrant, adapté aux peaux à tendance grasse.",
  combination: "Privilégiez un rituel qui aide à équilibrer les différentes zones du visage.",
  sensitive: "Privilégiez un rituel doux, avec des soins adaptés aux peaux sensibles.",
  glow: "Orientez-vous vers un rituel éclat pour une peau visiblement lumineuse.",
  firmness: "Découvrez un rituel axé sur l'apparence de la fermeté et les signes de l'âge.",
  purity: "Orientez-vous vers un rituel purifiant adapté à votre peau.",
  relaxation: "Choisissez un rituel bien-être pour un moment de détente.",
};

export function SlMultistepQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = questions[step];
  const selectedAnswer = answers[step];

  function selectAnswer(value: string) {
    setAnswers((previous) => {
      const updated = [...previous];
      updated[step] = value;
      return updated;
    });
  }

  function goBack() {
    if (isComplete) {
      setIsComplete(false);
      setStep(questions.length - 1);
      return;
    }

    setStep((previous) => Math.max(0, previous - 1));
  }

  function goNext() {
    if (step < questions.length - 1) {
      setStep((previous) => previous + 1);
      return;
    }

    setIsComplete(true);
  }

  function restart() {
    setStep(0);
    setAnswers([]);
    setIsComplete(false);
  }

  const skinRecommendation = recommendations[answers[0]];
  const goalRecommendation = recommendations[answers[1]];

  return (
    <section
      id="diagnostic"
      className="scroll-mt-32 mx-auto mt-32 mb-24 w-full max-w-3xl rounded-2xl border bg-card p-6 shadow-sm sm:p-10"
    >
      <div className="mb-8">
        <p className="mb-2 text-center text-sm font-medium tracking-widest text-[#C5A059] uppercase">
          Recommandation
        </p>

        <h2 className="text-center font-playfair text-2xl font-semibold tracking-tight sm:text-3xl">
          Votre diagnostic beauté en ligne
        </h2>

        <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
          Répondez à quelques questions pour découvrir un rituel beauté adapté à vos envies.
        </p>
      </div>

      {!isComplete ? (
        <>
          <div
            className="mb-8 h-0.5 overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-label="Progression du questionnaire"
            aria-valuemin={0}
            aria-valuemax={questions.length}
            aria-valuenow={step + 1}
          >
            <div
              className="h-full rounded-full bg-[#C5A059] transition-all duration-300"
              style={{
                width: `${((step + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          <p className="mb-3 text-sm text-muted-foreground">
            Étape {step + 1} sur {questions.length}
          </p>

          <h3 className="text-lg font-semibold">{currentQuestion.title}</h3>

          <p className="mt-2 text-sm text-muted-foreground">{currentQuestion.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {currentQuestion.answers.map((answer: Answer) => {
              const isSelected = selectedAnswer === answer.value;

              return (
                <button
                  key={answer.value}
                  type="button"
                  onClick={() => selectAnswer(answer.value)}
                  aria-pressed={isSelected}
                  className={`w-full rounded-xl border p-6 text-left text-base font-semibold transition-all duration-300 hover:-translate-y-1 ${
                    isSelected
                      ? "border-[#C5A059] bg-[#C5A059]/5 ring-1 ring-[#C5A059]"
                      : "border-border hover:bg-[#C5A059]/15"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex size-4 shrink-0 items-center justify-center rounded-full border ${
                        isSelected ? "border-[#C5A059]" : "border-[#C5A059]-foreground/50"
                      }`}
                    >
                      {isSelected && <span className="size-2 rounded-full bg-[#C5A059]" />}
                    </span>

                    <span>{answer.label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className="rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
            >
              Retour
            </button>

            <button
              type="button"
              onClick={goNext}
              disabled={!selectedAnswer}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {step === questions.length - 1 ? "Voir ma recommandation" : "Suivant"}
            </button>
          </div>
        </>
      ) : (
        <div aria-live="polite">
          <p className="text-sm font-medium text-muted-foreground">Votre sélection</p>

          <h3 className="mt-2 text-xl font-semibold">Votre rituel beauté</h3>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl bg-muted/50 p-4">
              <p className="text-sm font-medium">Votre peau</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{skinRecommendation}</p>
            </div>

            <div className="rounded-xl bg-muted/50 p-4">
              <p className="text-sm font-medium">Votre objectif</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{goalRecommendation}</p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            Cette suggestion est indicative. Un échange avec une professionnelle permettra de
            choisir les soins les plus adaptés à vos besoins.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={goBack}
              className="rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Modifier mes réponses
            </button>

            <button
              type="button"
              onClick={restart}
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Recommencer
            </button>
          </div>
        </div>
      )}

      <p className="mt-8 border-t pt-4 text-xs leading-5 text-muted-foreground">
        Maquette de démonstration : les questions, les réponses et les recommandations sont
        fictives. Ce questionnaire ne constitue pas un diagnostic professionnel.
      </p>
    </section>
  );
}
