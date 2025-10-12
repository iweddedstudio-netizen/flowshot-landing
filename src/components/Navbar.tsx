'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import WaitlistModal from '@/components/modals/WaitlistModal';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#security', label: 'Security' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  useEffect(() => {
    let rafId: number;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Cancel previous frame if still pending
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      // Schedule update for next frame
      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        // Only update if scroll position actually changed
        if (Math.abs(currentScrollY - lastScrollY) > 5) {
          setIsScrolled(currentScrollY > 20);
          lastScrollY = currentScrollY;
        }
      });
    };

    // Use passive listener for better mobile performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
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
            className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors"
          >
            FlowShot
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              size="lg"
              className="rounded-xl"
              onClick={() => setIsWaitlistModalOpen(true)}
            >
              Try for free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
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
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-base font-medium text-secondary hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  size="lg"
                  className="w-full rounded-xl"
                  onClick={() => {
                    setIsWaitlistModalOpen(true);
                    handleLinkClick();
                  }}
                >
                  Try for free
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </motion.nav>
  );
};

export default Navbar;
