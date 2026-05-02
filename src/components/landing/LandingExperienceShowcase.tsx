"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

// ── Types ──────────────────────────────────────────────────────
type ShowcaseTabId = "video" | "audio" | "image" | "history" | "share";

type ShowcaseItem = {
  id: ShowcaseTabId;
  label: string;
  promptLabel: string;
  promptText: string;
  title: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
};

// ── Data ───────────────────────────────────────────────────────
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.realvs.ai";

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "video", label: "Video",
    promptLabel: "Video scan",
    promptText: "Upload a short video and check whether it appears authentic, manipulated, or AI-generated — with a verdict and confidence score.",
    title: "Check suspicious videos with a guided verdict",
    description: "Scan short-form video and get a readable summary, confidence score, and risk indicators — in seconds.",
    bullets: ["Frame-level artifact detection", "AI generator fingerprinting", "Confidence breakdown with reasoning"],
    ctaLabel: "Scan a video", ctaHref: `${APP_URL}/scan`,
  },
  {
    id: "audio", label: "Audio",
    promptLabel: "Audio scan",
    promptText: "Analyze a voice clip or audio recording for signs of synthesis, voice cloning, or artificial generation.",
    title: "Reveal voice cloning and synthetic speech",
    description: "Audio scans detect synthesis markers and voice cloning patterns that human ears miss — with a readable outcome.",
    bullets: ["Voice-focused spectral analysis", "Detects 12+ voice generators", "Mixed-signal detection for partial synthesis"],
    ctaLabel: "Scan audio", ctaHref: `${APP_URL}/scan`,
  },
  {
    id: "image", label: "Image",
    promptLabel: "Image scan",
    promptText: "Inspect an image for synthetic generation, visual manipulation, or generator fingerprints from 90+ known AI tools.",
    title: "Spot AI-generated images with a fast check",
    description: "Lightweight image analysis gives you a verdict, suspicion signals, and generator breakdown in under 2 seconds.",
    bullets: ["90+ generator fingerprint database", "Texture and artifact pattern analysis", "Clear confidence signal — not just pass/fail"],
    ctaLabel: "Scan an image", ctaHref: `${APP_URL}/scan`,
  },
  {
    id: "history", label: "History",
    promptLabel: "Scan history",
    promptText: "Review all previous scans, verdicts, timestamps, and media types — organized in one place for easy reference.",
    title: "Keep past scan activity organized",
    description: "Revisit earlier results, compare outcomes, and track repeated checks — so nothing gets lost between sessions.",
    bullets: ["Full result timeline with verdicts", "Filter by media type or outcome", "Re-run a scan on the same file"],
    ctaLabel: "View history", ctaHref: `${APP_URL}/history`,
  },
  {
    id: "share", label: "Share result",
    promptLabel: "Shareable result",
    promptText: "Generate a clean, share-friendly view of a completed detection result for reporting, discussion, or evidence.",
    title: "Turn any detection result into something shareable",
    description: "Shareable result views make it easy to communicate what was scanned and what the system found — without the technical noise.",
    bullets: ["Compact readable summary layout", "Verdict + confidence + reasoning included", "Useful for journalism and trust & safety teams"],
    ctaLabel: "Share a result", ctaHref: `${APP_URL}/scan`,
  },
];

