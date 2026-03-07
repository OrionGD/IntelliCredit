import React, { useState } from 'react';
import { Menu, Bell, Search, CheckCircle2, AlertCircle, Clock, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { mockNotifications } from '../data/mockData';
import { cn } from '../types';

interface NavbarProps {
  onMenuClick: () => void;
  title: string;
  onSearchClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuClick, title, onSearchClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="h-20 border-b border-forest-text/10 bg-sage-bg/80 backdrop-blur-md sticky top-0 z-30 px-6 lg:px-12 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-forest-text/5 rounded-lg"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-lg font-bold lg:text-xl">{title}</h2>
      </div>

      <div className="flex items-center gap-6">
        <div 
          onClick={onSearchClick}
          className="hidden md:flex items-center bg-forest-text/5 rounded-full px-4 py-2 w-64 cursor-pointer hover:bg-forest-text/10 transition-colors"
        >
          <Search size={18} className="text-olive-detail" />
          <span className="text-sm ml-2 text-olive-detail/50">Search (Ctrl+K)</span>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 hover:bg-forest-text/5 rounded-full relative"
          >
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-moss-accent rounded-full border-2 border-sage-bg"></span>
          </button>

          <AnimatePresence>
            {showNotifications && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-4 w-80 bg-white rounded-2xl shadow-2xl border border-forest-text/10 z-50 overflow-hidden"
                >
                  <div className="p-4 border-b border-forest-text/5 flex justify-between items-center bg-forest-text/5">
                    <h3 className="font-bold text-sm">Notifications</h3>
                    <button onClick={() => setShowNotifications(false)} className="p-1 hover:bg-forest-text/10 rounded-lg">
                      <X size={14} />
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {mockNotifications.map((n) => (
                      <div key={n.id} className={cn(
                        "p-4 border-b border-forest-text/5 hover:bg-forest-text/5 transition-colors cursor-pointer flex gap-3",
                        !n.read && "bg-moss-accent/5"
                      )}>
                        <div className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                          n.type === 'success' ? "bg-forest-text/10 text-forest-text" :
                          n.type === 'warning' ? "bg-moss-accent/20 text-moss-accent" :
                          "bg-orange-800/10 text-orange-800"
                        )}>
                          {n.type === 'success' ? <CheckCircle2 size={16} /> :
                           n.type === 'warning' ? <Clock size={16} /> :
                           <AlertCircle size={16} />}
                        </div>
                        <div>
                          <p className="text-xs font-bold mb-1">{n.message}</p>
                          <p className="text-[10px] text-olive-detail">{n.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center bg-forest-text/5">
                    <button className="text-[10px] font-bold uppercase tracking-widest text-forest-text hover:underline">
                      View All Activity
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
