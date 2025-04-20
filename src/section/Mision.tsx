'use client';

import Image from 'next/image';
import { useLanguage } from '../hooks/UseLanguage';
import { motion } from 'framer-motion';

const Mision = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'OUR MISSION',
      descriptions: [
        'Empowered Leadership – Harnessing the knowledge and expertise of its experienced founders and team.',
        'Integrated Energy Solutions – Utilizing oil and gas resources with advanced technologies.',
        'Economic Empowerment – Creating jobs, supporting local industries, and contributing to national revenue.',
        'Sustainability and Innovation – Implementing environmentally responsible practices.',
        'Global Competitiveness – Producing high-quality crude oil and LNG for global markets.',
        'Community Engagement – Supporting local communities through education, infrastructure, and sustainable programs.',
      ],
    },
    id: {
      title: 'MISI KAMI',
      descriptions: [
        'Kepemimpinan yang Berdaya – Memanfaatkan pengetahuan dan keahlian para pendiri dan tim yang berpengalaman.',
        'Solusi Energi Terpadu – Memanfaatkan sumber daya minyak dan gas dengan teknologi canggih.',
        'Pemberdayaan Ekonomi – Menciptakan lapangan kerja, mendukung industri lokal, dan berkontribusi terhadap pendapatan nasional.',
        'Keberlanjutan dan Inovasi – Menerapkan praktik yang bertanggung jawab terhadap lingkungan.',
        'Daya Saing Global – Memproduksi minyak mentah dan LNG berkualitas tinggi untuk pasar global.',
        'Keterlibatan Masyarakat – Mendukung masyarakat lokal melalui pendidikan, infrastruktur, dan program berkelanjutan.',
      ],
    },
  };

  return (
    <section id="mision" className="w-full bg-gray-100 py-16 px-4 md:px-12">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-screen-xl mx-auto">
        <div className="w-full md:w-1/2">
          <Image
            src="/hand.jpg"
            width={700}
            height={800}
            alt="Client"
            className="w-full md:h-[800px] h-[400px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold font-playfair text-gray-800 text-center  mb-6">
            {content[language].title}
          </h1>

          <div className="grid grid-cols-1 gap-4 px-3 md:px-0">
            {content[language].descriptions.map((desc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
                className="relative bg-white rounded-2xl shadow-lg p-4 flex flex-col items-start text-left hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="absolute -top-4 -left-4 bg-blue-500 text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="mt-4 text-gray-700 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mision;
