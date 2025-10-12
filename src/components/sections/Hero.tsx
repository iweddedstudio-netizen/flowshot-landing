'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import AnimatedMockup from '@/components/AnimatedMockup';
import VideoModal from '@/components/modals/VideoModal';
import WaitlistModal from '@/components/modals/WaitlistModal';
import { useState } from 'react';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-primary/[0.02] to-background overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content Column */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left"
          >
            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-heading font-semibold text-foreground tracking-tight mx-auto lg:mx-0 uppercase"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                Workflow platform
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl leading-[1.1] mt-2">
                for photo & video projects
              </div>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-secondary mt-8 leading-[1.5] max-w-[52ch] mx-auto lg:mx-0"
            >
              FlowShot is ready out of the box — everything's pre-configured for studios and solo creators.
            </motion.p>

            {/* Secondary tagline */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-muted-foreground mt-4 max-w-[52ch] mx-auto lg:mx-0"
            >
              Skip the setup. Start creating.
            </motion.p>

            {/* CTA Cluster */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mt-12 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                onClick={() => setIsWaitlistModalOpen(true)}
              >
                Try FlowShot free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-xl border-2 border-foreground/30 hover:bg-primary hover:text-white hover:border-primary transition-all"
                onClick={() => setIsVideoModalOpen(true)}
              >
                Watch 60-sec demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Column - Animated Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <AnimatedMockup />
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>

      {/* Modals */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </section>
  );
};

export default Hero;
