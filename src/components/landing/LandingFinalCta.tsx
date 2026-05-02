"use client";

import { ArrowRight } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.realvs.ai";

export function LandingFinalCta() {
  const ref = useFadeIn();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="cta" className="relative overflow-hidden px-6 py-24 text-center sm:py-28">
      <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,rgba(138,180,248,0.09)_0%,transparent_65%)]" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="fade-up">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-4">Get started</p>
          <h2
            className="font-bold tracking-[-0.04em] leading-[1.1] max-w-[680px] mx-auto mb-[18px]"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}
          >
            Verify what matters.<br />Dismiss what doesn't.
          </h2>
          <p className="mx-auto mb-8 max-w-[440px] text-lg leading-[1.65] text-text-muted">
            Run your first scan in seconds and get a readable verdict with confidence and evidence.
          </p>
          <div className="flex items-center justify-center">
            <a
              href={`${APP_URL}/welcome`}
              className="inline-flex items-center gap-2 rounded-[15px] bg-primary px-7 py-3.5 text-[15px] font-semibold text-bg transition hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              <ArrowRight className="w-4 h-4" />
              Try RealvsAI
            </a>
          </div>
          <p className="mt-[18px] text-xs text-text-dim">Limited free trial · Card required to activate · Cancel anytime before renewal</p>
        </div>
      </div>
    </section>
  );
}
