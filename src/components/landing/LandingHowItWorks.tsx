"use client";

import { Link2, Cpu, BadgeCheck, AlertTriangle } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const STEPS = [
  {
    num: "01",
    icon: Link2,
    title: "Upload or paste media",
    desc: "Start with an image, audio clip, video file, or supported media link — whichever is fastest for you.",
  },
  {
    num: "02",
    icon: Cpu,
    title: "Analyze instantly",
    desc: "RealvsAI runs your media through the detection pipeline and builds a readable confidence signal in seconds.",
  },
  {
    num: "03",
    icon: BadgeCheck,
    title: "Get your verdict",
    desc: "Review the verdict, confidence score, and detected generators — quickly enough to decide what needs a closer look.",
  },
] as const;

export function LandingHowItWorks() {
  const ref = useFadeIn();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="how-it-works" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="fade-up text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3.5">How it works</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-bold tracking-[-0.035em] leading-[1.15]">
            From doubt to decision<br />in three steps
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-[17px] text-text-muted leading-[1.72]">
            The product stays simple on purpose: bring the media in, run the scan, and read the signal.
          </p>
        </div>

        <div className="mt-12 grid gap-px md:grid-cols-3 bg-border rounded-[1.75rem] overflow-hidden">
          {STEPS.map((step, i) => (
            <div key={step.num} className="fade-up bg-bg p-8 sm:p-9" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="text-[3.5rem] font-extrabold text-border leading-none tracking-[-0.05em] mb-5">{step.num}</div>
              <div className="flex items-center justify-center w-11 h-11 rounded-[14px] bg-primary-dim mb-4">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold tracking-[-0.02em] mb-2">{step.title}</h3>
              <p className="text-sm text-text-muted leading-[1.7]">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="fade-up mt-4 flex items-start gap-3 rounded-[1.25rem] border border-warning/20 bg-warning/5 px-5 py-4" style={{ transitionDelay: "0.3s" }}>
          <AlertTriangle className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-warning" />
          <div>
            <p className="text-[13px] font-bold text-warning mb-1">Important note</p>
            <p className="text-[13px] text-text-muted leading-[1.65]">
              AI detection shows <strong>likelihood</strong>, not certainty. Use the result as a signal for review, not as absolute proof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
