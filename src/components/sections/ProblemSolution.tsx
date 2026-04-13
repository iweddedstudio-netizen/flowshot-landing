'use client';

import { XCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

const problems = [
  {
    title: 'Revisions scattered everywhere',
    description: 'Feedback in WhatsApp, notes in email, files in Dropbox. Nothing in one place.',
  },
  {
    title: 'Shooting day chaos',
    description: 'Crew arrives and nobody knows the timeline, locations, or contacts.',
  },
  {
    title: 'Manual folder creation',
    description: 'New project = new Drive folder = same structure = copy-paste-rename. Again.',
  },
  {
    title: 'No single source of truth',
    description: 'Details in one app, chat in another, files in a third. Things fall through cracks.',
  },
];

const solutions = [
  {
    title: 'Video review in one place',
    description: 'Timestamped annotations, drawing tools, @mentions — clients and team in one thread.',
  },
  {
    title: 'Everything for the shoot',
    description: 'Locations, contacts, shot lists, crew assignments — connected to the project.',
  },
  {
    title: 'Auto cloud folder sync',
    description: 'Connect Google Drive or Dropbox once. Folders created automatically for every project.',
  },
  {
    title: 'One workspace for everything',
    description: 'Projects, team, clients, reviews, delivery — finally in one place.',
  },
];

const ProblemSolution = () => {
  return (
    <section
      id="problem-solution"
      className="relative overflow-hidden bg-background py-20 lg:py-28"
    >
      <div className="container relative mx-auto max-w-5xl px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
          className="mb-12 text-center"
        >
          <h2 className="font-heading text-3xl font-medium text-foreground md:text-5xl">
            Your problems{' '}
            <span className="text-muted-foreground mx-2">→</span>{' '}
            <span className="italic font-light text-amber">Our solution</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            See how FlowShot solves the biggest pain points of production management.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-5 md:grid-cols-2"
        >
          {/* Problems column */}
          <motion.div
            variants={revealUp}
            className="rounded-2xl border border-destructive/15 bg-surface p-6 lg:p-8"
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-destructive">
              Common Problems:
            </h3>
            <div className="space-y-5">
              {problems.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive/70" />
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions column */}
          <motion.div
            variants={revealUp}
            className="rounded-2xl border border-emerald-500/20 bg-surface p-6 lg:p-8"
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-emerald-500">
              FlowShot Solution:
            </h3>
            <div className="space-y-5">
              {solutions.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500/80" />
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
