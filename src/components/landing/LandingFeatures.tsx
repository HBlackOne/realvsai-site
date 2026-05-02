"use client";

import { ImageIcon, AudioLines, Clapperboard, ScanSearch } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const FEATURES = [
  {
    icon: ImageIcon,
    title: "Image Detection",
    desc: "Check suspicious photos and generated visuals with a fast authenticity signal.",
    badge: null,
  },
  {
    icon: AudioLines,
    title: "Audio Detection",
    desc: "Review voice notes, clips, and synthetic speech for cloning and generation markers.",
    badge: null,
  },
  {
    icon: Clapperboard,
    title: "Video Detection",
    desc: "Analyze short-form and uploaded video content for AI-generated patterns.",
    badge: null,
  },
  {
    icon: ScanSearch,
    title: "Deep Video Scan",
    desc: "Go deeper on advanced video checks with a stronger scan pass for premium workflows.",
    badge: "PRO",
  },
] as const;

export default function LandingFeatures() {
  const ref = useFadeIn();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="fade-up text-center">
          <p className="text-[11px] font-medium uppercase tracking-wider text-text-dim">Core features</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">Built for modern media verification</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
            Four focused detection paths, designed to keep the product understandable while covering the media types that matter most.
          </p>
        </div>

        <div className="group/grid mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="fade-up rounded-[1.5rem] border border-border bg-surface p-4 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/25 group-hover/grid:opacity-40 hover:!opacity-100 sm:p-5"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-dim">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                {feature.badge ? (
                  <span className="rounded-full border border-primary/20 bg-primary-dim px-2.5 py-1 text-[10px] font-semibold text-primary">
                    {feature.badge}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-4 text-sm font-semibold sm:text-base">{feature.title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-text-muted sm:text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
