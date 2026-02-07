import React, { useState } from 'react';
import { ACHIEVEMENTS_DATA } from '../constants';
import { Achievement } from '../types';
import { Trophy, Code, Target, Briefcase, X, Eye, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import AchievementModal from './AchievementModal';

const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const hackathons = ACHIEVEMENTS_DATA.filter(item => item.type === 'Hackathons');
  const simulations = ACHIEVEMENTS_DATA.filter(item => item.type === 'Job Simulation');

  return (
    <section id="achievements" className="py-24 bg-black border-t border-neutral-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-900/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Hackathons Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-white pl-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Hackathons <span className="text-neutral-500">& Competitions</span></h2>
              <p className="text-neutral-400 max-w-xl">
                Practical application of skills in high-pressure environments and innovation challenges.
              </p>
            </motion.div>
            <div className="hidden md:flex gap-2">
              <div className="px-3 py-1 border border-neutral-800 rounded-full text-xs font-mono text-neutral-500 uppercase flex items-center gap-2">
                <Trophy size={12} /> Competitions
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hackathons.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedAchievement(item)}
                className="flex flex-col bg-neutral-950 border border-neutral-800 hover:border-white/50 transition-colors duration-300 group cursor-pointer"
              >
                {/* Image Header */}
                <div className="h-48 overflow-hidden relative border-b border-neutral-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border bg-black text-white border-white">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neutral-200">{item.title}</h3>
                      <p className="text-sm font-mono text-neutral-500">{item.organization}</p>
                    </div>
                    <span className="text-xs text-neutral-400 border border-neutral-800 px-2 py-1 bg-black">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex items-center text-sm text-neutral-500 group-hover:text-white transition-colors mt-auto pt-4 border-t border-neutral-900">
                    <span>View Project Details</span>
                    <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simulations Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-white pl-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Job <span className="text-neutral-500">Simulations</span></h2>
              <p className="text-neutral-400 max-w-xl">
                Virtual experience programs completing real-world tasks for top companies.
              </p>
            </motion.div>
            <div className="hidden md:flex gap-2">
              <div className="px-3 py-1 border border-neutral-800 rounded-full text-xs font-mono text-neutral-500 uppercase flex items-center gap-2">
                <Briefcase size={12} /> Professional Experience
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {simulations.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedAchievement(item)}
                className="flex flex-col bg-neutral-950 border border-neutral-800 hover:border-white/50 transition-colors duration-300 group cursor-pointer"
              >
                {/* Image Header */}
                <div className="h-48 overflow-hidden relative border-b border-neutral-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border bg-neutral-200 text-black border-neutral-400">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neutral-200">{item.title}</h3>
                      <p className="text-sm font-mono text-neutral-500">{item.organization}</p>
                    </div>
                    <span className="text-xs text-neutral-400 border border-neutral-800 px-2 py-1 bg-black">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="mt-auto pt-6 border-t border-neutral-900">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {item.tech?.slice(0, 3).map((t) => (
                          <span key={t} className="text-[10px] text-neutral-400 uppercase tracking-wider border border-neutral-800 px-2 py-1 bg-neutral-900/50">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-sm text-neutral-500 group-hover:text-white transition-colors">
                        <span className="hidden sm:inline">View Details</span>
                        <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement Modal */}
      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          isOpen={!!selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}
    </section>
  );
};

export default Achievements;