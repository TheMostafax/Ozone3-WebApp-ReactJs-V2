import React from 'react';

import Batal from '../../assets/12.jpg';
import Nascar from '../../assets/13.jpg';
import think from '../../assets/14.jpg';
import man from '../../assets/15.jpg';

const Clients = () => {
  return (
    <div name='client' className='w-full min-h-screen bg-gradient-to-b from-red-700 to-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-white my-10'>Clients said about us</h2>
        </div>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white shadow-md rounded-lg overflow-hidden border-4 border-black'>
            <img className='w-full h-60 object-contain' src={Batal} alt='Batal' />
            <div className='p-6'>
              <p className='text-gray-900 text-lg mb-4'>
                "Ozone3 Studio's acting classes helped me take my craft to the next level. The instructors were knowledgeable, supportive, and pushed me to be my best."
              </p>
            </div>
          </div>
          <div className='bg-white shadow-md rounded-lg overflow-hidden border-4 border-black'>
            <img className='w-full h-60 object-contain' src={Nascar} alt='Nascar' />
            <div className='p-6'>
              <p className='text-gray-900 text-lg mb-4'>
                "I've recorded at a lot of studios over the years, but Ozone3 Studio is by far my favorite. The engineers are top-notch, the equipment is state-of-the-art, and the environment is relaxed and comfortable."
              </p>
            </div>
          </div>
          <div className='bg-white shadow-md rounded-lg overflow-hidden border-4 border-black'>
            <img className='w-full h-60 object-contain' src={man} alt='Think' />
            <div className='p-6'>
              <p className='text-gray-900 text-lg mb-4'>
                "Ozone3 Studio was the perfect partner for our podcast. They provided us with high-quality recordings, expert editing, and a streamlined production process. We couldn't have done it without them."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;