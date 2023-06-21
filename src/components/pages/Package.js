import React from 'react';
import Batal from '../../assets/20.jpg';
import Nascar from '../../assets/21.jpg';
import think from '../../assets/22.jpg';
import { Link } from 'react-scroll';

const Package = () => {
  return (
    <div name="package" className="w-full h-screen bg-gradient-to-b from-red-800 to-blue-500">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div>
          <p className="text-4xl md:text-6xl font-bold text-center text-yellow-300">Our Packages</p>
        </div>
        <div className="w-120 grid grid-cols-2 sm:grid-cols-3 gap-3 text-center py-8 justify-center items-center">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="w-full h-40 md:h-64 object-cover rounded-t-lg" src={Batal} alt="Batal" />
            <div className="p-4">
              <p className="text-lg md:text-xl font-medium mb-2">Starter</p>
              <ul className="text-left text-gray-700 text-sm md:text-base list-disc list-inside">
                <li>1 hr of recording for 200 EGB</li>
                <li>5 friends</li>
                <li>24/7 Support</li>
              </ul>
              <button className="bg-yellow-400 py-2 px-4 mt-4 inline-block rounded-md hover:bg-yellow-500 transition-colors duration-300">
                <Link to="contact" smooth={true} duration={500}>
                  Book Now
                </Link>
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="w-full h-40 md:h-64 object-cover rounded-t-lg" src={Nascar} alt="Nascar" />
            <div className="p-4">
              <p className="text-lg md:text-xl font-medium mb-2">Silver</p>
              <ul className="text-left text-gray-700 text-sm md:text-base list-disc list-inside">
                <li>2 hr of recording for 300 EGB</li>
                <li>10 friends</li>
                <li>24/7 Support</li>
              </ul>
              <button className="bg-yellow-400 py-2 px-4 mt-4 inline-block rounded-md hover:bg-yellow-500 transition-colors duration-300">
                <Link to="contact" smooth={true} duration={500}>
                  Book Now
                </Link>
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <img className="w-full h-40 md:h-64 object-cover rounded-t-lg" src={think} alt="Think" />
            <div className="p-4">
              <p className="text-lg md:text-xl font-medium mb-2">Premium</p>
              <ul className="text-left text-gray-700 text-sm md:text-base list-disc list-inside">
                <li>3 hr of recording for 500 EGB</li>
                <li>15 friends</li>
                <li>24/7 Support</li>
              </ul>
              <button className="bg-yellow-400 py-2 px-4 mt-4 inline-block rounded-md hover:bg-yellow-500 transition-colors duration-300">
                <Link to="contact" smooth={true} duration={500}>
                  Book Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;