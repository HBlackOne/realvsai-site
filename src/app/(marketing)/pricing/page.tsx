import { Sparkles, Wallet } from "lucide-react";
import Link from "next/link";
import {
  APP_URL,
  PRICING_CREDIT_PACK_FEATURES,
  PRICING_PAYG_FEATURES,
  PRICING_PREMIUM_FEATURES,
  SCAN_COSTS,
} from "@/components/pricing/pricing-data";
import {
  CreditPacksGrid,
  CreditPacksIntro,
  EarlyAccessPlansGrid,
  PricingCostCard,
  PricingPlanCard,
} from "@/components/pricing/PricingBlocks";

export default function PricingPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-1 flex-col px-4 pb-20 pt-28 sm:px-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] text-text-muted">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Trial-first pricing
        </div>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Simple pricing</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-text-muted sm:text-[15px]">
          Start with a limited free trial, then continue with wallet-based pay-as-you-go pricing. Scan prices stay clear, and you add funds only when needed.
        </p>
      </div>

      <section className="mt-12">
        <div className="grid gap-5 lg:grid-cols-3">
          <PricingPlanCard
            title="Free Trial"
            subtitle="Start here"
            description="Best for first-time users who want to test the detector before committing."
            features={PRICING_PREMIUM_FEATURES}
            ctaLabel="Start Free Trial"
            ctaHref="https://accounts.realvs.ai/sign-up"
          />

          <PricingPlanCard
            title="Credit Packs"
            subtitle="Pay as you go"
            description="Top up once and spend credits only when you need scans."
            features={PRICING_CREDIT_PACK_FEATURES}
            ctaLabel="View Credit Packs"
            ctaHref="#credit-packs"
            icon={<Wallet className="h-4 w-4 text-warning" />}
          />

          <PricingPlanCard
            title="Early Access Plans"
            subtitle="Best for regular use"
            description="Monthly credits, better scan value, and the strongest fit for deep scan usage."
            features={PRICING_PAYG_FEATURES}
            note="Choose Basic or Pro depending on how often you scan and whether Deep Scan matters to your workflow."
            ctaLabel="Compare Plans"
            ctaHref="#compare-plans"
            highlight
          />
        </div>
      </section>

      <section id="compare-plans" className="mt-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] text-text-muted">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Subscribe to early access today
          </div>
          <h2 className="mt-4 text-lg font-semibold">Basic vs Pro</h2>
          <p className="mt-2 text-sm text-text-muted">
            Pick the plan that matches how often you scan and how much Deep Scan capacity you need each month.
          </p>
        </div>

        <EarlyAccessPlansGrid />
      </section>

      <section className="mt-12">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Scan pricing</h2>
          <p className="mt-2 text-sm text-text-muted">Each scan is charged clearly from your balance after trial.</p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {SCAN_COSTS.map((item) => (
            <PricingCostCard key={item.label} label={item.label} cost={item.cost} />
          ))}
        </div>
      </section>

      <section id="credit-packs" className="mt-12">
        <CreditPacksIntro />
        <CreditPacksGrid />
      </section>

      <div className="mt-12 text-center">
        <p className="text-sm text-text-muted">
          Have questions? Check our <Link href="/faq" className="text-primary hover:underline">FAQ</Link>
        </p>
      </div>
    </div>
  );
}
