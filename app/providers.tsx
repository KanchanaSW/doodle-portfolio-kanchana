"use client";

import type { ReactNode } from "react";
import { SketchSeedProvider, TooltipProvider } from "doodleui-react";
import { ThemeProvider } from "@/lib/theme";

const DOODLE_FONTS = [
  "var(--font-outfit)",
  "var(--font-patrick-hand)",
  "var(--font-kalam)",
  "var(--font-gochi-hand)",
  "var(--font-caveat)",
] as const;

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SketchSeedProvider
        initialSeed={42}
        fonts={DOODLE_FONTS}
        initialFontIndex={1}
      >
        <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
      </SketchSeedProvider>
    </ThemeProvider>
  );
}
