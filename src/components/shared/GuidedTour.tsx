import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, BrainCircuit, CheckCircle2 } from 'lucide-react';

const tourSteps = [
  {
    title: "Welcome to IntelliCredit",
    content: "Let's take a quick tour of how to use our AI-powered credit intelligence platform.",
    icon: BrainCircuit
  },
  {
    title: "Upload Documents",
    content: "Start by uploading GST, bank statements, and legal records in the 'New Application' section.",
    icon: ChevronRight
  },
  {
    title: "Run AI Analysis",
    content: "Our 10 specialized AI modules will automatically analyze the data for risks and opportunities.",
    icon: ChevronRight
  },
  {
    title: "Review Risk Insights",
    content: "Explore the 'Risk Explorer' to see deep-dive visualizations and explainable AI insights.",
    icon: ChevronRight
  },
  {
    title: "Finalize Decision",
    content: "Use the 'Decision Workbench' to review the AI recommendation and generate a credit memo.",
    icon: CheckCircle2
  }
];

export const GuidedTour: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const step = tourSteps[currentStep];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-forest-text/40 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-sage bg-white max-w-md w-full p-8 shadow-2xl relative"
      >
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 hover:bg-forest-text/5 rounded-lg text-olive-detail"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-forest-text/5 rounded-2xl flex items-center justify-center text-forest-text mb-6">
            <step.icon size={32} />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
          <p className="text-olive-detail mb-8 leading-relaxed">{step.content}</p>
          
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-1">
              {tourSteps.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-all ${i === currentStep ? 'bg-forest-text w-4' : 'bg-forest-text/20'}`} 
                />
              ))}
            </div>
            
            <button 
              onClick={() => {
                if (currentStep < tourSteps.length - 1) {
                  setCurrentStep(prev => prev + 1);
                } else {
                  setIsVisible(false);
                }
              }}
              className="btn-primary flex items-center gap-2"
            >
              {currentStep === tourSteps.length - 1 ? 'Get Started' : 'Next'}
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
