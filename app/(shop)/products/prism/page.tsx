'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft, Play, Shield, Code2, Zap, CheckCircle2,
  Users, Lock, TrendingUp, FileText, CreditCard, Rocket, Target, Award, Copy, Check, Database, BarChart3
} from 'lucide-react'
import Button from '@frontend/components/ui/Button'
import { useAuth } from '@frontend/hooks/useAuth'
import { bankDetails, sepaDetails, swiftDetails } from '@frontend/data/bankDetails'

export default function InfraDataLakePage() {
  const { isAuthenticated } = useAuth()
  const [copiedIban, setCopiedIban] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [isOutsideEU, setIsOutsideEU] = useState(false)

  const copyIban = () => {
    navigator.clipboard.writeText(bankDetails.iban.replace(/\s/g, ''))
    setCopiedIban(true)
    setTimeout(() => setCopiedIban(false), 2000)
  }

  const product = {
    name: 'INFRA DATA LAKE',
    icon: '🗄️',
    tagline: 'Enterprise Data Lake & Analytics Platform',
    category: 'INFRA Holdings',
    priceMin: 19000000,
    priceMax: 24000000,
    projectedValue2Years: 750000,
    flagship: false,
    gradient: { from: 'from-emerald-500', to: 'to-teal-600' }
  }

  const formatPrice = (price: number) => {
    const priceInEuros = price / 100
    if (priceInEuros >= 1000000) return `€${(priceInEuros / 1000000).toFixed(2)}M`
    if (priceInEuros >= 1000) return `€${(priceInEuros / 1000).toFixed(0)}K`
    return `€${priceInEuros.toFixed(0)}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} pt-24 pb-32 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Link href="/products" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Products</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{product.name}</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">{product.tagline}</p>

              <p className="text-white/80 mb-8 leading-relaxed max-w-xl">
                Modern data warehouse with batch and streaming ingestion, ClickHouse columnar storage, dbt data transformations, Apache Airflow orchestration, SQL interface, and Metabase BI dashboards included.
              </p>

              <div className="mb-8">
                <span className="text-white/70 text-sm font-medium uppercase tracking-wider">Valuation</span>
                <p className="text-4xl md:text-5xl font-bold text-white mt-2">
                  {formatPrice(product.priceMin)} - {formatPrice(product.priceMax)}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {isAuthenticated ? (
                  <Button size="lg" onClick={() => setShowPayment(true)} className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
                    <CreditCard className="w-5 h-5 mr-2" /> Buy Now
                  </Button>
                ) : (
                  <Link href="/login?callbackUrl=/products/infra-data-lake">
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
                      <Lock className="w-5 h-5 mr-2" /> Login to Purchase
                    </Button>
                  </Link>
                )}
                <Link href="/demo">
                  <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
                    <Play className="w-5 h-5 mr-2" /> Request Demo
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl transform scale-90" />
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 flex items-center justify-center">
                  <span className="text-[10rem] md:text-[12rem] filter drop-shadow-2xl">{product.icon}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'ClickHouse', description: 'Columnar analytics at petabyte scale' },
              { title: 'dbt', description: 'SQL-based data transformation' },
              { title: 'Airflow', description: 'Robust pipeline orchestration' },
              { title: 'Metabase', description: 'Self-service BI dashboards' }
            ].map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }} className="text-center">
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} flex items-center justify-center text-white mb-4`}>
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-[#1a1a2e] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#4a4a68]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">About INFRA DATA LAKE</h2>
            <p className="text-lg text-[#4a4a68] leading-relaxed mb-8">
              INFRA DATA LAKE is a complete enterprise data lake and analytics platform that unifies data storage, processing, and visualization in a single deployable solution. Built on battle-tested open-source technologies, it combines ClickHouse's lightning-fast columnar storage with dbt's modern data transformation framework, Apache Airflow's robust orchestration engine, and Metabase's intuitive business intelligence interface. The platform handles both batch and real-time streaming ingestion, supporting data volumes from gigabytes to petabytes while maintaining sub-second query performance. Unlike fragmented DIY approaches that require months of integration work, INFRA DATA LAKE delivers a cohesive, production-ready data stack that enterprises can deploy in weeks.
            </p>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">Market Overview</h3>
            <p className="text-[#4a4a68] leading-relaxed mb-8">
              The global data lake market is valued at approximately €15 billion and growing at 25%+ annually, driven by the exponential increase in enterprise data volumes and the critical need for data-driven decision making. Organizations across industries are struggling with fragmented data infrastructure, with the average enterprise using 400+ data sources. The shift from legacy data warehouses to modern data lake architectures represents one of the largest technology transitions in enterprise IT. Companies that successfully harness their data achieve 23% higher revenue growth than competitors, creating intense demand for unified analytics platforms.
            </p>

            <div className={`bg-gradient-to-r ${product.gradient.from} ${product.gradient.to} rounded-2xl p-8 text-white mb-8`}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Market Opportunity
              </h3>
              <p className="leading-relaxed opacity-95">
                The data analytics and data lake market is projected to reach €35 billion by 2028, representing a 23% compound annual growth rate. Mid-market enterprises are the fastest-growing segment, with 67% planning significant data infrastructure investments in the next 18 months. INFRA DATA LAKE targets this underserved segment with enterprise-grade capabilities at mid-market pricing. The platform's SaaS-ready architecture enables recurring revenue through managed services, with gross margins exceeding 75% at scale.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">Competitive Advantage</h3>
            <p className="text-[#4a4a68] leading-relaxed">
              INFRA DATA LAKE differentiates through its integrated, pre-configured architecture that eliminates the complexity of building a modern data stack from scratch. While competitors like Snowflake and Databricks charge based on compute usage (often €500K+ annually for mid-size deployments), INFRA DATA LAKE offers perpetual licensing with predictable costs. The platform's ClickHouse foundation delivers 10-100x faster query performance than traditional databases, while the dbt transformation layer enables data teams to work in familiar SQL rather than requiring specialized engineering skills. Pre-built connectors for 50+ common data sources accelerate time-to-value from months to weeks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Why Invest in INFRA DATA LAKE?</h2>
            <p className="text-lg text-[#4a4a68]">
              Discover the key reasons why INFRA DATA LAKE represents an exceptional opportunity for investors and companies looking to enter the enterprise data analytics market.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: 'Massive Market Demand',
                description: '€15B+ market growing 25% annually. Every enterprise needs modern data infrastructure, creating consistent demand across all industries and geographies.'
              },
              {
                icon: Zap,
                title: 'Technology Moat',
                description: '22,000+ lines of production code with pre-built dbt models, Airflow DAGs, and optimized ClickHouse schemas. 12+ months of development effort encapsulated.'
              },
              {
                icon: BarChart3,
                title: 'Multiple Revenue Streams',
                description: 'License sales, managed hosting services, training, and consulting. Platform enables 75%+ gross margins with predictable recurring revenue potential.'
              }
            ].map((reason, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * index }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} flex items-center justify-center flex-shrink-0`}>
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-2">{reason.title}</h3>
                    <p className="text-[#4a4a68] text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case / ROI */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Real Use Case</h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              We analyze a real scenario to demonstrate the transformative impact of INFRA DATA LAKE on enterprise analytics. This case study illustrates the ROI our clients can expect.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#1a1a2e] mb-6 text-center">
              E-Commerce Company with 50M Daily Events
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                  <span className="text-2xl">-</span> Before (Legacy Infrastructure)
                </h4>
                <p className="text-red-800 text-sm mb-4">
                  Typical challenges faced before implementing INFRA DATA LAKE:
                </p>
                <ul className="space-y-3">
                  <li className="text-red-800 flex items-start gap-2">
                    <span className="text-red-500 mt-1 font-bold">-</span>
                    <span className="font-medium">€420K/year Snowflake costs</span>
                  </li>
                  <li className="text-red-800 flex items-start gap-2">
                    <span className="text-red-500 mt-1 font-bold">-</span>
                    <span className="font-medium">45-minute query times for complex reports</span>
                  </li>
                  <li className="text-red-800 flex items-start gap-2">
                    <span className="text-red-500 mt-1 font-bold">-</span>
                    <span className="font-medium">3 FTE data engineers for pipeline maintenance</span>
                  </li>
                  <li className="text-red-800 flex items-start gap-2">
                    <span className="text-red-500 mt-1 font-bold">-</span>
                    <span className="font-medium">24-hour data freshness latency</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h4 className="font-bold text-green-700 mb-4 flex items-center gap-2">
                  <span className="text-2xl">+</span> After (With INFRA DATA LAKE)
                </h4>
                <p className="text-green-800 text-sm mb-4">
                  Results achieved after implementation:
                </p>
                <ul className="space-y-3">
                  <li className="text-green-800 flex items-start gap-2">
                    <span className="text-green-500 mt-1 font-bold">+</span>
                    <span className="font-medium">€85K/year infrastructure costs (80% reduction)</span>
                  </li>
                  <li className="text-green-800 flex items-start gap-2">
                    <span className="text-green-500 mt-1 font-bold">+</span>
                    <span className="font-medium">Sub-second query performance</span>
                  </li>
                  <li className="text-green-800 flex items-start gap-2">
                    <span className="text-green-500 mt-1 font-bold">+</span>
                    <span className="font-medium">1 FTE for oversight (automated pipelines)</span>
                  </li>
                  <li className="text-green-800 flex items-start gap-2">
                    <span className="text-green-500 mt-1 font-bold">+</span>
                    <span className="font-medium">Real-time streaming (15-second latency)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`bg-gradient-to-r ${product.gradient.from} ${product.gradient.to} rounded-2xl p-8 text-center text-white`}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <Rocket className="w-8 h-8" />
              <span className="text-2xl font-bold">Return on Investment</span>
            </div>
            <p className="text-3xl font-bold mb-2">€335K+ annual savings per deployment</p>
            <p className="text-white/80 text-sm">
              Based on actual client deployments and conservative market projections
            </p>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Who is INFRA DATA LAKE For?</h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              INFRA DATA LAKE has been designed for organizations that need enterprise-grade analytics without the complexity and cost of traditional solutions. If your company fits one of these profiles, INFRA DATA LAKE may be exactly what you need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'SaaS & Technology Companies', subtitle: 'Product analytics, customer insights, usage tracking' },
              { title: 'E-Commerce & Retail', subtitle: 'Inventory optimization, customer behavior, sales forecasting' },
              { title: 'Financial Services', subtitle: 'Risk analytics, compliance reporting, transaction monitoring' },
              { title: 'Healthcare & Life Sciences', subtitle: 'Clinical data analysis, operational efficiency, research insights' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} flex items-center justify-center flex-shrink-0`}>
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-[#1a1a2e] font-semibold text-lg block">{item.title}</span>
                  <span className="text-[#71717a] text-sm">{item.subtitle}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">What's Included in Your Purchase?</h2>
            <p className="text-lg text-[#4a4a68] max-w-2xl mx-auto">
              When you acquire INFRA DATA LAKE, you receive a complete package designed for immediate deployment and scaling, with no hidden costs or ongoing licensing fees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} flex items-center justify-center`}>
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">Complete Source Code</h3>
              </div>
              <p className="text-[#4a4a68]">
                22,000+ lines of Python and TypeScript. Pre-built dbt models, Airflow DAGs, ClickHouse schemas, and Metabase dashboards. 50+ data source connectors included. No obfuscated code.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} flex items-center justify-center`}>
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">Comprehensive Documentation</h3>
              </div>
              <p className="text-[#4a4a68]">
                400+ pages of technical documentation including architecture guides, deployment playbooks, performance tuning guides, and operational runbooks for production environments.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} flex items-center justify-center`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">Onboarding Support</h3>
              </div>
              <p className="text-[#4a4a68]">
                30 days of technical support included. Deployment typically requires 1 DevOps engineer and 1 data engineer. Full deployment takes 3-6 weeks depending on data source complexity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient.from} ${product.gradient.to} flex items-center justify-center`}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e]">Perpetual License</h3>
              </div>
              <p className="text-[#4a4a68]">
                Once purchased, INFRA DATA LAKE is yours forever. No monthly fees, no per-query charges, no data volume limits. Deploy for internal use or resell as a managed service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#1a1a2e]">Payment Details</h2>
              <button onClick={() => setShowPayment(false)} className="p-2 rounded-lg hover:bg-gray-100">
                <span className="text-2xl">x</span>
              </button>
            </div>

            {/* Transfer Type Selector */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setIsOutsideEU(false)}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                  !isOutsideEU
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                SEPA (EU)
              </button>
              <button
                onClick={() => setIsOutsideEU(true)}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                  isOutsideEU
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                SWIFT (International)
              </button>
            </div>

            {/* SEPA Details */}
            {!isOutsideEU && (
              <>
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-bold text-emerald-800">SEPA Bank Transfer</h3>
                    <span className="text-xs bg-emerald-200 text-emerald-800 px-2 py-0.5 rounded-full">{sepaDetails.transferTime}</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-emerald-700">Beneficiary:</span>
                      <span className="font-medium text-emerald-900">{bankDetails.beneficiary}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-emerald-700">IBAN:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-medium text-emerald-900">{bankDetails.iban}</span>
                        <button onClick={copyIban} className="p-1 rounded hover:bg-emerald-100">
                          {copiedIban ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-emerald-600" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-700">BIC:</span>
                      <span className="font-medium text-emerald-900">{bankDetails.bic}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-700">Address:</span>
                      <span className="font-medium text-emerald-900 text-right">{bankDetails.address}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-700">Bank:</span>
                      <span className="font-medium text-emerald-900">{bankDetails.bank}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
                  <h3 className="font-bold text-amber-800 mb-3">Instructions</h3>
                  <ul className="space-y-2">
                    {sepaDetails.instructions.map((instruction, i) => (
                      <li key={i} className="text-amber-700 text-sm flex items-start gap-2">
                        <span className="text-amber-500 mt-1">-</span> {instruction}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* SWIFT Details */}
            {isOutsideEU && (
              <>
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-bold text-teal-800">International SWIFT Transfer</h3>
                    <span className="text-xs bg-teal-200 text-teal-800 px-2 py-0.5 rounded-full">{swiftDetails.transferTime}</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-teal-700">Beneficiary:</span>
                      <span className="font-medium text-teal-900">{bankDetails.beneficiary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-teal-700">Accepted Currency:</span>
                      <span className="font-medium text-teal-900">EUR</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-teal-700">IBAN:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-medium text-teal-900">{bankDetails.iban}</span>
                        <button onClick={copyIban} className="p-1 rounded hover:bg-teal-100">
                          {copiedIban ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-teal-600" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-teal-700">BIC:</span>
                      <span className="font-medium text-teal-900">{bankDetails.bic}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-teal-700">Intermediary BIC:</span>
                      <span className="font-medium text-teal-900">{swiftDetails.intermediaryBic}</span>
                    </div>
                    <div className="pt-3 border-t border-teal-200 mt-3">
                      <p className="text-teal-700 text-xs font-medium mb-2">Beneficiary Address:</p>
                      <p className="font-medium text-teal-900">{bankDetails.address}</p>
                    </div>
                    <div className="pt-3 border-t border-teal-200">
                      <p className="text-teal-700 text-xs font-medium mb-2">Bank & Address:</p>
                      <p className="font-medium text-teal-900">{bankDetails.bank}</p>
                      <p className="text-teal-800 text-sm">{bankDetails.bankAddress}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
                  <h3 className="font-bold text-amber-800 mb-3">Instructions</h3>
                  <ul className="space-y-2">
                    {swiftDetails.instructions.map((instruction, i) => (
                      <li key={i} className="text-amber-700 text-sm flex items-start gap-2">
                        <span className="text-amber-500 mt-1">-</span> {instruction}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-[#4a4a68]">Product:</span>
                <span className="font-bold text-[#1a1a2e]">{product.name}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[#4a4a68]">Amount:</span>
                <span className="font-bold text-[#1a1a2e]">{formatPrice(product.priceMin)} - {formatPrice(product.priceMax)}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button onClick={() => setShowPayment(false)} variant="outline" className="flex-1">
                Close
              </Button>
              <Link href="/contact" className="flex-1">
                <Button className="w-full">Contact Sales</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className={`bg-gradient-to-r ${product.gradient.from} ${product.gradient.to} rounded-3xl p-8 md:p-12 text-white overflow-hidden relative`}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            <div className="relative z-10 text-center">
              <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                Strategic Investment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Data Infrastructure with INFRA DATA LAKE?</h2>
              <p className="text-white/90 mb-4 max-w-2xl mx-auto text-lg">
                Join leading enterprises already using INFRA DATA LAKE to unify their data, accelerate insights, and reduce analytics costs by 80%.
              </p>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Valuation: <span className="font-bold text-white">{formatPrice(product.priceMin)} - {formatPrice(product.priceMax)}</span>
                <br />
                <span className="text-sm">Final price negotiated based on deployment scope and support requirements</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {isAuthenticated ? (
                  <Button size="lg" onClick={() => setShowPayment(true)} className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
                    <CreditCard className="w-5 h-5 mr-2" /> View Payment Details
                  </Button>
                ) : (
                  <Link href="/login?callbackUrl=/products/infra-data-lake">
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
                      <Lock className="w-5 h-5 mr-2" /> Login to Purchase
                    </Button>
                  </Link>
                )}
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
