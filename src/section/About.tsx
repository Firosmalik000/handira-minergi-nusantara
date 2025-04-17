'use client';

import { useLanguage } from '@/hooks/UseLanguage';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About Us',
      tag: 'Where Innovation Meets Energy Excellence.',
      description: `PT. HADIRA MINERGI NUSANTARA is a distinguished energy company founded by seasoned professionals with decades of expertise in the oil, gas, and mining sectors. Guided by the combined scope of KLBI 06100 and KLBI 06201, the company is actively engaged in the exploration, extraction, processing, and distribution of both crude oil and natural gas resources. With operations rooted in innovation and sustainability, PT. HADIRA MINERGI NUSANTARA aspires to play a pivotal role in meeting Indonesia's growing energy demands while driving economic growth.`,
    },
    id: {
      title: 'Tentang Kami',
      tag: 'Ketika Inovasi Bertemu Keunggulan Energi.',
      description: `PT. HADIRA MINERGI NUSANTARA merupakan perusahaan energi terkemuka yang didirikan oleh para profesional berpengalaman dengan pengalaman puluhan tahun di sektor minyak, gas, dan pertambangan. Dipandu oleh cakupan gabungan KLBI 06100 dan KLBI 06201, perusahaan ini secara aktif terlibat dalam eksplorasi, ekstraksi, pemrosesan, dan distribusi sumber daya minyak mentah dan gas alam. Dengan operasi yang berakar pada inovasi dan keberlanjutan, PT. HADIRA MINERGI NUSANTARA bercita-cita untuk memainkan peran penting dalam memenuhi permintaan energi Indonesia yang terus meningkat sekaligus mendorong pertumbuhan ekonomi.`,
    },
  };

  return (
    <section id="about" className="w-full bg-gray-200 py-20 px-6 md:px-20 lg:px-32">
      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 0.8 }} className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Image - 60% */}
        <div className="w-full md:w-[60%]">
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{ duration: 0.8 }}>
            <Image src="/about.jpg" alt="About PT Hadira Minergi Nusantara" width={1200} height={800} className="rounded-2xl shadow-xl object-cover w-full h-auto" />
          </motion.div>
        </div>

        {/* Text - 40% */}
        <div className="w-full md:w-[40%] text-gray-800">
          <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 0.8 }} className="text-3xl md:text-4xl font-playfair font-bold mb-4 md:text-left text-center">
            {content[language].title}
          </motion.h2>

          <motion.h3 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 0.8 }} className="text-xl md:text-2xl font-semibold mb-6 md:text-left text-center">
            {content[language].tag}
          </motion.h3>

          <motion.p whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 0.8 }} className="text-base md:text-lg leading-relaxed text-justify indent-8">
            {content[language].description}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
