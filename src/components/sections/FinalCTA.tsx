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
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-cyan-950/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-950/25 via-transparent to-blue-950/20" />

      {/* Animated gradient orbs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent blur-3xl -top-40 -left-40"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-500/25 via-pink-500/15 to-transparent blur-3xl top-20 right-0"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-500/20 via-rose-500/12 to-transparent blur-3xl bottom-0 left-1/3"
        />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
            Ready to orchestrate your studio?
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed max-w-3xl mx-auto">
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
                className="text-base px-8 py-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 border-0 text-white hover:shadow-2xl hover:shadow-cyan-500/50 font-semibold shadow-lg transition-all hover:scale-105"
                onClick={() => setIsWaitlistModalOpen(true)}
              >
                Try for free
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-xl bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-semibold shadow-lg backdrop-blur-sm transition-all"
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
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      {/* Modals */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </section>
  );
};

export default FinalCTA;
