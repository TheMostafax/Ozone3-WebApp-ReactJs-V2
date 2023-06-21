import React from 'react';


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#070707] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            About Us
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi,  We are Ozone Studio</p>
            </div>
            <div>
              <p className='text-1xl font-serif'>Ozone3 Studio is a premier recording, singing, and acting studio dedicated to providing exceptional services to artists, musicians, and actors. Our studio is designed to provide a comfortable and inspiring environment where artists can create, collaborate, and bring their ideas to life.


     </p>  
     <p className='text-1xl font-serif' >At Ozone3 Studio, we understand that every artist has unique needs and preferences. That's why we offer a range of services to cater to your specific requirements, including music production, audio engineering, vocal recording, mixing and mastering, and video production.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
