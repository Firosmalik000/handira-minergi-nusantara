'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { useLanguage } from '../hooks/UseLanguage';

const defaultAvatarUrl = 'https://ui-avatars.com/api/?background=random&size=256&name=';

const leaders = [
  {
    name: 'Dr. Prasetyo Aribowo, SH.M.Soc.Sc',
    position: 'President Commissioner',
    img: '/PRASETYO.PNG',
  },
  // {
  //   name: 'Elfira Purnamasari, S.Kom., M.M',
  //   position: 'Commissioner',
  //   img: '/ELFIRA.JPG',
  // },
  {
    name: 'Dr. Harto Listijo, S.E., M.Kom',
    position: 'President Director',
    img: '/HARTO.JPG',
  },
  // {
  //   name: 'Janice Listijo, S.Ked',
  //   position: 'Director',
  //   img: '/JANICE.JPG',
  // },
  {
    name: 'Bayu Maryono, S.T',
    position: 'Technical Director',
    img: '/hadura2.jpg',
  },
];

const Structures = () => {
  const { language } = useLanguage();

  const title = language === 'id' ? 'STRUKTUR ORGANISASI' : 'ORGANIZATIONAL STRUCTURE';

  return (
    <section id="structure" className="w-full bg-white py-20 px-4 md:px-24">
      <div className="text-center mb-16">
        <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} className="text-4xl font-bold  text-gray-800 mb-4">
          {title}
        </motion.h2>
        <motion.p whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} className="text-gray-600 text-lg max-w-2xl mx-auto">
          {language === 'id'
            ? 'Berikut adalah tim kepemimpinan kami yang memiliki pengalaman dan dedikasi tinggi dalam mengembangkan perusahaan.'
            : 'Meet our leadership team, bringing expertise and dedication to the development of our company.'}
        </motion.p>
      </div>
      <div className="flex justify-center w-full border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
          {leaders.map((leader, index) => {
            const avatarUrl = leader.img || `${defaultAvatarUrl}${encodeURIComponent(leader.name)}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-lg">
                  {/* Pakai tag <img> biasa karena src dari URL eksternal */}
                  {leader.img ? <Image src={leader.img} alt={leader.name} width={256} height={256} /> : null}
                  <img src={avatarUrl} alt={leader.name} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{leader.name}</h3>
                <p className="text-sm text-gray-500">{leader.position}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Structures;
