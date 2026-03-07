import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  TrendingDown, 
  Truck, 
  Globe, 
  RefreshCw, 
  AlertTriangle, 
  Percent, 
  Users,
  RotateCcw,
  ChevronRight
} from 'lucide-react';

interface ScenarioSimulatorProps {
  initialScore: number;
}

interface Scenario {
  id: string;
  name: string;
  icon: React.ReactNode;
  weight: number;
  unit: string;
  max: number;
  description: string;
}

const SCENARIOS: Scenario[] = [
  { 
    id: 'revenue', 
    name: 'Revenue Drop', 
    icon: <TrendingDown size={16} />, 
    weight: 0.5, 
    unit: '%', 
    max: 100,
    description: 'Impact of decreased sales volume or pricing pressure.'
  },
  { 
    id: 'supplier', 
    name: 'Supply Chain Disruption', 
    icon: <Truck size={16} />, 
    weight: 0.35, 
    unit: ' Level', 
    max: 10,
    description: 'Delays or failures in raw material procurement.'
  },
  { 
    id: 'market', 
    name: 'Market Volatility', 
    icon: <Globe size={16} />, 
    weight: 0.25, 
    unit: '%', 
    max: 100,
    description: 'Broader economic downturn or sector-specific instability.'
  },
  { 
    id: 'rates', 
    name: 'Interest Rate Hike', 
    icon: <Percent size={16} />, 
    weight: 0.15, 
    unit: ' bps', 
    max: 500,
    description: 'Increased cost of debt servicing and capital.'
  },
  { 
    id: 'labor', 
    name: 'Labor Shortage', 
    icon: <Users size={16} />, 
    weight: 0.2, 
    unit: '%', 
    max: 50,
    description: 'Impact of workforce unavailability on production capacity.'
  },
];

export const ScenarioSimulator: React.FC<ScenarioSimulatorProps> = ({ initialScore }) => {
  const [values, setValues] = useState<Record<string, number>>({
    revenue: 0,
    supplier: 0,
    market: 0,
    rates: 0,
    labor: 0,
  });
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeScenario, setActiveScenario] = useState<string | null>(null);

  const calculateNewScore = useCallback(() => {
    let penalty = 0;
    SCENARIOS.forEach(s => {
      const val = values[s.id];
      // Normalize values for weight calculation
      const normalizedVal = val / s.max;
      penalty += (normalizedVal * 100 * s.weight);
    });
    return Math.max(0, Math.round(initialScore - penalty));
  }, [values, initialScore]);

  const newScore = calculateNewScore();
  const scoreDiff = initialScore - newScore;

  const handleReset = () => {
    setValues({
      revenue: 0,
      supplier: 0,
      market: 0,
      rates: 0,
      labor: 0,
    });
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 600);
  };

  const updateValue = (id: string, val: number) => {
    setValues(prev => ({ ...prev, [id]: val }));
    if (!isSimulating) {
      setIsSimulating(true);
      setTimeout(() => setIsSimulating(false), 400);
    }
  };

  return (
    <div className="card-sage overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-moss-accent/10 rounded-lg flex items-center justify-center text-moss-accent">
            <Zap size={18} />
          </div>
          <div>
            <h3 className="font-bold text-forest-text">Scenario Simulator</h3>
            <p className="text-[10px] text-olive-detail uppercase font-bold tracking-tighter">Stress Test AI Model</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleReset}
            className="p-2 hover:bg-forest-text/5 rounded-lg text-olive-detail transition-colors"
            title="Reset Scenarios"
          >
            <RotateCcw size={16} />
          </button>
          <div className={`p-1 rounded-full ${isSimulating ? 'bg-moss-accent/20' : 'bg-transparent'}`}>
            <RefreshCw size={16} className={`text-moss-accent ${isSimulating ? 'animate-spin' : ''}`} />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {SCENARIOS.map((scenario) => (
          <div 
            key={scenario.id} 
            className="group"
            onMouseEnter={() => setActiveScenario(scenario.id)}
            onMouseLeave={() => setActiveScenario(null)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-olive-detail group-hover:text-moss-accent transition-colors">
                  {scenario.icon}
                </span>
                <span className="text-xs font-bold text-forest-text">{scenario.name}</span>
              </div>
              <span className="text-xs font-mono font-bold text-moss-accent">
                {values[scenario.id]}{scenario.unit}
              </span>
            </div>
            <input 
              type="range" 
              min="0" 
              max={scenario.max} 
              step={scenario.max > 10 ? 1 : 0.1}
              value={values[scenario.id]} 
              onChange={(e) => updateValue(scenario.id, Number(e.target.value))}
              aria-label={scenario.name}
              className="w-full h-1.5 bg-forest-text/10 rounded-lg appearance-none cursor-pointer accent-moss-accent hover:accent-forest-text transition-all"
            />
            <AnimatePresence>
              {activeScenario === scenario.id && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-[10px] text-olive-detail mt-2 italic leading-tight"
                >
                  {scenario.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-10 relative">
        <div className="absolute inset-0 bg-forest-text/5 rounded-2xl -m-4 pointer-events-none" />
        <div className="relative p-6 rounded-2xl border border-forest-text/10 bg-sage-bg/50 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-olive-detail uppercase tracking-widest mb-2">Simulated Health Score</p>
              <div className="flex items-baseline gap-2">
                <motion.span 
                  key={newScore}
                  initial={{ scale: 1.1, color: '#ef4444' }}
                  animate={{ scale: 1, color: '#1D4128' }}
                  className="text-5xl font-bold text-forest-text tabular-nums"
                >
                  {newScore}
                </motion.span>
                <span className="text-sm font-bold text-olive-detail">/ 100</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-olive-detail uppercase tracking-widest mb-2">Risk Impact</p>
              <div className={`flex items-center justify-end gap-1 font-bold ${scoreDiff > 0 ? 'text-red-600' : 'text-moss-accent'}`}>
                {scoreDiff > 0 ? <TrendingDown size={18} /> : <ChevronRight size={18} />}
                <span className="text-lg tabular-nums">-{scoreDiff} pts</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 space-y-2">
            <div className="h-1.5 w-full bg-forest-text/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: `${initialScore}%` }}
                animate={{ width: `${newScore}%` }}
                className={`h-full transition-colors duration-500 ${
                  newScore > 70 ? 'bg-moss-accent' : newScore > 40 ? 'bg-yellow-600' : 'bg-red-600'
                }`}
              />
            </div>
            <div className="flex justify-between text-[8px] font-bold text-olive-detail uppercase tracking-tighter">
              <span>Critical</span>
              <span>Baseline: {initialScore}</span>
              <span>Optimal</span>
            </div>
          </div>

          {scoreDiff > 25 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 flex items-center gap-3 p-3 bg-red-600/10 border border-red-600/20 rounded-xl"
            >
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white shrink-0 animate-pulse">
                <AlertTriangle size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">High Risk Warning</p>
                <p className="text-[9px] text-red-600/80 leading-tight">Current parameters indicate a high probability of default within 12 months.</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-moss-accent" />
          <span className="text-[9px] font-bold text-olive-detail uppercase">Safe</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-yellow-600" />
          <span className="text-[9px] font-bold text-olive-detail uppercase">Warning</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-red-600" />
          <span className="text-[9px] font-bold text-olive-detail uppercase">Critical</span>
        </div>
      </div>
    </div>
  );
};
