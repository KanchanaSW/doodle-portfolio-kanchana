"use client";

import type { ReactNode } from "react";
import { SketchSeedProvider, TooltipProvider } from "doodleui-react";
import { ThemeProvider } from "@/lib/theme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SketchSeedProvider initialSeed={42}>
        <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
      </SketchSeedProvider>
    </ThemeProvider>
  );
}
