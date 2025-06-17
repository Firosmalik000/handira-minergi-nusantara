'use client';

import { useLanguage } from '@/hooks/UseLanguage';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const { language } = useLanguage();

  const content = {
		en: {
			title: "ABOUT US",
			tag: "Where Innovation Meets Energy Excellence",
			description: `PT. HADIRA ENERGI INDONESIA is a premier Indonesian energy project development and management firm specializing in the oil, gas, LNG, and offshore construction sectors. Founded by a team of highly experienced industry professionals, the company excels at delivering integrated solutions that bridge international technology and investment with local execution excellence.

Positioned as a strategic partner for both government entities and multinational energy corporations, PT. HADIRA ENERGI INDONESIA brings unparalleled expertise in navigating Indonesia’s regulatory landscape, managing complex stakeholder relationships, and ensuring the successful execution of large-scale energy infrastructure projects.`,
		},
		id: {
			title: "TENTANG KAMI",
			tag: "Di Mana Inovasi Bertemu Keunggulan Energi",
			description: `PT. HADIRA ENERGI INDONESIA adalah perusahaan pengembangan dan manajemen proyek energi terkemuka di Indonesia yang berspesialisasi dalam sektor minyak, gas, LNG, dan konstruksi lepas pantai. Didirikan oleh tim profesional berpengalaman di industri ini, perusahaan unggul dalam memberikan solusi terpadu yang menjembatani teknologi serta investasi internasional dengan keunggulan eksekusi lokal.

Sebagai mitra strategis bagi lembaga pemerintah maupun perusahaan energi multinasional, PT. HADIRA ENERGI INDONESIA menghadirkan keahlian luar biasa dalam menavigasi regulasi di Indonesia, mengelola hubungan pemangku kepentingan yang kompleks, serta memastikan keberhasilan pelaksanaan proyek infrastruktur energi skala besar.`,
		},
  };

  const { title, tag, description } = content[language];
  const descriptionParagraphs = description.split("\n\n");

  return (
		<section id="about" className="w-full min-h-screen flex flex-col md:flex-row justify-center bg-gray-950 px-4 md:px-32 py-24">
			{/* Sisi kiri: Gambar */}
			<div className="relative w-full md:w-1/3 h-[400px] md:h-auto">
				<Image src="/14.JPG" alt="Background Image" fill className="object-cover rounded-2xl" priority />
			</div>

			{/* Sisi kanan: Konten */}
			<motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 0.8 }} className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 md:py-0 text-white relative z-20">
				<motion.h2 className="text-2xl md:text-4xl text-center md:text-left font-bold mb-4">{title}</motion.h2>
				<motion.h3 className="text-xl md:text-2xl font-semibold text-center md:text-left mb-6">{tag}</motion.h3>

				{descriptionParagraphs.map((para, index) => (
					<motion.p key={index} className="text-sm md:text-lg leading-relaxed indent-8 text-justify mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 * index }}>
						{para}
					</motion.p>
				))}
			</motion.div>
		</section>
  );
};

export default About;
