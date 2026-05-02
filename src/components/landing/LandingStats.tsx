"use client";

import { ScanLine, Target, Clock, Cpu } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const STATS = [
  { icon: ScanLine, value: "142K+", label: "Media Analyzed" },
  { icon: Target, value: "94.7%", label: "Detection Accuracy" },
  { icon: Clock, value: "<2s", label: "Avg. Analysis Time" },
  { icon: Cpu, value: "90+", label: "Known Generators" },
];

export default function LandingStats() {
  const ref = useFadeIn();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-16 px-4 sm:py-24">
      <div className="mx-auto max-w-xl">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="fade-up rounded-xl border border-border bg-surface p-4 text-center"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <stat.icon className="mx-auto h-5 w-5 text-primary" />
              <p className="mt-2 text-xl font-bold sm:text-2xl">{stat.value}</p>
              <p className="mt-0.5 text-[11px] text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="fade-up mt-4 text-center text-[11px] text-text-dim" style={{ transitionDelay: "320ms" }}>
          Trusted by creators, journalists & trust teams worldwide
        </p>
      </div>
    </section>
  );
}
