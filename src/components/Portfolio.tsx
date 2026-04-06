import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Pokemon Cards Collection',
    category: 'Unboxing Thumbnail',
    image: 'https://res.cloudinary.com/dzemozvwp/image/upload/v1775470512/USERS_OUTRAGE_20260305_173822_0000_zrrlal.png',
  },
  {
    id: 2,
    title: 'Ai Changes Memecoin Trading  ',
    category: 'Trading Thumbnail',
    image: 'https://res.cloudinary.com/dzemozvwp/image/upload/v1775470508/1_000_20260405_221212_0000_dwtrrg.png',
  },
  {
    id: 3,
    title: 'Spending 17 Hour as A Rich Man',
    category: 'Vlog Thumbnail',
    image: 'https://res.cloudinary.com/dzemozvwp/image/upload/v1775481605/R3NDER_GFX_20260405_210123_0000_1_bs8yxa.png',
  },
  {
    id: 4,
    title: 'FreeFire Live Stream Thumbnail',
    category: 'Gaming Thumbnail',
    image: 'https://res.cloudinary.com/dzemozvwp/image/upload/v1775470499/Untitled46_20251123211548_vsmvba.jpg',
  },
  {
    id: 4,
    title: 'Call Of Duty Gameplay',
    category: 'Gaming Thumbnail',
    image: 'https://res.cloudinary.com/dzemozvwp/image/upload/v1775470800/Untitled14_20260403142337_tghsi7.png',
  },
  {
    id: 4,
    title: 'Undefeated Team Shivam ',
    category: 'Gaming Thumbnail',
    image: 'https://res.cloudinary.com/dzemozvwp/image/upload/v1775470499/_storage_emulated_0_Pictures_Gallery_owner_GFX_WORKS_Untitled114_20251209154124_wrscbc.jpg',
  },
  
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
            Selected Work
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Portfolio</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-2xl ${
                index % 2 !== 0 ? 'md:mt-24' : ''
              }`}
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Glass Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-orange-400 text-sm font-semibold mb-2">{project.category}</p>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:bg-white hover:text-gray-900 transition-colors duration-300">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;