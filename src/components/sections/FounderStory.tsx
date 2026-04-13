'use client';

import { motion } from 'framer-motion';
import { revealUp, viewportOnce } from '@/lib/utils';

const FounderStory = () => {
  return (
    <section
      id="story"
      className="relative border-y border-border/30 bg-surface py-10 lg:py-14"
    >
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealUp}
          className="flex flex-col items-center gap-6 text-center md:flex-row md:gap-10 md:text-left"
        >
          {/* Author badge */}
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber/15 text-lg font-heading font-medium text-amber">
              A
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Alex Ohnevskyi</p>
              <p className="text-xs text-muted-foreground">Founder & Creator</p>
            </div>
          </div>

          {/* Quote */}
          <p className="flex-1 font-heading text-base italic leading-relaxed text-muted-foreground md:text-lg">
            &ldquo;I spent 10 years in production. Every tool was built for tech companies, not for us. So I built FlowShot.&rdquo;
          </p>

          {/* Stats */}
          <div className="flex shrink-0 items-center gap-6 text-center">
            <div>
              <div className="font-heading text-2xl font-medium text-amber">10+</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Years</div>
            </div>
            <div className="h-8 w-px bg-border/40" />
            <div>
              <div className="font-heading text-2xl font-medium text-amber">3,000+</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Weddings</div>
            </div>
            <div className="h-8 w-px bg-border/40" />
            <div>
              <div className="font-heading text-2xl font-medium text-amber">100%</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Self-funded</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderStory;
