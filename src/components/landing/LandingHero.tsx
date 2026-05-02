"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.realvs.ai";
const ACCOUNTS_URL = process.env.NEXT_PUBLIC_ACCOUNTS_URL || "https://accounts.realvs.ai";

const WORDS = ["Deepfakes.", "Cloned Voices.", "AI Faces.", "Synthetic Video.", "Generated Images."];

function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  useEffect(() => {
    const w = words[wi];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (display.length < w.length) t = setTimeout(() => setDisplay(w.slice(0, display.length + 1)), 78);
      else t = setTimeout(() => setPhase("pausing"), 1800);
    } else if (phase === "pausing") {
      t = setTimeout(() => setPhase("deleting"), 400);
    } else {
      if (display.length > 0) t = setTimeout(() => setDisplay(display.slice(0, -1)), 44);
      else { setWi((i) => (i + 1) % words.length); setPhase("typing"); }
    }
    return () => clearTimeout(t);
  }, [display, phase, wi, words]);
  return display;
}

type DemoState = {
  file: string; type: string; icon: string;
  verdict: string; vtype: "danger" | "warning" | "success"; confidence: number;
  detail: string;
  generators: { n: string; v: number }[];
};

const DEMO_STATES: DemoState[] = [
  {
    file: "deepfake_video.mp4", type: "Video", icon: "🎬",
    verdict: "AI Generated", vtype: "danger", confidence: 89,
    detail: "Face rig artifacts in frames 24–87. Temporal frequency matches Sora v2 pattern.",
    generators: [{ n: "Sora", v: 68 }, { n: "Runway", v: 18 }, { n: "Pika", v: 9 }, { n: "Other", v: 5 }],
  },
  {
    file: "voice_note.wav", type: "Audio", icon: "🎙",
    verdict: "Mixed Signals", vtype: "warning", confidence: 61,
    detail: "Sections 0:04–0:18 show voice synthesis markers. Remainder appears natural.",
    generators: [{ n: "ElevenLabs", v: 44 }, { n: "Bark", v: 12 }, { n: "XTTS", v: 5 }, { n: "Natural", v: 39 }],
  },
  {
    file: "portrait_upload.jpg", type: "Image", icon: "🖼",
    verdict: "AI Generated", vtype: "danger", confidence: 87,
    detail: "Synthetic texture patterns and Midjourney diffusion artifacts detected.",
    generators: [{ n: "Midjourney", v: 71 }, { n: "DALL·E 3", v: 19 }, { n: "SD XL", v: 7 }, { n: "Other", v: 3 }],
  },
];

