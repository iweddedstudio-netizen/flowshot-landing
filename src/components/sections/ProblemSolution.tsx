'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, FileSpreadsheet, Grid3x3, RefreshCw } from 'lucide-react';

// Individual Problem Item with scroll-triggered animation
const ProblemItem = ({ problem, Icon, isEven }: any) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={itemRef}
      initial={{
        opacity: 0,
        x: isEven ? -100 : 100
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0
      } : {
        opacity: 0,
        x: isEven ? -100 : 100
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`group flex items-center gap-8 md:gap-12 ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      }`}
      style={{
        marginLeft: isEven ? '0' : '1.5rem',
        marginRight: isEven ? '1.5rem' : '0'
      }}
    >
      {/* Icon Side */}
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-purple-600/[0.03] flex items-center justify-center transition-transform duration-300 border border-primary/10">
            <Icon className="w-10 h-10 md:w-12 md:h-12 text-purple-600" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className={`flex-1 ${isEven ? 'text-left' : 'text-right'}`}>
        <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-3">
          {problem.title}
        </h3>
        <p className="text-lg leading-relaxed text-foreground">
          {problem.description}
        </p>
      </div>
    </motion.div>
  );
};

const ProblemSolution = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const problems = [
    {
      icon: MessageSquare,
      title: "Lost in chats",
      description: "Scattered messages and links."
    },
    {
      icon: FileSpreadsheet,
      title: "Spreadsheets everywhere",
      description: "Budgets split across sheets."
    },
    {
      icon: Grid3x3,
      title: "Templates that never fit",
      description: "Tried others — they didn't work."
    },
    {
      icon: RefreshCw,
      title: "Endless setup",
      description: "Copy. Rename. Repeat again."
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="problem-solution"
      className="relative py-16 overflow-hidden bg-gradient-to-b from-background via-primary/[0.015] to-background"
    >
      {/* Subtle background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground">
            <span className="font-semibold">We know the pain — so we built </span>
            <span className="font-extrabold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">FlowShot.</span>
          </h2>
        </motion.div>

        {/* Problems - Alternating Layout */}
        <div className="max-w-4xl mx-auto space-y-20">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isEven = index % 2 === 0;

            return (
              <ProblemItem
                key={index}
                problem={problem}
                Icon={Icon}
                isEven={isEven}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
