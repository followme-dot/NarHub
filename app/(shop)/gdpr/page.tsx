import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GDPR Compliance | Narhub',
  description: 'GDPR compliance information and data subject rights for Narhub users.',
}

export default function GDPRPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a2e] mb-4">
            GDPR Compliance
          </h1>
          <p className="text-[#71717a]">
            Your Data Protection Rights Under the General Data Protection Regulation
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-blue-800 font-medium m-0">
              ffollowme oü, operating as Narhub, is fully committed to GDPR compliance. As an Estonian
              company within the European Union, we adhere to the highest standards of data protection
              and privacy.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Our Commitment to GDPR</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              We have implemented comprehensive measures to ensure compliance with the General Data
              Protection Regulation (EU) 2016/679, including:
            </p>
            <ul className="text-[#4a4a68] space-y-2">
              <li>Appointing a Data Protection Officer</li>
              <li>Maintaining detailed records of processing activities</li>
              <li>Implementing data protection by design and default</li>
              <li>Conducting Data Protection Impact Assessments when required</li>
              <li>Ensuring appropriate technical and organizational security measures</li>
              <li>Establishing procedures for data subject requests</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Your Data Subject Rights</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-6">
              Under GDPR, you have the following rights regarding your personal data:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Right of Access</h3>
                <p className="text-[#4a4a68] text-sm m-0">
                  You can request a copy of all personal data we hold about you, including how it's
                  being processed and shared.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Right to Rectification</h3>
                <p className="text-[#4a4a68] text-sm m-0">
                  You can request correction of any inaccurate or incomplete personal data we hold.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Right to Erasure</h3>
                <p className="text-[#4a4a68] text-sm m-0">
                  You can request deletion of your personal data, subject to certain legal exceptions.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Right to Restrict Processing</h3>
                <p className="text-[#4a4a68] text-sm m-0">
                  You can request that we limit how we use your data in certain circumstances.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Right to Data Portability</h3>
                <p className="text-[#4a4a68] text-sm m-0">
                  You can receive your data in a structured, machine-readable format to transfer elsewhere.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Right to Object</h3>
                <p className="text-[#4a4a68] text-sm m-0">
                  You can object to processing based on legitimate interests or for direct marketing.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">How to Exercise Your Rights</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              To exercise any of your data protection rights, you can:
            </p>
            <ol className="text-[#4a4a68] space-y-3">
              <li>
                <strong>Email:</strong> Send your request to <a href="mailto:gdpr@narhub.com" className="text-blue-600 hover:underline">gdpr@narhub.com</a>
              </li>
              <li>
                <strong>Online Form:</strong> Use our <Link href="/contact" className="text-blue-600 hover:underline">Data Subject Request Form</Link>
              </li>
              <li>
                <strong>Post:</strong> Write to our Data Protection Officer at the address below
              </li>
            </ol>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Verification Required</h3>
              <p className="text-amber-700 m-0">
                To protect your privacy, we will verify your identity before processing any request.
                We may ask for:
              </p>
              <ul className="text-amber-700 mt-3 space-y-1 m-0">
                <li>Proof of identity (government-issued ID)</li>
                <li>Confirmation of the email address on your account</li>
                <li>Additional information to locate your records</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Response Timeframes</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              We will respond to your request within the following timeframes:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <table className="w-full text-[#4a4a68]">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Standard requests</td>
                    <td className="py-3">Within 30 days</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Complex requests</td>
                    <td className="py-3">Up to 90 days (with notification)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Acknowledgment of receipt</td>
                    <td className="py-3">Within 5 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Data We Cannot Delete</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              Please note that certain data cannot be deleted due to legal requirements:
            </p>
            <ul className="text-[#4a4a68] space-y-2">
              <li><strong>Transaction records:</strong> Must be retained for 10 years (tax/accounting law)</li>
              <li><strong>Purchase confirmations:</strong> Legal proof of consent and transaction</li>
              <li><strong>Invoice data:</strong> Required for VAT compliance</li>
              <li><strong>Communication records:</strong> May be needed for legal claims (6-year limitation)</li>
              <li><strong>Security logs:</strong> Fraud prevention and legal compliance</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Legal Basis for Processing</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              We process personal data under the following legal bases:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-[#1a1a2e]">Contract Performance (Article 6(1)(b))</h3>
                <p className="text-[#4a4a68] text-sm">Processing necessary to fulfill our contract with you (e.g., processing orders, delivering products)</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-[#1a1a2e]">Legal Obligation (Article 6(1)(c))</h3>
                <p className="text-[#4a4a68] text-sm">Processing required by law (e.g., tax records, fraud prevention)</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-[#1a1a2e]">Legitimate Interests (Article 6(1)(f))</h3>
                <p className="text-[#4a4a68] text-sm">Processing for our legitimate business interests (e.g., security, service improvement)</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="font-semibold text-[#1a1a2e]">Consent (Article 6(1)(a))</h3>
                <p className="text-[#4a4a68] text-sm">Processing based on your explicit consent (e.g., marketing emails)</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">International Data Transfers</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              When we transfer data outside the EEA, we ensure protection through:
            </p>
            <ul className="text-[#4a4a68] space-y-2">
              <li>EU Standard Contractual Clauses (SCCs)</li>
              <li>Binding Corporate Rules</li>
              <li>Adequacy decisions by the European Commission</li>
              <li>Supplementary measures where required</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Data Protection Officer</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              Our Data Protection Officer can be contacted for any GDPR-related inquiries:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-[#1a1a2e] font-medium mb-2">Data Protection Officer</p>
              <p className="text-[#4a4a68] m-0">
                ffollowme oü<br />
                Email: dpo@narhub.com<br />
                Address: Tallinn, Estonia
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Right to Lodge a Complaint</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              If you believe your data protection rights have been violated, you have the right to
              lodge a complaint with a supervisory authority. For Estonia:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-[#1a1a2e] font-medium mb-2">Andmekaitse Inspektsioon (Estonian Data Protection Inspectorate)</p>
              <p className="text-[#4a4a68] m-0">
                Website: <a href="https://www.aki.ee" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aki.ee</a><br />
                Email: info@aki.ee<br />
                Phone: +372 627 4135
              </p>
            </div>
            <p className="text-[#4a4a68] leading-relaxed mt-4">
              You may also contact the supervisory authority in your country of residence if you are
              located in another EU member state.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-[#71717a] text-center">
              For more information about how we handle your data, please see our{' '}
              <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
