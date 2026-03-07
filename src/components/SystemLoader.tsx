import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SystemLoaderProps {
  onComplete: () => void;
}

const loadingStages = [
  "Connecting data sources",
  "Preparing analysis engine",
  "Loading intelligence modules",
  "Initializing credit models",
  "Starting decision cockpit"
];

export const SystemLoader: React.FC<SystemLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  useEffect(() => {
    const duration = 4000; // 4 seconds total
    const intervalTime = 40; // update every 40ms
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay after 100%
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Update stage index based on progress
    const stageCount = loadingStages.length;
    const newIndex = Math.min(
      Math.floor((progress / 100) * stageCount),
      stageCount - 1
    );
    setCurrentStageIndex(newIndex);
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-sage-bg flex flex-col items-center justify-center z-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center max-w-md w-full px-8"
      >
        {/* Logo */}
        <div className="mb-12 relative">
          <motion.div
            animate={{ 
              boxShadow: ["0 0 0px rgba(134, 158, 47, 0)", "0 0 20px rgba(134, 158, 47, 0.3)", "0 0 0px rgba(134, 158, 47, 0)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="rounded-full overflow-hidden"
          >
            <img 
              src="assets/logo.png" 
              alt="IntelliCredit Logo" 
              className="w-24 h-24 object-contain"
              onError={(e) => {
                // Fallback if logo is missing
                (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/1/1f/IntelliCredit.png";
              }}
            />
          </motion.div>
        </div>

        {/* Initialization Text */}
        <h1 className="text-forest-text text-xl font-bold tracking-widest uppercase mb-2">
          Initializing IntelliCredit
        </h1>

        {/* Dynamic Loading Message */}
        <div className="h-6 mb-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentStageIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-olive-detail text-sm font-medium"
            >
              {loadingStages[currentStageIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Percentage Indicator */}
        <div className="mb-4 w-full flex justify-between items-end">
          <span className="text-forest-text text-4xl font-bold tabular-nums">
            {Math.round(progress)}%
          </span>
          <span className="text-olive-detail text-[10px] font-bold uppercase tracking-widest mb-1">
            System Boot Sequence
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-forest-text/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-moss-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Technical Metadata Footer */}
        <div className="mt-12 flex gap-8">
          <div className="flex flex-col items-center">
            <span className="text-[8px] text-olive-detail uppercase tracking-tighter">Core Engine</span>
            <span className="text-[10px] text-forest-text font-bold">v3.1.0-PRO</span>
          </div>
          <div className="flex flex-col items-center border-x border-forest-text/10 px-8">
            <span className="text-[8px] text-olive-detail uppercase tracking-tighter">Security</span>
            <span className="text-[10px] text-forest-text font-bold">AES-256</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[8px] text-olive-detail uppercase tracking-tighter">Status</span>
            <span className="text-[10px] text-forest-text font-bold">STABLE</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
