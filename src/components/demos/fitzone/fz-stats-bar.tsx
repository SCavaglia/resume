export function FzStatsBar() {
  const items = [
    { value: "10+", label: "ans d'expérience" },
    { value: "5000+", label: "membres actifs" },
    { value: "50+", label: "cours / semaine" },
    { value: "4.9", label: "note moyenne ★" },
  ];

  return (
    <div className="mx-auto mt-2 grid w-fit max-w-7xl grid-cols-2 items-center justify-center rounded-xl border px-8 shadow-[0_0_3px_1px_rgba(239,68,68,0.6),0_0_10px_2px_rgba(239,68,68,0.4)] transition-shadow duration-300 hover:shadow-[0_0_4px_1px_rgba(239,68,68,0.8),0_0_12px_4px_rgba(239,68,68,0.6)] lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center border-r border-b px-16 py-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-linear-to-t hover:from-white/1 hover:to-red-500/10 nth-[2n]:border-r-0 nth-last-[-n+2]:border-b-0 lg:border-b-0 lg:nth-[2n]:border-r lg:nth-[4n]:border-r-0"
        >
          <span className="bg-linear-to-r from-red-500 to-orange-400 bg-clip-text font-oswald text-5xl font-bold tracking-tight text-transparent">
            {item.value}
          </span>

          <span className="pt-2 text-sm tracking-wider text-muted-foreground uppercase">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
