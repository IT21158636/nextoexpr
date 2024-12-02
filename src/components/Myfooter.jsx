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
              <p className="mb-1">copyright @ 2024 nextoex ltd</p>
              <p>all right reseved</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Nextoex™" year={2024} />
          <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
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
