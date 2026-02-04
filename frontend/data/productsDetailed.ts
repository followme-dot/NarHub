// Datos detallados de las 19 plataformas para páginas individuales

export interface ProductDetailed {
  slug: string
  name: string
  icon: string
  tagline: string
  elevatorPitch: string
  category: string
  priceMin: number
  priceMax: number
  featured: boolean
  flagship?: boolean
  linesOfCode: number
  techStack: string[]
  features: string[]
  keyFeatures: { title: string; description: string }[]
  specs: Record<string, string>
  whyBuy: string[]
  useCase: {
    title: string
    before: string[]
    after: string[]
    roi: string
  }
  deliverables: string[]
  idealFor: string[]
  status: {
    ready: boolean
    description: string
  }
  gradientFrom: string
  gradientTo: string
}

export const productsDetailed: ProductDetailed[] = [
  // 1. BITBOOTS
  {
    slug: 'bitboots',
    name: 'BITBOOTS',
    icon: '🤖',
    tagline: 'AI Trading Bot Premium',
    elevatorPitch: 'Trading bot con IA que ejecuta 20+ estrategias en 15 exchanges automáticamente. Backtested: 42% CAGR. Reinforcement learning auto-optimiza parámetros. Paper trading incluido. Mobile app iOS/Android. Tax reporting automático.',
    category: 'DeFi & Trading',
    priceMin: 15000000,
    priceMax: 18000000,
    featured: false,
    linesOfCode: 80000,
    techStack: ['Python 3.11', 'FastAPI', 'Rust', 'PostgreSQL 16', 'TimescaleDB', 'Redis 7', 'PyTorch 2.1', 'TensorFlow 2.15', 'React Native', 'Next.js 15', 'AWS EKS'],
    features: [
      '20+ Estrategias Pre-Built (Arbitrage, grid, DCA, momentum)',
      'Reinforcement Learning (PPO Algorithm)',
      '15 Exchange Integrations',
      'Backtesting Engine (10 Años Data)',
      'Paper Trading Mode ($100K virtual)',
      'Multi-Asset Support (500+ pairs)',
      'Risk Management automático',
      'Smart Alerts (Telegram, Discord, SMS)',
      'Custom Strategy API (Python SDK)',
      'Tax Reporting (IRS Form 8949)',
      'Mobile App (iOS + Android)',
      'White-Label Enterprise'
    ],
    keyFeatures: [
      { title: 'IA Avanzada', description: 'Reinforcement Learning que auto-optimiza parámetros semanalmente' },
      { title: '15 Exchanges', description: 'Binance, Coinbase, Kraken, OKX, Bybit + 5 DEX' },
      { title: 'Backtesting', description: '10 años de datos históricos, Sharpe 2.1, Max DD -18%' },
      { title: 'Mobile Nativo', description: 'Apps iOS y Android con Face ID y push notifications' }
    ],
    specs: {
      'Performance': '42% CAGR backtested',
      'Latencia': '<10ms ejecución',
      'Uptime': '99.9%',
      'Exchanges': '15+ soportados',
      'Estrategias': '20+',
      'Margen Bruto': '89%'
    },
    whyBuy: [
      'Mercado: 5M traders usan bots, solo 3 competidores serios',
      'Más estrategias (20 vs 12), mejor IA (RL vs reglas fijas)',
      'SaaS recurrente ($99-999/mes) + marketplace comisiones',
      'Cero COGS variable, 89% margen bruto',
      'Exit potencial: $150M+ (Binance/Coinbase target)'
    ],
    useCase: {
      title: 'Day Trader con $200K capital',
      before: ['8 horas/día trading manual', '$10K profit mensual (5%)', 'Alto estrés, riesgo de burnout', 'Errores emocionales, FOMO'],
      after: ['1 hora/día monitoring', '$24K profit mensual (12%)', 'IA optimiza automáticamente', 'ROI: 7,933% mensual sobre suscripción'],
      roi: '+$164K anuales (+137% más que manual)'
    },
    deliverables: [
      'Código Completo (GitHub private repo)',
      'Backend (Python, Rust), Frontend (Next.js), Mobile (React Native)',
      'ML models (PyTorch trained weights)',
      'Infrastructure (Terraform, Kubernetes configs)',
      'Documentación Técnica (500+ páginas)',
      'Whitepaper BITBOOTS (45 páginas)',
      'Marketing Assets + Demo videos',
      '90 días soporte engineering'
    ],
    idealFor: [
      'Exchanges queriendo ofrecer trading bots',
      'Fintechs expandiendo a crypto',
      'Fondos de inversión automatizando estrategias',
      'Emprendedores buscando SaaS recurrente probado'
    ],
    status: {
      ready: true,
      description: '100% Funcional - 847 beta testers, $180K MRR actual'
    },
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-red-600'
  },

  // 2. NARDIUM DEX
  {
    slug: 'nardium-dex',
    name: 'NARDIUM DEX',
    icon: '💱',
    tagline: 'Next-Generation Decentralized Exchange',
    elevatorPitch: 'DEX híbrido: Uniswap V3 concentrated liquidity (LPs ganan 3-5× más) + order book (limit orders como CEX) + cross-chain swaps (LayerZero, 5 chains, <5min). Impermanent loss protection. Governance token $NDH. Triple audited.',
    category: 'DeFi & Trading',
    priceMin: 30000000,
    priceMax: 35000000,
    featured: true,
    flagship: true,
    linesOfCode: 120000,
    techStack: ['Solidity 0.8.20', 'Foundry', 'Hardhat', 'LayerZero v2', 'Wormhole', 'Node.js 20', 'TypeScript', 'GraphQL', 'The Graph', 'Next.js 15', 'wagmi 2.0', 'React Native'],
    features: [
      'Concentrated Liquidity (Uniswap V3 Fork)',
      'Hybrid Order Book + AMM',
      'Cross-Chain Swaps (5 Chains)',
      'Gas Optimization (35% más barato)',
      'MEV Protection (Flashbots)',
      'Impermanent Loss Protection',
      'Flash Loans ($100M liquidity)',
      'Advanced Analytics + TradingView',
      'Governance Token ($NDH)',
      'Mobile App iOS + Android',
      'Developer SDK (JS/Python/GraphQL)'
    ],
    keyFeatures: [
      { title: 'Hybrid AMM', description: 'Order book + AMM = mejor precio garantizado' },
      { title: 'Cross-Chain', description: 'ETH→BSC en 5 minutos via LayerZero' },
      { title: 'IL Protection', description: 'Insurance pool reimbursa 50% IL si LP >30 días' },
      { title: 'Triple Audit', description: '$600K en audits (Trail of Bits, Quantstamp, Certik)' }
    ],
    specs: {
      'LP Yield': '3-5× más que Uniswap',
      'Chains': '5 soportadas',
      'Volumen Ready': '$1B+/mes',
      'Slippage': 'Casi cero con order book',
      'TVL Actual': '$12M (beta)',
      'Bug Bounty': '$5M pool'
    },
    whyBuy: [
      'Mercado: $730B volumen/año en DEX',
      'Único con hybrid order book + AMM',
      'IL protection es característica única',
      '0.3% swap fees, 20% a protocolo = $21.9M/año (at $36.5B volume)',
      'Exit: $200-300M (Coinbase/Binance/Uniswap Labs target)'
    ],
    useCase: {
      title: 'LP con $100K capital',
      before: ['Uniswap V2 Full-Range', '$15/día en fees', '5.5% APY', '$5,475 anuales'],
      after: ['NARDIUM Concentrated Range', '$100/día en fees', '38.2% APY + IL protection', '$38,200 anuales'],
      roi: '+$32,725 (+598% más que Uniswap V2)'
    },
    deliverables: [
      'Smart contracts auditados (5 chains)',
      'Subgraphs (The Graph indexers)',
      'Frontend (Next.js) + Mobile (React Native)',
      'Whitepaper (60 páginas)',
      'Audit Reports (Trail of Bits, Quantstamp, Certik)',
      'Discord (2,500 members) + Twitter (8,000 followers)',
      '90 días soporte smart contract'
    ],
    idealFor: [
      'Exchanges lanzando su propio DEX',
      'L1/L2 chains queriendo liquidez nativa',
      'DeFi protocols necesitando swap infrastructure',
      'VCs construyendo DeFi ecosistema'
    ],
    status: {
      ready: true,
      description: '100% Funcional - TVL $12M, 200 LPs activos'
    },
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-cyan-500'
  },

  // 3. ARGENTUM BRIDGE
  {
    slug: 'argentum-bridge',
    name: 'ARGENTUM BRIDGE',
    icon: '🌉',
    tagline: 'Ultra-Fast Cross-Chain Bridge',
    elevatorPitch: 'Bridge 10 blockchains en 5 minutos (vs 30+ min competidores). Dual-protocol (LayerZero + Wormhole redundancia). $10M insurance (Lloyd\'s + Nexus Mutual). Rate limiting anti-exploit. 0.1% fee. 99.95% success rate.',
    category: 'DeFi & Trading',
    priceMin: 22000000,
    priceMax: 28000000,
    featured: false,
    linesOfCode: 90000,
    techStack: ['Solidity 0.8.20', 'Rust', 'LayerZero v2', 'Wormhole', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Next.js 15', 'wagmi', '@solana/wallet-adapter'],
    features: [
      '10 Blockchains soportadas',
      '5-Minute Settlement',
      'Dual-Protocol Security (LayerZero + Wormhole)',
      '$10M Insurance Pool (Lloyd\'s + Nexus)',
      'Rate Limiting Anti-Exploit ($1M max/tx)',
      'Liquidity Pools ($100M TVL ready)',
      'Transaction Tracking real-time',
      'API for Protocols (REST, WebSocket, SDKs)',
      'Multi-Asset Support',
      '0.1% fee (vs 0.2% Stargate)'
    ],
    keyFeatures: [
      { title: '10 Chains', description: 'ETH, BSC, Polygon, Arbitrum, Optimism, Avalanche, Solana, Cosmos, Polkadot, Near' },
      { title: '5 Min Settlement', description: 'LayerZero finality proofs + optimistic verification' },
      { title: 'Dual Security', description: 'LayerZero + Wormhole + 5 custom verifiers' },
      { title: '$10M Insurance', description: 'Lloyd\'s $5M + Nexus Mutual $5M coverage' }
    ],
    specs: {
      'Settlement': '<5 minutos',
      'Insurance': '$10M por tx',
      'Chains': '10 soportadas',
      'Fees': '0.1% promedio',
      'Success Rate': '99.95%',
      'Volumen': '$50M bridged (beta)'
    },
    whyBuy: [
      'Mercado: $730B/año cross-chain volume',
      'Más rápido (5min vs 15-30min competidores)',
      'Más seguro (dual-protocol único)',
      'Más barato (0.1% vs 0.2%)',
      'Exit: $20-30M (LayerZero/Wormhole/Synapse target)'
    ],
    useCase: {
      title: 'Arbitrageur cross-chain',
      before: ['Oportunidad: ETH $50 más caro en Uniswap', '30 min bridge time', 'Precio se mueve, profit perdido'],
      after: ['ARGENTUM: 5 min bridge', 'Profit ejecutado antes que precio se mueva', '$457 profit por trade'],
      roi: '$325K-$490K anuales (2-3 trades/día)'
    },
    deliverables: [
      'Smart contracts (Solidity + Rust, 10 chains)',
      'Relayer software (custom verifiers)',
      'Frontend + monitoring dashboards',
      'Whitepaper (50 páginas)',
      'Insurance policies (Lloyd\'s, Nexus PDFs)',
      '90 días relayer support 24/7'
    ],
    idealFor: [
      'Wallets (MetaMask, Trust) agregando cross-chain',
      'DEX aggregators mejorando routing',
      'L1/L2 chains queriendo interoperabilidad',
      'Fintechs moviendo assets multi-chain'
    ],
    status: {
      ready: true,
      description: '100% Funcional - Live en 10 chains, 99.95% success rate'
    },
    gradientFrom: 'from-slate-600',
    gradientTo: 'to-zinc-500'
  },

  // 4. AUREUM VAULT
  {
    slug: 'aureum-vault',
    name: 'AUREUM VAULT',
    icon: '🏦',
    tagline: 'Institutional Crypto Custody',
    elevatorPitch: 'Custody institucional con multi-sig (hasta 10-of-15), Fireblocks MPC + AWS CloudHSM, $100M insurance (Lloyd\'s), SOC 2 Type II, 20+ chains, KYC/AML integrado (Chainalysis), time locks. Para hedge funds, family offices, exchanges.',
    category: 'DeFi & Trading',
    priceMin: 35000000,
    priceMax: 45000000,
    featured: true,
    flagship: true,
    linesOfCode: 70000,
    techStack: ['Go 1.21', 'Fireblocks MPC', 'AWS CloudHSM', 'PostgreSQL 16', 'CockroachDB', 'Redis Cluster', 'Chainalysis', 'Next.js 15', 'Swift', 'Kotlin', 'Datadog'],
    features: [
      'Multi-Sig Wallets (2-of-3 hasta 10-of-15)',
      'Hardware Security (Fireblocks MPC + CloudHSM)',
      'Time Locks (24h, 48h, 72h)',
      'Whitelisting con cooldown',
      '$100M Insurance (Lloyd\'s + Nexus + Coincover)',
      '20+ Blockchains',
      'KYC/AML Compliance (Chainalysis)',
      'Audit Trail inmutable',
      'API Access (OAuth 2.0)',
      'Mobile App (iOS + Android native)',
      'Staking Integration (4-8% APY)',
      '24/7 Support Enterprise'
    ],
    keyFeatures: [
      { title: 'SOC 2 Type II', description: 'Certificado por Ernst & Young, 18 meses de compliance' },
      { title: '$100M Insurance', description: 'Lloyd\'s $60M + Nexus $20M + Coincover $20M' },
      { title: 'MPC + HSM', description: 'Fireblocks + AWS CloudHSM FIPS 140-2 Level 3' },
      { title: 'Multi-chain', description: 'BTC, ETH, SOL, ADA, DOT + L2s soportados' }
    ],
    specs: {
      'Insurance': '$100M coverage',
      'Certification': 'SOC 2 Type II',
      'Security': 'HSM + MPC',
      'Chains': '20+ soportadas',
      'AUM Actual': '$12M (5 beta clients)',
      'Zero Breaches': '2 años operando'
    },
    whyBuy: [
      'Mercado: $200B institutional crypto AUM',
      'SOC 2 cuesta $3M y 18 meses conseguir',
      '$100M insurance (relación Lloyd\'s incluida)',
      'Clientes sticky (no cambian custody)',
      'Exit: $300M+ (BitGo vendió por $1.2B)'
    ],
    useCase: {
      title: 'Crypto Hedge Fund - $200M AUM',
      before: ['Self-custody con Ledger', '$350K/año (staff + insurance)', 'Riesgo catastrófico si Ledger perdido'],
      after: ['AUREUM: $800K/año fee', '$100M insurance incluido', 'Staking: +$6.4M profit neto'],
      roi: '8× return sobre custody fees + atrae LPs institucionales'
    },
    deliverables: [
      'Backend (Go, custody logic)',
      'Frontend + Admin portal',
      'Mobile apps (Swift, Kotlin native)',
      'SOC 2 Type II Report (Ernst & Young)',
      'ISO 27001 Certificate',
      'Insurance policies (Lloyd\'s, Nexus, Coincover)',
      '90 días 24/7 support + audit handoff'
    ],
    idealFor: [
      'Crypto exchanges (reserve wallet custody)',
      'Hedge funds/family offices ($100M+ AUM)',
      'Fintechs launching crypto products',
      'PE firms wanting custody infrastructure'
    ],
    status: {
      ready: true,
      description: '100% Funcional - SOC 2 Certified, $12M AUM'
    },
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-yellow-500'
  },

  // 5. TRADE MAD
  {
    slug: 'trade-mad',
    name: 'TRADE MAD',
    icon: '📊',
    tagline: 'Crypto Tax & Analytics Platform',
    elevatorPitch: 'Auto-import transacciones de 50+ exchanges, calcula taxes (FIFO/LIFO/HIFO), genera IRS Form 8949 para 25 países, soporta DeFi/NFTs/staking, detecta wash sales, sugiere tax-loss harvesting, colaboración con CPAs. 99.9% accuracy.',
    category: 'DeFi & Trading',
    priceMin: 10000000,
    priceMax: 12000000,
    featured: false,
    linesOfCode: 60000,
    techStack: ['Python 3.11', 'Django 5.0', 'pandas', 'NumPy', 'Celery', 'PostgreSQL 16', 'Redis 7', 'CCXT Pro', 'Next.js 15', 'React Native', 'ReportLab'],
    features: [
      'Auto-Import 50+ Exchanges/Wallets',
      'Tax Methods (FIFO, LIFO, HIFO, Specific ID)',
      'IRS Tax Forms (Form 8949, Schedule D)',
      'International (25 Countries)',
      'DeFi Transaction Tracking',
      'NFT Tracking',
      'Wash Sale Detection',
      'Tax-Loss Harvesting suggestions',
      'CPA Collaboration portal',
      'Audit Trail completo',
      'Multi-Year Support (back to 2010)',
      'Mobile App'
    ],
    keyFeatures: [
      { title: '50+ Exchanges', description: 'API + CSV + blockchain scan import' },
      { title: '25 Países', description: 'US, Canada, UK, Germany, France, Australia...' },
      { title: 'Wash Sale', description: 'IRS 30-day rule auto-detection' },
      { title: 'CPA Portal', description: 'Shared access, comments, CSV exports' }
    ],
    specs: {
      'Accuracy': '99.9%',
      'Exchanges': '50+ soportados',
      'Countries': '25+',
      'Forms': 'IRS 8949, Schedule D, C',
      'Users Actual': '8,470 (847 paid)',
      'MRR': '$10.6K'
    },
    whyBuy: [
      'Mercado: 50M crypto taxpayers US, $2B TAM',
      'IRS enforcement increasing (10K+ letters 2024)',
      'Más exchanges (50 vs 40 competidores)',
      'Viral: tax season = massive signups',
      'Exit: $50-100M (TurboTax/H&R Block target)'
    ],
    useCase: {
      title: 'Active Trader - $150K gains',
      before: ['40 horas reconciliando', '$1,500 CPA crypto specialist', '$500 errores estimados'],
      after: ['2 horas review', '$300/año subscription', '+$5,000 tax-loss harvesting'],
      roi: '2,600% return ($7,800 savings / $300 cost)'
    },
    deliverables: [
      'Backend (Python Django, tax engine)',
      'Frontend (Next.js) + Mobile',
      'Tax calculation algorithms documented',
      'IRS Form templates (Excel + PDF)',
      'SEO content (100+ blog posts)',
      'YouTube tutorials (40 videos)',
      '90 días tax law consulting'
    ],
    idealFor: [
      'TurboTax/H&R Block (acquire crypto vertical)',
      'Crypto exchanges (offer tax tools)',
      'Accounting firms (white-label)',
      'Entrepreneurs (proven SaaS)'
    ],
    status: {
      ready: true,
      description: '100% Funcional - Live & Profitable, 8,470 users'
    },
    gradientFrom: 'from-green-600',
    gradientTo: 'to-emerald-500'
  },

  // Continúa en el siguiente archivo por límite de tamaño...
]
