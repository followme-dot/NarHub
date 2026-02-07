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
