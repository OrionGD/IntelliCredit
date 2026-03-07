import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { cn } from '../types';
import { SystemHealthPanel } from '../components/modules/SystemHealthPanel';
import { AuditLogTimeline } from '../components/shared/AuditLogTimeline';
import { DataFreshnessGrid } from '../components/shared/DataFreshnessIndicator';
import { mockAuditEvents } from '../data/mockData';

const modules = [
  { 
    name: "Digital Twin Stress Tester", 
    status: "idle", 
    insight: "Simulated 10,000 economic scenarios. Result: Default probability low (2.4%).",
    lastRun: "15 mins ago"
  },
  { 
    name: "GST Time Series Oracle", 
    status: "active", 
    insight: "Analyzing tax filings for seasonal revenue patterns. 82% complete.",
    lastRun: "Running now"
  },
  { 
    name: "Network Contagion Scoring", 
    status: "idle", 
    insight: "Supplier network mapped. No critical dependencies on high-risk entities found.",
    lastRun: "1h ago"
  },
  { 
    name: "UPI Cash Velocity Engine", 
    status: "active", 
    insight: "Monitoring real-time transaction speeds. Current velocity is within normal range.",
    lastRun: "Running now"
  },
  { 
    name: "Management DNA Profiler", 
    status: "idle", 
    insight: "Leadership track record verified. No past defaults or integrity issues found.",
    lastRun: "3h ago"
  },
  { 
    name: "Smart Escrow Loans", 
    status: "idle", 
    insight: "Milestone conditions defined. Ready for automated disbursement tracking.",
    lastRun: "5h ago"
  },
  { 
    name: "Adversarial Fraud Testing", 
    status: "idle", 
    insight: "Data consistency check passed. No signs of manual manipulation in filings.",
    lastRun: "1h ago"
  },
  { 
    name: "Zero Knowledge Covenant Mesh", 
    status: "idle", 
    insight: "Privacy-preserving monitoring active. All covenants currently satisfied.",
    lastRun: "2h ago"
  },
  { 
    name: "Google Trends Capacity Proxy", 
    status: "idle", 
    insight: "Market demand for company products shows 12% YoY growth in search volume.",
    lastRun: "4h ago"
  },
  { 
    name: "Economic Sentiment Analyzer", 
    status: "idle", 
    insight: "Sector news is generally positive, though raw material costs are a rising concern.",
    lastRun: "30 mins ago"
  }
];

export const ModuleMonitor: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">AI Module Monitor</h1>
          <p className="text-olive-detail">Real-time status of the 10 specialized intelligence engines.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-forest-text rounded-full animate-pulse"></div>
            <span className="text-sm font-bold">2 Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-moss-accent/30 rounded-full"></div>
            <span className="text-sm font-bold">8 Idle</span>
          </div>
        </div>
      </div>

      <DataFreshnessGrid />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="card-sage group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      module.status === 'active' ? "bg-forest-text text-sage-bg" : "bg-forest-text/5 text-forest-text"
                    )}>
                      <BrainCircuit size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold">{module.name}</h3>
                      <p className="text-[10px] text-olive-detail uppercase tracking-widest font-bold">{module.lastRun}</p>
                    </div>
                  </div>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5",
                    module.status === 'active' ? "bg-forest-text text-sage-bg" : "bg-moss-accent/10 text-moss-accent"
                  )}>
                    {module.status === 'active' ? (
                      <>
                        <Loader2 size={12} className="animate-spin" />
                        <span>Analyzing</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 size={12} />
                        <span>Ready</span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="bg-forest-text/5 p-4 rounded-xl border border-forest-text/5">
                  <div className="flex gap-2">
                    <AlertCircle size={14} className="text-moss-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-forest-text leading-relaxed italic">
                      "{module.insight}"
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button className="text-xs font-bold text-olive-detail hover:text-forest-text transition-colors">
                    View Full Log
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <SystemHealthPanel />
          <AuditLogTimeline events={mockAuditEvents} />
        </div>
      </div>
    </div>
  );
};
