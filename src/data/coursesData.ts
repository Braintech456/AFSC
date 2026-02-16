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
      'This program enhances financial awareness and equips learners with real-world personal finance skills.',
    topics: [
      'Banking Fundamentals',
      'Digital Payment Systems',
      'Insurance Principles',
      'Personal Financial Planning',
    ],
    roadmap: [
      'Introduction to Financial Literacy',
      'Banking and Digital Payments',
      'Insurance and Risk Management',
      'Personal Financial Planning',
    ],
    careers: [
      'Banking Assistant',
      'Finance Executive',
      'Accounts Trainee',
    ],
  },
  {
    slug: 'certified-professional-accountant-with-tally',
    title: 'Certified Professional Accountant (With Tally)',
    duration: '2 Months',
    level: 'Beginner to Intermediate',
    description:
      'Master fundamental accounting principles through hands-on training in Tally Prime and GST essentials.',
    overview:
      'Practical accounting program focusing on Tally Prime proficiency and GST fundamentals.',
    topics: [
      'Journal and Ledger',
      'Final Accounts',
      'Tally Prime',
      'GST Fundamentals',
    ],
    roadmap: [
      'Accounting Fundamentals',
      'Journal and Ledger Management',
      'Tally Prime Practical Training',
      'GST Basics and Compliance',
    ],
    careers: [
      'Junior Accountant',
      'Accounts Executive',
      'Tally Operator',
    ],
  },
  {
    slug: 'certified-financial-accounting-audit-with-tally',
    title: 'Certified Financial Accounting & Audit Professional (With Tally)',
    duration: '4 Months',
    level: 'Intermediate to Advanced',
    description:
      'Advanced accounting and audit practices with extensive hands-on experience using Tally.',
    overview:
      'In-depth training in audit standards, compliance, and advanced Tally applications.',
    topics: [
      'Financial Accounting',
      'Audit Procedures',
      'Advanced Tally',
      'Regulatory Compliance',
    ],
    roadmap: [
      'Advanced Accounting Concepts',
      'Auditing Standards and Practices',
      'Advanced Tally Implementation',
      'Compliance and Reporting',
    ],
    careers: [
      'Audit Executive',
      'Senior Accountant',
      'Finance Analyst',
    ],
  },
  {
    slug: 'certified-gst-practitioner',
    title: 'Certified GST Practitioner',
    duration: '1 Month',
    level: 'Intermediate',
    description:
      'Gain expertise in GST registration, return filing, refunds, and compliance management.',
    overview:
      'Focused GST training aligned with current indirect tax regulations.',
    topics: [
      'GST Registration',
      'Return Filing',
      'Refunds',
      'Compliance Management',
    ],
    roadmap: [
      'GST Framework Overview',
      'GST Registration and Setup',
      'GST Return Filing',
      'GST Compliance and Best Practices',
    ],
    careers: [
      'GST Executive',
      'Tax Assistant',
      'Compliance Officer',
    ],
  },
  {
    slug: 'certified-income-tax-tds-compliance',
    title: 'Certified Income Tax & TDS Compliance Professional',
    duration: '2 Months',
    level: 'Intermediate',
    description:
      'Develop skills in Income Tax provisions, return filing, deductions, and TDS/TCS compliance.',
    overview:
      'Covers Income Tax Act essentials and practical compliance procedures.',
    topics: [
      'Income Tax Act',
      'Income Tax Return Filing',
      'TDS',
      'TCS',
    ],
    roadmap: [
      'Income Tax Fundamentals',
      'Computation of Income',
      'Return Filing Procedures',
      'TDS and TCS Management',
    ],
    careers: [
      'Tax Executive',
      'Accounts Officer',
      'Compliance Assistant',
    ],
  },
  {
    slug: 'certified-chartered-tax-practitioner',
    title: 'Certified Chartered Tax Practitioner',
    duration: '3 Months',
    level: 'Advanced',
    description:
      'Professional training in tax consultancy covering direct and indirect taxation.',
    overview:
      'Designed for independent tax practice and consultancy roles.',
    topics: [
      'Direct Tax Consultancy',
      'Indirect Tax Advisory',
      'MSME Compliance',
      'Tax Planning',
    ],
    roadmap: [
      'Direct Tax Consultancy Practices',
      'Indirect Tax Advisory Services',
      'MSME Compliance Frameworks',
      'Advanced Tax Planning',
    ],
    careers: [
      'Tax Consultant',
      'Independent Tax Practitioner',
      'Tax Advisor',
    ],
  },
  {
    slug: 'certified-public-accountant',
    title: 'Certified Public Accountant',
    duration: '6 Months',
    level: 'Advanced',
    description:
      'Comprehensive program covering accounting, auditing, taxation, and strategic finance.',
    overview:
      'Prepares professionals for leadership roles in accounting and finance.',
    topics: [
      'Advanced Accounting',
      'Auditing and Assurance',
      'Taxation',
      'Strategic Finance',
    ],
    roadmap: [
      'Advanced Accounting Techniques',
      'Auditing and Assurance Standards',
      'Taxation and Compliance',
      'Strategic Finance Applications',
    ],
    careers: [
      'Public Accountant',
      'Finance Manager',
      'Audit Manager',
    ],
  },
  {
    slug: 'financial-modelling-business-analytics',
    title: 'Certified Financial Modelling & Business Analytics Professional',
    duration: '6 Months',
    level: 'Advanced',
    description:
      'Master financial modelling, analytics, forecasting, and data-driven decision-making.',
    overview:
      'Analytics-focused finance program for modern business environments.',
    topics: [
      'Financial Modelling',
      'Business Analytics',
      'Forecasting',
      'Data Visualization',
    ],
    roadmap: [
      'Financial Modelling Fundamentals',
      'Advanced Business Analytics',
      'Forecasting and Projections',
      'Decision-Making Modelling',
    ],
    careers: [
      'Financial Analyst',
      'Business Analyst',
      'Data Analyst',
    ],
  },
  {
    slug: 'tally-prime-professional',
    title: 'Tally Prime Professional',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    description:
      'Dedicated training in Tally Prime covering accounting, GST, payroll, and inventory.',
    overview:
      'Complete hands-on Tally Prime program for accounting professionals.',
    topics: [
      'Tally Prime Operations',
      'GST Integration',
      'Inventory Management',
      'Payroll Processing',
    ],
    roadmap: [
      'Tally Prime Basics',
      'Accounting in Tally Prime',
      'GST and Payroll Integration',
      'Advanced Reporting and Analysis',
    ],
    careers: [
      'Tally Operator',
      'Accounts Executive',
      'GST Executive',
    ],
  },
];
