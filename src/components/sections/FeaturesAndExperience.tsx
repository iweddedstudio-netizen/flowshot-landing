'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

const pillars = [
  {
    number: '01',
    title: 'Unified Workspace',
    description:
      'One place for your entire team — editors, shooters, and managers. Everyone sees what matters, nothing gets lost.',
  },
  {
    number: '02',
    title: 'Clear Process',
    description:
      'Structure that fits creative work. Statuses, checklists, and notes keep every project moving — without chaos or missed steps.',
  },
  {
    number: '03',
    title: 'Smart Automation',
    description:
      'Built to remove manual work. Automatic updates, reminders, and client syncs let you focus on what really matters — your craft.',
  },
];

const audiences = [
  {
    title: 'Studios',
    subtitle: 'Multi-member teams',
    image: '/images/camera-background.jpg',
  },
  {
    title: 'Solo Creators',
    subtitle: 'One-person setup',
    image: '/images/integrations-background.jpg',
  },
  {
    title: 'Freelancers',
    subtitle: 'Work with others remotely',
    image: null,
  },
];

const warmGrade = 'sepia(0.18) saturate(1.15) hue-rotate(-8deg) brightness(0.9)';

const FeaturesAndExperience = () => {
  return (
    <section className="relative overflow-hidden bg-cream py-32 text-ink lg:py-48">
      {/* Top hairline separator from dark section */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />

      {/* Off-grid outline numeral (ink stroke) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[6vw] top-[10%] hidden select-none font-heading italic lg:block"
        style={{
          fontSize: 'clamp(14rem, 28vw, 32rem)',
          lineHeight: 0.85,
          letterSpacing: '-0.04em',
        }}
      >
        <span className="text-outline-ink opacity-40">03</span>
      </div>

      <div className="container relative mx-auto max-w-6xl px-4">
        {/* Header — asymmetric right-aligned */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-20 max-w-2xl lg:ml-auto lg:mb-28"
        >
          <motion.div variants={revealUp} className="mb-5 flex items-center gap-3">
            <span className="block h-px w-8 bg-amber/80" />
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
              Foundations
            </span>
          </motion.div>
          <motion.h2
            variants={revealUp}
            className="font-heading text-5xl leading-[0.95] text-ink md:text-7xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            The three foundations of{' '}
            <span className="italic font-light text-amber">FlowShot.</span>
          </motion.h2>
        </motion.div>

        {/* Pillars — alternating offsets, ink dividers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-16 lg:grid-cols-3 lg:gap-0"
        >
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.number}
              variants={revealUp}
              className={`relative px-0 py-6 lg:px-12 ${
                index === 1 ? 'lg:mt-24' : ''
              } ${index === 2 ? 'lg:mt-48' : ''} ${
                index > 0 ? 'lg:border-l lg:border-ink/15' : ''
              }`}
            >
              <div
                className="font-heading font-light leading-none text-amber"
                style={{ fontSize: 'clamp(5rem, 11vw, 11rem)' }}
              >
                {pillar.number}
              </div>
              <h3 className="mt-8 font-heading text-3xl font-medium leading-tight text-ink">
                {pillar.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Pull-quote on cream */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-32 max-w-3xl text-center font-heading text-3xl italic leading-snug text-ink/80 md:text-4xl"
        >
          Built for teams who want to{' '}
          <span className="text-amber">move fast</span> and{' '}
          <span className="text-amber">stay organized.</span>
        </motion.p>

        {/* Separator */}
        <div className="my-24 h-px bg-ink/15 lg:my-32" />

        {/* Who it's for */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="block h-px w-8 bg-amber/80" />
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
              Who it&apos;s for
            </span>
          </div>
          <h2
            className="font-heading text-5xl leading-[0.95] text-ink md:text-7xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Works for{' '}
            <span className="italic font-light text-amber">any setup.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            Every creator&apos;s feedback shapes what FlowShot becomes next.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-5 md:grid-cols-3"
        >
          {audiences.map((audience, index) => (
            <motion.article
              key={audience.title}
              variants={revealUp}
              className={`group relative aspect-[3/4] overflow-hidden rounded-2xl border border-ink/10 bg-gradient-to-br from-amber/20 to-cream-soft ${
                index === 1 ? 'md:mt-12' : ''
              } ${index === 2 ? 'md:mt-6' : ''}`}
            >
              {audience.image ? (
                <Image
                  src={audience.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: warmGrade }}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.4),transparent_70%)]" />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="mb-3 h-px w-10 bg-amber" />
                <h3 className="font-heading text-3xl font-medium text-cream">
                  {audience.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-cream/70">
                  {audience.subtitle}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Bottom hairline separator */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
    </section>
  );
};

export default FeaturesAndExperience;
