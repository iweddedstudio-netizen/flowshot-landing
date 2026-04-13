'use client';

import {
  Calendar,
  FolderOpen,
  LayoutGrid,
  MessageSquare,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

const problems = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Revisions everywhere',
    description:
      'Feedback in WhatsApp, notes in email, files in Dropbox. By the time you find the right thread — the deadline has passed.',
  },
  {
    icon: Calendar,
    number: '02',
    title: 'Shooting day chaos',
    description:
      'Crew arrives, nobody knows the timeline. Locations, contacts, shot lists — buried across five different apps.',
  },
  {
    icon: FolderOpen,
    number: '03',
    title: 'Copy-paste folders',
    description:
      'New project — new Drive folder — same structure — rename everything. Over and over and over again.',
  },
  {
    icon: LayoutGrid,
    number: '04',
    title: 'No full picture',
    description:
      'Details in one app, chat in another, files in a third. Nothing connects and things fall through the cracks.',
  },
];

const ProblemSolution = () => {
  return (
    <section
      id="problem-solution"
      className="relative overflow-hidden border-b border-amber/10 bg-background py-20 lg:py-28"
    >
      <div className="container relative mx-auto max-w-5xl px-4">
        {/* Header — left-aligned, tight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-14 max-w-lg lg:mb-16"
        >
          <motion.div variants={revealUp} className="mb-4 flex items-center gap-3">
            <span className="block h-px w-8 bg-amber/60" />
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
              Sound familiar?
            </span>
          </motion.div>
          <motion.h2
            variants={revealUp}
            className="font-heading text-3xl leading-[1.08] text-foreground md:text-5xl"
          >
            The tools weren&apos;t built{' '}
            <span className="italic font-light text-amber">for us.</span>
          </motion.h2>
        </motion.div>

        {/* 2×2 grid — compact, no stagger offsets */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:gap-5"
        >
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <motion.article
                key={problem.title}
                variants={revealUp}
                className="group relative rounded-xl border border-amber/12 bg-surface p-6 transition-colors duration-300 hover:border-amber/30 lg:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber/20 bg-amber/5 text-amber">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="font-heading text-[0.65rem] uppercase tracking-[0.2em] text-foreground/20">
                    {problem.number}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-medium text-foreground">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {problem.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
