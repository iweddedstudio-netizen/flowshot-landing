'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const pillars = [
  {
    number: '01',
    title: 'Unified Workspace',
    description: 'One place for your entire team — editors, shooters, and managers. Everyone sees what matters, nothing gets lost.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    number: '02',
    title: 'Clear Process',
    description: 'Structure that fits creative work. Statuses, checklists, and notes keep every project moving — without chaos or missed steps.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    number: '03',
    title: 'Smart Automation',
    description: 'Built to remove manual work. Automatic updates, reminders, and client syncs let you focus on what really matters — your craft.',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
  },
];

const FeatureDeepDive = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  return (
    <section ref={sectionRef} id="features" className="py-12 md:py-20 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
            The three foundations of{' '}
            <span className="font-black bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              FlowShot
            </span>
          </h2>
        </motion.div>

        {/* Clean minimal blocks */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Large background number */}
                <div className="absolute -top-4 -left-2 select-none pointer-events-none">
                  <span
                    className={`text-[120px] md:text-[140px] font-black leading-none bg-gradient-to-br ${pillar.gradient} bg-clip-text text-transparent opacity-[0.03]`}
                  >
                    {pillar.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 pt-16">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base leading-relaxed text-secondary">
                    {pillar.description}
                  </p>
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
            <span className="font-bold text-foreground">move fast</span> and{' '}
            <span className="font-bold text-foreground">stay organized</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureDeepDive;
