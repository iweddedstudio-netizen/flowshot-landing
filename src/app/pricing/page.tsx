'use client';

import { useState } from 'react';
import { Check, X, Rocket, Crown, Building2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  addOns: string[];
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
      { label: 'Questionnaires', included: false },
      { label: 'Cloud sync (GDrive/Dropbox)', included: false },
      { label: 'Team board', included: false },
      { label: 'Brand kit', included: false },
      { label: 'Priority support', included: false },
    ],
    addOns: [
      'Extra seat: $12/mo (max 3 total)',
      'Extra storage: $10/mo per 50 GB (max 150 GB)',
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
      { label: 'Priority support', included: false },
    ],
    addOns: [
      'Extra seat: $8/mo (max 8 total)',
      'Extra storage: $7/mo per 50 GB (max 500 GB)',
      'Extra delivery page: $5/page (max 10 total)',
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
    addOns: [
      'Extra seat: $5/mo (max 20 total)',
      'Extra storage: $5/mo per 50 GB (max 2 TB)',
    ],
  },
];

const APP_URL = 'https://app.flowshot.space';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

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
            Early access pricing — lock in your rate before launch. No hidden fees.
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

                {/* Features */}
                <div className="space-y-2.5 mb-6">
                  {plan.features.map((feature) => (
                    <div key={feature.label} className="flex items-start gap-2.5 text-sm">
                      {feature.included ? (
                        <Check className={`mt-0.5 size-4 shrink-0 ${plan.accentText}`} />
                      ) : (
                        <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/30" />
                      )}
                      <span className={feature.included ? 'text-muted-foreground' : 'text-muted-foreground/30'}>
                        {typeof feature.included === 'string'
                          ? `${feature.label} (${feature.included})`
                          : feature.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Add-ons */}
                <div className="mb-6 rounded-lg border border-current/10 bg-background/30 p-3">
                  <p className="text-xs font-medium text-foreground/60 mb-2">Add-ons</p>
                  {plan.addOns.map((addon) => (
                    <p key={addon} className="text-xs text-muted-foreground/60 leading-relaxed">
                      {addon}
                    </p>
                  ))}
                </div>

                <Button
                  type="button"
                  className="w-full rounded-md"
                  variant={plan.popular ? 'glow' : 'outline'}
                  asChild
                >
                  <a href={APP_URL}>Start Free Trial</a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Early adopter incentive */}
        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-amber/20 bg-amber/5 px-6 py-5 text-center">
          <p className="text-base font-medium text-foreground">
            <Sparkles className="mb-0.5 mr-1.5 inline-block size-4 text-amber" />
            Early adopters get an extended free trial and locked-in pricing
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Sign up now — your rate stays the same even after launch. No credit card required.
          </p>
        </div>

        {/* Bottom notes */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 text-center">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Extended free trial</h4>
            <p className="text-sm text-muted-foreground">
              All early access users get a free extended trial. All features included.
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

    </div>
  );
}
