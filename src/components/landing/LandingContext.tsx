"use client";

import { Radar, ShieldAlert, Users } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const ITEMS = [
  {
    icon: Radar,
    title: "AI media is accelerating",
    text: "Generated images, cloned voices, and synthetic clips are becoming easier to produce and harder to spot instantly.",
  },
  {
    icon: ShieldAlert,
    title: "Manual review is getting weaker",
    text: "What used to feel obviously fake now often looks believable enough to slip past a fast human check.",
  },
  {
    icon: Users,
    title: "Fast verification matters",
    text: "Creators, journalists, and trust teams need a quicker signal before they publish, share, or escalate content.",
  },
] as const;

export default function LandingContext() {
  const ref = useFadeIn();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center fade-up">
          <p className="text-[11px] font-medium uppercase tracking-wider text-text-dim">Social proof</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">Why fast verification matters</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
            RealvsAI exists to reduce hesitation at the moment of doubt — when you need a readable authenticity signal fast.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="fade-up rounded-[1.5rem] border border-border bg-surface p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/25 sm:p-6"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-dim">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-semibold sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
