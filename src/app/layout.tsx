import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";
import AuroraBackground from "@/components/ui/AuroraBackground";
import Noise from "@/components/ui/Noise";
import SmoothScrollProvider from "@/components/hero/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aangrudy.my.id"),
  title: {
    default: "Aang Rudy | Software Engineer",
    template: "%s | Aang Rudy",
  },
  description:
    "Portfolio Aang Rudy, Software Engineer yang membangun aplikasi modern menggunakan Laravel, React, Next.js, Vue.js, dan teknologi web modern.",
  keywords: [
    "Aang Rudy",
    "Software Engineer",
    "Full Stack Engineer",
    "Laravel",
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Web Developer",
  ],
  authors: [{ name: "Aang Rudy" }],
  creator: "Aang Rudy",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Aang Rudy | Software Engineer",
    description:
      "Portfolio Aang Rudy - Software Engineer yang membangun aplikasi modern menggunakan Laravel, React, Next.js, dan teknologi web modern.",
    type: "website",
    locale: "id_ID",
    url: "https://aangrudy.my.id",
    siteName: "Aang Rudy Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aang Rudy - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aang Rudy | Software Engineer",
    description: "Portfolio Aang Rudy - Software Engineer.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body
        className="min-h-screen bg-[#09090B] text-white antialiased"
        suppressHydrationWarning
      >
        <PageLoader />
        <CustomCursor />
        <AuroraBackground />
        <Noise />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
