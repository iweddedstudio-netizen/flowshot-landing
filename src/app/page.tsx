import Hero from '@/components/sections/Hero';
import ProblemSolution from '@/components/sections/ProblemSolution';
import ProjectJourney from '@/components/sections/ProjectJourney';
import UseCases from '@/components/sections/UseCases';
import StandoutFeatures from '@/components/sections/StandoutFeatures';
import FeatureDeepDive from '@/components/sections/FeatureDeepDive';
import Integrations from '@/components/sections/Integrations';
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
    "description": "All-in-one project management for video creators. Manage offers, projects, teams, and clients in one visual platform.",
    "url": "https://flowshot.app",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "100"
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

      {/* 3. Project Journey - Interactive horizontal scroll experience */}
      <ProjectJourney />

      {/* 4. Use Cases */}
      <UseCases />

      {/* 5. Standout Features */}
      <StandoutFeatures />

      {/* 6. Feature Deep Dive */}
      <FeatureDeepDive />

      {/* 7. Integrations */}
      <Integrations />

      {/* 8. Founder Story */}
      <FounderStory />

      {/* 9. Pricing Teaser */}
      <PricingTeaser />

      {/* 10. FAQ */}
      <FAQ />

      {/* 11. Final CTA */}
      <FinalCTA />

        {/* Footer */}
        <footer className="py-12 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm opacity-70">© 2025 FlowShot. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
