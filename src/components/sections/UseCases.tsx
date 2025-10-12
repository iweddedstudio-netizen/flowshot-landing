'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const pills = [
  {
    icon: '🏢',
    title: 'Studios',
    subtitle: 'multi-member teams',
  },
  {
    icon: '👤',
    title: 'Solo Creators',
    subtitle: 'one-person setup',
  },
  {
    icon: '🤝',
    title: 'Freelancers',
    subtitle: 'work with others remotely',
  },
];

const UseCases = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="use-cases" className="py-32 relative overflow-hidden">
      {/* Minimal gradient background with soft blurred spots */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-purple-50/30 via-pink-50/20 to-white/50">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Who it's for
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Works for any setup
          </h2>
        </motion.div>

        {/* Pills Container */}
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
          {pills.map((pill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="relative px-8 py-5 rounded-full bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 border border-purple-200/50 transition-all duration-300">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/0 via-pink-400/0 to-purple-400/0 group-hover:from-purple-400/20 group-hover:via-pink-400/20 group-hover:to-purple-400/20 blur-xl transition-all duration-300" />

                {/* Content */}
                <div className="relative flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label={pill.title}>
                    {pill.icon}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                    <span className="text-lg font-semibold text-foreground whitespace-nowrap">
                      {pill.title}
                    </span>
                    <span className="text-sm text-muted-foreground whitespace-nowrap hidden sm:inline">
                      — {pill.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
