import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Zap } from 'lucide-react';
import LiquidBlob from './LiquidBlob';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <LiquidBlob color="grey" size="800px" top="-200px" right="-300px" delay="1s" />
        <LiquidBlob color="orange" size="500px" bottom="-100px" left="-150px" delay="3s" />
        <div className="absolute inset-0 backdrop-blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
              About R3NDER STUDIO
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter mb-8">
              We Don't Just Design.<br />
              <span className="text-gray-400">We Architect Clicks.</span>
            </h2>
            
            <div className="space-y-6 text-xl text-gray-600 font-light leading-relaxed">
              <p>
                R3NDER STUDIO was born out of a passion for visual storytelling and digital performance. In the hyper-competitive world of YouTube and digital content, a thumbnail isn't just an image—it's the front door to your content.
              </p>
              <p>
                With <strong className="text-gray-900 font-semibold">1 year of intensive experience</strong> in Thumbnail Designing, we have rapidly mastered the art of capturing attention. 
              </p>
              <p>
                Our philosophy merges premium aesthetics with deep psychological triggers. We are proud to have successfully partnered with <strong className="text-gray-900 font-semibold">100+ clients across the world</strong>, elevating their channels and maximizing their Click-Through Rates (CTR).
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="liquid-glass p-12 rounded-[3rem] shadow-2xl relative"
          >
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                  <Trophy className="text-orange-500" size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">100+ Global Clients</h4>
                  <p className="text-gray-500">Delivering premium visual assets to creators and brands worldwide, ensuring every pixel serves a purpose.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                  <Target className="text-orange-500" size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">1 Year Excellence</h4>
                  <p className="text-gray-500">A concentrated, intensive year of analyzing trends, mastering composition, and perfecting the psychology of the click.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                  <Zap className="text-orange-500" size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">High-Conversion Focus</h4>
                  <p className="text-gray-500">Every design decision is backed by data and aimed at one singular goal: making your audience click.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;