'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

const stats = [
  { number: '10+', label: 'Years in production' },
  { number: '3,000+', label: 'Weddings edited' },
  { number: '100%', label: 'Self-funded' },
];

const FounderStory = () => {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-cream py-32 text-ink lg:py-48"
    >
      {/* Top hairline */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />

      {/* Off-grid "alex" outline */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[2vw] bottom-[6%] hidden select-none font-heading italic lg:block"
        style={{
          fontSize: 'clamp(10rem, 20vw, 22rem)',
          lineHeight: 0.85,
          letterSpacing: '-0.04em',
        }}
      >
        <span className="text-outline-ink opacity-35">alex</span>
      </div>

      <div className="container relative mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-0"
        >
          {/* Copy column */}
          <motion.div variants={revealUp} className="flex flex-col justify-center lg:pr-12">
            <div className="mb-5 flex items-center gap-3">
              <span className="block h-px w-8 bg-amber/80" />
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
                Our story
              </span>
            </div>

            <h2
              className="font-heading text-5xl leading-[0.95] text-ink md:text-6xl lg:text-7xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Hi, I&apos;m Alex —
              <br />
              <span className="italic font-light text-amber">a creator,</span>{' '}
              just like you.
            </h2>

            <blockquote className="relative mt-12 border-l-2 border-amber pl-8">
              <p className="font-heading text-2xl font-light italic leading-snug text-ink md:text-3xl">
                I spent 10 years editing wedding films and managing projects in
                WhatsApp groups and Google Sheets. Every tool I tried was built
                for tech companies, not for us. So I built the one I always wanted.
              </p>
            </blockquote>

            <div className="mt-10 space-y-4 text-base leading-relaxed text-ink-muted md:text-lg">
              <p>
                After editing 3,000+ weddings and working with dozens of
                production teams, I knew exactly what a real workspace for
                creators should look like.
              </p>
              <p>
                <strong className="font-medium text-ink">FlowShot</strong> is
                that workspace — built from real experience, not assumptions.
                Projects, team, clients, reviews, and delivery — finally
                connected in one place.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-ink/15 pt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-3xl font-medium text-amber md:text-4xl">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-ink-muted md:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof / trial teaser */}
            <div className="mt-10 rounded-xl border border-ink/10 bg-ink/[0.03] px-6 py-5">
              <p className="text-sm leading-relaxed text-ink-muted">
                <span className="font-medium text-ink">Start your 14-day free trial.</span>{' '}
                Full access to all features — no credit card required.{' '}
                <a
                  href="https://app.flowshot.space"
                  className="font-medium text-amber underline underline-offset-2 transition-colors hover:text-amber/80"
                >
                  Try FlowShot free&nbsp;&rarr;
                </a>
              </p>
            </div>
          </motion.div>

          {/* Image bleeding off right edge */}
          <motion.div
            variants={revealUp}
            className="relative lg:mr-[-12%] lg:mt-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10 shadow-2xl">
              <Image
                src="/images/Screenshot_1.png"
                alt="Alex Ohnevskyi, Founder"
                fill
                className="object-cover"
                style={{
                  filter:
                    'sepia(0.2) saturate(1.1) hue-rotate(-6deg) brightness(0.95) contrast(1.05)',
                }}
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>

            {/* Floating badge overlapping image */}
            <div className="absolute -left-4 bottom-8 hidden rounded-xl border border-ink/10 bg-cream px-5 py-3 shadow-xl lg:block">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-amber animate-amber-pulse" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink">
                  Founder & Creative Director
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom hairline */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
    </section>
  );
};

export default FounderStory;
