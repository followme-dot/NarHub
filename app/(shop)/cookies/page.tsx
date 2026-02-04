import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Narhub',
  description: 'Cookie Policy for Narhub - How we use cookies and similar technologies.',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a2e] mb-4">
            Cookie Policy
          </h1>
          <p className="text-[#71717a]">
            Last updated: February 2, 2026 | Effective Date: February 2, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">1. What Are Cookies?</h2>
            <p className="text-[#4a4a68] leading-relaxed">
              Cookies are small text files that are placed on your device when you visit a website.
              They are widely used to make websites work more efficiently, provide analytics information,
              and personalize your experience. Cookies may be "session" cookies (deleted when you close
              your browser) or "persistent" cookies (remain on your device for a set period).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">2. How We Use Cookies</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              ffollowme oü, operating as Narhub, uses cookies and similar technologies for the following purposes:
            </p>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">2.1 Essential Cookies</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              These cookies are necessary for the website to function and cannot be disabled. They include:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-[#1a1a2e] font-semibold">Cookie</th>
                    <th className="text-left py-2 text-[#1a1a2e] font-semibold">Purpose</th>
                    <th className="text-left py-2 text-[#1a1a2e] font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-[#4a4a68]">
                  <tr className="border-b border-gray-100">
                    <td className="py-2">session_id</td>
                    <td className="py-2">User authentication</td>
                    <td className="py-2">Session</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">csrf_token</td>
                    <td className="py-2">Security protection</td>
                    <td className="py-2">Session</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">cart_items</td>
                    <td className="py-2">Shopping cart persistence</td>
                    <td className="py-2">7 days</td>
                  </tr>
                  <tr>
                    <td className="py-2">cookie_consent</td>
                    <td className="py-2">Cookie preferences</td>
                    <td className="py-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">2.2 Functional Cookies</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              These cookies enable enhanced functionality and personalization:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-[#1a1a2e] font-semibold">Cookie</th>
                    <th className="text-left py-2 text-[#1a1a2e] font-semibold">Purpose</th>
                    <th className="text-left py-2 text-[#1a1a2e] font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-[#4a4a68]">
                  <tr className="border-b border-gray-100">
                    <td className="py-2">language</td>
                    <td className="py-2">Language preference</td>
                    <td className="py-2">1 year</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">currency</td>
                    <td className="py-2">Currency preference</td>
                    <td className="py-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="py-2">recently_viewed</td>
                    <td className="py-2">Recently viewed products</td>
                    <td className="py-2">30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">2.3 Analytics Cookies</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              These cookies help us understand how visitors interact with our website:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-[#1a1a2e] font-semibold">Cookie</th>
                    <th className="text-left py-2 text-[#1a1a2e] font-semibold">Purpose</th>
                    <th className="text-left py-2 text-[#1a1a2e] font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-[#4a4a68]">
                  <tr className="border-b border-gray-100">
                    <td className="py-2">_ga</td>
                    <td className="py-2">Google Analytics - User identification</td>
                    <td className="py-2">2 years</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">_gid</td>
                    <td className="py-2">Google Analytics - Session tracking</td>
                    <td className="py-2">24 hours</td>
                  </tr>
                  <tr>
                    <td className="py-2">_gat</td>
                    <td className="py-2">Google Analytics - Rate limiting</td>
                    <td className="py-2">1 minute</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">2.4 Security Cookies</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              These cookies are used for fraud prevention and security:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 text-[#1a1a2e] font-semibold">Cookie</th>
                    <th className="text-left py-2 text-[#1a1a2e] font-semibold">Purpose</th>
                    <th className="text-left py-2 text-[#1a1a2e] font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-[#4a4a68]">
                  <tr className="border-b border-gray-100">
                    <td className="py-2">device_id</td>
                    <td className="py-2">Device fingerprinting for fraud detection</td>
                    <td className="py-2">1 year</td>
                  </tr>
                  <tr>
                    <td className="py-2">security_check</td>
                    <td className="py-2">Bot detection</td>
                    <td className="py-2">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">3. Third-Party Cookies</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              Some cookies are placed by third-party services that appear on our pages:
            </p>
            <ul className="text-[#4a4a68] space-y-3">
              <li><strong>Stripe:</strong> Payment processing and fraud prevention</li>
              <li><strong>Google Analytics:</strong> Website analytics</li>
              <li><strong>Cloudflare:</strong> Security and performance</li>
              <li><strong>Intercom:</strong> Customer support chat</li>
            </ul>
            <p className="text-[#4a4a68] leading-relaxed mt-4">
              These third parties have their own privacy policies governing their use of cookies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">4. Managing Cookies</h2>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">4.1 Cookie Consent</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              When you first visit our website, you will be asked to accept or customize your cookie preferences.
              You can change your preferences at any time by clicking the "Cookie Settings" link in the footer.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">4.2 Browser Settings</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              Most browsers allow you to control cookies through settings. You can:
            </p>
            <ul className="text-[#4a4a68] space-y-2 mb-4">
              <li>View cookies stored on your device</li>
              <li>Delete all or specific cookies</li>
              <li>Block all cookies or only third-party cookies</li>
              <li>Set preferences for specific websites</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-800 m-0">
                <strong>Important:</strong> Blocking essential cookies may prevent you from using certain
                features of our website, including making purchases and accessing your account.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">5. Similar Technologies</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              In addition to cookies, we may use similar technologies:
            </p>
            <ul className="text-[#4a4a68] space-y-3">
              <li><strong>Local Storage:</strong> For storing data locally in your browser</li>
              <li><strong>Session Storage:</strong> For temporary data during your session</li>
              <li><strong>Pixel Tags:</strong> Small images used for analytics and email tracking</li>
              <li><strong>Device Fingerprinting:</strong> For fraud prevention purposes</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">6. Updates to This Policy</h2>
            <p className="text-[#4a4a68] leading-relaxed">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page
              with an updated "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">7. Contact Us</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-[#1a1a2e] font-medium mb-2">ffollowme oü</p>
              <p className="text-[#4a4a68] m-0">
                Email: privacy@narhub.com<br />
                Address: Tallinn, Estonia
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-[#71717a] text-center">
              By continuing to use Narhub, you consent to our use of cookies as described in this policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
