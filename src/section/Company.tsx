'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const images = ['/slide1.jpg', '/slide2.jpg', '/slide3.jpg'];

const Company = () => {
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
    <section className="py-16 px-6 bg-gray-200">
      <div className="max-w-screen-xl mx-auto text-center overflow-hidden relative">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">OUR COMPANY</h1>

        <div className="relative w-full h-[500px] overflow-hidden rounded-xl">
          <div className="flex w-full h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((src, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <Image src={src} alt={`Company Slide ${index + 1}`} fill className="object-cover w-full h-full rounded-xl" />
                {/* Optional overlay effect */}
                {/* <div className="absolute top-0 left-0 w-full h-full bg-black/30 rounded-xl" /> */}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button onClick={prevImage} className="absolute left-5 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/50 text-white rounded-full hover:bg-gray-700">
            <GrFormPrevious />
          </button>
          <button onClick={nextImage} className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/50 text-white rounded-full hover:bg-gray-700">
            <GrFormNext />
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-4 gap-2 absolute bottom-4 left-1/2 -translate-x-1/2">
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
