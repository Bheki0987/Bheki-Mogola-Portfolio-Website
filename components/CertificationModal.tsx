import React from 'react';
import { Certification } from '../types';
import { X, ExternalLink, Award, Calendar, CheckCircle } from 'lucide-react';

interface CertificationModalProps {
    cert: Certification;
    isOpen: boolean;
    onClose: () => void;
}

const CertificationModal: React.FC<CertificationModalProps> = ({ cert, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-3xl bg-neutral-950 rounded-lg shadow-2xl flex flex-col border border-neutral-800 animate-in fade-in zoom-in-95 duration-200">

                {/* Header - Sticky */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-4 px-6 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-md rounded-t-lg">
                    <h3 className="text-xl font-bold text-white truncate pr-4">{cert.title}</h3>
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
                    <div className="relative aspect-video w-full overflow-hidden rounded-md border border-neutral-800 bg-neutral-900">
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-6">
                            {/* Description */}
                            {cert.description && (
                                <div>
                                    <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                                        <Award size={18} className="text-yellow-400" />
                                        Overview
                                    </h4>
                                    <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                                        {cert.description}
                                    </p>
                                </div>
                            )}

                            {/* Skills */}
                            {cert.skills && cert.skills.length > 0 && (
                                <div>
                                    <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-3">
                                        <CheckCircle size={18} className="text-blue-400" />
                                        Skills Earned
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill, idx) => (
                                            <span key={idx} className="bg-neutral-800 text-neutral-300 text-xs px-3 py-1.5 rounded-full border border-neutral-700">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar info */}
                        <div className="space-y-6">
                            {/* Issuer Info */}
                            <div className="bg-neutral-900/50 p-4 rounded border border-neutral-800 space-y-3">
                                <div>
                                    <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Issuer</span>
                                    <span className="text-white font-medium">{cert.issuer}</span>
                                </div>
                                <div>
                                    <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Date</span>
                                    <div className="flex items-center gap-2 text-white font-medium">
                                        <Calendar size={14} className="text-neutral-400" />
                                        {cert.date}
                                    </div>
                                </div>
                            </div>

                            {/* Credential Link */}
                            {cert.credentialUrl && (
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold rounded hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5"
                                >
                                    <ExternalLink size={18} /> Verify Credential
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificationModal;
