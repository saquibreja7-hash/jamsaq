"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="grid size-10 place-items-center rounded-full border border-black/10 text-stone-500 transition hover:border-black/20 hover:text-stone-800 dark:border-white/12 dark:text-white/50 dark:hover:border-white/25 dark:hover:text-white"
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
