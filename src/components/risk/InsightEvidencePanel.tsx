import React from 'react';
import { Database, FileText, ShieldCheck, ExternalLink } from 'lucide-react';
import { Evidence, cn } from '../../types';

interface InsightEvidencePanelProps {
  evidence: Evidence;
}

export const InsightEvidencePanel: React.FC<InsightEvidencePanelProps> = ({ evidence }) => {
  return (
    <div className="card-sage bg-forest-text/5 border-forest-text/5 p-4 mt-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Database size={14} className="text-moss-accent" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-olive-detail">Evidence Trace</span>
        </div>
        <div className="flex items-center gap-1">
          <ShieldCheck size={14} className="text-forest-text" />
          <span className="text-[10px] font-bold text-forest-text">{evidence.confidence}% Confidence</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-forest-text shrink-0">
            <FileText size={16} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold truncate">{evidence.reference}</p>
            <p className="text-[10px] text-olive-detail">{evidence.source}</p>
          </div>
          <button className="p-1.5 hover:bg-forest-text/5 rounded-lg text-olive-detail">
            <ExternalLink size={14} />
          </button>
        </div>
        
        <div className="pt-3 border-t border-forest-text/5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-olive-detail">AI Model Engine</span>
            <span className="text-[10px] font-bold text-forest-text">{evidence.model}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
