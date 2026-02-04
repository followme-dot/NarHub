// Datos adicionales para las páginas de producto
// Se combinan con los datos base de copy.ts

export const productExtras: Record<string, {
  elevatorPitch: string
  description: string
  overview: string
  marketOpportunity: string
  competitiveAdvantage: string
  keyFeatures: { title: string; description: string }[]
  whyBuy: string[]
  useCase: { title: string; before: string[]; after: string[]; roi: string }
  deliverables: string[]
  idealFor: string[]
  status: { ready: boolean; description: string }
  gradientFrom: string
  gradientTo: string
}> = {
  'bitboots': {
    elevatorPitch: 'Trading bot con IA que ejecuta 20+ estrategias en 15 exchanges automáticamente. Backtested: 42% CAGR. Reinforcement learning auto-optimiza parámetros.',
    description: 'BITBOOTS representa la próxima generación de trading algorítmico para criptomonedas. Desarrollado durante 3 años por un equipo de ingenieros de Goldman Sachs, Jane Street y Google DeepMind, este sistema combina la precisión del trading cuantitativo institucional con la accesibilidad de una plataforma SaaS moderna. A diferencia de los bots de trading tradicionales que requieren configuración manual constante, BITBOOTS utiliza Reinforcement Learning avanzado (algoritmo PPO) para auto-optimizar sus estrategias semanalmente, adaptándose a las condiciones cambiantes del mercado sin intervención humana.',
    overview: 'El mercado de trading algorítmico de criptomonedas está experimentando un crecimiento explosivo. Con más de 5 millones de traders activos utilizando algún tipo de automatización, y un volumen diario que supera los $50 mil millones, la demanda de soluciones sofisticadas pero accesibles nunca ha sido mayor. BITBOOTS captura esta oportunidad ofreciendo capacidades de trading institucional a traders retail y pequeños fondos, democratizando el acceso a estrategias que antes solo estaban disponibles para hedge funds con equipos de docenas de quants.',
    marketOpportunity: 'El mercado TAM de software de trading automatizado alcanzará los $2.1B para 2027, con un CAGR del 12.3%. Actualmente solo existen 3 competidores serios en el espacio de bots con IA real (no reglas simples), y ninguno ofrece la combinación de Reinforcement Learning + soporte multi-exchange + aplicaciones móviles nativas que BITBOOTS proporciona. El modelo SaaS con suscripciones de $99-499/mes genera márgenes brutos del 89%, con un LTV promedio de $2,400 por usuario.',
    competitiveAdvantage: 'Mientras que competidores como 3Commas o Cryptohopper ofrecen bots basados en reglas predefinidas, BITBOOTS es el único que implementa verdadero machine learning con auto-optimización. Nuestro modelo PPO se re-entrena cada domingo con los datos de la semana, ajustando parámetros de riesgo, tamaños de posición y señales de entrada/salida. El resultado: un Sharpe Ratio de 2.1 sostenido durante 10 años de backtesting, superando significativamente el benchmark del mercado. Además, nuestra arquitectura en Rust garantiza latencias de ejecución inferiores a 5ms, crítico para estrategias de arbitraje.',
    keyFeatures: [
      { title: 'IA Avanzada', description: 'Reinforcement Learning PPO que optimiza semanalmente' },
      { title: '15 Exchanges', description: 'Binance, Coinbase, Kraken, OKX + DEX' },
      { title: 'Backtesting', description: '10 años de datos, Sharpe 2.1' },
      { title: 'Mobile Apps', description: 'iOS y Android nativos' }
    ],
    whyBuy: ['5M traders usan bots, solo 3 competidores serios', '89% margen bruto, SaaS recurrente', 'Exit potencial: $150M+'],
    useCase: { title: 'Day Trader $200K', before: ['8h/día trading', '$10K/mes profit'], after: ['1h/día monitoring', '$24K/mes profit'], roi: '+137% más que manual' },
    deliverables: ['Código completo (Python, Rust, React)', 'ML models trained', 'Documentación 500+ páginas', '90 días soporte'],
    idealFor: ['Exchanges', 'Fintechs', 'Fondos de inversión'],
    status: { ready: true, description: '847 beta testers, $180K MRR' },
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-red-600'
  },
  'nardium-dex': {
    elevatorPitch: 'DEX híbrido: Uniswap V3 concentrated liquidity + order book + cross-chain swaps. LPs ganan 3-5× más. Triple audited.',
    description: 'NARDIUM DEX redefine lo que es posible en el trading descentralizado. Mientras que los DEX tradicionales como Uniswap operan exclusivamente con pools de liquidez AMM, y los exchanges centralizados dependen de order books tradicionales, NARDIUM fusiona ambos mundos en una arquitectura híbrida revolucionaria. El resultado es el mejor precio posible para cada trade: el sistema automáticamente enruta órdenes entre el AMM y el order book, encontrando la ejecución óptima en milisegundos.',
    overview: 'El volumen de trading en exchanges descentralizados superó los $730 mil millones en 2024, y continúa creciendo exponencialmente. Sin embargo, los DEX actuales sufren de problemas crónicos: slippage elevado para trades grandes, impermanent loss devastador para proveedores de liquidez, y fragmentación de liquidez entre chains. NARDIUM resuelve estos tres problemas fundamentales con innovaciones técnicas únicas: concentrated liquidity al estilo Uniswap V3 pero con un order book integrado, protección de IL garantizada para LPs de largo plazo, y swaps cross-chain nativos via LayerZero.',
    marketOpportunity: 'Con un TVL objetivo de $100M+ en el primer año y fees del 0.3% por swap, NARDIUM puede generar $3M+ en revenue anual solo con el exchange. Añadiendo servicios premium como trading OTC, yield farming, y el programa de protección IL, el revenue potencial supera los $10M anuales. El exit potencial para un DEX con estas métricas está en el rango de $200-300M, como demuestran adquisiciones recientes en el espacio.',
    competitiveAdvantage: 'NARDIUM es el único DEX que ofrece los tres diferenciadores simultáneamente: (1) Hybrid order book que mejora precios un 15-25% vs AMM puro, (2) IL Protection que reembolsa el 50% de impermanent loss para LPs con >30 días de staking, y (3) Cross-chain swaps en 5 minutos sin bridges externos. Además, con $600K invertidos en auditorías de Trail of Bits, Quantstamp y OpenZeppelin, es el DEX más auditado del mercado.',
    keyFeatures: [
      { title: 'Hybrid AMM', description: 'Order book + AMM = mejor precio' },
      { title: 'Cross-Chain', description: 'ETH→BSC en 5 min via LayerZero' },
      { title: 'IL Protection', description: '50% IL reembolsado si LP >30 días' },
      { title: 'Triple Audit', description: '$600K en audits de seguridad' }
    ],
    whyBuy: ['$730B volumen/año en DEX', 'Único con hybrid order book', 'Exit: $200-300M'],
    useCase: { title: 'LP con $100K', before: ['Uniswap V2', '5.5% APY', '$5K/año'], after: ['NARDIUM', '38% APY', '$38K/año'], roi: '+598% más' },
    deliverables: ['Smart contracts 5 chains', 'Audit reports completos', 'Discord 2.5K members', '90 días soporte'],
    idealFor: ['Exchanges', 'L1/L2 chains', 'DeFi protocols'],
    status: { ready: true, description: 'TVL $12M, 200 LPs activos' },
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-cyan-500'
  },
  'argentum-bridge': {
    elevatorPitch: 'Bridge 10 blockchains en 5 minutos. Dual-protocol security. $10M insurance. 0.1% fee.',
    description: 'ARGENTUM BRIDGE es la infraestructura de interoperabilidad más segura y rápida del ecosistema blockchain. Cuando los usuarios necesitan mover activos entre Ethereum, Solana, Polygon, BSC, Arbitrum, Optimism, Avalanche, Fantom, Cosmos o Near, ARGENTUM completa la transferencia en solo 5 minutos con seguridad de nivel institucional. El secreto está en nuestra arquitectura de seguridad dual: cada transacción es verificada tanto por la red de validadores de LayerZero como por Wormhole, garantizando que ningún bridge hack puede afectar los fondos de los usuarios.',
    overview: 'El mercado de bridges cross-chain procesa más de $730 mil millones anuales en transferencias, pero ha perdido más de $2 mil millones en hacks durante los últimos 3 años. Cada gran hack de bridge (Ronin $625M, Wormhole $320M, Nomad $190M) ha ocurrido porque dependían de un único punto de fallo. ARGENTUM elimina este riesgo con redundancia dual: si un protocolo de mensajería falla o es comprometido, el otro sigue funcionando y bloquea la transacción maliciosa.',
    marketOpportunity: 'Con fees del 0.1% (vs 0.3-0.5% de competidores) y tiempos 3-5× más rápidos, ARGENTUM puede capturar el 5-10% del mercado de bridges en 2 años, representando $35-70M en volumen anual. A fees del 0.1%, esto genera $350K-700K en revenue recurrente. El verdadero valor está en el modelo B2B: wallets, DEX agregadores y L1/L2 chains pagan $50K-200K anuales por integrar ARGENTUM como su solución de bridging.',
    competitiveAdvantage: 'Ningún otro bridge ofrece la combinación de: (1) Dual-protocol security con LayerZero + Wormhole, (2) Settlement en 5 minutos (vs 30-60 min de competidores), (3) $10M de insurance coverage con Lloyd\'s y Nexus Mutual, y (4) Soporte nativo para 10 chains incluyendo Cosmos IBC. Nuestros relayers operan en AWS con 99.99% uptime garantizado, y el código está auditado por Halborn y Trail of Bits.',
    keyFeatures: [
      { title: '10 Chains', description: 'ETH, BSC, Polygon, Solana, Cosmos...' },
      { title: '5 Min Settlement', description: 'LayerZero + optimistic verification' },
      { title: 'Dual Security', description: 'LayerZero + Wormhole redundancy' },
      { title: '$10M Insurance', description: "Lloyd's + Nexus Mutual coverage" }
    ],
    whyBuy: ['$730B/año cross-chain volume', 'Más rápido y barato que competidores', 'Exit: $20-30M'],
    useCase: { title: 'Arbitrageur', before: ['30 min bridge', 'Oportunidad perdida'], after: ['5 min bridge', '$457 profit/trade'], roi: '$400K+ anuales' },
    deliverables: ['Smart contracts 10 chains', 'Relayer software', 'Insurance policies', '90 días 24/7 support'],
    idealFor: ['Wallets', 'DEX aggregators', 'L1/L2 chains'],
    status: { ready: true, description: 'Live 10 chains, 99.95% success' },
    gradientFrom: 'from-slate-600',
    gradientTo: 'to-zinc-500'
  },
  'aureum-vault': {
    elevatorPitch: 'Custody institucional: multi-sig, Fireblocks MPC, $100M insurance, SOC 2 Type II.',
    description: 'AUREUM VAULT es la solución de custodia institucional que permite a hedge funds, family offices, tesorerías corporativas y exchanges gestionar activos digitales con el mismo nivel de seguridad y compliance que los bancos tradicionales. Construido sobre la infraestructura de Fireblocks MPC y AWS CloudHSM, AUREUM ofrece la única solución de custodia cripto con certificación SOC 2 Type II completa, verificada por Ernst & Young, y $100M de insurance coverage.',
    overview: 'El mercado de custodia institucional de criptomonedas representa más de $200 mil millones en AUM y crece al 35% anual. Sin embargo, las opciones actuales son limitadas: Coinbase Custody cobra fees exorbitantes, Fireblocks requiere implementación compleja, y las soluciones auto-custodiadas carecen del compliance necesario. AUREUM llena este gap ofreciendo custodia enterprise-grade como servicio, con onboarding en días en lugar de meses.',
    marketOpportunity: 'Con fees del 0.4% anual sobre AUM (vs 0.5-0.75% de Coinbase Custody), AUREUM puede capturar $500M-1B en AUM en los primeros 18 meses, generando $2-4M en revenue recurrente. El verdadero upside viene del staking: con $200M en AUM generando 4-6% de staking rewards, AUREUM puede obtener 10-15% de esos yields como fee, añadiendo $800K-1.8M anuales adicionales.',
    competitiveAdvantage: 'AUREUM es la única solución que combina: (1) SOC 2 Type II certification (cuesta $3M+ y 18 meses obtenerla), (2) $100M insurance con Lloyd\'s + Nexus + Coincover, (3) Soporte para 20+ chains incluyendo Bitcoin nativo, Ethereum, Solana y todos los L2s principales, (4) Multi-sig + MPC híbrido que elimina single points of failure, y (5) Staking integrado con yields optimizados automáticamente.',
    keyFeatures: [
      { title: 'SOC 2 Type II', description: 'Certificado Ernst & Young' },
      { title: '$100M Insurance', description: "Lloyd's + Nexus + Coincover" },
      { title: 'MPC + HSM', description: 'Fireblocks + AWS CloudHSM' },
      { title: '20+ Chains', description: 'BTC, ETH, SOL + L2s' }
    ],
    whyBuy: ['$200B institutional AUM', 'SOC 2 cuesta $3M conseguir', 'Exit: $300M+'],
    useCase: { title: 'Hedge Fund $200M', before: ['Self-custody', '$350K/año', 'Riesgo catastrófico'], after: ['AUREUM', '$800K/año', '+$6.4M staking profit'], roi: '8× return' },
    deliverables: ['Backend Go', 'SOC 2 Report', 'Insurance policies', '90 días 24/7 support'],
    idealFor: ['Crypto exchanges', 'Hedge funds', 'Family offices'],
    status: { ready: true, description: 'SOC 2 Certified, $12M AUM' },
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-yellow-500'
  },
  'trade-mad': {
    elevatorPitch: 'Crypto taxes: 50+ exchanges, 25 países, IRS Form 8949, DeFi/NFT tracking.',
    description: 'TRADE MAD resuelve el problema más frustrante que enfrentan los traders de criptomonedas: calcular sus impuestos correctamente. Con soporte para más de 50 exchanges y 25 jurisdicciones fiscales, TRADE MAD automatiza completamente el proceso de generar reportes fiscales precisos, incluyendo el infame Form 8949 del IRS, declaraciones para HMRC en UK, y formatos específicos para Alemania, Francia, España y más.',
    overview: 'Se estima que 50 millones de estadounidenses poseen criptomonedas, y el IRS ha intensificado dramáticamente su enforcement. Las multas por reportes incorrectos pueden alcanzar el 75% del impuesto adeudado, y el tracking manual de miles de transacciones en múltiples exchanges, DEXs y wallets es prácticamente imposible. TRADE MAD automatiza este proceso conectándose directamente a APIs de exchanges, escaneando wallets on-chain, y aplicando las reglas fiscales correctas para cada jurisdicción.',
    marketOpportunity: 'Con 50M+ crypto taxpayers solo en USA y un ticket promedio de $150-300/año, el TAM supera los $10 mil millones. Competidores como CoinTracker y Koinly han demostrado el modelo con valoraciones de $1-2B. TRADE MAD se diferencia con su portal para CPAs (white-label), permitiendo capturar no solo usuarios finales sino también el mercado de accounting firms que necesitan herramientas especializadas.',
    competitiveAdvantage: 'TRADE MAD ofrece: (1) El único portal white-label para contables con pricing por cliente, (2) Detección automática de wash sales bajo la regla IRS 30-day, (3) Soporte completo para DeFi (yield farming, liquidity mining, airdrops), NFTs y staking, y (4) Content library de 100+ artículos SEO-optimizados que generan 50K+ visitas orgánicas mensuales.',
    keyFeatures: [
      { title: '50+ Exchanges', description: 'API + CSV + blockchain scan' },
      { title: '25 Países', description: 'US, UK, Germany, France...' },
      { title: 'Wash Sale', description: 'Auto-detection IRS 30-day rule' },
      { title: 'CPA Portal', description: 'Colaboración con contables' }
    ],
    whyBuy: ['50M crypto taxpayers US', 'IRS enforcement increasing', 'Exit: $50-100M'],
    useCase: { title: 'Trader $150K gains', before: ['40h trabajo', '$2K CPA'], after: ['2h review', '$300/año'], roi: '2,600% return' },
    deliverables: ['Backend Django', 'Tax templates', 'SEO content 100+ posts', '90 días consulting'],
    idealFor: ['TurboTax/H&R Block', 'Crypto exchanges', 'Accounting firms'],
    status: { ready: true, description: '8,470 users, $10.6K MRR' },
    gradientFrom: 'from-green-600',
    gradientTo: 'to-emerald-500'
  },
  'templum-dao': {
    elevatorPitch: 'NFT marketplace con zkML anti-wash trading, 4 tipos de subasta, fractional ownership.',
    description: 'TEMPLUM DAO es el marketplace de NFTs diseñado para resolver el problema más grande de la industria: el wash trading. Utilizando zkML (zero-knowledge machine learning), TEMPLUM detecta y filtra el 99% de las transacciones de wash trading en tiempo real, mostrando solo precios y volúmenes genuinos. Esto crea el único marketplace donde los compradores pueden confiar en que el floor price y el historial de ventas reflejan demanda real.',
    overview: 'El mercado de NFTs alcanzó $25 mil millones en volumen en 2024, pero estudios estiman que hasta el 70% de ese volumen es wash trading artificial. Colecciones que aparentan floors de 10 ETH tienen demanda real cercana a 1 ETH. TEMPLUM soluciona esto con detección on-chain de patrones de wash trading usando Graph Neural Networks y pruebas de zero-knowledge que protegen la privacidad mientras verifican legitimidad.',
    marketOpportunity: 'Con un fee del 2.5% (standard en el mercado) sobre volumen genuino, y capturando el 5% del mercado de NFTs en 2 años ($625M volumen), TEMPLUM puede generar $15M+ en fees anuales. Pero el verdadero valor está en el trust: los compradores pagarán premium por la seguridad de precios reales, y las colecciones premium migrarán a TEMPLUM para demostrar legitimidad.',
    competitiveAdvantage: 'TEMPLUM ofrece: (1) zkML anti-wash trading único en el mercado con 99% accuracy, (2) 4 tipos de subasta (English, Dutch, Sealed-bid, Vickrey) para maximizar precios, (3) Fractional ownership que permite comprar 10% de un NFT de $100K, y (4) Cross-chain con Ethereum, Solana y Polygon.',
    keyFeatures: [
      { title: '4 Subastas', description: 'English, Dutch, Sealed, Vickrey' },
      { title: 'zkML', description: '99% accuracy wash trading detection' },
      { title: 'Fractional', description: 'Compra 10% de un NFT' },
      { title: 'Cross-Chain', description: 'ETH, SOL, Polygon' }
    ],
    whyBuy: ['$25B NFT volume', 'zkML único en el mercado', 'Exit: $40-60M'],
    useCase: { title: 'NFT Collector', before: ['OpenSea', 'Wash trading inflates prices'], after: ['TEMPLUM', 'Precios reales, ahorro $10K+'], roi: 'Evita overpay' },
    deliverables: ['Smart contracts', 'zkML research paper', 'Audit reports', '90 días soporte'],
    idealFor: ['NFT platforms', 'Art galleries', 'Gaming companies'],
    status: { ready: true, description: 'Audited, zkML operational' },
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-indigo-600'
  },
  'sseum-games': {
    elevatorPitch: 'Play-to-Earn: 20 juegos, $5-20/día para casuals, NFT items, tournaments.',
    description: 'SSEUM GAMES es la plataforma Play-to-Earn diseñada para ser sostenible, divertida y accesible. A diferencia de juegos como Axie Infinity que colapsaron por economías insostenibles, SSEUM implementa tokenomics cuidadosamente balanceadas que garantizan earnings de $5-20/día para jugadores casuales durante años, no meses. Con 20 juegos diversos (strategy, RPG, racing, puzzles, card games), hay algo para cada tipo de gamer.',
    overview: 'El mercado de mobile gaming genera $100+ mil millones anuales, y más de 10 millones de jugadores ya participan en economías Play-to-Earn. Sin embargo, la mayoría de juegos P2E fallan en 6-12 meses por inflación descontrolada de tokens. SSEUM resuelve esto con: (1) sinks de tokens robustos, (2) earnings caps por player, (3) sistema de scholarships que redistribuye valor, y (4) juegos genuinamente divertidos que retienen users por gameplay, no solo por dinero.',
    marketOpportunity: 'Con 1M+ daily active players objetivo en 2 años, generando $10/día promedio, el volume económico interno supera $3.6B anuales. SSEUM captura 5-10% de este volumen en fees de marketplace, retiro de tokens, y ventas de NFTs premium, generando $180-360M en revenue. El modelo de guilds y scholarships crea network effects virales que reducen CAC a casi cero.',
    competitiveAdvantage: 'SSEUM ofrece: (1) 20 juegos funcionales desde day 1 (vs competidores con 1-2 juegos), (2) Tokenomics auditadas por Gauntlet que garantizan sostenibilidad 10+ años, (3) Sistema de scholarships donde investors rentean NFTs a players y comparten earnings, y (4) Mobile-first design optimizado para mercados emergentes (70% del target audience).',
    keyFeatures: [
      { title: '20 Juegos', description: 'Strategy, RPG, racing, puzzles' },
      { title: '$5-20/día', description: 'Earnings realistas y sostenibles' },
      { title: 'Scholarships', description: 'Renta NFTs a otros jugadores' },
      { title: 'Mobile-First', description: '70% juegan en móvil' }
    ],
    whyBuy: ['1B+ mobile gamers', '10M ya juegan P2E', 'Exit: $30-50M'],
    useCase: { title: 'Jugador Filipinas', before: ['Min wage $300/mes'], after: ['SSEUM $415/mes', 'Payback 15 días'], roi: '+138% sobre salario' },
    deliverables: ['20 juegos Unity', 'Smart contracts', 'Game design docs', '90 días balance consulting'],
    idealFor: ['Gaming companies', 'Crypto exchanges', 'VCs'],
    status: { ready: true, description: '20 juegos funcionales' },
    gradientFrom: 'from-pink-600',
    gradientTo: 'to-rose-500'
  },
  'bb-nft': {
    elevatorPitch: 'Lanza 10K NFTs en 1 semana. No-code. Generative engine. Solana support.',
    description: 'BB NFT es la plataforma todo-en-uno para crear, generar y lanzar colecciones de NFTs sin escribir una sola línea de código. Diseñada para artistas, marcas y emprendedores, BB NFT reduce el tiempo de lanzamiento de 3 meses a 1 semana, y el costo de $7,500+ (agencia) a solo $500-2,000 (DIY). El generative engine combina automáticamente tus traits artísticos para crear 10,000 NFTs únicos con rarities perfectamente balanceadas.',
    overview: 'Cada año se lanzan más de 10,000 proyectos de NFTs, pero la mayoría fracasan en la fase técnica: smart contracts incorrectos, metadata mal formateada, o mints que fallan bajo carga. BB NFT elimina estos riesgos con contratos pre-auditados, IPFS hosting automático, y infraestructura de mint probada con 1M+ NFTs generados. El resultado: creators se enfocan en arte y comunidad, no en código.',
    marketOpportunity: 'El mercado de herramientas para NFT creators representa $500M+ anuales, con pricing de $200-2,000 por proyecto. BB NFT puede capturar 5-10% de este mercado con su modelo freemium + premium. El verdadero upside está en el marketplace fee: 1% de cada reventa secundaria genera revenue perpetuo de proyectos exitosos lanzados en la plataforma.',
    competitiveAdvantage: 'BB NFT ofrece: (1) Generative engine con 50+ rarity algorithms y preview en tiempo real, (2) Contratos ERC-721A gas-optimizados (50% menos gas que ERC-721 standard), (3) Soporte completo para Solana con Metaplex Candy Machine v3 integrado, y (4) Marketing toolkit con Discord bot, Twitter automation, y whitelist management.',
    keyFeatures: [
      { title: 'No-Code', description: 'Upload traits, auto-combine' },
      { title: 'ERC-721A', description: 'Gas optimized contracts' },
      { title: 'Solana', description: 'Metaplex Candy Machine v3' },
      { title: 'Marketing', description: 'Twitter bot, Discord integration' }
    ],
    whyBuy: ['10K+ NFT projects/año', '$500 vs $5K agency', 'Exit: $15-25M'],
    useCase: { title: 'NFT Project', before: ['$7.5K, 3 meses'], after: ['$2K, 1 semana', 'Mint $1M'], roi: '23,550% ROI' },
    deliverables: ['Generative engine', 'Smart contracts audited', 'Video tutorials', '1 white-glove launch'],
    idealFor: ['NFT creators', 'Agencies', 'Gaming studios'],
    status: { ready: true, description: 'Production ready' },
    gradientFrom: 'from-violet-600',
    gradientTo: 'to-purple-500'
  },
  'gladius-hub': {
    elevatorPitch: 'Steam para Web3: 500+ juegos, 10% commission, achievement NFTs.',
    description: 'GLADIUS HUB es Steam reinventado para la era Web3. Un launcher de juegos descentralizado que ofrece a developers el 90% de sus ventas (vs 70% en Steam) mientras proporciona a players una experiencia superior con achievement NFTs, cross-game items, y rewards por jugar. Con más de 500 juegos Web3 catalogados desde el lanzamiento, GLADIUS es el punto de entrada definitivo para el gaming blockchain.',
    overview: 'El monopolio de Steam en PC gaming (30% fee) ha creado frustración masiva entre developers. Epic Games capturó parte de este mercado con 12% fees, pero ignora completamente Web3. GLADIUS llena este vacío: mismo UX que Steam (launcher, cloud saves, friends, achievements) pero con fees del 10%, propiedad real de items vía NFTs, y economics que recompensan tanto a developers como a players.',
    marketOpportunity: 'El mercado de game distribution genera $30B+ anuales en fees. Con 10M+ jugadores Web3 activos y creciendo 50% YoY, GLADIUS puede capturar $100M+ en GMV en 3 años, generando $10M+ en fees anuales. Los network effects son poderosos: más juegos atraen más players, más players atraen más developers, y los achievement NFTs crean lock-in que Steam no puede replicar.',
    competitiveAdvantage: 'GLADIUS ofrece: (1) 10% commission (vs 30% Steam, 12% Epic), (2) Achievement NFTs tradeable entre players, (3) Cross-game items que funcionan en múltiples títulos, (4) ML-powered game discovery que encuentra juegos perfectos para cada user, y (5) 500+ juegos pre-catalogados desde launch.',
    keyFeatures: [
      { title: '500+ Juegos', description: 'Catálogo curado' },
      { title: '10% Fee', description: 'vs 30% de Steam' },
      { title: 'Achievement NFTs', description: 'Badges on-chain' },
      { title: 'ML Discovery', description: 'Recomendaciones personalizadas' }
    ],
    whyBuy: ['10M+ Web3 gamers', 'Network effects', 'Exit: $20-40M'],
    useCase: { title: 'Indie Dev', before: ['Self-hosting', '$24K profit'], after: ['GLADIUS', '$180K profit'], roi: '7.5× más profit' },
    deliverables: ['Launcher desktop', 'Backend + catalog', 'Unity/Unreal SDKs', '500 juegos preloaded'],
    idealFor: ['Game publishers', 'Crypto exchanges', 'VCs'],
    status: { ready: true, description: '500+ juegos catalogados' },
    gradientFrom: 'from-red-600',
    gradientTo: 'to-orange-500'
  },
  'veritas-id': {
    elevatorPitch: 'Digital Identity W3C: DIDs, zero-knowledge proofs, 50+ credential issuers.',
    description: 'VERITAS ID es la infraestructura de identidad digital que habilita el futuro de la web. Utilizando el standard W3C para Decentralized Identifiers (DIDs) y Verifiable Credentials, VERITAS permite a usuarios probar quiénes son sin revelar información innecesaria. ¿Necesitas probar que eres mayor de 18? VERITAS lo certifica sin revelar tu fecha de nacimiento. ¿Que tienes un título universitario? Sin mostrar tu expediente completo. Zero-knowledge proofs hacen esto posible.',
    overview: 'El mercado de identity verification alcanzará $30B para 2027, impulsado por regulaciones como GDPR, KYC/AML, y la creciente demanda de privacidad. Sin embargo, las soluciones actuales son centralizadas, vulnerables a breaches, y requieren compartir más datos de los necesarios. VERITAS implementa Self-Sovereign Identity (SSI): los usuarios controlan sus datos, los comparten selectivamente, y pueden revocar acceso en cualquier momento.',
    marketOpportunity: 'Con pricing enterprise de $0.50-2 por verificación, y millones de verificaciones diarias en crypto (KYC), finanzas tradicionales, healthcare, y government, VERITAS puede generar $20-50M anuales en revenue. El modelo B2B2C crea adoption viral: cada empresa que integra VERITAS añade usuarios al network, aumentando el valor de las credentials verificadas.',
    competitiveAdvantage: 'VERITAS ofrece: (1) Compliance W3C DID y Verifiable Credentials desde day 1, (2) 50+ credential issuers integrados (government IDs, universities, employers), (3) Zero-knowledge proofs que preservan privacidad mientras prueban claims, (4) SDK mobile para wallets de identity con UX consumer-friendly, y (5) Enterprise SSO para autenticación corporativa passwordless.',
    keyFeatures: [
      { title: 'W3C DIDs', description: 'Standard interoperable' },
      { title: 'ZK Proofs', description: 'Prove age sin revelar birthdate' },
      { title: '50+ Issuers', description: 'Government IDs, degrees...' },
      { title: 'SSI', description: 'Self-sovereign, you control data' }
    ],
    whyBuy: ['$30B identity market', 'Web3 needs identity', 'Exit: $40-80M'],
    useCase: { title: 'DeFi Protocol', before: ['No KYC', 'Regulatory risk'], after: ['VERITAS', 'Compliant, privacy-preserving'], roi: 'Avoid fines' },
    deliverables: ['DID infrastructure', 'Mobile wallet', 'Enterprise SSO', '90 días integration'],
    idealFor: ['Enterprises', 'DeFi protocols', 'Government'],
    status: { ready: true, description: 'W3C compliant' },
    gradientFrom: 'from-teal-600',
    gradientTo: 'to-cyan-500'
  },
  'vigil-ai': {
    elevatorPitch: 'Web3 Security AI: Graph Neural Networks, $50M fraud prevented, 99.9% detection.',
    description: 'VIGIL AI es el sistema de seguridad más avanzado del ecosistema Web3. Utilizando Graph Neural Networks (GNNs) entrenadas con datos de más de $5 mil millones en hacks históricos, VIGIL detecta rug pulls, exploits, y wash trading en tiempo real, antes de que el ataque se complete. Con menos de 100ms de latencia, exchanges y protocolos pueden bloquear transacciones maliciosas automáticamente.',
    overview: 'El ecosistema cripto ha perdido más de $5 mil millones en hacks, rug pulls y fraudes durante los últimos 3 años. Cada semana aparecen nuevos exploits: flash loan attacks, sandwich attacks, smart contract vulnerabilities. Las soluciones tradicionales (audits, bug bounties) son reactivas. VIGIL AI es proactivo: analiza cada transacción en tiempo real, identifica patrones de ataque, y bloquea antes de que los fondos sean robados.',
    marketOpportunity: 'Con pricing de $20-50K/mes para exchanges y $5-20K/mes para protocolos DeFi, y más de 500 exchanges + 2,000 protocolos DeFi que necesitan seguridad, el TAM supera $200M anuales. Los primeros 5 pilots de VIGIL han prevenido $50M en pérdidas potenciales, demostrando ROI inmediato que justifica contratos enterprise.',
    competitiveAdvantage: 'VIGIL AI ofrece: (1) Graph Neural Networks que detectan patrones invisibles para humanos, (2) 99.9% detection rate con <0.1% false positives, (3) <100ms latency para screening en tiempo real, (4) Training continuo con nuevos vectores de ataque, y (5) Dashboard forense para investigar incidentes post-facto.',
    keyFeatures: [
      { title: 'GNN', description: 'Graph Neural Networks' },
      { title: '99.9%', description: 'Detection rate' },
      { title: '$50M', description: 'Fraud prevented' },
      { title: '<100ms', description: 'Real-time screening' }
    ],
    whyBuy: ['$5B+ lost to hacks annually', 'AI security premium pricing', 'Exit: $100M+'],
    useCase: { title: 'Exchange', before: ['Manual review', 'Hacks, losses'], after: ['VIGIL AI', 'Real-time protection'], roi: 'Prevent $M+ losses' },
    deliverables: ['ML models', 'API integration', 'Custom training', '90 días support'],
    idealFor: ['Exchanges', 'DeFi protocols', 'Wallets'],
    status: { ready: true, description: '5 pilots, $50M prevented' },
    gradientFrom: 'from-indigo-600',
    gradientTo: 'to-blue-500'
  },
  'oraculum': {
    elevatorPitch: 'Oracles: 300+ data feeds, 99.99% uptime, 50% cheaper than Chainlink.',
    description: 'ORACULUM es la red de oracles descentralizada que conecta smart contracts con datos del mundo real. Con más de 300 feeds de datos (precios cripto, forex, commodities, clima, resultados deportivos, eventos) y 30 nodos validadores distribuidos globalmente, ORACULUM ofrece la misma fiabilidad que Chainlink a la mitad del costo. Para protocolos DeFi que gastan $10K+/mes en oracles, esto representa un ahorro de seis cifras anuales.',
    overview: 'Cada protocolo DeFi necesita oracles. Desde Aave que requiere precios para liquidaciones, hasta protocolos de insurance que necesitan datos climáticos, pasando por prediction markets que consumen resultados deportivos. Chainlink domina este mercado con 60%+ share, pero sus fees elevados y arquitectura legacy crean oportunidad para alternativas más eficientes.',
    marketOpportunity: 'El mercado de oracles genera $500M+ anuales en fees, y Chainlink tiene una valoración de $10B+. Con pricing 50% inferior y tecnología superior (consensus más rápido, custom feeds más flexibles), ORACULUM puede capturar 10-20% del mercado en 3 años, representando $50-100M en revenue anual.',
    competitiveAdvantage: 'ORACULUM ofrece: (1) 50% menos costo que Chainlink con mismo uptime, (2) 300+ feeds pre-configurados listos para integrar, (3) Custom feeds en 24-48h (vs semanas en Chainlink), (4) 99.99% uptime SLA con penalidades si no se cumple, y (5) Arquitectura modular que permite staking de tokens propios del protocolo cliente.',
    keyFeatures: [
      { title: '300+ Feeds', description: 'Prices, weather, sports...' },
      { title: '30 Nodes', description: 'Decentralized network' },
      { title: '99.99%', description: 'Uptime SLA' },
      { title: '50% Cheaper', description: 'vs Chainlink' }
    ],
    whyBuy: ['Every protocol needs oracles', 'Chainlink $10B valuation', 'Exit: $50M+'],
    useCase: { title: 'DeFi Protocol', before: ['Chainlink $10K/mes'], after: ['ORACULUM $5K/mes', 'Same reliability'], roi: '50% cost savings' },
    deliverables: ['Node software', 'Smart contracts', 'Custom feed creation', '90 días SLA support'],
    idealFor: ['DeFi protocols', 'Insurance', 'Gaming'],
    status: { ready: true, description: '300+ feeds live' },
    gradientFrom: 'from-fuchsia-600',
    gradientTo: 'to-pink-500'
  },
  'ferrum-pay': {
    elevatorPitch: 'Payments: 50 cryptos + 150 fiat, 1% fees, fraud detection included.',
    description: 'FERRUM PAY es la solución de pagos que permite a cualquier negocio aceptar criptomonedas tan fácilmente como tarjetas de crédito. Con soporte para 50 criptomonedas, conversión automática a 150 monedas fiat, y fees del 1% (vs 2-3% de procesadores tradicionales), FERRUM representa la convergencia de pagos Web2 y Web3. El dashboard unificado muestra ventas crypto y fiat juntas, con settlements diarios en la cuenta bancaria del merchant.',
    overview: 'El mercado de payments crypto alcanzará $100 mil millones para 2027, pero la adopción por merchants sigue siendo baja por complejidad técnica y volatilidad. FERRUM soluciona ambos problemas: integración tan simple como Stripe (copy-paste un widget), y conversión instantánea a fiat que elimina exposición a volatilidad. El merchant ve dólares, el customer paga en Bitcoin.',
    marketOpportunity: 'Con $100B+ en payments crypto proyectados y fees del 1%, el TAM de processing fees supera $1B anual. FERRUM también genera revenue por spreads de conversión (0.2-0.3%) y servicios premium como reporting avanzado, multi-currency, y payouts internacionales. El crecimiento es viral: cada merchant que acepta crypto atrae customers que prefieren pagar con crypto.',
    competitiveAdvantage: 'FERRUM PAY ofrece: (1) Fees del 1% vs 2-3% de BitPay o Coinbase Commerce, (2) Soporte para 50 cryptos incluyendo todos los majors y stables, (3) Conversión automática a 150 monedas fiat con settlements bancarios diarios, (4) Fraud detection AI incluido sin costo adicional, y (5) SDK para cualquier stack (React, Vue, native iOS/Android).',
    keyFeatures: [
      { title: '50 Cryptos', description: 'BTC, ETH, stables...' },
      { title: '150 Fiat', description: 'Global coverage' },
      { title: '1% Fee', description: 'vs 2-3% competitors' },
      { title: 'Fraud AI', description: 'Built-in detection' }
    ],
    whyBuy: ['$100B+ crypto payments market', 'Merchants want crypto', 'Exit: $30-50M'],
    useCase: { title: 'E-commerce', before: ['No crypto', 'Missing sales'], after: ['FERRUM', '+15% revenue'], roi: 'New customer segment' },
    deliverables: ['Payment gateway', 'Merchant dashboard', 'Stripe-like API', '90 días integration'],
    idealFor: ['E-commerce', 'SaaS', 'Marketplaces'],
    status: { ready: true, description: 'Production ready' },
    gradientFrom: 'from-emerald-600',
    gradientTo: 'to-green-500'
  },
  'nexus-grid': {
    elevatorPitch: 'Decentralized compute: GPUs 50% cheaper than AWS, AI/ML workloads.',
    description: 'NEXUS GRID es la red de compute descentralizado que conecta miles de GPUs ociosos alrededor del mundo con startups de AI que necesitan poder de procesamiento. En lugar de pagar $3/hora por una A100 en AWS, developers pagan $1.50/hora en NEXUS, con la misma performance y disponibilidad. El boom de AI ha creado escasez de GPUs; NEXUS desbloquea capacidad latente en data centers, mining farms, y PCs de gamers.',
    overview: 'El mercado de cloud compute crece al 20% anual, y la demanda de GPUs para AI ha creado un cuello de botella histórico. AWS y GCP tienen waitlists de meses para GPUs de alta gama. NEXUS soluciona esto agregando compute de múltiples fuentes: data centers que venden capacidad excedente, ex-mining farms reconvertidas, y prosumers con RTX 4090s. El resultado: 1,000+ GPUs disponibles on-demand.',
    marketOpportunity: 'El mercado de GPU cloud alcanzará $50B para 2027, y la descentralización puede capturar 10-20% ofreciendo mejor pricing. Con margins del 20-30% sobre compute vendido, NEXUS puede generar $50-100M en revenue procesando $250-500M en compute anual. El modelo de token crea additional value: providers stakean para participar, users pagan en tokens, y el treasury crece con usage.',
    competitiveAdvantage: 'NEXUS GRID ofrece: (1) 50% menos costo que AWS/GCP con GPUs equivalentes, (2) 1,000+ GPUs disponibles incluyendo A100, H100, y consumer-grade, (3) Soporte nativo para PyTorch, TensorFlow, y JAX, (4) Billing por segundo (no por hora) para máxima eficiencia, y (5) Cold storage descentralizado integrado para datasets de training.',
    keyFeatures: [
      { title: '50% Cheaper', description: 'vs AWS/GCP' },
      { title: '1000+ GPUs', description: 'Decentralized network' },
      { title: 'AI/ML Ready', description: 'PyTorch, TensorFlow' },
      { title: 'Per-Second', description: 'Billing granularity' }
    ],
    whyBuy: ['$50B+ cloud compute market', 'AI boom = GPU demand', 'Exit: $40-60M'],
    useCase: { title: 'AI Startup', before: ['AWS $50K/mes'], after: ['NEXUS $25K/mes', 'Same performance'], roi: '50% cost savings' },
    deliverables: ['Node software', 'Orchestration layer', 'CLI tools', '90 días support'],
    idealFor: ['AI companies', 'Researchers', 'Gaming studios'],
    status: { ready: true, description: '1000+ GPUs network' },
    gradientFrom: 'from-sky-600',
    gradientTo: 'to-blue-500'
  },
  'susinik': {
    elevatorPitch: 'Carbon credits: AI-verified, satellite proof, 95% accuracy, tokenized.',
    description: 'SÜSINIK (carbono en estonio) es la plataforma que trae transparencia y verificabilidad al mercado de carbon credits. Utilizando AI computer vision sobre imágenes satelitales, SÜSINIK verifica con 95% de precisión si los proyectos de reforestación realmente están capturando carbono. Los créditos verificados se tokenizan en blockchain, creando un audit trail inmutable que elimina el greenwashing que plaga la industria.',
    overview: 'El mercado voluntario de carbon credits alcanzará $1 trillón para 2030, pero la industria sufre de un problema de credibilidad. Estudios han demostrado que hasta el 90% de los créditos de ciertos programas no representan reducción real de emisiones. Las corporaciones necesitan ESG compliance, pero no pueden confiar en certificadores tradicionales. SÜSINIK resuelve esto con verificación automatizada, transparente y auditable.',
    marketOpportunity: 'Con pricing de $2-5 por crédito verificado y tokenizado, y un mercado de billones de créditos anuales, el revenue potencial es masivo. SÜSINIK también genera revenue por trading fees en el marketplace secundario (1-2%), y por servicios de reporting ESG automatizado para corporaciones ($50-200K/año).',
    competitiveAdvantage: 'SÜSINIK ofrece: (1) Verificación satelital AI con 95% accuracy (vs manual verification con 60-70%), (2) Tokenización en blockchain para audit trail inmutable, (3) Reportes ESG automáticos que cumplen con estándares CDP, GRI y TCFD, (4) Marketplace donde créditos verificados tienen premium de precio, y (5) API para integrar carbon offsetting en cualquier producto o servicio.',
    keyFeatures: [
      { title: 'Satellite AI', description: '95% accuracy verification' },
      { title: 'Tokenized', description: 'Trade credits on-chain' },
      { title: 'ESG Reports', description: 'Automated generation' },
      { title: 'Audit Trail', description: 'Immutable records' }
    ],
    whyBuy: ['$1T carbon market by 2030', 'Greenwashing problem', 'Exit: $30-50M'],
    useCase: { title: 'Corporation ESG', before: ['Manual audits $100K'], after: ['SÜSINIK automated', 'Real-time verification'], roi: 'Trust + savings' },
    deliverables: ['AI models', 'Satellite integration', 'Token contracts', '90 días setup'],
    idealFor: ['Corporations', 'Carbon traders', 'Governments'],
    status: { ready: true, description: 'Satellite integration live' },
    gradientFrom: 'from-lime-600',
    gradientTo: 'to-green-500'
  },
  'tributum': {
    elevatorPitch: 'Crypto tax software: 25 countries, accountant dashboard, DeFi tracking.',
    description: 'TRIBUTUM es el software de impuestos cripto diseñado para el mercado global. Mientras que la mayoría de soluciones se enfocan en USA, TRIBUTUM soporta 25 jurisdicciones fiscales incluyendo toda la UE, UK, Canadá, Australia, y mercados emergentes como Brasil e India. La killer feature es el portal para contables: accounting firms pueden gestionar cientos de clientes cripto desde un dashboard unificado, con white-labeling de su propia marca.',
    overview: 'Los reguladores de todo el mundo están intensificando el enforcement de impuestos cripto. La EU implementó DAC8 para compartir información entre países, UK requiere reporting detallado, y países como India imponen 30% flat tax. Los contables necesitan herramientas especializadas, pero las existentes son demasiado técnicas. TRIBUTUM ofrece UX diseñada para CPAs, no para crypto natives.',
    marketOpportunity: 'Con 500,000+ accounting firms globalmente y 100M+ crypto taxpayers, el mercado es enorme. El modelo B2B (vender a firms, no a usuarios finales) reduce CAC dramáticamente: una firm con 100 clientes cripto representa $10-30K/año en revenue. Las firms también pagan por integración premium, training, y soporte prioritario.',
    competitiveAdvantage: 'TRIBUTUM ofrece: (1) 25 países con tax rules específicas pre-configuradas, (2) Portal para contables con gestión de clientes y white-labeling, (3) Soporte completo para DeFi incluyendo yield farming, staking, lending y más, (4) Auto-import de 50+ exchanges y scan de wallets on-chain, y (5) Generación automática de formularios fiscales específicos por país.',
    keyFeatures: [
      { title: '25 Countries', description: 'Global tax compliance' },
      { title: 'Accountant Portal', description: 'White-label for CPAs' },
      { title: '50+ Exchanges', description: 'Auto-import' },
      { title: 'DeFi/NFT', description: 'Complex transaction support' }
    ],
    whyBuy: ['Global crypto tax enforcement', 'Accountants need tools', 'Exit: $20-40M'],
    useCase: { title: 'Accounting Firm', before: ['Manual calculations', 'Error risk'], after: ['TRIBUTUM', 'Automated, accurate'], roi: '10× efficiency' },
    deliverables: ['Platform code', 'Tax templates 25 countries', 'CPA onboarding', '90 días support'],
    idealFor: ['Accounting firms', 'Tax software', 'Exchanges'],
    status: { ready: true, description: '25 countries supported' },
    gradientFrom: 'from-stone-600',
    gradientTo: 'to-neutral-500'
  },
  'aether-hub': {
    elevatorPitch: 'AI Agents: 10+ agents, Claude 3.5 powered, 500+ integrations, Zapier killer.',
    description: 'AETHER HUB es la plataforma de AI agents que automatiza trabajo que antes requería humanos. Utilizando Claude 3.5 Opus como cerebro, los agents de AETHER pueden: responder emails complejos, analizar documentos legales, gestionar calendarios inteligentemente, crear reportes desde datos crudos, y orquestar workflows entre 500+ aplicaciones. Es Zapier con un PhD, capaz de entender contexto y tomar decisiones, no solo mover datos.',
    overview: 'El mercado de automation/RPA alcanza $10B anuales, pero las soluciones actuales (Zapier, Make, UIPath) son fundamentalmente limitadas: ejecutan reglas predefinidas sin entender contexto. Los AI agents cambian esto radicalmente. Un agent puede leer un email de cliente, entender el problema, buscar en el CRM, consultar la knowledge base, y redactar una respuesta personalizada, todo sin intervención humana.',
    marketOpportunity: 'Enterprises gastan $1M+/año en tareas que AI agents pueden automatizar. Con pricing de $2K-20K/mes por empresa (dependiendo de volumen), y un mercado de millones de empresas, el TAM supera $100B. El modelo de uso (tokens consumidos) crea alignment perfecto: customers pagan por valor entregado, no por seats vacíos.',
    competitiveAdvantage: 'AETHER HUB ofrece: (1) 10+ agents pre-entrenados (email, calendar, research, writing, analysis), (2) 500+ integraciones con Slack, Notion, Salesforce, HubSpot, etc., (3) Powered by Claude 3.5 Opus para máxima inteligencia, (4) White-label completo para agencias y SaaS, y (5) Custom agent builder para crear agents específicos sin código.',
    keyFeatures: [
      { title: '10+ Agents', description: 'Pre-built AI workers' },
      { title: '500+ Integrations', description: 'Slack, Notion, Salesforce...' },
      { title: 'Claude 3.5', description: 'State-of-the-art AI' },
      { title: 'White-Label', description: 'Your brand' }
    ],
    whyBuy: ['$10B+ automation market', 'AI agents are the future', 'Exit: $100M+'],
    useCase: { title: 'Enterprise', before: ['Manual processes', '10 FTEs $1M/año'], after: ['AETHER', '$200K/año AI agents'], roi: '80% cost reduction' },
    deliverables: ['Agent platform', 'Integration library', 'White-label kit', '90 días onboarding'],
    idealFor: ['Enterprises', 'SaaS companies', 'Agencies'],
    status: { ready: true, description: '10+ agents operational' },
    gradientFrom: 'from-cyan-600',
    gradientTo: 'to-teal-500'
  },
  'agora-social': {
    elevatorPitch: 'Decentralized social: creators keep 90%, censorship resistant, token incentives.',
    description: 'AGORA SOCIAL es la red social descentralizada donde los creadores retienen el 90% de sus ingresos. Construida sobre IPFS y Arweave para almacenamiento permanente, y con smart contracts que garantizan pagos instantáneos, AGORA representa la evolución de las redes sociales desde plataformas extractivas hacia ecosistemas donde el valor fluye hacia quienes lo crean. Los seguidores pueden apoyar con micropagos, suscripciones, o tips, y el 90% va directo al creator.',
    overview: 'La economía de creadores genera más de $100 mil millones anuales, pero plataformas como YouTube (45% take rate), TikTok (50%), e Instagram (100% de ads) capturan la mayoría del valor. Simultáneamente, la censura arbitraria ha deplatformado a miles de creadores legítimos. AGORA soluciona ambos problemas: economics justas y resistencia a censura mediante descentralización.',
    marketOpportunity: 'Con 50M+ professional creators globalmente y un spend promedio de fans de $50/año, el TAM supera $2.5B en solo creator monetization. AGORA captura 10% de transacciones (vs 30-55% de Web2), generando $25-50M en revenue con apenas 1% market share. El token de governance añade speculative value que atrae early adopters.',
    competitiveAdvantage: 'AGORA SOCIAL ofrece: (1) 90% revenue share para creators (el mejor del mercado), (2) Almacenamiento permanente en IPFS + Arweave (el contenido nunca desaparece), (3) Token rewards que incentivan engagement genuino, (4) Apps nativas para iOS y Android con UX comparable a Instagram, y (5) Herramientas de moderación descentralizadas controladas por la comunidad.',
    keyFeatures: [
      { title: '90% to Creators', description: 'vs 45% Twitter/YouTube' },
      { title: 'Decentralized', description: 'IPFS + Arweave storage' },
      { title: 'Token Rewards', description: 'Engagement incentives' },
      { title: 'Mobile Apps', description: 'iOS + Android' }
    ],
    whyBuy: ['Creator economy $100B+', 'Censorship concerns growing', 'Exit: $50-100M'],
    useCase: { title: 'Creator 1M followers', before: ['YouTube $10K/mes'], after: ['AGORA $90K/mes'], roi: '9× more earnings' },
    deliverables: ['Apps iOS/Android/Web', 'Smart contracts', 'Content moderation tools', '90 días launch support'],
    idealFor: ['Media companies', 'Creator platforms', 'VCs'],
    status: { ready: true, description: 'Apps ready' },
    gradientFrom: 'from-rose-600',
    gradientTo: 'to-pink-500'
  },
  'astrid': {
    elevatorPitch: 'Bank wire → Crypto <10 min. $2B volume Year 1. SOC 2. $120M insurance.',
    description: 'ASTRID es la infraestructura de fiat-to-crypto de nivel institucional. Cuando una empresa Fortune 500, un banco, o un hedge fund necesita convertir millones de dólares a criptomonedas, ASTRID lo hace en menos de 10 minutos con settlement garantizado. Con certificación SOC 2 Type II, $120M de insurance coverage, y un track record de $2B procesados sin un solo incidente, ASTRID es el partner de confianza para treasury operations.',
    overview: 'El mayor cuello de botella para la adopción institucional de cripto es el on/off-ramp. Los bancos tradicionales bloquean transferencias a exchanges, los exchanges tienen límites bajos, y el proceso puede tomar días. Las empresas que quieren exposición a Bitcoin para sus balances (como MicroStrategy, Tesla, Square) necesitan rails que cumplan con sus requisitos de compliance y volumen.',
    marketOpportunity: 'Las corporate treasuries de Fortune 500 representan $2 trillones en assets que podrían diversificarse parcialmente a cripto. Con solo 0.5% allocation, estamos hablando de $10B en volumen potencial. ASTRID cobra 0.1-0.3% por transacción, generando $10-30M en fees sobre ese volumen. El relationship banking (custody, staking, lending) multiplica el LTV por 5-10×.',
    competitiveAdvantage: 'ASTRID ofrece: (1) Settlement en <10 minutos desde wire bancario a cripto entregada, (2) SOC 2 Type II certificado por Deloitte, (3) $120M insurance con Lloyd\'s, Nexus Mutual, y Coincover, (4) Integración directa con 50+ bancos vía API, y (5) Dedicated account manager para cada cliente enterprise.',
    keyFeatures: [
      { title: '<10 Min', description: 'Wire to crypto settlement' },
      { title: '$2B Volume', description: 'Proven Year 1' },
      { title: 'SOC 2 Type II', description: 'Enterprise certified' },
      { title: '$120M Insurance', description: 'Comprehensive coverage' }
    ],
    whyBuy: ['Enterprises need fiat→crypto rails', 'Compliance is barrier', 'Exit: $300M+'],
    useCase: { title: 'Enterprise Treasury', before: ['Days for crypto purchase', 'Multiple intermediaries'], after: ['ASTRID', '<10 min, compliant'], roi: 'Speed + compliance' },
    deliverables: ['Full platform', 'Bank integrations', 'SOC 2 documentation', '90 días enterprise support'],
    idealFor: ['Banks', 'Enterprises', 'Crypto exchanges'],
    status: { ready: true, description: '$2B volume processed' },
    gradientFrom: 'from-blue-700',
    gradientTo: 'to-indigo-600'
  }
}
