'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const FounderStory = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section ref={sectionRef} id="story" className="py-16 md:py-24 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-cyan-950/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-950/25 via-transparent to-blue-950/20" />

      {/* Static gradient orbs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent blur-3xl -top-40 -left-40" />
        <div className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-500/25 via-pink-500/15 to-transparent blur-3xl top-20 right-0" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center justify-items-center">
          {/* Content Column */}
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            animate={isMobile ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : {})}
            transition={isMobile ? {} : { duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
              OUR STORY
            </h2>

            <p className="text-xl md:text-2xl font-bold text-white mb-6 leading-relaxed">
              Hi, I&apos;m Alex — a creator, just like you.
            </p>

            <div className="text-lg leading-relaxed text-gray-300 space-y-4">
              <p>
                After 10 years in the industry,
              </p>
              <p>
                I realized that creative people need tools made by creatives — not by tech companies.
              </p>
              <p>
                That&apos;s why we built <strong className="text-white font-semibold">FlowShot</strong> — a space designed for real production life,
                where everything finally feels connected.
              </p>
            </div>

            {/* Key Points */}
            <div className="flex flex-wrap gap-4 mt-10">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 rounded-full px-4 py-2 border border-cyan-500/30">
                <span className="text-sm font-semibold text-cyan-300">10+ years experience</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2 border border-purple-500/30">
                <span className="text-sm font-semibold text-purple-300">3,000+ weddings edited worldwide</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-500/20 rounded-full px-4 py-2 border border-green-500/30">
                <span className="text-sm font-semibold text-green-300">Built by creators, trusted by pros</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            animate={isMobile ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : {})}
            transition={isMobile ? {} : { duration: 0.6, delay: 0.2 }}
            className="relative max-w-xs mx-auto lg:mx-0 hidden lg:block"
          >
            {/* Founder Photo */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-gray-900 shadow-2xl">
                <Image
                  src="/images/Screenshot_1.png"
                  alt="Alex Ohnevskyi - Founder & Creative Director"
                  fill
                  className="object-cover"
                  style={{
                    maskImage: 'radial-gradient(ellipse 90% 90% at 50% 40%, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 40%, black 40%, transparent 100%)'
                  }}
                  sizes="(max-width: 1024px) 0px, 320px"
                  priority={false}
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
