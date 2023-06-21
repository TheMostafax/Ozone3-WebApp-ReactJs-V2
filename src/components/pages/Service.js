import React from 'react';

import Batal from '../../assets/8.jpg';
import Nascar from '../../assets/9.jpg';
import think from '../../assets/10.jpg';
import Dark from '../../assets/11.jpg';

const Services = () => {
  return (
    <div name='service' className='w-full min-h-screen bg-gradient-to-b from-blue-800 to-red-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-white my-10'>Our Services</h2>
          <p className='mt-4 text-2xl text-yellow-400'>Ozone3 studio offers services for clients</p>
        </div>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-transparent shadow-md rounded-lg overflow-hidden border-4 border-yellow-500'>
            <img className='w-full h-60 object-contain' src={Batal} alt='Recording and Mixing Services' />
            <div className='p-6'>
              <p className='text-yellow-500 text-lg mb-4 font-serif'>
                Ozone3 Studio offers professional recording and mixing services.
              </p>
            </div>
          </div>
          <div className='bg-transparent shadow-md rounded-lg overflow-hidden border-4 border-yellow-500'>
            <img className='w-full h-60 object-contain' src={Nascar} alt='Vocal Coaching Services' />
            <div className='p-6'>
            <p className='text-yellow-500 text-lg mb-4 font-serif'>
                Ozone3 Studio offers vocal coaching services.
              </p>
            </div>
          </div>
          <div className='bg-transparent shadow-md rounded-lg overflow-hidden border-4 border-yellow-500'>
            <img className='w-full h-60 object-contain' src={think} alt='Acting Classes' />
            <div className='p-6'>
            <p className='text-yellow-500 text-lg mb-4 font-serif'>
                Ozone3 Studio offers acting classes for clients.
              </p>
            </div>
          </div>
          <div className='bg-transparent shadow-md rounded-lg overflow-hidden border-4 border-yellow-500'>
            <img className='w-full h-60 object-contain' src={Dark} alt='Music Production Services' />
            <div className='p-6'>
            <p className='text-yellow-500 text-lg mb-4 font-serif'>
                Ozone3 Studio offers music production services to clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;