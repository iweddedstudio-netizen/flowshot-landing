'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Lock, Mail, Youtube, ArrowRight } from 'lucide-react';
import WaitlistModal from '@/components/modals/WaitlistModal';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

const footerCols = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#standout-features' },
      { label: 'Workflow', href: '#journey' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our story', href: '#story' },
      { label: 'Contact', href: 'mailto:hello@flowshot.app' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Refund Policy', href: '/refund' },
    ],
  },
];

const FinalCTA = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isSocialDialogOpen, setIsSocialDialogOpen] = useState(false);

  return (
    <section id="cta" className="relative overflow-hidden bg-background py-32 text-foreground lg:py-48">
      {/* Amber vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.18),transparent_60%)]"
      />
      {/* Grain */}
      <div className="pointer-events-none absolute inset-0 grain-overlay" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="container relative mx-auto max-w-5xl px-4 text-center"
      >
        <motion.div variants={revealUp} className="mb-6 flex items-center justify-center gap-3">
          <span className="block h-px w-8 bg-amber/60" />
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
            Get started
          </span>
          <span className="block h-px w-8 bg-amber/60" />
        </motion.div>

        <motion.h2
          variants={revealUp}
          className="font-heading font-medium text-foreground"
          style={{
            fontSize: 'clamp(3rem, 10vw, 9rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
          }}
        >
          Start your{' '}
          <span className="italic font-light text-amber">FlowShot</span> today.
        </motion.h2>

        <motion.p
          variants={revealUp}
          className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
        >
          Try FlowShot free — no setup, no card, just pure workflow.
        </motion.p>

        <motion.div
          variants={revealUp}
          className="mt-14 flex flex-col items-center"
        >
          <Button
            size="lg"
            variant="glow"
            className="animate-pulse-glow rounded-md px-10 py-7 text-base"
            onClick={() => setIsWaitlistModalOpen(true)}
          >
            Try for free
            <ArrowRight className="ml-1" />
          </Button>

          <div className="mt-5 flex items-center gap-2 text-xs text-foreground/50">
            <Lock className="h-3 w-3" />
            <span>Cancel anytime · Export data</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="relative mx-auto mt-32 max-w-6xl border-t border-amber/10 px-4 pt-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="block h-8 w-8 rounded-md bg-gradient-to-br from-amber to-amber/20 shadow-glowSm" />
              <span className="font-heading text-2xl font-medium tracking-tight text-foreground">
                flowshot
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The operating system for wedding filmmakers. Built by creators,
              for creators.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => setIsSocialDialogOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-amber/15 bg-surface text-foreground/60 transition-colors hover:border-amber/40 hover:text-amber"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsSocialDialogOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-amber/15 bg-surface text-foreground/60 transition-colors hover:border-amber/40 hover:text-amber"
                aria-label="TikTok"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </button>
              <button
                onClick={() => setIsSocialDialogOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-amber/15 bg-surface text-foreground/60 transition-colors hover:border-amber/40 hover:text-amber"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-amber"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-amber/10 pt-8 text-xs text-foreground/40 md:flex-row">
          <p>&copy; 2026 FlowShot — built with love for creators.</p>
          <p>Made for wedding filmmakers worldwide.</p>
        </div>
      </footer>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />

      <Dialog open={isSocialDialogOpen} onOpenChange={setIsSocialDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Coming Soon!</DialogTitle>
            <DialogDescription className="pt-4 text-base leading-relaxed">
              We&apos;re working on our social media presence. Follow us soon for updates, tips, and behind-the-scenes content!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FinalCTA;
