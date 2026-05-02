import { LandingHero } from "@/components/landing/LandingHero";
import { LandingTrustStrip } from "@/components/landing/LandingTrustStrip";
import { LandingHowItWorks } from "@/components/landing/LandingHowItWorks";
import { LandingExperienceShowcase } from "@/components/landing/LandingExperienceShowcase";
import { LandingCapabilities } from "@/components/landing/LandingCapabilities";
import { LandingResultPreview } from "@/components/landing/LandingResultPreview";
import { LandingPricing } from "@/components/landing/LandingPricing";
import { LandingOnboarding } from "@/components/landing/LandingOnboarding";
import { LandingFAQ } from "@/components/landing/LandingFAQ";
import { LandingFinalCta } from "@/components/landing/LandingFinalCta";

export default function MarketingPage() {
  return (
    <main className="relative overflow-hidden bg-bg text-text">
      <LandingHero />
      <LandingTrustStrip />
      <LandingHowItWorks />
      <LandingExperienceShowcase />
      <LandingCapabilities />
      <LandingResultPreview />
      <LandingPricing />
      <LandingOnboarding />
      <LandingFAQ />
      <LandingFinalCta />
    </main>
  );
}
