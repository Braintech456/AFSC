export type Course = {
  slug: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  overview: string;
  topics: string[];
  roadmap: string[];
  careers: string[];
};

export const coursesData: Course[] = [
  {
    slug: 'certified-financial-literacy',
    title: 'Certified Financial Literacy',
    duration: '1 Month',
    level: 'Beginner',
    description:
      'Build a strong foundation in banking, digital payments, insurance, and personal financial planning.',
    overview:
      'This program builds financial awareness and personal finance skills aligned with real-world requirements.',
    topics: ['Banking Basics', 'Digital Payments', 'Insurance', 'Financial Planning'],
    roadmap: [
      'Introduction to Financial Literacy',
      'Banking & Digital Payments',
      'Insurance & Risk Management',
      'Personal Financial Planning',
    ],
    careers: ['Banking Assistant', 'Finance Executive', 'Accounts Trainee'],
  },
  {
    slug: 'certified-professional-accountant-with-tally',
    title: 'Certified Professional Accountant (With Tally)',
    duration: '2 Months',
    level: 'Beginner to Intermediate',
    description:
      'Fundamental accounting principles with hands-on training in Tally Prime and GST basics.',
    overview:
      'Hands-on accounting program focused on Tally Prime, GST basics, and core accounting processes.',
    topics: ['Journal & Ledger', 'Final Accounts', 'Tally Prime', 'GST Basics'],
    roadmap: [
      'Accounting Fundamentals',
      'Journal & Ledger',
      'Tally Prime Practical',
      'GST Basics',
    ],
    careers: ['Junior Accountant', 'Accounts Executive', 'Tally Operator'],
  },
  {
    slug: 'certified-financial-accounting-audit-with-tally',
    title: 'Certified Financial Accounting & Audit Professional (With Tally)',
    duration: '4 Months',
    level: 'Intermediate to Advanced',
    description:
      'Advanced accounting and audit practices with practical exposure using Tally.',
    overview:
      'Designed for advanced accounting roles with strong audit and compliance exposure.',
    topics: ['Financial Accounting', 'Audit Procedures', 'Advanced Tally', 'Compliance'],
    roadmap: [
      'Advanced Accounting',
      'Auditing Standards',
      'Advanced Tally',
      'Compliance Reporting',
    ],
    careers: ['Audit Executive', 'Senior Accountant', 'Finance Analyst'],
  },
  {
    slug: 'certified-gst-practitioner',
    title: 'Certified GST Practitioner',
    duration: '1 Month',
    level: 'Intermediate',
    description:
      'GST registration, return filing, refunds, and compliance support.',
    overview:
      'Focused GST compliance training aligned with current indirect tax regulations.',
    topics: ['GST Registration', 'Return Filing', 'Refunds', 'Compliance'],
    roadmap: [
      'GST Framework',
      'GST Registration',
      'GST Returns',
      'GST Compliance',
    ],
    careers: ['GST Executive', 'Tax Assistant', 'Compliance Officer'],
  },
  {
    slug: 'certified-income-tax-tds-compliance',
    title: 'Certified Income Tax & TDS Compliance Professional',
    duration: '2 Months',
    level: 'Intermediate',
    description:
      'Income Tax provisions, return filing, deductions, and TDS/TCS compliance.',
    overview:
      'Covers Income Tax Act basics, practical filing, and compliance processes.',
    topics: ['Income Tax Act', 'IT Returns', 'TDS', 'TCS'],
    roadmap: [
      'Income Tax Basics',
      'Computation of Income',
      'Return Filing',
      'TDS & TCS',
    ],
    careers: ['Tax Executive', 'Accounts Officer', 'Compliance Assistant'],
  },
  {
    slug: 'certified-chartered-tax-practitioner',
    title: 'Certified Chartered Tax Practitioner',
    duration: '3 Months',
    level: 'Advanced',
    description:
      'Professional tax consultancy training covering direct & indirect taxes.',
    overview:
      'Designed for independent tax practice and consultancy roles.',
    topics: ['Direct Tax', 'Indirect Tax', 'MSME Compliance', 'Tax Planning'],
    roadmap: [
      'Direct Tax Consultancy',
      'Indirect Tax Advisory',
      'MSME Compliance',
      'Tax Planning',
    ],
    careers: ['Tax Consultant', 'Independent Practitioner', 'Advisor'],
  },
  {
    slug: 'certified-public-accountant',
    title: 'Certified Public Accountant',
    duration: '6 Months',
    level: 'Advanced',
    description:
      'Comprehensive program covering accounting, audit, taxation, and finance.',
    overview:
      'High-level professional program for leadership roles in accounting & finance.',
    topics: ['Accounting', 'Auditing', 'Taxation', 'Strategic Finance'],
    roadmap: [
      'Advanced Accounting',
      'Auditing & Assurance',
      'Taxation',
      'Strategic Finance',
    ],
    careers: ['Public Accountant', 'Finance Manager', 'Audit Manager'],
  },
  {
    slug: 'financial-modelling-business-analytics',
    title: 'Certified Financial Modelling & Business Analytics Professional',
    duration: '6 Months',
    level: 'Advanced',
    description:
      'Financial modelling, analytics, forecasting, and decision-making.',
    overview:
      'Analytics-driven finance program for modern business environments.',
    topics: ['Financial Modelling', 'Analytics', 'Forecasting', 'Visualization'],
    roadmap: [
      'Modelling Basics',
      'Advanced Analytics',
      'Forecasting',
      'Decision Modelling',
    ],
    careers: ['Financial Analyst', 'Business Analyst', 'Data Analyst'],
  },
  {
    slug: 'tally-prime-professional',
    title: 'Tally Prime Professional',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    description:
      'Dedicated Tally Prime training covering accounting, GST, payroll, and inventory.',
    overview:
      'Complete hands-on Tally Prime program for accounting professionals.',
    topics: ['Tally Prime', 'GST', 'Inventory', 'Payroll'],
    roadmap: [
      'Tally Basics',
      'Accounting in Tally',
      'GST & Payroll',
      'Advanced Reports',
    ],
    careers: ['Tally Operator', 'Accounts Executive', 'GST Executive'],
  },
];
