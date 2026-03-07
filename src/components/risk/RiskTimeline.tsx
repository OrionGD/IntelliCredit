import React from 'react';
import { motion } from 'motion/react';
import { Clock, AlertCircle, CheckCircle2, Info, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { TimelineEvent, cn } from '../../types';
import { mockTimelineEvents } from '../../data/mockData';

export const RiskTimeline: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2">
        <Clock size={20} className="text-moss-accent" />
        Risk Intelligence Timeline
      </h2>
      
      <div className="relative pl-8 space-y-8 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-forest-text/10">
        {mockTimelineEvents.map((event, i) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <div className={cn(
              "absolute -left-[25px] top-1 w-5 h-5 rounded-full border-4 border-sage-bg flex items-center justify-center",
              event.type === 'negative' ? "bg-orange-800" :
              event.type === 'positive' ? "bg-forest-text" :
              "bg-moss-accent"
            )}>
              {event.type === 'negative' ? <ArrowDownRight size={10} className="text-white" /> :
               event.type === 'positive' ? <ArrowUpRight size={10} className="text-white" /> :
               <div className="w-1 h-1 bg-white rounded-full" />}
            </div>
            
            <div className="card-sage py-4">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-olive-detail">{event.date}</span>
                <span className="text-[10px] font-bold text-forest-text bg-forest-text/5 px-2 py-0.5 rounded-full">{event.source}</span>
              </div>
              <h4 className="font-bold text-sm mb-1">{event.title}</h4>
              <p className="text-xs text-olive-detail leading-relaxed">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
