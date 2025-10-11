'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import VideoModal from '@/components/modals/VideoModal';
import WaitlistModal from '@/components/modals/WaitlistModal';
import { useState } from 'react';

const FinalCTA = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent -z-10" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center text-primary-foreground"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
            Ready to orchestrate your studio?
          </h2>

          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Join 100+ teams already using FlowShot — free onboarding included.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-xl bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold shadow-lg backdrop-blur-sm transition-all hover:scale-105"
                onClick={() => setIsWaitlistModalOpen(true)}
              >
                Try for free
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-xl bg-transparent border-2 border-white/60 text-white hover:bg-white hover:text-primary hover:border-white font-semibold shadow-lg backdrop-blur-sm transition-all"
                onClick={() => setIsVideoModalOpen(true)}
              >
                Watch 60-sec demo
              </Button>
            </div>

            {/* Lock + Text under buttons */}
            <div className="flex items-center gap-2 text-xs text-white/70 mt-2">
              <Lock className="w-3 h-3" />
              <span>Cancel anytime • Export data</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Wave (optional) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-foreground/5 to-transparent pointer-events-none" />

      {/* Modals */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </section>
  );
};

export default FinalCTA;
