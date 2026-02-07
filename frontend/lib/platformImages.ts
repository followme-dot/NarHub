/**
 * Mapeo de la primera imagen disponible para cada plataforma
 * Esto evita problemas de fallback en Next.js Image
 */
export const platformFirstImage: Record<string, string> = {
  'argentum-bridge': '01-home-hero.png',
  'astrid': '01-landing-hero.png',
  'bb-nft': '01-home-landing.png',
  'bitboots': '01-home-hero.png',
  'flux': '01-Landing-Page.png',
  'forge': '01-splash-screen.png',
  'gladius-hub': '01-homepage.png',
  'nardium-dex': '01-Home-Swap.png',
  'nexus': '01-home-hero.png',
  'quantum-hedge': '01-landing-hero.png',
  'sseum-games': '01-home-hero.png',
  'susinik': '01-landing-hero.png',
  'templum-dao': '01-home.png',
  'trade-mad': '01-landing-hero.png',
  'tributum': '01_Home.png',
  'vault': '01-landing-hero.png',
  'veritas-id': '01-home.png',
  'vigil-ai': '01-homepage.png',
}

/**
 * Obtiene la ruta de la primera imagen de una plataforma
 */
export function getFirstPlatformImage(slug: string): string | null {
  const fileName = platformFirstImage[slug]
  if (!fileName) return null
  return `/images/platforms/${slug}/${fileName}`
}

/**
 * Plataformas que tienen imágenes disponibles
 */
export const platformsWithImages = Object.keys(platformFirstImage)

/**
 * Mapeo completo de TODAS las imágenes para cada plataforma
 * Esto permite al carrusel mostrar todas las imágenes disponibles
 */
