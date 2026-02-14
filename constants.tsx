import { Project, Experience, Skill, NavItem, Certification, Achievement, SkillCategory, BlogPost } from './types';
import { BarChart, Code2, ClipboardList, Bot, Layers, Users, Phone, Mail, Linkedin, Github } from 'lucide-react';

export const PROFILE_PIC = "/profile p.webp"; // Local image example
export const GITHUB_FALLBACK_IMG = "https://github.com/Bheki0987.png";

export const CONTACT_INFO = {
  email: "bpmogola@gmail.com",
  phone: "+27 72 866 2267", // Added based on implementation plan proposal - USER PLEASE VERIFY
  linkedin: "https://www.linkedin.com/in/bheki-mogola-8481122b7/",
  github: "https://github.com/Bheki0987",
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Hackathons', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Data Analysis & Business Intelligence',
    points: [
      'Applied data analysis using Excel (Power Query, PivotTables, dashboards) for business insights.',
      'Exploratory Data Analysis (EDA), trend identification, and variance analysis.',
      'Strategic KPI definition, monitoring, and reporting.',
      'Data visualization and storytelling using Tableau and basic Power BI.'
    ],
    icon: BarChart,
  },
  {
    title: 'Business Analysis & Process Improvement',
    points: [
      'Requirements analysis and comprehensive documentation (BRD, SRS) for system design.',
      'Business process analysis, modeling, and mapping (AS-IS / TO-BE).',
      'SDLC methodology application, User Acceptance Testing (UAT) coordination, and problem decomposition.',
      'Stakeholder analysis and communication management.'
    ],
    icon: ClipboardList,
  },
  {
    title: 'Programming, Data & Automation',
    points: [
      'Python for data analysis (Pandas, NumPy, Matplotlib) and automation.',
      'SQL capabilities including data modeling, data querying, and window functions.',
      'System integration concepts, API data flows, and database connectivity.',
      'Full-stack Web Development (React, Node.js, HTML, CSS) for custom tools and applications.'
    ],
    icon: Code2,
  },
  {
    title: 'Generative AI & Productivity',
    points: [
      'Leveraging Generative AI (ChatGPT, Google Gemini) for accelerated problem-solving and code optimization.',
      'Generative AI-assisted data exploration and analytical reasoning.',
      'Automated code generation, debugging, and validation.',
      'Documentation generation and structured problem-solving frameworks.'
    ],
    icon: Bot,
  },
  {
    title: 'Tools & Platforms',
    points: [
      'GitHub (version control and documentation).',
      'Lucidchart (process flows and diagrams).',
      'Figma and Balsamiq (wireframing and UI concepts).',
      'Microsoft Office Suite (Excel, Word, PowerPoint, Outlook).'
    ],
    icon: Layers,
  },
  {
    title: 'Professional Soft Skills',
    points: [
      'Analytical thinking and structured problem-solving.',
      'Clear communication and stakeholder-friendly reporting.',
      'Attention to detail.',
      'Collaboration in team and individual project environments.',
      'Presentation confidence.'
    ],
    icon: Users,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 8,
    title: 'E-Commerce OTIF & Perfect Order Analytics',
    category: 'Supply Chain Analytics',
    oneLineBlurb: 'Strategic supply chain analytics suite identifying 38.7% OTIF failure rates and visualizing R800k+ in lost revenue opportunities.',
    description: 'Strategic supply chain analytics suite identifying OTIF failure rates and visualizing lost revenue opportunities.',
    detailedDescription: 'A multi-layered analytics suite designed to solve critical fulfillment challenges for a South African e-commerce leader. Leverages Python for automated data cleaning and Tableau for strategic visualization to identify operational bottlenecks and quantify revenue leakage through On-Time In-Full (OTIF) modeling.',
    tech: ['Tableau', 'Python', 'Google Colab', 'SQL'],
    features: [
      'Visualizes 61.3% OTIF Rate and 72.3% In-Full bottleneck',
      'Root cause analysis of warehouse-carrier shipping lanes',
      'Daily operational monitoring of short shipments and returns',
      'Quantifies revenue leakage by SKU and region'
    ],
    metrics: 'Identified R805k+ in lost revenue opportunities and specific carrier performance issues.',
    tags: ['Supply Chain', 'Tableau', 'Python', 'Analytics', 'OTIF', 'Logistics'],

    repoUrl: 'https://github.com/Bheki0987/E-Commerce-OTIF-Perfect-Order-Analytics.git',
    image: '/E_Commerce_OTIF_Logo.png',
    link: 'https://public.tableau.com/views/E-CommerceOTIFPerfectOrderAnalytics/DailyOperationsView?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    id: 0,
    title: 'Ubuntu National Bank',
    category: 'Analytics & Database Design',
    oneLineBlurb: 'End-to-end banking analytics platform simulating a real-world financial environment with immutable transaction modeling, reconciliation, and executive KPI reporting.',
    description: 'End-to-end banking analytics platform simulating a real-world financial environment.',
    detailedDescription: 'An end-to-end banking data analytics project that models a realistic bank (Ubuntu National Bank). The project includes advanced MySQL architecture for transaction storage, immutable transaction modeling to maintain audit trails, reconciliation frameworks to validate and correct ledger state, and dashboards for executive KPIs and BI reporting. The goal is to demonstrate full-cycle data ownership from schema design and ETL through analytics and report generation.',
    tech: ['MySQL', 'SQL', 'Python', 'Tableau', 'Docker'],
    features: [
      'Immutable transaction ledger model that preserves history (append-only transactions).',
      'Reconciliation framework to detect and resolve ledger mismatches.',
      'Normalized, analytics-ready MySQL schema with dimension/fact design for reporting.',
      'Executive KPI dashboards showing NPS, transaction volume, deposit/loan trends, and risk metrics.'
    ],
    metrics: 'Demonstrates handling of large transaction volumes (configurable seed data). Designed for auditability and regulatory-friendly reporting.',
    tags: ['Banking', 'Database Design', 'MySQL', 'ETL', 'Analytics', 'Reconciliation'],

    repoUrl: 'https://github.com/Bheki0987/Ubuntu-National-Bank-UNB-Data-Analytics-Project',
    image: '/Ubuntu_National_Bank_Logo_v2.jpg',
    link: 'https://github.com/Bheki0987/Ubuntu-National-Bank-UNB-Data-Analytics-Project',
  },
  {
    id: 1,
    title: 'Student Study Planner',
    category: 'Web Development',
    oneLineBlurb: 'Full-stack study planner web app that centralizes a student’s tasks, timetables, and progress tracking.',
    description: 'Full-stack study planner web app that centralizes a student’s tasks, timetables, and progress tracking.',
    detailedDescription: 'Student Study Planner is a full-stack web application that helps students plan and organize their academic lifecycle—timetables, to-do tasks, assignment tracking, study goals, and progress visualization. Built as a responsive web app with a JavaScript front-end and server-side components, it focuses on user-friendly scheduling and analytics to improve study outcomes.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
    features: [
      'Timetable builder / drag-and-drop schedule editor',
      'Assignment and task tracker with deadlines and reminders',
      'Study analytics: time spent, completed tasks, achievement streaks',
      'Responsive UI for mobile and desktop'
    ],
    metrics: 'Improved time management for students. Configurable reminders and analytics to track study effectiveness.',
    tags: ['Education', 'Productivity', 'JavaScript', 'Frontend', 'Web App', 'Planner'],

    repoUrl: 'https://github.com/Bheki0987/student-study-planner-web-app',
    image: '/Student_Study_Planner_Logo_v2.jpg',
    link: 'https://github.com/Bheki0987/student-study-planner-web-app',
  },
  {
    id: 2,
    title: 'Smart Resume Generator',
    category: 'AI & Productivity',
    oneLineBlurb: 'AI-powered resume tailoring tool that analyzes your resume against a job description to generate optimized summaries, bullets, and cover letters.',
    description: 'AI-powered resume tailoring tool that analyzes your resume against a job description.',
    detailedDescription: 'Smart Resume Tailor is an AI-driven career assistant that leverages large language models (Gemini 2.5 Pro is noted) to analyze a candidate’s existing resume and generate tailored profile summaries, bullet points, cover letters, and interview prep materials for specific job descriptions. Built in TypeScript, it’s designed to accelerate high-quality application customization.',
    tech: ['TypeScript', 'Node.js', 'Google Gemini 2.5 Pro', 'HTML', 'CSS'],
    features: [
      'Resume vs. Job Description analysis with tailored output',
      'Generated profile summaries, accomplishments, optimized bullet points',
      'Cover letter generation and interview question prep',
      'Preset templates and tone/style controls'
    ],
    metrics: 'Speeds up application tailoring; ideal for job seekers to increase match rates and save time.',
    tags: ['TypeScript', 'AI', 'NLP', 'Productivity', 'Resume', 'Career Tools'],

    repoUrl: 'https://github.com/Bheki0987/Smart-Resume-Generator',
    image: '/Smart_Resume_Generator_Logo_v2.jpg',
    link: 'https://github.com/Bheki0987/Smart-Resume-Generator',
  },
  {
    id: 3,
    title: 'Amanzi Ordering System',
    category: 'E-commerce & Logistics',
    oneLineBlurb: 'A water ordering and delivery system for university students with automated invoicing, analytics, and payment workflows.',
    description: 'A water ordering and delivery system for university students with automated invoicing and analytics.',
    detailedDescription: 'Amanzi Ordering System is a comprehensive ordering and logistics web application designed for NWU Mahikeng students to order drinking water with automated invoicing, delivery scheduling, analytics, and payment integration. The solution streamlines order intake, delivery routes, and billing for recurring student demand.',
    tech: ['JavaScript', 'CSS', 'Node.js', 'Payments'],
    features: [
      'Customer ordering flow and recurring orders',
      'Automated invoice generation and emailing',
      'Delivery scheduling and basic route/fulfillment manager',
      'Admin analytics and sales reporting'
    ],
    metrics: 'Simplifies ordering and billing for campus-level deliveries; reduces manual invoicing.',
    tags: ['E-commerce', 'Logistics', 'JavaScript', 'Invoicing', 'Payments', 'Delivery'],

    repoUrl: 'https://github.com/Bheki0987/Amanzi-Ordering-System',
    image: '/Amanzi_Ordering_System_Logo_v2.jpg',
    link: 'https://github.com/Bheki0987/Amanzi-Ordering-System',
  },
  {
    id: 4,
    title: 'Infinity Tech Expense Tracker',
    category: 'Finance Dashboard',
    oneLineBlurb: 'Corporate expense tracker implemented in Excel with CapEx/OpEx analysis, vendor concentration risk, and quarterly trend visuals.',
    description: 'Corporate expense tracker with CapEx/OpEx analysis and vendor risk visuals.',
    detailedDescription: 'An Excel-based Corporate Expense Tracker focused on financial governance: CapEx vs. OpEx classification, vendor concentration risk, and quarterly trend analysis to support finance decision-making. Designed as a business Excel tool for finance teams and analysts.',
    tech: ['Excel', 'VBA', 'Financial Modeling', 'Dashboards'],
    features: [
      'CapEx vs OpEx analysis with pivot tables',
      'Vendor concentration and risk scoring',
      'Quarterly trend visualizations (charts)',
      'Downloadable templates for month-end reporting'
    ],
    metrics: 'Helps finance teams identify vendor concentration risk and visualize CapEx vs OpEx allocation.',
    tags: ['Finance', 'Excel', 'Dashboards', 'Analysis', 'CapEx', 'OpEx'],

    repoUrl: 'https://github.com/Bheki0987/Infinity-Tech-Expense-Tracker',
    image: '/Infinity_Tech_Logo_v2.jpg',
    link: 'https://github.com/Bheki0987/Infinity-Tech-Expense-Tracker',
  },
  {
    id: 5,
    title: 'Metroville Financial Dashboard',
    category: 'Public Sector Analytics',
    oneLineBlurb: 'Strategic municipal financial dashboard to monitor budget variance, revenue collection, and debt trends for executive stakeholders.',
    description: 'Strategic municipal financial dashboard to monitor budget variance, revenue collection, and debt trends.',
    detailedDescription: 'A financial analytics dashboard built to monitor municipal fiscal health. The dashboard focuses on budget variance analysis, revenue collection efficiency, debt tracking, and KPI reporting for executive decision-making. Use it to spot revenue shortfalls, monitor collection efficiency, and visualize budget vs. actual.',
    tech: ['Tableau', 'PowerBI', 'SQL', 'Analytics'],
    features: [
      'Budget vs. actual variance analysis',
      'Revenue collection KPIs and timeliness metrics',
      'Debt trend visualization and sustainability indicators',
      'Drill-downs to departments and revenue streams'
    ],
    metrics: 'Helps municipalities maintain fiscal oversight, detect underperforming revenue streams, and inform budget adjustments.',
    tags: ['Government', 'Municipal', 'Finance', 'Dashboard', 'BI', 'Budgeting'],

    repoUrl: 'https://github.com/Bheki0987/Metroville-Municipal-Financial-Performance-Dashboard',
    image: '/Municipal_Financial_Dashboard_Logo_v2.jpg',
    link: 'https://github.com/Bheki0987/Metroville-Municipal-Financial-Performance-Dashboard',
  },
  {
    id: 6,
    title: 'RFM Customer Analysis',
    category: 'Data Science',
    oneLineBlurb: 'RFM analysis and CLV segmentation on 500k+ transactions to surface “Champions” and “At-Risk” customers with a Python-to-Tableau workflow.',
    description: 'RFM analysis and CLV segmentation on 500k+ transactions to surface “Champions” and “At-Risk” customers.',
    detailedDescription: 'A data science project using RFM (Recency, Frequency, Monetary) modeling to segment customers and estimate Customer Lifetime Value (CLV). The workflow includes data cleaning, RFM scoring, clustering/segmentation, and exporting summary tables for visualization in Tableau. Built and documented in Jupyter notebooks.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Tableau', 'Jupyter'],
    features: [
      'RFM scoring and labeling (Champions, Loyal, At-Risk, etc.)',
      'CLV estimation and cohort trends',
      'Export-ready outputs to Tableau for dashboarding',
      'Reproducible notebooks with EDA and modeling'
    ],
    metrics: 'Demonstrates segmentation on >500k transactions to identify high-value customers and churn risk.',
    tags: ['Data Science', 'Python', 'RFM', 'CLV', 'Customer Analytics', 'Jupyter', 'Tableau'],

    repoUrl: 'https://github.com/Bheki0987/RFM-Customer-Lifetime-Value-Analysis-',
    image: '/RFM_Customer_Analysis_Logo_v2.jpg',
    link: 'https://github.com/Bheki0987/RFM-Customer-Lifetime-Value-Analysis-',
  },
  {
    id: 7,
    title: 'Street Smart Digital Permit',
    category: 'Business Analysis',
    oneLineBlurb: 'Business-analysis portfolio case study designing a digital permit system for informal traders with full SDLC artifacts.',
    description: 'Business-analysis portfolio case study designing a digital permit system for informal traders.',
    detailedDescription: 'A business analysis case study that designs a digital permit system for informal traders. It includes BRD, SRS, ERD, process flows, acceptance criteria, and UAT strategies. The deliverables demonstrate end-to-end product thinking and system design across the software development lifecycle.',
    tech: ['BRD', 'SRS', 'UAT', 'Process Mapping', 'Figma'],
    features: [
      'Complete SDLC artifacts: BRD, SRS, ERD, process flows',
      'UAT scenarios and acceptance criteria for regulator and stakeholder sign-off',
      'UX wireframes and role-based access/process flows'
    ],
    metrics: 'Useful as a portfolio piece to show BA skills: stakeholder mapping, requirements, process design, and test planning.',
    tags: ['Business Analysis', 'SDLC', 'BRD', 'SRS', 'ERD', 'UX', 'UAT'],

    repoUrl: 'https://github.com/Bheki0987/Street-Smart-Digital-Permit-System',
    image: '/Street_Smart_Logo_v2.jpg',
    link: 'https://github.com/Bheki0987/Street-Smart-Digital-Permit-System',
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 1,
    title: 'Foundations of Data Science',
    issuer: 'Coursera',
    date: '2025',
    image: '/certifications/Foundations_Data_Science_Certificate.png',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/7FK5UPJNSZOL',
    description: 'A comprehensive introduction to the data science field, covering the data science lifecycle, tools, and methodologies. Learned how to ask the right questions, obtain data, and prepare it for analysis.',
    skills: ['Data Science Lifecycle', 'Data Ethics', 'Problem Solving', 'Data Strategy']
  },
  {
    id: 2,
    title: 'Get Started with Python',
    issuer: 'Coursera',
    date: '2025',
    image: '/certifications/Get_Started_Python_Certificate.png',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/KREJLT1RODR7',
    description: 'Foundation course for Python programming. Covers syntax, data structures, control flow, functions, and working with external libraries for data tasks.',
    skills: ['Python', 'Functions', 'Control Flow', 'Data Structures']
  },
  {
    id: 3,
    title: 'The Power of Statistics',
    issuer: 'Coursera',
    date: '2025',
    image: '/certifications/Power_of_Statistics_Certificate.png',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/67ZO16YYA40K',
    description: 'Deep dive into statistical concepts crucial for data analysis. Topics include probability, sampling distributions, hypothesis testing, and confidence intervals.',
    skills: ['Statistics', 'Hypothesis Testing', 'Probability', 'Distribution Analysis']
  },
  {
    id: 4,
    title: 'Go Beyond the Numbers: Translate Data into Insights',
    issuer: 'Coursera',
    date: '2025',
    image: '/certifications/Go_Beyond_Numbers_Certificate.png',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/715LFMTPTVYL',
    description: 'Focused on exploratory data analysis (EDA), data visualization, and effective communication of insights. Learned to turn raw data into compelling narratives.',
    skills: ['Data Visualization', 'Storytelling', 'Tableau', 'EDA']
  },
  {
    id: 5,
    title: 'Oracle Analytics Cloud 2025 Certified Professional',
    issuer: 'Oracle University',
    date: '2025',
    image: '/certifications/Oracle_Analytics_Certificate.png',
    credentialUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D045420F444F7B33837A073CF249BD2E6E621C0F374E6879DD6FEE638A7C1B02',
    description: 'Professional certification demonstrating expertise in Oracle Analytics Cloud. Validates skills in data preparation, modeling, visualization, and dashboarding within the Oracle ecosystem.',
    skills: ['Oracle Analytics Cloud', 'Data Modeling', 'Business Intelligence', 'Dashboarding']
  },
  {
    id: 6,
    title: 'Agentic Data & Analytics Bootcamp',
    issuer: 'Ascend.IO',
    date: '2026',
    image: '/certifications/Agentic_Data_Analytics_Bootcamp.png',
    credentialUrl: 'https://credsverse.com/credentials/465293e1-1b84-47dd-a29e-680ecf2ddabb?preview=2',
    description: 'Advanced bootcamp focused on building autonomous data pipelines and agentic workflows. Covered data engineering best practices, automation, and AI integration in data processes.',
    skills: ['Data Engineering', 'Agentic Workflows', 'Pipeline Automation', 'Ascend.io']
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 1,
    title: 'NASA Space Apps Challenge',
    organization: 'Mahikeng Digital Innovation Hub',
    date: 'Oct 2025',
    type: 'Hackathons',
    description: 'Developed a climate analysis and health optimization system leveraging NASA ECOSTRESS and LANDSAT datasets.',
    detailedDescription: 'Participated in the global NASA Space Apps Challenge, developing a "Climate & Health Urban Twin" solution. Our team utilized satellite data (ECOSTRESS, LANDSAT) to model urban heat islands and their correlation with public health data. The solution aims to assist urban planners in identifying high-risk zones and optimizing green infrastructure planning.',
    features: [
      'Analyzed satellite imagery for thermal mapping',
      'Correlated temperature data with health risk factors',
      'Proposed data-driven urban planning interventions',
      'Collaborated in a cross-functional team under time pressure'
    ],
    tech: ['NASA Data', 'Climate Analysis', 'Urban Planning'],
    image: '/certificate_bheki_2025__n_a_s_a__space__apps__challenge.png',
  },
  {
    id: 2,
    title: 'SkillSwap (Microsoft AI Hackathon)',
    organization: 'Microsoft',
    date: 'June 2025',
    type: 'Hackathons',
    description: 'Developed "SkillSwap", a community-driven skill exchange platform enabling moneyless service trading.',
    detailedDescription: 'Developed "SkillSwap", a community-driven skill exchange platform enabling moneyless service trading. Built a functional MVP featuring a peer-to-peer skill-matching system, trust verification protocols, and AI-assisted discovery, all wrapped in a modern, responsive UI. This project addressed the challenge of accessible education and service exchange in resource-constrained communities.',
    features: [
      'Peer-to-peer skill matching algorithm',
      'AI-powered recommendations for skill exchanges',
      'Reputation and trust verification system',
      'Responsive MVP built with modern web technologies'
    ],
    tech: ['Artificial Intelligence', 'Social Good', 'Web Development', 'Skill Matching'],
    image: '/Microsoft AI Skill Challenge Certificate.jpeg'
  },
  {
    id: 4,
    title: 'Data Analytics Job Simulation',
    organization: 'Tata Group (Forage)',
    date: 'Sep 2025',
    type: 'Job Simulation',
    description: 'Conducted exploratory data analysis (EDA) using GenAI tools to assess data quality and proposed a predictive modeling framework.',
    detailedDescription: 'Completed a job simulation involving an analysis of online retail data for the Tata Group. The task required cleaning complex datasets, performing exploratory data analysis (EDA) to uncover seasonal trends, and presenting findings to executive stakeholders. Also conceptualized a predictive modeling framework to anticipate demand.',
    features: [
      'Data cleaning and quality assessment',
      'Exploratory Data Analysis (EDA) on retail datasets',
      'Visualizing revenue trends and customer behavior',
      'Presenting strategic insights to senior management'
    ],
    tech: ['EDA', 'Predictive Modeling', 'GenAI'],
    image: '/TATA Simulation Screenshot.png',
    pdfUrl: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_TrcpsSrxwD2RtK66m_1758348819710_completion_certificate.pdf'
  },
  {
    id: 6,
    title: 'SATNAC 2025 Industry Solutions Challenge',
    organization: 'SATNAC',
    date: '2025',
    type: 'Hackathons',
    description: 'Developed a CapEx (Capital Expenditure) Dashboard for a South African telecommunications company.',
    detailedDescription: 'Developed a Capital Expenditure (CapEx) Dashboard for a major telecommunications provider. The solution helps managers track and optimize infrastructure investments across regions. Key features include ROI forecasting, regional spending analytics, and AI-powered insights for strategic decision-making.',
    features: [
      'Interactive dashboard for CapEx tracking',
      'ROI forecasting models',
      'Regional infrastructure spending map',
      'AI-driven investment recommendations'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Lovable AI', 'Recharts'],
    image: '/SATNAC_2025_Certificate.png',
    demoUrl: 'https://teleoptima-capitol-insight.lovable.app'
  },
  {
    id: 5,
    title: 'Data Analytics Job Simulation',
    organization: 'Deloitte Australia (Forage)',
    date: 'July 2025',
    type: 'Job Simulation',
    description: 'Completed forensic technology simulation. Created data dashboards using Tableau and used Excel to classify data.',
    detailedDescription: 'Participated in a forensic technology job simulation for Deloitte. The project involved analyzing transactional data to detect anomalies indicative of fraud. utilized Excel for initial data classification and Tableau to build interactive dashboards that highlight suspicious patterns for audit teams.',
    features: [
      'Forensic data analysis for fraud detection',
      'Data classification and anomaly detection in Excel',
      'Interactive Tableau dashboards for auditors',
      'Business communication of forensic findings'
    ],
    tech: ['Tableau', 'Forensic Analysis', 'Excel'],
    image: '/DELOITTE Simulation Screenshot.png',
    pdfUrl: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_TrcpsSrxwD2RtK66m_1751489084169_completion_certificate.pdf'
  }
];

