"use client";

import { Badge } from "doodleui-react";
import { skills } from "@/lib/content";
import { usePageSketch } from "@/lib/use-page-seed";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  const { ink, seed } = usePageSketch();

  return (
    <section
      id="skills"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-4 py-20 md:px-8 md:py-28"
    >
      <Reveal>
        <h2 className="doodle-shuffle-type text-3xl font-semibold tracking-tight md:text-4xl">
          Skills
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <div className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              seed={seed}
              variant={
                skill === "Mentoring" || skill === "Frontend architecture"
                  ? "accent"
                  : "outline"
              }
              sketchColor={ink}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
