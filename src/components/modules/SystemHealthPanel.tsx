import React from 'react';
import { Activity, Server, Database, Clock, ShieldCheck } from 'lucide-react';

export const SystemHealthPanel: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="card-sage flex items-center gap-4">
        <div className="w-12 h-12 bg-forest-text/5 rounded-xl flex items-center justify-center text-forest-text">
          <Server size={24} />
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-olive-detail">Modules Running</p>
          <p className="text-xl font-bold">10 / 10</p>
        </div>
      </div>
      
      <div className="card-sage flex items-center gap-4">
        <div className="w-12 h-12 bg-forest-text/5 rounded-xl flex items-center justify-center text-forest-text">
          <Clock size={24} />
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-olive-detail">Avg. Analysis Time</p>
          <p className="text-xl font-bold">4.2m</p>
        </div>
      </div>
      
      <div className="card-sage flex items-center gap-4">
        <div className="w-12 h-12 bg-forest-text/5 rounded-xl flex items-center justify-center text-forest-text">
          <Database size={24} />
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-olive-detail">Data Connectors</p>
          <p className="text-xl font-bold">7 Active</p>
        </div>
      </div>
      
      <div className="card-sage flex items-center gap-4">
        <div className="w-12 h-12 bg-moss-accent/10 rounded-xl flex items-center justify-center text-moss-accent">
          <ShieldCheck size={24} />
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-olive-detail">Model Integrity</p>
          <p className="text-xl font-bold">99.9%</p>
        </div>
      </div>
    </div>
  );
};
