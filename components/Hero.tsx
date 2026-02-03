
import React, { useRef } from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Mouse spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden bg-black group"
    >
      {/* Background Grid with Spotlight */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Interactive Spotlight: Reveals a brighter grid on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-neutral-700 bg-neutral-900/50 text-neutral-300 text-xs font-mono tracking-widest uppercase backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
          Data & Business Analyst
        </motion.div>

        <motion.h1
          className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-tight text-white mix-blend-screen"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Bheki Mogola
        </motion.h1>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-neutral-400 font-light font-sans">
            Uncovering value through data.
          </p>
        </motion.div>

        <motion.p
          className="text-neutral-500 max-w-2xl mx-auto mb-12 leading-relaxed text-lg font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Specializing in translating complex datasets into clear, actionable business strategies using <strong className="text-white font-medium">Python</strong>, <strong className="text-white font-medium">SQL</strong>, and <strong className="text-white font-medium">Interactive Visualizations with Excel</strong> and <strong className="text-white font-medium">Tableau</strong>.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, '#projects')}
            className="px-8 py-3 bg-white text-black font-bold rounded-sm border border-white hover:bg-neutral-200 transition-all flex items-center gap-2 cursor-pointer relative overflow-hidden group/btn"
          >
            <span className="relative z-10 flex items-center gap-2">View Projects <ChevronRight size={18} /></span>
          </a>
          <a
            href="/Bheki_Mogola_CV.docx"
            download
            className="px-8 py-3 bg-transparent border border-neutral-700 text-white font-medium rounded-sm hover:border-white transition-all flex items-center gap-2 cursor-pointer group"
          >
            Download CV <Download size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
