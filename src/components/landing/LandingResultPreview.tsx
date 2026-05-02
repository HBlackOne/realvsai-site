"use client";

import { useFadeIn } from "@/hooks/use-fade-in";

export function LandingResultPreview() {
  const ref = useFadeIn();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="results" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="fade-up text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3.5">What you get</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-bold tracking-[-0.035em] leading-[1.15]">
            A result you can actually use
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-[17px] text-text-muted leading-[1.72]">
            Not just a flag — a readable breakdown that tells you what was found and how confident the system is.
          </p>
        </div>

        <div className="mt-12 grid gap-3.5 md:grid-cols-2">
          {/* Verdict */}
          <div className="fade-up bg-surface border border-border rounded-[20px] p-6 hover:-translate-y-1 transition-transform">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-dim mb-3">Verdict</p>
            <div className="text-[28px] font-extrabold text-danger tracking-tight mb-2">AI Generated</div>
            <div className="text-[40px] font-extrabold text-primary tracking-[-0.04em] leading-none mb-2.5">89%</div>
            <p className="text-[13px] text-text-muted leading-[1.65]">Face rig artifacts in frames 24–87. Temporal frequency matches Sora v2 pattern.</p>
          </div>

          {/* Confidence breakdown */}
          <div className="fade-up bg-surface border border-border rounded-[20px] p-6 hover:-translate-y-1 transition-transform" style={{ transitionDelay: "0.1s" }}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-dim mb-3">Confidence breakdown</p>
            {[{ lbl: "AI Generated", val: 89, color: "bg-danger" }, { lbl: "Authentic", val: 11, color: "bg-success" }].map((b) => (
              <div key={b.lbl} className="flex items-center gap-2.5 mb-3">
                <span className="text-[13px] text-text-muted w-24 flex-shrink-0">{b.lbl}</span>
                <div className="flex-1 h-2 bg-surface2 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${b.color}`} style={{ width: `${b.val}%` }} />
                </div>
                <span className={`text-[13px] font-bold w-9 text-right ${b.color.replace("bg-", "text-")}`}>{b.val}%</span>
              </div>
            ))}
            <div className="mt-2 space-y-1.5">
              {[{ n: "Sora", v: 68 }, { n: "Runway", v: 18 }, { n: "Pika", v: 9 }, { n: "Other", v: 5 }].map((g) => (
                <div key={g.n} className="flex items-center gap-2">
                  <span className="text-xs text-text-dim w-16">{g.n}</span>
                  <div className="flex-1 h-[3px] bg-surface2 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${g.v}%` }} />
                  </div>
                  <span className="text-[11px] text-text-dim w-6 text-right">{g.v}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scanned media */}
          <div className="fade-up bg-surface border border-border rounded-[20px] p-6 hover:-translate-y-1 transition-transform" style={{ transitionDelay: "0.15s" }}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-dim mb-3">Scanned media</p>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-[22px]">🎬</span>
              <div>
                <div className="text-[13px] font-semibold text-text">deepfake_video.mp4</div>
                <div className="text-[11px] text-text-dim mt-0.5">Video · 0:32 · 18.4 MB</div>
              </div>
            </div>
            <div className="h-[60px] bg-surface2 rounded-[10px] flex items-center justify-center gap-0.5 overflow-hidden px-2">
              {Array.from({ length: 36 }).map((_, i) => {
                const h = 10 + Math.abs(Math.sin(i * 0.6) * 22 + Math.sin(i * 1.1) * 12);
                const isArt = i > 8 && i < 24;
                return <div key={i} className="flex-1 rounded-[2px]" style={{ height: h, background: isArt ? "var(--color-danger)" : "var(--color-border)", opacity: isArt ? 0.7 : 0.5 }} />;
              })}
            </div>
            <p className="font-mono text-[11px] text-warning mt-2.5">⚠ Artifacts: frames 24–87</p>
          </div>

          {/* Share */}
          <div className="fade-up bg-surface border border-border rounded-[20px] p-6 hover:-translate-y-1 transition-transform" style={{ transitionDelay: "0.2s" }}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-dim mb-3">Share this result</p>
            <div className="bg-surface2 rounded-[10px] px-3 py-2.5 mb-3.5 flex items-center gap-2">
              <span className="font-mono text-[11px] text-text-dim flex-1 truncate">realvs.ai/r/x7k2p9mq</span>
              <span className="text-[11px] font-semibold text-primary flex-shrink-0 cursor-pointer">Copy</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 text-center bg-primary text-bg rounded-[9px] py-2.5 text-[13px] font-bold">Share link</div>
              <div className="flex-1 text-center border border-border text-text rounded-[9px] py-2.5 text-[13px] font-semibold">Download PDF</div>
            </div>
            <p className="text-xs text-text-dim mt-3 leading-relaxed">Shared views include verdict, confidence, reasoning, and media metadata — without exposing the original file.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
