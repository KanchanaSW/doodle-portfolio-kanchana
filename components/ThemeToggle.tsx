"use client";

import { Button } from "doodleui-react";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, toggle, ink } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      size="sm"
      variant="ghost"
      sketchColor={ink}
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      {isDark ? (
        <Sun size={16} weight="bold" aria-hidden />
      ) : (
        <Moon size={16} weight="bold" aria-hidden />
      )}
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </Button>
  );
}
