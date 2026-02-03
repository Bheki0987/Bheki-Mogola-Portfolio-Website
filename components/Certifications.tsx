import React, { useState } from 'react';
import { CERTIFICATIONS_DATA } from '../constants';
import { Award, ExternalLink, X, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-24 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-white pl-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Certifications</h2>
            <p className="text-neutral-400">Verified credentials and professional achievements.</p>
          </motion.div>
          <div className="p-2 border border-neutral-800 text-neutral-500 rounded-full">
            <Award size={24} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-neutral-950 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 text-xs font-mono border border-neutral-700 text-neutral-300">
                  {cert.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-neutral-500 uppercase tracking-widest mb-2 font-semibold">
                  {cert.issuer}
                </div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-neutral-200 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex flex-col gap-2">

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer w-fit"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      <span>Verify Credential</span>
                    </a>
                  )}
                  {!cert.credentialUrl && (
                    <button
                      onClick={() => setSelectedCert(cert.image)}
                      className="flex items-center text-sm text-neutral-400 group-hover:text-white transition-colors cursor-pointer w-fit"
                    >
                      <span>View Credential</span>
                      <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Image Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-4 right-4 p-2 bg-white text-black hover:bg-neutral-200 transition-colors rounded-full"
          >
            <X size={24} />
          </button>
          <div className="max-w-5xl max-h-[90vh] overflow-auto">
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full h-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;