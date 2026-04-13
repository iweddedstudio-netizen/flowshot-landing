'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import AnimatedMockup from '@/components/AnimatedMockup';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { revealUp, staggerContainer } from '@/lib/utils';

const APP_URL = 'https://app.flowshot.space';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92svh] items-center overflow-hidden border-b border-amber/10 bg-background pt-24 lg:pt-28"
    >
      {/* Background plate */}
      <Image
        src="/images/problem-background.jpg"
        alt=""
        fill
        className="object-cover opacity-[0.08] grayscale"
        priority
        sizes="100vw"
      />
      {/* Amber vignette */}
      <div className="pointer-events-none absolute inset-0 bg-heroVignette" />
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      {/* Film grain */}
      <div className="pointer-events-none absolute inset-0 grain-overlay" />

      {/* Off-grid giant numeral */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 top-16 hidden select-none font-heading italic lg:block"
        style={{
          fontSize: 'clamp(14rem, 22vw, 24rem)',
          lineHeight: 0.85,
          letterSpacing: '-0.05em',
        }}
      >
        <span className="text-outline opacity-60">26</span>
      </div>

      {/* Metadata side labels (editorial magazine style) */}
      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 select-none text-[10px] font-medium uppercase tracking-[0.32em] text-foreground/30 lg:block">
        Vol. 01 — Spring 2026
      </div>
      <div className="pointer-events-none absolute right-6 bottom-10 hidden select-none text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/30 lg:block">
        N°001 · flowshot.app
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-20 lg:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16"
        >
          {/* Left: copy */}
          <div>
            <motion.div variants={revealUp} className="mb-6 flex items-center gap-3">
              <span className="block h-px w-10 bg-amber/60" />
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
                For photo & video studios, solo creators, and freelancers
              </span>
            </motion.div>

            <motion.h1
              variants={revealUp}
              className="font-heading text-foreground"
              style={{
                fontSize: 'clamp(2.75rem, 6.8vw, 6.5rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
              }}
            >
              Manage every shoot from{' '}
              <span className="italic font-light text-amber">brief</span> to
              delivery.
            </motion.h1>

            <motion.p
              variants={revealUp}
              className="mt-10 max-w-[54ch] text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Replace scattered chats, spreadsheets, and cloud folders with{' '}
              <strong className="font-medium text-foreground">one platform</strong>.
              Projects, crew scheduling, client questionnaires, video review,
              and delivery — all connected.
            </motion.p>

            <motion.div
              variants={revealUp}
              className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                variant="glow"
                className="rounded-md px-8 py-6 text-base"
                asChild
              >
                <a href={APP_URL}>
                  Start Free Trial
                  <ArrowRight className="ml-1" />
                </a>
              </Button>
              <a
                href="#features"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-amber"
              >
                See the features
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Right: HeroMockupFrame */}
          <motion.div
            variants={revealUp}
            className="relative mx-auto w-full max-w-[640px] lg:max-w-none"
          >
            {/* Amber glow plate behind */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 blur-[120px] opacity-70"
              style={{
                background:
                  'radial-gradient(ellipse at center, hsl(var(--accent) / 0.35) 0%, transparent 60%)',
              }}
            />

            <div className="perspective-hero relative">
              <div className="tilt-hero relative rounded-2xl border border-amber/20 bg-gradient-to-br from-surface-elevated to-surface p-2 shadow-glow">
                {/* LIVE dot */}
                <div className="absolute -top-3 right-4 z-20 flex items-center gap-1.5 rounded-full border border-amber/30 bg-surface-elevated px-2.5 py-1">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber">
                    Live
                  </span>
                </div>

                <div className="overflow-hidden rounded-xl">
                  <AnimatedMockup />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#problem"
          variants={revealUp}
          initial="hidden"
          animate="visible"
          className="mt-16 hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground/40 transition-colors hover:text-amber lg:flex"
        >
          <span className="animate-bounce-slow">
            <ArrowDown className="h-4 w-4" />
          </span>
          Scroll
        </motion.a>
      </div>

    </section>
  );
};

export default Hero;
