import React from 'react';
import { SKILLS_DATA } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 relative bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-white pl-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Skills Summary</h2>
          <p className="text-neutral-400 max-w-xl">
            Tools and technologies configured for analysis and development.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS_DATA.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="group relative bg-neutral-900/50 border border-neutral-800 p-6 hover:bg-neutral-800/80 transition-all duration-300 hover:border-neutral-600 rounded-sm overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <category.icon size={80} strokeWidth={1} />
              </div>

              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded bg-white/5 border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <category.icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-neutral-600 rounded-full shrink-0 group-hover:bg-blue-400 transition-colors"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
