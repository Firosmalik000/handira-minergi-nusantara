'use client';

import { FaCogs, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/UseLanguage';

const Excellence = () => {
  const { language } = useLanguage();

  const excellenceContent = {
    en: {
      title: 'Commitment to Excellence',
      subtitle: 'PT. HADIRA MINERGI NUSANTARA upholds the highest standards in the following pillars:',
      highlights: [
        {
          title: 'Operational Efficiency',
          description: 'Optimizing every process for maximum output and minimal waste.',
          icon: <FaCogs className="text-4xl text-blue-600 mb-4" />,
        },
        {
          title: 'Safety',
          description: 'Prioritizing the safety and well-being of all personnel and communities.',
          icon: <FaShieldAlt className="text-4xl text-amber-500 mb-4" />,
        },
        {
          title: 'Environmental Sustainability',
          description: 'Committed to green practices and minimizing environmental impact.',
          icon: <FaLeaf className="text-4xl text-green-500 mb-4" />,
        },
      ],
      mission: 'We are dedicated to delivering reliable, innovative, and sustainable energy solutions to empower industries, enhance livelihoods, and contribute to Indonesia’s future.',
    },
    id: {
      title: 'Komitmen terhadap Keunggulan',
      subtitle: 'PT. HADIRA MINERGI NUSANTARA menjunjung standar tertinggi dalam pilar-pilar berikut:',
      highlights: [
        {
          title: 'Efisiensi Operasional',
          description: 'Mengoptimalkan setiap proses untuk hasil maksimal dengan limbah minimal.',
          icon: <FaCogs className="text-4xl text-blue-600 mb-4" />,
        },
        {
          title: 'Keselamatan',
          description: 'Mengutamakan keselamatan dan kesejahteraan seluruh personel dan komunitas.',
          icon: <FaShieldAlt className="text-4xl text-amber-500 mb-4" />,
        },
        {
          title: 'Keberlanjutan Lingkungan',
          description: 'Berkomitmen pada praktik ramah lingkungan dan dampak seminimal mungkin.',
          icon: <FaLeaf className="text-4xl text-green-500 mb-4" />,
        },
      ],
      mission: 'Kami berkomitmen untuk menghadirkan solusi energi yang andal, inovatif, dan berkelanjutan untuk mendukung industri, meningkatkan taraf hidup, dan berkontribusi pada masa depan Indonesia.',
    },
  };

  const content = excellenceContent[language];

  return (
    <section id="excellence" className="w-full py-20 px-6 md:px-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-playfair mb-4">{content.title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{content.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
        {content.highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition duration-300"
          >
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-playfair">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="text-center text-lg text-gray-700 max-w-4xl mx-auto">
        {content.mission}
      </motion.p>
    </section>
  );
};

export default Excellence;
