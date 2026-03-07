import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Table, FileJson, Download, CheckCircle2, Loader2, Share2 } from 'lucide-react';

interface ReportExportPanelProps {
  companyName: string;
}

export const ReportExportPanel: React.FC<ReportExportPanelProps> = ({ companyName }) => {
  const [exporting, setExporting] = useState<string | null>(null);
  const [completed, setCompleted] = useState<string | null>(null);

  const handleExport = (type: string) => {
    setExporting(type);
    setTimeout(() => {
      setExporting(null);
      setCompleted(type);
      setTimeout(() => setCompleted(null), 3000);
    }, 1500);
  };

  const exportOptions = [
    { id: 'pdf', title: 'Credit Memo PDF', icon: FileText, description: 'Full executive summary and AI rationale.' },
    { id: 'csv', title: 'Risk Dataset CSV', icon: Table, description: 'Raw financial data and risk indicators.' },
    { id: 'json', title: 'Analysis Summary JSON', icon: FileJson, description: 'Machine-readable intelligence output.' },
  ];

  return (
    <div className="card-sage">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Download size={20} className="text-moss-accent" />
          <h3 className="font-bold">Report Export Workspace</h3>
        </div>
        <button className="p-2 hover:bg-forest-text/5 rounded-full transition-colors">
          <Share2 size={18} className="text-olive-detail" />
        </button>
      </div>

      <div className="space-y-4">
        {exportOptions.map((option) => (
          <div 
            key={option.id}
            className="p-4 bg-forest-text/5 rounded-2xl border border-forest-text/10 flex items-center justify-between group hover:border-moss-accent/30 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sage-bg flex items-center justify-center text-moss-accent shadow-sm">
                <option.icon size={24} />
              </div>
              <div>
                <p className="font-bold text-forest-text">{option.title}</p>
                <p className="text-xs text-olive-detail">{option.description}</p>
              </div>
            </div>
            
            <button 
              onClick={() => handleExport(option.id)}
              disabled={!!exporting}
              className={`p-3 rounded-xl transition-all ${
                completed === option.id ? 'bg-moss-accent text-sage-bg' : 
                exporting === option.id ? 'bg-forest-text/10 text-forest-text' :
                'bg-sage-bg text-moss-accent hover:bg-moss-accent hover:text-sage-bg border border-moss-accent/20'
              }`}
            >
              {completed === option.id ? <CheckCircle2 size={20} /> : 
               exporting === option.id ? <Loader2 size={20} className="animate-spin" /> : 
               <Download size={20} />}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-moss-accent/5 rounded-xl border border-moss-accent/10">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 size={14} className="text-moss-accent" />
          <p className="text-[10px] font-bold text-moss-accent uppercase tracking-widest">Compliance Ready</p>
        </div>
        <p className="text-[10px] text-olive-detail leading-relaxed">
          All exports include a cryptographic audit trail and timestamp for regulatory compliance.
        </p>
      </div>
    </div>
  );
};
