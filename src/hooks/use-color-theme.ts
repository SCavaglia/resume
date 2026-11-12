import { useSyncExternalStore } from "react";

export type ColorTheme = "default" | "blue" | "green" | "orange" | "red" | "violet";

const listeners = new Set<() => void>();
let currentColorTheme: ColorTheme = "blue";

const colorThemes: ColorTheme[] = ["default", "blue", "green", "orange", "red", "violet"];

const getStoredColorTheme = (): ColorTheme => {
  if (typeof window === "undefined") {
    return "default";
  }
  const stored = localStorage.getItem("color-theme");
  return colorThemes.includes(stored as ColorTheme) ? (stored as ColorTheme) : "default";
};

const applyColorTheme = (theme: ColorTheme): void => {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.classList.remove(
    ...colorThemes.filter((theme) => theme !== "default").map((theme) => `theme-${theme}`),
  );
  if (theme !== "default") {
    document.documentElement.classList.add(`theme-${theme}`);
  }
};

const subscribe = (callback: () => void) => {
  listeners.add(callback);
  return () => listeners.delete(callback);
};

const notify = (): void => {
  listeners.forEach((listener) => listener());
};

export function initializeColorTheme(): void {
  if (typeof window === "undefined") {
    return;
  }
  currentColorTheme = getStoredColorTheme();
  applyColorTheme(currentColorTheme);
}

export function useColorTheme() {
  const colorTheme = useSyncExternalStore(
    subscribe,
    () => currentColorTheme,
    () => "blue",
  );
  const updateColorTheme = (theme: ColorTheme): void => {
    currentColorTheme = theme;
    localStorage.setItem("color-theme", theme);
    applyColorTheme(theme);
    notify();
  };
  return {
    colorTheme,
    updateColorTheme,
  } as const;
}
