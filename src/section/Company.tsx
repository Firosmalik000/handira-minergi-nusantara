'use client';
import { useLanguage } from '@/hooks/UseLanguage';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = ['/1.JPG', '/2.JPG', '/3.JPG'];

const Company = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto text-center overflow-hidden">
        <motion.h1 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }} className="text-4xl font-bold text-gray-800 mb-8 font-playfair">
          {language === 'en' ? 'OUR COMPANY' : 'PERUSAHAAN KAMI'}
        </motion.h1>

        <div className="relative w-full max-w-md mx-auto ">
          <div className="flex gap-x-4 transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((src, index) => (
              <div key={index} className={`w-full flex-shrink-0  rounded-xl  relative `}>
                <Image src={src} width={300} height={400} alt={`Company Slide ${index + 1}`} className="object-cover w-full h-[400px] rounded-xl" />
                <div className={`absolute top-0 left-0 w-full h-full ${index === currentIndex ? '' : 'bg-black/60'} `}></div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'} transition duration-300`}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
