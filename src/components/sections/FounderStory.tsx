'use client';

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
      className="relative overflow-hidden bg-cream py-24 text-ink lg:py-32"
    >
      {/* Top hairline */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />

      <div className="container relative mx-auto max-w-3xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={revealUp}>
            <div className="mb-5 flex items-center gap-3">
              <span className="block h-px w-8 bg-amber/80" />
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
                Our story
              </span>
            </div>

            <h2
              className="font-heading text-4xl leading-[0.95] text-ink md:text-6xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Hi, I&apos;m Alex —{' '}
              <span className="italic font-light text-amber">a creator,</span>{' '}
              just like you.
            </h2>
          </motion.div>

          <motion.blockquote variants={revealUp} className="relative mt-10 border-l-2 border-amber pl-8">
            <p className="font-heading text-xl font-light italic leading-snug text-ink md:text-2xl">
              I spent 10 years editing wedding films and managing projects in
              WhatsApp groups and Google Sheets. Every tool I tried was built
              for tech companies, not for us. So I built the one I always wanted.
            </p>
          </motion.blockquote>

          <motion.div variants={revealUp} className="mt-8 space-y-4 text-base leading-relaxed text-ink-muted">
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
          </motion.div>

          <motion.div variants={revealUp} className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/15 pt-8">
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
          </motion.div>

          {/* Trial teaser */}
          <motion.div variants={revealUp} className="mt-10 rounded-xl border border-ink/10 bg-ink/[0.03] px-6 py-5">
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
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom hairline */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
    </section>
  );
};

export default FounderStory;
