"use client";

const TRUST_ITEMS = [
  { val: "142K+", lbl: "Media Analyzed" },
  { val: "94.7%", lbl: "Detection Accuracy" },
  { val: "<2s", lbl: "Avg. Analysis Time" },
  { val: "90+", lbl: "Known Generators" },
  { val: "3", lbl: "Media Types" },
  { val: "100%", lbl: "Privacy Focused" },
];

export function LandingTrustStrip() {
  const double = [...TRUST_ITEMS, ...TRUST_ITEMS];
  return (
    <div className="border-t border-b border-border overflow-hidden">
      <div className="flex overflow-hidden">
        {[0, 1].map((key) => (
          <div
            key={key}
            className="flex flex-shrink-0"
            style={{ animation: "marquee 20s linear infinite" }}
            aria-hidden={key === 1}
          >
            {double.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 px-11 py-[18px] border-r border-border whitespace-nowrap flex-shrink-0">
                <span className="text-xl font-bold text-text tracking-tight">{item.val}</span>
                <span className="text-xs text-text-dim">{item.lbl}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
