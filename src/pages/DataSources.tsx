import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Receipt, 
  Building, 
  Scale, 
  Newspaper, 
  CreditCard, 
  ArrowRightLeft,
  Search,
  Database
} from 'lucide-react';

const sources = [
  { 
    title: "GST Filings", 
    icon: Receipt,
    desc: "What we learn: Real-time sales trends, buyer concentration, and tax compliance patterns."
  },
  { 
    title: "Tax Returns", 
    icon: FileText,
    desc: "What we learn: Multi-year profitability, asset growth, and long-term financial health."
  },
  { 
    title: "Bank Statements", 
    icon: CreditCard,
    desc: "What we learn: Daily cash flow velocity, hidden expenses, and transaction anomalies."
  },
  { 
    title: "Company Filings", 
    icon: Building,
    desc: "What we learn: Ownership structure, management changes, and official annual performance."
  },
  { 
    title: "Legal Records", 
    icon: Scale,
    desc: "What we learn: Active litigations, past legal disputes, and regulatory compliance history."
  },
  { 
    title: "Business News", 
    icon: Newspaper,
    desc: "What we learn: Market sentiment, sector-wide risks, and public mentions of the company."
  },
  { 
    title: "Transaction Data", 
    icon: ArrowRightLeft,
    desc: "What we learn: Payment delays, supplier relationships, and supply chain dependencies."
  }
];

export const DataSources: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Intelligence Sources</h1>
          <p className="text-olive-detail">The data points analyzed by IntelliCredit AI modules.</p>
        </div>
        <div className="flex items-center gap-2 bg-white/40 border border-forest-text/10 rounded-xl px-4 py-2">
          <Database size={18} className="text-olive-detail" />
          <span className="text-sm font-bold">7 Active Connectors</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sources.map((source, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="card-sage group cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-forest-text/5 group-hover:bg-forest-text group-hover:text-sage-bg transition-colors rounded-xl flex items-center justify-center">
                <source.icon size={24} />
              </div>
              <h3 className="text-lg font-bold">{source.title}</h3>
            </div>
            <p className="text-sm text-olive-detail leading-relaxed mb-6">
              {source.desc}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-forest-text/5">
              <span className="text-xs font-bold uppercase tracking-wider text-moss-accent">Connected</span>
              <div className="flex items-center gap-1 text-xs text-olive-detail">
                <Search size={12} />
                <span>Last scan: 2h ago</span>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: sources.length * 0.05 }}
          className="card-sage border-dashed border-2 border-forest-text/20 flex flex-col items-center justify-center text-center p-8 hover:border-moss-accent/50 transition-all"
        >
          <div className="w-12 h-12 bg-forest-text/5 rounded-full flex items-center justify-center mb-4">
            <Database size={24} className="text-olive-detail" />
          </div>
          <h3 className="font-bold mb-2">Add New Source</h3>
          <p className="text-xs text-olive-detail mb-6">Connect custom ERP or proprietary data feeds.</p>
          <button className="text-sm font-bold text-forest-text hover:underline">Request Integration</button>
        </motion.div>
      </div>
    </div>
  );
};
