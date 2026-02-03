import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, Terminal, Star, Layout, Zap, Activity } from 'lucide-react';

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-4xl bg-neutral-950 rounded-lg shadow-2xl flex flex-col border border-neutral-800 animate-in fade-in zoom-in-95 duration-200 lg:my-8">

                {/* Header - Sticky */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-4 px-6 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-md rounded-t-lg">
                    <h3 className="text-xl font-bold text-white truncate pr-4">{project.title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[85vh] p-6 space-y-8">

                    {/* Hero Section */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-md border border-neutral-800 group">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex flex-wrap gap-2 mb-2">
                                <span className="bg-blue-600/20 text-blue-400 text-xs font-bold px-2 py-1 rounded border border-blue-500/30 uppercase tracking-wide">
                                    {project.category}
                                </span>
                                {project.tags?.slice(0, 3).map(tag => (
                                    <span key={tag} className="bg-neutral-800 text-neutral-300 text-xs px-2 py-1 rounded border border-neutral-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-8">
                            {/* Description */}
                            <div>
                                <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                                    <Layout size={18} className="text-blue-400" />
                                    Overview
                                </h4>
                                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                                    {project.detailedDescription}
                                </p>
                            </div>

                            {/* Features */}
                            <div>
                                <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                                    <Star size={18} className="text-yellow-400" />
                                    Key Highlights
                                </h4>
                                <ul className="space-y-2">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-neutral-300 text-sm">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* How to Run */}
                            {project.howToRun && project.howToRun.length > 0 && (
                                <div>
                                    <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                                        <Terminal size={18} className="text-green-400" />
                                        Setup & Demo
                                    </h4>
                                    <div className="bg-neutral-900 border border-neutral-800 rounded-md p-4 font-mono text-xs md:text-sm text-neutral-400 overflow-x-auto">
                                        {project.howToRun.map((step, i) => (
                                            <div key={i} className="mb-1 last:mb-0">
                                                <span className="text-neutral-600 select-none mr-3">$</span>
                                                {step}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar info */}
                        <div className="space-y-6">
                            {/* Links */}
                            <div className="flex flex-col gap-3">
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold rounded hover:bg-neutral-200 transition-colors"
                                >
                                    <Github size={18} /> View Source
                                </a>
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-800 text-white font-bold rounded border border-neutral-700 hover:bg-neutral-700 transition-colors"
                                    >
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                )}
                            </div>

                            {/* Tech Stack */}
                            <div className="bg-neutral-900/50 p-4 rounded border border-neutral-800">
                                <h4 className="flex items-center gap-2 font-bold text-white mb-3 text-sm">
                                    <Zap size={16} className="text-purple-400" /> Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="bg-black border border-neutral-700 text-neutral-300 text-xs px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Metrics */}
                            {project.metrics && (
                                <div className="bg-blue-900/10 p-4 rounded border border-blue-800/30">
                                    <h4 className="flex items-center gap-2 font-bold text-blue-100 mb-2 text-sm">
                                        <Activity size={16} className="text-blue-400" /> Impact
                                    </h4>
                                    <p className="text-blue-200/80 text-xs leading-relaxed">
                                        {project.metrics}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
