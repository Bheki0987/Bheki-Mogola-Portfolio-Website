import React from 'react';
import { PROFILE_PIC } from '../constants';

const About: React.FC = () => (
    <section id="about" className="py-20 relative z-10 bg-black border-t border-neutral-900">
        <div className="max-w-5xl mx-auto px-6">
            <div className="bg-neutral-950 border border-neutral-800 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                <div className="w-48 h-48 shrink-0 overflow-hidden border border-white grayscale hover:grayscale-0 transition-all duration-500">
                    <img
                        src={PROFILE_PIC}
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                        
                        }}
                        alt="Bheki Mogola"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-4">Profile <span className="text-neutral-500">Overview</span></h2>
                    <p className="text-neutral-400 leading-relaxed mb-6 text-justify font-light">
                        <strong className="text-white">BCom in Information Systems graduate</strong> focused on Data Analytics and Business Intelligence.
                        I use <strong className="text-white">SQL</strong> and <strong className="text-white">Python</strong> for data cleaning, exploratory data analysis (EDA), and modelling,
                        and I translate data into clear insights through <strong className="text-white">Excel</strong> and dashboards in <strong className="text-white">Tableau. </strong>
                        I’m comfortable working with messy datasets, defining KPIs, and presenting findings in a way that supports data-driven decision-making.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        {['SQL', 'Python (Data Cleaning & EDA)', 'Modelling', 'Excel', 'Tableau', 'Power BI (Basic)'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-black border border-neutral-600 text-sm text-neutral-300 font-mono uppercase tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
