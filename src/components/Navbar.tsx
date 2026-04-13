'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

const APP_URL = 'https://app.flowshot.space';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
        style={{
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#hero"
              className="group flex items-center gap-3 py-2"
            >
              <span className="block h-8 w-8 rounded-md bg-gradient-to-br from-amber to-amber/20 shadow-glowSm" aria-hidden />
              <span className="font-heading text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-amber">
                flowshot
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-foreground/60 transition-colors hover:text-amber after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-amber after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Button
                size="lg"
                className="rounded-md"
                asChild
              >
                <a href={APP_URL}>Start Free Trial</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground/70 hover:text-amber transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-surface-elevated border-t border-amber/10 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block border-b border-amber/10 text-base font-medium text-foreground/70 hover:text-amber transition-colors py-3"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2">
                  <Button
                    size="lg"
                    className="w-full rounded-md"
                    asChild
                  >
                    <a href={APP_URL} onClick={handleLinkClick}>
                      Start Free Trial
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

    </>
  );
};

export default Navbar;
