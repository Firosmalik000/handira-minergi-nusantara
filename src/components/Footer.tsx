'use client';

import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../hooks/UseLanguage';

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Contact Us',
      address: 'Address',
      company: 'Company',
      phone: 'Phone:',
      email: 'Email:',
    },
    id: {
      title: 'Kontak Kami',
      address: 'Alamat',
      company: 'Perusahaan',
      phone: 'Telepon:',
      email: 'Email:',
    },
  };

  return (
    <div className="w-full flex justify-center items-center bg-white py-4">
      <div className="w-[90%] bg-gradient-to-r from-[#2896ba] to-[#14516b] text-white px-8 md:px-[100px] py-12 rounded-2xl   shadow-lg shadow-gray-400">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start gap-y-2">
            {/* <Image src="/logo.png" width={120} height={60} alt="Logo" className="object-contain" /> */}
            <h2 className="text-3xl font-bold font-playfair mt-4 text-center md:text-left">PT Handira Minergi Nusantara</h2>
            <p>Your trusted partner in energy solutions.</p>
          </div>

          {/* Address */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold font-playfair mb-4">{content[language].address}</h2>
            <p>Jl. Gajahmada 68B, Semarang, Central Java, Indonesia 50138</p>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold font-playfair mb-4">{content[language].company}</h2>
            <div className="flex justify-center md:justify-start items-start mb-3">
              <FaEnvelope className="mt-1 mr-2" />
              <p>headoffice@hadiraminergi.com</p>
            </div>
            <div className="flex justify-center md:justify-start items-start mb-3">
              <FaPhone className="mt-1 mr-2" />
              <p>+62-813-2880-0900</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-4 text-center text-sm text-gray-200">&copy; {new Date().getFullYear()} PT Handira Minergi Nusantara. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
