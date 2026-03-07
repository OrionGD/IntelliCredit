import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { Info, Network, TrendingUp, Activity, BarChart3, ShieldCheck } from 'lucide-react';
import { RiskFilters } from '../components/risk/RiskFilters';
import { RiskTimeline } from '../components/risk/RiskTimeline';
import { InsightEvidencePanel } from '../components/risk/InsightEvidencePanel';
import { ModelInsightPanel } from '../components/risk/ModelInsightPanel';
import { RiskComparisonPanel } from '../components/risk/RiskComparisonPanel';
import { InsightPriorityPanel } from '../components/risk/InsightPriorityPanel';
import { ScenarioSimulator } from '../components/risk/ScenarioSimulator';
import { ConfidenceMeter } from '../components/risk/ConfidenceMeter';
import { mockComparisonData, mockInsights } from '../data/mockData';
import { useState } from 'react';

const revenueData = [
  { month: 'Jan', revenue: 400, peer: 380 },
  { month: 'Feb', revenue: 450, peer: 400 },
  { month: 'Mar', revenue: 420, peer: 410 },
  { month: 'Apr', revenue: 380, peer: 420 },
  { month: 'May', revenue: 390, peer: 430 },
  { month: 'Jun', revenue: 410, peer: 440 },
];

const cashFlowData = [
  { day: '1', velocity: 65 },
  { day: '5', velocity: 80 },
  { day: '10', velocity: 45 },
  { day: '15', velocity: 90 },
  { day: '20', velocity: 70 },
  { day: '25', velocity: 55 },
  { day: '30', velocity: 85 },
];

const sentimentData = [
  { sector: 'Regulatory', score: 40 },
  { sector: 'Market Demand', score: 85 },
  { sector: 'Raw Materials', score: 60 },
  { sector: 'Labor', score: 75 },
  { sector: 'Export', score: 90 },
];

const radarData = [
  { subject: 'Liquidity', A: 120, B: 110, fullMark: 150 },
  { subject: 'Solvency', A: 98, B: 130, fullMark: 150 },
  { subject: 'Profitability', A: 86, B: 130, fullMark: 150 },
  { subject: 'Efficiency', A: 99, B: 100, fullMark: 150 },
  { subject: 'Growth', A: 85, B: 90, fullMark: 150 },
  { subject: 'Compliance', A: 65, B: 85, fullMark: 150 },
];

export const RiskExplorer: React.FC = () => {
  const [showComparison, setShowComparison] = useState(false);

  const revenueComparisonData = [
    { month: 'Jan', revenueA: 400, revenueB: 380 },
    { month: 'Feb', revenueA: 450, revenueB: 400 },
    { month: 'Mar', revenueA: 420, revenueB: 410 },
    { month: 'Apr', revenueA: 380, revenueB: 420 },
    { month: 'May', revenueA: 390, revenueB: 430 },
    { month: 'Jun', revenueA: 410, revenueB: 440 },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <RiskFilters />
        <button 
          onClick={() => setShowComparison(!showComparison)}
          className="px-4 py-2 bg-forest-text text-sage-bg rounded-xl font-bold text-sm hover:bg-forest-text/90 transition-colors"
        >
          {showComparison ? 'Hide Comparison' : 'Compare Companies'}
        </button>
      </div>
      
      <AnimatePresence>
        {showComparison && (
          <RiskComparisonPanel 
            companyA="Acme Mfg."
            companyB="Industry Peer"
            radarData={mockComparisonData}
            revenueData={revenueComparisonData}
            onClose={() => setShowComparison(false)}
          />
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Financial Radar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-sage"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-moss-accent" />
                <h3 className="font-bold">Financial Stability Radar</h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-forest-text rounded-full"></div>
                  <span>Acme Mfg.</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-moss-accent rounded-full"></div>
                  <span>Industry Avg.</span>
                </div>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0} debounce={100}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#1D412820" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#5F6F50', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                  <Radar
                    name="Acme Mfg."
                    dataKey="A"
                    stroke="#1D4128"
                    fill="#1D4128"
                    fillOpacity={0.4}
                  />
                  <Radar
                    name="Industry Avg."
                    dataKey="B"
                    stroke="#869E2F"
                    fill="#869E2F"
                    fillOpacity={0.2}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-xs text-olive-detail text-center leading-relaxed max-w-2xl mx-auto">
              Acme Manufacturing shows superior liquidity and efficiency compared to the industry average, but lags in solvency and compliance metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Revenue Trend */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-sage"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp size={20} className="text-moss-accent" />
                  <h3 className="font-bold">Revenue Trend</h3>
                </div>
                <button className="p-1 hover:bg-forest-text/5 rounded"><Info size={16} className="text-olive-detail" /></button>
              </div>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0} debounce={100}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1D412810" vertical={false} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#5F6F50', fontSize: 10 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#5F6F50', fontSize: 10 }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#E5E9DE', border: '1px solid #1D412820', borderRadius: '8px' }}
                      itemStyle={{ color: '#1D4128' }}
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#1D4128" strokeWidth={3} dot={{ r: 4, fill: '#1D4128' }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="peer" stroke="#869E2F" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Cash Flow Velocity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card-sage"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Activity size={20} className="text-moss-accent" />
                  <h3 className="font-bold">Cash Flow Velocity</h3>
                </div>
                <button className="p-1 hover:bg-forest-text/5 rounded"><Info size={16} className="text-olive-detail" /></button>
              </div>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0} debounce={100}>
                  <AreaChart data={cashFlowData}>
                    <defs>
                      <linearGradient id="colorVelocity" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1D4128" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#1D4128" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1D412810" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#5F6F50', fontSize: 10 }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#5F6F50', fontSize: 10 }} />
                    <Tooltip />
                    <Area type="monotone" dataKey="velocity" stroke="#1D4128" fillOpacity={1} fill="url(#colorVelocity)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          <RiskTimeline />
          
          <InsightPriorityPanel 
            insights={mockInsights} 
            onInsightClick={(targetId) => {
              const element = document.getElementById(targetId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.classList.add('ring-2', 'ring-moss-accent', 'ring-offset-4', 'rounded-xl');
                setTimeout(() => element.classList.remove('ring-2', 'ring-moss-accent', 'ring-offset-4'), 3000);
              }
            }} 
          />
        </div>

        <div className="space-y-8">
          <ConfidenceMeter confidence={94} />
          <ScenarioSimulator initialScore={82} />
          
          {/* Sector Sentiment */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card-sage"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BarChart3 size={20} className="text-moss-accent" />
                <h3 className="font-bold text-sm">Sector Sentiment</h3>
              </div>
            </div>
            <div id="sentiment-chart" className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0} debounce={100}>
                <BarChart data={sentimentData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#1D412810" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="sector" type="category" axisLine={false} tickLine={false} tick={{ fill: '#5F6F50', fontSize: 10 }} width={80} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#869E2F" radius={[0, 4, 4, 0]} barSize={16} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <InsightEvidencePanel 
              evidence={{
                source: "Business News Digest",
                reference: "Sector Report Q1 2026",
                confidence: 88,
                model: "FinBERT Sentiment Engine"
              }} 
            />
          </motion.div>

          <ModelInsightPanel 
            modelName="XGBoost Risk Predictor"
            confidence={94}
            features={["Revenue Growth", "DSCR", "Sector Sentiment", "GST Compliance"]}
          />
        </div>
      </div>
    </div>
  );
};
