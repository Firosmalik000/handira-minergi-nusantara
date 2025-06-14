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
            'Prasetyo Aribowo was appointed as President Commissioner of PT Kawasan Industri Wijaya Kusuma (KIW) for the 2019–2024 period. His appointment was confirmed through a decree issued by the Minister of State-Owned Enterprises (BUMN), the Governor of Central Java, and the Regent of Cilacap, as shareholders of PT KIW.',
            "During his tenure, he was expected to bridge PT KIW with potential investors and enhance the company's strategic role in industrial development. In July 2024, he was succeeded by Dr. Sujarwanto Dwiatmoko, M.Si, who took over the position as President Commissioner of PT KIW.",
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
            'Prasetyo Aribowo diangkat sebagai Komisaris Utama PT Kawasan Industri Wijaya Kusuma (KIW) untuk periode 2019–2024. Pengangkatannya dikukuhkan melalui keputusan Menteri BUMN, Gubernur Jawa Tengah, dan Bupati Cilacap selaku pemegang saham PT KIW.',
            'Selama masa jabatannya, beliau diharapkan dapat menjembatani PT KIW dengan calon investor dan memperkuat peran strategis perusahaan dalam pengembangan industri. Pada Juli 2024, ia digantikan oleh Dr. Sujarwanto Dwiatmoko, M.Si sebagai Komisaris Utama PT KIW.',
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

  const { title, subtitle, items } = content[language];

  return (
    <section id="fleet" className="w-full py-16 bg-gray-50 px-6 md:px-24">
      <div className="text-center mb-12">
        <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 0.8 }} className="text-4xl font-bold text-gray-800 font-playfair">
          {title}
        </motion.h1>
        <motion.p whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.9, delay: 0.3 }} className="text-gray-500 mt-2 text-lg">
          {subtitle}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={item.img} alt={`Gallery ${item.id}`} className="w-full h-60 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="p-5 flex flex-col gap-3 flex-grow">
              <p className="text-gray-700 text-sm whitespace-pre-line">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Galery;
