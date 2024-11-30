import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Nabarc = () => {
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // You need to pass an empty dependency array to useEffect.

  // navitem array
  const navItems = [];

  return (
    <header
      className={`w-full ${
        isSticky ? "bg-white" : "bg-transparent"
      } fixed top-0 left-0 right-0 duration-300`}
    >
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 border-b bg-white" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-8 text-base">
          <RouterLink to="/">
            {" "}
            {/* Changed Link to RouterLink */}
            <div className="flex items-center space-x-2 text-2xl font-semibold">
              <img src={logo} alt="logo" className="inline-block w-10" />
              <span className="text-naturalPrimary">NEXTOEX</span>
            </div>
          </RouterLink>
          {/* navitem large devices */}
          <ul className="hidden space-x-12 lg:flex">
            {navItems.map(({ link, path }) => (
              <li
                key={path}
                className="block text-base text-gray-900 cursor-pointer hover:text-naturalPrimary first:font-medium"
              >
                <Link to={path} spy={true} smooth={true} offset={-100}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          {/* btn for large devices */}

          <RouterLink to="/">
            <button className="px-4 py-2 text-white transition-all duration-300 rounded bg-naturalPrimary hover:bg-naturalDGrey">
              HOME
            </button>
          </RouterLink>
          {/* mobile device toggle button */}
          <div className="md:hidden">
            <button
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 text-naturalDGrey" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* nav item for mobile devices */}
      <div
        className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <li
            key={path}
            className="block text-base text-gray-900 hover:text-naturalPrimary first:font-medium"
          >
            <Link to={path} spy={true} smooth={true} offset={-100}>
              {link}
            </Link>
          </li>
        ))}
      </div>
    </header>
  );
};

export default Nabarc;
