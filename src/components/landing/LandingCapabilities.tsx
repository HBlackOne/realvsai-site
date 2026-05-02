"use client";

import { ImageIcon, AudioLines, Clapperboard, Code2 } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const CAPABILITIES = [
  {
    icon: ImageIcon,
    title: "Image Detection",
    desc: "Check photos and generated visuals for synthetic texture patterns, diffusion artifacts, and generator fingerprints from 90+ tools.",
  },
  {
    icon: AudioLines,
    title: "Audio Detection",
    desc: "Review voice notes and audio clips for cloning markers, prosody anomalies, and synthesis patterns — including mixed-signal cases.",
  },
  {
    icon: Clapperboard,
    title: "Video Detection",
    desc: "Analyze short-form video for frame inconsistencies, motion anomalies, and AI patterns from Sora, Runway, Kling, and more.",
  },
  {
    icon: Code2,
    title: "API Access",
    desc: "Integrate detection into your own tools with the RealvsAI API. Key management, webhooks, and usage monitoring included.",
  },
] as const;

export function LandingCapabilities() {
  const ref = useFadeIn();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="capabilities" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="fade-up text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3.5">Capabilities</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-bold tracking-[-0.035em] leading-[1.15]">
            Four detection paths.<br />Every media type covered.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px bg-border rounded-[1.75rem] overflow-hidden">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.title}
              className="fade-up bg-bg p-8 sm:p-9 hover:bg-surface transition-colors"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-[13px] bg-primary-dim mb-[18px]">
                <cap.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-[17px] font-bold tracking-[-0.02em] mb-2">{cap.title}</h3>
              <p className="text-sm text-text-muted leading-[1.7]">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
