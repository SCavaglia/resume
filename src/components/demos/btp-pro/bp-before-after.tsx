import { useState, useRef, useCallback, type PointerEvent } from "react";

export function BpBeforeAfter() {
  const [position, setPosition] = useState(50);
  const comparisonRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const bounds = comparisonRef.current?.getBoundingClientRect();

    if (!bounds || bounds.width === 0) return;

    const nextPosition = ((clientX - bounds.left) / bounds.width) * 100;

    setPosition(Math.min(100, Math.max(0, nextPosition)));
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.buttons === 1 || event.pointerType === "touch") {
      updatePosition(event.clientX);
    }
  };

  return (
    <section id="avant-apres" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Titre */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Projets de rénovation notables
          </h2>

          <div className="mx-auto mt-3 h-1 w-20 bg-primary" />

          <p className="mt-4 text-muted-foreground">
            Découvrez la qualité de finition BTP PRO à travers notre comparatif de chantier
            interactif. Faites glisser la barre centrale de gauche à droite pour observer la
            transformation complète d'une salle d'eau rustique en suite parentale avec marbre et
            douche à l'italienne.
          </p>
        </div>

        {/* Comparateur avant / après */}
        <div
          ref={comparisonRef}
          className="relative mx-auto mt-12 aspect-video w-full max-w-4xl touch-pan-y overflow-hidden rounded-2xl select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
        >
          {/* Image après */}
          <img
            src="/resume/batitop/after.jpg"
            alt="Après rénovation : suite parentale avec marbre et douche à l'italienne"
            draggable={false}
            className="absolute inset-0 size-full object-cover"
          />

          {/* Image avant */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img
              src="/resume/batitop/before.jpg"
              alt="Avant rénovation : salle d'eau rustique"
              draggable={false}
              className="absolute inset-0 size-full object-cover"
            />
          </div>

          {/* Labels */}
          <span className="absolute top-4 left-4 rounded-md bg-background/90 px-3 py-1 text-sm font-medium">
            Avant
          </span>

          <span className="absolute top-4 right-4 rounded-md bg-background/90 px-3 py-1 text-sm font-medium">
            Après
          </span>

          {/* Curseur */}
          <div
            className="absolute inset-y-0 z-10 w-1 -translate-x-1/2 cursor-ew-resize bg-white"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          >
            <div className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary text-primary-foreground shadow-md">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-5"
              >
                <path d="m8 5-7 7 7 7M16 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Contrôle accessible au clavier */}
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label="Comparer les images avant et après"
            className="absolute inset-x-0 bottom-0 z-20 h-1 w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}
