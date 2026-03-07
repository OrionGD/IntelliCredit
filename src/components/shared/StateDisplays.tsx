import React from 'react';
import { Search, AlertCircle, RefreshCcw, FileQuestion } from 'lucide-react';
import { cn } from '../../types';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: React.ElementType;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  description, 
  actionLabel, 
  onAction, 
  icon: Icon = FileQuestion 
}) => (
  <div className="flex flex-col items-center justify-center py-20 px-6 text-center card-sage border-dashed border-2">
    <div className="w-16 h-16 bg-forest-text/5 rounded-full flex items-center justify-center mb-6 text-olive-detail">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-olive-detail max-w-sm mb-8">{description}</p>
    {actionLabel && onAction && (
      <button onClick={onAction} className="btn-primary">
        {actionLabel}
      </button>
    )}
  </div>
);

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ 
  title = "Analysis Failed", 
  message, 
  onRetry 
}) => (
  <div className="card-sage border-orange-800/20 bg-orange-800/5 p-8 text-center">
    <div className="w-12 h-12 bg-orange-800/10 text-orange-800 rounded-full flex items-center justify-center mx-auto mb-4">
      <AlertCircle size={24} />
    </div>
    <h3 className="text-lg font-bold text-orange-800 mb-2">{title}</h3>
    <p className="text-sm text-orange-800/70 mb-6 max-w-md mx-auto">{message}</p>
    {onRetry && (
      <button 
        onClick={onRetry}
        className="flex items-center gap-2 mx-auto text-sm font-bold text-orange-800 hover:underline"
      >
        <RefreshCcw size={16} />
        Retry Analysis
      </button>
    )}
  </div>
);
