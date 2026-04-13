'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import WaitlistModal from '@/components/modals/WaitlistModal';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

const bullets = [
  "We're building FlowShot together with creators like you.",
  'All features unlocked — no limits, no credit card.',
  'Donate anytime if you want to support the project.',
  'Fair, transparent pricing will be announced later.',
];

const PricingTeaser = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-b border-amber/10 bg-graphite py-32 lg:py-48"
    >
      {/* Off-grid outline FREE */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[6vw] top-[12%] hidden select-none font-heading italic lg:block"
        style={{
          fontSize: 'clamp(14rem, 28vw, 30rem)',
          lineHeight: 0.85,
          letterSpacing: '-0.04em',
        }}
      >
        <span className="text-outline opacity-25">free</span>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.14),transparent_70%)]"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="container relative mx-auto max-w-4xl px-4 text-center"
      >
        <motion.div variants={revealUp} className="mb-6 flex items-center justify-center gap-3">
          <span className="block h-px w-8 bg-amber/60" />
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
            Pricing
          </span>
          <span className="block h-px w-8 bg-amber/60" />
        </motion.div>

        <motion.h2
          variants={revealUp}
          className="font-heading font-medium text-foreground"
          style={{
            fontSize: 'clamp(3rem, 9vw, 8rem)',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
          }}
        >
          Free during <span className="italic font-light text-amber">beta.</span>
        </motion.h2>

        <motion.p
          variants={revealUp}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          No credit card. No limits. No tricks.
        </motion.p>

        <motion.ul
          variants={revealUp}
          className="mx-auto mt-14 grid max-w-2xl gap-4 text-left md:grid-cols-2"
        >
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber/30 bg-amber/10 text-amber">
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <span className="text-base text-muted-foreground">{bullet}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div variants={revealUp} className="mt-14">
          <Button
            size="lg"
            variant="glow"
            className="rounded-md px-10 py-7 text-base"
            onClick={() => setIsWaitlistModalOpen(true)}
          >
            Get started free
          </Button>
          <p className="mt-6 text-sm text-foreground/50">
            No credit card required · Cancel anytime · Full data export
          </p>
        </motion.div>
      </motion.div>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </section>
  );
};

export default PricingTeaser;
