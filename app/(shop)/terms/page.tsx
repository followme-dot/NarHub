import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Narhub',
  description: 'Terms and conditions for using Narhub platform and purchasing software licenses.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a2e] mb-4">
            Terms of Service
          </h1>
          <p className="text-[#71717a]">
            Last updated: February 2, 2026 | Effective Date: February 2, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <p className="text-amber-800 font-medium m-0">
              <strong>IMPORTANT:</strong> Please read these Terms of Service carefully before using our platform
              or purchasing any software license. By accessing or using Narhub, you agree to be bound by these terms.
              If you do not agree with any part of these terms, you must not use our services.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">1. Agreement to Terms</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your")
              and ffollowme oü, a company registered in Estonia with registration number [Registration Number],
              operating under the commercial name "Narhub" ("Company," "we," "us," or "our").
            </p>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              By accessing our website at narhub.com, creating an account, browsing our catalog, or purchasing any
              software license, you acknowledge that you have read, understood, and agree to be bound by these Terms,
              our Privacy Policy, Cookie Policy, and any additional terms that may apply to specific services.
            </p>
            <p className="text-[#4a4a68] leading-relaxed">
              <strong>If you are entering into this agreement on behalf of a company or other legal entity,</strong> you
              represent that you have the authority to bind such entity to these Terms. If you do not have such authority,
              or if you do not agree with these Terms, you must not accept this agreement and may not use the Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">2. Definitions</h2>
            <ul className="text-[#4a4a68] space-y-3">
              <li><strong>"Platform"</strong> refers to any software product listed on Narhub, including but not limited to DeFi applications, trading platforms, gaming software, enterprise solutions, and any associated documentation.</li>
              <li><strong>"License"</strong> refers to the right to use a Platform under the terms specified at the time of purchase.</li>
              <li><strong>"Purchase"</strong> refers to the acquisition of a License through our payment system.</li>
              <li><strong>"Deliverables"</strong> refers to all materials provided upon completion of a Purchase, including source code, documentation, deployment guides, and support materials.</li>
              <li><strong>"User Account"</strong> refers to your registered account on Narhub.</li>
              <li><strong>"Purchase Confirmation"</strong> refers to the PDF document generated upon successful payment that serves as legal proof of transaction.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">3. Account Registration</h2>
            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">3.1 Account Requirements</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              To purchase any Platform on Narhub, you must create a User Account. When creating an account, you agree to:
            </p>
            <ul className="text-[#4a4a68] space-y-2 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security and confidentiality of your login credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">3.2 Account Verification</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              We reserve the right to verify your identity and the information provided. For purchases exceeding
              €50,000, we may require additional documentation including but not limited to:
            </p>
            <ul className="text-[#4a4a68] space-y-2">
              <li>Government-issued identification</li>
              <li>Proof of business registration</li>
              <li>Proof of authority to act on behalf of the purchasing entity</li>
              <li>Source of funds documentation</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">4. Purchases and Payment</h2>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">4.1 Pricing</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              All prices displayed on Narhub are in United States Dollars (USD) unless otherwise specified.
              The price range shown for each Platform represents the negotiable valuation based on customization,
              support level, and deployment requirements. Final pricing will be confirmed before payment.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">4.2 Payment Authorization</h3>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-4">
              <p className="text-red-800 font-medium m-0">
                <strong>CRITICAL:</strong> By completing a purchase, you explicitly confirm that:
              </p>
              <ul className="text-red-700 mt-3 space-y-2 m-0">
                <li>You are the authorized holder of the payment method used</li>
                <li>You have full authorization to make the purchase</li>
                <li>The transaction is made with your full knowledge and consent</li>
                <li>You understand and accept all terms and conditions</li>
                <li>You acknowledge that all sales are final</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">4.3 Purchase Confirmation</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              Upon successful payment, you will receive:
            </p>
            <ul className="text-[#4a4a68] space-y-2 mb-4">
              <li>An email confirmation to your registered email address</li>
              <li>A downloadable Purchase Confirmation PDF containing:
                <ul className="mt-2 ml-4 space-y-1">
                  <li>Unique transaction ID</li>
                  <li>Date and time of purchase (UTC)</li>
                  <li>Purchaser details</li>
                  <li>Platform(s) purchased</li>
                  <li>Total amount paid</li>
                  <li>License terms</li>
                  <li>Digital signature</li>
                </ul>
              </li>
              <li>Access to your Deliverables within 24-48 business hours</li>
            </ul>
            <p className="text-[#4a4a68] leading-relaxed">
              <strong>This Purchase Confirmation serves as legal proof of your transaction and consent.</strong>
              We retain copies of all Purchase Confirmations for a minimum of 10 years.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">5. Refund Policy</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">5.1 No Refund Policy</h3>
              <p className="text-blue-700 m-0">
                <strong>ALL SALES ARE FINAL.</strong> Due to the nature of digital software products and the
                immediate access granted to proprietary source code and documentation, we do not offer refunds
                under any circumstances once the Deliverables have been provided.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">5.2 Exceptions</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              Refunds may only be considered in the following exceptional circumstances:
            </p>
            <ul className="text-[#4a4a68] space-y-2 mb-4">
              <li>Technical failure on our end preventing delivery of Deliverables</li>
              <li>Duplicate charges due to payment processing errors</li>
              <li>Deliverables significantly different from the documented specifications</li>
            </ul>
            <p className="text-[#4a4a68] leading-relaxed">
              Any refund request must be submitted in writing within 7 days of purchase with detailed
              documentation. We reserve the sole discretion to approve or deny refund requests.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">5.3 Chargebacks and Disputes</h3>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="text-red-800 m-0">
                <strong>WARNING:</strong> Filing a chargeback or payment dispute after receiving Deliverables
                constitutes a breach of these Terms and may result in:
              </p>
              <ul className="text-red-700 mt-3 space-y-2 m-0">
                <li>Immediate termination of your License</li>
                <li>Revocation of access to all Deliverables</li>
                <li>Legal action to recover the disputed amount plus damages</li>
                <li>Reporting to credit agencies and fraud databases</li>
                <li>Collection of attorney fees and court costs</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">6. License Grant and Restrictions</h2>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">6.1 License Grant</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              Subject to your compliance with these Terms and payment in full, we grant you a non-exclusive,
              non-transferable, perpetual license to use the purchased Platform for your internal business purposes.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">6.2 Restrictions</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">You may NOT:</p>
            <ul className="text-[#4a4a68] space-y-2 mb-4">
              <li>Resell, redistribute, or sublicense the Platform or source code</li>
              <li>Share, publish, or make the source code publicly available</li>
              <li>Use the Platform for illegal purposes or in violation of applicable laws</li>
              <li>Remove or alter any proprietary notices or labels</li>
              <li>Claim ownership or authorship of the Platform</li>
              <li>Use the Platform to compete directly with Narhub</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">7. Delivery</h2>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">7.1 Delivery Timeline</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              Deliverables will be made available within 24-48 business hours of payment confirmation.
              Complex deployments requiring customization may take up to 7-8 weeks as specified in the
              Platform description.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">7.2 Delivery Method</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              Deliverables are provided through secure digital channels, typically including:
            </p>
            <ul className="text-[#4a4a68] space-y-2 mb-4">
              <li>Private GitHub/GitLab repository access</li>
              <li>Secure download links (time-limited)</li>
              <li>Encrypted file transfer for sensitive documentation</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">7.3 Delivery Confirmation</h3>
            <p className="text-[#4a4a68] leading-relaxed">
              You acknowledge receipt of Deliverables by accessing the provided resources.
              <strong> Failure to access Deliverables within 30 days of delivery does not entitle you to a refund
              or constitute non-delivery.</strong>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">8. Warranties and Disclaimers</h2>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">8.1 Limited Warranty</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              We warrant that the Platforms will substantially conform to their documented specifications
              at the time of delivery. This warranty is valid for 30 days from delivery.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">8.2 Disclaimer</h3>
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-6">
              <p className="text-[#4a4a68] m-0 uppercase text-sm">
                EXCEPT AS EXPRESSLY SET FORTH HEREIN, THE PLATFORMS ARE PROVIDED "AS IS" AND "AS AVAILABLE"
                WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                WE DO NOT WARRANT THAT THE PLATFORMS WILL MEET YOUR REQUIREMENTS, BE UNINTERRUPTED, TIMELY,
                SECURE, OR ERROR-FREE.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">9. Limitation of Liability</h2>
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-6">
              <p className="text-[#4a4a68] mb-4 uppercase text-sm">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL FFOLLOWME OÜ, ITS
                DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS
                OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="text-[#4a4a68] space-y-2 m-0 uppercase text-sm">
                <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES</li>
                <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES</li>
                <li>ANY CONTENT OBTAINED FROM THE SERVICES</li>
                <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
              </ul>
              <p className="text-[#4a4a68] mt-4 m-0 uppercase text-sm">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SPECIFIC PLATFORM
                GIVING RISE TO THE CLAIM.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">10. Indemnification</h2>
            <p className="text-[#4a4a68] leading-relaxed">
              You agree to defend, indemnify, and hold harmless ffollowme oü and its officers, directors,
              employees, and agents from and against any claims, liabilities, damages, losses, and expenses,
              including reasonable attorney fees and costs, arising out of or in any way connected with:
            </p>
            <ul className="text-[#4a4a68] space-y-2 mt-4">
              <li>Your access to or use of the Services or Platforms</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your violation of any applicable laws or regulations</li>
              <li>Any claim that your use of a Platform caused damage to a third party</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">11. Governing Law and Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">11.1 Governing Law</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the Republic of Estonia,
              without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">11.2 Dispute Resolution</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              Any dispute arising from these Terms shall be resolved through the following process:
            </p>
            <ol className="text-[#4a4a68] space-y-2 mb-4">
              <li><strong>Negotiation:</strong> The parties shall first attempt to resolve the dispute through good faith negotiations for a period of 30 days.</li>
              <li><strong>Mediation:</strong> If negotiation fails, the parties agree to submit the dispute to mediation under the rules of the Estonian Chamber of Commerce and Industry.</li>
              <li><strong>Arbitration:</strong> If mediation fails, the dispute shall be finally resolved by arbitration in Tallinn, Estonia, under the Arbitration Rules of the Estonian Chamber of Commerce and Industry.</li>
            </ol>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">11.3 Class Action Waiver</h3>
            <p className="text-[#4a4a68] leading-relaxed">
              <strong>YOU AGREE THAT ANY CLAIMS MUST BE BROUGHT IN YOUR INDIVIDUAL CAPACITY AND NOT AS A
              PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</strong>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">12. Modifications to Terms</h2>
            <p className="text-[#4a4a68] leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes
              by posting the new Terms on this page and updating the "Last Updated" date. Your continued use
              of the Services after such changes constitutes your acceptance of the new Terms. We encourage
              you to review these Terms periodically.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">13. Severability</h2>
            <p className="text-[#4a4a68] leading-relaxed">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be
              changed and interpreted to accomplish the objectives of such provision to the greatest extent
              possible under applicable law, and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">14. Entire Agreement</h2>
            <p className="text-[#4a4a68] leading-relaxed">
              These Terms, together with our Privacy Policy, Cookie Policy, and any additional terms applicable
              to specific services, constitute the entire agreement between you and ffollowme oü regarding
              your use of the Services and supersede all prior and contemporaneous understandings, agreements,
              representations, and warranties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">15. Contact Information</h2>
            <p className="text-[#4a4a68] leading-relaxed mb-4">
              For any questions regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <p className="text-[#1a1a2e] font-medium mb-2">ffollowme oü</p>
              <p className="text-[#4a4a68] m-0">
                Registered Address: Tallinn, Estonia<br />
                Email: legal@narhub.com<br />
                Business Hours: Monday - Friday, 9:00 - 18:00 EET
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-[#71717a] text-center">
              By using Narhub, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
