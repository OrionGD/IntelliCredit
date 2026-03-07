import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface AIModule {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'analyzing' | 'idle';
  insight: string;
}

export interface RiskIndicator {
  label: string;
  score: number;
  explanation: string;
}

export interface Application {
  id: string;
  companyName: string;
  industry: string;
  location: string;
  amount: number;
  status: 'draft' | 'analyzing' | 'ready' | 'approved' | 'rejected';
  riskScore: number;
  lastUpdated: string;
  exposure: number;
}

export interface AnalysisStage {
  id: string;
  label: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
  description: string;
}

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  timestamp: string;
  read: boolean;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'negative' | 'positive' | 'neutral';
  source: string;
}

export interface Evidence {
  source: string;
  reference: string;
  confidence: number;
  model: string;
}

export interface AuditEvent {
  id: string;
  timestamp: string;
  type: 'upload' | 'analysis_start' | 'analysis_complete' | 'decision';
  user: string;
  details: string;
}

export interface ComparisonData {
  subject: string;
  companyA: number;
  companyB: number;
  fullMark: number;
}

export interface Insight {
  id: string;
  text: string;
  priority: 'critical' | 'important' | 'informational';
  category: string;
  targetId: string; // For deep linking
}
