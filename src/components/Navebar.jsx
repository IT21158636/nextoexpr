import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsSticky(window.scrollY > 100);
    }, 50); // Debounce to improve performance

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Our Work", path: "ourwork" },
    { link: "Contact Us", path: "contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 duration-300 ${
        isSticky ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="px-4 py-4 lg:px-14">
        <div className="flex items-center justify-between">
          <RouterLink
            to="/"
            className="flex items-center space-x-2 text-2xl font-semibold cursor-pointer"
          >
            <img src={logo} alt="logo" className="w-10" />
            <span className="text-naturalPrimary">NEXTOEX</span>
          </RouterLink>
          {/* Desktop Nav Items */}
          <ul className="hidden space-x-12 lg:flex">
            {navItems.map(({ link, path, href }) => (
              <li
                key={path || href}
                className={`hover:text-naturalPrimary cursor-pointer ${
                  activeSection === path || location.pathname === href
                    ? "text-naturalPrimary font-bold"
                    : ""
                }`}
              >
                {href ? (
                  <RouterLink to={href} onClick={() => setIsMenuOpen(false)}>
                    {link}
                  </RouterLink>
                ) : (
                  <ScrollLink
                    to={path}
                    spy={true}
                    smooth={true}
                    duration={300} // Adjust duration for faster scrolling
                    offset={-100}
                    onSetActive={() => setActiveSection(path)}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-neutralDGrey focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={34} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
      {/* Mobile Nav Items */}
      <ul
        className={`lg:hidden transition-all duration-300 bg-white absolute w-full left-0 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map(({ link, path, href }) => (
          <li
            key={path || href}
            className={`py-2 text-center hover:bg-gray-100 cursor-pointer ${
              activeSection === path || location.pathname === href
                ? "bg-naturalPrimary text-white"
                : ""
            }`}
          >
            {href ? (
              <RouterLink to={href} onClick={() => setIsMenuOpen(false)}>
                {link}
              </RouterLink>
            ) : (
              <ScrollLink
                to={path}
                spy={true}
                smooth={true}
                duration={300} // Adjust duration for faster scrolling
                offset={-100}
                onSetActive={() => setActiveSection(path)}
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </ScrollLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
};

function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export default Navbar;
