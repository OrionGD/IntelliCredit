import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Network, 
  Zap, 
  BarChart3, 
  Cpu, 
  Database, 
  LineChart, 
  Activity, 
  Users, 
  Globe,
  CheckCircle2,
  ChevronRight,
  Lock,
  Search,
  FileText
} from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

const modules = [
  { 
    title: "Digital Twin Stress Tester", 
    desc: "Simulates 10,000+ economic scenarios to stress-test business resilience and solvency under extreme market conditions.",
    icon: Activity
  },
  { 
    title: "GST Time Series Oracle", 
    desc: "Advanced forecasting of future revenue trends and tax compliance from historical filings using deep learning.",
    icon: LineChart
  },
  { 
    title: "Network Contagion Scoring", 
    desc: "Maps systemic risks from supplier and buyer dependencies using graph intelligence and propagation models.",
    icon: Network
  },
  { 
    title: "UPI Cash Velocity Engine", 
    desc: "Real-time analysis of transaction speed and liquidity patterns across digital payment channels.",
    icon: Zap
  },
  { 
    title: "Management DNA Profiler", 
    desc: "Proprietary evaluation of leadership integrity, track record, and decision-making patterns using behavioral AI.",
    icon: Users
  },
  { 
    title: "Economic Sentiment Analyzer", 
    desc: "Natural language processing of news, reports, and sector signals for macro-risk detection and early warning.",
    icon: Globe
  }
];

const capabilities = [
  { 
    icon: ShieldCheck, 
    title: "Financial Data Intelligence", 
    desc: "Automated anomaly detection and deep-dive analysis of financial statements and regulatory filings." 
  },
  { 
    icon: Network, 
    title: "Business Network Risk", 
    desc: "Comprehensive mapping of supply chain and counterparty risks to prevent contagion effects." 
  },
  { 
    icon: Zap, 
    title: "Cash Flow Monitoring", 
    desc: "Continuous surveillance of operational cash flows and liquidity buffers for early warning signals." 
  },
  { 
    icon: BarChart3, 
    title: "Market Sentiment Analysis", 
    desc: "Real-time tracking of sector-wide trends and external economic factors impacting creditworthiness." 
  }
];

