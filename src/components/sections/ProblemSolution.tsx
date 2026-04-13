'use client';

import {
  FileSpreadsheet,
  Grid3x3,
  MessageSquare,
  RefreshCw,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

const heroProblem = {
  icon: MessageSquare,
  title: 'Lost in chats',
  description:
    'Scattered messages and links across ten group threads — and still nothing where you need it on shoot day.',
};

const secondaryProblems = [
  {
    icon: FileSpreadsheet,
    title: 'Spreadsheets everywhere',
    description: 'Budgets split across sheets.',
    offset: 'lg:mt-20',
  },
  {
    icon: Grid3x3,
    title: 'Templates that never fit',
    description: "Tried others - they didn't work.",
    offset: 'lg:mt-8',
  },
  {
    icon: RefreshCw,
    title: 'Endless setup',
    description: 'Copy. Rename. Repeat again.',
    offset: 'lg:mt-32',
  },
];

const ProblemSolution = () => {
  const HeroIcon = heroProblem.icon;

  return (
    <section
      id="problem-solution"
      className="relative overflow-hidden border-b border-amber/10 bg-background py-32 lg:py-40"
    >
      {/* Off-grid giant outline "PAIN" word bleeding left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[8vw] top-[18%] hidden select-none font-heading italic lg:block"
        style={{
          fontSize: 'clamp(12rem, 26vw, 28rem)',
          lineHeight: 0.85,
          letterSpacing: '-0.04em',
        }}
      >
        <span className="text-outline opacity-40">pain</span>
      </div>

      <div className="container relative mx-auto max-w-6xl px-4">
        {/* Header with asymmetric offset */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-20 max-w-2xl lg:ml-auto lg:mb-28"
        >
          <motion.div variants={revealUp} className="mb-5 flex items-center gap-3">
            <span className="block h-px w-8 bg-amber/60" />
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
              The problem
            </span>
          </motion.div>
          <motion.h2
            variants={revealUp}
            className="font-heading text-4xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl"
          >
            We know the pain —
            <br />
            so we built{' '}
            <span className="italic font-light text-amber">FlowShot.</span>
          </motion.h2>
        </motion.div>

        {/* Hero problem: asymmetric free-form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="relative grid gap-10 lg:grid-cols-12 lg:gap-8"
        >
          <motion.article
            variants={revealUp}
            className="group relative overflow-hidden rounded-2xl border border-amber/15 bg-surface-elevated p-10 lg:col-span-7 lg:col-start-2 lg:p-16"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber/10 blur-3xl"
            />
            <div className="relative">
              <span className="font-heading text-xs uppercase tracking-[0.24em] text-amber/70">
                01 — The core issue
              </span>
              <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-amber/30 bg-amber/10 text-amber">
                <HeroIcon className="h-9 w-9" strokeWidth={1.3} />
              </div>
              <h3 className="mt-8 font-heading text-5xl font-medium leading-[1] text-foreground lg:text-6xl">
                {heroProblem.title}
              </h3>
              <p className="mt-8 max-w-[48ch] text-lg leading-relaxed text-muted-foreground">
                {heroProblem.description}
              </p>
            </div>
          </motion.article>

          {/* Decorative dotted line bleeding right */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-[15%] bg-[linear-gradient(to_right,transparent,hsl(var(--accent)/0.4))] lg:block"
          />
        </motion.div>

        {/* Secondary problems — asymmetric offsets */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-20 grid gap-6 lg:mt-32 lg:grid-cols-3 lg:items-start"
        >
          {secondaryProblems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.article
                key={problem.title}
                variants={revealUp}
                className={`group relative rounded-xl border border-amber/10 bg-surface p-8 transition-all duration-300 hover:border-amber/30 hover:shadow-glowSm ${problem.offset}`}
              >
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-amber/60">
                  0{index + 2}
                </span>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-lg border border-amber/20 bg-amber/5 text-amber">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-medium text-foreground">
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
