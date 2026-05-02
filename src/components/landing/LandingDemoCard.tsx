"use client";

import { useEffect, useState } from "react";
import { ScanLine, FileVideo, AudioLines, AlertTriangle, CheckCircle, HelpCircle } from "lucide-react";

type DemoType = {
  label: string;
  icon: typeof ScanLine;
  file: string;
  status: string;
  verdict: string;
  verdictType: "danger" | "success" | "warning";
  explanation: string;
  confidence: number;
  generators: { name: string; score: number; why: string }[];
};

const DEMOS: DemoType[] = [
  {
    label: "Image Analysis",
    icon: ScanLine,
    file: "portrait_upload.jpg",
    status: "Analyzing image",
    verdict: "AI Generated",
    verdictType: "danger",
    explanation: "Synthetic texture patterns and generator fingerprints detected across the upload.",
    confidence: 87,
    generators: [
      { name: "Midjourney", score: 72, why: "Diffusion artifact pattern match" },
      { name: "DALL-E 3", score: 18, why: "Render inconsistency traces" },
      { name: "Stable Diffusion", score: 6, why: "" },
      { name: "Flux", score: 3, why: "" },
      { name: "Other", score: 1, why: "" },
    ],
  },
  {
    label: "Video Analysis",
    icon: FileVideo,
    file: "street_clip.mp4",
    status: "Analyzing video",
    verdict: "Authentic",
    verdictType: "success",
    explanation: "Motion, frame continuity, and compression signals align with a natural recording.",
    confidence: 91,
    generators: [
      { name: "Authentic signal", score: 91, why: "Strong natural capture consistency" },
      { name: "Sora", score: 4, why: "" },
      { name: "Runway", score: 3, why: "" },
      { name: "Kling", score: 1, why: "" },
      { name: "Other", score: 1, why: "" },
    ],
  },
  {
    label: "Audio Analysis",
    icon: AudioLines,
    file: "voice_note.wav",
    status: "Analyzing audio",
    verdict: "Mixed Signals",
    verdictType: "warning",
    explanation: "Some sections show voice synthesis markers while others appear naturally recorded.",
    confidence: 58,
    generators: [
      { name: "ElevenLabs", score: 42, why: "Voice cloning spectral markers" },
      { name: "Bark", score: 10, why: "Prosody pattern overlap" },
      { name: "XTTS", score: 4, why: "" },
      { name: "Tortoise", score: 2, why: "" },
      { name: "Other", score: 0, why: "" },
    ],
  },
];

export default function LandingDemoCard() {
  const [demoIdx, setDemoIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const current = DEMOS[demoIdx];

  useEffect(() => {
    setRevealed(false);
    const revealTimer = window.setTimeout(() => setRevealed(true), 850);
    const cycleTimer = window.setTimeout(() => {
      setDemoIdx((i) => (i + 1) % DEMOS.length);
    }, 4200);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(cycleTimer);
    };
  }, [demoIdx]);

  const VerdictIcon =
    current.verdictType === "danger" ? AlertTriangle :
    current.verdictType === "success" ? CheckCircle :
    HelpCircle;

  const verdictColorClass =
    current.verdictType === "danger" ? "text-danger" :
    current.verdictType === "success" ? "text-success" :
    "text-warning";

  const verdictBgClass =
    current.verdictType === "danger" ? "bg-danger/5 border-danger/20" :
    current.verdictType === "success" ? "bg-success/5 border-success/20" :
    "bg-warning/5 border-warning/20";

  const authenticScore = current.verdictType === "success" ? current.confidence : Math.max(100 - current.confidence, 8);
  const aiScore = current.verdictType === "success" ? Math.max(100 - current.confidence, 4) : current.confidence;

  return (
    <div className="mx-auto max-w-xl rounded-[1.5rem] border border-border bg-surface p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/25 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <current.icon className="h-4 w-4 text-primary" />
          <span className="font-medium">{current.label}</span>
        </div>
        <span className="rounded-full border border-border bg-bg px-2.5 py-1 text-[10px] text-text-dim">{current.file}</span>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-text-dim">
        <span>{revealed ? "Result ready" : current.status}</span>
        <span>{revealed ? "Complete" : "Running..."}</span>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5">
        {DEMOS.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === demoIdx ? "w-5 bg-primary" : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>

      <div className="mt-4 space-y-3">
        <div className={`rounded-xl border p-3 transition-all duration-500 ${verdictBgClass}`}>
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-text-dim">Verdict</p>
              <div className="mt-1.5 flex min-h-[1.5rem] items-center gap-2">
                <VerdictIcon className={`h-4 w-4 ${verdictColorClass}`} />
                <span className={`text-[15px] font-semibold sm:text-lg ${verdictColorClass}`}>
                  {revealed ? current.verdict : "Analyzing..."}
                </span>
              </div>
            </div>
            <span className="w-14 text-end text-xl font-bold text-primary sm:text-3xl">{revealed ? `${current.confidence}%` : "--"}</span>
          </div>
          <div className="mt-1.5 min-h-[2.5rem] sm:min-h-[2.4rem]">
            {revealed ? (
              <p className="text-[11px] leading-[1.45] text-text-muted">{current.explanation}</p>
            ) : (
              <div className="space-y-1 pt-1">
                <div className="h-2 w-full rounded-full bg-surface-hover/70" />
                <div className="h-2 w-5/6 rounded-full bg-surface-hover/70" />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <BarRow label="AI Generated" pct={revealed ? aiScore : 0} color="bg-danger" />
          <BarRow label="Authentic" pct={revealed ? authenticScore : 0} color="bg-success" />
        </div>

        <div className="rounded-xl bg-bg p-3">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-text-dim">Detected Generators</p>
          <div className="space-y-2">
            {current.generators.map((g) => (
              <div key={g.name}>
                <div className="flex items-center gap-2">
                  <span className="w-24 text-xs text-text-muted">{g.name}</span>
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-surface-hover">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                      style={{ width: revealed ? `${g.score}%` : "0%" }}
                    />
                  </div>
                  <span className="w-8 text-end text-[11px] text-text-dim">{revealed ? `${g.score}%` : "--"}</span>
                </div>
                <div className="ml-[6.5rem] mt-0.5 min-h-[1rem]">
                  {revealed && g.why && g.score > 10 ? (
                    <p className="text-[10px] text-text-dim">→ {g.why}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BarRow({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-20 text-xs text-text-muted">{label}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-hover">
        <div
          className={`h-full rounded-full ${color} transition-all duration-700 ease-out`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-8 text-end text-xs text-text-muted">{pct}%</span>
    </div>
  );
}
