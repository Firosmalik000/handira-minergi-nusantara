'use client';

import { useLanguage } from '../hooks/UseLanguage';

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: '© 2024 All rights reserved.',
    id: '© 2024 Semua hak dilindungi.',
  };

  return (
    <footer className="border-t-2 py-6 px-[100px] bg-[#1b1717]">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        <p className="text-sm">{content[language]}</p>
      </div>
    </footer>
  );
};

export default Footer;
