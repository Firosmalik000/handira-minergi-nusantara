// 'use client';
// import { useLanguage } from '@/hooks/UseLanguage';
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const images = ['/1.JPG', '/2.JPG', '/3.JPG'];

// const Company = () => {
//   const { language } = useLanguage();
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-16 px-6 bg-gray-100">
//       <div className="max-w-screen-xl mx-auto text-center overflow-hidden">
//         <motion.h1 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }} className="text-4xl font-bold text-gray-800 mb-8 font-playfair">
//           {language === 'en' ? 'OUR COMPANY' : 'PERUSAHAAN KAMI'}
//         </motion.h1>

//         <div className="relative w-full h-screen">
//           <div className="relative w-full h-[500px] overflow-hidden">
//             <div className="flex w-full h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//               {images.map((src, index) => (
//                 <div key={index} className="w-full h-full flex-shrink-0 relative">
//                   <Image src={src} alt={`Company Slide ${index + 1}`} fill className="object-cover w-full h-full rounded-xl" />

//                   <div className={`absolute top-0 left-0 w-full h-full ${index === currentIndex ? '' : 'bg-black/60'}`}></div>
//                 </div>
//               ))}
//             </div>

//             {/* Navigation Dots */}
//             <div className="flex justify-center mt-4 gap-2 absolute bottom-4 left-1/2 -translate-x-1/2">
//               {images.map((_, index) => (
//                 <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'} transition duration-300`}></button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Company;

'use client';
import { useEffect, useState } from 'react';

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Company = () => {
  const images = ['/1.JPG', '/2.JPG', '/3.JPG'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
      }}
    >
      <button className="absolute left-5 top-1/2 transform -translate-y-1/2 px-4 py-4 bg-black bg-opacity-50 text-white rounded-full shadow-lg hover:bg-gray-600 transition duration-200 z-20" onClick={prevImage}>
        <GrFormPrevious />
      </button>
      <button className="absolute right-5 top-1/2 transform -translate-y-1/2 px-4 py-4 bg-black bg-opacity-50 text-white rounded-full shadow-lg hover:bg-gray-600 transition duration-200 z-20" onClick={nextImage}>
        <GrFormNext />
      </button>
    </section>
  );
};

export default Company;
