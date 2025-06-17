/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/UseLanguage';

const Partner = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Our Partners',
      items: [
        { id: 1, img: '/part1.jpg', text: 'PT Bima Nusapersada Sakti' },
        { id: 2, img: '/part2.jpg', text: 'PT Lintech Duta Pratama' },
        { id: 3, img: '/part3.jpg', text: 'PT Opsico Trada Nusantara (OTN)' },
      ],
    },
    id: {
      title: 'Mitra Kami',
      items: [
        { id: 1, img: '/part1.jpg', text: 'PT Bima Nusapersada Sakti' },
        { id: 2, img: '/part2.jpg', text: 'PT Lintech Duta Pratama' },
        { id: 3, img: '/part3.jpg', text: 'PT Opsico Trada Nusantara (OTN)' },
      ],
    },
  };

  const { title, items } = content[language];

  return (
    <section id="partner" className="w-full py-16 bg-gray-50 px-6 md:px-24">
      <div className="text-center mb-12">
        <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 0.8 }} className="text-4xl font-bold text-gray-800 font-playfair">
          {title}
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={item.img} alt={`Partner ${item.id}`} className="w-full h-60 object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105" />
            <div className="p-5 flex flex-col items-center text-center flex-grow">
              <p className="text-gray-800 font-medium text-base">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partner;
