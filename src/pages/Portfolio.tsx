import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter, 
  Plus, 
  Building2, 
  ChevronRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  MoreVertical
} from 'lucide-react';
import { Application, cn } from '../types';
import { PortfolioAnalytics } from '../components/portfolio/PortfolioAnalytics';

const applications: Application[] = [
  {
    id: '1',
    companyName: 'Acme Manufacturing Ltd.',
    industry: 'Industrial Goods',
    location: 'Mumbai, India',
    amount: 2500000,
    status: 'ready',
    riskScore: 82,
    lastUpdated: '2h ago',
    exposure: 2500000
  },
  {
    id: '2',
    companyName: 'Global Tech Solutions',
    industry: 'Software',
    location: 'Bangalore, India',
    amount: 1200000,
    status: 'analyzing',
    riskScore: 0,
    lastUpdated: 'Just now',
    exposure: 1200000
  },
  {
    id: '3',
    companyName: 'Green Energy Corp',
    industry: 'Renewables',
    location: 'Delhi, India',
    amount: 5000000,
    status: 'approved',
    riskScore: 91,
    lastUpdated: '1d ago',
    exposure: 5000000
  },
  {
    id: '4',
    companyName: 'Retail Kings Pvt Ltd',
    industry: 'Retail',
    location: 'Chennai, India',
    amount: 800000,
    status: 'rejected',
    riskScore: 45,
    lastUpdated: '3d ago',
    exposure: 800000
  }
];

interface PortfolioProps {
  onSelectApplication: (id: string) => void;
  onNewApplication: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectApplication, onNewApplication }) => {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Loan Portfolio</h1>
          <p className="text-olive-detail">Manage and monitor corporate loan applications.</p>
        </div>
        <button 
          onClick={onNewApplication}
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={20} />
          New Application
        </button>
      </div>

      <PortfolioAnalytics />

      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[300px] relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-olive-detail" size={20} />
          <input 
            type="text" 
            placeholder="Search by company name, industry or location..." 
            className="w-full bg-white/40 border border-forest-text/10 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-moss-accent/20 outline-none"
          />
        </div>
        <button className="btn-secondary flex items-center gap-2 py-3">
          <Filter size={20} />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {applications.map((app, i) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => app.status !== 'analyzing' && onSelectApplication(app.id)}
            className={cn(
              "card-sage flex flex-col md:flex-row items-start md:items-center gap-6 cursor-pointer group",
              app.status === 'analyzing' && "opacity-70 cursor-wait"
            )}
          >
            <div className="w-12 h-12 bg-forest-text/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-forest-text group-hover:text-sage-bg transition-colors">
              <Building2 size={24} />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold truncate">{app.companyName}</h3>
              <div className="flex flex-wrap gap-4 text-xs text-olive-detail mt-1">
                <span>{app.industry}</span>
                <span>•</span>
                <span>{app.location}</span>
                <span>•</span>
                <span className="font-bold text-forest-text">${(app.amount / 1000000).toFixed(1)}M</span>
              </div>
            </div>

            <div className="flex items-center gap-8 w-full md:w-auto">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] uppercase tracking-widest font-bold text-olive-detail mb-1">Risk Score</p>
                <p className={cn(
                  "text-xl font-bold",
                  app.riskScore === 0 ? "text-olive-detail/30" :
                  app.riskScore > 80 ? "text-forest-text" : 
                  app.riskScore > 60 ? "text-moss-accent" : "text-orange-800"
                )}>
                  {app.riskScore === 0 ? '--' : app.riskScore}
                </p>
              </div>

              <div className="flex-1 md:flex-none">
                <div className={cn(
                  "px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit",
                  app.status === 'ready' ? "bg-forest-text text-sage-bg" :
                  app.status === 'analyzing' ? "bg-moss-accent/10 text-moss-accent" :
                  app.status === 'approved' ? "bg-forest-text/10 text-forest-text" :
                  app.status === 'rejected' ? "bg-orange-800/10 text-orange-800" :
                  "bg-olive-detail/10 text-olive-detail"
                )}>
                  {app.status === 'analyzing' ? <Clock size={12} className="animate-spin" /> :
                   app.status === 'ready' ? <CheckCircle2 size={12} /> :
                   app.status === 'approved' ? <CheckCircle2 size={12} /> :
                   <AlertCircle size={12} />}
                  {app.status}
                </div>
                <p className="text-[10px] text-olive-detail mt-1 text-center md:text-left">Updated {app.lastUpdated}</p>
              </div>

              <button className="p-2 hover:bg-forest-text/5 rounded-lg">
                <MoreVertical size={20} className="text-olive-detail" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
