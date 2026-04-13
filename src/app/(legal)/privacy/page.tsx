import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — FlowShot',
  description: 'FlowShot Privacy Policy. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: April 13, 2026</p>

      <div className="prose prose-sm prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-amber hover:prose-a:text-amber/80">
        <h2>1. Introduction</h2>
        <p>
          FlowShot (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the FlowShot platform, including its website
          and mobile applications (collectively, the &ldquo;Service&rdquo;). This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you use our Service.
        </p>
        <p>
          We are committed to protecting your privacy. We do not sell your personal information to third parties.
        </p>
        <p>
          By using the Service, you consent to the data practices described in this Privacy Policy.
          If you do not agree with this Privacy Policy, please do not use the Service.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>Information You Provide</h3>
        <ul>
          <li><strong>Account Information:</strong> Name, email address, phone number, password (encrypted)</li>
          <li><strong>Organization Information:</strong> Company name, team member details, roles</li>
          <li><strong>Project Data:</strong> Project details, client information, schedules, venues, notes</li>
          <li><strong>Files and Media:</strong> Photos, videos, documents, and other files you upload</li>
          <li><strong>Communications:</strong> Chat messages, comments, annotations, and feedback within the Service</li>
          <li><strong>Payment Information:</strong> Billing address (payment card details are processed by our payment provider and are never stored by us)</li>
        </ul>

        <h3>Information Automatically Collected</h3>
        <ul>
          <li><strong>Usage Data:</strong> Pages visited, features used, time spent on the Service</li>
          <li><strong>Device Information:</strong> Browser type, operating system, device type, screen resolution</li>
          <li><strong>Log Data:</strong> IP address, access times, referring URLs</li>
          <li><strong>Crash Reports:</strong> Application errors, stack traces, and device state at the time of a crash, collected to improve Service stability</li>
          <li><strong>Push Notification Tokens:</strong> Device tokens used solely to deliver push notifications you have opted into</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve the Service</li>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices, updates, security alerts, and support messages</li>
          <li>Send push notifications (which you can disable at any time in your device settings)</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Monitor and analyze trends, usage, and activities to improve user experience</li>
          <li>Detect, investigate, and prevent fraudulent transactions, abuse, and security incidents</li>
          <li>Diagnose and fix technical problems via crash and error reporting</li>
        </ul>

        <h2>4. Third-Party Services</h2>
        <p>
          We use the following third-party services to operate the Service. Each service processes data
          in accordance with its own privacy policy, which we encourage you to review:
        </p>
        <ul>
          <li><strong>Google Firebase:</strong> Authentication, database, file storage, hosting, and analytics</li>
          <li><strong>Paddle:</strong> Payment processing, subscription billing, tax compliance, and refunds (Merchant of Record)</li>
          <li><strong>Sentry:</strong> Error monitoring and crash reporting</li>
          <li><strong>Resend:</strong> Transactional emails</li>
          <li><strong>Bunny.net:</strong> Content delivery network for media files</li>
          <li><strong>DeepL:</strong> Text translation</li>
          <li><strong>Deepgram:</strong> Audio transcription</li>
          <li><strong>Telegram:</strong> Notification delivery (optional integration)</li>
          <li><strong>Apple Push Notification service (APNs):</strong> Push notifications on iOS devices</li>
        </ul>
        <p>
          We are not responsible for the privacy practices of these third-party services.
          Your use of these services is subject to their respective terms and privacy policies.
        </p>

        <h2>5. Data Storage and Security</h2>
        <p>
          Your data is stored on secure servers provided by Google Cloud Platform (Firebase).
          We implement appropriate technical and organizational measures to protect your personal information,
          including encryption in transit (TLS) and at rest, multi-tenant data isolation, and role-based access controls.
        </p>
        <p>
          <strong>
            HOWEVER, NO METHOD OF TRANSMISSION OVER THE INTERNET OR ELECTRONIC STORAGE IS 100% SECURE.
            WHILE WE STRIVE TO PROTECT YOUR INFORMATION, WE CANNOT AND DO NOT GUARANTEE ITS ABSOLUTE SECURITY.
            YOU ACKNOWLEDGE THAT YOU PROVIDE YOUR INFORMATION AT YOUR OWN RISK.
          </strong>
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We retain your personal information for as long as your account is active or as needed to provide
          you services. We will retain and use your information as necessary to comply with our legal
          obligations, resolve disputes, and enforce our agreements.
        </p>
        <p>
          When you delete your account, we will delete or anonymize your personal information within 30 days,
          except where we are required to retain it by law. Backup copies may persist for up to 90 days
          before being permanently removed.
        </p>

        <h2>7. Your Rights</h2>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of your personal information</li>
          <li><strong>Correction:</strong> Request correction of inaccurate information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information</li>
          <li><strong>Export:</strong> Request your data in a portable format</li>
          <li><strong>Opt-out:</strong> Opt out of marketing communications and push notifications</li>
          <li><strong>Restriction:</strong> Request restriction of processing of your personal information</li>
        </ul>
        <p>
          To exercise these rights, please contact us at privacy@flowshot.app or use the account settings
          in the Service. We will respond to your request within 30 days.
        </p>

        <h2>8. California Privacy Rights (CCPA)</h2>
        <p>If you are a California resident, you have additional rights under the CCPA:</p>
        <ul>
          <li>Right to know what personal information is collected, used, shared, or sold</li>
          <li>Right to delete personal information held by businesses</li>
          <li>Right to opt-out of the sale of personal information</li>
          <li>Right to non-discrimination for exercising your CCPA rights</li>
        </ul>
        <p>
          <strong>We do not sell your personal information.</strong> To exercise your CCPA rights,
          contact us at privacy@flowshot.app.
        </p>

        <h2>9. European Users (GDPR)</h2>
        <p>
          If you are in the European Economic Area (EEA), we process your personal data based on the following
          legal bases: your consent, performance of a contract (providing the Service), and our legitimate
          interests (improving the Service, preventing fraud). You have the right to withdraw consent at any time.
        </p>

        <h2>10. International Data Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your country of
          residence, including the United States. These countries may have different data protection laws.
          By using the Service, you consent to the transfer of information to the United States and other
          countries. We take steps to ensure that your data receives an adequate level of protection in the
          jurisdictions in which we process it.
        </p>

        <h2>11. Children&apos;s Privacy</h2>
        <p>
          The Service is not intended for individuals under the age of 16. We do not knowingly collect
          personal information from children under 16. If we become aware that we have collected personal
          information from a child under 16, we will take steps to delete such information promptly.
        </p>

        <h2>12. Cookies and Tracking</h2>
        <p>
          We use essential cookies to provide the Service functionality. We do not use third-party tracking
          or advertising cookies. You can control cookies through your browser settings.
          For more details, please see our{' '}
          <Link href="/cookies" className="text-amber hover:text-amber/80">
            Cookie Policy
          </Link>.
        </p>

        <h2>13. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
          the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. Your continued use of the
          Service after any changes constitutes acceptance of the revised Privacy Policy. We encourage you to
          review this Privacy Policy periodically.
        </p>

        <h2>14. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <ul>
          <li>Email: privacy@flowshot.app</li>
        </ul>
      </div>
    </>
  );
}
