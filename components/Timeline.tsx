import React from 'react';
import { TIMELINE } from '../constants';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Timeline: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-white pl-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Education <span className="text-neutral-500">History</span></h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 origin-top"
          ></motion.div>

          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >

                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-white z-10 transition-transform hover:scale-150 duration-300"></div>

                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-1/2 p-6 border border-neutral-800 bg-neutral-950 hover:border-neutral-600 transition-colors hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-white p-1 border border-neutral-700">
                      <GraduationCap size={16} />
                    </span>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 uppercase">{item.role}</h3>
                  <div className="text-neutral-500 text-sm font-medium mb-3">{item.company}</div>

                  {item.description && <p className="text-neutral-400 text-sm leading-relaxed mb-2">{item.description}</p>}

                  {/* Structured Details */}
                  <div className="space-y-3 mt-4">
                    {item.major && (
                      <div>
                        <span className="text-white font-semibold text-sm block mb-1">Major:</span>
                        <p className="text-neutral-400 text-sm">{item.major}</p>
                      </div>
                    )}

                    {item.modules && item.modules.length > 0 && (
                      <div>
                        <span className="text-white font-semibold text-sm block mb-1">Key Modules:</span>
                        <div className="flex flex-wrap gap-2">
                          {item.modules.map((module, i) => (
                            <span key={i} className="px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs rounded-sm">
                              {module}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.subjects && item.subjects.length > 0 && (
                      <div>
                        <span className="text-white font-semibold text-sm block mb-1">Subjects:</span>
                        <div className="flex flex-wrap gap-2">
                          {item.subjects.map((subject, i) => (
                            <span key={i} className="px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs rounded-sm">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;