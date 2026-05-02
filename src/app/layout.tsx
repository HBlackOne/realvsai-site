import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import LangProvider from "@/components/LangProvider";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "RealvsAi — AI Media Authenticity Scanner",
  description:
    "Scan images, videos, and audio for AI generation, deepfakes, and authenticity signals. 90+ generators detected. Privacy-first.",
  openGraph: {
    title: "RealvsAi — AI Media Authenticity Scanner",
    description: "Detect AI-generated images, videos, and audio instantly. 90+ generators. Privacy-first.",
    url: "https://realvs.ai",
    siteName: "RealvsAi",
    type: "website",
    images: [{ url: "https://realvs.ai/api/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RealvsAi — AI Media Authenticity Scanner",
    description: "Detect AI-generated media instantly. 90+ generators. Privacy-first.",
    images: ["https://realvs.ai/api/og"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${dmSans.variable} dark`}>
      <body className="min-h-screen bg-bg text-text antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
