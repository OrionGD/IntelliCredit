import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Info, Zap, ArrowRight } from 'lucide-react';
import { Insight } from '../../types';

interface InsightPriorityPanelProps {
  insights: Insight[];
  onInsightClick: (targetId: string) => void;
}

export const InsightPriorityPanel: React.FC<InsightPriorityPanelProps> = ({ insights, onInsightClick }) => {
  const getPriorityIcon = (priority: Insight['priority']) => {
    switch (priority) {
      case 'critical': return <AlertCircle size={16} className="text-red-600" />;
      case 'important': return <Zap size={16} className="text-moss-accent" />;
      case 'informational': return <Info size={16} className="text-olive-detail" />;
      default: return null;
    }
  };

  const getPriorityStyles = (priority: Insight['priority']) => {
    switch (priority) {
      case 'critical': return 'border-red-600/20 bg-red-600/5';
      case 'important': return 'border-moss-accent/20 bg-moss-accent/5';
      case 'informational': return 'border-olive-detail/20 bg-olive-detail/5';
      default: return 'border-forest-text/10 bg-forest-text/5';
    }
  };

  const getPriorityLabel = (priority: Insight['priority']) => {
    switch (priority) {
      case 'critical': return 'Critical Risk';
      case 'important': return 'Important Signal';
      case 'informational': return 'Informational';
      default: return '';
    }
  };

  return (
    <div className="card-sage">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Zap size={20} className="text-moss-accent" />
          <h3 className="font-bold">AI Insight Priority</h3>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-olive-detail">Categorized by Impact</span>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <motion.button
            key={insight.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onInsightClick(insight.targetId)}
            className={`w-full text-left p-4 rounded-xl border transition-all hover:shadow-md group ${getPriorityStyles(insight.priority)}`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">{getPriorityIcon(insight.priority)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${
                    insight.priority === 'critical' ? 'text-red-600' : 
                    insight.priority === 'important' ? 'text-moss-accent' : 'text-olive-detail'
                  }`}>
                    {getPriorityLabel(insight.priority)}
                  </span>
                  <ArrowRight size={14} className="text-olive-detail opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm font-medium text-forest-text leading-relaxed">
                  {insight.text}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-olive-detail uppercase bg-forest-text/5 px-2 py-0.5 rounded">
                    {insight.category}
                  </span>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
