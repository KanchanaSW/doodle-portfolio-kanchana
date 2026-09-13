"use client";

import { Button, useSketchSeed } from "doodleui-react";
import { Shuffle } from "@phosphor-icons/react";
import { useTheme } from "@/lib/theme";

export function ShuffleButton({
  size = "sm",
  variant = "primary",
  label = "Shuffle",
}: {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  label?: string;
}) {
  const { shuffle } = useSketchSeed();
  const { ink } = useTheme();

  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      sketchColor={ink}
      onClick={shuffle}
    >
      <Shuffle size={16} weight="bold" aria-hidden />
      {label}
    </Button>
  );
}
