'use client';

import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useLanguage } from '../hooks/UseLanguage';

const Contact = () => {
  const { language } = useLanguage();
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const content = {
    en: {
      title: 'Contact Us',
      address: 'Address',
      company: 'Company',
      phone: 'Phone:',
      fax: 'Fax:',
      email: 'Email:',

      follow: 'Follow Us',
    },
    id: {
      title: 'Kontak Kami',
      address: 'Alamat',
      company: 'Perusahaan',
      phone: 'Telepon:',
      fax: 'Faks:',
      email: 'Email:',

      follow: 'Ikuti Kami',
    },
  };

  return (
    <section id="contact" className="w-full py-16 px-8 md:px-[100px] flex flex-col md:flex-row justify-center gap-x-5 bg-[#1e4172]">
      <div className="w-full md:w-1/2">
        {/* Header Section */}
        <div className="py-8 border-b-2 my-5">
          <p className="text-white text-xl text-center md:text-left font-semibold font-playfair mb-3">PT Salam Pesona Bahari</p>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-[100px]">
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold  font-playfair mb-6 text-white">{content[language].title}</h1>
            <div className="max-w-lg flex flex-col gap-y-2 mb-8">
              <div className="flex justify-center md:justify-start">
                <FaEnvelope className="mr-2 mt-1  text-white" />
                <p className="text-white">salampesonabahari.jkt@gmail.com</p>
              </div>
              <div className="flex justify-center md:justify-start">
                <FaPhone className="mr-2 text-white" />
                <p className="text-white">+62-812-9261-4791</p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <div className="max-w-lg flex flex-col gap-y-2 text-white font-playfair mb-6 text-center md:text-left">
              <p className="text-xl font-bold text-white font-playfair mb-6">{content[language].follow}</p>
              <div className="flex gap-x-3 justify-center md:justify-start">
                <a href="https://www.instagram.com/spb_jkt/?utm_source=ig_web_button_share_sheet" className="hover:scale-110 transition duration-300" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-xl text-pink-600" />
                </a>
                <a href="https://web.facebook.com/people/Drond-Step/100078855115874/?locale=hi_IN&_rdc=1&_rdr" className="hover:scale-110 transition duration-300" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-xl text-blue-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full flex flex-col md:flex-row md:w-1/3 gap-[50px]">
        <div className="py-8 my-5">
          <p className="text-xl font-semibold font-playfair mb-3 text-center text-white">{content[language].company}</p>
          <p className="text-m text-center text-white" onClick={() => handleScrollTo('about')}>
            About
          </p>
          <p className="text-m text-center text-white" onClick={() => handleScrollTo('vision')}>
            Visi
          </p>
          <p className="text-m text-center text-white" onClick={() => handleScrollTo('mision')}>
            Misi
          </p>
          <p className="text-m text-center text-white" onClick={() => handleScrollTo('devisi')}>
            Devisi
          </p>
        </div>
        <div className="py-8 my-5">
          <p className="text-xl font-semibold font-playfair mb-3 text-center md:text-left text-white">{content[language].address}</p>
          <p className="text-m text-center md:text-left text-white">Maspion Plaza LT.2 No 2C Kota Jakarta Utara</p>
        </div>
        {/* Uncomment the following section to include the map */}
        {/* <div className="w-full md:w-[500px] md:h-[300px] h-[300px] rounded-xl overflow-hidden">
          <iframe
            title="Location Map"
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jl.Taman%20Sari%204%20No.7a%20Rt%20001%20Rw%20003%20Maphar%20Kec.Taman%20Sari%20Jakarta%20Barat+(Contact%20Us)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
