
import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <footer id="contact" className="pt-24 pb-12 bg-black border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-20">

          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white uppercase tracking-tight">Initiate Communication</h2>
            <p className="text-neutral-400 mb-10 text-lg font-light">
              Ready to collaborate on data analysis projects or full-stack solutions.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group">
                <div className="p-3 bg-black border border-neutral-700 group-hover:bg-white group-hover:text-black transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-mono">{CONTACT_INFO.email}</span>
              </a>

              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group">
                <div className="p-3 bg-black border border-neutral-700 group-hover:bg-white group-hover:text-black transition-colors">
                  <Phone size={20} />
                </div>
                <span className="text-lg font-mono">{CONTACT_INFO.phone}</span>
              </a>

              <div className="flex gap-4 pt-6">
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black border border-neutral-700 hover:bg-white hover:text-black transition-all"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black border border-neutral-700 hover:bg-white hover:text-black transition-all"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="bg-neutral-950 p-8 border border-neutral-800" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-neutral-500 uppercase mb-2 tracking-wider">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-neutral-700"
                  placeholder="ENTER NAME"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-neutral-500 uppercase mb-2 tracking-wider">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-neutral-700"
                  placeholder="ENTER EMAIL"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-neutral-500 uppercase mb-2 tracking-wider">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder-neutral-700"
                  placeholder="ENTER MESSAGE DETAILS"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-white hover:bg-neutral-200 text-black font-bold py-4 border border-white transition-all flex items-center justify-center gap-2 mt-4">
                SEND TRANSMISSION <Send size={16} />
              </button>
            </div>
          </form>
        </div>

        <div className="text-center pt-8 border-t border-neutral-900 text-neutral-600 text-xs font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} Bheki Mogola. All Systems Operational.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
