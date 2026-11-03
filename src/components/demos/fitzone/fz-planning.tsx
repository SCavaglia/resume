import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["Tous les cours", "Force & Renfo", "Cardio & HIIT", "Combat & Boxe", "Zen & Souplesse"] as const;

const categoryStyles: Record<Category, { active: string; badge: string }> = {
  "Tous les cours": {
    active: "border-primary bg-primary text-primary-foreground",
    badge: "bg-primary/10 text-primary",
  },
  "Force & Renfo": {
    active: "border-green-600 bg-green-600 text-white",
    badge: "bg-green-500/10 text-green-700 dark:text-green-400",
  },
  "Cardio & HIIT": {
    active: "border-yellow-600 bg-yellow-600 text-white",
    badge: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
  },
  "Combat & Boxe": {
    active: "border-orange-600 bg-orange-600 text-white",
    badge: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
  },
  "Zen & Souplesse": {
    active: "border-violet-600 bg-violet-600 text-white",
    badge: "bg-violet-500/10 text-violet-700 dark:text-violet-400",
  },
};

const days = [
  { label: "Lundi", short: "Lun." },
  { label: "Mardi", short: "Mar." },
  { label: "Mercredi", short: "Mer." },
  { label: "Jeudi", short: "Jeu." },
  { label: "Vendredi", short: "Ven." },
  { label: "Samedi", short: "Sam." },
] as const;

type Category = (typeof categories)[number];
type Day = (typeof days)[number]["label"];

type Course = {
  id: number;
  day: Day;
  category: Exclude<Category, "Tous les cours">;
  start: string;
  end: string;
  duration: number;
  name: string;
  intensity: number;
  places: number;
  coach: string;
  initials: string;
};

const courses: Course[] = [
  {
    id: 1,
    day: "Lundi",
    category: "Force & Renfo",
    start: "07:00",
    end: "08:00",
    duration: 60,
    name: "CrossFit WOD",
    intensity: 3,
    places: 8,
    coach: "Alex",
    initials: "A",
  },
  {
    id: 2,
    day: "Lundi",
    category: "Combat & Boxe",
    start: "12:00",
    end: "13:00",
    duration: 60,
    name: "Boxe Anglaise",
    intensity: 2,
    places: 5,
    coach: "Mike",
    initials: "M",
  },
  {
    id: 3,
    day: "Lundi",
    category: "Force & Renfo",
    start: "18:00",
    end: "19:00",
    duration: 60,
    name: "CrossFit WOD",
    intensity: 3,
    places: 0,
    coach: "Alex",
    initials: "A",
  },
  {
    id: 4,
    day: "Lundi",
    category: "Cardio & HIIT",
    start: "19:00",
    end: "20:00",
    duration: 60,
    name: "HIIT Cardio",
    intensity: 3,
    places: 12,
    coach: "Mike",
    initials: "M",
  },
  {
    id: 5,
    day: "Mardi",
    category: "Cardio & HIIT",
    start: "07:30",
    end: "08:30",
    duration: 60,
    name: "HIIT Cardio",
    intensity: 3,
    places: 6,
    coach: "Mike",
    initials: "M",
  },
  {
    id: 6,
    day: "Mardi",
    category: "Zen & Souplesse",
    start: "12:00",
    end: "13:00",
    duration: 60,
    name: "Yoga Flow",
    intensity: 1,
    places: 10,
    coach: "Emma",
    initials: "E",
  },
  {
    id: 7,
    day: "Mardi",
    category: "Force & Renfo",
    start: "18:00",
    end: "19:00",
    duration: 60,
    name: "Renforcement musculaire",
    intensity: 2,
    places: 4,
    coach: "Alex",
    initials: "A",
  },
  {
    id: 8,
    day: "Mercredi",
    category: "Combat & Boxe",
    start: "09:00",
    end: "10:00",
    duration: 60,
    name: "Boxe Anglaise",
    intensity: 2,
    places: 5,
    coach: "Mike",
    initials: "M",
  },
  {
    id: 9,
    day: "Mercredi",
    category: "Force & Renfo",
    start: "12:00",
    end: "13:00",
    duration: 60,
    name: "CrossFit WOD",
    intensity: 3,
    places: 8,
    coach: "Alex",
    initials: "A",
  },
  {
    id: 10,
    day: "Mercredi",
    category: "Zen & Souplesse",
    start: "18:00",
    end: "19:00",
    duration: 60,
    name: "Yoga Flow",
    intensity: 1,
    places: 7,
    coach: "Emma",
    initials: "E",
  },
  {
    id: 11,
    day: "Jeudi",
    category: "Cardio & HIIT",
    start: "07:00",
    end: "08:00",
    duration: 60,
    name: "HIIT Cardio",
    intensity: 3,
    places: 12,
    coach: "Mike",
    initials: "M",
  },
  {
    id: 12,
    day: "Jeudi",
    category: "Combat & Boxe",
    start: "12:00",
    end: "13:00",
    duration: 60,
    name: "Boxe Anglaise",
    intensity: 2,
    places: 3,
    coach: "Mike",
    initials: "M",
  },
  {
    id: 13,
    day: "Jeudi",
    category: "Force & Renfo",
    start: "18:00",
    end: "19:00",
    duration: 60,
    name: "CrossFit WOD",
    intensity: 3,
    places: 0,
    coach: "Alex",
    initials: "A",
  },
  {
    id: 14,
    day: "Vendredi",
    category: "Zen & Souplesse",
    start: "08:00",
    end: "09:00",
    duration: 60,
    name: "Yoga Flow",
    intensity: 1,
    places: 10,
    coach: "Emma",
    initials: "E",
  },
  {
    id: 15,
    day: "Vendredi",
    category: "Force & Renfo",
    start: "12:00",
    end: "13:00",
    duration: 60,
    name: "Renforcement musculaire",
    intensity: 2,
    places: 6,
    coach: "Alex",
    initials: "A",
  },
  {
    id: 16,
    day: "Vendredi",
    category: "Cardio & HIIT",
    start: "18:00",
    end: "19:00",
    duration: 60,
    name: "HIIT Cardio",
    intensity: 3,
    places: 8,
    coach: "Mike",
    initials: "M",
  },
  {
    id: 17,
    day: "Samedi",
    category: "Force & Renfo",
    start: "09:00",
    end: "10:00",
    duration: 60,
    name: "CrossFit WOD",
    intensity: 3,
    places: 8,
    coach: "Alex",
    initials: "A",
  },
  {
    id: 18,
    day: "Samedi",
    category: "Combat & Boxe",
    start: "11:00",
    end: "12:00",
    duration: 60,
    name: "Boxe Anglaise",
    intensity: 2,
    places: 5,
    coach: "Mike",
    initials: "M",
  },
  {
    id: 19,
    day: "Samedi",
    category: "Zen & Souplesse",
    start: "14:00",
    end: "15:00",
    duration: 60,
    name: "Yoga Flow",
    intensity: 1,
    places: 10,
    coach: "Emma",
    initials: "E",
  },
];

