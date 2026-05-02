"use client";

import { useState } from "react";
import {
  AudioLines,
  FileVideo,
  HelpCircle,
  Link as LinkIcon,
  Lock,
  ScanLine,
  Sparkles,
  Type,
  Upload,
  User,
  Image as ImageIcon,
  CheckCircle2,
} from "lucide-react";

type MediaType = "image" | "video" | "audio" | "text" | "face";

const TABS: { type: MediaType; icon: typeof ScanLine; label: string; soon?: boolean; cost?: string }[] = [
  { type: "image", icon: ScanLine, label: "Image", cost: "$0.05" },
  { type: "video", icon: FileVideo, label: "Video", cost: "$0.99+" },
  { type: "audio", icon: AudioLines, label: "Audio", cost: "$0.40" },
  { type: "text", icon: Type, label: "Text", soon: true },
  { type: "face", icon: User, label: "Face", soon: true },
];

const QUICK_NOTES = [
  "Create an account before using the full detector workspace.",
  "Start with the limited free trial, then continue with wallet-based usage.",
  "Scan prices are charged from your balance after successful processing.",
  "Image, audio, and video are the current core scan modes.",
];

const PREVIEW_FEATURES = [
  {
    title: "Detector workflow",
    desc: "Upload media, review costs, confirm the scan, then inspect the result.",
    icon: <Upload className="h-4 w-4 text-primary" />,
  },
  {
    title: "Result breakdown",
    desc: "See verdict, confidence, and generator-level signals inside the app.",
    icon: <CheckCircle2 className="h-4 w-4 text-success" />,
  },
  {
    title: "Saved history",
    desc: "Completed scans and saved results will live in your authenticated workspace.",
    icon: <Sparkles className="h-4 w-4 text-primary" />,
  },
];

