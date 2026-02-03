import React from 'react';
import { X, Printer, Download, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { PROFILE_PIC, GITHUB_FALLBACK_IMG } from '../constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity no-print"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl h-[90vh] bg-neutral-900 rounded-lg shadow-2xl flex flex-col overflow-hidden border border-neutral-700">
        
        {/* Toolbar */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-800 bg-black no-print">
          <h3 className="text-lg font-bold text-neutral-200">Resume Preview</h3>
          <div className="flex gap-3">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-200 text-black rounded transition-colors text-sm font-bold"
            >
              <Printer size={16} /> Print / Save PDF
            </button>
            <button 
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content */}
        <div className="flex-1 overflow-y-auto bg-neutral-800/50 p-4 sm:p-8">
          
          {/* The Actual Resume Paper */}
          <div 
            id="resume-content" 
            className="mx-auto max-w-[210mm] min-h-[297mm] bg-white text-black shadow-xl p-[10mm] md:p-[15mm]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {/* Header */}
            <header className="flex flex-col md:flex-row items-center justify-between border-b-2 border-black pb-6 mb-6 gap-6">
              <div className="flex-1 text-center md:text-left order-2 md:order-1">
                <h1 className="text-4xl font-extrabold tracking-tight text-black mb-1 uppercase">Bheki Mogola</h1>
                <p className="text-lg font-medium text-neutral-600 italic mb-4">Data & Business Intelligence Analytics</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-sm font-medium text-neutral-700">
                  <div className="flex items-center gap-1">
                    <Phone size={14} /> 072 252 0766
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail size={14} /> bpmogola@gmail.com
                  </div>
                  <div className="flex items-center gap-1 hover:text-black transition-colors">
                    <Linkedin size={14} /> 
                    <a href="https://www.linkedin.com/in/bheki-mogola-8481122b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                  <div className="flex items-center gap-1 hover:text-black transition-colors">
                    <Github size={14} /> 
                    <a href="https://github.com/Bheki0987" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 w-32 h-32 shrink-0 overflow-hidden border border-black shadow-none grayscale">
                <img 
                  src={PROFILE_PIC} 
                  alt="Bheki Mogola" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = GITHUB_FALLBACK_IMG;
                  }} 
                />
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left Column (Smaller) */}
              <div className="md:col-span-4 space-y-6">
                
                <section>
                  <h2 className="text-lg font-bold border-b border-neutral-400 mb-3 uppercase tracking-wider">Education</h2>
                  <div className="mb-4">
                    <h3 className="font-bold">North-West University</h3>
                    <p className="text-sm italic">BCom in Information Systems (Final Year)</p>
                    <p className="text-sm text-neutral-600">Expected graduate - 2026</p>
                    <div className="text-xs text-neutral-600 leading-relaxed mt-1">
                      <span className="font-semibold">Key Modules:</span> Database Management Systems, Business Intelligence, Statistics, Foundational Math, OOP, Systems Analysis & Design.
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <h3 className="font-bold">Mashishing Secondary School</h3>
                    <p className="text-sm italic">Matric (Grade 12)</p>
                    <p className="text-sm text-neutral-600">Completed 2020</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-bold border-b border-neutral-400 mb-3 uppercase tracking-wider">Certifications</h2>
                  <ul className="text-sm space-y-1.5 list-disc pl-4 text-neutral-700">
                    <li>Get Started with Python</li>
                    <li>Foundations of Data Science</li>
                    <li>Translate Data into Insights</li>
                    <li>The Power of Statistics</li>
                    <li>Excel: Data Analysis</li>
                    <li>Master in-Demand Prof. Soft Skills</li>
                    <li>Master Microsoft PowerBI</li>
                    <li>OAC 2025 Certified Professional</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-bold border-b border-neutral-400 mb-3 uppercase tracking-wider">Technical Skills</h2>
                  <div className="text-sm space-y-3 text-neutral-700">
                    <div>
                      <span className="font-bold block text-black">Data Analysis & Viz:</span>
                      PowerBI, Tableau, Excel (PivotTables, Power Query, DAX).
                    </div>
                    <div>
                      <span className="font-bold block text-black">Programming:</span>
                      Python (Pandas, NumPy, Scikit-learn, Matplotlib).
                    </div>
                    <div>
                      <span className="font-bold block text-black">Web Development:</span>
                      React, Node.js, MongoDB, Express, Tailwind.
                    </div>
                    <div>
                      <span className="font-bold block text-black">BI Concepts:</span>
                      Forecasting, RFM segmentation, KPI reporting.
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-bold border-b border-neutral-400 mb-3 uppercase tracking-wider">Soft Skills</h2>
                  <ul className="text-sm space-y-1 list-disc pl-4 text-neutral-700">
                    <li>Critical thinking</li>
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Problem-Solving</li>
                    <li>Analytical</li>
                  </ul>
                </section>

              </div>

              {/* Right Column (Larger) */}
              <div className="md:col-span-8 space-y-6">
                
                <section>
                  <h2 className="text-lg font-bold border-b border-neutral-400 mb-3 uppercase tracking-wider">Professional Summary</h2>
                  <p className="text-sm leading-relaxed text-neutral-700 text-justify">
                    Analytical and detail-oriented Information Systems student specializing in Data and Business Analytics. Proficient in Python (Pandas, NumPy, Scikit-learn), SQL, Tableau, PowerBI, and Excel with experience in building forecasting models, performing customer segmentation, and developing interactive dashboards. Skilled at transforming raw datasets into actionable business insights that support strategic decision-making. Eager to apply technical expertise in real-world data analytics roles.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold border-b border-neutral-400 mb-3 uppercase tracking-wider">Projects</h2>
                  
                  <div className="mb-5">
                    <h3 className="font-bold text-base">Infinity Tech Expense Tracker</h3>
                    <p className="text-xs text-neutral-500 mb-1 italic">Tools: Excel (Pivot Tables, Slicers, Formulas)</p>
                    <ul className="text-sm list-disc pl-4 space-y-1 text-neutral-700">
                      <li>Analyzed R1.3M in total expenses, revealing a 49.7% CapEx / 47.3% OpEx split.</li>
                      <li>Identified high vendor concentration risk (3 vendors = 60% of spend).</li>
                      <li>Uncovered that Non-Essential spend (53%) outweighed Essential spend (47%).</li>
                      <li>Designed an interactive dashboard with dynamic KPI cards for financial planning.</li>
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h3 className="font-bold text-base">Inventory Optimization Dashboard</h3>
                    <p className="text-xs text-neutral-500 mb-1 italic">Tools: Microsoft Excel (PivotTables, Slicers, Conditional Formatting)</p>
                    <ul className="text-sm list-disc pl-4 space-y-1 text-neutral-700">
                      <li>Developed a KPI-driven dashboard for 1,000 products to monitor stock levels and value.</li>
                      <li>Identified that 19.7% of products required restocking, preventing potential stockouts.</li>
                      <li>Implemented automated logic columns for inventory status flags (Out of Stock, Low, In Stock).</li>
                      <li>Visualized category trends identifying Electronics as the highest value stock category.</li>
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h3 className="font-bold text-base">Amanzi Ordering System</h3>
                    <p className="text-xs text-neutral-500 mb-1 italic">Tools: MERN Stack (React, Node.js, MongoDB), Stripe, JWT</p>
                    <ul className="text-sm list-disc pl-4 space-y-1 text-neutral-700">
                      <li>Designed a comprehensive water delivery system for NWU Mahikeng Campus students.</li>
                      <li>Implemented secure JWT authentication with role-based access for Customers and Providers.</li>
                      <li>Features real-time order tracking, delivery slot selection, and invoice generation.</li>
                      <li>Developed analytics dashboards for providers to track revenue and order stats.</li>
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h3 className="font-bold text-base">Student Study Planner</h3>
                    <p className="text-xs text-neutral-500 mb-1 italic">Tools: Node.js, Express, MongoDB, Gemini AI, Fabric.js, Chart.js, YouTube API</p>
                    <ul className="text-sm list-disc pl-4 space-y-1 text-neutral-700">
                      <li>Developed a centralized academic platform featuring task management, Pomodoro timers, and note-taking.</li>
                      <li>Integrated Google Gemini AI for intelligent study assistance and YouTube Data API v3 for video learning.</li>
                      <li>Engineered collaborative study rooms with shared whiteboards (Fabric.js) and real-time communication.</li>
                      <li>Implemented visual progress tracking and grade calculations using Chart.js to monitor academic performance.</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-bold border-b border-neutral-400 mb-3 uppercase tracking-wider">Achievements</h2>
                  
                  <div className="mb-3">
                    <h3 className="font-bold text-sm">DELOITTE AUSTRALIA DATA ANALYTICS JOB SIMULATION</h3>
                    <p className="text-xs text-neutral-500 mb-1">Forage - July 2025</p>
                    <ul className="text-sm list-disc pl-4 space-y-1 text-neutral-700">
                      <li>Completed simulation involving data analysis and forensic technology.</li>
                      <li>Created a data dashboard using Tableau.</li>
                      <li>Used Excel to classify data and draw business conclusions.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm">TATA GROUP DATA ANALYTICS JOB SIMULATION</h3>
                    <p className="text-xs text-neutral-500 mb-1">Forage - September 2025</p>
                    <ul className="text-sm list-disc pl-4 space-y-1 text-neutral-700">
                      <li>Conducted exploratory data analysis (EDA) using GenAI tools to assess data quality.</li>
                      <li>Proposed initial no-code predictive modeling framework for delinquency risk.</li>
                    </ul>
                  </div>
                </section>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumeModal;