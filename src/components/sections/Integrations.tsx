'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Integrations = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} id="integrations" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-6 leading-tight">
            Built for speed. Designed for creators.
          </h2>
          <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
            Real-time sync, integrated payments, and automation ready. Everything you need to focus on creating, not managing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
