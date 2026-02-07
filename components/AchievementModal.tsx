import React from 'react';
import { Achievement } from '../types';
import { X, ExternalLink, Calendar, Trophy, Briefcase, Zap, CheckCircle } from 'lucide-react';

interface AchievementModalProps {
    achievement: Achievement;
    isOpen: boolean;
    onClose: () => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({ achievement, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-4xl bg-neutral-950 rounded-lg shadow-2xl flex flex-col border border-neutral-800 animate-in fade-in zoom-in-95 duration-200">

                {/* Header - Sticky */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-4 px-6 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-md rounded-t-lg">
                    <h3 className="text-xl font-bold text-white truncate pr-4">{achievement.title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[85vh] p-6 space-y-8">

                    {/* Image Section */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-md border border-neutral-800 bg-neutral-900 group">
                        <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-full object-contain"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider border bg-black text-white border-white">
                                {achievement.type}
                            </span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-8">
                            {/* Description */}
                            <div>
                                <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                                    {achievement.type === 'Hackathons' ? (
                                        <Trophy size={18} className="text-yellow-400" />
                                    ) : (
                                        <Briefcase size={18} className="text-blue-400" />
                                    )}
                                    Overview
                                </h4>
                                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                                    {achievement.detailedDescription || achievement.description}
                                </p>
                            </div>

                            {/* Features / Outcomes */}
                            {achievement.features && achievement.features.length > 0 && (
                                <div>
                                    <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                                        <CheckCircle size={18} className="text-green-400" />
                                        Key Outcomes
                                    </h4>
                                    <ul className="space-y-2">
                                        {achievement.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-neutral-300 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Sidebar info */}
                        <div className="space-y-6">
                            {/* Meta Info */}
                            <div className="bg-neutral-900/50 p-4 rounded border border-neutral-800 space-y-4">
                                <div>
                                    <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Organization</span>
                                    <span className="text-white font-medium">{achievement.organization}</span>
                                </div>
                                <div>
                                    <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Date</span>
                                    <div className="flex items-center gap-2 text-white font-medium">
                                        <Calendar size={14} className="text-neutral-400" />
                                        {achievement.date}
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            {achievement.tech && achievement.tech.length > 0 && (
                                <div className="bg-neutral-900/50 p-4 rounded border border-neutral-800">
                                    <h4 className="flex items-center gap-2 font-bold text-white mb-3 text-sm">
                                        <Zap size={16} className="text-purple-400" /> Technology
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {achievement.tech.map(t => (
                                            <span key={t} className="bg-black border border-neutral-700 text-neutral-300 text-xs px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Credential Link */}
                            {(achievement.credentialUrl || achievement.pdfUrl || achievement.demoUrl) && (
                                <div className="space-y-3">
                                    {achievement.demoUrl && (
                                        <a
                                            href={achievement.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold rounded hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5"
                                        >
                                            <ExternalLink size={18} /> View Prototype
                                        </a>
                                    )}
                                    
                                    {(achievement.credentialUrl || achievement.pdfUrl) && (
                                        <a
                                            href={achievement.credentialUrl || achievement.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center justify-center gap-2 w-full py-3 font-bold rounded transition-colors shadow-lg ${
                                                achievement.demoUrl 
                                                    ? 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700' 
                                                    : 'bg-white text-black hover:bg-neutral-200 shadow-white/5'
                                            }`}
                                        >
                                            <ExternalLink size={18} /> View Certificate
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementModal;
