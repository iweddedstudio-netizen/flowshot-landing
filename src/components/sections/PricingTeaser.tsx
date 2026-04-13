'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import WaitlistModal from '@/components/modals/WaitlistModal';
import { motion } from 'framer-motion';
import { Check, X, Rocket, Crown, Building2, Sparkles } from 'lucide-react';
import { revealUp, viewportOnce, staggerContainer } from '@/lib/utils';

interface PlanConfig {
  key: string;
  label: string;
  icon: typeof Rocket;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  accent: string;
  accentText: string;
  features: { label: string; included: boolean | string }[];
}

const plans: PlanConfig[] = [
  {
    key: 'starter',
    label: 'Starter',
    icon: Rocket,
    monthlyPrice: 25,
    yearlyPrice: 250,
    accent: 'border-emerald-500/30 bg-emerald-500/5',
    accentText: 'text-emerald-400',
    features: [
      { label: 'Unlimited projects', included: true },
      { label: '1 seat', included: true },
      { label: '1 organization', included: true },
      { label: 'Video review', included: true },
      { label: 'Client delivery', included: '1/mo' },
      { label: '50 GB cloud storage', included: true },
      { label: 'Calendar sync', included: true },
      { label: '3 custom properties', included: true },
    ],
  },
  {
    key: 'pro',
    label: 'Pro',
    icon: Crown,
    monthlyPrice: 49,
    yearlyPrice: 490,
    popular: true,
    accent: 'border-amber/30 bg-amber/5',
    accentText: 'text-amber',
    features: [
      { label: 'Unlimited projects', included: true },
      { label: '3 seats', included: true },
      { label: '3 organizations', included: true },
      { label: 'Video review', included: true },
      { label: 'Client delivery', included: '5/mo' },
      { label: '250 GB cloud storage', included: true },
      { label: 'Calendar sync', included: true },
      { label: '10 custom properties', included: true },
      { label: 'Questionnaires', included: true },
      { label: 'Cloud sync (GDrive/Dropbox)', included: true },
      { label: 'Team board', included: true },
      { label: 'Brand kit', included: true },
    ],
  },
  {
    key: 'business',
    label: 'Business',
    icon: Building2,
    monthlyPrice: 89,
    yearlyPrice: 890,
    accent: 'border-sky-500/30 bg-sky-500/5',
    accentText: 'text-sky-400',
    features: [
      { label: 'Unlimited projects', included: true },
      { label: '10 seats', included: true },
      { label: '5 organizations', included: true },
      { label: 'Video review', included: true },
      { label: 'Unlimited delivery', included: true },
      { label: '750 GB cloud storage', included: true },
      { label: 'Calendar sync', included: true },
      { label: 'Unlimited custom properties', included: true },
      { label: 'Questionnaires', included: true },
      { label: 'Cloud sync (GDrive/Dropbox)', included: true },
      { label: 'Team board', included: true },
      { label: 'Brand kit', included: true },
      { label: 'Priority support', included: true },
    ],
  },
];

const PricingTeaser = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-b border-amber/10 bg-graphite py-32 lg:py-48"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-[radial-gradient(ellipse_at_top,hsl(var(--accent)/0.14),transparent_70%)]"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="container relative mx-auto max-w-6xl px-4"
      >
        <motion.div variants={revealUp} className="mb-6 flex items-center justify-center gap-3">
          <span className="block h-px w-8 bg-amber/60" />
          <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
            Pricing
          </span>
          <span className="block h-px w-8 bg-amber/60" />
        </motion.div>

        <motion.h2
          variants={revealUp}
          className="text-center font-heading font-medium text-foreground"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
          }}
        >
          Simple, transparent{' '}
          <span className="italic font-light text-amber">pricing.</span>
        </motion.h2>

        <motion.p
          variants={revealUp}
          className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Early access pricing — lock in your rate before launch. No hidden fees.
        </motion.p>

        {/* Billing toggle */}
        <motion.div variants={revealUp} className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-amber/15 bg-surface-elevated p-1">
            {(['monthly', 'yearly'] as const).map((period) => (
              <button
                key={period}
                type="button"
                onClick={() => setBillingPeriod(period)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  billingPeriod === period
                    ? 'bg-amber text-background'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {period === 'monthly' ? 'Monthly' : 'Yearly'}
                {period === 'yearly' && (
                  <span className="ml-1.5 text-xs opacity-80">Save ~17%</span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Plan cards */}
        <motion.div
          variants={revealUp}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {plans.map((plan) => {
            const PlanIcon = plan.icon;
            const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            const priceLabel = billingPeriod === 'monthly' ? '/mo' : '/yr';

            return (
              <div
                key={plan.key}
                className={`relative rounded-2xl border p-6 transition-colors ${plan.accent} ${
                  plan.popular ? 'ring-1 ring-amber/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-amber px-3 py-1 text-xs font-semibold text-background">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <div className="mb-3 flex items-center gap-2.5">
                    <div className={`flex size-9 items-center justify-center rounded-xl border border-current/15 bg-surface-elevated ${plan.accentText}`}>
                      <PlanIcon className="size-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{plan.label}</h3>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">${price}</span>
                    <span className="text-sm text-muted-foreground">{priceLabel}</span>
                  </div>
                </div>

                <div className="space-y-2.5 mb-6">
                  {plan.features.map((feature) => (
                    <div key={feature.label} className="flex items-start gap-2.5 text-sm">
                      {feature.included ? (
                        <Check className={`mt-0.5 size-3.5 shrink-0 ${plan.accentText}`} />
                      ) : (
                        <X className="mt-0.5 size-3.5 shrink-0 text-muted-foreground/40" />
                      )}
                      <span className={feature.included ? 'text-muted-foreground' : 'text-muted-foreground/40'}>
                        {typeof feature.included === 'string'
                          ? `${feature.label} (${feature.included})`
                          : feature.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  type="button"
                  className="w-full rounded-md"
                  variant={plan.popular ? 'glow' : 'outline'}
                  onClick={() => setIsWaitlistModalOpen(true)}
                >
                  {plan.popular ? 'Get Early Access' : 'Join Waitlist'}
                </Button>
              </div>
            );
          })}
        </motion.div>

        {/* Early adopter incentive */}
        <motion.div
          variants={revealUp}
          className="mx-auto mt-14 max-w-2xl rounded-2xl border border-amber/20 bg-amber/5 px-6 py-5 text-center"
        >
          <p className="text-base font-medium text-foreground">
            <Sparkles className="mb-0.5 mr-1.5 inline-block size-4 text-amber" />
            Early adopters get an extended free trial and locked-in pricing
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Sign up now — your rate stays the same even after launch. No credit card required.
          </p>
        </motion.div>

        {/* Trial note */}
        <motion.div variants={revealUp} className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            All early access users start with a free extended trial. All features included.
          </p>
        </motion.div>
      </motion.div>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </section>
  );
};

export default PricingTeaser;
