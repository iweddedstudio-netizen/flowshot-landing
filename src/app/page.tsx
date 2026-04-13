import Hero from '@/components/sections/Hero';
import ProblemSolution from '@/components/sections/ProblemSolution';
import Features from '@/components/sections/Features';
import Audience from '@/components/sections/Audience';
import FounderStory from '@/components/sections/FounderStory';
import PricingTeaser from '@/components/sections/PricingTeaser';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FlowShot",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "All-in-one workspace for photo and video production teams. Kanban project board, video review with annotations, client questionnaires, branded delivery pages, Google Drive & Dropbox sync.",
    "url": "https://flowshot.app",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "25",
      "highPrice": "89",
      "priceCurrency": "USD",
      "offerCount": "3",
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter",
          "price": "25",
          "priceCurrency": "USD",
          "description": "For solo creators — 1 seat, essential features",
          "availability": "https://schema.org/PreOrder"
        },
        {
          "@type": "Offer",
          "name": "Pro",
          "price": "49",
          "priceCurrency": "USD",
          "description": "For growing teams — 3 seats, advanced features",
          "availability": "https://schema.org/PreOrder"
        },
        {
          "@type": "Offer",
          "name": "Business",
          "price": "89",
          "priceCurrency": "USD",
          "description": "For studios — 10 seats, full feature set",
          "availability": "https://schema.org/PreOrder"
        }
      ]
    },
    "author": {
      "@type": "Person",
      "name": "Alex Ohnevskyi",
      "jobTitle": "Founder & Creative Director"
    },
    "provider": {
      "@type": "Organization",
      "name": "FlowShot",
      "url": "https://flowshot.app"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        {/* 1. Hero Section */}
        <Hero />

      {/* 2. Problem -> Solution */}
      <ProblemSolution />

      {/* 3. Features */}
      <Features />

      {/* 4. Who It's For */}
      <Audience />

      {/* 5. Founder Story */}
      <FounderStory />

      {/* 7. Pricing */}
      <PricingTeaser />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Final CTA + Footer */}
      <FinalCTA />
      </main>
    </>
  );
}
