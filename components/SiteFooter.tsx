"use client";

import { Divider } from "doodleui-react";
import { site } from "@/lib/content";
import { usePageSketch } from "@/lib/use-page-seed";

export function SiteFooter() {
  const { ink, seed } = usePageSketch();

  return (
    <footer className="mx-auto max-w-[1400px] px-4 py-10 md:px-8">
      <Divider seed={seed} sketchColor={ink} />
      <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-mute dark:text-chalk/70">
          {site.name}
        </p>
        <p className="text-sm text-mute dark:text-chalk/70">
          Drawn with doodleui-react
        </p>
      </div>
    </footer>
  );
}
