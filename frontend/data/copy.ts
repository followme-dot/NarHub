// NARHUB - Copy Marketing Completo
// Todos los textos para la plataforma

export const heroContent = {
  headline: "Enterprise Software Ready to Deploy.\nYours in 5-8 Weeks.",
  alternativeHeadlines: [
    "Don't Build. Buy. Scale Faster.",
    "19 Production-Ready SaaS Platforms.\nOne Strategic Decision.",
    "Why Spend 2 Years Building\nWhen You Can Launch in 8 Weeks?",
    "The Software Arsenal Your Competitors Fear.\nNow Available."
  ],
  subheadline: "Production-ready platforms built over 2 years of intensive development. 400K+ lines of code. Smart contracts require buyer audit before mainnet. Deploy with your team in 5-8 weeks.",
  alternativeSubheadlines: [
    "2 years of R&D. Ready for deployment. Smart contracts need your audit before launch.",
    "From DeFi to Enterprise AI: Complete software stack built by engineers who ship, not promise.",
    "Two years of development. $4M+ investment. Yours for a fraction. Limited time only."
  ],
  primaryCTA: "Schedule Private Demo",
  secondaryCTA: "Browse Platforms",
  trustBadges: [
    "Built by experienced developers",
    "Complete documentation included",
    "30 days integration support"
  ],
  urgencyNote: "19 platforms available. Priced from $800K to $8M."
}

export const problemSolutionContent = {
  problemHeadline: "Building Enterprise Software from Scratch?\nYou'll Burn $2M+ and 24 Months.",
  painPoints: [
    { icon: "❌", text: "Hiring senior engineers: $150K/year × 5 people = $750K/year" },
    { icon: "❌", text: "Security audits: $50-200K per platform" },
    { icon: "❌", text: "Development time: 18-24 months minimum" },
    { icon: "❌", text: "Bug fixes, pivots, failed experiments: 40% of time wasted" },
    { icon: "❌", text: "Go-to-market delayed: Opportunity cost = millions in lost revenue" }
  ],
  solutionHeadline: "Or... Buy Production-Ready.\nLaunch in 5-8 Weeks.",
  benefits: [
    { icon: "✅", text: "Deploy in 5-8 weeks (not 24 months)" },
    { icon: "✅", text: "Complete codebase, documented and tested" },
    { icon: "✅", text: "Hire your team: 1 DevOps + 1 Backend engineer" },
    { icon: "✅", text: "Full IP transfer (it's 100% YOURS after purchase)" },
    { icon: "✅", text: "30 days integration support included" }
  ],
  whatYouGet: [
    "The code (400K+ LOC, documented, tested)",
    "The infrastructure blueprints (AWS, Kubernetes, CI/CD ready)",
    "The brand (or rebrand it as your own)",
    "Documentation and architecture guides",
    "30 days of integration support"
  ]
}

export const categories = [
  {
    id: "defi-trading",
    title: "DeFi & Trading",
    subtitle: "Where Institutions Meet Crypto",
    description: "Capture the crypto institutional wave. These platforms power exchanges, hedge funds, and family offices.",
    valueProp: "Own the infrastructure. Launch your crypto business.",
    priceRange: "$800K–$8M",
    platforms: ["BITBOOTS", "NARDIUM DEX", "ARGENTUM BRIDGE", "AUREUM VAULT", "TRADE MAD"],
    color: "lime"
  },
  {
    id: "gaming-metaverse",
    title: "Gaming & Metaverse",
    subtitle: "The Next Gaming Revenue Model",
    description: "Web3 gaming platforms. Let players OWN assets, EARN income, TRADE freely.",
    valueProp: "Launch your gaming platform in weeks instead of years.",
    priceRange: "$800K–$3M",
    platforms: ["TEMPLUM DAO", "SSEUM GAMES", "BB NFT", "GLADIUS HUB"],
    color: "purple"
  },
  {
    id: "infrastructure-identity",
    title: "Infrastructure & Identity",
    subtitle: "The Picks and Shovels of Web3",
    description: "Every protocol needs oracles, identity, security, payments, compute. Recurring revenue model.",
    valueProp: "Essential infrastructure for the Web3 ecosystem.",
    priceRange: "$1M–$5M",
    platforms: ["VERITAS ID", "VIGIL AI", "ORACULUM", "FERRUM PAY", "NEXUS GRID"],
    color: "cyan"
  },
  {
    id: "enterprise-compliance",
    title: "Enterprise & Compliance",
    subtitle: "Where Crypto Meets Corporate",
    description: "Enterprises want crypto, but need compliance. Carbon credits, tax software, AI automation, social media.",
    valueProp: "Bridge the gap between traditional business and Web3.",
    priceRange: "$800K–$8M",
    platforms: ["SÜSINIK", "TRIBUTUM", "AETHER HUB", "AGORA SOCIAL", "ASTRID"],
    color: "amber"
  }
]

