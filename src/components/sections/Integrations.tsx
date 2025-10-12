'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Integrations = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Parallax effect for background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={sectionRef} id="integrations" className="py-24 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute w-full h-[140%] -top-[20%]"
        >
          <Image
            src="/images/integrations-background.jpg"
            alt="Integrations background"
            fill
            className="object-cover"
            quality={90}
            priority={false}
          />
        </motion.div>
        {/* White overlay with subtle blur */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
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
