"use client";

import { Button, Divider } from "doodleui-react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { site, talks, writing } from "@/lib/content";
import { usePageSketch } from "@/lib/use-page-seed";
import { Reveal } from "@/components/Reveal";

export function Writing() {
  const { ink, seed } = usePageSketch();

  return (
    <section
      id="writing"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-4 py-20 md:px-8 md:py-28"
    >
      <Reveal>
        <h2 className="doodle-shuffle-type text-3xl font-semibold tracking-tight md:text-4xl">
          Writing
        </h2>
        <p className="mt-3 max-w-[55ch] text-base leading-relaxed text-mute dark:text-chalk/75">
          Short posts on React performance and caching, plus talks for the team.
        </p>
      </Reveal>

      <div className="mt-10 max-w-3xl">
        {writing.map((post, index) => (
          <Reveal key={post.href} delay={index * 0.04}>
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="group block py-5"
            >
              <h3 className="text-xl font-semibold tracking-tight group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-mute dark:text-chalk/75">
                {post.blurb}
              </p>
            </a>
            <Divider seed={seed} sketchColor={ink} />
          </Reveal>
        ))}

        <Reveal delay={0.16}>
          <div className="pt-8">
            <p className="text-sm font-medium">{talks[0].title}</p>
            <p className="mt-1 text-sm text-mute dark:text-chalk/70">
              {talks[0].org}. {talks[0].blurb}
            </p>
            <div className="mt-6">
              <a href={site.links.linkedin} target="_blank" rel="noreferrer">
                <Button sketchColor={ink} seed={seed}>
                  More posts
                  <ArrowUpRight size={14} weight="bold" aria-hidden />
                </Button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
