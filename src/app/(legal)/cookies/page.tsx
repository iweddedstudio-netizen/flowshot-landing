import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy — FlowShot',
  description: 'FlowShot Cookie Policy. Learn how we use cookies and similar technologies.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-foreground mb-2">Cookie Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: April 13, 2026</p>

      <div className="prose prose-sm prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-amber hover:prose-a:text-amber/80">
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are stored on your device when you visit a website. They are widely used
          to make websites work more efficiently and to provide information to website owners.
        </p>

        <h2>2. How We Use Cookies</h2>
        <p>
          FlowShot uses cookies that are strictly necessary for the operation of our Service. We do not use
          advertising or tracking cookies.
        </p>

        <h2>3. Essential Cookies</h2>
        <p>
          These cookies are required for the Service to function and cannot be disabled. They include:
        </p>
        <ul>
          <li>
            <strong>Firebase Authentication:</strong> Session cookies that keep you signed in and manage your
            authentication state across pages and tabs.
          </li>
          <li>
            <strong>Firestore Persistence:</strong> Local storage entries used to cache data for offline access
            and faster loading times.
          </li>
        </ul>

        <h2>4. Third-Party Cookies</h2>
        <p>
          Some of our third-party service providers may set their own cookies when you interact with their services
          through our platform:
        </p>
        <ul>
          <li>
            <strong>Paddle:</strong> Sets cookies when you interact with payment and checkout forms to process
            transactions securely and prevent fraud. See{' '}
            <a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-amber hover:text-amber/80">
              Paddle&apos;s Privacy Policy
            </a>.
          </li>
          <li>
            <strong>Bunny.net:</strong> May set cookies when delivering video content through their CDN to ensure
            optimal performance and security. See{' '}
            <a href="https://bunny.net/privacy" target="_blank" rel="noopener noreferrer" className="text-amber hover:text-amber/80">
              Bunny.net&apos;s Privacy Policy
            </a>.
          </li>
          <li>
            <strong>Google Fonts:</strong> May set cookies when loading fonts used in the Service interface. See{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber hover:text-amber/80">
              Google&apos;s Privacy Policy
            </a>.
          </li>
        </ul>

        <h2>5. Managing Cookies</h2>
        <p>
          You can control and manage cookies through your browser settings. Please note that disabling essential
          cookies may prevent you from using certain features of the Service, including signing in to your account.
        </p>
        <p>
          Most browsers allow you to:
        </p>
        <ul>
          <li>View what cookies are stored and delete them individually</li>
          <li>Block third-party cookies</li>
          <li>Block cookies from specific sites</li>
          <li>Block all cookies</li>
          <li>Delete all cookies when you close your browser</li>
        </ul>

        <h2>6. Changes to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in our practices or for other
          operational, legal, or regulatory reasons. We will post the updated policy on this page with a revised
          &ldquo;Last updated&rdquo; date.
        </p>

        <h2>7. More Information</h2>
        <p>
          For more details about how we handle your personal information, please see our{' '}
          <Link href="/privacy" className="text-amber hover:text-amber/80">
            Privacy Policy
          </Link>.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us at privacy@flowshot.app.
        </p>
      </div>
    </>
  );
}
