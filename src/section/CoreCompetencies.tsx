'use client';

import { FaOilCan, FaIndustry, FaBurn, FaGasPump } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/UseLanguage';

const CoreCompetencies = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Core Competencies',
      intro: 'Our seasoned leadership and expert team form the backbone of our operational excellence. These core strengths drive precision, innovation, and superior results in energy development and extraction.',
      competencies: [
        {
          title: 'Oil & Gas Operations',
          description: 'Expertise in exploration, drilling, mining, separation, and storage to ensure efficient upstream processes.',
          icon: <FaOilCan className="text-4xl text-amber-600 mb-4" />,
        },
        {
          title: 'Crude & Derivative Production',
          description: 'Production of high-quality crude oil, condensate, and derivatives through stabilization, filtration, and drying.',
          icon: <FaIndustry className="text-4xl text-blue-600 mb-4" />,
        },
        {
          title: 'Advanced Extraction',
          description: 'Advanced techniques for extracting oil shale and bituminous sands with cutting-edge precision.',
          icon: <FaBurn className="text-4xl text-red-500 mb-4" />,
        },
        {
          title: 'Natural Gas & LNG',
          description: 'Innovative solutions in natural gas extraction, LNG production and transport, and CBM operations.',
          icon: <FaGasPump className="text-4xl text-green-600 mb-4" />,
        },
      ],
    },
    id: {
      title: 'Kompetensi Inti',
      intro: 'Kepemimpinan berpengalaman dan tim ahli menjadi fondasi dari keunggulan operasional kami. Kekuatan inti ini mendorong presisi, inovasi, dan hasil terbaik dalam pengembangan serta eksplorasi energi.',
      competencies: [
        {
          title: 'Operasi Minyak & Gas',
          description: 'Keahlian dalam eksplorasi, pengeboran, penambangan, pemisahan, dan penyimpanan untuk efisiensi proses hulu.',
          icon: <FaOilCan className="text-4xl text-amber-600 mb-4" />,
        },
        {
          title: 'Produksi Minyak Mentah & Turunannya',
          description: 'Produksi minyak mentah, kondensat, dan turunan berkualitas tinggi melalui proses stabilisasi, filtrasi, dan pengeringan.',
          icon: <FaIndustry className="text-4xl text-blue-600 mb-4" />,
        },
        {
          title: 'Ekstraksi Lanjutan',
          description: 'Teknologi canggih untuk mengekstrak oil shale dan pasir bitumen dengan presisi tinggi.',
          icon: <FaBurn className="text-4xl text-red-500 mb-4" />,
        },
        {
          title: 'Gas Alam & LNG',
          description: 'Solusi inovatif untuk ekstraksi gas alam, produksi & transportasi LNG, dan operasi CBM.',
          icon: <FaGasPump className="text-4xl text-green-600 mb-4" />,
        },
      ],
    },
  };

  const data = content[language];

  return (
    <section className="w-full py-20 px-6 md:px-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white" id="core-competencies">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">{data.title}</h2>
        <p className="text-lg max-w-4xl mx-auto text-gray-300">{data.intro}</p>
      </div>

      {/* Competencies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-12">
        {data.competencies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all"
          >
            <div className="flex justify-center mb-6">{item.icon}</div>
            <h3 className="text-xl font-semibold text-orange-300 font-playfair text-center mb-2">{item.title}</h3>
            <p className="text-gray-300 text-center">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreCompetencies;
