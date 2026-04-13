import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SupportButton from "@/components/SupportButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0B",
};

export const metadata: Metadata = {
  title: "FlowShot — Project Management for Photo & Video Studios",
  description: "All-in-one workspace for photo and video production teams. Kanban project board, video review with annotations, client questionnaires, branded delivery pages, Google Drive & Dropbox sync. Built by creators, for creators.",
  keywords: [
    "video production management",
    "photo studio software",
    "project management for creators",
    "wedding videography project management",
    "video review tool for filmmakers",
    "client questionnaire for photographers",
    "delivery page for video production",
    "google drive automation for studios",
    "photo video studio management software",
    "team collaboration",
    "production pipeline",
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
    title: "FlowShot — Project Management for Photo & Video Studios",
    description: "All-in-one workspace for photo and video production teams. Kanban project board, video review with annotations, client questionnaires, branded delivery pages, Google Drive & Dropbox sync.",
    type: "website",
    locale: "en_US",
    url: "https://flowshot.app",
    siteName: "FlowShot",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "FlowShot — Project Management for Photo & Video Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowShot — Project Management for Photo & Video Studios",
    description: "All-in-one workspace for photo and video production teams. Kanban project board, video review with annotations, client questionnaires, branded delivery pages.",
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
    <html lang="en" className={`${inter.variable} ${fraunces.variable} dark`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Navbar />
        {children}
        <SupportButton />
      </body>
    </html>
  );
}
