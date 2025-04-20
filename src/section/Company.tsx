'use client';
import { useLanguage } from '@/hooks/UseLanguage';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Company = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl font-bold text-gray-800 mb-8 font-playfair"
        >
          {language === 'en' ? 'OUR COMPANY' : 'PERUSAHAAN KAMI'}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="rounded-2xl  transition duration-300 w-full flex items-center justify-center"
            >
              <Image
                src={`/${index + 1}.JPG`}
                width={300}
                height={300}
                alt={`Company Logo ${index + 1}`}
                className="object-cover w-[300px] h-[400px] rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;
