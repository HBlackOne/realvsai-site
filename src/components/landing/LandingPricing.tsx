"use client";

import { useFadeIn } from "@/hooks/use-fade-in";
import { PRICING_LAYERS } from "@/components/pricing/pricing-data";
import { PricingLayerCard } from "@/components/pricing/PricingBlocks";

export function LandingPricing() {
  const ref = useFadeIn();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="pricing" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="fade-up text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-3.5">Pricing</p>
          <h2 className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-bold tracking-[-0.035em] leading-[1.15]">
            Start free, then<br />choose how you scale
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-[17px] text-text-muted leading-[1.72]">
            Begin with a limited free trial, then continue with credit packs or early access plans.
          </p>
        </div>

        <div className="mt-12 grid gap-3 lg:grid-cols-3">
          {PRICING_LAYERS.map((layer, i) => (
            <div key={layer.title} className="fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
              <PricingLayerCard {...layer} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
