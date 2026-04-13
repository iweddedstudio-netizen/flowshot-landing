'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cloud,
  ClipboardList,
  PlayCircle,
  Share2,
  LayoutDashboard,
  Users,
  Package,
  Palette,
  type LucideIcon,
} from 'lucide-react';
import { revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

type Feature = {
  icon: LucideIcon;
  title: string;
  copy: string;
  highlight: string;
  isNew?: boolean;
};

const features: Feature[] = [
  {
    icon: Cloud,
    title: 'Auto-create project folders',
    copy: 'Connect Google Drive or Dropbox once. Every new project automatically gets a folder with your custom structure — subfolders for RAW, edits, delivery, and more. No more copy-paste-rename.',
    highlight: 'Works with Google Drive & Dropbox',
    isNew: true,
  },
  {
    icon: ClipboardList,
    title: 'Branded questionnaires',
    copy: 'Send beautiful, branded questionnaires to clients before the shoot. Wedding timelines, style preferences, shot lists — collected in one place. 5 industry templates included. Drag-and-drop builder for custom forms.',
    highlight: '5 preset templates: Wedding, Corporate, Real Estate, Portrait, Product',
    isNew: true,
  },
  {
    icon: PlayCircle,
    title: 'Frame-accurate video review',
    copy: 'Upload drafts, draw directly on frames, leave timestamped annotations. Your team and clients review in one place — no more "at around 2 minutes, the color looks off" messages.',
    highlight: 'Drawing tools, @mentions, multi-version comparison',
  },
  {
    icon: Share2,
    title: 'Cinematic delivery experience',
    copy: 'Deliver final films and galleries through a branded page with password protection, download controls, and expiration dates. Cover page with your branding, tab navigation, photo collections.',
    highlight: 'Password-protected, branded, with analytics',
  },
  {
    icon: LayoutDashboard,
    title: 'Visual project board',
    copy: 'Kanban board built for production. Drag projects through your pipeline — from inquiry to delivery. Photo, video, or linked projects. Custom fields, priorities, crew assignments.',
    highlight: 'Linked photo + video projects',
  },
  {
    icon: Users,
    title: 'Your whole crew, one workspace',
    copy: 'Invite editors, shooters, assistants with granular roles. Project chat keeps discussions in context. Calendar view with smart notifications for every deadline.',
    highlight: '7 roles, project-based chat, calendar sync',
  },
  {
    icon: Package,
    title: 'Offer presets — no setup',
    copy: 'Pre-configured packages, add-ons, and deliverables. Select a preset when creating a project — pricing, deliverables, and timeline auto-fill. Customize once, reuse forever.',
    highlight: 'Packages, add-ons & deliverables in one click',
  },
  {
    icon: Palette,
    title: 'Brand kit for your team',
    copy: 'Save style guides, color palettes, asset links, and brand rules. Editors and shooters stay aligned without asking "what font do we use?" every time.',
    highlight: 'Style guides, palettes & asset links',
  },
];

const Features = () => {
  const [active, setActive] = useState(0);
  const current = features[active]!;
  const Icon = current.icon;

  return (
    <section
      id="features"
      className="relative overflow-hidden border-b border-amber/10 bg-surface py-24 lg:py-32"
    >
      {/* Off-grid outline word */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[4vw] top-[6%] hidden select-none font-heading italic lg:block"
        style={{
          fontSize: 'clamp(10rem, 20vw, 22rem)',
          lineHeight: 0.85,
          letterSpacing: '-0.04em',
        }}
      >
        <span className="text-outline opacity-30">tools</span>
      </div>

      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-14 max-w-2xl lg:mb-16"
        >
          <motion.div variants={revealUp} className="mb-5 flex items-center gap-3">
            <span className="block h-px w-8 bg-amber/60" />
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
              Built for production
            </span>
          </motion.div>
          <motion.h2
            variants={revealUp}
            className="font-heading text-5xl leading-[0.95] text-foreground md:text-7xl lg:text-8xl"
            style={{ letterSpacing: '-0.02em' }}
          >
            Everything you need,
            <br />
            <span className="italic font-light text-amber">nothing you don&apos;t.</span>
          </motion.h2>
          <motion.p
            variants={revealUp}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Eight core tools that replace scattered apps, manual folder creation,
            and endless back-and-forth with clients and crew.
          </motion.p>
        </motion.div>

        {/* Tabs + detail panel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
        >
          {/* Tab strip — scrollable on mobile */}
          <div className="-mx-4 mb-10 overflow-x-auto px-4 lg:mx-0 lg:px-0">
            <div className="flex gap-2 lg:flex-wrap lg:gap-3">
              {features.map((feature, index) => {
                const TabIcon = feature.icon;
                const isActive = index === active;
                return (
                  <button
                    key={feature.title}
                    onClick={() => setActive(index)}
                    className={`group relative flex shrink-0 items-center gap-2.5 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 lg:px-5 lg:py-3 ${
                      isActive
                        ? 'border-amber/40 bg-amber/10 text-amber shadow-glowSm'
                        : 'border-amber/10 bg-surface-elevated text-muted-foreground hover:border-amber/25 hover:text-foreground'
                    }`}
                  >
                    <TabIcon className="h-4 w-4" strokeWidth={1.8} />
                    <span className="whitespace-nowrap">{feature.title}</span>
                    {feature.isNew && (
                      <span className="rounded-full border border-amber/40 bg-amber/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-amber">
                        New
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-amber/15 bg-surface-elevated p-8 lg:p-12"
            >
              {/* Glow effect */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber/5 blur-3xl"
              />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-amber/25 bg-amber/5 text-amber">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>
                    {current.isNew && (
                      <span className="rounded-full border border-amber/40 bg-amber/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-amber">
                        New
                      </span>
                    )}
                    <span className="font-heading text-2xl font-light text-amber/50">
                      {String(active + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-8 font-heading text-3xl font-medium leading-tight text-foreground lg:text-4xl">
                    {current.title}
                  </h3>

                  <p className="mt-5 max-w-[56ch] text-base leading-relaxed text-muted-foreground lg:text-lg">
                    {current.copy}
                  </p>

                  {/* Highlight badge */}
                  <div className="mt-8 inline-flex items-center gap-2.5 rounded-lg border border-amber/20 bg-amber/5 px-4 py-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-amber" />
                    <span className="text-sm font-medium text-amber">
                      {current.highlight}
                    </span>
                  </div>
                </div>

                {/* Feature number — large, desktop only */}
                <div
                  aria-hidden
                  className="hidden font-heading font-light text-amber/10 lg:block"
                  style={{ fontSize: '10rem', lineHeight: 0.8 }}
                >
                  {String(active + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
