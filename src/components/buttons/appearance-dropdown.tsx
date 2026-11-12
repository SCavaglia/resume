import { ChevronDown, Monitor, Moon, Palette, Sun } from "lucide-react";
import type { Appearance } from "@/hooks/use-appearance";
import { useAppearance } from "@/hooks/use-appearance";
import type { ColorTheme } from "@/hooks/use-color-theme";
import { useColorTheme } from "@/hooks/use-color-theme";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AppearanceDropdown() {
  const { appearance, updateAppearance } = useAppearance();
  const { colorTheme, updateColorTheme } = useColorTheme();

  const appearanceOptions: {
    value: Appearance;
    label: string;
    icon: typeof Sun;
  }[] = [
    { value: "light", label: "Clair", icon: Sun },
    { value: "dark", label: "Sombre", icon: Moon },
    { value: "system", label: "Système", icon: Monitor },
  ];

  const colorThemes: {
    value: ColorTheme;
    color: string;
    label: string;
  }[] = [
    { value: "default", color: "bg-neutral-400", label: "Défaut" },
    { value: "blue", color: "bg-blue-500", label: "Bleu" },
    { value: "green", color: "bg-green-500", label: "Vert" },
    { value: "orange", color: "bg-orange-500", label: "Orange" },
    { value: "red", color: "bg-red-500", label: "Rouge" },
    { value: "violet", color: "bg-violet-500", label: "Violet" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" aria-label="Apparence">
            <Palette />
            <ChevronDown />
          </Button>
        }
      />

      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Apparence</DropdownMenuLabel>

          <DropdownMenuRadioGroup
            value={appearance}
            onValueChange={(value) => updateAppearance(value as Appearance)}
          >
            {appearanceOptions.map(({ value, label, icon: Icon }) => (
              <DropdownMenuRadioItem key={value} value={value}>
                <Icon className="size-4" />
                {label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>Thème de couleur</DropdownMenuLabel>

          <DropdownMenuRadioGroup
            value={colorTheme}
            onValueChange={(value) => updateColorTheme(value as ColorTheme)}
          >
            {colorThemes.map(({ value, color, label }) => (
              <DropdownMenuRadioItem key={value} value={value}>
                <span className={`size-4 rounded-full ${color}`} />
                {label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
