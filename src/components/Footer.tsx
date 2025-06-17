'use client';

import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../hooks/UseLanguage';
import { motion } from 'framer-motion';

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
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: false }}
				className="w-[90%] bg-gradient-to-r from-[#2896ba] to-[#14516b] text-white px-8 md:px-[100px] py-12 rounded-2xl shadow-lg shadow-gray-400"
			>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{/* Company Info */}
					<motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }} className="flex flex-col items-center md:items-start gap-y-2">
						<h2 className="text-3xl font-bold mt-4 text-center md:text-left">PT Hadira Energi Indonesia</h2>
						<p>Your trusted partner in energy solutions.</p>
					</motion.div>

					{/* Address */}
					<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: false }} className="text-center md:text-left">
						<h2 className="text-xl font-semibold mb-4">{content[language].address}</h2>
						<p>Jl. Gajahmada 68B, Semarang, Central Java, Indonesia 50138</p>
					</motion.div>

					{/* Contact & Social */}
					<motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }} className="text-center md:text-left">
						<h2 className="text-xl font-semibold mb-4">{content[language].company}</h2>
						<div className="flex justify-center md:justify-start items-start mb-3">
							<FaEnvelope className="mt-1 mr-2" />
							<p>info@hadiraenergi.com</p>
						</div>
						<div className="flex justify-center md:justify-start items-start mb-3">
							<FaPhone className="mt-1 mr-2" />
							<p>+62-813-2880-0900</p>
						</div>
					</motion.div>
				</div>

				<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: false }} className="mt-12 border-t pt-4 text-center text-sm text-gray-200">
					&copy; {new Date().getFullYear()} PT Hadira Energi Indonesia. All rights reserved.
				</motion.div>
			</motion.div>
		</div>
  );
};

export default Footer;
