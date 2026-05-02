"use client";

import { ArrowRight, Cpu, Eye, Layers3, Waves } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const PILLARS = [
  {
    icon: Eye,
    title: "Visual integrity",
    desc: "Inspect facial consistency, frame artifacts, and synthetic visual patterns that basic scans can miss.",
  },
  {
    icon: Waves,
    title: "Signal depth",
    desc: "Read motion, timing, and frequency anomalies together instead of relying on a single detector pass.",
  },
  {
    icon: Layers3,
    title: "Multi-layer review",
    desc: "Combine metadata, compression traces, and generator fingerprints into a stronger video authenticity check.",
  },
] as const;

export default function LandingDeepScanShowcase() {
  const ref = useFadeIn();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="fade-up text-center">
          <p className="text-[11px] font-medium uppercase tracking-wider text-text-dim">Deep scan</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">Advanced video analysis when a standard verdict is not enough</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
            Deep Scan is the premium layer for harder video reviews — built for higher-risk content, deeper inspection,
            and more confidence before you decide what to trust.
          </p>
        </div>

        <div className="fade-up mt-8 rounded-[1.75rem] border border-border bg-surface p-5 shadow-lg shadow-black/20 sm:p-6 lg:p-7" style={{ transitionDelay: "100ms" }}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-dim px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <Cpu className="h-3.5 w-3.5" />
                </span>
                PRO Deep Scan
              </div>

              <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
                Use Deep Scan when standard video checks are not enough and you need stronger signals before making a decision.
              </p>

              <div className="mt-6">
                <a
                  href="https://app.realvs.ai/subscription"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-bg transition hover:-translate-y-0.5 hover:bg-primary-hover"
                >
                  Unlock Deep Scan <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {PILLARS.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="fade-up rounded-[1.25rem] border border-border bg-bg p-4 transition duration-300 hover:-translate-y-1 hover:bg-surface-hover"
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-dim">
                    <pillar.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold sm:text-base">{pillar.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-text-muted sm:text-sm">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
