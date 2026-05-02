"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

const FAQS = [
  {
    q: "How accurate is RealvsAI?",
    a: "Our detection pipeline currently achieves 94.7% accuracy across supported media types. Accuracy varies by media type and generator — image detection tends to be most reliable. Always treat results as a strong signal, not a final verdict.",
  },
  {
    q: "What media formats are supported?",
    a: "We support JPEG, PNG, WebP for images; MP3, WAV, OGG, M4A for audio; and MP4, MOV, WebM for video. You can also submit supported media links directly. File size limits depend on your plan.",
  },
  {
    q: "Does my media get stored after scanning?",
    a: "Uploaded media is processed and then deleted after the scan completes. We do not use your content to train models. Scan results and metadata are retained in your history for reference.",
  },
  {
    q: "What is Deep Scan and when should I use it?",
    a: "Deep Scan is a premium video analysis pass that inspects facial consistency, frequency anomalies, compression traces, and generator fingerprints in greater depth. Use it when the standard video result is inconclusive or when the stakes of getting it wrong are high.",
  },
  {
    q: "Is there an API available?",
    a: "Yes — the RealvsAI API lets you integrate detection into your own tools. API access is available on Pro plans, with API key management, webhooks, and usage monitoring built in.",
  },
  {
    q: "Can I cancel my subscription at any time?",
    a: "Yes. You can cancel an Early Access plan at any time — your access continues until the end of the billing period. Credit pack credits never expire and remain available after cancellation.",
  },
] as const;

export function LandingFAQ() {
  const ref = useFadeIn();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="faq" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-[740px]">
        <div className="fade-up text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3.5">FAQ</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-bold tracking-[-0.035em] leading-[1.15]">
            Common questions
          </h2>
        </div>

        <div className="fade-up mt-10 flex flex-col gap-px bg-border rounded-[20px] overflow-hidden">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-bg">
              <button
                className="flex items-center justify-between gap-4 w-full px-6 py-5 text-left text-[15px] font-semibold text-text hover:bg-surface transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <Plus
                  className="w-5 h-5 flex-shrink-0 text-text-dim transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-400 ease-in-out"
                style={{ maxHeight: open === i ? "400px" : "0px" }}
              >
                <p className="px-6 pb-5 text-sm text-text-muted leading-[1.75]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
