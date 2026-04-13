'use client';

import {
  Calendar,
  MessageSquare,
  Package,
  Palette,
  Plus,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { revealUp, viewportOnce } from '@/lib/utils';

const scenes = [
  {
    id: 1,
    title: 'Preset Library',
    caption:
      'No setup. No spreadsheets. Just ready-made presets for every shoot.',
    icon: Package,
    pos: 'lg:left-[4%] lg:top-[0%]',
  },
  {
    id: 2,
    title: 'Create Project',
    caption: 'Photo, video, or both — FlowShot adapts to your setup.',
    icon: Plus,
    pos: 'lg:left-[26%] lg:top-[18%]',
  },
  {
    id: 3,
    title: 'Collaborate & Review',
    caption:
      'Preview videos, leave timeline comments, and update status in real time.',
    icon: MessageSquare,
    pos: 'lg:left-[48%] lg:top-[38%]',
  },
  {
    id: 4,
    title: 'Schedule & Notify',
    caption: 'Calendar view with smart notifications for every deadline.',
    icon: Calendar,
    pos: 'lg:left-[50%] lg:top-[62%]',
  },
  {
    id: 5,
    title: 'Keep your team in sync',
    caption:
      'Save your style guides, asset links, and brand rules — so your editors and shooters stay aligned.',
    icon: Palette,
    pos: 'lg:left-[28%] lg:top-[82%]',
  },
];

const ProjectJourney = () => {
  return (
    <section
      id="journey"
      className="relative overflow-hidden border-b border-amber/10 bg-surface py-32 lg:py-40"
    >
      {/* Background giant outline word */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[6vw] top-[6%] hidden select-none font-heading italic lg:block"
        style={{
          fontSize: 'clamp(10rem, 20vw, 22rem)',
          lineHeight: 0.85,
          letterSpacing: '-0.04em',
        }}
      >
        <span className="text-outline opacity-30">flow</span>
      </div>

      <div className="container relative mx-auto max-w-7xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
          className="mb-20 max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="block h-px w-8 bg-amber/60" />
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
              Workflow
            </span>
          </div>
          <h2 className="font-heading text-4xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            See how{' '}
            <span className="italic font-light text-amber">FlowShot</span> works
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Complete workflow — from creating a project to delivering the final result.
          </p>
        </motion.div>

        {/* Desktop: diagonal zigzag */}
        <div className="relative hidden lg:block" style={{ height: '1400px' }}>
          {/* Diagonal SVG path */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1000 1400"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="journey-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                <stop offset="20%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
                <stop offset="80%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 80,60 Q 300,220 360,320 T 620,560 Q 720,760 600,900 T 320,1200"
              fill="none"
              stroke="url(#journey-gradient)"
              strokeWidth="1.5"
              strokeDasharray="4 8"
            />
          </svg>

          {scenes.map((scene, index) => {
            const Icon = scene.icon;
            return (
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute w-[340px] ${scene.pos}`}
              >
                <div className="group rounded-2xl border border-amber/15 bg-surface-elevated p-8 shadow-glowSm transition-all duration-300 hover:border-amber/35">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber/25 bg-amber/5 text-amber">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <span className="font-heading text-2xl font-light text-amber">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-medium leading-tight text-foreground">
                    {scene.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {scene.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: simple vertical stack */}
        <div className="lg:hidden">
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber/0 via-amber/40 to-amber/0"
            />
            <ol className="space-y-12">
              {scenes.map((scene, index) => {
                const Icon = scene.icon;
                return (
                  <motion.li
                    key={scene.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 0.6 }}
                    className="relative pl-20"
                  >
                    <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border border-amber/30 bg-surface-elevated">
                      <span className="font-heading text-base text-amber">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber/20 bg-amber/5 text-amber">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-4 font-heading text-2xl font-medium text-foreground">
                      {scene.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {scene.caption}
                    </p>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectJourney;
