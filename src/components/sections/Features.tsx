'use client';

import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  PlayCircle,
  ClipboardList,
  Share2,
  Cloud,
  Users,
  Pencil,
  type LucideIcon,
} from 'lucide-react';
import { revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
};

const features: Feature[] = [
  {
    icon: LayoutDashboard,
    title: 'Visual project board',
    description:
      'Kanban board built for production. Drag projects through your pipeline — from inquiry to delivery. Custom fields, priorities, linked photo + video projects.',
  },
  {
    icon: PlayCircle,
    title: 'Video review & annotations',
    description:
      'Upload drafts, draw directly on frames, leave timestamped comments. Your team and clients review in one place. No more "at around 2 minutes" messages.',
  },
  {
    icon: ClipboardList,
    title: 'Client questionnaires',
    description:
      'Send branded questionnaires before the shoot. 5 industry templates included. Drag-and-drop builder for custom forms. Track responses in real time.',
    badge: 'New',
  },
  {
    icon: Share2,
    title: 'Branded delivery pages',
    description:
      'Deliver final films and galleries through a branded page with password protection, download controls, and expiration dates. Your brand, your experience.',
  },
  {
    icon: Cloud,
    title: 'Auto cloud folder sync',
    description:
      'Connect Google Drive or Dropbox once. Every new project automatically gets a folder with your custom structure — RAW, edits, delivery. No more copy-paste.',
    badge: 'New',
  },
  {
    icon: Users,
    title: 'Team & crew management',
    description:
      'Invite editors, shooters, assistants with 7 granular roles. Project chat keeps discussions in context. Calendar view for every deadline.',
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-surface py-20 lg:py-28"
    >
      <div className="container relative mx-auto max-w-5xl px-4">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
          className="mb-12 text-center"
        >
          <h2 className="font-heading text-3xl font-medium text-foreground md:text-5xl">
            Everything you need,{' '}
            <span className="italic font-light text-amber">nothing you don&apos;t.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Six core tools that replace scattered apps, manual setup, and endless back-and-forth.
          </p>
        </motion.div>

        {/* 3×2 feature grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                variants={revealUp}
                className="group relative rounded-xl border border-border/40 bg-surface-elevated p-6 transition-colors duration-200 hover:border-amber/30"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber/20 bg-amber/10 text-amber">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  {feature.badge && (
                    <span className="rounded-full border border-amber/40 bg-amber/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* UI Mockups — Kanban + Review */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 grid gap-5 lg:grid-cols-2"
        >
          {/* Kanban mockup */}
          <motion.div
            variants={revealUp}
            className="overflow-hidden rounded-2xl border border-border/40 bg-surface-elevated p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-sm font-semibold text-foreground">Project Board</h4>
              <span className="rounded-full bg-amber/10 px-2.5 py-0.5 text-[10px] font-bold text-amber">Live</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {/* Column: Editing */}
              <div>
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Editing</div>
                <div className="space-y-2">
                  <div className="rounded-lg border border-border/40 bg-background p-3">
                    <div className="text-xs font-medium text-foreground">Anderson Wedding</div>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="rounded bg-amber/15 px-1.5 py-0.5 text-[9px] font-medium text-amber">Video</span>
                      <span className="text-[9px] text-muted-foreground">Jun 15</span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-background p-3">
                    <div className="text-xs font-medium text-foreground">Nike Campaign</div>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-medium text-emerald-600 dark:text-emerald-400">Photo</span>
                      <span className="text-[9px] text-muted-foreground">Jun 18</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column: Review */}
              <div>
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Review</div>
                <div className="space-y-2">
                  <div className="rounded-lg border border-amber/30 bg-background p-3">
                    <div className="text-xs font-medium text-foreground">Brand Campaign</div>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="rounded bg-amber/15 px-1.5 py-0.5 text-[9px] font-medium text-amber">Video</span>
                      <span className="text-[9px] text-amber">2 comments</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column: Ready */}
              <div>
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Ready</div>
                <div className="space-y-2">
                  <div className="rounded-lg border border-border/40 bg-background p-3">
                    <div className="text-xs font-medium text-foreground">Torres Portrait</div>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-medium text-emerald-600 dark:text-emerald-400">Photo</span>
                      <span className="text-[9px] text-emerald-600 dark:text-emerald-400">Delivered</span>
                    </div>
                  </div>
                  <div className="rounded-lg border border-border/40 bg-background p-3">
                    <div className="text-xs font-medium text-foreground">Lee Wedding Film</div>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className="rounded bg-amber/15 px-1.5 py-0.5 text-[9px] font-medium text-amber">Video</span>
                      <span className="text-[9px] text-emerald-600 dark:text-emerald-400">Delivered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Review page mockup */}
          <motion.div
            variants={revealUp}
            className="overflow-hidden rounded-2xl border border-border/40 bg-surface-elevated p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-sm font-semibold text-foreground">Video Review</h4>
              <div className="flex items-center gap-2">
                <Pencil className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">Draw on frame</span>
              </div>
            </div>
            {/* Video frame */}
            <div className="relative aspect-video overflow-hidden rounded-lg bg-foreground/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber/80 text-background">
                  <PlayCircle className="h-5 w-5" />
                </div>
              </div>
              {/* Timestamp marker */}
              <div className="absolute bottom-2 left-2 rounded bg-background/80 px-2 py-0.5 text-[10px] font-mono text-foreground backdrop-blur-sm">
                01:24 / 03:47
              </div>
              {/* Annotation dot */}
              <div className="absolute top-1/3 left-2/3 h-5 w-5 rounded-full border-2 border-amber bg-amber/30" />
            </div>
            {/* Comments */}
            <div className="mt-3 space-y-2">
              <div className="flex gap-2.5">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber/15 text-[10px] font-bold text-amber">
                  S
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-foreground">Sarah</span>
                    <span className="text-[10px] text-muted-foreground">at 1:24</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Color grading looks warm here — can we cool it down slightly?</p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                  M
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-foreground">Mike</span>
                    <span className="text-[10px] text-muted-foreground">at 2:15</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Love the transition here. Approved.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