// Precios realistas basados en complejidad (en USD)
// Rango: $800K - $8M según dificultad
export const products = [
  // DeFi & Trading
  {
    slug: "bitboots",
    name: "BITBOOTS",
    tagline: "AI Trading Bot That Never Sleeps. Multi-Strategy Engine.",
    category: "DEFI_TRADING",
    priceMin: 1200000,
    priceMax: 1800000,
    projectedValue2Years: 4500000,
    featured: false,
    flagship: false,
    icon: "🤖",
    linesOfCode: 45000,
    techStack: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Redis"],
    features: [
      "Multi-strategy AI engine",
      "Real-time market analysis",
      "Risk management system",
      "Backtesting framework",
      "API integrations (20+ exchanges)"
    ],
    specs: {
      performance: "Backtested strategies included",
      latency: "<10ms execution",
      uptime: "99.9%",
      exchanges: "20+ supported"
    }
  },
  {
    slug: "nardium-dex",
    name: "NARDIUM DEX",
    tagline: "Hybrid Order Book + AMM DEX. Cross-Chain Ready.",
    category: "DEFI_TRADING",
    priceMin: 3500000,
    priceMax: 5000000,
    projectedValue2Years: 15000000,
    featured: true,
    flagship: true,
    icon: "💱",
    linesOfCode: 120000,
    techStack: ["Solidity", "Rust", "TypeScript", "React", "LayerZero"],
    features: [
      "Hybrid order book + AMM",
      "Cross-chain swaps (LayerZero)",
      "MEV protection",
      "Concentrated liquidity",
      "Gasless trading option"
    ],
    specs: {
      lpYield: "Optimized for LP returns",
      chains: "Multi-chain ready",
      volume: "Scalable architecture",
      slippage: "Minimized with order book"
    }
  },
  {
    slug: "argentum-bridge",
    name: "ARGENTUM BRIDGE",
    tagline: "Cross 10 Chains in Minutes. Secure Bridge Infrastructure.",
    category: "DEFI_TRADING",
    priceMin: 2500000,
    priceMax: 3500000,
    projectedValue2Years: 10000000,
    featured: false,
    flagship: false,
    icon: "🌉",
    linesOfCode: 65000,
    techStack: ["Solidity", "Go", "TypeScript", "LayerZero", "Chainlink"],
    features: [
      "10+ chain support",
      "Fast settlement",
      "Atomic swaps",
      "Fee optimization",
      "Redundant security"
    ],
    specs: {
      settlementTime: "Minutes",
      chains: "10+ supported",
      fees: "Competitive rates"
    }
  },
  {
    slug: "aureum-vault",
    name: "AUREUM VAULT",
    tagline: "Institutional Crypto Custody. MPC + HSM Architecture.",
    category: "DEFI_TRADING",
    priceMin: 4000000,
    priceMax: 6000000,
    projectedValue2Years: 18000000,
    featured: true,
    flagship: true,
    icon: "🏦",
    linesOfCode: 70000,
    techStack: ["Rust", "Go", "HSM", "MPC", "Fireblocks SDK"],
    features: [
      "HSM-backed MPC custody",
      "Multi-party governance",
      "Real-time audit trails",
      "Cold/hot wallet management",
      "Policy engine"
    ],
    specs: {
      security: "HSM + MPC",
      governance: "Multi-sig + time-locks"
    }
  },
  {
    slug: "trade-mad",
    name: "TRADE MAD",
    tagline: "Crypto Tax Software. 25 Countries. DeFi/NFT Tracking.",
    category: "DEFI_TRADING",
    priceMin: 800000,
    priceMax: 1200000,
    projectedValue2Years: 3500000,
    featured: false,
    flagship: false,
    icon: "📊",
    linesOfCode: 35000,
    techStack: ["Python", "React", "PostgreSQL", "Redis"],
    features: [
      "Automatic tax calculation",
      "IRS form generation",
      "DeFi transaction tracking",
      "NFT cost basis",
      "Multi-wallet support"
    ],
    specs: {
      countries: "25+ supported",
      wallets: "Unlimited",
      forms: "IRS 8949, Schedule D"
    }
  },
  // Gaming & Metaverse
  {
    slug: "templum-dao",
    name: "TEMPLUM DAO",
    tagline: "NFT Marketplace with Anti-Wash Trading. Multiple Auction Types.",
    category: "GAMING_METAVERSE",
    priceMin: 2000000,
    priceMax: 3000000,
    projectedValue2Years: 9000000,
    featured: true,
    flagship: false,
    icon: "🏛️",
    linesOfCode: 80000,
    techStack: ["Solidity", "TypeScript", "React", "zkML", "IPFS"],
    features: [
      "4 auction types",
      "Anti-wash trading detection",
      "Royalty enforcement",
      "Creator verification",
      "Multi-chain support"
    ],
    specs: {
      auctionTypes: "English, Dutch, Reserve, Sealed",
      royalties: "Enforceable on-chain",
      chains: "5+ supported"
    }
  },
  {
    slug: "sseum-games",
    name: "SSEUM GAMES",
    tagline: "Play-to-Earn Platform. 20 Games. Token Economy.",
    category: "GAMING_METAVERSE",
    priceMin: 1500000,
    priceMax: 2500000,
    projectedValue2Years: 7500000,
    featured: false,
    flagship: false,
    icon: "🎮",
    linesOfCode: 95000,
    techStack: ["Unity", "TypeScript", "Solidity", "Node.js", "PostgreSQL"],
    features: [
      "20 playable games",
      "Token reward system",
      "NFT item marketplace",
      "Tournament platform",
      "Social features"
    ],
    specs: {
      games: "20 available",
      tournaments: "Weekly events",
      players: "Scalable to 1M+"
    }
  },
  {
    slug: "bb-nft",
    name: "BB NFT",
    tagline: "Launch 10K NFT Collections. No-Code Generator.",
    category: "GAMING_METAVERSE",
    priceMin: 800000,
    priceMax: 1200000,
    projectedValue2Years: 3000000,
    featured: false,
    flagship: false,
    icon: "🎨",
    linesOfCode: 25000,
    techStack: ["TypeScript", "React", "Solidity", "IPFS", "AWS"],
    features: [
      "No-code NFT generator",
      "Automatic rarity distribution",
      "Multi-chain deployment",
      "Reveal mechanics",
      "Whitelist management"
    ],
    specs: {
      collections: "10K+ items",
      setup: "1 week",
      chains: "Ethereum, Polygon, Solana",
      features: "Rarity, reveals, allowlists"
    }
  },
  {
    slug: "gladius-hub",
    name: "GLADIUS HUB",
    tagline: "Web3 Game Distribution Platform. 10% Commission.",
    category: "GAMING_METAVERSE",
    priceMin: 1000000,
    priceMax: 1500000,
    projectedValue2Years: 4500000,
    featured: false,
    flagship: false,
    icon: "⚔️",
    linesOfCode: 55000,
    techStack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis"],
    features: [
      "Game catalog system",
      "10% commission (vs 30%)",
      "Developer dashboard",
      "Player achievements",
      "Social features"
    ],
    specs: {
      commission: "10%",
      developers: "Self-service onboarding",
      players: "Cross-platform support"
    }
  },
  // Infrastructure & Identity
  {
    slug: "veritas-id",
    name: "VERITAS ID",
    tagline: "W3C Digital Identity. Zero-Knowledge Proofs.",
    category: "INFRASTRUCTURE_IDENTITY",
    priceMin: 2000000,
    priceMax: 3000000,
    projectedValue2Years: 9000000,
    featured: true,
    flagship: false,
    icon: "🆔",
    linesOfCode: 60000,
    techStack: ["Rust", "TypeScript", "ZK-SNARKs", "W3C DIDs", "IPFS"],
    features: [
      "W3C DID compliant",
      "Zero-knowledge proofs",
      "GDPR ready",
      "Multi-chain support",
      "Biometric options"
    ],
    specs: {
      standard: "W3C DIDs",
      privacy: "ZK proofs",
      compliance: "GDPR, CCPA",
      verification: "Selective disclosure"
    }
  },
  {
    slug: "vigil-ai",
    name: "VIGIL AI",
    tagline: "Web3 Security with ML. Fraud Detection System.",
    category: "INFRASTRUCTURE_IDENTITY",
    priceMin: 3000000,
    priceMax: 5000000,
    projectedValue2Years: 15000000,
    featured: true,
    flagship: true,
    icon: "🛡️",
    linesOfCode: 95000,
    techStack: ["Python", "PyTorch", "Go", "Kafka", "PostgreSQL"],
    features: [
      "Graph Neural Networks",
      "Real-time wallet screening",
      "Behavioral biometrics",
      "Custom ML models",
      "AML/KYC integration"
    ],
    specs: {
      latency: "<100ms",
      models: "Customizable"
    }
  },
  {
    slug: "oraculum",
    name: "ORACULUM",
    tagline: "Decentralized Oracle Network. 300+ Data Feeds.",
    category: "INFRASTRUCTURE_IDENTITY",
    priceMin: 2500000,
    priceMax: 4000000,
    projectedValue2Years: 12000000,
    featured: false,
    flagship: false,
    icon: "🔮",
    linesOfCode: 75000,
    techStack: ["Rust", "Go", "Solidity", "PostgreSQL", "Redis"],
    features: [
      "300+ data feeds",
      "30 node network",
      "High uptime architecture",
      "Custom feed creation",
      "Multi-chain support"
    ],
    specs: {
      feeds: "300+",
      nodes: "30"
    }
  },
  {
    slug: "ferrum-pay",
    name: "FERRUM PAY",
    tagline: "Crypto Payment Gateway. 50 Cryptos + 150 Fiat.",
    category: "INFRASTRUCTURE_IDENTITY",
    priceMin: 1500000,
    priceMax: 2500000,
    projectedValue2Years: 7500000,
    featured: false,
    flagship: false,
    icon: "💳",
    linesOfCode: 50000,
    techStack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "Stripe SDK"],
    features: [
      "50 crypto currencies",
      "150 fiat currencies",
      "Low transaction fees",
      "Built-in fraud detection",
      "Instant settlements"
    ],
    specs: {
      cryptos: "50+",
      fiat: "150+",
      settlement: "Instant"
    }
  },
  {
    slug: "nexus-grid",
    name: "NEXUS GRID",
    tagline: "Decentralized GPU Compute Network. AI/ML Ready.",
    category: "INFRASTRUCTURE_IDENTITY",
    priceMin: 2000000,
    priceMax: 3500000,
    projectedValue2Years: 10000000,
    featured: false,
    flagship: false,
    icon: "🖥️",
    linesOfCode: 65000,
    techStack: ["Rust", "Go", "TypeScript", "Kubernetes", "IPFS"],
    features: [
      "Decentralized GPU network",
      "Competitive pricing",
      "AI/ML workload support",
      "Auto-scaling",
      "Pay-per-compute"
    ],
    specs: {
      workloads: "AI, ML, rendering",
      billing: "Per-second"
    }
  },
  // Enterprise & Compliance
  {
    slug: "susinik",
    name: "SÜSINIK",
    tagline: "AI-Verified Carbon Credits. Satellite + Blockchain.",
    category: "ENTERPRISE_COMPLIANCE",
    priceMin: 1500000,
    priceMax: 2500000,
    projectedValue2Years: 7500000,
    featured: false,
    flagship: false,
    icon: "🌱",
    linesOfCode: 55000,
    techStack: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
    features: [
      "Satellite verification",
      "AI analysis",
      "ESG reporting",
      "Credit tokenization",
      "Audit trails"
    ],
    specs: {
      verification: "Satellite + AI",
      reporting: "ESG compliant",
      credits: "Tokenized"
    }
  },
  {
    slug: "tributum",
    name: "TRIBUTUM",
    tagline: "Global Crypto Tax Software. 25 Countries.",
    category: "ENTERPRISE_COMPLIANCE",
    priceMin: 800000,
    priceMax: 1200000,
    projectedValue2Years: 3500000,
    featured: false,
    flagship: false,
    icon: "📋",
    linesOfCode: 40000,
    techStack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    features: [
      "25 country support",
      "Automatic calculations",
      "Accountant dashboard",
      "DeFi tracking",
      "API access"
    ],
    specs: {
      countries: "25+",
      integrations: "50+ exchanges",
      export: "PDF, CSV, API"
    }
  },
  {
    slug: "aether-hub",
    name: "AETHER HUB",
    tagline: "AI Agent Platform. 10+ Agents. 500+ Integrations.",
    category: "ENTERPRISE_COMPLIANCE",
    priceMin: 3000000,
    priceMax: 5000000,
    projectedValue2Years: 15000000,
    featured: true,
    flagship: true,
    icon: "🤖",
    linesOfCode: 75000,
    techStack: ["Python", "TypeScript", "Claude API", "PostgreSQL", "Redis"],
    features: [
      "10+ AI agents",
      "500+ integrations",
      "White-label ready",
      "Usage-based billing",
      "SSO/SAML support"
    ],
    specs: {
      agents: "10+",
      integrations: "500+",
      ai: "Claude API ready",
      deployment: "Cloud or on-prem"
    }
  },
  {
    slug: "agora-social",
    name: "AGORA SOCIAL",
    tagline: "Decentralized Social Network. Creators Keep 90%.",
    category: "ENTERPRISE_COMPLIANCE",
    priceMin: 1800000,
    priceMax: 2800000,
    projectedValue2Years: 8500000,
    featured: false,
    flagship: false,
    icon: "📱",
    linesOfCode: 85000,
    techStack: ["TypeScript", "React Native", "Node.js", "PostgreSQL", "IPFS"],
    features: [
      "Decentralized content",
      "Creator monetization (90%)",
      "Token incentives",
      "Censorship resistant",
      "Cross-platform apps"
    ],
    specs: {
      creatorShare: "90%",
      storage: "IPFS + Arweave",
      platforms: "iOS, Android, Web",
      moderation: "Community-driven"
    }
  },
  {
    slug: "astrid",
    name: "ASTRID",
    tagline: "Enterprise Fiat-to-Crypto Rails. Bank Integration Ready.",
    category: "ENTERPRISE_COMPLIANCE",
    priceMin: 5000000,
    priceMax: 8000000,
    projectedValue2Years: 25000000,
    featured: true,
    flagship: true,
    icon: "⚡",
    linesOfCode: 100000,
    techStack: ["Go", "TypeScript", "React", "PostgreSQL", "Plaid", "Fireblocks"],
    features: [
      "Bank API integrations",
      "Fast settlement",
      "Multi-sig custody",
      "Compliance ready",
      "Enterprise dashboard"
    ],
    specs: {
      speed: "Minutes for settlement"
    }
  }
]

