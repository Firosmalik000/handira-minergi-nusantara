'use client';
import { useState, useEffect } from 'react';
import LogoImage from '../img/logo.png';
import { useLanguage } from '../hooks/UseLanguage';
import { FaTimes } from 'react-icons/fa';
import { IoMenuSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Image from 'next/image';

type LanguageType = 'en' | 'id';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const texts = {
    en: {
      aboutUs: 'About',
      project: 'Project',
      competencies: 'Competencies',
      vision: 'Vision',
      mission: 'Mission',
      struktur: 'Structure',
    },
    id: {
      aboutUs: 'Tentang',
      competencies: 'Kompetensi',
      project: 'Proyek',
      vision: 'Visi',
      mission: 'Misi',
      struktur: 'Struktur',
    },
  };

  const classOptionNav = 'cursor-pointer font-semibold';
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className={`fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-500 
        ${isScrolled ? 'bg-white/80 text-black shadow-md' : 'bg-black/30 text-white'}`}
    >
      <div className="container mx-auto flex items-center justify-between h-[90px] px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Image src={LogoImage} className="w-28 md:w-28" alt="Logo" />
          {/* <p className="text-xl md:text-3xl font-bold font-sans">PT. Handira Minergi Nusantara</p> */}
        </div>

        <div className="hidden lg:flex items-center gap-x-4">
          <div onClick={() => handleScrollTo('about')} className={classOptionNav}>
            {texts[language].aboutUs}
          </div>
          <div onClick={() => handleScrollTo('vision')} className={classOptionNav}>
            {texts[language].vision}
          </div>
          <div onClick={() => handleScrollTo('mision')} className={classOptionNav}>
            {texts[language].mission}
          </div>
          <div onClick={() => handleScrollTo('structure')} className={classOptionNav}>
            {texts[language].struktur}
          </div>
          <div onClick={() => handleScrollTo('competencies')} className={classOptionNav}>
            {texts[language].competencies}
          </div>
          <div onClick={() => handleScrollTo('project')} className={classOptionNav}>
            {texts[language].project}
          </div>{' '}
          <div className="items-center gap-x-4">
            <select value={language} onChange={(e) => setLanguage(e.target.value as LanguageType)} className="px-3 py-2 rounded-lg bg-gray-200 text-gray-800 cursor-pointer">
              <option value="en">English</option>
              <option value="id">Indonesia</option>
            </select>
          </div>
        </div>

        <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <IoMenuSharp size={30} />}
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-90 text-white flex flex-col items-center justify-center pt-16 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        } pointer-events-auto`}
      >
        <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
          <FaTimes size={30} />
        </div>
        <div className="flex flex-col gap-y-4 text-xl">
          <div onClick={() => handleScrollTo('about')} className="cursor-pointer text-center">
            {texts[language].aboutUs}
          </div>
          <div onClick={() => handleScrollTo('vision')} className="cursor-pointer text-center">
            {texts[language].vision}
          </div>
          <div onClick={() => handleScrollTo('mision')} className="cursor-pointer text-center">
            {texts[language].mission}
          </div>
          <div onClick={() => handleScrollTo('structure')} className="cursor-pointer text-center">
            {texts[language].struktur}
          </div>
          <div onClick={() => handleScrollTo('competencies')} className="cursor-pointer text-center">
            {texts[language].competencies}
          </div>
          <div onClick={() => handleScrollTo('project')} className="cursor-pointer text-center">
            {texts[language].project}
          </div>
        </div>
        <div className="lg:hidden items-center gap-x-4 mt-4">
          <select value={language} onChange={(e) => setLanguage(e.target.value as LanguageType)} className="px-3 py-2 rounded-lg bg-gray-200 text-gray-800 cursor-pointer">
            <option value="en">English</option>
            <option value="id">Indonesia</option>
          </select>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
