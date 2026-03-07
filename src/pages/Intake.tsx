import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  Loader2, 
  AlertCircle, 
  ArrowRight, 
  X, 
  BrainCircuit,
  Database,
  Search,
  Zap
} from 'lucide-react';
import { AnalysisStage, cn } from '../types';

const stages: AnalysisStage[] = [
  { id: 'ingest', label: 'Data Ingestion', status: 'completed', description: 'Collecting documents from secure storage.' },
  { id: 'parse', label: 'Document Parsing', status: 'processing', description: 'Extracting line items from GST and bank statements.' },
  { id: 'correlate', label: 'Cross-Source Correlation', status: 'pending', description: 'Matching tax filings with transaction records.' },
  { id: 'risk', label: 'Risk Modeling', status: 'pending', description: 'Running 10 AI modules for credit scoring.' },
  { id: 'decision', label: 'Decision Generation', status: 'pending', description: 'Preparing final credit recommendation.' }
];

interface IntakeProps {
  onComplete: () => void;
}

export const Intake: React.FC<IntakeProps> = ({ onComplete }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [files, setFiles] = useState<{ name: string; size: string; type: string }[]>([]);
  const [currentStage, setCurrentStage] = useState(0);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setFiles([
        { name: 'GST_Filings_2024.pdf', size: '2.4 MB', type: 'GST' },
        { name: 'Bank_Statement_HDFC.xlsx', size: '1.1 MB', type: 'Bank' },
        { name: 'Annual_Report_FY23.pdf', size: '5.8 MB', type: 'Report' }
      ]);
    }, 1500);
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
  };

  useEffect(() => {
    if (isAnalyzing && currentStage < stages.length) {
      const timer = setTimeout(() => {
        setCurrentStage(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (isAnalyzing && currentStage === stages.length) {
      setTimeout(onComplete, 1000);
    }
  }, [isAnalyzing, currentStage, onComplete]);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">New Credit Application</h1>
        <p className="text-olive-detail">Upload company documents to start the AI-powered credit analysis.</p>
      </div>

      {!isAnalyzing ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Upload Area */}
          <div 
            onClick={handleUpload}
            className={cn(
              "border-2 border-dashed border-forest-text/20 rounded-3xl p-12 text-center cursor-pointer transition-all hover:border-moss-accent/50 hover:bg-forest-text/5",
              isUploading && "pointer-events-none opacity-50"
            )}
          >
            {isUploading ? (
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="animate-spin text-moss-accent" size={48} />
                <p className="font-bold">Uploading documents...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-forest-text/5 rounded-full flex items-center justify-center mb-2">
                  <Upload className="text-forest-text" size={32} />
                </div>
                <div>
                  <p className="text-lg font-bold mb-1">Drag and drop files here</p>
                  <p className="text-sm text-olive-detail">Support for PDF, XLSX, and CSV (Max 20MB per file)</p>
                </div>
                <button className="btn-secondary mt-4">Select Files</button>
              </div>
            )}
          </div>

          {/* File List */}
          <AnimatePresence>
            {files.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-3"
              >
                <h3 className="text-sm font-bold uppercase tracking-widest text-olive-detail mb-4">Uploaded Documents</h3>
                {files.map((file, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="card-sage flex items-center gap-4 py-4"
                  >
                    <div className="w-10 h-10 bg-forest-text/5 rounded-lg flex items-center justify-center text-forest-text">
                      <FileText size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">{file.name}</p>
                      <p className="text-xs text-olive-detail">{file.size} • {file.type}</p>
                    </div>
                    <button className="p-2 hover:bg-forest-text/5 rounded-lg text-olive-detail">
                      <X size={18} />
                    </button>
                  </motion.div>
                ))}

                <div className="pt-8 flex justify-end">
                  <button 
                    onClick={startAnalysis}
                    className="btn-primary flex items-center gap-3 px-8 py-4"
                  >
                    Start AI Analysis
                    <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="card-sage p-12 space-y-12"
        >
          <div className="flex flex-col items-center text-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 bg-forest-text rounded-3xl flex items-center justify-center animate-pulse">
                <BrainCircuit className="text-sage-bg w-12 h-12" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-moss-accent rounded-full flex items-center justify-center border-4 border-sage-bg text-sage-bg">
                <Zap size={16} />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Analyzing Acme Manufacturing Ltd.</h2>
              <p className="text-olive-detail">IntelliCredit AI is processing 3 documents across 10 modules.</p>
            </div>
          </div>

          {/* Analysis Pipeline */}
          <div className="max-w-md mx-auto space-y-6">
            {stages.map((stage, i) => {
              const status = i < currentStage ? 'completed' : i === currentStage ? 'processing' : 'pending';
              return (
                <div key={stage.id} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center shrink-0">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                      status === 'completed' ? "bg-forest-text text-sage-bg" :
                      status === 'processing' ? "bg-moss-accent text-sage-bg animate-pulse" :
                      "bg-forest-text/10 text-olive-detail"
                    )}>
                      {status === 'completed' ? <CheckCircle2 size={16} /> :
                       status === 'processing' ? <Loader2 size={16} className="animate-spin" /> :
                       <div className="w-2 h-2 rounded-full bg-current" />}
                    </div>
                    {i < stages.length - 1 && (
                      <div className={cn(
                        "w-0.5 h-12 my-1 transition-all duration-500",
                        status === 'completed' ? "bg-forest-text" : "bg-forest-text/10"
                      )} />
                    )}
                  </div>
                  <div className="pt-1">
                    <h4 className={cn(
                      "text-sm font-bold transition-colors duration-500",
                      status === 'pending' ? "text-olive-detail" : "text-forest-text"
                    )}>{stage.label}</h4>
                    <p className="text-xs text-olive-detail mt-1">{stage.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};