export const stats = [
  { value: "400K+", label: "Lines of Code", context: "2 years of development" },
  { value: "$4M+", label: "Development Investment", context: "What we invested building this" },
  { value: "5-8", label: "Weeks to Deploy", context: "With your DevOps + Backend team" },
  { value: "30", label: "Days Support", context: "Integration support included" },
  { value: "2", label: "Years R&D", context: "Intensive development" },
  { value: "19", label: "Platforms", context: "Complete ecosystem" },
  { value: "20+", label: "Blockchains", context: "Multi-chain architecture" },
  { value: "$800K-$8M", label: "Price Range", context: "Based on complexity" }
]

export const usps = [
  {
    icon: "📋",
    title: "SMART CONTRACTS REQUIRE AUDIT",
    description: "All smart contracts need professional audit before mainnet deployment. We recommend: Trail of Bits, OpenZeppelin, Quantstamp, or Halborn.",
    benefit: "You control the security process with auditors you trust."
  },
  {
    icon: "👥",
    title: "YOUR TEAM REQUIRED",
    description: "To deploy, you'll need: 1 DevOps engineer + 1 Backend engineer. Timeline: 5-8 weeks for full deployment.",
    benefit: "Small team, fast deployment, full ownership."
  },
  {
    icon: "📅",
    title: "30 DAYS SUPPORT",
    description: "We provide 30 days of integration support. After that, your team takes full control.",
    benefit: "Enough time to understand and own the codebase."
  },
  {
    icon: "📈",
    title: "INVESTMENT POTENTIAL",
    description: "Each platform has 2-year projected market value. Software with users becomes exponentially more valuable.",
    benefit: "Buy at development cost, grow to market value."
  },
  {
    icon: "⚡",
    title: "5-8 WEEK DEPLOYMENT",
    description: "Complete codebase, documentation, and architecture. Your team connects infrastructure and launches.",
    benefit: "Months of work, not years."
  },
  {
    icon: "🎯",
    title: "FULL IP TRANSFER",
    description: "100% ownership. Rebrand, modify, resell. It's completely yours after purchase.",
    benefit: "No licensing fees, no royalties, no restrictions."
  }
]

