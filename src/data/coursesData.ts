<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Courses</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 20px;
        }
        .course-card {
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
        }
        .course-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .card-header {
            padding: 20px;
            color: white;
            font-size: 1.2em;
            font-weight: bold;
        }
        .card-body {
            padding: 20px;
        }
        .card-body h3 {
            margin-top: 0;
            font-size: 1.1em;
        }
        .card-body p {
            margin: 10px 0;
            line-height: 1.5;
        }
        .topics, .roadmap, .careers {
            margin: 10px 0;
        }
        .topics ul, .roadmap ul, .careers ul {
            list-style: none;
            padding: 0;
        }
        .topics li, .roadmap li, .careers li {
            background: #f0f0f0;
            margin: 5px 0;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 0.9em;
        }
        .level {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255, 255, 255, 0.8);
            color: #333;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.8em;
            font-weight: bold;
        }
        /* Color schemes for each course */
        .course-1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .course-2 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
        .course-3 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
        .course-4 { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
        .course-5 { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
        .course-6 { background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); }
        .course-7 { background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%); }
        .course-8 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
        .course-9 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
    </style>
</head>
<body>
    <h1 style="text-align: center; margin-bottom: 40px;">Professional Courses</h1>
    <div class="container">
        <div class="course-card course-1">
            <div class="level">Beginner</div>
            <div class="card-header">Certified Financial Literacy</div>
            <div class="card-body">
                <h3>Duration: 1 Month</h3>
                <p><strong>Description:</strong> Establish a robust foundation in banking, digital payments, insurance, and personal financial planning.</p>
                <p><strong>Overview:</strong> This comprehensive program enhances financial awareness and equips participants with essential personal finance skills tailored to real-world applications.</p>
                <div class="topics">
                    <strong>Topics:</strong>
                    <ul>
                        <li>Banking Fundamentals</li>
                        <li>Digital Payment Systems</li>
                        <li>Insurance Principles</li>
                        <li>Personal Financial Planning</li>
                    </ul>
                </div>
                <div class="roadmap">
                    <strong>Roadmap:</strong>
                    <ul>
                        <li>Introduction to Financial Literacy</li>
                        <li>Banking and Digital Payments</li>
                        <li>Insurance and Risk Management</li>
                        <li>Personal Financial Planning</li>
                    </ul>
                </div>
                <div class="careers">
                    <strong>Careers:</strong>
                    <ul>
                        <li>Banking Assistant</li>
                        <li>Finance Executive</li>
                        <li>Accounts Trainee</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="course-card course-2">
            <div class="level">Beginner to Intermediate</div>
            <div class="card-header">Certified Professional Accountant (With Tally)</div>
            <div class="card-body">
                <h3>Duration: 2 Months</h3>
                <p><strong>Description:</strong> Master fundamental accounting principles through hands-on training in Tally Prime and GST essentials.</p>
                <p><strong>Overview:</strong> This practical accounting program emphasizes Tally Prime proficiency, GST fundamentals, and core accounting processes for immediate application.</p>
                <div class="topics">
                    <strong>Topics:</strong>
                    <ul>
                        <li>Journal and Ledger</li>
                        <li>Final Accounts Preparation</li>
                        <li>Tally Prime Operations</li>
                        <li>GST Fundamentals</li>
                    </ul>
                </div>
                <div class="roadmap">
                    <strong>Roadmap:</strong>
                    <ul>
                        <li>Accounting Fundamentals</li>
                        <li>Journal and Ledger Management</li>
                        <li>Tally Prime Practical Training</li>
                        <li>GST Basics and Compliance</li>
                    </ul>
                </div>
                <div class="careers">
                    <strong>Careers:</strong>
                    <ul>
                        <li>Junior Accountant</li>
                        <li>Accounts Executive</li>
                        <li>Tally Operator</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="course-card course-3">
            <div class="level">Intermediate to Advanced</div>
            <div class="card-header">Certified Financial Accounting & Audit Professional (With Tally)</div>
            <div class="card-body">
                <h3>Duration: 4 Months</h3>
                <p><strong>Description:</strong> Advance your expertise in accounting and audit practices with extensive hands-on experience using Tally.</p>
                <p><strong>Overview:</strong> Tailored for aspiring accounting professionals, this program provides in-depth knowledge of audit standards, compliance, and advanced Tally applications.</p>
                <div class="topics">
                    <strong>Topics:</strong>
                    <ul>
                        <li>Financial Accounting Principles</li>
                        <li>Audit Procedures and Standards</li>
                        <li>Advanced Tally Techniques</li>
                        <li>Regulatory Compliance</li>
                    </ul>
                </div>
                <div class="roadmap">
                    <strong>Roadmap:</strong>
                    <ul>
                        <li>Advanced Accounting Concepts</li>
                        <li>Auditing Standards and Practices</li>
                        <li>Advanced Tally Implementation</li>
                        <li>Compliance and Reporting</li>
                    </ul>
                </div>
                <div class="careers">
                    <strong>Careers:</strong>
                    <ul>
                        <li>Audit Executive</li>
                        <li>Senior Accountant</li>
                        <li>Finance Analyst</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="course-card course-4">
            <div class="level">Intermediate</div>
            <div class="card-header">Certified GST Practitioner</div>
            <div class="card-body">
                <h3>Duration: 1 Month</h3>
                <p><strong>Description:</strong> Gain expertise in GST registration, return filing, refunds, and compliance management.</p>
                <p><strong>Overview:</strong> This focused training program aligns with current indirect tax regulations, ensuring proficiency in GST compliance and practical implementation.</p>
                <div class="topics">
                    <strong>Topics:</strong>
                    <ul>
                        <li>GST Registration Process</li>
                        <li>Return Filing Procedures</li>
                        <li>Refunds and Adjustments</li>
                        <li>Compliance Strategies</li>
                    </ul>
                </div>
                <div class="roadmap">
                    <strong>Roadmap:</strong>
                    <ul>
                        <li>GST Framework Overview</li>
                        <li>GST Registration and Setup</li>
                        <li>GST Return Filing</li>
                        <li>GST Compliance and Best Practices</li>
                    </ul>
                </div>
                <div class="careers">
                    <strong>Careers:</strong>
                    <ul>
                        <li>GST Executive</li>
                        <li>Tax Assistant</li>
                        <li>Compliance Officer</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="course-card course-5">
            <div class="level">Intermediate</div>
            <div class="card-header">Certified Income Tax & TDS Compliance Professional</div>
            <div class="card-body">
                <h3>Duration: 2 Months</h3>
                <p><strong>Description:</strong> Develop skills in Income Tax provisions, return filing, deductions, and TDS/TCS compliance.</p>
                <p><strong>Overview:</strong> This program covers the essentials of the Income Tax Act, including practical filing techniques and compliance processes for tax professionals.</p>
                <div class="topics">
                    <strong>Topics:</strong>
                    <ul>
                        <li>Income Tax Act Provisions</li>
                        <li>Income Tax Return Filing</li>
                        <li>TDS Mechanisms</li>
                        <li>TCS Compliance</li>
                    </ul>
                </div>
                <div class="roadmap">
                    <strong>Roadmap:</strong>
                    <ul>
                        <li>Income Tax Fundamentals</li>
                        <li>Computation of Taxable Income</li>
                        <li>Return Filing Procedures</li>
                        <li>TDS and TCS Management</li>
                    </ul>
                </div>
                <div class="careers">
                    <strong>Careers:</strong>
                    <ul>
                        <li>Tax Executive</li>
                        <li>Accounts Officer</li>
                        <li>Compliance Assistant</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="course-card course-6">
            <div class="level">Advanced</div>
            <div class="card-header">Certified Chartered Tax Practitioner</div>
            <div class="card-body">
                <h3>Duration: 3 Months</h3>
                <p><strong>Description:</strong> Acquire professional training in tax consultancy, encompassing direct and indirect taxes.</p>
                <p><strong>Overview:</strong> Designed for individuals pursuing independent tax practice, this program focuses on consultancy roles and comprehensive tax advisory services.</p>
                <div class="topics">
                    <strong>Topics:</strong>
                    <ul>
                        <li>Direct Tax Consultancy</li>
                        <li>Indirect Tax Advisory</li>
                        <li>MSME Compliance</li>
                        <li>Tax Planning Strategies</li>
                    </ul>
                </div>
                <div class="roadmap">
                    <strong>Roadmap:</strong>
                    <ul>
                        <li>Direct Tax Consultancy Practices</li>
                        <li>Indirect Tax Advisory Services</li>
                        <li>MSME Compliance Frameworks</li>
                        <li>Advanced Tax Planning</li>
                    </ul>
                </div>
                <div class="careers">
                    <strong>Careers:</strong>
                    <ul>
                        <li>Tax Consultant</li>
                        <li>Independent Tax Practitioner</li>
                        <li>Tax Advisor</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="course-card course-7">
            <div class="level">Advanced</div>
            <div class="card-header">Certified Public Accountant</div>
            <div class="card-body">
                <h3>Duration: 6 Months</h3>
                <p><strong>Description:</strong> Engage in a comprehensive program covering accounting, auditing, taxation, and strategic finance.</p>
                <p><strong>Overview:</strong> This elite professional program prepares participants for leadership positions in accounting and finance, integrating advanced theoretical and practical knowledge.</p>
                <div class="topics">
                    <strong>Topics:</strong>
                    <ul>
                        <li>Advanced Accounting</li>
                        <li>Auditing and Assurance</li>
                        <li>Taxation Frameworks</li>
                        <li>Strategic Financial Management</li>
                    </ul>
                </div>
                <div class="roadmap">
                    <strong>Roadmap:</strong>
                    <ul>
                        <li>Advanced Accounting Techniques</li>
                        <li>Auditing and Assurance Standards</li>
                        <li>Taxation and Compliance</li>
                        <li>Strategic Finance Applications</li>
                    </ul>
                </div>
                <div class="careers">
                    <strong>Careers:</strong>
                    <ul>
                        <li>Public Accountant</li>
                        <li>Finance Manager</li>
                        <li>Audit Manager</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="course-card course-8">
            <div class="level">Advanced</div>
            <div class="card-header">Certified Financial Modelling & Business Analytics Professional</div>
            <div class="card-body">
                <h3>Duration: 6 Months</h3>
                <p><strong>Description:</strong> Master financial modelling, analytics, forecasting, and data-driven decision-making.</p>
                <p><strong>Overview:</strong> This analytics-focused finance program equips professionals with tools for modern business environments, emphasizing predictive modelling and insights.</p>
                <div class="topics">
                    <strong>Topics:</strong>
                    <ul>
                        <li>Financial Modelling Techniques</li>
                        <li>Business Analytics</li>
                        <li>Forecasting Methods</li>
                        <li>Data Visualization</li>
                    </ul>
                </div>
                <div class="roadmap">
                    <strong>Roadmap:</strong>
                    <ul>
                        <li>Financial Modelling Fundamentals</li>
                        <li>Advanced Business Analytics</li>
                        <li>Forecasting and Projections</li>
                        <li>Decision-Making Modelling</li>
                    </ul>
                </div>
                <div class="careers">
                    <strong>Careers:</strong>
                    <ul>
                        <li>Financial Analyst</li>
                        <li>Business Analyst</li>
                        <li>Data Analyst</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="course-card course-9">
            <div class="level">Beginner to Advanced</div>
            <div class="card-header">Tally Prime Professional</div>
            <div class="card-body">
                <h3>Duration: 3 Months</h3>
                <p><strong>Description:</strong> Receive dedicated training in Tally Prime, covering accounting, GST, payroll, and inventory management.</p>
                <p><strong>Overview:</strong> This complete hands-on program in Tally Prime is designed for accounting professionals seeking proficiency in essential business operations.</p>
                <div class="topics">
                    <strong>Topics:</strong>
                    <ul>
                        <li>Tally Prime Operations</li>
                        <li>GST Integration</li>
                        <li>Inventory Management</li>
                        <li>Payroll Processing</li>
                    </ul>
                </div>
                <div class="roadmap">
                    <strong>Roadmap:</strong>
                    <ul>
                        <li>Tally Prime Basics</li>
                        <li>Accounting in Tally Prime</li>
                        <li>GST and Payroll Integration</li>
                        <li>Advanced Reporting and Analysis</li>
                    </ul>
                </div>
                <div class="careers">
                    <strong>Careers:</strong>
                    <ul>
                        <li>Tally Operator</li>
                        <li>Accounts Executive</li>
                        <li>GST Executive</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>
</html>