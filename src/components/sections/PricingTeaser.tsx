'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles } from 'lucide-react';
import WaitlistModal from '@/components/modals/WaitlistModal';

const pricingTiers = [
  {
    name: 'Solo',
    description: 'For freelancers and small creators',
    monthlyPrice: 29,
    popular: false,
    features: [
      '1 user',
      'Up to 50 projects/month',
      '2 brands',
      'Basic catalog',
      'Kanban board & calendar',
      '10 GB storage • upgrade anytime',
    ],
    cta: 'Try for free',
    ctaVariant: 'outline' as const,
  },
  {
    name: 'Studio',
    description: 'For production teams and growing studios',
    monthlyPrice: 99,
    popular: true,
    features: [
      'Up to 10 users',
      'Unlimited projects & brands',
      'Full catalog with templates',
      'Project Drawer + client chat (threaded)',
      'Venue & crew management',
      '100 GB storage',
      'Roles & permissions',
      'Priority support',
    ],
    cta: 'Try for free',
    ctaVariant: 'default' as const,
  },
  {
    name: 'Enterprise',
    description: 'For agencies and larger organizations',
    monthlyPrice: 0,
    popular: false,
    features: [
      'Unlimited users',
      'Everything in Studio +',
      'Dedicated success manager',
      'SSO / SAML authentication',
      'Advanced audit logs',
      '24/7 priority support',
      'Custom integrations & API',
      'Unlimited storage',
      'SLA 99.9%',
    ],
    cta: 'Contact us',
    ctaVariant: 'outline' as const,
  },
];

const PricingTeaser = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isYearly, setIsYearly] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const getPrice = (tier: typeof pricingTiers[0]) => {
    if (tier.name === 'Enterprise') return 'Custom';
    const yearlyPrice = Math.round(tier.monthlyPrice * 12 * 0.8); // 20% discount, rounded
    return isYearly ? `$${yearlyPrice}` : `$${tier.monthlyPrice}`;
  };

  const getPeriod = (tier: typeof pricingTiers[0]) => {
    if (tier.name === 'Enterprise') return '';
    return isYearly ? '/year' : '/month';
  };

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-32 bg-gradient-to-b from-primary/5 via-accent/5 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-4">
            Choose your plan
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Transparent pricing for studios of any size. Start your 14-day free trial — no credit card required.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <span className={`text-sm transition-colors ${!isYearly ? 'text-foreground font-semibold' : 'text-secondary'}`}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isYearly ? 'bg-primary' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
              isYearly ? 'translate-x-6' : 'translate-x-1'
            }`} />
          </button>
          <span className={`text-sm transition-colors ${isYearly ? 'text-foreground font-semibold' : 'text-secondary'}`}>
            Yearly <span className="text-primary font-semibold">(save 20%)</span>
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl shadow-xl p-8 flex flex-col ${
                tier.popular ? 'ring-2 ring-primary lg:scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1.5 shadow-lg">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-heading font-bold text-foreground">
                    {getPrice(tier)}
                  </span>
                  {getPeriod(tier) && (
                    <span className="text-lg text-secondary">{getPeriod(tier)}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-secondary leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA - always at bottom */}
              <div className="mt-auto">
                {tier.name === 'Enterprise' ? (
                  <Button
                    size="lg"
                    variant={tier.ctaVariant}
                    className="w-full rounded-xl"
                    asChild
                  >
                    <a href="mailto:hello@flowshot.app">
                      {tier.cta}
                    </a>
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant={tier.ctaVariant}
                    className="w-full rounded-xl"
                    onClick={() => setIsWaitlistModalOpen(true)}
                  >
                    {tier.cta}
                  </Button>
                )}
                {tier.name !== 'Enterprise' && (
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    14-day free trial — no card required
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-sm text-secondary mb-6">
              All plans include a 14-day free trial. No credit card required.
              <br />
              Cancel anytime and export your data with one click.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                14 days free
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                No card required
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Data export
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </section>
  );
};

export default PricingTeaser;
