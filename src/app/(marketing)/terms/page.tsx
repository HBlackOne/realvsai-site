const sections = [
  {
    title: "1. Use of the service",
    points: [
      "By using RealvsAi, you agree to use the service lawfully and responsibly.",
      "You must not use the service to violate laws, infringe rights, abuse systems, or upload content you do not have permission to use.",
    ],
  },
  {
    title: "2. Accounts and access",
    points: [
      "Authentication and account access are handled through Clerk.",
      "You are responsible for maintaining the security of your account and any activity performed through it.",
    ],
  },
  {
    title: "3. Credits and scans",
    points: [
      "RealvsAi uses a credits-based model (CTC) for supported scans.",
      "Current scan costs may vary by media type and may be updated over time.",
      "Credits are used to access scan functionality and related product workflows.",
      "Where the product states that credits are deducted only after successful processing, that rule applies to the supported workflow in effect at that time.",
    ],
  },
  {
    title: "4. Purchases and subscriptions",
    points: [
      "Credit packs, future subscription plans, and promotional offers may be available depending on the current product offering.",
      "Premium benefits, included credits, and promotional bonuses may change, expire, or be limited to specific eligibility rules.",
      "Billing and subscription checkout are handled through LemonSqueezy.",
    ],
  },
  {
    title: "5. Introductory or promotional offers",
    points: [
      "Any introductory Premium bonus or special discount applies only under the specific offer terms shown at the time.",
      "Unless explicitly stated otherwise, promotional benefits do not automatically continue into later renewals or future subscriptions.",
    ],
  },
  {
    title: "6. Scan outputs and limitations",
    points: [
      "RealvsAi provides AI-content detection signals, confidence scores, and related outputs to help users evaluate media.",
      "Results are informational and should not be treated as guaranteed truth, legal proof, or a perfect determination of authenticity.",
      "Detection systems can be wrong, incomplete, or affected by input quality and evolving generation methods.",
    ],
  },
  {
    title: "7. Stored data and history",
    points: [
      "We may store scans, results, history, wallet records, subscription records, and related metadata to operate the product.",
      "Feature access such as history, saved results, and advanced insights may depend on your plan or current product access level.",
    ],
  },
  {
    title: "8. Availability and changes",
    points: [
      "We may update, improve, restrict, suspend, or remove parts of the service at any time.",
      "We do not guarantee uninterrupted availability or error-free operation.",
    ],
  },
  {
    title: "9. Termination",
    points: [
      "We may suspend or terminate access in cases of abuse, fraud, illegal use, or violation of these terms.",
      "You may stop using the service at any time.",
    ],
  },
  {
    title: "10. Contact and updates",
    points: [
      "We may update these Terms as the product evolves. Continued use after updates means you accept the revised Terms.",
      "If you have questions, use the RealvsAi contact page.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-1 flex-col px-4 pb-20 pt-28 sm:px-6">
      <div>
        <h1 className="text-3xl font-semibold">Terms of Service</h1>
        <p className="mt-2 text-sm text-text-muted">Last updated: April 2026</p>
        <p className="mt-6 text-sm leading-relaxed text-text-muted">
          These Terms govern your use of RealvsAi, including the public site, authenticated application, credits system, and related services.
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
