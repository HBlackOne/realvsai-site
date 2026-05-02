export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.realvs.ai";

export const CREDIT_PACKS = [
  { title: "Starter", price: "$10", credits: "1100 credits", popular: false, bestValue: false },
  { title: "Basic", price: "$15", credits: "1700 credits", popular: false, bestValue: false },
  { title: "Standard", price: "$20", credits: "2300 credits", popular: true, bestValue: false },
  { title: "Pro", price: "$30", credits: "3500 credits", popular: false, bestValue: false },
  { title: "Elite", price: "$50", credits: "6000 credits", popular: false, bestValue: true },
] as const;

export const PRICING_LAYERS = [
  {
    title: "Free Trial",
    subtitle: "Start here",
    price: "$0",
    description: "Best for first-time users who want to test the detector before committing. A card is required to activate the trial.",
    features: [
      "Limited starter access",
      "Try image, audio, and video flows",
      "Card required to activate trial",
    ],
    ctaLabel: "Start Free Trial",
    ctaHref: "https://accounts.realvs.ai/sign-up",
  },
  {
    title: "Credit Packs",
    subtitle: "Pay as you go",
    price: "Flexible",
    description: "Top up once and spend credits only when you need scans.",
    features: [
      "One-time credit purchases",
      "Great for occasional usage",
      "Use credits across supported scan types",
    ],
    ctaLabel: "View Credit Packs",
    ctaHref: `${APP_URL}/credits`,
  },
  {
    title: "Early Access Plans",
    subtitle: "Best for regular use",
    price: "Basic + Pro",
    description: "Monthly credits, better scan value, and the strongest fit for deep scan usage.",
    features: [
      "Monthly credit allocation",
      "Lower effective scan cost",
      "Built for ongoing usage",
    ],
    ctaLabel: "Compare Plans",
    ctaHref: `${APP_URL}/subscription`,
    highlight: true,
  },
] as const;

export const PRICING_PAYG_FEATURES = [
  "Scan pricing shown clearly in credits and USD context",
  "Credit packs available anytime after trial",
  "Image, audio, and video scans",
  "Only pay for the scans you run",
  "Flexible for occasional usage",
] as const;

export const PRICING_PREMIUM_FEATURES = [
  "Start with a limited free trial",
  "Best for first-time users",
  "Smooth upgrade path into paid usage",
  "Built for safer onboarding",
  "Can scale into plan-based usage later",
] as const;

export const PRICING_CREDIT_PACK_FEATURES = [
  "Top up after trial when needed",
  "Choose a fixed pack amount",
  "Useful for occasional or ongoing use",
  "Simple credit-based continuation",
  "Clear pack sizes before checkout",
] as const;

export const HOW_IT_WORKS_STEPS = [
  { title: "1. Create account", text: "Sign up and begin with the limited RealvsAI trial flow." },
  { title: "2. Start free trial", text: "Try the product first, then choose how you want to continue." },
  { title: "3. Continue with credits or plan", text: "Top up with credits or choose a monthly plan for regular use." },
] as const;

export const SCAN_COSTS = [
  { label: "Image", cost: "$0.05" },
  { label: "Audio", cost: "$0.40" },
  { label: "Video ≤15 sec", cost: "$0.99" },
  { label: "Video ≤30 sec", cost: "$1.99" },
  { label: "Video ≤60 sec", cost: "$2.99" },
] as const;

export const EARLY_ACCESS_PLANS = [
  {
    title: "Basic",
    price: "$4.99 / month",
    credits: "500 credits / month",
    features: [
      "Image scans: 4 credits",
      "Audio scans: 35 credits",
      "Short video: 90 credits",
      "Deep video: 240 credits",
      "2 Deep Scans / month",
    ],
    highlight: false,
  },
  {
    title: "Pro",
    price: "$9.99 / month",
    credits: "1200 credits / month",
    features: [
      "Image scans: 3 credits",
      "Audio scans: 30 credits",
      "Short video: 80 credits",
      "Deep video: 230 credits",
      "4 Deep Scans / month",
    ],
    highlight: true,
  },
] as const;
