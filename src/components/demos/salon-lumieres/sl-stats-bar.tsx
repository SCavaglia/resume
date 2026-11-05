import { Reveal } from "@/components/animations/reveal";

const items = [
    { value: "14", label: "Ans d'excellence" },
    { value: "18 000+", label: "Clientes fidèles" },
    { value: "60", label: "Soins & protocoles" },
    { value: "4.9/5", label: "Avis Google ★" },
];

export function SlStatsBar() {
    return (
        <section className="grid w-full grid-cols-2 items-center justify-center bg-[#121315] px-8 py-6 lg:grid-cols-4">
            {items.map((item, index) => (
                <Reveal
                    key={item.label}
                    direction="up"
                    delay={index * 150}
                    className="flex flex-col items-center px-4 py-8 text-center md:px-16"
                >
                    <span className="font-playfair text-5xl font-semibold tracking-tight text-[#C5A059]">
                        {item.value}
                    </span>

                    <span className="pt-2 text-sm tracking-wider text-[#AEAEB2] uppercase">
                        {item.label}
                    </span>
                </Reveal>
            ))}
        </section>
    );
}