export const platformAllImages: Record<string, string[]> = {
  'argentum-bridge': Array.from({ length: 15 }, (_, i) => {
    const num = (i + 1).toString().padStart(2, '0')
    const names = [
      '01-home-hero.png', '02-home-features.png', '03-home-how-it-works.png',
      '04-home-footer.png', '05-bridge.png', '06-liquidity.png', '07-analytics.png',
      '08-portfolio.png', '09-about.png', '10-docs.png', '11-faq.png',
      '12-blog.png', '13-contact.png', '14-terms.png', '15-disclaimer.png'
    ]
    return names[i]
  }),
  'astrid': Array.from({ length: 15 }, (_, i) => {
    const names = [
      '01-landing-hero.png', '02-landing-features.png', '03-landing-howItWorks.png',
      '04-landing-footer.png', '05-login.png', '06-register.png', '07-dashboard.png',
      '08-dashboard-bottom.png', '09-invoices.png', '10-disbursements.png',
      '11-wallets.png', '12-compliance.png', '13-compliance-bottom.png',
      '14-settings-profile.png', '15-settings-security.png'
    ]
    return names[i]
  }),
  'bb-nft': [
    '01-home-landing.png', '02-home-bottom.png', '03-marketplace.png', '04-dashboard.png',
    '05-crowdfunding.png', '06-dao.png', '07-papers.png', '08-ip-assets.png',
    '09-library.png', '12-docs.png', '13-help.png', '14-terms.png', '15-contact.png'
  ],
  'bitboots': Array.from({ length: 15 }, (_, i) => {
    const names = [
      '01-home-hero.png', '02-home-features.png', '03-home-chains.png',
      '04-home-how-it-works.png', '05-pricing.png', '06-investors.png',
      '07-institutions.png', '08-security.png', '09-dashboard.png', '10-marketplace.png',
      '11-bot-builder.png', '12-dashboard-bots.png', '13-marketplace-bots.png',
      '14-investors-details.png', '15-institutions-details.png'
    ]
    return names[i]
  }),
  'flux': Array.from({ length: 15 }, (_, i) => {
    const names = [
      '01-Landing-Page.png', '02-Login-Screen.png', '03-Dashboard-Overview.png',
      '04-Payments-Hub.png', '05-Treasury-Hub.png', '06-Crypto-Hub.png',
      '07-Analytics-Reports.png', '08-AI-Predictive-Treasury.png', '09-CFO-Virtual-AI.png',
      '10-Autonomous-Treasury.png', '11-Cross-Chain-Treasury.png', '12-Compliance-Security.png',
      '13-API-Banking.png', '14-Innovation-Hub.png', '15-Virtual-Cards.png'
    ]
    return names[i]
  }),
  'forge': Array.from({ length: 15 }, (_, i) => {
    const names = [
      '01-splash-screen.png', '02-login.png', '03-dashboard.png', '04-ai-chat.png',
      '05-contracts.png', '06-trading-bots.png', '07-templates.png', '08-audits.png',
      '09-deployments.png', '10-analytics.png', '11-projects.png', '12-settings.png',
      '13-dashboard-projects.png', '14-bot-creation.png', '15-analytics-detail.png'
    ]
    return names[i]
  }),
  'gladius-hub': Array.from({ length: 15 }, (_, i) => {
    const names = [
      '01-homepage.png', '02-marketplace.png', '03-tournaments.png', '04-teams.png',
      '05-betting.png', '06-streams.png', '07-leaderboards.png', '08-docs.png',
      '09-api-docs.png', '10-support.png', '11-about.png', '12-whitepaper.png',
      '13-contact.png', '14-terms.png', '15-privacy.png'
    ]
    return names[i]
  }),
  'nardium-dex': [
    '01-Home-Swap.png', '02-Swap-TokenSelector.png', '03-Swap-Settings.png',
    '08-Stake.png', '09-Stake-Tiers.png', '10-NFT-Explore.png', '11-NFT-Collections.png',
    '12-Analytics.png', '13-Home-Features.png', '14-Portfolio-Scrolled.png', '15-Farm-Details.png'
  ],
  'nexus': Array.from({ length: 15 }, (_, i) => {
    const names = [
      '01-home-hero.png', '02-home-products.png', '03-home-footer.png', '04-login-modal.png',
      '05-dashboard-main.png', '06-portfolio-overview.png', '07-my-vaults.png',
      '08-crypto-wallets.png', '09-staking.png', '10-invoices.png', '11-bank-guarantees.png',
      '12-trading-dashboard.png', '13-membership-tier.png', '14-profile-settings.png',
      '15-infravault.png'
    ]
    return names[i]
  }),
  'quantum-hedge': [
    '01-landing-hero.png', '02-landing-features.png', '03-landing-howitworks.png',
    '04-landing-strategies.png', '05-landing-pricing.png', '06-landing-security.png',
    '09-portfolio.png', '10-analytics.png', '11-governance.png', '12-docs.png',
    '13-faq.png', '14-blog.png', '15-contact.png'
  ],
  'sseum-games': Array.from({ length: 15 }, (_, i) => {
    const names = [
      '01-home-hero.png', '02-home-features.png', '03-home-games.png', '04-home-footer.png',
      '05-marketplace.png', '06-games.png', '07-tournaments.png', '08-guilds.png',
      '09-leaderboards.png', '10-metaverse.png', '11-tokenomics.png', '12-roadmap.png',
      '13-docs.png', '14-terms.png', '15-contact.png'
    ]
    return names[i]
  }),
  'susinik': [
    '01-landing-hero.png', '02-landing-como-funciona.png', '03-landing-testimonios.png',
    '04-registro.png', '05-login.png', '06-dashboard.png', '07-mis-creditos.png',
    '08-marketplace.png', '09-proyectos.png', '10-funding.png', '11-footprint.png',
    '12-corporate.png'
  ],
  'templum-dao': Array.from({ length: 15 }, (_, i) => {
    const names = [
      '01-home.png', '02-explore.png', '03-live-auctions.png', '04-how-it-works.png',
      '05-pricing.png', '06-about.png', '07-ndh-token.png', '08-staking-info.png',
      '09-governance-info.png', '10-curation.png', '11-liquidity-mining.png',
      '12-ecosystem.png', '13-docs.png', '14-whitepaper.png', '15-terms.png'
    ]
    return names[i]
  }),
  'trade-mad': [
    '01-landing-hero.png', '02-landing-features.png', '03-landing-footer.png',
    '05-register.png', '06-dashboard.png', '07-invoices.png', '08-purchase-orders.png',
    '09-letters-of-credit.png', '10-escrow.png', '11-shipments.png', '12-payments.png',
    '13-credit.png', '14-analytics.png', '15-companies.png'
  ],
  'tributum': Array.from({ length: 15 }, (_, i) => {
    const names = [
      '01_Home.png', '02_Browse.png', '03_Marketplace.png', '04_HowItWorks.png',
      '05_Pricing.png', '06_About.png', '07_Blog.png', '08_FAQ.png',
      '09_Contact.png', '10_Help.png', '11_Terms.png', '12_Privacy.png',
      '13_RiskDisclosure.png', '14_Compliance.png', '15_Sell.png'
    ]
    return names[i]
  }),
  'vault': Array.from({ length: 15 }, (_, i) => {
    const names = [
      '01-landing-hero.png', '02-landing-features.png', '03-landing-pricing.png',
      '04-paymaster-dashboard.png', '05-paymaster-garantias.png', '06-paymaster-bovedas.png',
      '07-paymaster-afiliados.png', '08-paymaster-analytics.png', '09-affiliate-dashboard.png',
      '10-affiliate-comisiones.png', '11-affiliate-referidos.png', '12-institution-dashboard.png',
      '13-institution-monitor.png', '14-institution-compliance.png', '15-institution-metricas.png'
    ]
    return names[i]
  }),
  'veritas-id': [
    '01-home.png', '02-about.png', '03-dashboard.png', '04-credentials.png',
    '06-marketplace.png', '09-docs.png', '10-api-docs.png', '11-blog.png',
    '12-faq.png', '13-contact.png', '14-privacy.png', '15-terms.png'
  ],
  'vigil-ai': Array.from({ length: 15 }, (_, i) => {
    const names = [
      '01-homepage.png', '02-marketplace.png', '03-categories.png', '04-creators.png',
      '05-about.png', '06-docs.png', '07-api-reference.png', '08-tutorials.png',
      '09-blog.png', '10-careers.png', '11-privacy.png', '12-terms.png',
      '13-connect-wallet.png', '14-dashboard.png', '15-create-agent.png'
    ]
    return names[i]
  }),
}

/**
 * Obtiene todas las rutas de imágenes de una plataforma
 */
export function getAllPlatformImages(slug: string): string[] {
  const images = platformAllImages[slug]
  if (!images) return []
  return images.map(img => `/images/platforms/${slug}/${img}`)
}
