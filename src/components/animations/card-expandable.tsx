import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  category: string;
  image: string;
  imageAlt?: string;
  infos: string[];
  className?: string;
};

export function CardExpandable({ title, category, image, imageAlt = "", infos, className }: Props) {
  return (
    <article className="group relative z-0 h-14 w-64 transition-all duration-500 hover:z-20 hover:-translate-y-3">
      {/* Catégorie */}
      <span
        className={cn(
          "group absolute -top-6 left-4 z-20 rounded-t-md border border-b-0 bg-background px-3 py-1 text-xs font-semibold text-muted-foreground transition-all duration-500 group-hover:text-foreground group-hover:bg-card",
          className,
        )}
      >
        {category}
      </span>

      <div
        className={cn(
          "absolute left-0 top-0 z-10 h-13 w-64 overflow-hidden",
          "rounded-xl border bg-card shadow-sm backdrop-blur-md",
          "transition-all duration-500 ease-in-out",
          "group-hover:h-[22rem] group-hover:w-[450px] group-hover:shadow-xl  group-hover:border-2 group-hover:bg-card/50 dark:group-hover:bg-card/85",
          className,
        )}
      >
        {/* Titre */}
        <div className="flex h-13 shrink-0 items-center justify-between px-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        {/* Contenu expandable */}
        <div className="flex h-[17rem] gap-6 px-3 pb-3">
          {/* Image */}
          <div className="w-3/5 h-full shrink-0 overflow-y-auto overflow-x-hidden rounded-lg">
            <img
              src={image}
              alt={imageAlt}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Informations */}
          <div className="flex flex-1 self-start flex-col justify-center gap-4 opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
            <h4 className="font-semibold">Fonctionnalités</h4>

            <ul className="flex flex-col gap-3">
              {infos.map((info, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
