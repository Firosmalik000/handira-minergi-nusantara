'use client';

import { useLanguage } from '@/hooks/UseLanguage';
import { motion } from 'framer-motion';

const Hero = () => {
  const { language } = useLanguage();
  const content = {
    en: {
      title: 'Welcome To',
      description: `PT. HADIRA MINERGI NUSANTARA`,
      tag: `Your trusted partner in energy solutions.`,
    },
    id: {
      title: 'Selamat Datang',
      description: `PT. HADIRA MINERGI NUSANTARA`,
      tag: `Mitra tepercaya Anda dalam solusi energi.`,
    },
  };

  return (
    <section id="hero" className="relative w-full min-h-screen bg-center bg-cover" style={{ backgroundImage: `url(/heri.jpeg)` }}>
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10" />

      {/* Centered content */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <div className="text-center text-white max-w-3xl">
          <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold font-playfair mb-4 leading-tight drop-shadow-lg">
            {content[language].title}
          </motion.h2>
          <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold font-playfair mb-4 leading-tight drop-shadow-lg">
            {content[language].description}
          </motion.h1>

          <motion.p whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.9, delay: 0.3 }} className="text-lg md:text-xl text-gray-200 drop-shadow">
            {content[language].tag}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
