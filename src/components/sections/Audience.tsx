'use client';

import { motion } from 'framer-motion';
import { Building2, User, Users } from 'lucide-react';
import { revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

const audiences = [
  {
    icon: Building2,
    title: 'Studios',
    description:
      'Multi-member teams managing 50+ projects a year. FlowShot replaces your project spreadsheet, client forms, and file sharing setup.',
  },
  {
    icon: User,
    title: 'Solo Creators',
    description:
      'One-person setup covering everything from shoot to delivery. All your tools in one place — no juggling 5 apps.',
  },
  {
    icon: Users,
    title: 'Freelancers',
    description:
      'Work with different teams on different projects. FlowShot keeps each collaboration organized without the chaos.',
  },
];

const Audience = () => {
  return (
    <section className="relative overflow-hidden bg-cream pt-24 pb-20 text-ink lg:pt-32 lg:pb-24">
      {/* Top hairline */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent"
      />

      <div className="container relative mx-auto max-w-5xl px-4">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="block h-px w-8 bg-amber/80" />
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
              Who it&apos;s for
            </span>
          </div>
          <h2
            className="font-heading text-4xl leading-[0.95] text-ink md:text-6xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Works for{' '}
            <span className="italic font-light text-amber">any setup.</span>
          </h2>
        </motion.div>

        {/* Audience cards — clean text cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-5 md:grid-cols-3"
        >
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <motion.article
                key={audience.title}
                variants={revealUp}
                className="group rounded-xl border border-ink/10 bg-ink/[0.03] p-7 transition-colors duration-300 hover:border-amber/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber/25 bg-amber/10 text-amber">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-heading text-xl font-medium text-ink">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {audience.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom hairline */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent"
      />
    </section>
  );
};

export default Audience;
