'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Lock, Youtube, Mail } from 'lucide-react';
import WaitlistModal from '@/components/modals/WaitlistModal';
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const FinalCTA = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isSocialDialogOpen, setIsSocialDialogOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="cta" className="relative py-16 md:py-24 overflow-hidden">
      {/* Static background - optimized for mobile */}
      <div className="absolute inset-0">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-cyan-950/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-950/25 via-transparent to-blue-950/20" />

        {/* Static gradient orbs for depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl -top-40 -left-40" />
          <div className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-500/12 via-pink-500/8 to-transparent blur-3xl top-20 right-0" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-500/10 via-rose-500/6 to-transparent blur-3xl bottom-0 left-1/3" />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={isMobile ? {} : { duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-6 leading-tight">
            Start your <span className="font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wide">FlowShot</span> today.
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Try FlowShot free — no setup, no card, just pure workflow.
          </p>

          {/* CTAs */}
          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={isMobile ? {} : { duration: 0.6, delay: 0.2 }}
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
            </div>

            {/* Lock + Text under buttons */}
            <div className="flex items-center gap-2 text-xs text-white/70 mt-2">
              <Lock className="w-3 h-3" />
              <span>Cancel anytime • Export data</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 text-center relative z-10 mt-20">
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <button
            onClick={() => setIsSocialDialogOpen(true)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center group"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={() => setIsSocialDialogOpen(true)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center group"
            aria-label="TikTok"
          >
            <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </button>

          <button
            onClick={() => setIsSocialDialogOpen(true)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 mb-3 text-xs text-white/40">
          <a href="https://app.flowshot.space/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="https://app.flowshot.space/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Terms of Service</a>
        </div>
        <p className="text-sm text-white/50">© 2026 FlowShot — built with love for creators.</p>
      </div>

      {/* Modals */}
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />

      {/* Social Media Dialog */}
      <Dialog open={isSocialDialogOpen} onOpenChange={setIsSocialDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Coming Soon!</DialogTitle>
            <DialogDescription className="text-base leading-relaxed pt-4">
              We&apos;re working on our social media presence. Follow us soon for updates, tips, and behind-the-scenes content!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FinalCTA;
