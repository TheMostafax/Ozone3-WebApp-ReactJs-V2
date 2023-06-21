import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/3.jpg'
import img2 from '../../assets/4.jpg'
import img3 from '../../assets/5.jpg'
import img4 from '../../assets/6.jpg'
import Typical from 'react-typical';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      name='home'
      className={`w-full h-screen  ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-black to-violet-500 text-black'
      }`}
    >
      <div className='max-w-4xl mx-auto px-8 flex flex-col justify-center h-full'>
        <Slider {...settings} className='w-full'>
          <div>
            <img src={img1} alt='img1' className='mx-auto w-full h-80 object-cover' />
          </div>
          <div>
            <img src={img2} alt='img2' className='mx-auto w-full h-80 object-cover' />
          </div>
          <div>
            <img src={img3} alt='img1' className='mx-auto w-full h-80 object-cover' />
          </div>
          <div>
            <img src={img4} alt='img2' className='mx-auto w-full h-80 object-cover' />
          </div>
        </Slider>
        <br />
        <div className='text-center flex flex-col justify-center items-center'>
          <h1 className='text-4xl sm:text-7xl font-bold text-white'>
            Welcome To Ozone3!
            <Typical steps={['Singing', 1000, 'Acting', 1000, 'Recording', 1000]} loop={Infinity} wrapper='p' />
          </h1>
          <p className='py-4 max-w-md mx-auto text-2xl text-red-500'>
            What are you waiting for?
          </p>
          <div className='flex flex-row sm:flex-row justify-center items-center'>
            <button
              className={`text-white group border-2 px-6 py-3 my-2 sm:mx-4 flex items-center hover:bg-fuchsia-50 hover:border-fuchsia-50 hover:text-black ${
                isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-pink-600 border-pink-700'
              }`}
              onClick={handleDarkMode}
            >
              {isDarkMode ? (
                <i className='fas fa-sun mr-2' />
              ) : (
                <i className='fas fa-moon mr-2' />
              )}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button
              className={`text-white border-2 px-6 py-3 my-2 flex items-center hover:border-yellow-200 hover:bg-blue-500 hover:text-black ${
                isDarkMode ? 'border-gray-600' : 'border-pink-700 bg-pink-600'
              }`}
            >
              <a href="https://www.instagram.com/ozone3.studios/"target='_blank'>
                Instagram
              </a>
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;