function HeroDemoFrame() {
  const [di, setDi] = useState(0);
  const [scanPhase, setScanPhase] = useState<"scanning" | "revealed">("scanning");
  const d = DEMO_STATES[di];

  useEffect(() => {
    setScanPhase("scanning");
    const t1 = setTimeout(() => setScanPhase("revealed"), 1400);
    const t2 = setTimeout(() => setDi((i) => (i + 1) % DEMO_STATES.length), 4800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [di]);

  const vc = d.vtype === "danger" ? "text-danger" : d.vtype === "warning" ? "text-warning" : "text-success";
  const borderColor = d.vtype === "danger" ? "rgba(242,139,130,0.2)" : d.vtype === "warning" ? "rgba(253,214,99,0.2)" : "rgba(129,201,149,0.2)";
  const bgColor = d.vtype === "danger" ? "rgba(242,139,130,0.04)" : d.vtype === "warning" ? "rgba(253,214,99,0.04)" : "rgba(129,201,149,0.04)";

  return (
    <div className="max-w-[440px] rounded-[1.5rem] border border-border bg-surface shadow-2xl shadow-black/40 overflow-hidden">
      {/* Titlebar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface2 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="font-mono text-[11px] text-text-dim ml-1.5">realvsai — {d.type.toLowerCase()} scan</span>
      </div>

      <div className="p-[18px]">
        {/* Prompt card */}
        <div className="bg-bg border border-border rounded-xl p-3 mb-3.5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[13px]">{d.icon}</span>
            <span className="text-xs font-semibold text-text-muted">{d.type} Scan</span>
            <span className="ml-auto text-[10px] bg-surface2 border border-border rounded-md px-2 py-0.5 text-text-dim">{d.file}</span>
          </div>
          <div className="font-mono text-[11.5px] text-text-muted leading-relaxed">
            {scanPhase === "scanning" ? (
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 border-[1.5px] border-primary border-t-transparent rounded-full animate-spin flex-shrink-0" />
                Running detection pipeline...
              </span>
            ) : (
              <span className="text-success">✓ Analysis complete</span>
            )}
          </div>
        </div>

        {/* Scan bars */}
        <div className="mb-3.5 space-y-[7px]">
          {(["Visual patterns", "Generator fingerprint", "Metadata traces", "Compression analysis"] as const).map((label, i) => {
            const pct = scanPhase === "revealed" ? [92, 87, 74, 65][i] : 0;
            return (
              <div key={label} className="flex items-center gap-2.5">
                <span className="text-[11px] text-text-dim w-32 flex-shrink-0">{label}</span>
                <div className="flex-1 h-1 bg-surface2 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/50 transition-all ease-out"
                    style={{ width: `${pct}%`, transitionDuration: `${0.7 + i * 0.12}s`, transitionDelay: `${i * 0.08}s` }}
                  />
                </div>
                <span className="font-mono text-[10px] text-text-dim w-7 text-right">{scanPhase === "revealed" ? `${pct}%` : "--"}</span>
              </div>
            );
          })}
        </div>

        {/* Verdict panel */}
        <div
          className="rounded-xl p-3.5 transition-opacity duration-400"
          style={{ border: `1px solid ${borderColor}`, background: bgColor, opacity: scanPhase === "revealed" ? 1 : 0.35 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-text-dim mb-1">Verdict</div>
              <div className={`text-[17px] font-bold ${vc}`}>{scanPhase === "revealed" ? d.verdict : "Analyzing..."}</div>
            </div>
            <div className="text-[30px] font-extrabold text-primary tracking-tight">{scanPhase === "revealed" ? `${d.confidence}%` : "--"}</div>
          </div>
          {scanPhase === "revealed" && (
            <p className="text-[11px] text-text-muted leading-snug mb-2.5">{d.detail}</p>
          )}
          <div className="space-y-1.5">
            {d.generators.map((g) => (
              <div key={g.n} className="flex items-center gap-2">
                <span className="text-[11px] text-text-muted w-20 flex-shrink-0">{g.n}</span>
                <div className="flex-1 h-[3px] bg-surface2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700 delay-200"
                    style={{ width: scanPhase === "revealed" ? `${g.v}%` : "0%" }}
                  />
                </div>
                <span className="font-mono text-[10px] text-text-dim w-6 text-right">{scanPhase === "revealed" ? `${g.v}%` : "--"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dots nav */}
        <div className="flex items-center justify-center gap-1.5 mt-3.5">
          {DEMO_STATES.map((_, i) => (
            <button
              key={i}
              onClick={() => setDi(i)}
              className={`h-[5px] rounded-full transition-all duration-300 ${i === di ? "w-5 bg-primary" : "w-[5px] bg-border"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function LandingHero() {
  const typed = useTypewriter(WORDS);

  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(138,180,248,0.07)_0%,transparent_70%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: "linear-gradient(var(--color-border) 1px,transparent 1px),linear-gradient(90deg,var(--color-border) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-[1160px] grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div>
          <div className="hero-fade-up inline-flex items-center gap-2 border border-border bg-surface px-3.5 py-1.5 rounded-full text-xs text-text-muted mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
            Premium AI authenticity detection
          </div>

          <h1
            className="hero-fade-up font-bold tracking-[-0.04em] leading-[1.08] mb-5"
            style={{ fontSize: "clamp(2.45rem,5.1vw,4.2rem)", animationDelay: "0.1s" }}
          >
            Detect{" "}
            <span className="text-primary text-[0.9em] sm:text-[0.94em] md:text-[1em]">
              {typed}
              <span className="inline-block w-[0.06em] h-[0.85em] bg-primary align-text-bottom rounded-sm ml-0.5" style={{ animation: "blink 1s step-end infinite" }} />
            </span>
            <br />
            <span className="text-text">Verify Reality.</span>
          </h1>

          <p className="hero-fade-up text-[17px] text-text-muted leading-[1.72] max-w-[460px] mb-8" style={{ animationDelay: "0.2s" }}>
            Check images, audio, and video for AI generation in seconds — with readable confidence signals built for journalists, creators, and trust teams.
          </p>

          <div className="hero-fade-up flex items-center gap-3 flex-wrap mb-7" style={{ animationDelay: "0.3s" }}>
            <a
              href={`${APP_URL}/welcome`}
              className="hero-cta-glow inline-flex items-center gap-2 bg-primary text-bg font-semibold px-7 py-3.5 rounded-[15px] text-[15px] transition hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              <ArrowRight className="w-4 h-4" />
              Try RealvsAI
            </a>
            <a
              href="#showcase"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center gap-2 border border-border bg-surface text-text font-medium px-7 py-3.5 rounded-[15px] text-[15px] transition hover:-translate-y-0.5 hover:bg-surface-hover"
            >
              <Play className="w-3.5 h-3.5" />
              View Product Experience
            </a>
          </div>
        </div>

        {/* Right: Demo frame */}
        <div className="hidden lg:block hero-fade-up" style={{ animationDelay: "0.25s" }}>
          <div className="relative">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-72 bg-[radial-gradient(ellipse,rgba(138,180,248,0.12)_0%,transparent_70%)] pointer-events-none" />
            <HeroDemoFrame />
          </div>
        </div>
      </div>
    </section>
  );
}
