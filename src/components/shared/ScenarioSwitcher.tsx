import React from 'react';
import { Zap, ShieldCheck, AlertCircle, TrendingUp } from 'lucide-react';
import { cn } from '../../types';

const scenarios = [
  { id: 'healthy', label: 'Healthy Company', icon: ShieldCheck, color: 'text-forest-text' },
  { id: 'growth', label: 'High Growth', icon: TrendingUp, color: 'text-moss-accent' },
  { id: 'stressed', label: 'Financial Stress', icon: AlertCircle, color: 'text-orange-800' },
  { id: 'fraud', label: 'Fraud Risk', icon: Zap, color: 'text-orange-900' },
];

export const ScenarioSwitcher: React.FC = () => {
  return (
    <div className="fixed bottom-8 left-8 z-[100] group">
      <div className="bg-forest-text text-sage-bg p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10">
        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
          <Zap size={20} />
        </div>
        <div className="hidden group-hover:block">
          <p className="text-[10px] uppercase font-bold opacity-70 mb-2">Demo Scenario Switcher</p>
          <div className="flex gap-2">
            {scenarios.map((s) => (
              <button 
                key={s.id}
                title={s.label}
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all"
              >
                <s.icon size={16} className={s.color} />
              </button>
            ))}
          </div>
        </div>
        <div className="group-hover:hidden">
          <p className="text-sm font-bold">Demo Mode</p>
          <p className="text-[10px] opacity-70">Hover to switch</p>
        </div>
      </div>
    </div>
  );
};
