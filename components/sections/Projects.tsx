"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Badge, Button, Card } from "doodleui-react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { projects } from "@/lib/content";
import { usePageSketch } from "@/lib/use-page-seed";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  const { ink, paperFill, seed } = usePageSketch();
  const reduce = useReducedMotion();
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-4 py-20 md:px-8 md:py-28"
    >
      <Reveal>
        <h2 className="doodle-shuffle-type text-3xl font-semibold tracking-tight md:text-4xl">
          Projects
        </h2>
        <p className="mt-3 max-w-[55ch] text-base leading-relaxed text-mute dark:text-chalk/75">
          Weekend products and the UI kit this page is drawn with.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6">
        <Reveal>
          <motion.div
            whileHover={reduce ? undefined : { y: -3 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <Card
              seed={seed}
              title={featured.title}
              fill={paperFill}
              sketchColor={ink}
              style={{ width: "100%" }}
            >
              <p className="m-0 max-w-[60ch] text-sm leading-relaxed">
                {featured.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <Badge
                    key={tag}
                    seed={seed}
                    variant="outline"
                    sketchColor={ink}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {featured.href ? (
                  <a href={featured.href} target="_blank" rel="noreferrer">
                    <Button size="sm" sketchColor={ink} seed={seed}>
                      {featured.cta}
                      <ArrowUpRight size={14} weight="bold" aria-hidden />
                    </Button>
                  </a>
                ) : null}
                {"extraHref" in featured && featured.extraHref ? (
                  <a href={featured.extraHref} target="_blank" rel="noreferrer">
                    <Button
                      size="sm"
                      variant="outline"
                      sketchColor={ink}
                      seed={seed}
                    >
                      {featured.extraLabel}
                      <ArrowUpRight size={14} weight="bold" aria-hidden />
                    </Button>
                  </a>
                ) : null}
              </div>
            </Card>
          </motion.div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <Reveal
              key={project.title}
              className={index === rest.length - 1 ? "md:col-span-2" : undefined}
              delay={0.06 * (index + 1)}
            >
              <motion.div
                className="h-full"
                whileHover={reduce ? undefined : { y: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <Card
                  seed={seed}
                  title={project.title}
                  fill={paperFill}
                  sketchColor={ink}
                  style={{ height: "100%", width: "100%" }}
                >
                  <p className="m-0 max-w-[60ch] text-sm leading-relaxed">
                    {project.blurb}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        seed={seed}
                        variant="outline"
                        sketchColor={ink}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.href ? (
                    <div className="mt-5">
                      <a href={project.href} target="_blank" rel="noreferrer">
                        <Button
                          size="sm"
                          variant="outline"
                          sketchColor={ink}
                          seed={seed}
                        >
                          {project.cta}
                          <ArrowUpRight size={14} weight="bold" aria-hidden />
                        </Button>
                      </a>
                    </div>
                  ) : (
                    <p className="mt-5 mb-0 text-sm text-mute">
                      Private client build. No public link.
                    </p>
                  )}
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
