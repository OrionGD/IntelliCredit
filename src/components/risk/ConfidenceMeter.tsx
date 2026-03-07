import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Info } from 'lucide-react';

interface ConfidenceMeterProps {
  confidence: number;
  label?: string;
}

export const ConfidenceMeter: React.FC<ConfidenceMeterProps> = ({ confidence, label = "AI Prediction Confidence" }) => {
  const getConfidenceLevel = (score: number) => {
    if (score >= 90) return { label: 'High', color: 'text-moss-accent', bg: 'bg-moss-accent/10' };
    if (score >= 70) return { label: 'Medium', color: 'text-forest-text', bg: 'bg-forest-text/10' };
    return { label: 'Low', color: 'text-red-600', bg: 'bg-red-600/10' };
  };

  const level = getConfidenceLevel(confidence);

  return (
    <div className="card-sage">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <ShieldCheck size={20} className="text-moss-accent" />
          <h3 className="font-bold">{label}</h3>
        </div>
        <button className="p-1 hover:bg-forest-text/5 rounded"><Info size={16} className="text-olive-detail" /></button>
      </div>

      <div className="flex flex-col items-center justify-center py-6">
        <div className="relative w-48 h-24 overflow-hidden">
          {/* Gauge Background */}
          <div className="absolute inset-0 w-48 h-48 border-[12px] border-forest-text/5 rounded-full" />
          
          {/* Gauge Progress */}
          <motion.div 
            initial={{ rotate: -90 }}
            animate={{ rotate: -90 + (confidence * 1.8) }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-48 h-48 border-[12px] border-moss-accent rounded-full border-b-transparent border-l-transparent"
            style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 50%)' }}
          />

          <div className="absolute bottom-0 left-0 right-0 text-center">
            <span className="text-4xl font-bold text-forest-text">{confidence}%</span>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <div className={`px-3 py-1 rounded-full ${level.bg} ${level.color} text-xs font-bold uppercase tracking-widest`}>
            {level.label} Confidence
          </div>
          <div className="flex items-center gap-1 text-[10px] font-bold text-olive-detail uppercase tracking-tighter">
            <Zap size={12} />
            <span>94% Data Coverage</span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-[10px] font-bold text-olive-detail uppercase tracking-widest">
          <span>Probability Scale</span>
          <span>94% Accuracy</span>
        </div>
        <div className="h-2 w-full bg-forest-text/5 rounded-full overflow-hidden flex">
          <div className="h-full bg-moss-accent" style={{ width: `${confidence}%` }}></div>
          <div className="h-full bg-forest-text/10" style={{ width: `${100 - confidence}%` }}></div>
        </div>
      </div>
    </div>
  );
};
