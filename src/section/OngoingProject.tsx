'use client';

import { FaIndustry, FaPlug, FaCity, FaNetworkWired } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/UseLanguage';
import { Carousel } from '@/components/carousel';

const OngoingProject = () => {
  const { language } = useLanguage();

  const projectDetails = {
    en: {
      title: 'ONGOING PROJECT',
      projectName: 'LNG Terminal and Distribution for Central and Yogyakarta',
      partner: 'Joint Venture with OPSICO',
      intro: 'In collaboration with OPSICO, PT. HADIRA ENERGI INDONESIA is developing a state-of-the-art LNG terminal and distribution network for Central Java and Yogyakarta.',
      highlights: [
        {
          title: 'Modern Storage & Regasification',
          description: 'Building advanced storage and regasification facilities that ensure the reliable supply of LNG.',
          icon: <FaIndustry className="text-6xl text-yellow-500 mb-4 group-hover:text-white" />,
          color: ' bg-white hover:bg-yellow-500 hover:text-white ',
        },
        {
          title: 'Robust Distribution Network',
          description: 'Developing a robust distribution network for industrial, power generation, and residential sectors.',
          icon: <FaPlug className="text-6xl text-green-500 mb-4 group-hover:text-white" />,
          color: ' bg-white hover:bg-green-500 hover:text-white ',
        },
        {
          title: 'Innovation & Infrastructure',
          description: 'The joint venture showcases a commitment to innovation, infrastructure development, and regional economic growth.',
          icon: <FaCity className="group-hover:text-white text-6xl text-blue-500 mb-4" />,
          color: ' bg-white hover:bg-blue-500 hover:text-white ',
        },
        {
          title: 'Regional Growth Impact',
          description: 'Supporting regional economic growth through sustainable energy solutions and job creation.',
          icon: <FaNetworkWired className="group-hover:text-white text-6xl text-orange-500 mb-4" />,
          color: ' bg-white hover:bg-orange-500 hover:text-white ',
        },
      ],
    },
    id: {
      title: 'PROYEK BERLANGSUNG',
      projectName: 'Terminal LNG dan Distribusi untuk Jawa Tengah dan Yogyakarta',
      partner: 'Joint Venture dengan OPSICO',
      intro: 'Bekerja sama dengan OPSICO, PT. HADIRA ENERGI INDONESIA sedang mengembangkan terminal LNG modern dan jaringan distribusi untuk Jawa Tengah dan Yogyakarta.',
      highlights: [
        {
          title: 'Fasilitas Penyimpanan & Regasifikasi Modern',
          description: 'Membangun fasilitas penyimpanan dan regasifikasi canggih untuk memastikan pasokan LNG yang andal.',
          icon: <FaIndustry className="group-hover:text-white text-6xl text-yellow-500 mb-4" />,
          color: ' bg-white hover:bg-yellow-500 hover:text-white ',
        },
        {
          title: 'Jaringan Distribusi Tangguh',
          description: 'Mengembangkan jaringan distribusi yang tangguh untuk sektor industri, pembangkit listrik, dan perumahan.',
          icon: <FaPlug className="group-hover:text-white text-6xl text-green-500 mb-4" />,
          color: ' bg-white hover:bg-green-500 hover:text-white ',
        },
        {
          title: 'Inovasi & Pengembangan Infrastruktur',
          description: 'Joint venture ini menunjukkan komitmen terhadap inovasi, pengembangan infrastruktur, dan pertumbuhan ekonomi regional.',
          icon: <FaCity className="group-hover:text-white text-6xl text-blue-500 mb-4" />,
          color: ' bg-white hover:bg-blue-500',
        },
        {
          title: 'Dampak Pertumbuhan Regional',
          description: 'Mendukung pertumbuhan ekonomi regional melalui solusi energi berkelanjutan dan penciptaan lapangan kerja.',
          icon: <FaNetworkWired className="group-hover:text-white text-6xl text-orange-500 mb-4" />,
          color: ' bg-white hover:bg-orange-500 hover:text-white ',
        },
      ],
    },
  };

  const data = projectDetails[language];

  return (
    <section className="w-full py-20 px-6 md:px-24 bg-[#1F809F] overflow-hidden  text-white" id="project">
      <div className="text-center mb-16">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} className="text-2xl md:text-4xl font-bold  mb-6">
          {data.title}
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} className="text-xl max-w-3xl mx-auto text-white">
          {data.projectName}
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} className="text-lg max-w-4xl mx-auto text-white mb-8">
          {data.partner}
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} className="text-lg max-w-4xl mx-auto text-white mb-8">
          {data.intro}
        </motion.p>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12"> */}
      {/* {data.highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white bg-opacity-5 backdrop-blur-md px-2 py-6 rounded-2xl shadow-lg hover:scale-105 transition-all"
          >
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold  mb-2 text-orange-300  text-center">{item.title}</h3>
            <p className="text-gray-600 text-center">{item.description}</p>
          </motion.div>
        ))} */}
      <Carousel slides={data.highlights} />
      {/* </div> */}
    </section>
  );
};

export default OngoingProject;
