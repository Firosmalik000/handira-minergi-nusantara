'use client';

import { useLanguage } from '@/hooks/UseLanguage';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'ABOUT US',
      tag: 'Where Innovation Meets Energy Excellence',
      description: `PT. HADIRA MINERGI NUSANTARA is a distinguished energy company founded by seasoned professionals with decades of expertise in the oil, gas, and mining sectors. Guided by the combined scope of KBLI 43223, KBLI 0620, KBLI 0610, KBLI 06201, KBLI 0990, and KBLI 073, the company is actively engaged in the exploration, extraction, processing, and distribution of both crude oil and natural gas resources. With operations rooted in innovation and sustainability, PT. HADIRA MINERGI NUSANTARA aspires to play a pivotal role in meeting Indonesia's growing energy demands while driving economic growth.`,
    },
    id: {
      title: 'TENTANG KAMI',
      tag: 'Ketika Inovasi Bertemu Keunggulan Energi',
      description: `PT. HADIRA MINERGI NUSANTARA merupakan perusahaan energi terkemuka yang didirikan oleh para profesional berpengalaman dengan pengalaman puluhan tahun di sektor minyak, gas, dan pertambangan. Dipandu oleh cakupan gabungan KBLI 43223, KBLI 0620, KBLI 0610, KBLI 06201, KBLI 0990, dan KBLI 073, perusahaan ini secara aktif terlibat dalam eksplorasi, ekstraksi, pemrosesan, dan distribusi sumber daya minyak mentah dan gas alam. Dengan operasi yang berakar pada inovasi dan keberlanjutan, PT. HADIRA MINERGI NUSANTARA bercita-cita untuk memainkan peran penting dalam memenuhi permintaan energi Indonesia yang terus meningkat sekaligus mendorong pertumbuhan ekonomi.`,
    },
  };

  return (
    <section id="about" className="w-full min-h-screen flex flex-col md:flex-row justify-center bg-gray-950 px-4 md:px-32 py-24 ">
      {/* Sisi kiri: Gambar background */}
      <div className="relative w-full md:w-1/3 h-[400px] md:h-auto">
        <Image src="/14.JPG" alt="Background Image" fill className="object-cover rounded-2xl" priority />
      </div>

      {/* Sisi kanan: Konten teks */}
      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 0.8 }} className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 md:py-0 text-white relative z-20">
        <motion.h2 className="text-2xl md:text-4xl text-center md:text-left font-bold mb-4">{content[language].title}</motion.h2>
        <motion.h3 className="text-xl md:text-2xl font-semibold text-center md:text-left mb-6">{content[language].tag}</motion.h3>
        <motion.p className="text-sm md:text-lg leading-relaxed indent-8 text-justify max-w-2xl">{content[language].description}</motion.p>
      </motion.div>
    </section>
  );
};

export default About;
