import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Info,
  Building2,
  MapPin,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  BrainCircuit,
  Activity
} from 'lucide-react';
import { cn } from '../types';

const riskIndicators = [
  { label: "Financial Stability", score: 88, explanation: "Profit margins are healthy and debt is well-managed." },
  { label: "Cash Flow Health", score: 72, explanation: "Daily transactions are steady, but seasonal dips occur." },
  { label: "Management Strength", score: 94, explanation: "Leadership has a 15-year track record of growth." },
  { label: "Market Risk", score: 65, explanation: "The sector is facing new regulations that might impact sales." }
];

const insights = [
  { 
    title: "Revenue Comparison", 
    content: "GST filings show a 18% drop in revenue compared to industry peers in the last quarter.",
    type: "negative" 
  },
  { 
    title: "Supplier Dependency", 
    content: "Supplier network analysis shows dependency on one major buyer for 60% of sales.",
    type: "neutral" 
  },
  { 
    title: "Legal Status", 
    content: "No active litigation or legal disputes found in the last 5 years of records.",
    type: "positive" 
  }
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* Company Overview */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-sage flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="w-20 h-20 bg-forest-text rounded-2xl flex items-center justify-center shrink-0">
            <Building2 className="text-sage-bg w-10 h-10" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">Acme Manufacturing Ltd.</h1>
              <span className="px-3 py-1 bg-moss-accent/20 text-forest-text text-xs font-bold rounded-full uppercase tracking-wider">
                Active Application
              </span>
            </div>
            <div className="flex flex-wrap gap-6 text-olive-detail">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} />
                <span className="text-sm">Industrial Goods</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-sm">Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign size={16} />
                <span className="text-sm">Request: $2.5M</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-olive-detail uppercase font-bold tracking-widest mb-1">Risk Score</p>
            <p className="text-5xl font-bold text-forest-text">82<span className="text-xl text-olive-detail">/100</span></p>
          </div>
        </div>

        <div className="card-sage bg-forest-text text-sage-bg border-none flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">AI Recommendation</h3>
            <div className="flex items-center gap-2 text-moss-accent mb-4">
              <CheckCircle2 size={20} />
              <span className="font-bold text-xl">Approve</span>
            </div>
            <p className="text-sm text-sage-bg/70 leading-relaxed">
              "Loan can be approved. Financial stability is strong and cash flow is consistent across multiple data points."
            </p>
          </div>
          <button className="mt-6 w-full py-3 bg-sage-bg text-forest-text rounded-xl font-bold hover:bg-white transition-colors">
            Finalize Decision
          </button>
        </div>
      </section>

      {/* Risk Snapshot */}
      <section>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <ShieldCheck size={20} className="text-moss-accent" />
          Risk Snapshot
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {riskIndicators.map((risk, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="card-sage"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-bold uppercase tracking-tight text-olive-detail">{risk.label}</span>
                <span className={cn(
                  "text-2xl font-bold",
                  risk.score > 80 ? "text-forest-text" : "text-moss-accent"
                )}>{risk.score}%</span>
              </div>
              <div className="w-full bg-forest-text/5 h-1.5 rounded-full mb-4 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${risk.score}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-forest-text h-full rounded-full"
                />
              </div>
              <p className="text-xs text-olive-detail leading-relaxed">{risk.explanation}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI Insights */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <BrainCircuit size={20} className="text-moss-accent" />
            AI Discovered Insights
          </h2>
          <div className="space-y-4">
            {insights.map((insight, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="card-sage flex gap-4"
              >
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                  insight.type === 'positive' ? "bg-forest-text/10 text-forest-text" :
                  insight.type === 'negative' ? "bg-moss-accent/20 text-moss-accent" :
                  "bg-olive-detail/10 text-olive-detail"
                )}>
                  {insight.type === 'positive' ? <CheckCircle2 size={20} /> :
                   insight.type === 'negative' ? <AlertCircle size={20} /> :
                   <Info size={20} />}
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">{insight.title}</h4>
                  <p className="text-sm text-olive-detail leading-relaxed">{insight.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="card-sage flex flex-col justify-center items-center text-center p-12">
          <div className="w-24 h-24 bg-moss-accent/10 rounded-full flex items-center justify-center mb-6">
            <Activity className="text-moss-accent w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Deep Analysis Required?</h3>
          <p className="text-olive-detail mb-8 max-w-sm">
            Our AI suggests exploring the supplier network graph for potential contagion risks.
          </p>
          <button className="btn-secondary flex items-center gap-2">
            Open Risk Explorer
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};
