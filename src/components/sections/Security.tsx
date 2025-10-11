'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Lock, FileCheck, Eye } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Firebase Infrastructure',
    description: 'Built on Google Cloud with 99.9% uptime guarantee and enterprise-grade security.',
  },
  {
    icon: Lock,
    title: 'Role-based Access',
    description: 'Granular permissions control who sees what. Every action is logged and auditable.',
  },
  {
    icon: FileCheck,
    title: 'GDPR & CCPA Compliant',
    description: 'Data protection workflows built in. Your clients privacy is our priority.',
  },
  {
    icon: Eye,
    title: 'Activity Tracking',
    description: 'Full audit logs of project changes, file uploads, and team collaborations.',
  },
];

const Security = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} id="security" className="py-32 bg-gradient-to-br from-primary/[0.03] via-white to-accent/[0.02] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Privacy-first — without enterprise complexity
          </h2>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Simple Plain-English Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-base text-secondary/80 max-w-3xl mx-auto mb-8">
            We encrypt your work, never sell your data, and you can export anytime.
          </p>

          {/* Compliance Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              256-bit encryption
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              SOC 2 Type I
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              ISO 27001
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              GDPR-ready
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
