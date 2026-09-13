"use client";

import { useSketchSeed } from "doodleui-react";
import { useTheme } from "@/lib/theme";

/** Shared sketch seed + theme ink for doodleui-react chrome. */
export function usePageSketch() {
  const { seed, shuffle } = useSketchSeed();
  const { ink, paperFill, theme } = useTheme();

  return { seed, shuffle, ink, paperFill, theme };
}
