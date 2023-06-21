import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 88) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed  w-full h-[70px] flex justify-between items-center px-4 text-gray-300 ${isScrolled ? "bg-black" : "bg-transparent"}`}>
      <div className="text-4xl cursor-pointer inline-flex items-center">
       <Link to='home' smooth={true} duration={500}>
      OZONE3  Studio
          </Link>
      </div>
      <div> <img src={Logo} alt='Logo Image' style={{ width: '50px' }} /></div>
      <div className="md:hidden" onClick={handleMenuClick}>
        {showMenu ? (
          <svg
            className="h-6 w-6 text-white cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.95 5.879l-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10 11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 text-white cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='cursor-pointer'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='mx-4 cursor-pointer'>
          <Link to='about' smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li className='mx-4 cursor-pointer'>
          <Link to='service' smooth={true} duration={500}>
            Our Services
          </Link>
        </li>
        <li className='mx-4 cursor-pointer'>
          <Link to='package' smooth={true} duration={500}>
            Our Packages
          </Link>
        </li>
        <li className='mx-4 cursor-pointer'>
          <Link to='work' smooth={true} duration={500}>
            Our Works
          </Link>
        </li>


        <li className='mx-4 cursor-pointer'>
          <Link to='client' smooth={true} duration={500}>
            Our Clients
          </Link>
        </li>
        <li className='mx-4 cursor-pointer'>
          <Link to='Demo' smooth={true} duration={500}>
            Demo
          </Link>
        </li>
        <li className='mx-4 cursor-pointer'>
          <Link to='location' smooth={true} duration={500}>
            Our Location
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex">
       
        <button className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-500 hover:text-white mx-2">
          <Link to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </button>
      </div>
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } md:hidden flex flex-col bg-gray-800 text-white w-full absolute top-16 left-0 z-10`}
      >
        
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
           About Us
        </Link>
        <Link
          to="service"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
           Our Services
        </Link>
        <Link
          to="package"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
           Our Packages
        </Link>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
          Our Works
        </Link>
        <Link
          to="client"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
           Our Clients
        </Link>
        <Link
          to="demo"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
           Demo
        </Link>
        <Link
          to="location"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
           Our Location
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="p-4 hover:bg-gray-700 cursor-pointer"
          onClick={handleMenuClick}
        >
          <button className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-500 hover:text-white mx-2">
         Contact Us
        </button>
        </Link>
      </div>
    
    </div>
  );
};

export default Navbar;