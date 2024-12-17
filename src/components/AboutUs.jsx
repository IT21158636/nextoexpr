import React from "react";
import abouImg from "../assets/abou.png";
import hardworksImg from "../assets/hardworks.png";
import briefingImg from "../assets/briefing.png";
import supportImg from "../assets/support.png";
import teamworkImg from "../assets/Teamwork.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1200,
  // defines which position of the element regarding to window should trigger the animation
});

function AboutUs() {
  return (
    <div>
      {/* aboutus text */}
      <div className="px-4 mx-auto my-8 lg:px-14 max-w-screen-2xl" id="about">
        <div className="flex flex-col items-center justify-between gap-12 mx-auto md:w-11/12 md:flex-row ">
          <div>
            <img src={abouImg} alt="" />
          </div>
          <div data-aos="fade-left" className="mx-auto md:w-4/5 ">
            <h2 className="mb-4 text-4xl font-semibold text-naturalDGrey md:w-4/5">
              Find Out More About Us.
            </h2>
            <p className="mb-8 text-sm md:w-4/4 text-neutralGray">
              We are passionate about leveraging technology to propel your
              business to new heights. With a dedicated team of creative minds
              and technical wizards, we offer a diverse range of IT products and
              services tailored to your unique needs. Trust us to revolutionize
              your workflow and operations. Our expert team specializes in
              designing customized software applications that streamline your
              processes, saving you time and resources.
            </p>
            <button className="py-2 text-white transition-all duration-300 rounded px-7 bg-naturalPrimary hover:bg-neutralDGrey hover:translate-y-4">
              Learn more
            </button>
          </div>
        </div>
      </div>
      {/* company stats */}
      <div className="px-4 py-16 mx-auto lg:px-14 max-w-screen-2xl bg-neutralSilver">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div data-aos="fade-up-right" className="md:w-1/2">
            <h2 className="mb-4 text-4xl font-semibold text-naturalDGrey md:w-2/3">
              Explore how we brought value to our clients
            </h2>
            <p>We reached here with our hard work and dedication.</p>
          </div>
          <div
            data-aos="fade-up-left"
            className="flex flex-col justify-around gap-12 p-4 mx-auto md:w-1/2 sm:flex-row sm:items-center sm:p-0"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img
                  src={hardworksImg}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <div>
                  <h4 className="text-2xl font-semibold text-naturalDGrey">
                    +50
                  </h4>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={briefingImg}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <div>
                  <h4 className="text-2xl font-semibold text-naturalDGrey">
                    +100
                  </h4>
                  <p>Projects</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img
                  src={supportImg}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <div>
                  <h4 className="text-2xl font-semibold text-naturalDGrey">
                    +100
                  </h4>
                  <p>Hours Of Support</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={teamworkImg}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                />
                <div>
                  <h4 className="text-2xl font-semibold text-naturalDGrey">
                    +200
                  </h4>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* stats */}
    </div>
  );
}

export default AboutUs;
