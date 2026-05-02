import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border/80 px-6 py-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-text-dim md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-5">
          {FOOTER_LINKS.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-text">
              {item.label}
            </Link>
          ))}
        </div>
        <p>© {new Date().getFullYear()} RealvsAi. All rights reserved.</p>
      </div>
    </footer>
  );
}
