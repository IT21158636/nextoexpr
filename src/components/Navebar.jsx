import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // You need to pass an empty dependency array to useEffect.

  // navitem array
  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Service', path: 'service' },
    { link: 'About', path: 'about' },
    { link: 'Testimonial', path: 'testimonial' },
    { link: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`w-full ${isSticky ? 'bg-white' : 'bg-transparent'} fixed top-0 left-0 right-0 duration-300`}>
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          <Link to="home" spy={true} smooth={true} offset={-100} className="text-2xl font-semibold flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-10 inline-block" />
            <span className="text-naturalPrimary">NEXTOEX</span>
          </Link>
          {/* navitem large devices */}
          <ul className="lg:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li key={path} className="block cursor-pointer text-base text-gray-900 hover:text-naturalPrimary first:font-medium">
                <Link to={path} spy={true} smooth={true} offset={-100}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          {/* btn for large devices */}
          
          <RouterLink to="/contact"> {/* Replaced button with RouterLink */}
            <button className="bg-naturalPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-naturalDGrey">GET STARTED</button>
          </RouterLink>
          {/* mobile device toggle button */}
          <div className='md:hidden'>
            <button className='text-neutralDGrey focus:outline-none focus:text-gray-500' onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes className='h-6 w-6 text-naturalDGrey' /> : <FaBars className='h-6 w-6' />}
            </button>
          </div>
        </div>
      </nav>
      {/* nav item for mobile devices */}
      <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        {navItems.map(({ link, path }) => (
          <li key={path} className="block text-base text-gray-900 hover:text-naturalPrimary first:font-medium">
            <Link to={path} spy={true} smooth={true} offset={-100}>
              {link}
            </Link>
          </li>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
