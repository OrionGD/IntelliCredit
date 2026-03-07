import { Application, TimelineEvent, AIModule, Notification, AuditEvent, Insight } from '../types';

export const mockApplications: Application[] = [
  {
    id: '1',
    companyName: 'Acme Manufacturing Ltd.',
    industry: 'Industrial Goods',
    location: 'Mumbai, India',
    amount: 2500000,
    status: 'ready',
    riskScore: 82,
    lastUpdated: '2h ago',
    exposure: 2500000
  },
  {
    id: '2',
    companyName: 'Global Tech Solutions',
    industry: 'Software',
    location: 'Bangalore, India',
    amount: 1200000,
    status: 'analyzing',
    riskScore: 0,
    lastUpdated: 'Just now',
    exposure: 1200000
  },
  {
    id: '3',
    companyName: 'Green Energy Corp',
    industry: 'Renewables',
    location: 'Delhi, India',
    amount: 5000000,
    status: 'approved',
    riskScore: 91,
    lastUpdated: '1d ago',
    exposure: 5000000
  },
  {
    id: '4',
    companyName: 'Retail Kings Pvt Ltd',
    industry: 'Retail',
    location: 'Chennai, India',
    amount: 800000,
    status: 'rejected',
    riskScore: 45,
    lastUpdated: '3d ago',
    exposure: 800000
  }
];

export const mockTimelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: 'Oct 2025',
    title: 'GST Revenue Drop',
    description: '18% decrease in reported revenue compared to previous quarter.',
    type: 'negative',
    source: 'GST Filings'
  },
  {
    id: '2',
    date: 'Aug 2025',
    title: 'Director Change',
    description: 'New CFO appointed with 20 years of experience in manufacturing.',
    type: 'positive',
    source: 'Company Filings'
  },
  {
    id: '3',
    date: 'Jun 2025',
    title: 'Litigation Filed',
    description: 'Minor labor dispute filed in local court. Estimated impact low.',
    type: 'neutral',
    source: 'Legal Records'
  },
  {
    id: '4',
    date: 'Jan 2025',
    title: 'Sector Sentiment Shift',
    description: 'Positive outlook for industrial goods sector due to new export policy.',
    type: 'positive',
    source: 'Business News'
  }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    message: 'Analysis completed for Acme Manufacturing Ltd.',
    timestamp: '2h ago',
    read: false
  },
  {
    id: '2',
    type: 'warning',
    message: 'New risk signal detected in Global Tech Solutions.',
    timestamp: '1h ago',
    read: false
  },
  {
    id: '3',
    type: 'error',
    message: 'Document parsing failed for Retail Kings Pvt Ltd.',
    timestamp: '3h ago',
    read: true
  }
];

export const mockSectorExposure = [
  { name: 'Industrial', value: 45 },
  { name: 'Software', value: 25 },
  { name: 'Renewables', value: 20 },
  { name: 'Retail', value: 10 },
];

export const mockRiskDistribution = [
  { name: 'Low Risk', value: 60 },
  { name: 'Medium Risk', value: 30 },
  { name: 'High Risk', value: 10 },
];

export const mockAuditEvents: AuditEvent[] = [
  { id: '1', timestamp: '2026-03-06T10:00:00Z', type: 'upload', user: 'Sarah Miller', details: 'Uploaded GST Filings Q3 2025' },
  { id: '2', timestamp: '2026-03-06T10:05:00Z', type: 'analysis_start', user: 'System', details: 'Started AI Risk Analysis Pipeline' },
  { id: '3', timestamp: '2026-03-06T10:12:00Z', type: 'analysis_complete', user: 'System', details: 'Analysis completed with 94% confidence' },
  { id: '4', timestamp: '2026-03-06T14:30:00Z', type: 'decision', user: 'David Chen', details: 'Loan Approved with Covenants' },
];

export const mockInsights: Insight[] = [
  { id: 'i1', text: 'Significant drop in GST revenue (22%) in the last quarter.', priority: 'critical', category: 'Financial', targetId: 'revenue-chart' },
  { id: 'i2', text: 'Positive sentiment shift in export sector news.', priority: 'important', category: 'Market', targetId: 'sentiment-chart' },
  { id: 'i3', text: 'Company has maintained 100% GST compliance for 3 years.', priority: 'informational', category: 'Compliance', targetId: 'compliance-panel' },
];

export const mockComparisonData = [
  { subject: 'Liquidity', companyA: 120, companyB: 110, fullMark: 150 },
  { subject: 'Solvency', companyA: 98, companyB: 130, fullMark: 150 },
  { subject: 'Profitability', companyA: 86, companyB: 130, fullMark: 150 },
  { subject: 'Efficiency', companyA: 99, companyB: 100, fullMark: 150 },
  { subject: 'Growth', companyA: 85, companyB: 90, fullMark: 150 },
];
