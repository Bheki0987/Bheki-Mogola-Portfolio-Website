import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<null | typeof PROJECTS[0]>(null);

  return (
    <section id="projects" className="py-24 relative bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-white pl-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Projects & Experience</h2>
          <p className="text-neutral-400 max-w-xl">
            A showcase of analytical reports, dashboards, and applications demonstrating data-driven solutions and practical experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-neutral-950 border border-neutral-800 hover:border-white transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden border-b border-neutral-800">
                {/* Grayscale overlay on images */}
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20 bg-black text-white text-xs font-mono px-3 py-1 border border-white">
                  {project.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <ArrowUpRight size={20} className="text-neutral-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                </div>

                <p className="text-neutral-400 text-sm mb-6 leading-relaxed flex-1">{project.oneLineBlurb}</p>

                <div className="mt-auto pt-6 border-t border-neutral-900">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-neutral-500 border border-neutral-800 px-2 py-1">
                        {tag}
                      </span>
                    ))}
                    {project.tags && project.tags.length > 3 && (
                      <span className="text-[10px] text-neutral-600 px-2 py-1">+ more</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;