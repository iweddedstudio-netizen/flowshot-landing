'use client';

import { useState } from 'react';
import { Mail, Youtube } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const footerCols = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
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
  const [isSocialDialogOpen, setIsSocialDialogOpen] = useState(false);

  return (
    <footer className="bg-background px-4 pt-12 pb-6 lg:pb-8">
      <div className="mx-auto max-w-6xl border-t border-border/40 pt-12">
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
              Project management for photo &amp; video production teams. Built by creators, for creators.
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

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-foreground/40 md:flex-row">
          <p>&copy; 2026 FlowShot — built with love for creators.</p>
          <p>Made for photo &amp; video creators worldwide.</p>
        </div>
      </div>

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
    </footer>
  );
};

export default FinalCTA;
