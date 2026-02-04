import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Narhub',
  description: 'Privacy Policy for Narhub - How we collect, use, and protect your personal data.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a2e] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#71717a]">
            Last updated: February 2, 2026 | Effective Date: February 2, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-blue-800 font-medium m-0">
              ffollowme oü ("Company," "we," "us," or "our"), operating as Narhub, is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website narhub.com and use our services.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">1.1 Personal Information You Provide</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              We collect personal information that you voluntarily provide when you:
            </p>
            <ul className="text-[#4a4a68] space-y-2 mb-4">
              <li>Create an account (name, email address, password)</li>
              <li>Make a purchase (billing address, payment information)</li>
              <li>Contact us (communication content, contact details)</li>
              <li>Subscribe to our newsletter (email address)</li>
              <li>Request support (account details, issue description)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">1.2 Automatically Collected Information</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              When you access our website, we automatically collect:
            </p>
            <ul className="text-[#4a4a68] space-y-2 mb-4">
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent, click patterns, referring URLs</li>
              <li><strong>Location Data:</strong> General geographic location based on IP address</li>
              <li><strong>Cookies and Tracking:</strong> As described in our Cookie Policy</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">1.3 Transaction Records</h3>
            <p className="text-[#4a4a68] leading-relaxed">
              For every purchase, we create and retain comprehensive transaction records including:
              purchase date/time, products purchased, amount paid, payment method (last 4 digits only),
              billing information, IP address at time of purchase, and device fingerprint. These records
              are retained for a minimum of 10 years for legal and compliance purposes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">2. How We Use Your Information</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">We use collected information for:</p>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">2.1 Service Provision</h3>
            <ul className="text-[#4a4a68] space-y-2 mb-4">
              <li>Processing and fulfilling your orders</li>
              <li>Managing your account and providing customer support</li>
              <li>Delivering purchased products and services</li>
              <li>Sending transactional communications (receipts, updates)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">2.2 Security and Fraud Prevention</h3>
            <ul className="text-[#4a4a68] space-y-2 mb-4">
              <li>Verifying identity and preventing unauthorized access</li>
              <li>Detecting and preventing fraudulent transactions</li>
              <li>Protecting against chargebacks and payment disputes</li>
              <li>Maintaining security logs and audit trails</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">2.3 Legal Compliance</h3>
            <ul className="text-[#4a4a68] space-y-2">
              <li>Complying with legal obligations and regulations</li>
              <li>Responding to legal requests and court orders</li>
              <li>Establishing, exercising, or defending legal claims</li>
              <li>Maintaining records as required by law</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">3. Legal Basis for Processing (GDPR)</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              Under the General Data Protection Regulation (GDPR), we process your data based on:
            </p>
            <ul className="text-[#4a4a68] space-y-3">
              <li><strong>Contract Performance:</strong> Processing necessary to fulfill our contractual obligations to you (e.g., delivering purchased products)</li>
              <li><strong>Legitimate Interests:</strong> Processing for fraud prevention, security, improving our services, and direct marketing (where applicable)</li>
              <li><strong>Legal Obligation:</strong> Processing required to comply with laws (e.g., tax records, anti-money laundering)</li>
              <li><strong>Consent:</strong> Where you have given explicit consent (e.g., marketing communications)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              We may share your information with:
            </p>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">4.1 Service Providers</h3>
            <ul className="text-[#4a4a68] space-y-2 mb-4">
              <li>Payment processors (Stripe, PayPal)</li>
              <li>Cloud hosting providers</li>
              <li>Email service providers</li>
              <li>Analytics providers</li>
              <li>Customer support tools</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">4.2 Legal Requirements</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              We may disclose your information when required by law, court order, or government request,
              or when we believe disclosure is necessary to:
            </p>
            <ul className="text-[#4a4a68] space-y-2">
              <li>Protect our rights, property, or safety</li>
              <li>Prevent fraud or other illegal activities</li>
              <li>Respond to legal process or government requests</li>
              <li>Enforce our Terms of Service</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3 mt-4">4.3 Business Transfers</h3>
            <p className="text-[#4a4a68] leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred
              as part of that transaction. We will notify you of any such change.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">5. Data Retention</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              We retain your personal data for different periods depending on the type:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <table className="w-full text-[#4a4a68] text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold text-[#1a1a2e]">Data Type</th>
                    <th className="text-left py-2 font-semibold text-[#1a1a2e]">Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">Account Information</td>
                    <td className="py-2">Duration of account + 5 years</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">Transaction Records</td>
                    <td className="py-2">10 years (legal requirement)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">Purchase Confirmations</td>
                    <td className="py-2">10 years (legal requirement)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">Communication Records</td>
                    <td className="py-2">5 years</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2">Analytics Data</td>
                    <td className="py-2">26 months</td>
                  </tr>
                  <tr>
                    <td className="py-2">Marketing Preferences</td>
                    <td className="py-2">Until withdrawal of consent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">6. Your Rights (GDPR)</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              Under GDPR, you have the following rights:
            </p>
            <ul className="text-[#4a4a68] space-y-3">
              <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data (with exceptions)</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of processing</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
              <p className="text-amber-800 m-0">
                <strong>Note:</strong> Certain data, particularly transaction records and Purchase Confirmations,
                cannot be deleted due to legal retention requirements. We may also retain data necessary to
                establish, exercise, or defend legal claims.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">7. International Data Transfers</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              As an Estonian company, your data is primarily processed within the European Economic Area (EEA).
              When we transfer data outside the EEA, we ensure appropriate safeguards through:
            </p>
            <ul className="text-[#4a4a68] space-y-2">
              <li>EU Standard Contractual Clauses</li>
              <li>Adequacy decisions by the European Commission</li>
              <li>Binding Corporate Rules (where applicable)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">8. Security Measures</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              We implement industry-standard security measures including:
            </p>
            <ul className="text-[#4a4a68] space-y-2">
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Encryption at rest for sensitive data</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication</li>
              <li>Employee security training</li>
              <li>Incident response procedures</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">9. Children's Privacy</h2>
            <p className="text-[#4a4a68] leading-relaxed">
              Our services are not intended for individuals under 18 years of age. We do not knowingly
              collect personal information from children. If we become aware that we have collected
              data from a child without parental consent, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">10. Changes to This Policy</h2>
            <p className="text-[#4a4a68] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of material changes
              by posting the new policy on this page and updating the "Last Updated" date. For significant
              changes, we may also notify you by email.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">11. Contact Us</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              For privacy-related inquiries or to exercise your rights, contact our Data Protection Officer:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-[#1a1a2e] font-medium mb-2">Data Protection Officer</p>
              <p className="text-[#4a4a68] m-0">
                ffollowme oü<br />
                Email: privacy@narhub.com<br />
                Address: Tallinn, Estonia
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">12. Supervisory Authority</h2>
            <p className="text-[#4a4a68] leading-relaxed">
              If you are not satisfied with how we handle your data, you have the right to lodge a complaint
              with the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon) or your local
              supervisory authority if you are in another EU member state.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-[#71717a] text-center">
              By using Narhub, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
