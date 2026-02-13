'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import WaitlistModal from '@/components/modals/WaitlistModal';

const PricingTeaser = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-16 md:py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            FlowShot is currently <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">free</span>
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-lg mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
              Beta Access
            </h3>
            <p className="text-sm text-secondary">
              Free for early adopters
            </p>
          </div>

          {/* Price */}
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-6xl md:text-7xl font-heading font-black bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                $0
              </span>
              <span className="text-2xl text-secondary">/forever</span>
            </div>
            <p className="text-sm text-muted-foreground">
              During beta phase
            </p>
          </div>

          {/* Description */}
          <div className="space-y-4 text-base leading-relaxed text-secondary mb-8 border-t border-b py-8">
            <p>
              We&apos;re building FlowShot together with creators like you.
            </p>
            <p>
              All features are unlocked — no limits, no credit card.
            </p>
            <p>
              If you&apos;d like to support the project, you can donate anytime.
            </p>
            <p className="text-sm text-muted-foreground">
              In the future, we&apos;ll announce fair pricing — transparent, affordable, and built for creators.
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-3">
            <Button
              size="lg"
              className="w-full text-base py-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              onClick={() => setIsWaitlistModalOpen(true)}
            >
              Get Started Free
            </Button>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            No credit card required • Cancel anytime • Full data export
          </p>
        </motion.div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </section>
  );
};

export default PricingTeaser;
