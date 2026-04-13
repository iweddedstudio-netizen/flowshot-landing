'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { revealUp, staggerContainer } from '@/lib/utils';

const APP_URL = 'https://app.flowshot.space';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Subtle gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.08),transparent_60%)]"
      />

      <div className="container relative mx-auto max-w-5xl px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          {/* Tagline */}
          <motion.div variants={revealUp} className="mb-5 flex items-center justify-center gap-3">
            <span className="rounded-full border border-border/60 bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground">
              For photo & video studios, solo creators, and freelancers
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={revealUp}
            className="mx-auto max-w-3xl font-heading text-4xl font-medium leading-[1.05] text-foreground md:text-6xl lg:text-7xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Manage every shoot from{' '}
            <span className="italic font-light text-amber">brief</span> to{' '}
            <span className="italic font-light text-amber">delivery.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={revealUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Replace scattered chats, spreadsheets, and cloud folders with{' '}
            <strong className="font-medium text-foreground">one platform</strong>.
            Projects, crew, clients, video review, and delivery — all connected.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={revealUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              variant="glow"
              className="rounded-md px-8 py-6 text-base"
              asChild
            >
              <a href={APP_URL}>
                Start Free Trial
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </a>
          </motion.div>

          {/* Video placeholder */}
          <motion.div
            variants={revealUp}
            className="mx-auto mt-14 max-w-3xl"
          >
            <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl border border-border/40 bg-surface-elevated shadow-lg transition-shadow hover:shadow-xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber text-background shadow-lg transition-transform group-hover:scale-110">
                  <Play className="h-7 w-7 ml-1" fill="currentColor" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  See FlowShot in action — 2 min
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