// Re-purposed to strictly be Education
export const TIMELINE: Experience[] = [
  {
    id: 1,
    role: 'Bachelor of Commerce in Information Systems (NQF L7)',
    company: 'North-West University',
    date: 'Completed 2025',
    description: 'Specialized in Data Analytics and Business Intelligence. Final year completed.',
    modules: ['Business Intelligence', 'Statistics', 'Systems Analysis & Design', 'Database Systems', 'Project Management', 'IS Security', 'Web Programming', 'Emerging Technologies', 'Business Management'],
    type: 'Education',
  },
  {
    id: 2,
    role: 'National Senior Certificate (NQF L5)',
    company: 'Mashishing Secondary School',
    date: 'Completed 2020',
    subjects: ['Mathematical Literacy', 'Computer Application Technology', 'Geography', 'Agricultural Sciences'],
    type: 'Education',
    description: '',
  },
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: 1,
    title: 'Milestone Unlocked: Graduate 🎓',
    excerpt: 'I’m grateful to share that I have officially completed my Bachelor of Commerce in Information Systems at North-West University.',
    date: 'Feb 03, 2026',
    content: `
I’m grateful to share that I have officially completed my Bachelor of Commerce in Information Systems at North-West University 🎓.

This journey challenged me in ways that went beyond academics — it strengthened my problem-solving skills, discipline, and ability to keep going even when things were uncertain. 

This marks the close of one chapter and the start of the next steps. 

Looking forward to what’s ahead.`,
    tags: ['Graduation', 'Growth', 'BCom', 'InformationSystems', 'Milestone'],
    image: '/blog/graduation_letter.png'
  },
  {
    id: 2,
    title: 'Building Your First Agentic Data Pipeline',
    excerpt: 'How I used Ascend.io to build an end-to-end carbon optimization pipeline that predicts the cleanest time windows for operations.',
    date: 'Jan 30, 2026',
    content: `
Just wrapped up the Agentic Data & Analytics Bootcamp and built my first end-to-end agentic data pipeline with Ascend.io.

This project combines carbon intensity data + weather forecasts to predict the cleanest time windows to run resource-intensive operations like batch jobs and analytics workloads.

What it does (at a glance):
- Ingests real-time carbon & weather data
- Analyzes historical patterns to predict low-carbon windows
- Recommends optimal operation schedules for the next 7 days
- Automates monitoring, failure analysis, and reporting

Why it matters:
- Up to 48% reduction in carbon emissions through smarter scheduling
- Zero infrastructure changes — just better data-driven decisions
- Demonstrates how agentic workflows can improve efficiency, sustainability, and reliability across the DataOps lifecycle

Big takeaway: Sustainability is a data problem — and agents make it practical to solve at scale.`,
    tags: ['AgenticDataEngineering', 'DataEngineering', 'Sustainability', 'GreenTech'],
    image: '/blog/agentic-pipeline/1.png',
    gallery: [
      '/blog/agentic-pipeline/2.png',
      '/blog/agentic-pipeline/3.png',
      '/blog/agentic-pipeline/4.png',
      '/blog/agentic-pipeline/5.png'
    ]
  },
  {
    id: 13,
    title: 'Introduction to Analytics Engineering',
    excerpt: 'Always good to take time to explore new areas in the data space and understand how different roles and tools connect across the analytics lifecycle.',
    date: 'Jan 22, 2026',
    content: `
Just finished the course “Introduction to Analytics Engineering”

Always good to take time to explore new areas in the data space and understand how different roles and tools connect across the analytics lifecycle.

Check it out: LinkedIn Learning Course (https://lnkd.in/dHAjTXx6)`,
    tags: ['DataEngineering', 'Learning', 'AnalyticsEngineering', 'DataAnalytics', 'ProfessionalDevelopment'],
    image: '/blog/introduction-to-analytics-engineering.png'
  },
  {
    id: 3,
    title: 'Monday Motivation: Discipline Over Comfort',
    excerpt: 'Monday is a reminder that progress doesn’t come from big moments, but from small decisions made consistently.',
    date: 'Jan 19, 2026',
    content: `
    Monday is a reminder that progress doesn’t come from big moments, but from small decisions made consistently. Showing up. Staying focused. Doing the work even when no one is watching.

    I’m choosing discipline over comfort, learning over shortcuts, and long-term growth over quick wins. Every week is another opportunity to sharpen skills, challenge thinking, and move a little closer to the person I’m becoming.

    New week. Same commitment.`,
    tags: ['Motivation', 'Discipline', 'Growth', 'Mindset', 'ProfessionalDevelopment'],
    image: '/blog/monday-motivation.png'
  },
  {
    id: 4,
    title: 'Grateful for the Week: Reflection & Faith',
    excerpt: 'As this week comes to an end, I’m taking a moment to reflect and give thanks for guidance, protection, and provision.',
    date: 'Jan 11, 2026',
    content: `
    Grateful for the week 🙏

    As this week comes to an end, I’m taking a moment to reflect and give thanks to the Lord for His guidance, protection, and provision.

    For the strength to keep going, the lessons learned, the quiet breakthroughs, and even the challenges that shaped me — I’m truly grateful. Not every win is loud, but every step forward matters.

    Ending the week with a thankful heart and renewed faith for what lies ahead.

    Wishing everyone a peaceful and blessed Sunday.`,
    tags: ['Gratitude', 'Faith', 'Reflection', 'Mindset', 'PersonalGrowth'],
    image: '/blog/grateful-sunday.png'
  },
  {
    id: 5,
    title: 'From Brief to Prototype: Rapid Wireframing with Balsamiq',
    excerpt: 'I learned how to bridge the gap between abstract requirements and tangible product solutions.',
    date: 'Jan 5, 2026',
    content: `
From Brief to Prototype:

I’m excited to share that I’ve just completed the Rapid Wireframing with Balsamiq Course on YouTube.

This wasn't just about learning a tool; it was a deep dive into the User-Centered Design (UCD) process. I learned how to bridge the gap between abstract requirements and tangible product solutions.

My Journey & Key Takeaways:

- The "Fail Fast" Mindset: I learned why starting with Low-Fidelity sketches (thumbnails) is crucial. It allows for exploring multiple layout iterations quickly without getting attached to a specific design too early.
- Context is King: We worked through a real world case study (a Kiosk App for a Food Hall), ensuring every design decision—from button size to menu layout—was driven by a clear Design Brief and specific user context.
- From Sketch to Structure: I practiced taking rough "sharpie-style" concepts and refining them into Mid-Fidelity wireframes, ensuring proper hierarchy, alignment, and realistic content flow.
- Tool Mastery: I’ve gained proficiency in Balsamiq Wireframes, using features like Quick Draw, Symbols, and Linking to create interactive prototypes that communicate ideas clearly to stakeholders.

A huge thank you to Billy Carlson and the Balsamiq team for such a practical, hands-on resource. I'm ready to apply these rapid prototyping skills as a Business Analyst to build better user experiences.

Check it out: Rapid Wireframing Course (https://lnkd.in/dFF3kpc4)`,
    tags: ['ProductDesign', 'Wireframing', 'UX', 'Balsamiq', 'UserExperience', 'RapidPrototyping', 'Learning', 'Growth', 'BusinessAnalysis'],
    image: '/blog/balsamiq-course.png'
  },
  {
    id: 6,
    title: 'Banking Database Design for Analytics & Decision Support',
    excerpt: 'I recently completed a banking database and analytics design project for a fictional institution, Ubuntu National Bank (UNB).',
    date: 'Dec 2025',
    content: `
🏦 Banking Database Design for Analytics & Decision Support

I recently completed a banking database and analytics design project for a fictional institution, Ubuntu National Bank (UNB).

The problem I set out to solve:
- In real financial institutions, analytics teams often need to design and validate data models and analytics logic before production data is available.
- The challenge is ensuring the database is structurally sound, aligned to business/regulatory requirements, and ready for executive reporting from day one.

What the project includes:
- Business requirements translated into banking data entities and rules.
- A fully normalized MySQL physical schema (customers, accounts, transactions, loans).
- Primary and foreign key constraints enforcing real-world relationships.
- Data quality and reconciliation SQL logic for financial accuracy.
- Analytical views and executive-level metrics designed for decision support.

Tools used:
- MySQL for database implementation
- SQL for schema design, constraints, and analytics logic
- MySQL Workbench for development and modeling
- AI (ChatGPT) used for logic review and documentation clarity

Key Learnings:
- How Banks and Finance sector operates.
- Real analytics work starts before dashboards and datasets.
- Good SQL is about business logic, not just syntax.
- Clear documentation matters as much as queries.

📂 Project available on GitHub: https://lnkd.in/d6UGhYNv`,
    tags: ['SQL', 'MySQL', 'DatabaseDesign', 'DataAnalytics', 'Banking', 'AnalyticsEngineering', 'BusinessAnalytics'],
    image: '/blog/banking-db/schema.png',
    gallery: [
      '/blog/banking-db/schema.png',
      '/blog/banking-db/quality-checks.png',
      '/blog/banking-db/output.png',
      '/blog/banking-db/views.png',
      '/blog/banking-db/executive.png'
    ]
  },
  {
    id: 7,
    title: 'The Data Analytics Life Cycle: From Problem to Deployment',
    excerpt: 'Every profession has a life cycle — just like life itself. By building projects and revisiting this structure, I’ve been able to identify exactly where I was lacking.',
    date: 'Dec 2025',
    content: `
Every profession has a life cycle — just like life itself.

In many of my early projects, I didn’t follow this life cycle fully — and that’s part of the learning process.
By building projects and revisiting this structure, I’ve been able to identify exactly where I was lacking, whether in business framing, data preparation, or storytelling. That’s the power of the life cycle it doesn’t just help you build solutions — it helps you understand yourself as an analyst.

The life cycle looks like this in cross-industrial spaces:

1️⃣ Business Understanding
Example: A bank wants to reduce customer churn. The real question is not “What does the data say?” but “Why are customers leaving, and how can we prevent it?” Success might be defined as reducing churn by 5% over six months.

2️⃣ Data Understanding
Example: You explore customer transaction history, service usage, and complaint logs. You assess data completeness and relevance — discovering outdated records or missing key fields.

3️⃣ Data Preparation (Cleaning & Transformation)
Example: You clean missing income values, standardize date formats, and create new features like average monthly spend. This step is often where most of the real work happens.

4️⃣ Exploratory Data Analysis (EDA)
Example: You discover that customers with frequent service complaints are more likely to churn. Visualizations reveal churn spikes after fee increases. This stage helps you ask better questions.

5️⃣ Modeling / Analysis
Example: You apply statistical analysis or a classification model to identify churn drivers. The goal is clarity: Which factors most influence customer churn?

6️⃣ Evaluation & Validation
Example: You test the model on unseen data and validate results with business teams. If "income" is a strong predictor, does that make business sense?

7️⃣ Insights, Storytelling & Visualization
Example: Instead of technical metrics, you explain: “Customers who log more than 3 complaints in 2 months are 2x more likely to churn.”

8️⃣ Deployment & Monitoring
Example: The business launches a retention campaign. You monitor churn rates and update the analysis as behavior changes.

Analytics doesn’t end — it loops back.`,
    tags: ['DataAnalytics', 'DataAnalyticsLifeCycle', 'BusinessAnalytics', 'Methodology', 'Learning'],
    image: '/blog/data-analytics-lifecycle.png'
  },
  {
    id: 8,
    title: 'Smart Resume Tailor: AI-Powered Career Assistant',
    excerpt: 'Job hunting is a full-time job. I built Smart Resume Tailor to analyze my resume against job descriptions and generate tailored content in seconds.',
    date: 'Dec 2025',
    content: `
🤦‍♂️ Job hunting is a full-time job in itself. Like many of you, I found myself spending hours on every single application—tweaking my profile summary, realigning my skills, and trying to match the tone of the job description. It was exhausting and repetitive.

So I decided to develop this straight forward, easy to use web app.

Introducing Smart Resume Tailor—a web application I built to analyze my resume against job descriptions and generate tailored content in seconds.

How it works:
- Upload: It parses my existing resume (PDF/Image) directly.
- Context: I paste the target Job Description.
- Analyze: It extracts keywords, identifies missing skills, and suggests improvements.
- Tailor: It rewrites my professional summary and highlights relevant experiences to match the role.

Key Features:
- 📄 Resume Parsing: Extracts text from PDFs and images.
- 🔑 Keyword Matching: Compares resume skills vs. JD requirements.
- ✍️ AI Suggestions: Generates tailored summaries and bullet points.
- 🚀 Efficiency: Reduces application time from ~30 mins to <5 mins.

Tech Stack:
- Frontend: React (Vite), Tailwind CSS
- Backend: Python (Flask)
- AI/NLP: OpenAI API (GPT-4) for context analysis
- OCR: Tesseract / PyPDF2 for parsing

This tool didn't just save me time; it helped me understand how to better position my skills for different roles.

Check it out on GitHub: https://github.com/BhekiMogola/smart-resume-tailor`,
    tags: ['ReactJS', 'TypeScript', 'GoogleCloud', 'GeminiAI', 'ArtificialIntelligence', 'WebDevelopment', 'JobSearch', 'OpenSource'],
    image: '/blog/smart-resume-tailor/landing.png',
    gallery: [
      '/blog/smart-resume-tailor/empty-state.png',
      '/blog/smart-resume-tailor/result.png'
    ]
  },
  {
    id: 9,
    title: 'Grateful. Proud. Motivated. A Look Back at My Year of Growth 👏',
    excerpt: 'As this year comes to an end, I just want to take a moment to appreciate how far I’ve come — even in moments when it felt like I wasn’t doing enough.',
    date: 'Dec 2025',
    content: `
Grateful. Proud. Motivated. A Look Back at My Year of Growth 👏

As this year comes to an end, I just want to take a moment to appreciate how far I’ve come — even in moments when it felt like I wasn’t doing enough.
Looking back, I actually achieved more than I ever expected:

Education & Milestones
• Completed my BCom in Information Systems (awaiting official approval)
• Earned multiple certifications in Data Analytics, Python, Power BI, AI, Business Analysis, and Oracle Analytics Cloud
• Completed several Google Advanced Data Analytics courses and projects, including statistics, EDA, Python programming, and real-world case studies

Projects & Job Simulations
• Built dashboards, models, and analytical insights across multiple Python, Tableau, Excel, and Power BI projects
• Completed Deloitte, Tata, and other professional job simulations
• Developed full analysis projects such as Customer Segmentation, Forecasting, A/B Testing, NYC Taxi EDA, Inventory Optimization, HR Analytics, and more

Hackathons
• Participated in the Microsoft AI Skills Hackathon, building SkillSwap – a community skill-exchange platform
• Joined the NASA Space Apps Challenge, creating Urban Twin – a climate and health optimization system using NASA datasets

Capstone Project
• Co-developed the Amanzi Ordering System, a MERN-stack web app designed to streamline water delivery for students on campus

And through all of this, I’ve learned something important:
I may not know everything, but I know enough to keep growing, building, and moving forward.

I’m grateful for the progress I’ve made and optimistic about what lies ahead for me as a data analyst and business analyst.
Here’s to continuous learning, new opportunities, and even bigger achievements next year.`,
    tags: ['Reflection', 'Growth', 'YearInReview', 'Motivation', 'DataAnalytics', 'Achievements'],
    image: '/blog/year-end-reflection.png'
  },
  {
    id: 10,
    title: 'NASA Space Apps Challenge: Data Science for Urban Health',
    excerpt: 'My teammate Ayanda Mdoko and I developed a climate analysis and health optimization system leveraging NASA datasets.',
    date: 'Oct 2025',
    content: `
This past weekend, my teammate Ayanda Mdoko and I had the amazing opportunity to participate in the NASA Space Apps Challenge hosted at the Mahikeng Digital Innovation Hub.

We developed a climate analysis and health optimization system that leverages NASA datasets such as ECOSTRESS and LANDSAT to analyze climate patterns and predict optimal health strategies for both cities and humans.

Our goal was to support urban planners in making data-driven, informed decisions to build healthier and more sustainable urban environments. Although we didn’t win this time, the experience was incredibly valuable — especially since it was my first physical hackathon after participating virtually in the Microsoft AI Hackathon.

A huge congratulations to the winning team!
We learned, networked, and grew — and we’re already inspired to come back even stronger next time. 💪`,
    tags: ['NASASpaceApps', 'Hackathon', 'DataScience', 'UrbanPlanning', 'ClimateChange', 'Innovation', 'Teamwork', 'AI'],
    image: '/blog/nasa-space-apps/team.png',
    gallery: [
      '/blog/nasa-space-apps/team.png',
      '/blog/nasa-space-apps/working.jpg',
      '/blog/nasa-space-apps/team_pose.png'
    ]
  },
  {
    id: 11,
    title: 'Data Analysis vs Data Analytics vs Data Science vs Business Analysis',
    excerpt: 'What’s the difference—and how do they all connect? Here’s a simple breakdown of these overlapping roles.',
    date: 'Sep 2025',
    content: `
📌 Data Analysis vs Data Analytics vs Data Science vs Business Analysis
What’s the difference—and how do they all connect?🤷🏾🤔

This question pops up a lot, especially for those of us learning the ropes in the data profession.

👇Here’s a simple breakdown that helped me understand how each one fits into the bigger picture:

1. Data Analysis – “What happened?”
Focuses on examining historical data, spotting patterns, and finding insights.
> Example: Analyzing customer sales to identify peak shopping periods.
> Tools: Excel, SQL, Tableau, Power BI

2. Data Analytics – The entire process of working with data
It’s not a job title, but the full cycle: collecting, cleaning, analyzing, interpreting, and communicating data.
> Example: Using customer feedback and sales data to improve a product.
> Skills: Data wrangling, visualization, storytelling

3. Data Science – “What will happen next?”
Uses advanced techniques like machine learning, statistical modeling, and automation to predict outcomes.
> Example: Predicting customer churn or building a recommendation engine.
> Tools: Python, R, scikit-learn, TensorFlow

4. Business Analysis – “What should the business do?”
More focused on understanding business needs, communicating with stakeholders, and recommending solutions based on both data and context.
> Example: Recommending changes to improve internal workflows after stakeholder interviews.
> Skills: Communication, requirement gathering, stakeholder management

🔗 How they all connect in the real world:
These roles often overlap—and that’s a good thing.

✅ Data Analysts turn data into insight
✅ Data Scientists turn data into predictions
✅ Business Analysts turn insight into action
✅ Data Analytics ties the entire workflow together

💬 Have you worked in or explored more than one of these roles?
Let’s discuss the overlap and how they are applied in organizations to enhance efficient decision-making.`,
    tags: ['DataAnalytics', 'BusinessAnalysis', 'DataScience', 'DataAnalysis', 'LearningByDoing', 'SoftSkillsMatter', 'ExcelToPython']
  },
  {
    id: 12,
    title: 'Value of Real-World Application in Data Analytics',
    excerpt: 'You can take 100 courses... but if you never apply the skills, they stay theoretical. That’s why I’ve been focusing on real-world projects.',
    date: 'Sep 2025',
    content: `
📊🤔One thing I’m learning as I grow in data analytics is this:

You can take 100 courses... but if you never apply the skills, they stay theoretical.
That’s why I’ve been focusing on real-world projects — not just to practice tools like Excel, Python, and Tableau, but to understand how data is actually used in business.
Every project helps me:
-Get comfortable working with messy, real data
-Explore how organizations operate
-Simulate the process of solving real problems with data

But what I’m also learning is this:
- Technical skills are only one part of the job — communication is just as important.
In the data world, we spend a lot of time:
- Listening to stakeholders;
- Gathering requirements;
- Understanding what the business really needs;
- Presenting insights in a way that drives action

That’s why I’m practicing not just analysis, but also:
- Active listening
- Clear presentation (of which i am still improving on it)
- Collaborating and asking the right questions

🎯 Learning data analytics, my advice is:

Build as many projects as you can.
The more you build, the more confident and business acumen you become.
We don’t need to be perfect to start. We just need to stay consistent and curious.`,
    tags: ['RealWorldProjects', 'LearningDataAnalytics', 'StudentToAnalyst', 'CommunicationSkills', 'SoftSkillsInTech', 'BusinessUnderstanding', 'GrowthJourney', 'LearningByDoing', 'Excel', 'Python', 'SQL', 'DataSkills']
  }
];
