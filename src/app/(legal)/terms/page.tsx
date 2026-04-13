import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — FlowShot',
  description: 'FlowShot Terms of Service. Read our terms and conditions for using the platform.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-foreground mb-2">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: April 10, 2026</p>

      <div className="prose prose-sm prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-amber hover:prose-a:text-amber/80">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using FlowShot, including its website and mobile applications (collectively, the &ldquo;Service&rdquo;),
          you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;).
          If you do not agree to these Terms, do not use the Service.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          FlowShot is a project management platform for video production and photography professionals.
          The Service allows users to manage projects, teams, clients, and production workflows.
          The Service is provided via web browsers and mobile applications.
        </p>

        <h2>3. User Accounts</h2>
        <p>
          You must create an account to use the Service. You are responsible for maintaining the confidentiality
          of your account credentials and for all activities that occur under your account. You agree to:
        </p>
        <ul>
          <li>Provide accurate and complete registration information</li>
          <li>Maintain and promptly update your account information</li>
          <li>Notify us immediately of any unauthorized use of your account</li>
          <li>Not share your account with others or allow others to access your account</li>
        </ul>
        <p>
          <strong>You are solely responsible for any activity that occurs under your account,
          whether or not authorized by you.</strong>
        </p>

        <h2>4. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any illegal purpose or in violation of any laws</li>
          <li>Upload or transmit viruses, malware, or other malicious code</li>
          <li>Attempt to gain unauthorized access to the Service or its systems</li>
          <li>Interfere with or disrupt the Service or servers</li>
          <li>Use the Service to harass, abuse, or harm others</li>
          <li>Reproduce, duplicate, copy, sell, or resell the Service</li>
          <li>Use automated systems (bots, scrapers) to access the Service without our written permission</li>
          <li>Upload content that infringes on the intellectual property rights of others</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are owned by FlowShot and are
          protected by international copyright, trademark, and other intellectual property laws.
          Your content remains yours — we do not claim ownership of your data.
        </p>

        <h2>6. User Content</h2>
        <p>
          You retain ownership of any content you upload to the Service. By uploading content, you grant us
          a limited, non-exclusive license to store, process, and display your content solely for the purpose
          of providing the Service to you.
        </p>
        <p>
          <strong>You are solely responsible for all content you upload, share, or transmit through the Service.</strong>{' '}
          We do not monitor, review, or endorse user content. We are not responsible for any user content,
          including its accuracy, legality, or appropriateness. You represent and warrant that you have all
          necessary rights to upload such content and that it does not violate any third-party rights.
        </p>

        <h2>7. Payment Terms</h2>
        <p>
          Certain features of the Service require a paid subscription. If you subscribe to a paid plan, you agree
          to pay all applicable fees. We reserve the right to change our pricing with 30 days notice.
          Subscriptions are managed through our website; in-app purchases are not available through mobile applications.
          Payments are processed by our merchant of record, Paddle, who handles billing, taxes, and refunds on our behalf.
          Please see our{' '}
          <Link href="/refund" className="text-amber hover:text-amber/80">
            Refund Policy
          </Link>{' '}
          for details on cancellations and refunds.
        </p>

        <h2>8. Mobile Application</h2>
        <p>
          The Service may be accessed via mobile applications distributed through third-party app stores
          (e.g., Apple App Store). Your use of the mobile application is also subject to the terms and
          conditions of the respective app store. You acknowledge that:
        </p>
        <ul>
          <li>These Terms are between you and FlowShot, not with the app store provider</li>
          <li>The app store provider has no obligation to provide maintenance or support for the application</li>
          <li>The app store provider is not responsible for any claims related to the application</li>
          <li>The app store provider is a third-party beneficiary of these Terms and may enforce them</li>
        </ul>

        <h2>9. DISCLAIMER OF WARRANTIES</h2>
        <p className="uppercase font-semibold">
          THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, NON-INFRINGEMENT, AND TITLE.
        </p>
        <p className="uppercase font-semibold">
          WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT
          DEFECTS WILL BE CORRECTED. WE DO NOT WARRANT THE ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY
          INFORMATION ON THE SERVICE. YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK.
        </p>
        <p className="uppercase font-semibold">
          WE ARE NOT RESPONSIBLE FOR ANY LOSS, CORRUPTION, OR UNAUTHORIZED ACCESS TO YOUR DATA, FILES,
          OR CONTENT STORED THROUGH THE SERVICE. YOU ARE SOLELY RESPONSIBLE FOR MAINTAINING BACKUPS OF YOUR DATA.
        </p>

        <h2>10. LIMITATION OF LIABILITY</h2>
        <p className="uppercase font-semibold">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL FLOWSHOT, ITS DIRECTORS,
          EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA,
          USE, GOODWILL, BUSINESS OPPORTUNITIES, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
        </p>
        <ul>
          <li>Your access to or use of or inability to access or use the Service</li>
          <li>Any conduct or content of any third party on the Service</li>
          <li>Any content obtained from the Service</li>
          <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          <li>Loss or corruption of data</li>
          <li>Any errors, bugs, or inaccuracies in the Service</li>
          <li>Any interruption or cessation of the Service</li>
        </ul>
        <p className="uppercase font-semibold">
          OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRIOR TO
          THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER. THIS LIMITATION APPLIES REGARDLESS OF
          THE THEORY OF LIABILITY AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>

        <h2>11. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless FlowShot and its officers, directors, employees,
          contractors, agents, licensors, suppliers, successors, and assigns from and against any
          claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney&apos;s fees)
          arising from:
        </p>
        <ul>
          <li>Your use of the Service</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any third-party rights, including intellectual property rights</li>
          <li>Any content you upload, post, or transmit through the Service</li>
        </ul>

        <h2>12. Dispute Resolution</h2>
        <p>
          Any disputes arising from these Terms or the Service shall be resolved through binding arbitration
          in accordance with the rules of the American Arbitration Association. You agree to waive any right
          to participate in a class action lawsuit or class-wide arbitration. Each party shall bear its own costs.
        </p>

        <h2>13. Termination</h2>
        <p>
          We may terminate or suspend your account and access to the Service immediately, without prior notice
          or liability, for any reason, including breach of these Terms. Upon termination, your right to use
          the Service will cease immediately. We are not liable for any loss of data resulting from termination.
        </p>

        <h2>14. Modifications to Service</h2>
        <p>
          We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time,
          with or without notice. We shall not be liable to you or any third party for any modification, price change,
          suspension, or discontinuation of the Service.
        </p>

        <h2>15. Severability</h2>
        <p>
          If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed
          and interpreted to accomplish the objectives of such provision to the greatest extent possible under
          applicable law, and the remaining provisions will continue in full force and effect.
        </p>

        <h2>16. Entire Agreement</h2>
        <p>
          These Terms, together with our{' '}
          <Link href="/privacy" className="text-amber hover:text-amber/80">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/cookies" className="text-amber hover:text-amber/80">
            Cookie Policy
          </Link>,
          constitute the entire agreement between you and FlowShot regarding the Service and supersede
          all prior agreements and understandings.
        </p>

        <h2>17. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the State of Delaware,
          United States, without regard to its conflict of law provisions.
        </p>

        <h2>18. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will provide notice of significant changes
          by posting the new Terms on this page and updating the &ldquo;Last updated&rdquo; date. Your continued use of the
          Service after such changes constitutes acceptance of the new Terms.
        </p>

        <h2>19. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at legal@flowshot.app.
        </p>
      </div>
    </>
  );
}
