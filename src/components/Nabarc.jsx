import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbarc = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    // { link: "Home", path: "home" },
    // { link: "Service", path: "service" },
    // { link: "About", path: "about" },
    // { link: "Our Work", path: "ourwork" },
    // { link: "Contact Us", path: "contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 duration-300 ${
        isSticky ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="px-4 py-4 lg:px-14">
        <div className="flex items-center justify-between">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            className="flex items-center space-x-2 text-2xl font-semibold cursor-pointer"
          >
            <img src={logo} alt="logo" className="w-10" />
            <span className="text-naturalPrimary">NEXTOEX</span>
          </Link>
          {/* Desktop Nav Items */}

          {/* GET STARTED Button */}
          <RouterLink to="/">
            <button className="px-2 py-1 text-sm text-white rounded bg-naturalPrimary hover:bg-naturalDGrey sm:px-4 sm:py-2 sm:text-base">
              Home
            </button>
          </RouterLink>

          {/* Mobile Menu Toggle */}
        </div>
      </nav>
      {/* Mobile Nav Items */}
      <ul
        className={`lg:hidden transition-all duration-300 bg-white absolute w-full left-0 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <li
            key={path}
            className={`py-2 text-center hover:bg-gray-100 ${
              activeSection === path ? "bg-naturalPrimary text-white" : ""
            }`}
          >
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              onSetActive={() => setActiveSection(path)}
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbarc;
