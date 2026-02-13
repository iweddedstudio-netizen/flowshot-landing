import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcfcfd",
};

export const metadata: Metadata = {
  title: "FlowShot - Operating System for Photo & Video Studios",
  description: "All-in-one project management for video creators. Manage offers, projects, teams, and clients in one visual platform. Built by creators, for creators. Start your free trial.",
  keywords: [
    "video production management",
    "photo studio software",
    "project management for creators",
    "wedding videography software",
    "production pipeline",
    "team collaboration",
    "client management",
    "offer catalog",
    "brand kit",
    "creative workflow"
  ],
  authors: [{ name: "Alex Ohnevskyi" }],
  creator: "FlowShot",
  publisher: "FlowShot",
  metadataBase: new URL('https://flowshot.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "FlowShot - Operating System for Photo & Video Studios",
    description: "All-in-one project management for video creators. Manage offers, projects, teams, and clients in one visual platform.",
    type: "website",
    locale: "en_US",
    url: "https://flowshot.app",
    siteName: "FlowShot",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "FlowShot - Project Management for Video Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowShot - Operating System for Photo & Video Studios",
    description: "All-in-one project management for video creators. Built by creators, for creators.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
