import React from 'react';

const Location = () => {
  return (
    <div  id="location" className="w-full h-screen bg-gradient-to-b from-red-800 to-violet-500 flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl font-bold mb-5 my-10">Our Location</h1>
      <div className="flex items-center border-4 border-black">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.174920487775!2d31.274300200000003!3d29.9744026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839f84437301f%3A0xb4717a33e37f30e!2sOzone%20Studios!5e0!3m2!1sen!2seg!4v1685913320530!5m2!1sen!2seg"
          width="550"
          height="550"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <a
        href="https://www.google.com/maps/place/Ozone+Studios/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-red-800 py-3 px-20 rounded-full font-bold mt-5 hover:bg-red-800 hover:text-white"
      >
        View on Map
      </a>
    </div>
  );
};

export default Location;