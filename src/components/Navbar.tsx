'use client';
import { useState, useEffect } from 'react';
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
    <>
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className={`fixed top-0 z-50 w-[90%] transition-all duration-500  mt-6 rounded-2xl
        ${isScrolled ? 'bg-white/60 text-black shadow-md backdrop-blur-md' : 'bg-transparent text-white'}`}
        >
          <div className="container mx-auto flex items-center justify-between h-[60px] md:h-[80px] px-4 md:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" width={100} height={100} className=" w-full" alt="Logo" />
            </div>

            <div className="hidden lg:flex items-center gap-x-4">
              <div onClick={() => handleScrollTo('about')} className={classOptionNav}>
                {texts[language].aboutUs}
              </div>
              <div onClick={() => handleScrollTo('project')} className={classOptionNav}>
                {texts[language].project}
              </div>{' '}
              <div onClick={() => handleScrollTo('competencies')} className={classOptionNav}>
                {texts[language].competencies}
              </div>{' '}
              <div onClick={() => handleScrollTo('vision')} className={classOptionNav}>
                {texts[language].vision}
              </div>
              <div onClick={() => handleScrollTo('mision')} className={classOptionNav}>
                {texts[language].mission}
              </div>
              <div onClick={() => handleScrollTo('structure')} className={classOptionNav}>
                {texts[language].struktur}
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-x-4">
              <select value={language} onChange={(e) => setLanguage(e.target.value as LanguageType)} className="px-3 py-2 rounded-lg bg-gray-200 text-gray-800 cursor-pointer">
                <option value="en">English</option>
                <option value="id">Indonesia</option>
              </select>
            </div>

            <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <IoMenuSharp size={30} />}
            </button>
          </div>
        </motion.div>{' '}
        <div
          className={`lg:hidden fixed inset-0 z-50 bg-gray-900/75 min-h-screen text-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform ${
            isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          {/* Tombol Close */}
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors duration-300">
            <FaTimes size={28} />
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col gap-6 text-xl text-center">
            <button onClick={() => handleScrollTo('about')} className="hover:text-yellow-300 transition">
              {texts[language].aboutUs}
            </button>
            <button onClick={() => handleScrollTo('project')} className="hover:text-yellow-300 transition">
              {texts[language].project}
            </button>
            <button onClick={() => handleScrollTo('competencies')} className="hover:text-yellow-300 transition">
              {texts[language].competencies}
            </button>
            <button onClick={() => handleScrollTo('vision')} className="hover:text-yellow-300 transition">
              {texts[language].vision}
            </button>
            <button onClick={() => handleScrollTo('mision')} className="hover:text-yellow-300 transition">
              {texts[language].mission}
            </button>
            <button onClick={() => handleScrollTo('structure')} className="hover:text-yellow-300 transition">
              {texts[language].struktur}
            </button>
          </nav>

          {/* Language Selector */}
          <div className="mt-8">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as LanguageType)}
              className="px-4 py-2 rounded-md bg-white text-gray-800 shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
            >
              <option value="en">English</option>
              <option value="id">Indonesia</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
