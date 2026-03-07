import React from 'react';
import { motion } from 'motion/react';
import { Upload, Play, CheckCircle2, Gavel, User, Clock } from 'lucide-react';
import { AuditEvent } from '../../types';

interface AuditLogTimelineProps {
  events: AuditEvent[];
}

export const AuditLogTimeline: React.FC<AuditLogTimelineProps> = ({ events }) => {
  const getIcon = (type: AuditEvent['type']) => {
    switch (type) {
      case 'upload': return <Upload size={16} />;
      case 'analysis_start': return <Play size={16} />;
      case 'analysis_complete': return <CheckCircle2 size={16} />;
      case 'decision': return <Gavel size={16} />;
      default: return <Clock size={16} />;
    }
  };

  const getColor = (type: AuditEvent['type']) => {
    switch (type) {
      case 'upload': return 'bg-moss-accent/20 text-moss-accent';
      case 'analysis_start': return 'bg-forest-text/10 text-forest-text';
      case 'analysis_complete': return 'bg-moss-accent text-sage-bg';
      case 'decision': return 'bg-forest-text text-sage-bg';
      default: return 'bg-olive-detail/10 text-olive-detail';
    }
  };

  return (
    <div className="card-sage">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Clock size={20} className="text-moss-accent" />
          <h3 className="font-bold">System Audit Log</h3>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-olive-detail">Real-time History</span>
      </div>

      <div className="space-y-6 relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-forest-text/10" />
        
        {events.map((event, index) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative flex gap-4"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 shrink-0 ${getColor(event.type)}`}>
              {getIcon(event.type)}
            </div>
            
            <div className="flex-1 pt-1">
              <div className="flex items-center justify-between mb-1">
                <p className="font-bold text-sm text-forest-text capitalize">
                  {event.type.replace('_', ' ')}
                </p>
                <span className="text-[10px] text-olive-detail font-mono">
                  {new Date(event.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-xs text-olive-detail mb-2">{event.details}</p>
              <div className="flex items-center gap-1 text-[10px] font-bold text-forest-text/60 uppercase tracking-tighter">
                <User size={10} />
                <span>{event.user}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-2 text-xs font-bold text-moss-accent hover:bg-forest-text/5 rounded-lg transition-colors border border-moss-accent/20">
        View Full Audit History
      </button>
    </div>
  );
};
