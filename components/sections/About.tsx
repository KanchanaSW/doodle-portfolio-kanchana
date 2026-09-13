"use client";

import { Badge, Card } from "doodleui-react";
import { MapPin } from "@phosphor-icons/react";
import { about, site } from "@/lib/content";
import { usePageSketch } from "@/lib/use-page-seed";
import { Reveal } from "@/components/Reveal";

export function About() {
  const { ink, paperFill, seed } = usePageSketch();

  return (
    <section
      id="about"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-4 py-20 md:px-8 md:py-28"
    >
      <Reveal>
        <h2 className="doodle-shuffle-type text-3xl font-semibold tracking-tight md:text-4xl">
          About
        </h2>
        <Card
          seed={seed}
          className="mt-8"
          fill={paperFill}
          sketchColor={ink}
          footer={site.education}
          style={{ width: "100%", maxWidth: 760 }}
        >
          <p className="m-0 max-w-[65ch] text-base leading-relaxed">{about.bio}</p>
          <p className="mt-4 mb-0 max-w-[65ch] text-base leading-relaxed text-mute dark:text-chalk/80">
            {about.extras}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Badge seed={seed} sketchColor={ink}>
              {site.role}
            </Badge>
            <Badge seed={seed} variant="outline" sketchColor={ink}>
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} weight="bold" aria-hidden />
                {site.location}
              </span>
            </Badge>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