export const faq = [
  {
    question: "Are the smart contracts audited?",
    answer: "No. Smart contracts are NOT audited and require professional security audit before mainnet deployment. We strongly recommend auditing with reputable firms like Trail of Bits, OpenZeppelin, Quantstamp, Halborn, or Certik. Budget $50-200K for a comprehensive audit depending on complexity."
  },
  {
    question: "What team do I need to deploy?",
    answer: "You need minimum: 1 DevOps engineer (infrastructure, CI/CD, monitoring) + 1 Backend engineer (API connections, integrations). Timeline: 5-8 weeks for full deployment. Our 30-day support helps your team get up to speed."
  },
  {
    question: "What support do you provide?",
    answer: "30 days of integration support included: Slack channel with our engineering team, code walkthroughs, architecture Q&A, deployment guidance. After 30 days, your team owns everything independently."
  },
  {
    question: "Why the price range ($800K - $8M)?",
    answer: "Pricing reflects development complexity: simpler platforms (tax software, NFT generators) start at $800K. Complex platforms (DEX, custody, enterprise rails) go up to $8M. All platforms are priced below what it would cost to build from scratch."
  },
  {
    question: "What's the projected 2-year value?",
    answer: "Each platform shows estimated market value in 2 years with active users. Software without users = development cost. Software with users and revenue = market value multiplier. You're buying at cost, growing to market value."
  },
  {
    question: "Can I see the code before buying?",
    answer: "Yes. After NDA signature, you get read-only GitHub access, live demo environments, architecture walkthrough sessions, and Q&A with lead engineers."
  },
  {
    question: "Is financing available?",
    answer: "We accept: Cash (wire transfer, preferred), Equity swap (we take stake in your company), Earnout structure (% of revenue for 3 years), Hybrid (50% cash + 50% equity)."
  },
  {
    question: "What if I want to rebrand/white-label?",
    answer: "100% encouraged. Post-acquisition, it's YOUR brand. Change name, logo, colors. Redeploy on your domain. Full IP transfer means zero restrictions."
  },
  {
    question: "How long was the development?",
    answer: "2 years of intensive development. This is honest: not 6 years, not a decade. Two focused years of building production-ready software."
  },
  {
    question: "Can I talk to the founder directly?",
    answer: "Yes. Rafael Baena (CEO, ffollowme oü) takes calls with all serious buyers. 30 minutes. Discuss your use case, platform recommendations, pricing scenarios, next steps."
  }
]

