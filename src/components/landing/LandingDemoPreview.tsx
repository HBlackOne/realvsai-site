"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, AlertTriangle, ScanLine, FileVideo2 } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const DEMOS = [
  {
    id: "fake",
    title: "Suspicious short clip",
    type: "Video scan",
    verdict: "AI Generated",
    confidence: 87,
    icon: AlertTriangle,
    verdictClass: "text-danger",
    panelClass: "border-danger/20 bg-danger/5",
    barClass: "bg-danger",
    file: "creator_clip.mp4",
  },
  {
    id: "real",
    title: "Original photo",
    type: "Image scan",
    verdict: "Authentic",
    confidence: 91,
    icon: CheckCircle2,
    verdictClass: "text-success",
    panelClass: "border-success/20 bg-success/5",
    barClass: "bg-success",
    file: "field_report.jpg",
  },
] as const;

export default function LandingDemoPreview() {
  const [revealed, setRevealed] = useState(false);
  const ref = useFadeIn();

  useEffect(() => {
    const timer = window.setTimeout(() => setRevealed(true), 350);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="fade-up text-center">
          <p className="text-[11px] font-medium uppercase tracking-wider text-text-dim">Live demo preview</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">See RealvsAI in action</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
            Two simple examples. Same flow users see: media type, verdict, confidence, and an instant signal.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {DEMOS.map((demo, index) => {
            const VerdictIcon = demo.icon;
            return (
              <div
                key={demo.id}
                className="fade-up rounded-[1.5rem] border border-border bg-surface p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/25 sm:p-6"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    {demo.type === "Video scan" ? (
                      <FileVideo2 className="h-4 w-4 text-primary" />
                    ) : (
                      <ScanLine className="h-4 w-4 text-primary" />
                    )}
                    <span className="font-medium">{demo.title}</span>
                  </div>
                  <span className="rounded-full border border-border bg-bg px-2.5 py-1 text-[10px] text-text-dim">{demo.file}</span>
                </div>

                <div className={`mt-4 rounded-xl border p-4 transition-all duration-500 ease-out sm:p-5 ${demo.panelClass}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-text-dim">Verdict</p>
                      <div className="mt-2 flex min-h-[1.5rem] items-center gap-2">
                        <VerdictIcon className={`h-4 w-4 transition-opacity duration-500 ${demo.verdictClass} ${revealed ? "opacity-100" : "opacity-40"}`} />
                        <span className={`text-base font-semibold transition-opacity duration-500 sm:text-lg ${demo.verdictClass} ${revealed ? "opacity-100" : "opacity-60"}`}>
                          {revealed ? demo.verdict : "Analyzing..."}
                        </span>
                      </div>
                    </div>
                    <span className="w-16 text-end text-2xl font-bold text-primary transition-all duration-700 sm:text-3xl">
                      {revealed ? `${demo.confidence}%` : "--"}
                    </span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <MetricRow
                    label={demo.verdict === "Authentic" ? "Authentic" : "AI Generated"}
                    shown={revealed}
                    value={demo.confidence}
                    barClass={demo.barClass}
                  />
                  <MetricRow
                    label={demo.verdict === "Authentic" ? "AI Generated" : "Authentic"}
                    shown={revealed}
                    value={100 - demo.confidence}
                    barClass={demo.verdict === "Authentic" ? "bg-danger" : "bg-success"}
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] text-text-dim">
                  <span>{demo.type}</span>
                  <span>{revealed ? "Result ready" : "Running..."}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MetricRow({
  label,
  value,
  shown,
  barClass,
}: {
  label: string;
  value: number;
  shown: boolean;
  barClass: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-20 text-xs text-text-muted">{label}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-hover">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${barClass}`}
          style={{ width: shown ? `${value}%` : "0%" }}
        />
      </div>
      <span className="w-8 text-end text-xs text-text-muted">{shown ? `${value}%` : "--"}</span>
    </div>
  );
}
