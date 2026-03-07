import React from 'react';
import { motion } from 'motion/react';
import { Clock, CheckCircle2, AlertTriangle, RefreshCw } from 'lucide-react';

interface DataFreshnessIndicatorProps {
  source: string;
  lastUpdated: string;
  status: 'fresh' | 'stale' | 'updating';
}

export const DataFreshnessIndicator: React.FC<DataFreshnessIndicatorProps> = ({ source, lastUpdated, status }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'fresh': return 'text-moss-accent';
      case 'stale': return 'text-red-600';
      case 'updating': return 'text-forest-text';
      default: return 'text-olive-detail';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'fresh': return <CheckCircle2 size={12} />;
      case 'stale': return <AlertTriangle size={12} />;
      case 'updating': return <RefreshCw size={12} className="animate-spin" />;
      default: return <Clock size={12} />;
    }
  };

  return (
    <div className="flex items-center gap-3 p-2 bg-forest-text/5 rounded-lg border border-forest-text/10 group hover:bg-forest-text/10 transition-colors">
      <div className={`p-1.5 rounded-full bg-sage-bg shadow-sm ${getStatusColor()}`}>
        {getStatusIcon()}
      </div>
      <div>
        <p className="text-[10px] font-bold text-forest-text uppercase tracking-widest leading-none mb-1">{source}</p>
        <div className="flex items-center gap-1 text-[10px] text-olive-detail font-mono">
          <Clock size={10} />
          <span>Last sync: {lastUpdated}</span>
        </div>
      </div>
    </div>
  );
};

export const DataFreshnessGrid: React.FC = () => {
  const sources = [
    { source: 'GST Filings', lastUpdated: '2h ago', status: 'fresh' as const },
    { source: 'MCA Records', lastUpdated: '1d ago', status: 'fresh' as const },
    { source: 'Legal Database', lastUpdated: '5m ago', status: 'updating' as const },
    { source: 'Bank Statements', lastUpdated: '3d ago', status: 'stale' as const },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {sources.map((s, i) => (
        <motion.div
          key={s.source}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <DataFreshnessIndicator {...s} />
        </motion.div>
      ))}
    </div>
  );
};
