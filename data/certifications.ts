// data/certifications.js
import {
  Calculator,
  FileText,
  BarChart3,
  Shield,
  TrendingUp,
  BookOpen,
} from 'lucide-react';

export const certifications = [
  {
    icon: Calculator,
    title: 'Tally Prime Professional',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    description:
      'Master Tally Prime with GST, TDS, and advanced accounting features. Industry-recognized certification included.',
    topics: ['GST Compliance', 'Inventory Management', 'Payroll Processing', 'Financial Reports'],
  },
  {
    icon: FileText,
    title: 'GST Practitioner Course',
    duration: '2 Months',
    level: 'Intermediate',
    description:
      'Comprehensive GST training covering filing, compliance, and advisory services for businesses.',
    topics: ['GST Filing', 'Return Processing', 'Audit Preparation', 'Compliance Management'],
  },
  {
    icon: BarChart3,
    title: 'Financial Accounting',
    duration: '4 Months',
    level: 'Foundation to Advanced',
    description:
      'Complete accounting fundamentals to advanced financial management and reporting standards.',
    topics: ['Balance Sheet', 'P&L Statements', 'Cash Flow', 'Financial Analysis'],
  },
  {
    icon: TrendingUp,
    title: 'Taxation & Tax Planning',
    duration: '3 Months',
    level: 'Advanced',
    description:
      'In-depth training on Income Tax, TDS, and strategic tax planning for individuals and businesses.',
    topics: ['Income Tax Returns', 'TDS Filing', 'Tax Planning', 'Assessment Procedures'],
  },
  {
    icon: Shield,
    title: 'Audit & Assurance',
    duration: '3 Months',
    level: 'Advanced',
    description:
      'Professional training in auditing standards, procedures, and assurance services.',
    topics: ['Internal Audit', 'Statutory Audit', 'Risk Assessment', 'Compliance Checking'],
  },
  {
    icon: BookOpen,
    title: 'Corporate Accounting',
    duration: '4 Months',
    level: 'Advanced',
    description:
      'Specialized training in corporate financial management, mergers, and acquisitions.',
    topics: ['Share Capital', 'Debentures', 'Company Accounts', 'Amalgamation'],
  },
];