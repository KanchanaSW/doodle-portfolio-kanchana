"use client";

import { Alert, Badge, Button, Card, Progress } from "doodleui-react";
import { FileText } from "@phosphor-icons/react";
import { site } from "@/lib/content";
import { usePageSketch } from "@/lib/use-page-seed";
import { ShuffleButton } from "@/components/ShuffleButton";

function DeskCard() {
  const { ink, paperFill, seed } = usePageSketch();

  return (
    <Card
      seed={seed}
      title="Live kit"
      footer="Live doodleui-react. Shuffle redraws every stroke."
      fill={paperFill}
      sketchColor={ink}
      style={{ width: "100%" }}
    >
      <div className="grid gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge seed={seed} variant="accent" sketchColor={ink}>
            Tech Lead track
          </Badge>
          <Badge seed={seed} variant="outline" sketchColor={ink}>
            React
          </Badge>
          <Badge seed={seed} variant="outline" sketchColor={ink}>
            Next.js
          </Badge>
          <Badge seed={seed} variant="outline" sketchColor={ink}>
            TypeScript
          </Badge>
        </div>
        <Progress seed={seed} value={72} sketchColor={ink} />
        <Alert
          seed={seed}
          variant="info"
          title="This page is the demo"
          sketchColor={ink}
        >
          Buttons, cards, badges, and this alert are the npm package.
        </Alert>
      </div>
    </Card>
  );
}

export function Hero() {
  const { ink, seed } = usePageSketch();

  return (
    <section className="mx-auto grid max-w-[1400px] items-start gap-10 px-4 pb-16 pt-8 md:px-8 md:pt-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,440px)]">
      <div>
        <Badge seed={seed} variant="outline" sketchColor={ink}>
          {site.role}
        </Badge>
        <h1 className="doodle-shuffle-type mt-4 max-w-[14ch] text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
          {site.name}
        </h1>
        <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-mute dark:text-chalk/75">
          {site.pitch}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="/resume">
            <Button size="lg" sketchColor={ink} seed={seed}>
              <FileText size={18} weight="bold" aria-hidden />
              Resume
            </Button>
          </a>
          <ShuffleButton size="lg" variant="outline" label="Shuffle" />
        </div>
      </div>
      <DeskCard />
    </section>
  );
}
