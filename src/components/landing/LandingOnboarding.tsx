"use client";

import { useFadeIn } from "@/hooks/use-fade-in";

const STEPS = [
  {
    num: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[19px] h-[19px] text-primary">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Create your free account",
    desc: "Sign up in under 30 seconds. A card is required to activate your free trial.",
  },
  {
    num: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[19px] h-[19px] text-primary">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    ),
    title: "Upload your first media",
    desc: "Drop in an image, audio clip, or video. Or paste a supported media link directly.",
  },
  {
    num: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[19px] h-[19px] text-primary">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <path d="m22 4-9 9-3-3"/>
      </svg>
    ),
    title: "Read your first verdict",
    desc: "Get a clear confidence signal and generator breakdown in seconds. Upgrade when you need more scans.",
  },
] as const;

export function LandingOnboarding() {
  const ref = useFadeIn();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="onboarding" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="fade-up text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3.5">Getting started</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-bold tracking-[-0.035em] leading-[1.15]">
            Your first scan in<br />under a minute
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-[17px] text-text-muted leading-[1.72]">
            No configuration. No setup. Create an account, upload media, read the result.
          </p>
        </div>

        <div className="fade-up mt-12 grid gap-px md:grid-cols-3 bg-border rounded-[1.75rem] overflow-hidden">
          {STEPS.map((step, i) => (
            <div key={step.num} className="bg-bg p-8 sm:p-9">
              <div className="text-[3rem] font-extrabold text-border leading-none tracking-[-0.05em] mb-5">{step.num}</div>
              <div className="flex items-center justify-center w-[42px] h-[42px] rounded-xl bg-primary-dim mb-4">
                {step.icon}
              </div>
              <h3 className="text-base font-bold tracking-[-0.02em] mb-2">{step.title}</h3>
              <p className="text-sm text-text-muted leading-[1.7]">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="fade-up mt-10 text-center">
          <p className="text-xs text-text-dim mt-3">Card required to activate trial · Cancel anytime before renewal</p>
        </div>
      </div>
    </section>
  );
}
