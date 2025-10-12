'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useRef } from 'react';
import Image from 'next/image';

const cases = [
  {
    title: 'Studios',
    description: 'Multi-brand, multi-member. One place for bookings, pricing, and status tracking.',
  },
  {
    title: 'Freelancers',
    description: 'Ready-to-sell packages. Faster proposals. Less admin, more shooting.',
  },
  {
    title: 'Agencies',
    description: 'Collaborate with subcontractors and clients — share only what they need.',
  },
];

const UseCases = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={sectionRef} id="use-cases" className="py-32 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute w-full h-[140%] -top-[20%]"
        >
          <Image
            src="/images/camera-background.jpg"
            alt="Camera background"
            fill
            className="object-cover"
            quality={90}
            priority={false}
          />
        </motion.div>
        {/* White overlay with subtle blur */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Who it's for
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Built for studios and solo creators
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2, transition: { duration: 0.15 } }}
                className="h-full"
              >
                <Card className="h-full p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 border border-white/10 bg-white/90 backdrop-blur-sm">
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                    {useCase.title}
                  </h3>

                  <p className="text-base leading-relaxed text-secondary">
                    {useCase.description}
                  </p>
                </Card>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
