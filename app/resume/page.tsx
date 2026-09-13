"use client";

import { Button, Card, Divider } from "doodleui-react";
import { Printer } from "@phosphor-icons/react";
import { about, experience, projects, site, skills } from "@/lib/content";
import { usePageSketch } from "@/lib/use-page-seed";

export default function ResumePage() {
  const { ink, paperFill, seed } = usePageSketch();

  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-16">
      <div className="no-print mb-8 flex flex-wrap items-center gap-3">
        <a href="/">
          <Button variant="outline" size="sm" sketchColor={ink} seed={seed}>
            Back
          </Button>
        </a>
        <Button
          size="sm"
          sketchColor={ink}
          seed={seed}
          onClick={() => window.print()}
        >
          <Printer size={16} weight="bold" aria-hidden />
          Print PDF
        </Button>
      </div>

      <h1 className="doodle-shuffle-type text-4xl font-semibold tracking-tight">{site.name}</h1>
      <p className="mt-2 text-lg text-mute dark:text-chalk/75">{site.role}</p>
      <p className="mt-3 text-sm text-mute dark:text-chalk/70">
        {site.location}
        <br />
        {site.email}
        <br />
        {site.phone}
      </p>

      <Card
        seed={seed}
        className="mt-8"
        fill={paperFill}
        sketchColor={ink}
        style={{ width: "100%" }}
      >
        <p className="m-0 text-sm leading-relaxed">{about.bio}</p>
        <p className="mt-3 mb-0 text-sm leading-relaxed">{about.extras}</p>
      </Card>

      <h2 className="doodle-shuffle-type mt-10 text-2xl font-semibold tracking-tight">Experience</h2>
      <div className="mt-4 grid gap-6">
        {experience.map((job, index) => (
          <div key={`${job.org}-${job.role}`}>
            <p className="font-medium">
              {job.role}, {job.org}
            </p>
            <p className="mt-1 font-mono text-sm text-mute">
              {job.dates}, {job.location}
            </p>
            <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm leading-relaxed">
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {index < experience.length - 1 ? (
              <div className="mt-6">
                <Divider seed={seed} sketchColor={ink} />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <h2 className="doodle-shuffle-type mt-10 text-2xl font-semibold tracking-tight">Projects</h2>
      <ul className="mt-4 grid gap-3 text-sm leading-relaxed">
        {projects.map((project) => (
          <li key={project.title}>
            <span className="font-medium">{project.title}.</span> {project.blurb}
          </li>
        ))}
      </ul>

      <h2 className="doodle-shuffle-type mt-10 text-2xl font-semibold tracking-tight">Skills</h2>
      <p className="mt-3 text-sm leading-relaxed text-mute dark:text-chalk/80">
        {skills.join(", ")}
      </p>

      <p className="mt-10 text-sm text-mute dark:text-chalk/70">{site.education}</p>
    </main>
  );
}
