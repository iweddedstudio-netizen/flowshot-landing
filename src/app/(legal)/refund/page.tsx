import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund Policy — FlowShot',
  description: 'FlowShot Refund Policy. Learn about our 14-day money-back guarantee and how refunds work.',
};

export default function RefundPolicyPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-foreground mb-2">Refund Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: April 13, 2026</p>

      <div className="prose prose-sm prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-amber hover:prose-a:text-amber/80">
        <h2>1. 14-Day Money-Back Guarantee</h2>
        <p>
          We offer a <strong>14-day money-back guarantee</strong> on all new subscriptions. If you are not satisfied
          with FlowShot for any reason, you can request a full refund within 14 days of your initial purchase.
          No questions asked.
        </p>

        <h2>2. Monthly Subscriptions</h2>
        <p>
          Monthly subscriptions can be cancelled at any time. When you cancel, you will retain access to paid
          features until the end of your current billing period. After the billing period ends, your account
          will be downgraded to the free plan.
        </p>
        <p>
          Refunds for monthly subscriptions are available within the first 14 days of the initial subscription only.
          Subsequent monthly renewals are not eligible for refunds, but you may cancel at any time to prevent
          future charges.
        </p>

        <h2>3. Annual Subscriptions</h2>
        <p>
          Annual subscriptions are eligible for a full refund within 14 days of purchase. After the 14-day period,
          if you cancel your annual subscription, you will retain access until the end of the annual billing period.
          We do not offer pro-rated refunds for annual plans cancelled after the 14-day window.
        </p>

        <h2>4. How to Request a Refund</h2>
        <p>To request a refund, you can:</p>
        <ul>
          <li>Email us at <strong>support@flowshot.app</strong> with your account email and the reason for your request</li>
          <li>Use the subscription management portal accessible from your account settings</li>
        </ul>
        <p>
          Refund requests are typically processed within 5-10 business days. The refund will be issued to
          your original payment method.
        </p>

        <h2>5. Payment Processing</h2>
        <p>
          All payments and refunds are processed by <strong>Paddle</strong>, our merchant of record. Paddle handles
          billing, tax collection, and refund disbursement on our behalf. Refund timelines may vary depending on
          your bank or payment provider.
        </p>

        <h2>6. Exceptions</h2>
        <p>We reserve the right to deny a refund request in cases of:</p>
        <ul>
          <li>Abuse of the refund policy (e.g., repeated subscribe-and-refund cycles)</li>
          <li>Violation of our{' '}
            <Link href="/terms" className="text-amber hover:text-amber/80">
              Terms of Service
            </Link>
          </li>
          <li>Accounts terminated for breach of our acceptable use policy</li>
        </ul>

        <h2>7. Plan Changes</h2>
        <p>
          If you upgrade or downgrade your plan, the change takes effect at the start of your next billing period.
          You can manage your subscription, including plan changes and cancellations, through the billing portal
          in your account settings.
        </p>

        <h2>8. Free Trial</h2>
        <p>
          FlowShot offers a free trial period for new users. No payment is required during the trial.
          If you do not subscribe to a paid plan before the trial ends, your account will automatically
          be downgraded to the free plan with no charges.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about our refund policy, please contact us at support@flowshot.app.
        </p>
      </div>
    </>
  );
}
