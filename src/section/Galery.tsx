/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useLanguage } from '@/hooks/UseLanguage';
import { motion } from 'framer-motion';

const Galery = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Gallery & Spotlight',
      subtitle: 'Explore key moments in energy and industrial development',
      items: [
        {
          id: 1,
          img: '/gal1.jpg',
          text: [
            'Prasetyo Aribowo was appointed as President Commissioner of PT Kawasan Industri Wijaya Kusuma (KIW) for the 2019–2024 period.',
            'During his tenure, he was expected to bridge PT KIW with potential investors and enhance the company\'s strategic role in industrial development. In July 2024, he was succeeded by Dr. Sujarwanto Dwiatmoko, M.Si.',
          ].join('\n\n'),
        },
        {
          id: 2,
          img: '/gal2.jpg',
          text: "The Audience with Indonesian Vice Minister of Foreign Affairs, Arief Havas Oegroseno, 2025 focused on Indonesia's strategic role in global critical mineral governance.",
        },
        {
          id: 3,
          img: '/gal3.jpg',
          text: "The Audience with Indonesian Vice Minister of Energy and Mineral Resources, Yuliot Tanjung, in 2024 focused on Indonesia's energy policies and investment strategies.",
        },
        {
          id: 4,
          img: '/gal4.jpg',
          text: "The Audience with Deputy of Monetization and Finance at SKK Migas, Kurnia Chaori, in 2023 focused on Indonesia's gas supply strategy and domestic energy priorities.",
        },
      ],
    },
    id: {
      title: 'Galeri & Sorotan',
      subtitle: 'Momen penting dalam energi dan pengembangan industri',
      items: [
        {
          id: 1,
          img: '/gal1.jpg',
          text: [
            'Prasetyo Aribowo diangkat sebagai Komisaris Utama PT Kawasan Industri Wijaya Kusuma (KIW) untuk periode 2019–2024.',
            'Selama masa jabatannya, beliau diharapkan dapat menjembatani PT KIW dengan calon investor dan memperkuat peran strategis perusahaan dalam pengembangan industri. Pada Juli 2024, ia digantikan oleh Dr. Sujarwanto Dwiatmoko, M.Si.',
          ].join('\n\n'),
        },
        {
          id: 2,
          img: '/gal2.jpg',
          text: 'Audiensi dengan Wakil Menteri Luar Negeri RI, Arief Havas Oegroseno, tahun 2025 membahas peran strategis Indonesia dalam tata kelola mineral kritis global.',
        },
        {
          id: 3,
          img: '/gal3.jpg',
          text: 'Audiensi dengan Wakil Menteri Energi dan Sumber Daya Mineral, Yuliot Tanjung, tahun 2024 membahas kebijakan energi dan strategi investasi Indonesia.',
        },
        {
          id: 4,
          img: '/gal4.jpg',
          text: 'Audiensi dengan Deputi Monetisasi dan Keuangan SKK Migas, Kurnia Chaori, tahun 2023 membahas strategi pasokan gas Indonesia dan prioritas energi dalam negeri.',
        },
      ],
    },
  };

  const imageGal = Array.from({ length: 21 }, (_, i) => `/gall${i + 1}.jpg`);

  const { title, subtitle, items } = content[language];

  return (
    <section id="fleet" className="w-full py-20 bg-gray-50 px-6 md:px-20">
      <div className="text-center mb-14">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 font-playfair"
        >
          {title}
        </motion.h1>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-gray-500 mt-3 text-lg"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Section: Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
        {imageGal.map((item, index) => (
          <motion.div
            key={index}
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={item}
              alt={`Gallery ${index + 1}`}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Section: Highlight Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={item.img}
              alt={`Highlight ${item.id}`}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Galery;
