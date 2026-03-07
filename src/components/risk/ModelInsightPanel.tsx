import React from 'react';
import { BrainCircuit, Cpu, Zap, Activity } from 'lucide-react';
import { cn } from '../../types';

interface ModelInsightPanelProps {
  modelName: string;
  confidence: number;
  features: string[];
}

export const ModelInsightPanel: React.FC<ModelInsightPanelProps> = ({ modelName, confidence, features }) => {
  return (
    <div className="card-sage bg-forest-text text-sage-bg border-none p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
          <Cpu size={20} />
        </div>
        <div>
          <h4 className="font-bold text-sm">{modelName}</h4>
          <p className="text-[10px] opacity-70 uppercase tracking-widest">Model Transparency</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] uppercase font-bold opacity-70">Model Confidence</span>
            <span className="text-sm font-bold">{confidence}%</span>
          </div>
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="bg-moss-accent h-full rounded-full" style={{ width: `${confidence}%` }} />
          </div>
        </div>
        
        <div>
          <p className="text-[10px] uppercase font-bold opacity-70 mb-3">Key Input Features</p>
          <div className="flex flex-wrap gap-2">
            {features.map((f, i) => (
              <span key={i} className="px-2 py-1 bg-white/10 rounded-lg text-[10px] font-medium">
                {f}
              </span>
            ))}
          </div>
        </div>
        
        <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-[10px] opacity-70">
          <Activity size={12} />
          <span>Last retrained: 12 days ago</span>
        </div>
      </div>
    </div>
  );
};
