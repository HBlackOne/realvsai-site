"use client";

import Link from "next/link";
import { ArrowRight, Languages, Shield } from "lucide-react";
import { useLang } from "@/components/LangProvider";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.realvs.ai";
const ACCOUNTS_URL = process.env.NEXT_PUBLIC_ACCOUNTS_URL || "https://accounts.realvs.ai";

const NAV_ITEMS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
] as const;

export default function Header() {
  const { lang, setLang, isRtl } = useLang();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-[1.4rem] border border-border bg-surface/78 px-4 shadow-[0_14px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-primary/10 shadow-inner shadow-black/10">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div className="leading-none">
            <div className="text-[15px] font-semibold tracking-[-0.02em] text-text">RealvsAi</div>
            <div className="mt-1 text-[11px] text-text-dim">AI authenticity scanner</div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm text-text-muted transition hover:bg-surface2 hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg/70 text-text-muted transition hover:bg-surface2 hover:text-text"
            aria-label="Toggle language"
          >
            <Languages className="h-4 w-4" />
          </button>

          <a
            href={`${ACCOUNTS_URL}/sign-in`}
            className="hidden rounded-xl px-3 py-2 text-sm font-medium text-text-muted transition hover:bg-surface2 hover:text-text sm:inline-flex"
          >
            {isRtl ? "تسجيل الدخول" : "Sign in"}
          </a>

          <a
            href={`${APP_URL}/scan`}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-bg transition hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            <ArrowRight className="h-4 w-4" />
            <span>{isRtl ? "جرّب RealvsAI" : "Try RealvsAI"}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
