import React, { useEffect } from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../assets/logo.jpg";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

function Myfooter() {
  useEffect(() => {
    AOS.init({
      // Defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <Footer container>
      <div className="w-full">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="grid justify-between w-full sm:flex sm:justify-between md:flex md:grid-cols-1"
        >
          <div className="mb-8 space-y-4 ">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              className="flex items-center space-x-2 text-2xl font-semibold"
            >
              <img
                src={logo}
                alt="Nextoex Logo"
                className="inline-block w-10"
              />
              <span className="text-naturalPrimary">NEXTOEX</span>
            </Link>
            <div>
              <p>© 2025 Nextoex</p>
              <p className="mb-1">All rights reserved</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="/">Our Story</Footer.Link>
                <Footer.Link href="/">Meet the Team</Footer.Link>
                <Footer.Link href="/">Careers</Footer.Link>
                <Footer.Link href="/contact">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Get in touch" />
              <Footer.LinkGroup col>
                <Footer.Link href="tel:+94704673040">+94 704673040</Footer.Link>
                <Footer.Link href="tel:+94704673040">+94 704673040</Footer.Link>
                <Footer.Link href="mailto:work.nextoex@gmail.com">
                  work.nextoex@gmail.com
                </Footer.Link>
                <Footer.Link href="#">Malabe, Sri Lanka</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Nextoex™" year={2025} />
          <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/Nextoex?mibextid=wwXIfr&mibextid=wwXIfr"
              icon={BsFacebook}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.instagram.com/nextoex?igsh=MTNqbG4zdGdsZWpzMQ%3D%3D&utm_source=qr"
              icon={BsInstagram}
              target="_blank"
            />
            <Footer.Icon
              href="https://twitter.com/Nextoex"
              icon={BsTwitter}
              target="_blank"
            />
            <Footer.Icon
              href="https://github.com/Nextoex"
              icon={BsGithub}
              target="_blank"
            />
            <Footer.Icon
              href="https://dribbble.com/Nextoex"
              icon={BsDribbble}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Myfooter;
