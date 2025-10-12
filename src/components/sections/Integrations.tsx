'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Integrations = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  return (
    <section ref={sectionRef} id="integrations" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative blurs - same as FeatureDeepDive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-6 leading-tight lg:whitespace-nowrap">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">10 years</span> in production — and still learning.
          </h2>
          <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
            Every creator's feedback shapes what FlowShot becomes next.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
