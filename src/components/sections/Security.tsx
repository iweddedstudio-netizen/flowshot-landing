'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Lock, FileCheck2, Activity } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Firebase Infrastructure',
    description: 'Built on Google Cloud with Firebase — secure hosting, fast Firestore database, and 99.9% uptime. Your projects, clients, and media files are stored safely in the same infrastructure trusted by millions of developers.',
  },
  {
    icon: Lock,
    title: 'Role-based Access',
    description: 'Add editors, assistants, or managers — each with tailored access. Every action (status change, file upload, approval) is logged for transparency and control.',
  },
  {
    icon: FileCheck2,
    title: 'GDPR & CCPA Ready',
    description: 'FlowShot runs on GDPR-compliant Google infrastructure. Your data never leaves Firebase — and never gets shared or sold.',
  },
  {
    icon: Activity,
    title: 'Activity Tracking',
    description: 'Automatic history for each project: changes, comments, file uploads, and review approvals — all in one timeline.',
  },
];

const badges = [
  '256-bit encryption',
  'SOC 2 Type I',
  'ISO 27001',
  'GDPR-ready',
];

const Security = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} id="security" className="py-20 sm:py-24 relative mx-auto max-w-7xl px-6">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Privacy-first — powered by Google Cloud
          </h2>
        </motion.div>

        {/* Security Features Grid - 2x2 on desktop */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl border border-slate-100 bg-white/70 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <p className="mx-auto max-w-3xl text-center text-slate-600">
            We encrypt your data, never sell it, and you can export anytime.
          </p>

          {/* Compliance Badges */}
          <ul className="mx-auto mt-4 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-500">
            {badges.map((badge) => (
              <li key={badge} className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>{badge}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
