"use client";

import { Card, Divider } from "doodleui-react";
import { experience } from "@/lib/content";
import { usePageSketch } from "@/lib/use-page-seed";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  const { ink, paperFill, seed } = usePageSketch();

  return (
    <section
      id="work"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-4 py-20 md:px-8 md:py-28"
    >
      <Reveal>
        <h2 className="doodle-shuffle-type text-3xl font-semibold tracking-tight md:text-4xl">
          Experience
        </h2>
      </Reveal>

      <ol className="mt-10 grid gap-0">
        {experience.map((job, index) => (
          <li key={`${job.org}-${job.role}`}>
            <Reveal delay={index * 0.05}>
              <article className="grid gap-4 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8">
                <div className="md:pt-3">
                  <p className="font-mono text-sm text-mute dark:text-chalk/70">
                    {job.dates}
                  </p>
                  <p className="mt-1 text-sm text-mute dark:text-chalk/60">
                    {job.location}
                  </p>
                </div>
                <Card
                  seed={seed}
                  title={`${job.role}, ${job.org}`}
                  footer={"note" in job ? job.note : undefined}
                  fill={paperFill}
                  sketchColor={ink}
                  style={{ width: "100%" }}
                >
                  <ul className="m-0 grid list-disc gap-2 pl-5 text-sm leading-relaxed">
                    {job.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </article>
            </Reveal>
            {index < experience.length - 1 ? (
              <div className="py-8">
                <Divider seed={seed} sketchColor={ink} />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