// ── Demo cards per tab ─────────────────────────────────────────
function VideoDemoCard({ active }: { active: boolean }) {
  const bars = [
    { label: "Frame artifacts", val: 89, color: "var(--color-danger)" },
    { label: "Facial consistency", val: 76, color: "var(--color-warning)" },
    { label: "Temporal frequency", val: 92, color: "var(--color-danger)" },
    { label: "Natural motion", val: 21, color: "var(--color-success)" },
  ];
  return (
    <div className="flex flex-col gap-3.5">
      <div className="bg-bg border border-border rounded-xl p-3.5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-text-muted">🎬 deepfake_video.mp4</span>
          <span className="font-mono text-[10px] text-text-dim">0:32</span>
        </div>
        <div className="h-9 bg-surface2 rounded-lg overflow-hidden mb-3 relative">
          <div className="absolute inset-0 flex items-center px-2 gap-0.5">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 rounded-[2px] transition-all duration-500"
                style={{
                  height: i > 6 && i < 22 ? `${50 + Math.sin(i * 0.9) * 30}%` : "25%",
                  background: i > 6 && i < 22 ? "var(--color-danger)" : "var(--color-border)",
                  opacity: active ? (i > 6 && i < 22 ? 0.8 : 0.4) : 0.3,
                }}
              />
            ))}
          </div>
        </div>
        <p className="font-mono text-[10px] text-warning">⚠ Artifacts detected: frames 24–87</p>
      </div>
      <div className="rounded-xl p-3.5" style={{ background: "rgba(242,139,130,0.05)", border: "1px solid rgba(242,139,130,0.2)" }}>
        <div className="flex justify-between items-start mb-2.5">
          <div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-text-dim mb-1">Verdict</div>
            <div className="text-lg font-bold text-danger">AI Generated</div>
          </div>
          <div className="text-[26px] font-extrabold text-primary tracking-tight">89%</div>
        </div>
        {bars.map((b) => (
          <div key={b.label} className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] text-text-dim w-30 flex-shrink-0">{b.label}</span>
            <div className="flex-1 h-1 bg-surface2 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-700" style={{ width: active ? `${b.val}%` : "0%", background: b.color }} />
            </div>
            <span className="text-[10px] text-text-dim w-6 text-right">{active ? `${b.val}%` : "--"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AudioDemoCard({ active }: { active: boolean }) {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="bg-bg border border-border rounded-xl p-3.5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-text-muted">🎙 voice_message.wav</span>
          <span className="font-mono text-[10px] text-text-dim">0:24</span>
        </div>
        <div className="h-10 bg-surface2 rounded-lg overflow-hidden mb-2.5 flex items-center px-2 gap-[1.5px]">
          {Array.from({ length: 60 }).map((_, i) => {
            const h = 10 + Math.abs(Math.sin(i * 0.43 + 1.2) * 24 + Math.sin(i * 0.9) * 10);
            const isSynth = i > 12 && i < 30;
            return (
              <div
                key={i}
                className="flex-1 rounded-[1px] transition-all duration-500"
                style={{
                  height: `${h}px`,
                  background: isSynth ? "var(--color-warning)" : "var(--color-primary)",
                  opacity: active ? (isSynth ? 0.85 : 0.45) : 0.25,
                }}
              />
            );
          })}
        </div>
        <p className="font-mono text-[10px] text-warning">⚠ Synthesis detected: 0:04–0:18</p>
      </div>
      <div className="rounded-xl p-3.5" style={{ background: "rgba(253,214,99,0.05)", border: "1px solid rgba(253,214,99,0.2)" }}>
        <div className="flex justify-between items-start mb-2.5">
          <div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-text-dim mb-1">Verdict</div>
            <div className="text-lg font-bold text-warning">Mixed Signals</div>
          </div>
          <div className="text-[26px] font-extrabold text-primary tracking-tight">61%</div>
        </div>
        {[{ n: "ElevenLabs", v: 44 }, { n: "Bark", v: 12 }, { n: "Natural audio", v: 39 }].map((g) => (
          <div key={g.n} className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] text-text-dim w-24 flex-shrink-0">{g.n}</span>
            <div className="flex-1 h-1 bg-surface2 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: active ? `${g.v}%` : "0%" }} />
            </div>
            <span className="text-[10px] text-text-dim w-6 text-right">{active ? `${g.v}%` : "--"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageDemoCard({ active }: { active: boolean }) {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="bg-bg border border-border rounded-xl p-3.5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-text-muted">🖼 portrait_upload.jpg</span>
          <span className="font-mono text-[10px] text-text-dim">2.1 MB</span>
        </div>
        <div className="h-20 bg-surface2 rounded-lg overflow-hidden mb-2.5 relative flex items-center justify-center">
          <span className="text-3xl opacity-50">👤</span>
          {active && <div className="absolute inset-0 rounded-lg" style={{ border: "2px solid rgba(242,139,130,0.4)" }} />}
          <div className="absolute top-1.5 right-1.5 font-mono text-[9px] px-1.5 py-0.5 rounded-[5px]" style={{ background: "rgba(242,139,130,0.15)", border: "1px solid rgba(242,139,130,0.25)", color: "var(--color-danger)" }}>AI detected</div>
        </div>
        <p className="font-mono text-[10px] text-danger">⚠ Diffusion texture artifacts detected</p>
      </div>
      <div className="rounded-xl p-3.5" style={{ background: "rgba(242,139,130,0.05)", border: "1px solid rgba(242,139,130,0.2)" }}>
        <div className="flex justify-between items-start mb-2.5">
          <div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-text-dim mb-1">Verdict</div>
            <div className="text-lg font-bold text-danger">AI Generated</div>
          </div>
          <div className="text-[26px] font-extrabold text-primary tracking-tight">87%</div>
        </div>
        {[{ n: "Midjourney", v: 71 }, { n: "DALL·E 3", v: 19 }, { n: "SD XL", v: 7 }, { n: "Other", v: 3 }].map((g) => (
          <div key={g.n} className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] text-text-dim w-22 flex-shrink-0">{g.n}</span>
            <div className="flex-1 h-1 bg-surface2 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: active ? `${g.v}%` : "0%" }} />
            </div>
            <span className="text-[10px] text-text-dim w-6 text-right">{active ? `${g.v}%` : "--"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HistoryDemoCard({ active }: { active: boolean }) {
  const rows = [
    { icon: "🎬", file: "clip_2025_08.mp4", verdict: "AI Generated", color: "text-danger", pct: 89, time: "2h ago" },
    { icon: "🖼", file: "avatar_upload.png", verdict: "AI Generated", color: "text-danger", pct: 94, time: "5h ago" },
    { icon: "🎙", file: "testimony_audio.m4a", verdict: "Mixed Signals", color: "text-warning", pct: 58, time: "1d ago" },
    { icon: "🎬", file: "news_b-roll.mp4", verdict: "Authentic", color: "text-success", pct: 91, time: "2d ago" },
    { icon: "🖼", file: "press_photo.jpg", verdict: "Authentic", color: "text-success", pct: 88, time: "3d ago" },
  ];
  return (
    <div className="bg-bg border border-border rounded-[14px]">
      <div className="flex items-center justify-between px-3.5 py-3 border-b border-border">
        <span className="text-xs font-semibold text-text-muted">Scan History</span>
        <span className="text-[11px] text-text-dim">142 total</span>
      </div>
      {rows.map((row, i) => (
        <div
          key={row.file}
          className="flex items-center gap-2.5 px-3.5 py-2.5 transition-opacity duration-400"
          style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--color-border-subtle)" : "none", opacity: active ? 1 : 0.5, transitionDelay: `${i * 0.06}s` }}
        >
          <span className="text-sm flex-shrink-0">{row.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-text-muted truncate">{row.file}</div>
            <div className="text-[10px] text-text-dim mt-0.5">{row.time}</div>
          </div>
          <span className={`text-xs font-bold ${row.color}`}>{row.verdict}</span>
          <span className="font-mono text-[11px] font-bold text-primary">{row.pct}%</span>
        </div>
      ))}
    </div>
  );
}

function ShareDemoCard({ active }: { active: boolean }) {
  return (
    <div className="bg-bg border border-border rounded-[14px] overflow-hidden">
      <div className="flex items-center gap-2 px-3.5 py-3 border-b border-border">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span className="text-xs font-semibold text-text-muted">Shared Result</span>
        <span className="ml-auto font-mono text-[10px] text-text-dim">realvs.ai/r/x7k2p</span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3.5" style={{ opacity: active ? 1 : 0.4, transition: "opacity 0.4s" }}>
          <div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-text-dim mb-1">Detection Result</div>
            <div className="text-[22px] font-bold text-danger">AI Generated</div>
          </div>
          <div className="text-[32px] font-extrabold text-primary tracking-tight">89%</div>
        </div>
        <div className="bg-surface rounded-[10px] p-3 mb-3" style={{ opacity: active ? 1 : 0.3, transition: "opacity 0.5s 0.1s" }}>
          <p className="text-[11px] text-text-muted leading-relaxed">File: <strong className="text-text">deepfake_video.mp4</strong> · Type: Video · Scanned: Apr 21, 2026</p>
          <p className="text-[11px] text-text-muted mt-1.5 leading-relaxed">Face rig artifacts detected in frames 24–87. Temporal frequency signature matches Sora v2 output.</p>
        </div>
        <div className="flex gap-2" style={{ opacity: active ? 1 : 0.2, transition: "opacity 0.5s 0.2s" }}>
          <div className="flex-1 text-center bg-primary text-bg rounded-[9px] py-2 text-xs font-bold">Copy link</div>
          <div className="flex-1 text-center bg-surface border border-border text-text rounded-[9px] py-2 text-xs font-semibold">Download PDF</div>
        </div>
      </div>
    </div>
  );
}

const DEMO_CARD_MAP: Record<ShowcaseTabId, React.ComponentType<{ active: boolean }>> = {
  video: VideoDemoCard,
  audio: AudioDemoCard,
  image: ImageDemoCard,
  history: HistoryDemoCard,
  share: ShareDemoCard,
};

// ── Main component ─────────────────────────────────────────────
export function LandingExperienceShowcase() {
  const sectionRef = useFadeIn();
  const [activeIdx, setActiveIdx] = useState(0);
  const [displayIdx, setDisplayIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({ left: 4, width: 80 });

  const item = SHOWCASE_ITEMS[displayIdx];
  const DemoCard = DEMO_CARD_MAP[item.id];

  useEffect(() => {
    const el = tabRefs.current[activeIdx];
    if (el) {
      const parent = el.parentElement!;
      const prect = parent.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      setPillStyle({ left: rect.left - prect.left, width: rect.width });
    }
  }, [activeIdx]);

  const switchTab = useCallback((idx: number) => {
    if (idx === activeIdx || animating) return;
    setAnimating(true);
    setActiveIdx(idx);
    setTimeout(() => { setDisplayIdx(idx); setAnimating(false); }, 220);
  }, [activeIdx, animating]);

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="px-6 py-16 sm:py-24" id="showcase">
      <div className="mx-auto max-w-[1200px]">
        {/* Section header */}
        <div className="fade-up text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3.5">Product experience</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-bold tracking-[-0.035em] leading-[1.15]">
            One interface.<br />Every media type.
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-[17px] text-text-muted leading-[1.72] mb-10">
            See how RealvsAI handles the five core workflows — from a quick image check to a full shareable result.
          </p>
        </div>

        {/* Tabs */}
        <div className="fade-up flex justify-center mb-2">
          <div className="relative flex items-center gap-0.5 bg-surface border border-border rounded-[20px] p-1">
            {/* Sliding pill */}
            <div
              className="absolute top-1 h-[calc(100%-8px)] bg-surface2 border border-border rounded-[16px] shadow-md transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ left: pillStyle.left, width: pillStyle.width }}
            />
            {SHOWCASE_ITEMS.map((s, i) => (
              <button
                key={s.id}
                ref={(el) => { tabRefs.current[i] = el; }}
                onClick={() => switchTab(i)}
                className={`relative z-10 text-[13px] font-medium px-5 py-2.5 rounded-[16px] transition-colors whitespace-nowrap ${activeIdx === i ? "text-text" : "text-text-dim hover:text-text-muted"}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-2 grid items-start gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
          {/* Left: text outside the box */}
          <div className="fade-up lg:pt-6">
            <div className="bg-bg border border-border rounded-[14px] p-3.5 mb-7 flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-primary-dim border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-text-dim mb-1.5">{item.promptLabel}</div>
                <div key={`prompt-${displayIdx}`} className={animating ? "sc-exit" : "sc-enter"}>
                  <p className="text-sm text-text-muted leading-relaxed">{item.promptText}</p>
                </div>
              </div>
            </div>

            <div key={`content-${displayIdx}`} className={animating ? "sc-exit" : "sc-enter"}>
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary mb-3.5">{item.label}</p>
              <h3 className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-bold tracking-[-0.03em] leading-[1.2] mb-3.5">{item.title}</h3>
              <p className="text-[15px] text-text-muted leading-[1.72] mb-5">{item.description}</p>
              <ul className="space-y-2.5 mb-7">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-text-muted">
                    <span className="w-[18px] h-[18px] rounded-full bg-primary-dim border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 2.5" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <a href={item.ctaHref} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors">
                {item.ctaLabel}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: boxed demo only */}
          <div
            className="fade-up bg-surface border border-border rounded-[28px] p-8"
            style={{ boxShadow: "0 32px 72px rgba(0,0,0,0.35)" }}
          >
            <div key={`demo-${displayIdx}`} className={animating ? "sc-exit" : "sc-enter"}>
              <DemoCard active={!animating} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
