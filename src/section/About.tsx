'use client';
import { useLanguage } from '@/hooks/UseLanguage';
// import AboutImage from '../img/aboutreq.png';
// import Image from 'next/image';

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About Us',
      description: `PT. HADIRA MINERGI NUSANTARA is a distinguished energy company founded by seasoned professionals with decades of expertise in the oil, gas, and mining sectors. Guided by the combined scope of KLBI 06100 and KLBI 06201, the company is actively engaged in the exploration, extraction, processing, and distribution of both crude oil and natural gas resources. With operations rooted in innovation and sustainability, PT. HADIRA MINERGI NUSANTARA aspires to play a pivotal role in meeting Indonesia's growing energy demands while driving economic growth.`,
    },
    id: {
      title: 'Tentang Kami',
      description: `PT. HADIRA MINERGI NUSANTARA merupakan perusahaan energi terkemuka yang didirikan oleh para profesional berpengalaman dengan pengalaman puluhan tahun di sektor minyak, gas, dan pertambangan. Dipandu oleh cakupan gabungan KLBI 06100 dan KLBI 06201, perusahaan ini secara aktif terlibat dalam eksplorasi, ekstraksi, pemrosesan, dan distribusi sumber daya minyak mentah dan gas alam. Dengan operasi yang berakar pada inovasi dan keberlanjutan, PT. HADIRA MINERGI NUSANTARA bercita-cita untuk memainkan peran penting dalam memenuhi permintaan energi Indonesia yang terus meningkat sekaligus mendorong pertumbuhan ekonomi.`,
    },
  };

  return (
    <section id="about" className="w-full bg-[#1e4172] py-16 px-6 md:px-20 lg:px-[200px]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        <div className="max-w-lg border-white p-6 md:p-8">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center font-playfair">{content[language].title}</h1>
          <p className="text-white text-base md:text-lg indent-8 text-justify">{content[language].description}</p>
        </div>
        {/* <Image src={AboutImage} alt="About PT Salam Pesona Bahari" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-xl shadow-lg" /> */}
      </div>
    </section>
  );
};

export default About;
