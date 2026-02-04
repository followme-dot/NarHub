/**
 * PDF Generation Utility for Purchase Confirmations
 * Generates a legal document with order details, terms, and customer information
 */

interface OrderItem {
  name: string
  icon: string
  priceMin: number
  priceMax: number
  quantity: number
}

interface OrderData {
  orderId: string
  date: string
  customerName: string
  customerEmail: string
  customerPhone?: string
  companyName?: string
  taxId?: string
  address?: string
  city?: string
  country?: string
  items: OrderItem[]
  totalMin: number
  totalMax: number
  isOutsideEU?: boolean
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

function formatPriceRange(min: number, max: number): string {
  if (min === max) {
    return formatCurrency(min)
  }
  return `${formatCurrency(min)} - ${formatCurrency(max)}`
}

/**
 * Generates an HTML document for the order confirmation
 * This can be printed or saved as PDF via browser
 */
export function generateOrderHTML(order: OrderData): string {
  const itemRows = order.items
    .map(
      (item) => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
          <span style="font-size: 24px; margin-right: 8px;">${item.icon}</span>
          ${item.name}
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">${item.quantity}</td>
        <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">${formatPriceRange(item.priceMin, item.priceMax)}</td>
      </tr>
    `
    )
    .join('')

  // Bank details based on location
  const bankDetailsSection = order.isOutsideEU ? `
    <div class="info-box" style="margin-right: 0; background: #dbeafe; border: 1px solid #93c5fd;">
      <h3 style="color: #1e40af;">International SWIFT Transfer (Outside EU)</h3>
      <p><strong>Beneficiary:</strong> ffollowme</p>
      <p><strong>Currency:</strong> EUR</p>
      <p><strong>IBAN:</strong> LT04 3250 0493 5769 1069</p>
      <p><strong>BIC/SWIFT:</strong> REVOLT21</p>
      <p><strong>Intermediary BIC:</strong> CHASDEFX</p>
      <p><strong>Address:</strong> Lõõtsa 2A, 11415, Tallinn, Estonia</p>
      <p><strong>Bank:</strong> Revolut Bank UAB</p>
      <p><strong>Bank Address:</strong> Konstitucijos ave. 21B, 08130, Vilnius, Lithuania</p>
      <p style="margin-top: 15px; font-size: 12px; color: #1e40af;">
        <strong>Estimated time:</strong> 3 business days (SWIFT)
      </p>
    </div>
  ` : `
    <div class="info-box" style="margin-right: 0; background: #dbeafe; border: 1px solid #93c5fd;">
      <h3 style="color: #1e40af;">SEPA Bank Transfer (EU)</h3>
      <p><strong>Beneficiary:</strong> ffollowme oü</p>
      <p><strong>IBAN:</strong> LT04 3250 0493 5769 1069</p>
      <p><strong>BIC/SWIFT:</strong> REVOLT21</p>
      <p><strong>Address:</strong> Lõõtsa 2A, 11415, Tallinn, Estonia</p>
      <p><strong>Bank:</strong> Revolut Bank UAB</p>
      <p><strong>Bank Address:</strong> Konstitucijos ave. 21B, 08130, Vilnius, Lithuania</p>
      <p style="margin-top: 15px; font-size: 12px; color: #1e40af;">
        <strong>Estimated time:</strong> 1-2 business days (SEPA)
      </p>
    </div>
  `

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Purchase Receipt - ${order.orderId}</title>
  <style>
    @media print {
      body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #1a1a2e;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 2px solid #2563eb;
    }
    .logo {
      font-size: 28px;
      font-weight: bold;
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .document-type {
      text-align: right;
    }
    .document-type h1 {
      font-size: 24px;
      margin: 0;
      color: #1a1a2e;
    }
    .document-type p {
      margin: 5px 0 0;
      color: #71717a;
    }
    .info-section {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
    }
    .info-box {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 12px;
      flex: 1;
      margin-right: 20px;
    }
    .info-box:last-child {
      margin-right: 0;
    }
    .info-box h3 {
      margin: 0 0 15px;
      font-size: 14px;
      color: #71717a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .info-box p {
      margin: 5px 0;
      color: #1a1a2e;
    }
    .order-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 30px;
    }
    .order-table th {
      background: #f8f9fa;
      padding: 12px;
      text-align: left;
      font-weight: 600;
      color: #4a4a68;
      border-bottom: 2px solid #e5e7eb;
    }
    .order-table th:nth-child(2),
    .order-table th:nth-child(3) {
      text-align: center;
    }
    .order-table th:last-child {
      text-align: right;
    }
    .total-section {
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      color: white;
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 30px;
    }
    .total-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .total-row:last-child {
      margin-bottom: 0;
      padding-top: 10px;
      border-top: 1px solid rgba(255,255,255,0.3);
      font-size: 20px;
      font-weight: bold;
    }
    .warning-section {
      background: #fef3c7;
      border: 1px solid #fcd34d;
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 30px;
    }
    .warning-section h3 {
      margin: 0 0 10px;
      color: #92400e;
    }
    .warning-section p {
      margin: 0;
      color: #78350f;
      font-size: 14px;
    }
    .audit-section {
      background: #fee2e2;
      border: 1px solid #fca5a5;
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 30px;
    }
    .audit-section h3 {
      margin: 0 0 10px;
      color: #991b1b;
    }
    .audit-section p {
      margin: 0;
      color: #7f1d1d;
      font-size: 14px;
    }
    .audit-section ul {
      margin: 10px 0 0 0;
      padding-left: 20px;
      color: #7f1d1d;
    }
    .terms-section {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 30px;
    }
    .terms-section h3 {
      margin: 0 0 15px;
      color: #1a1a2e;
    }
    .terms-section ul {
      margin: 0;
      padding-left: 20px;
      color: #4a4a68;
    }
    .terms-section li {
      margin-bottom: 8px;
    }
    .footer {
      text-align: center;
      padding-top: 30px;
      border-top: 1px solid #e5e7eb;
      color: #71717a;
      font-size: 12px;
    }
    .footer p {
      margin: 5px 0;
    }
    .signature-section {
      display: flex;
      justify-content: space-between;
      margin: 40px 0;
      padding: 20px 0;
    }
    .signature-box {
      width: 45%;
      text-align: center;
    }
    .signature-line {
      border-top: 1px solid #1a1a2e;
      margin-top: 60px;
      padding-top: 10px;
      font-size: 12px;
      color: #71717a;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">Narhub</div>
    <div class="document-type">
      <h1>Purchase Receipt</h1>
      <p>Legal Transaction Document</p>
    </div>
  </div>

  <div class="info-section">
    <div class="info-box">
      <h3>Order Information</h3>
      <p><strong>Order #:</strong> ${order.orderId}</p>
      <p><strong>Date:</strong> ${order.date}</p>
      <p><strong>Status:</strong> Pending Payment</p>
    </div>
    <div class="info-box">
      <h3>Customer Details</h3>
      <p><strong>${order.customerName}</strong></p>
      <p>${order.customerEmail}</p>
      ${order.customerPhone ? `<p>${order.customerPhone}</p>` : ''}
      ${order.companyName ? `<p>${order.companyName}</p>` : ''}
      ${order.taxId ? `<p>Tax ID: ${order.taxId}</p>` : ''}
    </div>
  </div>

  ${
    order.address
      ? `
  <div class="info-section">
    <div class="info-box" style="margin-right: 0;">
      <h3>Billing Address</h3>
      <p>${order.address}</p>
      <p>${order.city ? `${order.city}, ` : ''}${order.country || ''}</p>
    </div>
  </div>
  `
      : ''
  }

  <table class="order-table">
    <thead>
      <tr>
        <th>Product</th>
        <th>Qty</th>
        <th>Price Range</th>
      </tr>
    </thead>
    <tbody>
      ${itemRows}
    </tbody>
  </table>

  <div class="total-section">
    <div class="total-row">
      <span>Subtotal</span>
      <span>${formatPriceRange(order.totalMin, order.totalMax)}</span>
    </div>
    <div class="total-row">
      <span>Taxes</span>
      <span>To be determined</span>
    </div>
    <div class="total-row">
      <span>Estimated Total</span>
      <span>${formatPriceRange(order.totalMin, order.totalMax)}</span>
    </div>
  </div>

  <div class="info-section" style="margin-top: 30px;">
    ${bankDetailsSection}
  </div>

  <div class="audit-section">
    <h3>⚠️ IMPORTANT: Smart Contract Audit Required</h3>
    <p>
      Smart contracts included in this purchase are <strong>NOT AUDITED</strong> and require professional
      security audit before mainnet deployment. We strongly recommend:
    </p>
    <ul>
      <li><strong>Trail of Bits</strong> - trailofbits.com ($100K-$300K)</li>
      <li><strong>OpenZeppelin</strong> - openzeppelin.com ($50K-$200K)</li>
      <li><strong>Quantstamp</strong> - quantstamp.com ($50K-$150K)</li>
      <li><strong>Halborn</strong> - halborn.com ($40K-$120K)</li>
      <li><strong>Certik</strong> - certik.com ($30K-$100K)</li>
    </ul>
  </div>

  <div class="warning-section">
    <h3>⚠️ Important Legal Notice</h3>
    <p>
      This document constitutes legal proof of the commercial transaction between parties.
      By proceeding with this purchase, the customer acknowledges having read and accepted
      Narhub's Terms of Service and Privacy Policy. <strong>ALL SALES ARE FINAL.</strong>
      No refunds or returns are accepted once the transaction is confirmed.
    </p>
  </div>

  <div class="terms-section">
    <h3>Purchase Terms and Conditions</h3>
    <ul>
      <li>Final price will be determined based on negotiation and specific product configuration.</li>
      <li>Software delivery will occur after full payment verification.</li>
      <li>Customer will receive access to source code, documentation, and support as per the plan purchased.</li>
      <li>Licenses are non-transferable without prior written authorization from Narhub.</li>
      <li><strong>Technical support is included for 30 days</strong> from purchase date.</li>
      <li>After 30 days, the buyer's team takes full control and responsibility.</li>
      <li>Buyer needs minimum: 1 DevOps engineer + 1 Backend engineer for deployment.</li>
      <li>Estimated deployment time: 5-8 weeks with the right team.</li>
      <li>Narhub is not responsible for modifications made by the customer to the source code.</li>
      <li>Smart contracts require professional audit before mainnet deployment (buyer's responsibility).</li>
    </ul>
  </div>

  <div class="signature-section">
    <div class="signature-box">
      <div class="signature-line">
        Customer Signature
      </div>
    </div>
    <div class="signature-box">
      <div class="signature-line">
        Narhub Representative
      </div>
    </div>
  </div>

  <div class="footer">
    <p><strong>Narhub</strong> - Enterprise Software Marketplace</p>
    <p>Operated by ffollowme oü | Reg. No. 16676671 | Estonia</p>
    <p>This document was automatically generated and is legally valid without handwritten signature.</p>
    <p>For inquiries: sales@narhub.com | www.narhub.com</p>
    <p style="margin-top: 15px; font-size: 10px; color: #9ca3af;">
      Document generated on ${new Date().toISOString()} | ID: ${order.orderId}
    </p>
  </div>
</body>
</html>
  `
}

/**
 * Opens a new window with the order HTML and triggers print dialog
 */
export function printOrderPDF(order: OrderData): void {
  const html = generateOrderHTML(order)
  const printWindow = window.open('', '_blank')

  if (printWindow) {
    printWindow.document.write(html)
    printWindow.document.close()
    printWindow.focus()

    // Wait for content to load before printing
    setTimeout(() => {
      printWindow.print()
    }, 250)
  }
}

/**
 * Downloads the order as an HTML file (can be opened in browser and saved as PDF)
 */
export function downloadOrderHTML(order: OrderData): void {
  const html = generateOrderHTML(order)
  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = `Receipt-${order.orderId}.html`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
