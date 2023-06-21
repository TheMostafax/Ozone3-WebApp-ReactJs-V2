import React from 'react';


export default function Contact() {
  return (
    <div name='contact' className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-violet-500 to-red-700">
       <div>
                <p className='text-6xl font-bold text-center my-5 '>Contact Form</p>
               
            </div>
      <div className="w-full max-w-md p-6 bg-gray-200 rounded-lg shadow-lg border-4 border-black">
        
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <form id="contact-form" method="POST" className="text-center">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 font-serif" htmlFor="name">Full Name</label>
            <input className="border border-black p-2 w-full rounded-md input-areas text-black placeholder-gray-400 " id="txt"  placeholder="Enter your name..."  type="text" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 font-serif" htmlFor="email">Email</label>
            <input className="border border-black p-2 w-full rounded-md input-areas text-black placeholder-gray-400 " id="txt"  placeholder="Enter your email..."  type="email" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 font-serif" htmlFor="message">Message</label>
            <textarea className="border border-black p-2 w-full rounded-md input-areas text-black placeholder-gray-400 " id="txt" rows="6" placeholder="Enter your message..."  name="message" required></textarea>
          </div>
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-green-600 " type="submit" id="bttt">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}