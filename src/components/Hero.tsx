import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, Sparkles, Globe2, Award } from 'lucide-react';
import LiquidBlob from './LiquidBlob';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#FAFAFA]">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <LiquidBlob color="orange" size="600px" top="-100px" right="-150px" delay="0s" />
        <LiquidBlob color="grey" size="500px" bottom="-100px" left="-200px" delay="2s" />
        <LiquidBlob color="orange" size="400px" top="40%" left="20%" delay="4s" />
        <div className="absolute inset-0 backdrop-blur-[100px] z-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full liquid-glass mb-8">
            <Sparkles size={16} className="text-orange-500" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide uppercase">
              R3NDER STUDIO
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[1.1] tracking-tighter mb-8">
            Elevating <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
              Visuals.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 max-w-lg mb-10 leading-relaxed font-light">
            Premium Thumbnail Design agency crafting visuals that demand attention and drive clicks.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900 text-white font-medium hover:bg-orange-500 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-xl shadow-orange-500/20"
            >
              <span>Explore Work</span>
              <ArrowDownRight size={20} className="group-hover:rotate-[-45deg] transition-transform" />
            </a>
            
            <a href="#contact" className="text-gray-600 hover:text-orange-500 font-medium transition-colors border-b-2 border-transparent hover:border-orange-500 pb-1">
              Start a project
            </a>
          </div>
        </motion.div>

        {/* Stats Glass Panels */}
        <motion.div
          className="relative h-full flex flex-col justify-center space-y-6"
          style={{ y: y2 }}
        >
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="liquid-glass p-8 rounded-3xl w-full max-w-sm ml-auto relative group hover:scale-[1.02] transition-transform"
          >
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
              <Award className="text-orange-500" size={24} />
            </div>
            <h3 className="text-5xl font-black text-gray-900 mb-2">1+</h3>
            <p className="text-gray-500 font-medium">Years of focused experience in Thumbnail Designing</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="liquid-glass p-8 rounded-3xl w-full max-w-sm mr-auto relative group hover:scale-[1.02] transition-transform"
          >
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg -rotate-12 group-hover:rotate-0 transition-transform">
              <Globe2 className="text-orange-500" size={24} />
            </div>
            <h3 className="text-5xl font-black text-gray-900 mb-2">100+</h3>
            <p className="text-gray-500 font-medium">Clients successfully served across the world</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;