const businessImpacts = [
  { title: "Faster Credit Decisions", desc: "Reduce turnaround time from weeks to minutes with automated intelligence." },
  { title: "Reduced Risk Exposure", desc: "Identify hidden vulnerabilities before they manifest as defaults." },
  { title: "Automated Monitoring", desc: "Continuous portfolio surveillance with real-time risk alerts." },
  { title: "Data-Driven Lending", desc: "Objective, evidence-based decisioning backed by multi-dimensional AI." }
];

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-sage-bg text-forest-text font-sans selection:bg-moss-accent/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-sage-bg/90 backdrop-blur-md border-b border-forest-text/5 px-6 lg:px-12 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="assets/logo.png" 
              alt="IntelliCredit Logo" 
              className="w-9 h-9 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/1/1f/IntelliCredit.png";
              }}
            />
            <span className="font-bold text-xl tracking-tight">IntelliCredit</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-olive-detail uppercase tracking-wider">
            <a href="#overview" className="hover:text-forest-text transition-colors">Platform</a>
            <a href="#modules" className="hover:text-forest-text transition-colors">Intelligence</a>
            <a href="#capabilities" className="hover:text-forest-text transition-colors">Capabilities</a>
            <button 
              onClick={onStart}
              className="bg-forest-text text-sage-bg px-6 py-2.5 rounded-lg hover:opacity-95 transition-all shadow-lg shadow-forest-text/10"
            >
              Access Platform
            </button>
          </div>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-text/5 text-moss-accent font-bold text-xs uppercase tracking-[0.2em] mb-8">
              <Cpu size={14} />
              <span>Enterprise Credit Intelligence</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.95]">
              Next-Gen <br />
              <span className="text-moss-accent italic font-serif">Decision Intelligence</span>
            </h1>
            <p className="text-2xl text-olive-detail max-w-2xl mb-10 leading-relaxed font-light">
              IntelliCredit transforms corporate lending with institutional-grade AI. Automate complex risk analysis, detect systemic signals, and drive faster, data-backed credit decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={onStart}
                className="btn-primary text-xl px-10 py-5 flex items-center justify-center gap-3 group shadow-xl shadow-forest-text/20"
              >
                Start Credit Analysis
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary text-xl px-10 py-5 flex items-center justify-center gap-3">
                Explore Platform
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle Background Element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-l from-moss-accent/5 to-transparent pointer-events-none blur-3xl rounded-full" />
      </section>

      {/* 1.5 Video Demo Section */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto text-center border-t border-forest-text/5">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">See IntelliCredit in Action</h2>
          <p className="text-xl text-olive-detail font-light leading-relaxed">
            Experience how our AI-powered platform transforms corporate credit analysis with real-time intelligence and automated decisioning.
          </p>
        </div>
        
        <div className="relative max-w-[1000px] mx-auto group">
          <div className="relative aspect-video bg-forest-text/5 rounded-[40px] overflow-hidden shadow-2xl border border-forest-text/5">
            <video 
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=1200&h=675"
              controls
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play Button Overlay (Visual only, video controls handle actual play) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
               <div className="w-24 h-24 bg-moss-accent/90 text-sage-bg rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm">
                 <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-current border-b-[14px] border-b-transparent ml-2" />
               </div>
            </div>
          </div>
          
          {/* Decorative elements around video */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-moss-accent/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-forest-text/5 rounded-full blur-3xl -z-10" />
        </div>---
      </section>

      {/* 2. Platform Overview */}
      <section id="overview" className="py-32 bg-white/40 border-y border-forest-text/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
                Institutional-Grade <br /> Risk Intelligence
              </h2>
              <p className="text-xl text-olive-detail leading-relaxed mb-10">
                Traditional credit analysis is manual, slow, and often misses non-linear risk signals. IntelliCredit bridges this gap by integrating multi-dimensional data sources into a unified, high-fidelity decision engine.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Search, label: "Deep Signal Detection", desc: "Identify risks hidden in unstructured data." },
                  { icon: FileText, label: "Automated Analysis", desc: "Process complex filings in seconds." },
                  { icon: Lock, label: "Enterprise Security", desc: "AES-256 encrypted data processing." },
                  { icon: CheckCircle2, label: "Audit-Ready Logs", desc: "Full transparency for every decision." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="w-10 h-10 bg-forest-text/5 rounded-lg flex items-center justify-center">
                      <item.icon className="text-moss-accent" size={20} />
                    </div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">{item.label}</h4>
                    <p className="text-xs text-olive-detail leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-forest-text p-12 rounded-[40px] text-sage-bg relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                  <div className="text-6xl font-bold mb-2">98.4%</div>
                  <div className="text-sm opacity-60 uppercase tracking-[0.2em] mb-12">Decision Accuracy Rate</div>
                  <div className="space-y-6">
                    <div className="h-2 w-full bg-sage-bg/10 rounded-full overflow-hidden">
                      <div className="h-full bg-moss-accent w-[98.4%]" />
                    </div>
                    <div className="flex justify-between text-xs font-mono opacity-50">
                      <span>MODEL_CONFIDENCE</span>
                      <span>HIGH_STABILITY</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-moss-accent/20 rounded-full blur-3xl" />
              </div>
              <div className="absolute -top-12 -left-12 bg-white p-8 rounded-3xl border border-forest-text/5 shadow-xl hidden lg:block">
                <Activity className="text-moss-accent mb-4" size={32} />
                <div className="text-2xl font-bold">10k+</div>
                <div className="text-[10px] uppercase tracking-widest opacity-50">Scenarios Tested</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Intelligence Modules */}
      <section id="modules" className="py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">Core Intelligence Modules</h2>
          <p className="text-olive-detail max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Our platform utilizes a suite of specialized AI engines that work in parallel to provide a 360-degree view of corporate risk.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {modules.map((module, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="p-10 bg-white border border-forest-text/5 rounded-[40px] hover:shadow-2xl hover:shadow-forest-text/5 transition-all group"
            >
              <div className="w-16 h-16 bg-forest-text/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-moss-accent/10 transition-colors">
                <module.icon className="text-forest-text group-hover:text-moss-accent transition-colors" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-5 tracking-tight">{module.title}</h3>
              <p className="text-olive-detail leading-relaxed">
                {module.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. How the System Works */}
      <section className="py-40 bg-forest-text text-sage-bg overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">The Intelligence Pipeline</h2>
            <p className="text-sage-bg/60 max-w-2xl mx-auto text-xl font-light">
              A structured approach to transforming raw data into actionable lending decisions.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8">
            {[
              { step: "01", label: "Data Ingestion", desc: "Consolidating financial, operational, and market data from 50+ sources." },
              { step: "02", label: "AI Analysis", desc: "Parallel processing through specialized risk modules and neural networks." },
              { step: "03", label: "Risk Scoring", desc: "Generating multi-dimensional credit risk profiles with explainable AI." },
              { step: "04", label: "Lending Decision", desc: "Final automated recommendation with a comprehensive audit trail." }
            ].map((item, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-start max-w-xs">
                  <div className="text-6xl font-bold text-moss-accent/20 mb-8 font-mono tracking-tighter">{item.step}</div>
                  <h4 className="text-2xl font-bold mb-4">{item.label}</h4>
                  <p className="text-sage-bg/50 leading-relaxed">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block pt-16">
                    <ChevronRight className="text-moss-accent/20" size={40} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Abstract Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-moss-accent/5 to-transparent pointer-events-none" />
      </section>

      {/* 5. Key Capabilities */}
      <section id="capabilities" className="py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {capabilities.map((cap, i) => (
                <div key={i} className="p-8 bg-white/60 border border-forest-text/5 rounded-3xl hover:bg-white transition-colors">
                  <cap.icon className="text-moss-accent mb-6" size={28} />
                  <h4 className="text-xl font-bold mb-3">{cap.title}</h4>
                  <p className="text-sm text-olive-detail leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-6xl font-bold mb-10 tracking-tight">Unmatched <br /> Analytical Depth</h2>
            <p className="text-xl text-olive-detail leading-relaxed mb-12 font-light">
              Our platform goes beyond balance sheets. We analyze the entire ecosystem surrounding a business to identify risks that traditional models overlook.
            </p>
            <button 
              onClick={onStart}
              className="btn-primary flex items-center gap-3 group text-lg px-8 py-4"
            >
              Learn More About Capabilities
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Business Impact */}
      <section className="py-40 bg-white/40 border-y border-forest-text/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">Measurable Business Impact</h2>
            <p className="text-olive-detail max-w-2xl mx-auto text-xl font-light">
              Empowering financial institutions to scale their lending operations with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {businessImpacts.map((impact, i) => (
              <div key={i} className="text-center p-10 border-r border-forest-text/5 last:border-0">
                <div className="text-moss-accent font-bold text-lg mb-6 uppercase tracking-[0.2em]">{impact.title}</div>
                <p className="text-olive-detail leading-relaxed font-medium">{impact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Technology & Innovation */}
      <section className="py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="bg-forest-text rounded-[64px] p-16 lg:p-24 text-sage-bg relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl lg:text-6xl font-bold mb-10 tracking-tight">Built on Advanced Research</h2>
            <p className="text-xl text-sage-bg/70 leading-relaxed mb-12 font-light">
              IntelliCredit is the result of years of engineering in financial technology and machine learning. Our proprietary models are trained on vast datasets of corporate performance, economic cycles, and network behaviors to ensure the highest level of predictive accuracy.
            </p>
            <div className="flex flex-wrap gap-12">
              <div className="flex flex-col">
                <span className="text-moss-accent font-bold text-3xl">Proprietary</span>
                <span className="text-xs uppercase tracking-[0.2em] opacity-50 mt-2">AI Models</span>
              </div>
              <div className="flex flex-col">
                <span className="text-moss-accent font-bold text-3xl">AES-256</span>
                <span className="text-xs uppercase tracking-[0.2em] opacity-50 mt-2">Data Security</span>
              </div>
              <div className="flex flex-col">
                <span className="text-moss-accent font-bold text-3xl">SOC2</span>
                <span className="text-xs uppercase tracking-[0.2em] opacity-50 mt-2">Compliance Ready</span>
              </div>
            </div>
          </div>
          {/* Decorative Graphic */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-moss-accent/10 blur-3xl rounded-full -mr-32 -mt-32" />
        </div>
      </section>

      {/* 8. Call To Action */}
      <section className="py-48 px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-10 tracking-tight">Ready to transform your <br /> credit decisioning?</h2>
          <p className="text-2xl text-olive-detail mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Join leading financial institutions using IntelliCredit to drive faster, safer, and more profitable lending.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={onStart}
              className="btn-primary text-2xl px-14 py-6 shadow-2xl shadow-forest-text/20"
            >
              Open IntelliCredit Platform
            </button>
            <button className="btn-secondary text-2xl px-14 py-6">
              Schedule a Demo
            </button>
          </div>
        </motion.div>
      </section>

    {/* 9. Professional Footer */}
<footer className="py-24 border-t border-forest-text/10 px-6 lg:px-12 bg-white/30">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
      
      <div className="col-span-1 lg:col-span-1">
        <div className="flex items-center gap-3 mb-8">
          <img 
            src="assets/logo.png" 
            alt="Logo" 
            className="w-8 h-8 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/1/1f/IntelliCredit.png";
            }}
          />
          <span className="font-bold text-2xl tracking-tight">IntelliCredit</span>
        </div>

        <p className="text-sm text-olive-detail leading-relaxed font-medium">
          IntelliCredit is an AI-powered decision intelligence platform designed
          for banks and financial institutions. It analyzes financial data,
          business activity, and market signals to help lenders make faster,
          smarter, and more reliable corporate credit decisions.
        </p>
      </div>

      <div>
        <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-forest-text/40">
          Platform
        </h4>
        <ul className="space-y-5 text-sm font-semibold text-olive-detail">
          <li><a href="#" className="hover:text-forest-text transition-colors">AI Risk Intelligence Engine</a></li>
          <li><a href="#" className="hover:text-forest-text transition-colors">Credit Decision Modules</a></li>
          <li><a href="#" className="hover:text-forest-text transition-colors">Financial Data Connectors</a></li>
          <li><a href="#" className="hover:text-forest-text transition-colors">Compliance & Audit Monitoring</a></li>
          <li><a href="#" className="hover:text-forest-text transition-colors">Enterprise Security</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-forest-text/40">
          Company
        </h4>
        <ul className="space-y-5 text-sm font-semibold text-olive-detail">
          <li><a href="#" className="hover:text-forest-text transition-colors">About IntelliCredit</a></li>
          <li><a href="#" className="hover:text-forest-text transition-colors">AI Research</a></li>
          <li><a href="#" className="hover:text-forest-text transition-colors">Technology & Innovation</a></li>
          <li><a href="#" className="hover:text-forest-text transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-forest-text transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-forest-text transition-colors">Privacy Policy</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-8 uppercase text-xs tracking-[0.2em] text-forest-text/40">
          Contact
        </h4>
        <ul className="space-y-5 text-sm font-semibold text-olive-detail">
          <li>Email</li>
          <li>swizztek.teams@gmail.com</li>
          <li>Address</li>
          <li>KRCT, Tiruchirappalli</li>
          <li>Tamil Nadu, India</li>
        </ul>
      </div>

    </div>

    <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-forest-text/5 gap-8">
      <p className="text-xs text-olive-detail/50 uppercase tracking-[0.2em] font-bold">
        © 2026 IntelliCredit AI. Enterprise Decision Intelligence Platform.
      </p>

      <div className="flex gap-10 text-xs text-olive-detail/50 uppercase tracking-[0.2em] font-bold">
        <a href="#" className="hover:text-forest-text transition-colors">Terms</a>
        <a href="#" className="hover:text-forest-text transition-colors">Privacy</a>
        <a href="#" className="hover:text-forest-text transition-colors">Cookies</a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};
