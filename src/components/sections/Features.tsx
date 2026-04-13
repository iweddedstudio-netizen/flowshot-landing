'use client';

import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  PlayCircle,
  ClipboardList,
  Share2,
  Cloud,
  Users,
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
      </div>
    </section>
  );
};

export default Features;
