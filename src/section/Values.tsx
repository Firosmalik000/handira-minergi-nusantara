'use client';

import { useLanguage } from '@/hooks/UseLanguage';
import { motion } from 'framer-motion';
import { BiCheckCircle } from 'react-icons/bi';

const Values = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'CORE VALUES',
      values: [
        {
          title: 'Integrity & Transparency',
          description: 'We uphold the highest standards of ethics and openness in all our dealings.',
        },
        {
          title: 'Innovation & Excellence',
          description: 'We drive continuous improvement and adopt cutting-edge technologies to exceed client expectations.',
        },
        {
          title: 'Sustainability & Responsibility',
          description: 'We are committed to environmentally responsible practices and sustainable growth.',
        },
        {
          title: 'Local Empowerment',
          description: 'We prioritize local workforce development and community engagement to foster shared prosperity.',
        },
        {
          title: 'Safety First',
          description: 'We implement rigorous safety standards to protect people, assets, and the environment.',
        },
      ],
    },
    id: {
      title: 'NILAI-NILAI UTAMA',
      values: [
        {
          title: 'Integritas & Transparansi',
          description: 'Kami menjunjung tinggi standar etika tertinggi dan keterbukaan dalam semua aktivitas kami.',
        },
        {
          title: 'Inovasi & Keunggulan',
          description: 'Kami mendorong perbaikan berkelanjutan dan mengadopsi teknologi terkini untuk melampaui harapan klien.',
        },
        {
          title: 'Keberlanjutan & Tanggung Jawab',
          description: 'Kami berkomitmen pada praktik yang ramah lingkungan dan pertumbuhan yang berkelanjutan.',
        },
        {
          title: 'Pemberdayaan Lokal',
          description: 'Kami memprioritaskan pengembangan tenaga kerja lokal dan keterlibatan komunitas untuk mewujudkan kemakmuran bersama.',
        },
        {
          title: 'Keselamatan Utama',
          description: 'Kami menerapkan standar keselamatan yang ketat untuk melindungi manusia, aset, dan lingkungan.',
        },
      ],
    },
  };

  return (
    <section id="values" className="bg-white w-full px-6 md:px-32 py-24">
      <div className="text-center mb-16">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-playfair" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {content[language].title}
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {content[language].values.map((val, idx) => (
          <motion.div key={idx} className="flex items-start gap-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2, duration: 0.6 }} viewport={{ once: true }}>
            <BiCheckCircle className="text-green-600 mt-1 w-6 h-6 shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{val.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{val.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Values;
