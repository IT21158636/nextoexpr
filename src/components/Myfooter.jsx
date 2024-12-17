import React from "react";
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

AOS.init({
  // defines which position of the element regarding to window should trigger the animation
});

function Myfooter() {
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
              <img src={logo} alt="logo" className="inline-block w-10" />
              <span className="text-naturalPrimary">NEXTOEX</span>
            </Link>
            <div>
              <p>© 2024 Nextoex</p>
              <p className="mb-1">All rights reserved </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="about" />
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
                <Footer.Link href="#">+94 704673040</Footer.Link>
                <Footer.Link href="#">+94 704673040</Footer.Link>
                <Footer.Link href="#">work.nextoex@gmail.com</Footer.Link>
                <Footer.Link href="#">Malabe Srilanka</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Nextoex™" year={2024} />
          <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/Nextoex?mibextid=wwXIfr&mibextid=wwXIfr"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/nextoex?igsh=MTNqbG4zdGdsZWpzMQ%3D%3D&utm_source=qr"
              icon={BsInstagram}
            />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Myfooter;