export function FzPlanning() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Tous les cours");
  const [selectedDay, setSelectedDay] = useState<Day>("Lundi");

  const filteredCourses = courses.filter(
    (course) => course.day === selectedDay && (selectedCategory === "Tous les cours" || course.category === selectedCategory),
  );

  return (
    <section id="planning" className="flex flex-col px-8 pt-46">
      <div className="text-center">
        <p className="text-base font-bold uppercase tracking-widest bg-linear-to-br from-red-500 to-orange-500 bg-clip-text text-transparent">
          Planning Hebdomadaire
        </p>

        <h2 className="mt-4 text-6xl text-center font-oswald font-black uppercase tracking-wide">
          Planifie <span className="bg-linear-to-br from-red-500 to-orange-500 bg-clip-text text-transparent">tes séances</span>
        </h2>

        <p className="mt-4 mx-auto max-w-xl text-center text-lg font-light text-muted-foreground">
          Consultez notre planning interactif, filtrez par type d'activité et réservez instantanément votre créneau d'essai.
        </p>
      </div>

      <div className="mx-auto mt-12 w-full max-w-7xl rounded-2xl border bg-card p-4 px-6 shadow-sm sm:p-6">
        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                selectedCategory === category
                  ? categoryStyles[category].active
                  : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sélection du jour */}
        <div className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-6">
          {days.map((day) => (
            <button
              key={day.label}
              type="button"
              onClick={() => setSelectedDay(day.label)}
              aria-pressed={selectedDay === day.label}
              className={cn(
                "flex flex-col items-center gap-1 rounded-xl border px-2 py-3 transition-colors",
                selectedDay === day.label
                  ? "border-red-500 bg-linear-to-br from-red-500 to-orange-500 text-white"
                  : "border-border bg-background text-muted-foreground hover:bg-muted",
              )}
            >
              <span className="font-oswald text-xl tracking-wider uppercase">{day.label}</span>
            </button>
          ))}
        </div>

        {/* Cartes des cours */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <article
                key={course.id}
                className="flex flex-col rounded-xl border bg-background p-5 transition-colors hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", categoryStyles[course.category].badge)}>
                    {course.category}
                  </span>

                  <span className="text-sm text-muted-foreground">{course.duration} min</span>
                </div>

                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  {course.start} – {course.end}
                </p>

                <h3 className="mt-1 text-xl font-semibold">{course.name}</h3>

                <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                  <span>
                    Intensité{" "}
                    <span aria-label={`${course.intensity} sur 3`} className="text-orange-500">
                      {"⚡".repeat(course.intensity)}
                    </span>
                  </span>

                  <span aria-hidden="true">|</span>

                  <span className={course.places === 0 ? "font-medium text-destructive" : ""}>
                    {course.places === 0 ? "Complet" : `${course.places} places restantes`}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-muted font-semibold">{course.initials}</div>

                    <div>
                      <p className="text-xs text-muted-foreground">Coach</p>
                      <p className="text-sm font-medium">{course.coach}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={course.places === 0}
                    className={cn(
                      "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                      course.places === 0
                        ? "cursor-not-allowed bg-muted text-muted-foreground"
                        : "bg-primary text-primary-foreground hover:bg-primary/90",
                    )}
                  >
                    {course.places === 0 ? "Complet" : "Réserver"}
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-xl border border-dashed p-10 text-center md:col-span-2">
              <p className="font-medium">Aucun cours pour cette sélection.</p>
              <p className="mt-2 text-sm text-muted-foreground">Essayez une autre catégorie ou un autre jour.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
