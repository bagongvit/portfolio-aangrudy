import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-aangrudy.vercel.app"),
  title: {
    default: "Aang Rudy | Full Stack Developer",
    template: "%s | Aang Rudy",
  },
  description:
    "Portfolio Aang Rudy, Full Stack Developer yang membangun aplikasi modern menggunakan Laravel, React, Next.js, Vue.js, dan teknologi web modern.",
  keywords: [
    "Aang Rudy",
    "Full Stack Developer",
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
    title: "Aang Rudy | Full Stack Developer",
    description:
      "Portfolio Aang Rudy - Full Stack Developer yang membangun aplikasi modern menggunakan Laravel, React, Next.js, dan teknologi web modern.",
    type: "website",
    locale: "id_ID",
    url: "https://portfolio-aangrudy.vercel.app",
    siteName: "Aang Rudy Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aang Rudy - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aang Rudy | Full Stack Developer",
    description: "Portfolio Aang Rudy - Full Stack Developer.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen bg-[#09090B] text-white antialiased">
        <PageLoader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
