export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.realvs.ai";

export const CREDIT_PACKS = [
  { title: "Nano", price: "$5", credits: "200 credits", popular: false, bestValue: false },
  { title: "Starter", price: "$10", credits: "500 credits", popular: false, bestValue: false },
  { title: "Basic", price: "$15", credits: "800 credits", popular: false, bestValue: false },
  { title: "Standard", price: "$20", credits: "1100 credits", popular: true, bestValue: false },
  { title: "Pro", price: "$30", credits: "1700 credits", popular: false, bestValue: false },
  { title: "Elite", price: "$50", credits: "3000 credits", popular: false, bestValue: true },
] as const;

export const PRICING_LAYERS = [
  {
    title: "Free Trial",
    subtitle: "Start here",
    price: "$0",
    description: "Best for first-time users who want to test the detector before committing. A card is required to activate the trial.",
    features: [
      "500 trial credits",
      "Try image, audio, and video scans",
      "Deep video included during trial",
      "Card required to activate trial",
    ],
    ctaLabel: "Start Free Trial",
    ctaHref: `${APP_URL}/welcome`,
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
    ctaHref: `${APP_URL}/welcome`,
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
    ctaHref: `${APP_URL}/welcome`,
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

// Subscriber rates — applies to trial, Basic, and Pro users
export const SCAN_COSTS_SUBSCRIBER = [
  { label: "Image", cost: "2 cr ($0.02)" },
  { label: "Audio", cost: "40 cr ($0.40)" },
  { label: "Short video", cost: "30 cr ($0.30)" },
  { label: "Deep video", cost: "80 cr ($0.80)" },
] as const;

// Free user rates — applies to wallet-only users with no active subscription
export const SCAN_COSTS_FREE = [
  { label: "Image", cost: "5 cr ($0.05)" },
  { label: "Audio", cost: "80 cr ($0.80)" },
  { label: "Short video", cost: "60 cr ($0.60)" },
  { label: "Deep video", cost: "Blocked" },
] as const;

export const EARLY_ACCESS_PLANS = [
  {
    title: "Basic",
    price: "$7.99 / month",
    credits: "300 credits / month",
    features: [
      "Image scans: 2 credits",
      "Audio scans: 40 credits",
      "Short video: 30 credits",
      "No deep video",
      "10 scans / day",
      "30 days scan history",
    ],
    highlight: false,
  },
  {
    title: "Pro — Early Access",
    price: "$9.99 / month",
    credits: "700 credits / month",
    features: [
      "Image scans: 2 credits",
      "Audio scans: 40 credits",
      "Short video: 30 credits",
      "Deep video: 80 credits",
      "15 deep scans / month",
      "Full result breakdown",
      "Priority processing",
      "Shareable result links",
      "Credit rollover up to 50%",
    ],
    highlight: true,
  },
  {
    title: "Pro — Loyalty",
    price: "$12.99 / month",
    credits: "600 credits / month",
    features: [
      "Image scans: 2 credits",
      "Audio scans: 40 credits",
      "Short video: 30 credits",
      "Deep video: 80 credits",
      "15 deep scans / month",
      "Early access to new scan types",
      "Full result breakdown",
      "Priority processing",
      "Shareable result links",
      "Credit rollover up to 50%",
    ],
    highlight: false,
  },
  {
    title: "Pro — Normal",
    price: "$14.99 / month",
    credits: "500 credits / month",
    features: [
      "Image scans: 2 credits",
      "Audio scans: 40 credits",
      "Short video: 30 credits",
      "Deep video: 80 credits",
      "25 deep scans / month",
      "Full result breakdown",
      "Priority processing",
      "Shareable result links",
      "Credit rollover up to 50%",
    ],
    highlight: false,
  },
] as const;