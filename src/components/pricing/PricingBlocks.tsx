import { ArrowRight, Check, Crown, Sparkles, Wallet } from "lucide-react";
import type { ReactNode } from "react";
import { APP_URL, CREDIT_PACKS, EARLY_ACCESS_PLANS } from "@/components/pricing/pricing-data";

export function PricingPlanCard({
  title,
  subtitle,
  description,
  features,
  ctaLabel,
  ctaHref,
  highlight,
  icon,
  note,
}: {
  title: string;
  subtitle: string;
  description?: string;
  features: readonly string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
  icon?: ReactNode;
  note?: string;
}) {
  return (
    <div
      className={`group flex h-full flex-col rounded-[1.75rem] border p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 sm:p-6 ${
        highlight
          ? "border-primary/20 bg-[linear-gradient(180deg,rgba(138,180,248,0.12),rgba(138,180,248,0.04))]"
          : "border-border bg-surface/92"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className={`flex h-9 w-9 items-center justify-center rounded-xl border ${highlight ? "border-primary/20 bg-primary/10" : "border-border bg-bg/70"}`}>
          {highlight ? <Crown className="h-4 w-4 text-primary" /> : icon ?? <Sparkles className="h-4 w-4 text-primary" />}
        </div>
        <div>
          <h3 className="text-base font-semibold tracking-[-0.02em]">{title}</h3>
          <p className="mt-1 text-xs font-medium text-text-dim">{subtitle}</p>
        </div>
      </div>

      {description ? <p className="mt-4 text-sm leading-7 text-text-muted">{description}</p> : null}

      <div className="mt-5 space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-2 text-sm text-text-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {note ? <div className="mt-4 rounded-2xl border border-border bg-bg/70 px-4 py-3 text-xs leading-6 text-text-dim">{note}</div> : null}

      <a
        href={ctaHref}
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition ${
          highlight ? "bg-primary text-bg hover:bg-primary-hover" : "border border-border bg-bg text-text hover:bg-surface2"
        }`}
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

export function PricingLayerCard({
  title,
  subtitle,
  price,
  description,
  features,
  ctaLabel,
  ctaHref,
  highlight,
}: {
  title: string;
  subtitle: string;
  price: string;
  description: string;
  features: readonly string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`group flex h-full flex-col rounded-[1.9rem] border p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 sm:p-7 ${
        highlight
          ? "border-primary/20 bg-[linear-gradient(180deg,rgba(138,180,248,0.12),rgba(138,180,248,0.04))]"
          : "border-border bg-surface/92"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${highlight ? "border-primary/20 bg-primary/10" : "border-border bg-bg/70"}`}>
          {highlight ? <Crown className="h-4 w-4 text-primary" /> : <Sparkles className="h-4 w-4 text-primary" />}
        </div>
        <div>
          <h3 className="text-base font-semibold tracking-[-0.02em]">{title}</h3>
          <p className="mt-1 text-xs font-medium text-text-dim">{subtitle}</p>
        </div>
      </div>

      <p className="mt-5 text-[1.95rem] font-bold tracking-[-0.04em] text-primary">{price}</p>
      <p className="mt-3 text-sm leading-7 text-text-muted">{description}</p>

      <div className="mt-5 space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-2 text-sm text-text-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <a
        href={ctaHref}
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition ${
          highlight ? "bg-primary text-bg hover:bg-primary-hover" : "border border-border bg-bg text-text hover:bg-surface2"
        }`}
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

export function CreditPacksIntro() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[11px] text-text-muted">
        <Wallet className="h-3.5 w-3.5 text-warning" />
        Credit packs
      </div>
      <h3 className="mt-4 text-base font-semibold">Top up once and scan when needed</h3>
      <p className="mt-2 text-sm text-text-muted">Simple fixed packs for flexible usage after trial.</p>
    </div>
  );
}

export function CreditPacksGrid() {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {CREDIT_PACKS.map((pack) => (
        <a
          key={pack.title}
          href={`${APP_URL}/credits`}
          className={`relative flex flex-col items-center rounded-[1.4rem] border p-4 text-center shadow-[0_14px_45px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:bg-surface2 ${
            pack.popular || pack.bestValue ? "border-primary/20 bg-primary/10" : "border-border bg-surface/92"
          }`}
        >
          {pack.popular && (
            <span className="absolute -top-2.5 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold text-bg">
              MOST POPULAR
            </span>
          )}
          {pack.bestValue && (
            <span className="absolute -top-2.5 rounded-full bg-success px-2.5 py-0.5 text-[10px] font-bold text-bg">
              BEST VALUE
            </span>
          )}
          <p className="text-sm font-semibold">{pack.title}</p>
          <p className="mt-2 text-xl font-bold">{pack.price}</p>
          <p className="mt-2 text-lg font-semibold text-primary">{pack.credits}</p>
        </a>
      ))}
    </div>
  );
}

export function PricingFlowCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface/92 p-4 text-center shadow-[0_14px_45px_rgba(0,0,0,0.1)]">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-xs text-text-muted">{text}</p>
    </div>
  );
}

export function PricingCostCard({ label, cost }: { label: string; cost: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface/92 px-4 py-5 text-center shadow-[0_14px_45px_rgba(0,0,0,0.1)]">
      <p className="text-sm font-medium">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-primary">{cost}</p>
      <p className="mt-1 text-xs text-text-muted">per scan</p>
    </div>
  );
}

export function EarlyAccessPlansGrid() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {EARLY_ACCESS_PLANS.map((plan) => (
        <a
          key={plan.title}
          href={`${APP_URL}/subscription`}
          className={`relative block rounded-[1.75rem] border p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 sm:p-6 ${
            plan.highlight ? "border-primary/20 bg-[linear-gradient(180deg,rgba(138,180,248,0.12),rgba(138,180,248,0.04))]" : "border-border bg-surface/92"
          }`}
        >
          {plan.highlight ? (
            <span className="absolute right-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-bg">HOT SALE</span>
          ) : null}

          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${plan.highlight ? "border-primary/20 bg-primary/10" : "border-border bg-bg/70"}`}>
              {plan.highlight ? <Crown className="h-4 w-4 text-primary" /> : <Sparkles className="h-4 w-4 text-primary" />}
            </div>
            <div>
              <h3 className="text-base font-semibold">{plan.title}</h3>
              <p className="mt-1 text-sm text-text-muted">{plan.price}</p>
            </div>
          </div>

          <p className="mt-4 text-xl font-bold text-primary">{plan.credits}</p>

          <div className="mt-5 space-y-3">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-start gap-2 text-sm text-text-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
