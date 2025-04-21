import React from 'react';

const Map = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white py-4 ">
      <div className="w-[90%] h-[300px]  rounded-xl overflow-hidden shadow-lg shadow-gray-400 ">
        <iframe
          title="Location Map"
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.276671748679!2d110.41818917475757!3d-6.976647293024097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b54a267d35d%3A0x6ff1785f25682c42!2sJl.%20Gajahmada%20No.68b%2C%20Kembangsari%2C%20Kec.%20Semarang%20Tengah%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050133!5e0!3m2!1sen!2sid!4v1745252130574!5m2!1sen!2sid"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