export default function UniversalDetectorPage() {
  const [activeTab, setActiveTab] = useState<MediaType>("image");
  const activeItem = TABS.find((t) => t.type === activeTab);
  const isSoon = activeItem?.soon;

  return (
    <main className="mx-auto flex w-full max-w-4xl min-w-0 flex-col overflow-x-clip px-4 pb-16 pt-24 sm:px-6 sm:pt-28">
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] text-text-muted">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Public detector preview
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Universal Detector</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-[15px]">
          Preview the same detector workflow used inside the app. Create an account, start the limited trial, and unlock the full workspace.
        </p>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="min-w-0 space-y-5">
          <div className="grid grid-cols-3 gap-2">
            {TABS.slice(0, 3).map((tab) => (
              <button
                key={tab.type}
                onClick={() => setActiveTab(tab.type)}
                className={`flex min-w-0 flex-col items-center gap-1 rounded-2xl border px-2 py-3 text-center text-sm font-medium transition ${
                  activeTab === tab.type
                    ? "border-primary/20 bg-primary-dim text-primary"
                    : "border-border bg-surface text-text-muted hover:bg-surface-hover hover:text-text"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <tab.icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{tab.label}</span>
                </div>
                <span className="text-[10px] text-text-dim">{tab.cost}</span>
              </button>
            ))}
          </div>

          <div>
            <div className="space-y-4 rounded-2xl bg-surface p-4 sm:p-5">
              {activeTab === "image" && (
                <PreviewUploadPanel
                  title="Image upload"
                  subtitle="PNG, JPG, JPEG, WEBP up to 10MB"
                  helper="Best for screenshots, profile photos, renders, and suspicious visuals."
                  buttonLabel="Browse image"
                  icon={<ImageIcon className="h-8 w-8 text-text-dim" />}
                />
              )}

              {activeTab === "audio" && (
                <PreviewUploadPanel
                  title="Audio upload"
                  subtitle="MP3, WAV, M4A up to 25MB"
                  helper="Use clean speech clips for more reliable confidence scoring."
                  buttonLabel="Browse audio"
                  icon={<AudioLines className="h-8 w-8 text-text-dim" />}
                />
              )}

              {activeTab === "video" && (
                <div className="space-y-4">
                  <div className="rounded-2xl bg-bg p-4">
                    <div className="flex gap-2">
                      <button className="rounded-xl bg-primary-dim px-3 py-2 text-xs font-medium text-primary">
                        Video URL
                      </button>
                      <button className="rounded-xl bg-surface px-3 py-2 text-xs font-medium text-text-muted">
                        File upload
                      </button>
                    </div>

                    <div className="mt-4">
                      <label className="text-sm font-medium">Paste a video URL</label>
                      <p className="mt-1 text-xs text-text-dim">Supports TikTok, YouTube, Instagram, Facebook</p>
                      <div className="mt-3 flex min-w-0 items-center gap-2 rounded-2xl border border-border bg-surface px-3 opacity-60">
                        <LinkIcon className="h-4 w-4 shrink-0 text-text-dim" />
                        <input
                          type="url"
                          disabled
                          placeholder="https://tiktok.com/@user/video/..."
                          className="min-w-0 flex-1 cursor-not-allowed bg-transparent py-3 text-sm outline-none placeholder:text-text-dim"
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-text-dim">
                      {['TikTok', 'YouTube', 'Instagram', 'Facebook'].map((item) => (
                        <span key={item} className="rounded-full border border-border px-2.5 py-1">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border-2 border-dashed border-border bg-bg p-6 text-center opacity-60 sm:p-8">
                    <Upload className="mx-auto h-6 w-6 text-text-dim" />
                    <p className="mt-3 text-sm font-medium">Upload video file</p>
                    <p className="mt-1 text-xs text-text-dim">MP4, MOV, WEBM up to 100MB</p>
                    <div className="mt-4 inline-flex rounded-xl border border-border bg-surface px-5 py-2 text-sm text-text-dim">
                      Browse video
                    </div>
                  </div>
                </div>
              )}

              <button className="w-full cursor-not-allowed rounded-2xl bg-primary py-3 text-sm font-semibold text-bg opacity-85">
                Create account to analyze {activeItem?.label}
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium text-text-muted">Quick notes</h2>
            <div className="mt-3 rounded-2xl bg-surface p-4">
              <div className="space-y-3">
                {QUICK_NOTES.map((tip) => (
                  <div key={tip} className="flex items-start gap-2 text-xs text-text-muted">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium text-text-muted">Coming soon</h2>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {TABS.filter((tab) => tab.soon).map((tab) => (
                <div key={tab.type} className="rounded-2xl bg-surface p-4 text-sm text-text-muted">
                  <div className="flex items-center gap-2">
                    <tab.icon className="h-4 w-4 text-primary" />
                    <span className="font-medium text-text">{tab.label}</span>
                  </div>
                  <p className="mt-2 text-xs text-text-dim">Planned for a later release.</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="min-w-0 lg:sticky lg:top-20">
          <h2 className="text-sm font-medium text-text-muted">Result</h2>
          <div className="mt-3 rounded-2xl bg-surface p-5">
            {isSoon ? (
              <div className="py-10 text-center">
                <HelpCircle className="mx-auto h-8 w-8 text-text-dim" />
                <p className="mt-3 text-sm font-medium">This mode is not available yet</p>
                <p className="mt-1 text-xs text-text-dim">Text and face detection will be added later.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="rounded-2xl bg-bg p-4 text-center">
                  <Lock className="mx-auto h-7 w-7 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-text">Result preview is locked on the guest site</p>
                  <p className="mt-1 text-xs text-text-dim">
                    The full app shows verdict, confidence, generator breakdown, and saved scan flow.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-text-muted">What you unlock</h3>
                  <div className="mt-3 space-y-3">
                    {PREVIEW_FEATURES.map((item) => (
                      <div key={item.title} className="rounded-2xl bg-bg p-4">
                        <div className="flex items-center gap-2 text-text">
                          {item.icon}
                          <p className="text-sm font-medium">{item.title}</p>
                        </div>
                        <p className="mt-2 text-xs text-text-dim">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-primary-dim p-4 text-center">
                  <p className="text-sm font-semibold text-text">Account + trial required</p>
                  <p className="mt-1 text-xs text-text-dim">
                    Start with the limited free trial, then continue with wallet-based usage when you need more scans.
                  </p>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                      href="https://accounts.realvs.ai/sign-up"
                      className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-bg transition hover:bg-primary-hover"
                    >
                      Start Free Trial
                    </a>
                    <a
                      href="https://accounts.realvs.ai/sign-in"
                      className="rounded-xl bg-bg px-6 py-3 text-sm font-semibold text-text transition hover:bg-surface-hover"
                    >
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function PreviewUploadPanel({
  title,
  subtitle,
  helper,
  buttonLabel,
  icon,
}: {
  title: string;
  subtitle: string;
  helper: string;
  buttonLabel: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-bg p-4 sm:p-5">
      <div className="rounded-2xl border-2 border-dashed border-border bg-surface p-6 text-center opacity-60 sm:p-10">
        {icon}
        <p className="mt-3 text-sm font-medium">{title}</p>
        <p className="mt-1 text-xs text-text-dim">{subtitle}</p>
        <div className="mt-4 inline-flex rounded-xl border border-border bg-bg px-5 py-2 text-sm text-text-dim">
          {buttonLabel}
        </div>
      </div>
      <p className="mt-3 text-xs text-text-dim">{helper}</p>
    </div>
  );
}
