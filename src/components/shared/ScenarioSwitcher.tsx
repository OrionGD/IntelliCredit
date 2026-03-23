import React from 'react';
import { Zap, ShieldCheck, AlertCircle, TrendingUp } from 'lucide-react';
import { cn } from '../../types';
import { useFeatures } from '../../contexts/FeatureContext';
import { withBackendCheck } from '../../lib/axion';

const scenarios = [
  { id: 'healthy', label: 'Healthy Company', icon: ShieldCheck, color: 'text-forest-text' },
  { id: 'growth', label: 'High Growth', icon: TrendingUp, color: 'text-moss-accent' },
  { id: 'stressed', label: 'Financial Stress', icon: AlertCircle, color: 'text-orange-800' },
  { id: 'fraud', label: 'Fraud Risk', icon: Zap, color: 'text-orange-900' },
];

export const ScenarioSwitcher: React.FC = () => {
  const { isBackendOffline, checkFeature } = useFeatures();

  // Reactive UI check
  const isEnabled = !isBackendOffline && checkFeature('Demo Scenario Switcher');

  // Wrapped function execution check logged to console if unavailable
  const handleScenarioChange = withBackendCheck('Demo Scenario Switcher', (scenarioId: string) => {
    console.log('Switching scenario to:', scenarioId);
    // Add real backend update logic here later
  });

  return (
    <div className={`fixed bottom-8 left-8 z-[100] group ${!isEnabled ? 'opacity-80' : ''}`}>
      <div className={`p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 transition-colors ${!isEnabled ? 'bg-[#5F6F50] text-[#FFFFFF]' : 'bg-forest-text text-sage-bg'}`}>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${!isEnabled ? 'bg-[#869E2F]/30' : 'bg-white/10'}`}>
          <Zap size={20} className={!isEnabled ? 'opacity-50' : ''} />
        </div>
        <div className="hidden group-hover:block">
          <p className="text-[10px] uppercase font-bold opacity-70 mb-2">Demo Scenario Switcher</p>
          <div className="flex gap-2">
            {scenarios.map((s) => (
              <button
                key={s.id}
                title={s.label}
                onClick={() => handleScenarioChange(s.id)}
                disabled={!isEnabled}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${!isEnabled
                    ? 'bg-[#869E2F]/50 cursor-not-allowed text-white/50 grayscale'
                    : 'bg-white/10 hover:bg-white/20'
                  }`}
              >
                <s.icon size={16} className={!isEnabled ? 'text-white' : s.color} />
              </button>
            ))}
          </div>
        </div>
        <div className="group-hover:hidden">
          <p className="text-sm font-bold">Demo Mode</p>
          <p className="text-[10px] opacity-70">
            {isEnabled ? 'Hover to switch' : 'Unavailable'}
          </p>
        </div>
      </div>
    </div>
  );
};
