import React from 'react';
import { motion } from 'motion/react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import { ShieldCheck, TrendingUp, Activity, BarChart3, X } from 'lucide-react';
import { ComparisonData } from '../../types';

interface RiskComparisonPanelProps {
  companyA: string;
  companyB: string;
  radarData: ComparisonData[];
  revenueData: any[];
  onClose: () => void;
}

export const RiskComparisonPanel: React.FC<RiskComparisonPanelProps> = ({ 
  companyA, 
  companyB, 
  radarData, 
  revenueData,
  onClose
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card-sage lg:col-span-3"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <ShieldCheck size={24} className="text-moss-accent" />
          <h2 className="text-xl font-bold text-forest-text">Risk Comparison Workspace</h2>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-forest-text/5 rounded-full transition-colors">
          <X size={20} className="text-olive-detail" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Radar Comparison */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold flex items-center gap-2">
              <Activity size={18} className="text-moss-accent" />
              Financial Stability Radar
            </h3>
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 bg-forest-text rounded-full"></div>
                <span>{companyA}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 bg-moss-accent rounded-full"></div>
                <span>{companyB}</span>
              </div>
            </div>
          </div>
          
          <div className="h-80 w-full bg-forest-text/5 rounded-2xl p-4">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0} debounce={100}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#1D412820" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#5F6F50', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                  name={companyA}
                  dataKey="companyA"
                  stroke="#1D4128"
                  fill="#1D4128"
                  fillOpacity={0.4}
                />
                <Radar
                  name={companyB}
                  dataKey="companyB"
                  stroke="#869E2F"
                  fill="#869E2F"
                  fillOpacity={0.2}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Trend Comparison */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold flex items-center gap-2">
              <TrendingUp size={18} className="text-moss-accent" />
              Revenue Trend Comparison
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-widest text-olive-detail">Last 6 Months</span>
          </div>

          <div className="h-80 w-full bg-forest-text/5 rounded-2xl p-4">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0} debounce={100}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1D412810" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#5F6F50', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#5F6F50', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#E5E9DE', border: '1px solid #1D412820', borderRadius: '8px' }}
                  itemStyle={{ color: '#1D4128' }}
                />
                <Line type="monotone" name={companyA} dataKey="revenueA" stroke="#1D4128" strokeWidth={3} dot={{ r: 4, fill: '#1D4128' }} activeDot={{ r: 6 }} />
                <Line type="monotone" name={companyB} dataKey="revenueB" stroke="#869E2F" strokeWidth={3} dot={{ r: 4, fill: '#869E2F' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-forest-text/10 pt-8">
        <div className="p-6 bg-forest-text/5 rounded-2xl">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 size={18} className="text-moss-accent" />
            <h4 className="font-bold text-sm">Sentiment & Market Risk</h4>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-olive-detail">Regulatory Sentiment</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-forest-text">40% vs 85%</span>
                <div className="w-24 h-1.5 bg-forest-text/10 rounded-full overflow-hidden">
                  <div className="h-full bg-moss-accent" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-olive-detail">Market Demand Score</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-forest-text">85% vs 70%</span>
                <div className="w-24 h-1.5 bg-forest-text/10 rounded-full overflow-hidden">
                  <div className="h-full bg-forest-text" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-forest-text/5 rounded-2xl">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck size={18} className="text-moss-accent" />
            <h4 className="font-bold text-sm">AI Risk Verdict</h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-sage-bg rounded-xl border border-forest-text/10">
              <p className="text-[10px] font-bold text-olive-detail uppercase tracking-widest mb-1">{companyA}</p>
              <p className="text-xl font-bold text-forest-text">82/100</p>
              <p className="text-[10px] font-bold text-moss-accent uppercase">Stable</p>
            </div>
            <div className="text-center p-3 bg-sage-bg rounded-xl border border-forest-text/10">
              <p className="text-[10px] font-bold text-olive-detail uppercase tracking-widest mb-1">{companyB}</p>
              <p className="text-xl font-bold text-forest-text">91/100</p>
              <p className="text-[10px] font-bold text-moss-accent uppercase">Superior</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
