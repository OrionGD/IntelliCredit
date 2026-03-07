import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart, 
  Pie, 
  Cell,
  FunnelChart,
  Funnel,
  LabelList
} from 'recharts';
import { motion } from 'motion/react';
import { TrendingUp, ShieldAlert, CheckCircle2, PieChart as PieChartIcon, BarChart3 } from 'lucide-react';
import { mockSectorExposure, mockRiskDistribution } from '../../data/mockData';

const COLORS = ['#1D4128', '#869E2F', '#5F6F50', '#E5E9DE'];

const funnelData = [
  { value: 100, name: 'Applications', fill: '#1D4128' },
  { value: 80, name: 'Analyzed', fill: '#869E2F' },
  { value: 50, name: 'Credit Ready', fill: '#5F6F50' },
  { value: 30, name: 'Approved', fill: '#1D4128' },
];

export const PortfolioAnalytics: React.FC = () => {
  return (
    <div className="space-y-6 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card-sage flex items-center gap-4">
          <div className="w-12 h-12 bg-forest-text/5 rounded-xl flex items-center justify-center text-forest-text">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-olive-detail">Total Exposure</p>
            <p className="text-xl font-bold">$12.4M</p>
          </div>
        </div>
        <div className="card-sage flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-800/5 rounded-xl flex items-center justify-center text-orange-800">
            <ShieldAlert size={24} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-olive-detail">High Risk Loans</p>
            <p className="text-xl font-bold">12</p>
          </div>
        </div>
        <div className="card-sage flex items-center gap-4">
          <div className="w-12 h-12 bg-forest-text/5 rounded-xl flex items-center justify-center text-forest-text">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-olive-detail">Approval Rate</p>
            <p className="text-xl font-bold">68%</p>
          </div>
        </div>
        <div className="card-sage flex items-center gap-4">
          <div className="w-12 h-12 bg-moss-accent/10 rounded-xl flex items-center justify-center text-moss-accent">
            <BarChart3 size={24} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-olive-detail">Avg. Risk Score</p>
            <p className="text-xl font-bold">74</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card-sage lg:col-span-1">
          <h3 className="text-sm font-bold mb-6 flex items-center gap-2">
            <PieChartIcon size={16} className="text-moss-accent" />
            Risk Distribution
          </h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0} debounce={100}>
              <PieChart>
                <Pie
                  data={mockRiskDistribution}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {mockRiskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex justify-center gap-4">
            {mockRiskDistribution.map((entry, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                <span className="text-[10px] font-bold text-olive-detail">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-sage lg:col-span-1">
          <h3 className="text-sm font-bold mb-6 flex items-center gap-2">
            <BarChart3 size={16} className="text-moss-accent" />
            Sector Concentration
          </h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0} debounce={100}>
              <BarChart data={mockSectorExposure}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1D412810" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#5F6F50', fontSize: 10 }} />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="value" fill="#1D4128" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-sage lg:col-span-1">
          <h3 className="text-sm font-bold mb-6 flex items-center gap-2">
            <TrendingUp size={16} className="text-moss-accent" />
            Approval Pipeline
          </h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0} debounce={100}>
              <FunnelChart>
                <Tooltip />
                <Funnel
                  dataKey="value"
                  data={funnelData}
                  isAnimationActive
                >
                  <LabelList position="right" fill="#1D4128" stroke="none" dataKey="name" />
                </Funnel>
              </FunnelChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
