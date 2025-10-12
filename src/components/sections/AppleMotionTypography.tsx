'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const AppleMotionTypography = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [showButton, setShowButton] = useState(false);

  const textLines = [
    "Some teams still run on spreadsheets.",
    "Some tried to build systems, but never finished.",
    "Some already have workflows — but they could flow better.",
    "",
    "Wherever you are — FlowShot meets you there.",
    "Ready out of the box.",
    "Built for real work."
  ];

  useEffect(() => {
    if (isInView) {
      // Show button after all lines have animated (7 lines * 0.7s delay + 0.8s animation)
      const timer = setTimeout(() => setShowButton(true), 7 * 700 + 800);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#project-journey');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background via-primary/[0.02] to-background px-4 py-20"
    >
      <div className="max-w-5xl mx-auto text-center space-y-4">
        {textLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 0.8,
              delay: index * 0.7,
              ease: [0.25, 0.1, 0.25, 1] // Apple-like easing
            }}
            className={`font-heading ${
              line === ""
                ? "h-8"
                : "text-[34px] md:text-[64px] leading-tight font-semibold text-foreground"
            }`}
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* See how it works button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={showButton ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={scrollToNext}
        className="mt-16 flex items-center gap-2 text-base text-secondary hover:text-foreground transition-colors group"
      >
        <span>See how it works</span>
        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
      </motion.button>
    </section>
  );
};

export default AppleMotionTypography;
