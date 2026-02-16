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
      'Establish a robust foundation in banking, digital payments, insurance, and personal financial planning.',
    overview:
      'This comprehensive program enhances financial awareness and equips participants with essential personal finance skills tailored to real-world applications.',
    topics: ['Banking Fundamentals', 'Digital Payment Systems', 'Insurance Principles', 'Personal Financial Planning'],
    roadmap: [
      'Introduction to Financial Literacy',
      'Banking and Digital Payments',
      'Insurance and Risk Management',
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
      'Master fundamental accounting principles through hands-on training in Tally Prime and GST essentials.',
    overview:
      'This practical accounting program emphasizes Tally Prime proficiency, GST fundamentals, and core accounting processes for immediate application.',
    topics: ['Journal and Ledger', 'Final Accounts Preparation', 'Tally Prime Operations', 'GST Fundamentals'],
    roadmap: [
      'Accounting Fundamentals',
      'Journal and Ledger Management',
      'Tally Prime Practical Training',
      'GST Basics and Compliance',
    ],
    careers: ['Junior Accountant', 'Accounts Executive', 'Tally Operator'],
  },
  {
    slug: 'certified-financial-accounting-audit-with-tally',
    title: 'Certified Financial Accounting & Audit Professional (With Tally)',
    duration: '4 Months',
    level: 'Intermediate to Advanced',
    description:
      'Advance your expertise in accounting and audit practices with extensive hands-on experience using Tally.',
    overview:
      'Tailored for aspiring accounting professionals, this program provides in-depth knowledge of audit standards, compliance, and advanced Tally applications.',
    topics: ['Financial Accounting Principles', 'Audit Procedures and Standards', 'Advanced Tally Techniques', 'Regulatory Compliance'],
    roadmap: [
      'Advanced Accounting Concepts',
      'Auditing Standards and Practices',
      'Advanced Tally Implementation',
      'Compliance and Reporting',
    ],
    careers: ['Audit Executive', 'Senior Accountant', 'Finance Analyst'],
  },
  {
    slug: 'certified-gst-practitioner',
    title: 'Certified GST Practitioner',
    duration: '1 Month',
    level: 'Intermediate',
    description:
      'Gain expertise in GST registration, return filing, refunds, and compliance management.',
    overview:
      'This focused training program aligns with current indirect tax regulations, ensuring proficiency in GST compliance and practical implementation.',
    topics: ['GST Registration Process', 'Return Filing Procedures', 'Refunds and Adjustments', 'Compliance Strategies'],
    roadmap: [
      'GST Framework Overview',
      'GST Registration and Setup',
      'GST Return Filing',
      'GST Compliance and Best Practices',
    ],
    careers: ['GST Executive', 'Tax Assistant', 'Compliance Officer'],
  },
  {
    slug: 'certified-income-tax-tds-compliance',
    title: 'Certified Income Tax & TDS Compliance Professional',
    duration: '2 Months',
    level: 'Intermediate',
    description:
      'Develop skills in Income Tax provisions, return filing, deductions, and TDS/TCS compliance.',
    overview:
      'This program covers the essentials of the Income Tax Act, including practical filing techniques and compliance processes for tax professionals.',
    topics: ['Income Tax Act Provisions', 'Income Tax Return Filing', 'TDS Mechanisms', 'TCS Compliance'],
    roadmap: [
      'Income Tax Fundamentals',
      'Computation of Taxable Income',
      'Return Filing Procedures',
      'TDS and TCS Management',
    ],
    careers: ['Tax Executive', 'Accounts Officer', 'Compliance Assistant'],
  },
  {
    slug: 'certified-chartered-tax-practitioner',
    title: 'Certified Chartered Tax Practitioner',
    duration: '3 Months',
    level: 'Advanced',
    description:
      'Acquire professional training in tax consultancy, encompassing direct and indirect taxes.',
    overview:
      'Designed for individuals pursuing independent tax practice, this program focuses on consultancy roles and comprehensive tax advisory services.',
    topics: ['Direct Tax Consultancy', 'Indirect Tax Advisory', 'MSME Compliance', 'Tax Planning Strategies'],
    roadmap: [
      'Direct Tax Consultancy Practices',
      'Indirect Tax Advisory Services',
      'MSME Compliance Frameworks',
      'Advanced Tax Planning',
    ],
    careers: ['Tax Consultant', 'Independent Tax Practitioner', 'Tax Advisor'],
  },
  {
    slug: 'certified-public-accountant',
    title: 'Certified Public Accountant',
    duration: '6 Months',
    level: 'Advanced',
    description:
      'Engage in a comprehensive program covering accounting, auditing, taxation, and strategic finance.',
    overview:
      'This elite professional program prepares participants for leadership positions in accounting and finance, integrating advanced theoretical and practical knowledge.',
    topics: ['Advanced Accounting', 'Auditing and Assurance', 'Taxation Frameworks', 'Strategic Financial Management'],
    roadmap: [
      'Advanced Accounting Techniques',
      'Auditing and Assurance Standards',
      'Taxation and Compliance',
      'Strategic Finance Applications',
    ],
    careers: ['Public Accountant', 'Finance Manager', 'Audit Manager'],
  },
  {
    slug: 'financial-modelling-business-analytics',
    title: 'Certified Financial Modelling & Business Analytics Professional',
    duration: '6 Months',
    level: 'Advanced',
    description:
      'Master financial modelling, analytics, forecasting, and data-driven decision-making.',
    overview:
      'This analytics-focused finance program equips professionals with tools for modern business environments, emphasizing predictive modelling and insights.',
    topics: ['Financial Modelling Techniques', 'Business Analytics', 'Forecasting Methods', 'Data Visualization'],
    roadmap: [
      'Financial Modelling Fundamentals',
      'Advanced Business Analytics',
      'Forecasting and Projections',
      'Decision-Making Modelling',
    ],
    careers: ['Financial Analyst', 'Business Analyst', 'Data Analyst'],
  },
  {
    slug: 'tally-prime-professional',
    title: 'Tally Prime Professional',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    description:
      'Receive dedicated training in Tally Prime, covering accounting, GST, payroll, and inventory management.',
    overview:
      'This complete hands-on program in Tally Prime is designed for accounting professionals seeking proficiency in essential business operations.',
    topics: ['Tally Prime Operations', 'GST Integration', 'Inventory Management', 'Payroll Processing'],
    roadmap: [
      'Tally Prime Basics',
      'Accounting in Tally Prime',
      'GST and Payroll Integration',
      'Advanced Reporting and Analysis',
    ],
    careers: ['Tally Operator', 'Accounts Executive', 'GST Executive'],
  },
];