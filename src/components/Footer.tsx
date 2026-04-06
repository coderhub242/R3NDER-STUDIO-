import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 py-16 relative overflow-hidden text-gray-400">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-800 mb-6">
            <Sparkles size={16} className="text-orange-500" />
            <span className="text-sm font-semibold text-white tracking-wide uppercase">
              R3NDER STUDIO
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter text-center mb-6">
            Elevating Visuals. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
              Architecting Clicks.
            </span>
          </h2>
        </motion.div>

        <div className="w-full h-px bg-gray-900 mb-8" />

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} R3NDER STUDIO. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-orange-500 transition-colors duration-300 group shadow-xl"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="flex space-x-6 text-sm font-medium">
            <a href="#portfolio" className="hover:text-orange-500 transition-colors">Work</a>
            <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;