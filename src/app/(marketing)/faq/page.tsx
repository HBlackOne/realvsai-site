const FAQS = [
  {
    q: "What does RealvsAi detect?",
    a: "RealvsAi analyzes images, videos, and audio files for signals of AI generation, deepfakes, and synthetic manipulation. We provide confidence scores and detailed analysis.",
  },
  {
    q: "How accurate is the detection?",
    a: "Our detection is powered by Hive AI's advanced models. Results include confidence scores — we show likelihood, not certainty. Detection accuracy varies by media type and generation method.",
  },
  {
    q: "What file formats are supported?",
    a: "Images: PNG, JPG, WEBP. Videos: MP4, MOV, WEBM (upload or URL). Audio: MP3, WAV, M4A.",
  },
  {
    q: "How does pricing work?",
    a: "RealvsAi starts with a limited free trial. After trial, scans are charged from your wallet balance using clear money-based pricing: images from $0.05, audio from $0.40, and video pricing based on supported duration tiers.",
  },
  {
    q: "How long are scan results kept?",
    a: "Scan history and retention behavior will depend on the final product configuration. The live direction keeps core history in the app, with deeper billing and retention syncing being added through the backend.",
  },
  {
    q: "Is my uploaded media stored?",
    a: "Files are processed securely and stored temporarily only for scan processing. Product history and stored result behavior may evolve as backend retention controls are finalized.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. The trial flow is designed around clear billing expectations. If you cancel before renewal, you will not be charged for the next subscription period.",
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto flex-1 max-w-2xl px-4 pb-20 pt-28">
      <h1 className="text-center text-3xl font-semibold">Frequently Asked Questions</h1>
      <p className="mt-2 text-center text-sm text-text-muted">Everything you need to know about RealvsAi</p>

      <div className="mt-10 space-y-3">
        {FAQS.map((faq) => (
          <details key={faq.q} className="group rounded-xl border border-border bg-surface">
            <summary className="flex cursor-pointer items-center justify-between p-4 text-sm font-medium transition hover:text-primary">
              {faq.q}
              <span className="text-lg text-text-dim transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="px-4 pb-4 text-sm leading-relaxed text-text-muted">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
