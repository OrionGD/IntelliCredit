import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, FileText, Building2, Zap, Database, X } from 'lucide-react';
import { cn } from '../../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (type: string, id: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onSelect }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const results = [
    { id: '1', title: 'Acme Manufacturing Ltd.', type: 'company', icon: Building2 },
    { id: '2', title: 'Global Tech Solutions', type: 'company', icon: Building2 },
    { id: '3', title: 'Revenue Drop Analysis', type: 'insight', icon: Zap },
    { id: '4', title: 'GST Compliance Module', type: 'module', icon: FileText },
    { id: '5', title: 'MCA Corporate Database', type: 'source', icon: Database },
  ].filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape') onClose();
      
      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % results.length);
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        }
        if (e.key === 'Enter' && results[selectedIndex]) {
          e.preventDefault();
          onSelect(results[selectedIndex].type, results[selectedIndex].id);
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, results, selectedIndex, onSelect]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-forest-text/40 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-sage-bg rounded-2xl shadow-2xl border border-forest-text/10 overflow-hidden"
        >
          <div className="flex items-center px-4 py-4 border-bottom border-forest-text/5">
            <Search className="text-olive-detail mr-3" size={20} />
            <input
              autoFocus
              className="flex-1 bg-transparent border-none outline-none text-forest-text placeholder:text-olive-detail/50 text-lg"
              placeholder="Search applications, companies, insights..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-forest-text/20 text-olive-detail">ESC</span>
              <button onClick={onClose} className="p-1 hover:bg-forest-text/5 rounded">
                <X size={18} className="text-olive-detail" />
              </button>
            </div>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-2">
            {results.length > 0 ? (
              <div className="space-y-1">
                {results.map((item, index) => (
                  <button
                    key={`${item.type}-${item.id}`}
                    onClick={() => {
                      onSelect(item.type, item.id);
                      onClose();
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left group",
                      index === selectedIndex ? "bg-forest-text/10" : "hover:bg-forest-text/5"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                      index === selectedIndex ? "bg-moss-accent text-sage-bg" : "bg-forest-text/5 text-moss-accent group-hover:bg-moss-accent group-hover:text-sage-bg"
                    )}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-forest-text">{item.title}</p>
                      <p className="text-xs text-olive-detail capitalize">{item.type}</p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-olive-detail">No results found for "{query}"</p>
              </div>
            )}
          </div>

          <div className="px-4 py-3 bg-forest-text/5 border-t border-forest-text/5 flex items-center justify-between text-[10px] font-bold text-olive-detail uppercase tracking-widest">
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><span className="px-1 py-0.5 rounded border border-forest-text/20">↑↓</span> Navigate</span>
              <span className="flex items-center gap-1"><span className="px-1 py-0.5 rounded border border-forest-text/20">ENTER</span> Select</span>
            </div>
            <span>IntelliCredit Search</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
