'use client';

import {
  CheckSquare,
  Download,
  MessageSquare,
  Share2,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  comingSoon?: boolean;
};

const features: Feature[] = [
  {
    icon: MessageSquare,
    title: 'Project-based Chat',
    description:
      'Each project has its own chat — no more scrolling through endless messages.',
  },
  {
    icon: Share2,
    title: 'Client Portal',
    description:
      'Your clients can track progress, sign contracts, send feedback, and make payments — all through one secure link.',
    comingSoon: true,
  },
  {
    icon: Zap,
    title: 'Priority Indicators',
    description:
      'Visual priority system keeps everyone aligned on what matters.',
  },
  {
    icon: CheckSquare,
    title: 'Revision Checklists',
    description:
      'Track changes with interactive checklists. Never miss feedback.',
  },
  {
    icon: Download,
    title: 'Delivery Page',
    description:
      'Clients preview and download films directly — no messy cloud links.',
  },
  {
    icon: Users,
    title: 'Project Page',
    description:
      'A clear space for your workflow — info, clients, discussions, and the day-of plan.',
  },
];

const StandoutFeatures = () => {
  return (
    <section
      id="standout-features"
      className="relative overflow-hidden border-b border-amber/10 bg-background py-32 lg:py-40"
    >
      {/* Off-grid giant numeral */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[4vw] top-[8%] hidden select-none font-heading italic lg:block"
        style={{
          fontSize: 'clamp(12rem, 22vw, 22rem)',
          lineHeight: 0.85,
          letterSpacing: '-0.04em',
        }}
      >
        <span className="text-outline opacity-30">tools</span>
      </div>

      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Sticky-scroll layout */}
        <div className="relative grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
          {/* Left: sticky */}
          <div className="lg:sticky lg:top-24 lg:self-start lg:pt-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.div variants={revealUp} className="mb-5 flex items-center gap-3">
                <span className="block h-px w-8 bg-amber/60" />
                <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
                  Based on real experience
                </span>
              </motion.div>
              <motion.h2
                variants={revealUp}
                className="font-heading text-5xl leading-[0.95] text-foreground md:text-7xl lg:text-8xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Tools that
                <br />
                <span className="italic font-light text-amber">make sense.</span>
              </motion.h2>
              <motion.p
                variants={revealUp}
                className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground"
              >
                Built to simplify how studios and creators work. Scroll to explore
                what&apos;s inside.
              </motion.p>
              <motion.div
                variants={revealUp}
                className="mt-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground/40"
              >
                <span className="animate-bounce-slow">↓</span>
                <span>Keep scrolling</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: scroll stack */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  variants={revealUp}
                  className={`group relative overflow-hidden rounded-2xl border border-amber/15 bg-surface p-8 transition-all duration-500 hover:border-amber/35 hover:shadow-glowSm lg:p-10 ${
                    index % 2 === 1 ? 'lg:ml-12' : ''
                  }`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-amber/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber/25 bg-amber/5 text-amber">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <div className="flex items-center gap-3">
                        {feature.comingSoon && (
                          <span className="rounded-full border border-amber/30 bg-amber/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber">
                            Coming soon
                          </span>
                        )}
                        <span className="font-heading text-2xl font-light text-amber/60">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-8 font-heading text-3xl font-medium leading-tight text-foreground lg:text-4xl">
                      {feature.title}
                    </h3>
                    <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* Bleed showcase: large screenshot panel bleeding edge-to-edge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-32 lg:mt-48"
        >
          <div className="relative -mx-4 overflow-hidden rounded-3xl border border-amber/20 bg-surface-elevated lg:mx-[-8%]">
            <div className="relative aspect-[21/9]">
              <Image
                src="/images/Screenshot_2.png"
                alt="FlowShot in use"
                fill
                className="object-cover"
                style={{ filter: 'brightness(0.9) contrast(1.05)' }}
                sizes="100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
                <div className="max-w-2xl">
                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
                    The full picture
                  </span>
                  <h3 className="mt-4 font-heading text-3xl font-medium leading-tight text-foreground md:text-5xl">
                    Everything you need, <span className="italic font-light text-amber">in one place.</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StandoutFeatures;
