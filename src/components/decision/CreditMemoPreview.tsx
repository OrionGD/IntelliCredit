import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Share2, ShieldCheck, BrainCircuit, TrendingUp } from 'lucide-react';

export const CreditMemoPreview: React.FC = () => {
  return (
    <div className="card-sage bg-white border-forest-text/20 shadow-xl p-12 max-w-4xl mx-auto font-serif text-forest-text">
      <div className="flex justify-between items-start border-b-2 border-forest-text pb-8 mb-8">
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-tighter mb-2">Credit Memo</h1>
          <p className="text-sm font-sans font-bold text-olive-detail uppercase tracking-widest">Confidential • IntelliCredit AI Generated</p>
        </div>
        <div className="text-right font-sans">
          <p className="text-sm font-bold">Date: March 6, 2026</p>
          <p className="text-sm">Ref: IC-2026-082</p>
        </div>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-lg font-bold uppercase border-b border-forest-text/10 pb-2 mb-4 font-sans">1. Executive Summary</h2>
          <div className="grid grid-cols-2 gap-8 font-sans">
            <div>
              <p className="text-xs text-olive-detail uppercase font-bold mb-1">Borrower</p>
              <p className="text-sm font-bold">Acme Manufacturing Ltd.</p>
            </div>
            <div>
              <p className="text-xs text-olive-detail uppercase font-bold mb-1">Requested Amount</p>
              <p className="text-sm font-bold">$2,500,000</p>
            </div>
            <div>
              <p className="text-xs text-olive-detail uppercase font-bold mb-1">Industry</p>
              <p className="text-sm font-bold">Industrial Goods</p>
            </div>
            <div>
              <p className="text-xs text-olive-detail uppercase font-bold mb-1">AI Risk Score</p>
              <p className="text-sm font-bold">82 / 100 (Low Risk)</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold uppercase border-b border-forest-text/10 pb-2 mb-4 font-sans">2. AI Recommendation</h2>
          <div className="bg-forest-text/5 p-6 rounded-xl border border-forest-text/10 font-sans italic leading-relaxed">
            "Strong Approval Candidate. The company demonstrates robust financial stability with a 2.4% probability of default. Management integrity is verified at 94%. Cash flow velocity is consistent with seasonal manufacturing cycles."
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold uppercase border-b border-forest-text/10 pb-2 mb-4 font-sans">3. Financial Highlights</h2>
          <div className="space-y-4 font-sans">
            <div className="flex justify-between items-center py-2 border-b border-forest-text/5">
              <span className="text-sm">Annual Revenue (FY25)</span>
              <span className="text-sm font-bold">$18.4M</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-forest-text/5">
              <span className="text-sm">EBITDA Margin</span>
              <span className="text-sm font-bold">14.2%</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-forest-text/5">
              <span className="text-sm">Current Ratio</span>
              <span className="text-sm font-bold">1.85x</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-forest-text/5">
              <span className="text-sm">Debt Service Coverage Ratio</span>
              <span className="text-sm font-bold">2.1x</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold uppercase border-b border-forest-text/10 pb-2 mb-4 font-sans">4. Risk Drivers & Mitigants</h2>
          <div className="space-y-4 font-sans">
            <div className="flex gap-4">
              <div className="w-1.5 h-1.5 bg-forest-text rounded-full mt-2 shrink-0" />
              <div>
                <p className="text-sm font-bold">Supplier Concentration</p>
                <p className="text-xs text-olive-detail leading-relaxed">Risk: 60% dependency on one buyer. Mitigant: AI analysis shows 4 alternative buyers mapped in the same sector.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1.5 h-1.5 bg-forest-text rounded-full mt-2 shrink-0" />
              <div>
                <p className="text-sm font-bold">Regulatory Sentiment</p>
                <p className="text-xs text-olive-detail leading-relaxed">Risk: Upcoming environmental policy changes. Mitigant: Company has already invested $1.2M in green compliance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 flex justify-end gap-4 font-sans print:hidden">
        <button className="btn-secondary flex items-center gap-2">
          <Download size={18} />
          Download PDF
        </button>
        <button className="btn-primary flex items-center gap-2">
          <Share2 size={18} />
          Share with Committee
        </button>
      </div>
    </div>
  );
};
