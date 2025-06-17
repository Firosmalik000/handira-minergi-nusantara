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
        'Empowered Leadership: Leverage the deep expertise of our founders and professional team to uphold excellence in project management, government relations, and execution oversight.',
        'Integrated Energy Solutions: Deliver efficient and innovative energy infrastructure across upstream, midstream, and downstream sectors—particularly in LNG and offshore oil & gas construction.',
        'Strategic Enablement: Bridge international capabilities with Indonesian opportunities by facilitating partnerships, local compliance, and stakeholder alignment for complex energy projects.',
        'Economic Empowerment: Support national economic growth by creating jobs, fostering local industries, and contributing to domestic energy security and government revenue.',
        'Sustainability and Innovation: Champion environmentally responsible practices and technologies that promote long-term energy development while protecting Indonesia’s natural resources.',
        'Global Competitiveness: Position Indonesia as a regional and global energy player by enabling the delivery of high-quality crude oil, gas, and LNG products through world-class infrastructure.',
        'Community Engagement: Empower local communities through education, infrastructure development, and sustainable programs that align with national and regional priorities.',
      ],
    },
    id: {
      title: 'MISI KAMI',
      descriptions: [
        'Kepemimpinan yang Diberdayakan: Memanfaatkan keahlian mendalam dari para pendiri dan tim profesional kami untuk menjunjung tinggi keunggulan dalam manajemen proyek, hubungan pemerintahan, dan pengawasan eksekusi.',
        'Solusi Energi Terintegrasi: Menyediakan infrastruktur energi yang efisien dan inovatif di sektor hulu, tengah, dan hilir—terutama dalam LNG dan konstruksi minyak & gas lepas pantai.',
        'Pemberdayaan Strategis: Menjembatani kapabilitas internasional dengan peluang di Indonesia melalui kemitraan, kepatuhan lokal, dan penyelarasan pemangku kepentingan untuk proyek energi kompleks.',
        'Pemberdayaan Ekonomi: Mendukung pertumbuhan ekonomi nasional melalui penciptaan lapangan kerja, pengembangan industri lokal, serta kontribusi terhadap ketahanan energi dan pendapatan negara.',
        'Keberlanjutan dan Inovasi: Mengedepankan praktik dan teknologi yang ramah lingkungan untuk pengembangan energi jangka panjang sambil menjaga sumber daya alam Indonesia.',
        'Daya Saing Global: Memposisikan Indonesia sebagai pemain energi regional dan global dengan menyediakan produk minyak mentah, gas, dan LNG berkualitas tinggi melalui infrastruktur kelas dunia.',
        'Keterlibatan Komunitas: Memberdayakan masyarakat lokal melalui pendidikan, pembangunan infrastruktur, dan program berkelanjutan yang selaras dengan prioritas nasional dan daerah.',
      ],
    },
  };

  return (
    <section id="mision" className="w-full bg-gray-100 py-16 px-4 md:px-12">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-screen-xl mx-auto">
        <div className="w-full md:w-1/2">
          <Image src="/13.JPG" width={700} height={800} alt="Client" className="w-full md:h-[800px] h-[400px] object-cover rounded-2xl shadow-xl" />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold  text-gray-800 text-center  mb-6">{content[language].title}</h1>

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
                <div className="absolute -top-4 -left-4 bg-[#27a3cc] text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-full shadow-md">{String(index + 1).padStart(2, '0')}</div>
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
