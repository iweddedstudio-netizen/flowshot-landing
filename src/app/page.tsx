import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import ProblemSolution from '@/components/sections/ProblemSolution';
import ProjectJourney from '@/components/sections/ProjectJourney';
import StandoutFeatures from '@/components/sections/StandoutFeatures';
import FeaturesAndExperience from '@/components/sections/FeaturesAndExperience';
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
    "description": "All-in-one project management for video creators. Manage offers, projects, teams, and clients in one visual platform.",
    "url": "https://flowshot.app",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free during beta",
      "availability": "https://schema.org/InStock"
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

      {/* 1.5 Marquee */}
      <Marquee />

      {/* 2. Problem -> Solution */}
      <ProblemSolution />

      {/* 3. Project Journey */}
      <ProjectJourney />

      {/* 4. Standout Features */}
      <StandoutFeatures />

      {/* 5. Foundations + Who It's For */}
      <FeaturesAndExperience />

      {/* 6. Founder Story */}
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
