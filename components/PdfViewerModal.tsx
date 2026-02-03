import React from 'react';
import { X } from 'lucide-react';

interface PdfViewerModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
    title?: string;
}

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ isOpen, onClose, pdfUrl, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <div className="relative w-full max-w-5xl h-[85vh] bg-neutral-900 rounded-lg shadow-2xl flex flex-col overflow-hidden border border-neutral-700">

                {/* Toolbar */}
                <div className="flex items-center justify-between p-4 border-b border-neutral-800 bg-black">
                    <h3 className="text-lg font-bold text-neutral-200">{title || 'Certificate View'}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* PDF Content */}
                <div className="flex-1 bg-neutral-800 relative">
                    <iframe
                        src={pdfUrl}
                        className="w-full h-full"
                        title="PDF Viewer"
                    />
                </div>
            </div>
        </div>
    );
};

export default PdfViewerModal;
