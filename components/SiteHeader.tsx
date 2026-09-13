"use client";

import { useState } from "react";
import { Button, Modal } from "doodleui-react";
import { List } from "@phosphor-icons/react";
import { nav, site } from "@/lib/content";
import { useTheme } from "@/lib/theme";
import { ShuffleButton } from "@/components/ShuffleButton";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  const { ink } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 h-16 bg-paper/90 backdrop-blur-md dark:bg-night/90">
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-4 px-4 md:px-8">
        <a
          href="/"
          className="text-lg font-semibold tracking-tight text-ink dark:text-chalk"
        >
          {site.shortName}
        </a>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-medium lg:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ink/80 hover:text-accent dark:text-chalk/80 dark:hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <ShuffleButton />
          <div className="lg:hidden">
            <Modal
              open={open}
              onOpenChange={setOpen}
              sketchColor={ink}
              title="Jump to"
              trigger={
                <Button
                  size="sm"
                  variant="outline"
                  sketchColor={ink}
                  aria-label="Open menu"
                >
                  <List size={18} weight="bold" aria-hidden />
                </Button>
              }
            >
              <div className="grid gap-2">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-1 text-base font-medium hover:text-accent"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  );
}
