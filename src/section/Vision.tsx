'use client';

import { useLanguage } from '../hooks/UseLanguage';
import { motion } from 'framer-motion';

const Vision = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'OUR VISION',
      description: `To be the leading Indonesian energy company and a trusted project development partner, 
  driving innovation, sustainability, and strategic collaboration across the oil & gas, LNG, and 
  offshore construction sectors, while contributing to national energy independence and 
  economic advancement.`,
    },
    id: {
      title: 'VISI KAMI',
      description: `Menjadi perusahaan energi terkemuka di Indonesia dan mitra terpercaya dalam pengembangan proyek, 
  mendorong inovasi, keberlanjutan, dan kolaborasi strategis di sektor minyak & gas, LNG, dan 
  konstruksi lepas pantai, sekaligus berkontribusi pada kemandirian energi nasional dan 
  kemajuan ekonomi.`,
    },
  };

  return (
    <section id="vision" className="w-full h-[550px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/em.jpg)` }}>
      <div className="w-full h-full px-8 py-16 bg-gradient-to-b md:bg-gradient-to-r from-black/100 via-black/50 to-transparent flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }} className="text-center">
          <h1 className="mb-8 text-4xl font-bold text-white ">{content[language].title}</h1>
          <p className="max-w-3xl mx-auto text-xl text-white">{content[language].description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
