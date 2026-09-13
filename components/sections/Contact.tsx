"use client";

import { FormEvent, useState } from "react";
import { Alert, Button, Input, Textarea } from "doodleui-react";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { site } from "@/lib/content";
import { usePageSketch } from "@/lib/use-page-seed";
import { Reveal } from "@/components/Reveal";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const empty: FormState = { name: "", email: "", message: "" };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Add your name.";
  if (!values.email.trim()) {
    errors.email = "Add an email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email does not look valid.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Write at least a short sentence.";
  }
  return errors;
}

export function Contact() {
  const { ink, seed } = usePageSketch();
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "ready" | "invalid">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      return;
    }

    const subject = encodeURIComponent(`Portfolio note from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\nFrom: ${values.name} <${values.email}>`,
    );
    setStatus("ready");
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1400px] scroll-mt-24 px-4 py-20 md:px-8 md:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(240px,320px)] lg:items-start">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Contact
          </h2>
          <p className="mt-3 max-w-[50ch] text-base leading-relaxed text-mute dark:text-chalk/75">
            Opens your mail app with the note filled in. No server in the middle.
          </p>
          <form className="mt-8 grid max-w-xl gap-5" onSubmit={onSubmit} noValidate>
            <div className="grid gap-2">
              <Input
                seed={seed}
                label="Name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))
                }
                sketchColor={ink}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? (
                <p id="name-error" className="text-sm text-accent">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div className="grid gap-2">
              <Input
                seed={seed}
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                sketchColor={ink}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <p id="email-error" className="text-sm text-accent">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div className="grid gap-2">
              <Textarea
                seed={seed}
                label="Message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, message: event.target.value }))
                }
                sketchColor={ink}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message ? (
                <p id="message-error" className="text-sm text-accent">
                  {errors.message}
                </p>
              ) : null}
            </div>
            {status === "invalid" ? (
              <Alert seed={seed} variant="error" title="Check the form" sketchColor={ink}>
                Fix the fields above, then send again.
              </Alert>
            ) : null}
            {status === "ready" ? (
              <Alert seed={seed} variant="success" title="Opening mail" sketchColor={ink}>
                If nothing opens, email {site.email} directly.
              </Alert>
            ) : null}
            <div>
              <Button type="submit" sketchColor={ink} seed={seed}>
                Send
              </Button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-4 text-sm lg:pt-16">
            <p className="m-0">
              <span className="block text-mute dark:text-chalk/60">Email</span>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 inline-flex items-center gap-2 font-medium hover:text-accent"
              >
                <EnvelopeSimple size={16} weight="bold" aria-hidden />
                {site.email}
              </a>
            </p>
            <p className="m-0">
              <span className="block text-mute dark:text-chalk/60">Code</span>
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 font-medium hover:text-accent"
              >
                <GithubLogo size={16} weight="bold" aria-hidden />
                GitHub
              </a>
            </p>
            <p className="m-0">
              <span className="block text-mute dark:text-chalk/60">Writing</span>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 font-medium hover:text-accent"
              >
                <LinkedinLogo size={16} weight="bold" aria-hidden />
                LinkedIn
              </a>
            </p>
            <p className="m-0 text-mute dark:text-chalk/70">{site.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
