'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { RefreshCw, CreditCard, Zap } from 'lucide-react';

const integrationFeatures = [
  {
    icon: RefreshCw,
    title: 'Real-time sync',
    description: 'Changes appear instantly across devices and team members.',
  },
  {
    icon: CreditCard,
    title: 'Payments & billing',
    description: 'Send invoices, track revenue, and record expenses per project.',
  },
  {
    icon: Zap,
    title: 'API & Webhooks',
    description: 'Trigger automations: contract signed → project & checklist created.',
  },
];

const Integrations = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} id="integrations" className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Fast, reliable, and built for growth
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Powered by a modern tech stack — Firebase, React, and TypeScript.
          </p>
        </motion.div>

        {/* Subtle Divider */}
        <div className="w-full max-w-5xl mx-auto mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Integration Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {integrationFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] rounded-2xl p-8 border border-primary/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
