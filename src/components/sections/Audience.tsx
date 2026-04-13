'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

const audiences = [
  {
    title: 'Studios',
    description:
      'Multi-member teams managing 50+ projects a year. FlowShot replaces your project spreadsheet, client forms, and file sharing setup.',
    image: '/images/camera-background.jpg',
  },
  {
    title: 'Solo Creators',
    description:
      'One-person setup covering everything from shoot to delivery. All your tools in one place — no juggling 5 apps.',
    image: '/images/integrations-background.jpg',
  },
  {
    title: 'Freelancers',
    description:
      'Work with different teams on different projects. FlowShot keeps each collaboration organized without the chaos.',
    image: null,
  },
];

const warmGrade =
  'sepia(0.18) saturate(1.15) hue-rotate(-8deg) brightness(0.9)';

const Audience = () => {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-20 text-ink lg:pt-48 lg:pb-28">
      {/* Top hairline */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent"
      />

      {/* Off-grid outline numeral */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[6vw] top-[10%] hidden select-none font-heading italic lg:block"
        style={{
          fontSize: 'clamp(14rem, 28vw, 32rem)',
          lineHeight: 0.85,
          letterSpacing: '-0.04em',
        }}
      >
        <span className="text-outline-ink opacity-40">for</span>
      </div>

      <div className="container relative mx-auto max-w-6xl px-4">
        {/* Section header */}
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
            Whether you&apos;re a one-person crew or a full studio — FlowShot
            adapts to how you work.
          </p>
        </motion.div>

        {/* Audience cards — staggered layout with photos */}
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
                <p className="mt-3 text-sm leading-relaxed text-cream/80">
                  {audience.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Pull-quote */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 max-w-3xl text-center font-heading text-3xl italic leading-snug text-ink/80 md:text-4xl"
        >
          Built for teams who want to{' '}
          <span className="text-amber">move fast</span> and{' '}
          <span className="text-amber">stay organized.</span>
        </motion.p>
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
