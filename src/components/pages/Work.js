import React from 'react';

import Batal from '../../assets/2.jpg';
import Nascar from '../../assets/3.jpg';
import think from '../../assets/4.jpg';
import Dark from '../../assets/5.jpg';



const Skills = () => {
    return (
      <div name='work' className='w-full h-screen bg-gradient-to-b from-blue-500 to-violet-500'>
     
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
         
            <div>
                <p className='text-6xl font-bold '>Our Works</p>
               
            </div>
            <p className='mt-4 text-2xl'> Watch Some of our works here.</p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-30 mx-auto' src={Batal} alt="HTML icon" />
                    <p className='my-4'>Batal</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-30 mx-auto' src={Nascar} alt="HTML icon" />
                    <p className='my-4'>Nascar</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-30 mx-auto' src={think} alt="HTML icon" />
                    <p className='my-4'>Think</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-30 mx-auto' src={Dark} alt="HTML icon" />
                    <p className='my-4'>Dark</p>
                </div>
               
            
                
               
            </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
  