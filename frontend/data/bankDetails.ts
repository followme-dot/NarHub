// Bank details for wire transfers
export const bankDetails = {
  beneficiary: 'ffollowme oü',
  iban: 'LT04 3250 0493 5769 1069',
  bic: 'REVOLT21',
  intermediaryBic: 'CHASDEFX',
  address: 'Lõõtsa 2A, 11415, Tallinn, Estonia',
  bank: 'Revolut Bank UAB',
  bankAddress: 'Konstitucijos ave. 21B, 08130, Vilnius, Lituania',
}

// SEPA transfer details (EU customers)
export const sepaDetails = {
  transferType: 'SEPA',
  transferTime: '1-2 business days',
  instructions: [
    'Payment is made via SEPA bank transfer (EU only).',
    'Once the transfer is confirmed, you will receive the invoice PDF to your registered email.',
    'Software delivery process will begin after payment verification.',
    'Keep the transfer receipt as backup.',
  ]
}

// SWIFT transfer details (outside EU customers)
export const swiftDetails = {
  transferType: 'SWIFT',
  transferTime: '3 business days',
  intermediaryBank: 'JP Morgan Chase',
  intermediaryBic: 'CHASDEFX',
  instructions: [
    'Payment is made via international SWIFT transfer (outside EU).',
    'Use intermediary bank BIC (CHASDEFX) for faster processing.',
    'Once the transfer is confirmed, you will receive the invoice PDF to your registered email.',
    'Software delivery process will begin after payment verification (typically 3 business days).',
    'Keep the transfer receipt as backup.',
  ]
}

// Legacy export for backwards compatibility
export const paymentInstructions = sepaDetails.instructions
