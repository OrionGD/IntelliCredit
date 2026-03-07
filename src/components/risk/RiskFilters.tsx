import React from 'react';
import { Calendar, Users, Filter, ChevronDown } from 'lucide-react';
import { cn } from '../../types';

export const RiskFilters: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-8">
      <div className="flex items-center bg-white/40 border border-forest-text/10 rounded-xl px-4 py-2">
        <Calendar size={18} className="text-olive-detail mr-2" />
        <select className="bg-transparent border-none text-sm font-bold focus:ring-0 outline-none cursor-pointer">
          <option>Last 3 Months</option>
          <option>Last 6 Months</option>
          <option>Last 1 Year</option>
          <option>Last 3 Years</option>
        </select>
      </div>
      
      <div className="flex items-center bg-white/40 border border-forest-text/10 rounded-xl px-1 py-1">
        <button className="px-4 py-1.5 rounded-lg text-xs font-bold bg-forest-text text-sage-bg">
          vs Industry
        </button>
        <button className="px-4 py-1.5 rounded-lg text-xs font-bold text-olive-detail hover:bg-forest-text/5">
          vs Competitors
        </button>
      </div>
      
      <button className="btn-secondary flex items-center gap-2 py-2">
        <Filter size={18} />
        Advanced Filters
      </button>
      
      <div className="ml-auto flex items-center gap-2 text-xs text-olive-detail">
        <span>Showing analysis for:</span>
        <span className="font-bold text-forest-text">Acme Manufacturing Ltd.</span>
        <ChevronDown size={14} />
      </div>
    </div>
  );
};
