import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  BrainCircuit,
  TrendingUp,
  DollarSign,
  Info
} from 'lucide-react';
import { cn } from '../types';
import { CreditMemoPreview } from '../components/decision/CreditMemoPreview';
import { ReportExportPanel } from '../components/decision/ReportExportPanel';

const decisionDrivers = [
  { label: "Financial Health", score: 88, weight: "High", impact: "Positive" },
  { label: "Market Sentiment", score: 65, weight: "Medium", impact: "Neutral" },
  { label: "Management Integrity", score: 94, weight: "High", impact: "Positive" },
  { label: "Supplier Network", score: 72, weight: "Medium", impact: "Positive" }
];

export const DecisionWorkbench: React.FC = () => {
  const [decision, setDecision] = useState<'approve' | 'reject' | 'review' | null>(null);

  return (
    <div className="space-y-8 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Analysis Column */}
        <div className="lg:col-span-2 space-y-8">
          <section className="card-sage">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <BrainCircuit size={20} className="text-moss-accent" />
              AI Recommendation Summary
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 bg-forest-text rounded-3xl flex flex-col items-center justify-center text-sage-bg shrink-0">
                <p className="text-xs uppercase tracking-widest font-bold opacity-70 mb-1">Risk Score</p>
                <p className="text-4xl font-bold">82</p>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-forest-text mb-4">Strong Approval Candidate</h3>
                <p className="text-olive-detail leading-relaxed mb-6">
                  IntelliCredit AI has analyzed 3 documents across 10 modules. The company shows strong financial stability and a high management integrity score. The primary risk factor is a slight revenue dip in the last quarter, which is consistent with industry-wide seasonal trends.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-forest-text/5 p-4 rounded-xl flex items-center gap-3">
                    <TrendingUp size={20} className="text-forest-text" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-olive-detail">Default Probability</p>
                      <p className="text-sm font-bold">2.4% (Very Low)</p>
                    </div>
                  </div>
                  <div className="bg-forest-text/5 p-4 rounded-xl flex items-center gap-3">
                    <ShieldCheck size={20} className="text-forest-text" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-olive-detail">Confidence Level</p>
                      <p className="text-sm font-bold">94% (High)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Info size={20} className="text-moss-accent" />
              Key Decision Drivers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {decisionDrivers.map((driver, i) => (
                <div key={i} className="card-sage flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{driver.label}</p>
                    <p className="text-xs text-olive-detail mt-1">Weight: {driver.weight}</p>
                  </div>
                  <div className="text-right">
                    <p className={cn(
                      "text-lg font-bold",
                      driver.impact === 'Positive' ? "text-forest-text" : "text-olive-detail"
                    )}>{driver.score}%</p>
                    <p className={cn(
                      "text-[10px] uppercase font-bold",
                      driver.impact === 'Positive' ? "text-forest-text" : "text-olive-detail"
                    )}>{driver.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card-sage">
            <h2 className="text-xl font-bold mb-6">Suggested Loan Conditions</h2>
            <ul className="space-y-4">
              {[
                "Quarterly GST filing review required.",
                "Maintain a minimum Debt Service Coverage Ratio (DSCR) of 1.5x.",
                "Escrow account mandatory for all project-specific disbursements.",
                "Negative lien on core manufacturing assets."
              ].map((condition, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-olive-detail">
                  <div className="w-5 h-5 bg-forest-text/5 rounded-full flex items-center justify-center text-forest-text shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  {condition}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-6">Credit Memo Preview</h2>
            <CreditMemoPreview />
          </section>
        </div>

        {/* Action Column */}
        <div className="space-y-8">
          <section className="card-sage bg-forest-text text-sage-bg border-none sticky top-24">
            <h2 className="text-xl font-bold mb-6">Final Credit Decision</h2>
            <div className="space-y-4 mb-8">
              <button 
                onClick={() => setDecision('approve')}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-2xl border transition-all",
                  decision === 'approve' ? "bg-white text-forest-text border-white" : "border-white/20 hover:bg-white/10"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center",
                  decision === 'approve' ? "bg-forest-text text-sage-bg" : "bg-white/10"
                )}>
                  <CheckCircle2 size={24} />
                </div>
                <div className="text-left">
                  <p className="font-bold">Approve Loan</p>
                  <p className="text-[10px] opacity-70">Proceed with disbursement</p>
                </div>
              </button>

              <button 
                onClick={() => setDecision('review')}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-2xl border transition-all",
                  decision === 'review' ? "bg-white text-forest-text border-white" : "border-white/20 hover:bg-white/10"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center",
                  decision === 'review' ? "bg-forest-text text-sage-bg" : "bg-white/10"
                )}>
                  <AlertTriangle size={24} />
                </div>
                <div className="text-left">
                  <p className="font-bold">Review Further</p>
                  <p className="text-[10px] opacity-70">Request more documents</p>
                </div>
              </button>

              <button 
                onClick={() => setDecision('reject')}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-2xl border transition-all",
                  decision === 'reject' ? "bg-white text-forest-text border-white" : "border-white/20 hover:bg-white/10"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center",
                  decision === 'reject' ? "bg-forest-text text-sage-bg" : "bg-white/10"
                )}>
                  <XCircle size={24} />
                </div>
                <div className="text-left">
                  <p className="font-bold">Reject Loan</p>
                  <p className="text-[10px] opacity-70">Decline application</p>
                </div>
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-xs opacity-70 uppercase tracking-widest font-bold">Decision Notes</p>
              <textarea 
                placeholder="Add your final comments here..."
                className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-sm text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/20 outline-none min-h-[120px]"
              />
              <button className="w-full btn-primary bg-sage-bg text-forest-text py-4 font-bold flex items-center justify-center gap-2">
                <FileText size={20} />
                Generate Credit Memo
              </button>
            </div>
          </section>

          <ReportExportPanel companyName="Acme Manufacturing Ltd." />

          <section className="card-sage">
            <h3 className="font-bold mb-4">Loan Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-olive-detail">Requested Amount</span>
                <span className="text-sm font-bold">$2,500,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-olive-detail">Interest Rate (Suggested)</span>
                <span className="text-sm font-bold">8.5% p.a.</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-olive-detail">Tenure</span>
                <span className="text-sm font-bold">36 Months</span>
              </div>
              <div className="pt-4 border-t border-forest-text/5 flex justify-between items-center">
                <span className="text-xs text-olive-detail">Processing Fee</span>
                <span className="text-sm font-bold">$12,500</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
