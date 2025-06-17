'use client';

import { FaOilCan, FaIndustry, FaBurn, FaGasPump } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/UseLanguage';
import { Carousel } from '@/components/carousel';

const CoreCompetencies = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'CORE COMPETENCIES',
      intro: 'Our seasoned leadership and expert team form the backbone of our operational excellence. These core strengths drive precision, innovation, and superior results in energy development and extraction.',
      competencies: [
        {
          title: 'Oil & Gas Operations',
          description: 'Expertise in exploration, drilling, mining, separation, and storage to ensure efficient upstream processes.',
          icon: <FaOilCan className="group-hover:text-white transition duration-300 text-6xl text-amber-600 mb-4" />,
          color: ' bg-white hover:text-white hover:bg-amber-600 transition duration-300',
        },
        {
          title: 'Crude & Derivative Production',
          description: 'Production of high-quality crude oil, condensate, and derivatives through stabilization, filtration, and drying.',
          icon: <FaIndustry className="group-hover:text-white transition duration-300 text-6xl text-blue-600 mb-4" />,
          color: ' bg-white hover:text-white hover:bg-blue-600 transition duration-300',
        },
        {
          title: 'Advanced Extraction',
          description: 'Advanced techniques for extracting oil shale and bituminous sands with cutting-edge precision.',
          icon: <FaBurn className="group-hover:text-white transition duration-300 text-6xl text-red-500 mb-4" />,
          color: ' bg-white hover:text-white hover:bg-red-500 transition duration-300',
        },
        {
          title: 'Natural Gas & LNG',
          description: 'Innovative solutions in natural gas extraction, LNG production and transport, and CBM operations.',
          icon: <FaGasPump className="group-hover:text-white transition duration-300 text-6xl text-green-600 mb-4" />,
          color: ' bg-white hover:text-white hover:bg-green-600 transition duration-300',
        },
      ],
    },
    id: {
      title: 'KOMPETENSI INTI',
      intro: 'Kepemimpinan berpengalaman dan tim ahli menjadi fondasi dari keunggulan operasional kami. Kekuatan inti ini mendorong presisi, inovasi, dan hasil terbaik dalam pengembangan serta eksplorasi energi.',
      competencies: [
        {
          title: 'Operasi Minyak & Gas',
          description: 'Keahlian dalam eksplorasi, pengeboran, penambangan, pemisahan, dan penyimpanan untuk efisiensi proses hulu.',
          icon: <FaOilCan className="group-hover:text-white transition duration-300 text-4xl text-amber-600 mb-4" />,
          color: ' bg-white hover:text-white hover:bg-amber-600 transition duration-300',
        },
        {
          title: 'Produksi Minyak Mentah & Turunannya',
          description: 'Produksi minyak mentah, kondensat, dan turunan berkualitas tinggi melalui proses stabilisasi, filtrasi, dan pengeringan.',
          icon: <FaIndustry className="group-hover:text-white transition duration-300 text-4xl text-blue-600 mb-4" />,
          color: ' bg-white hover:text-white hover:bg-blue-600 transition duration-300',
        },
        {
          title: 'Ekstraksi Lanjutan',
          description: 'Teknologi canggih untuk mengekstrak oil shale dan pasir bitumen dengan presisi tinggi.',
          icon: <FaBurn className="group-hover:text-white transition duration-300 text-4xl text-red-500 mb-4" />,
          color: ' bg-white hover:text-white hover:bg-red-500 transition duration-300',
        },
        {
          title: 'Gas Alam & LNG',
          description: 'Solusi inovatif untuk ekstraksi gas alam, produksi & transportasi LNG, dan operasi CBM.',
          icon: <FaGasPump className="group-hover:text-white transition duration-300 text-4xl text-green-600 mb-4" />,
          color: ' bg-white hover:text-white hover:bg-green-600 transition duration-300',
        },
      ],
    },
  };

  const data = content[language];

  return (
    <section id="competencies" className="w-full py-20 px-6 md:px-24 bg-[#173C69] text-white overflow-hidden">
      <div className="text-center mb-10">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} className="text-4xl font-bold  mb-6">
          {data.title}
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} className="text-base md:text-lg max-w-2xl mx-auto text-gray-300">
          {data.intro}
        </motion.p>
      </div>

      {/* Competencies Grid */}
      <div className="">
        {/* {data.competencies.map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.2 }}
						transition={{ delay: index * 0.2, duration: 0.6 }}
						className="bg-white bg-opacity-10 backdrop-blur-md px-2 py-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all"
					>
						<div className="flex justify-center ">{item.icon}</div>
						<h3 className="text-xl font-semibold text-orange-500  text-center mb-2">{item.title}</h3>
						<p className="text-gray-600 text-center">{item.description}</p>
					</motion.div>
				))} */}
        <Carousel slides={data.competencies} />
      </div>
    </section>
  );
};

export default CoreCompetencies;
