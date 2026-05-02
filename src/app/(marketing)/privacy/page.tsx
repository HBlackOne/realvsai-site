const sections = [
  {
    title: "1. What we collect",
    points: [
      "Account information such as your email address and basic profile data through Clerk.",
      "Billing-related data needed to process subscriptions or credit purchases through LemonSqueezy.",
      "Media, URLs, scan inputs, and scan results you submit to use RealvsAi.",
      "Basic technical information such as browser, device, IP address, and usage logs for security and product improvement.",
    ],
  },
  {
    title: "2. How we use your data",
    points: [
      "To authenticate you, manage your account, and keep your session secure.",
      "To run AI-content detection scans, store results, and show your scan history.",
      "To manage credits, purchases, future subscription state, and billing records.",
      "To improve performance, reliability, abuse prevention, and product quality.",
    ],
  },
  {
    title: "3. Third-party services",
    points: [
      "Clerk handles authentication, account identity, and session management.",
      "Hive powers scan processing for supported media detection workflows.",
      "LemonSqueezy handles checkout, payments, subscription billing, and purchase events.",
      "We only share the minimum data needed for those services to do their job.",
    ],
  },
  {
    title: "4. Media and scan results",
    points: [
      "Uploaded media or submitted URLs may be processed to generate a result, confidence score, and related scan metadata.",
      "We may store scan history, result summaries, and detailed result payloads to support your account experience.",
      "Do not upload content you do not have the right to use or content that violates the law.",
    ],
  },
  {
    title: "5. Credits, billing, and records",
    points: [
      "We store wallet balances, purchases, future subscription state, and transaction history as part of the service.",
      "Payment card details are not stored by RealvsAi directly; billing is processed by LemonSqueezy.",
    ],
  },
  {
    title: "6. Data retention",
    points: [
      "We keep account, billing, and scan records for as long as reasonably needed to operate the service, resolve disputes, and improve reliability.",
      "We may delete or anonymize data that is no longer needed.",
    ],
  },
  {
    title: "7. Security",
    points: [
      "We use reasonable technical and organizational measures to protect account and service data.",
      "No online system is perfectly secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "8. Your choices",
    points: [
      "You can manage your account through the product and Clerk-hosted account flows.",
      "For privacy, deletion, or support requests, contact us through the RealvsAi contact page.",
    ],
  },
  {
    title: "9. Updates",
    points: [
      "We may update this policy as the product evolves. Continued use of RealvsAi after updates means you accept the revised policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-1 flex-col px-4 pb-20 pt-28 sm:px-6">
      <div>
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-text-muted">Last updated: April 2026</p>
        <p className="mt-6 text-sm leading-relaxed text-text-muted">
          This Privacy Policy explains how RealvsAi collects, uses, stores, and protects data when you use our website and application.
        </p>
      </div>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-base font-semibold text-text">{section.title}</h2>
            <div className="mt-3 rounded-[24px] bg-surface p-5 sm:p-6">
              <ul className="space-y-3 text-sm leading-relaxed text-text-muted">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
