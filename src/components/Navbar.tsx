'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import WaitlistModal from '@/components/modals/WaitlistModal';

const navLinks = [
  { href: '#standout-features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#story', label: 'About us' },
  { href: '#faq', label: 'FAQ' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-lg"
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
              className="text-2xl font-heading font-black bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity px-4 py-2"
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
                variant="outline"
                className="rounded-xl bg-transparent border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all"
                onClick={() => setIsWaitlistModalOpen(true)}
              >
                <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                  Try for free
                </span>
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
                    variant="outline"
                    className="w-full rounded-xl bg-transparent border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all"
                    onClick={() => {
                      setIsWaitlistModalOpen(true);
                      handleLinkClick();
                    }}
                  >
                    <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                      Try for free
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </>
  );
};

export default Navbar;
