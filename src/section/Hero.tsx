'use client';

import { useEffect, useState } from 'react';
import HeroImage from '../img/slide1satu.jpeg';
import HeroImage2 from '../img/slide2.jpg';
import HeroImage3 from '../img/slide3.jpg';
import HeroImage4 from '../img/slide4.jpg';
import HeroImage5 from '../img/slide5.jpg';
import HeroImage6 from '../img/Kargo2.jpg';
import HeroImage7 from '../img/Kunjungan.jpg';

import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Hero = () => {
  const images = [HeroImage, HeroImage2, HeroImage3, HeroImage4, HeroImage5, HeroImage6, HeroImage7];
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
      {' '}
      <button className="absolute left-5 top-1/2 transform -translate-y-1/2 px-4 py-4 bg-black bg-opacity-50 text-white rounded-full shadow-lg hover:bg-gray-600 transition duration-200 z-20" onClick={prevImage}>
        <GrFormPrevious />
      </button>
      <button className="absolute right-5 top-1/2 transform -translate-y-1/2 px-4 py-4 bg-black bg-opacity-50 text-white rounded-full shadow-lg hover:bg-gray-600 transition duration-200 z-20" onClick={nextImage}>
        <GrFormNext />
      </button>
    </section>
  );
};

export default Hero;
