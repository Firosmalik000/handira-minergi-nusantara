'use client';

import { motion } from 'framer-motion';
// import Image from 'next/image';
import { useLanguage } from '../hooks/UseLanguage';

const defaultAvatarUrl = 'https://ui-avatars.com/api/?background=random&size=256&name=';

const leaders = [
  {
    name: 'Dr. Prasetyo Aribowo, SH., M.Soc.Sc',
    position: 'Commissioner',
    img: '', // Kosong = fallback
  },
  {
    name: 'Elfira Purnamasari, S.Kom., M.M',
    position: 'Commissioner',
    img: '', // Kosong = fallback
  },
  {
    name: 'Dr. Harto Listijo, S.E., M.Kom',
    position: 'President Director',
    img: '', // Kosong = fallback
  },
  {
    name: 'Janice Listijo, S.Ked',
    position: 'Director',
    img: '', // Kosong = fallback
  },
];

const Structures = () => {
  const { language } = useLanguage();

  const title = language === 'id' ? 'Struktur Organisasi' : 'Organizational Structure';

  return (
    <section id="structure" className="w-full bg-white py-20 px-4 md:px-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {language === 'id'
            ? 'Berikut adalah tim kepemimpinan kami yang memiliki pengalaman dan dedikasi tinggi dalam mengembangkan perusahaan.'
            : 'Meet our leadership team, bringing expertise and dedication to the development of our company.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {leaders.map((leader, index) => {
          const avatarUrl = leader.img || `${defaultAvatarUrl}${encodeURIComponent(leader.name)}`;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-lg">
                {/* Pakai tag <img> biasa karena src dari URL eksternal */}
                <img src={avatarUrl} alt={leader.name} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{leader.name}</h3>
              <p className="text-sm text-gray-500">{leader.position}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Structures;
