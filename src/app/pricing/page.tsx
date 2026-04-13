'use client';

import { useState } from 'react';
import { Check, Rocket, Crown, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WaitlistModal from '@/components/modals/WaitlistModal';

interface PlanConfig {
  key: string;
  label: string;
  icon: typeof Rocket;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  accent: string;
  accentText: string;
  features: string[];
}

const plans: PlanConfig[] = [
  {
    key: 'starter',
    label: 'Starter',
    icon: Rocket,
    monthlyPrice: 19,
    yearlyPrice: 190,
    accent: 'border-emerald-500/30 bg-emerald-500/5',
    accentText: 'text-emerald-400',
    features: [
      'Unlimited projects',
      '1 included seat',
      '1 organization',
      'Video upload & review',
      'Cloud storage (add-on)',
      'Calendar sync',
      '$6/extra seat/month',
    ],
  },
  {
    key: 'pro',
    label: 'Pro',
    icon: Crown,
    monthlyPrice: 39,
    yearlyPrice: 390,
    popular: true,
    accent: 'border-amber/30 bg-amber/5',
    accentText: 'text-amber',
    features: [
      'Unlimited projects',
      '3 included seats',
      '3 organizations',
      'Video upload & review',
      '250 GB cloud storage',
      'Calendar sync',
      '$5/extra seat/month',
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
      'Unlimited projects',
      '5 included seats',
      '5 organizations',
      'Video upload & review',
      '500 GB cloud storage',
      'Calendar sync',
      'Client delivery portal',
      'Priority support',
      '$5/extra seat/month',
    ],
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="block h-px w-8 bg-amber/60" />
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-amber">
              Pricing
            </span>
            <span className="block h-px w-8 bg-amber/60" />
          </div>

          <h1
            className="font-heading font-medium text-foreground"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
            }}
          >
            Simple, transparent{' '}
            <span className="italic font-light text-amber">pricing.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Start with a free trial. Upgrade when you&apos;re ready. No hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="mt-10 inline-flex items-center gap-1 rounded-full border border-amber/15 bg-surface-elevated p-1">
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
        </div>

        {/* Plan cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const PlanIcon = plan.icon;
            const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            const priceLabel = billingPeriod === 'monthly' ? '/month' : '/year';

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

                <div className="mb-6">
                  <div className="mb-3 flex items-center gap-2.5">
                    <div className={`flex size-10 items-center justify-center rounded-xl border border-current/15 bg-surface-elevated ${plan.accentText}`}>
                      <PlanIcon className="size-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{plan.label}</h3>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">${price}</span>
                    <span className="text-sm text-muted-foreground">{priceLabel}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className={`mt-0.5 size-4 shrink-0 ${plan.accentText}`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  type="button"
                  className="w-full rounded-md"
                  variant={plan.popular ? 'glow' : 'outline'}
                  onClick={() => setIsWaitlistModalOpen(true)}
                >
                  Start free trial
                </Button>
              </div>
            );
          })}
        </div>

        {/* Free plan note */}
        <div className="mt-16 text-center">
          <div className="inline-block rounded-2xl border border-amber/10 bg-surface-elevated px-8 py-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Free plan available</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Get started with up to 3 projects per month, basic project management, and team collaboration.
              No credit card required.
            </p>
          </div>
        </div>

        {/* FAQ-style notes */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 text-center">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">14-day free trial</h4>
            <p className="text-sm text-muted-foreground">
              Try all features free. No credit card needed to start.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Cancel anytime</h4>
            <p className="text-sm text-muted-foreground">
              No long-term contracts. Cancel with one click.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">14-day money back</h4>
            <p className="text-sm text-muted-foreground">
              Not satisfied? Get a full refund within 14 days.
            </p>
          </div>
        </div>
      </div>

      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
    </div>
  );
}