export const finalCTA = {
  headline: "Ready to Launch Your Platform?\nSkip 2 Years of Development.",
  subheadline: "19 platforms available. Priced $800K to $8M based on complexity. Professional audit required before mainnet. Your team deploys in 5-8 weeks.",
  primaryCTA: "Schedule 30-Min Strategy Call",
  secondaryCTA: "Download Platform Catalog",
  contact: {
    email: "info@ffollowme.com",
    linkedin: "linkedin.com/in/rafaelbaena",
    locations: "Tallinn (Estonia) • Panama City • Delaware"
  },
  trustNote: "Your information is confidential. Serious buyers only."
}

export const closingStatements = [
  "Don't build for 2 years what you can buy today.",
  "Your competitors aren't waiting. Why are you?",
  "Buy at development cost. Grow to market value.",
  "5-8 weeks to deployment with the right team.",
  "Speed to market = competitive advantage."
]

// Datos bancarios para pagos
export const bankDetails = {
  sepa: {
    title: "SEPA Transfer (EU)",
    estimatedTime: "1-2 business days",
    beneficiary: "ffollowme oü",
    iban: "LT04 3250 0493 5769 1069",
    bic: "REVOLT21",
    address: "Lõõtsa 2A, 11415, Tallinn, Estonia",
    bank: "Revolut Bank UAB",
    bankAddress: "Konstitucijos ave. 21B, 08130, Vilnius, Lithuania"
  },
  swift: {
    title: "International SWIFT Transfer (Outside EU)",
    estimatedTime: "3 business days",
    beneficiary: "ffollowme",
    currency: "EUR",
    iban: "LT04 3250 0493 5769 1069",
    bic: "REVOLT21",
    intermediaryBic: "CHASDEFX",
    address: "Lõõtsa 2A, 11415, Tallinn, Estonia",
    bank: "Revolut Bank UAB",
    bankAddress: "Konstitucijos ave. 21B, 08130, Vilnius, Lithuania"
  }
}

// Empresas de auditoría recomendadas
export const recommendedAuditors = [
  {
    name: "Trail of Bits",
    website: "https://www.trailofbits.com",
    specialty: "Smart contracts, cryptography",
    priceRange: "$100K - $300K"
  },
  {
    name: "OpenZeppelin",
    website: "https://www.openzeppelin.com",
    specialty: "Solidity, DeFi protocols",
    priceRange: "$50K - $200K"
  },
  {
    name: "Quantstamp",
    website: "https://quantstamp.com",
    specialty: "DeFi, NFT, bridges",
    priceRange: "$50K - $150K"
  },
  {
    name: "Halborn",
    website: "https://halborn.com",
    specialty: "Smart contracts, penetration testing",
    priceRange: "$40K - $120K"
  },
  {
    name: "Certik",
    website: "https://www.certik.com",
    specialty: "Formal verification, smart contracts",
    priceRange: "$30K - $100K"
  }
]
