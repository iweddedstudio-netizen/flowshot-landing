'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const pillars = [
  {
    number: '01',
    title: 'Sales-ready Catalog',
    description: 'Prebuilt templates and drag-and-drop packages. Adjust pricing once, reuse everywhere.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    number: '02',
    title: 'Operational Control',
    description: 'Clear statuses, checklists, and audit logs keep projects moving.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    number: '03',
    title: 'Insights & Automation',
    description: 'Learn from each job. Auto follow-ups. Fewer misses, more margin.',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
  },
];

const FeatureDeepDive = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} id="features" className="py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm md:text-base font-bold tracking-[0.2em] text-primary uppercase mb-6">
              WHY FLOWSHOT
            </h3>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
            Three pillars that power
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              modern creative teams
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div
                  className={`relative h-full min-h-[280px] md:min-h-[320px] bg-gradient-to-br ${pillar.bgGradient} rounded-3xl p-8 md:p-12 border border-gray-200 overflow-hidden shadow-lg`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                  {/* Number badge */}
                  <div className="absolute top-8 right-8">
                    {/* Static shadow */}
                    <div className="absolute inset-0 w-14 h-14 rounded-full shadow-lg" />
                    {/* Rotating circle */}
                    <div className="relative w-14 h-14 rounded-full bg-white flex items-center justify-center text-gray-900 font-bold text-base transition-transform duration-700 ease-out group-hover:rotate-[360deg]">
                      {pillar.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pr-16">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-lg leading-relaxed text-secondary">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Glow effect on hover */}
                  <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${pillar.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>
              </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-secondary">
            Built for teams who want to{' '}
            <span className="font-semibold text-primary">move fast</span> and{' '}
            <span className="font-semibold text-primary">stay organized</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureDeepDive;
