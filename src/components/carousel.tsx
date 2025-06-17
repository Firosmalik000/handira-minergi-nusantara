'use client';
import { useState, useRef, useEffect, useId } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface SlideData {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty('--x', `${xRef.current}px`);
      slideRef.current.style.setProperty('--y', `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + r.width / 2);
    yRef.current = event.clientY - (r.top + r.height / 2);
  };

  const handleMouseLeave = () => {
    xRef.current = 100;
    yRef.current = 0;
  };

  const { title, description, icon, color } = slide;

  return (
    <div className="perspective-[1200px] transform-style-preserve-3d">
      <motion.li
        ref={slideRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative w-[400px] h-[300px] rounded-2xl shadow-lg overflow-hidden transition-all duration-500  ${color} cursor-pointer group ${current !== index ? 'scale-[0.96] rotate-x-[8deg]' : 'scale-100'}`}
        style={{
          transformOrigin: 'bottom',
        }}
      >
        {/* Background Layer */}
        <div
          className={`absolute inset-0 backdrop-blur-md transition-transform duration-150 ease-in-out`}
          style={{
            transform: current === index ? 'translate3d(calc(var(--x)/30), calc(var(--y)/30), 0)' : 'none',
          }}
        />
        {/* Extra blur overlay when active */}
        {current === index && <div className="absolute inset-0 backdrop-blur-sm transition-all duration-1000" />}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 text-center">
          <div className="text-8xl md:text-9xl lg:text-10xl text-orange-500 group-hover:text-white">{icon}</div>

          <div>
            <h2 className="text-start text-xl md:text-4xl lg:text-4xl font-bold  text-orange-500 group-hover:text-white">{title}</h2>
            <p className="text-start text-sm md:text-base lg:text-lg text-gray-600 group-hover:text-white">{description}</p>
          </div>
        </div>
      </motion.li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center justify-center mx-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 shadow-md hover:scale-110 active:scale-95 transition-transform duration-200 ${
        type === 'previous' ? 'rotate-180' : ''
      }`}
      title={title}
      onClick={handleClick}
    >
      <FaArrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleSlideClick = (index: number) => {
    if (index !== current) setCurrent(index);
  };

  const id = useId();

  return (
    <div className="relative w-full max-w-[90vw] md:w-[70vmin] md:h-[350px] mx-auto " aria-labelledby={`carousel-heading-${id}`}>
      <ul
        className="flex transition-transform duration-1000 ease-in-out mb-4"
        style={{
          width: `calc(${slides.length} * 400px)`, // Asumsi lebar per slide 500px
          transform: `translateX(-${current * 400}px)`, // Sesuaikan transformasi
        }}
      >
        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} index={index} current={current} handleSlideClick={handleSlideClick} />
        ))}
      </ul>

      <div className=" flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl type="previous" title="Previous" handleClick={handlePreviousClick} />
        <CarouselControl type="next" title="Next" handleClick={handleNextClick} />
      </div>
    </div>
  );
}
