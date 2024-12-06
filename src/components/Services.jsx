import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/web1.png";
import img2 from "../assets/web (2).png";
import img3 from "../assets/design.png";
import img4 from "../assets/social-marketing.png";
import img5 from "../assets/content.png";
import img6 from "../assets/prototype.png";
import Ourclient from "./Ourclient";

AOS.init({
  // defines which position of the element regarding to window should trigger the animation
});

function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Our membership management software",
      image: img1,
    },
    {
      id: 2,
      title: "Product Development",
      description: "Our membership management software",
      image: img2,
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Our membership management software",
      image: img3,
    },
    {
      id: 4,
      title: "Social Media Marketing",
      description: "Our membership management software",
      image: img4,
    },
    {
      id: 5,
      title: "Content Creation",
      description: "Our membership management software",
      image: img5,
    },
    {
      id: 6,
      title: "Product Design",
      description: "Our membership management software",
      image: img6,
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto md:px-14 max-w-screen-2xl">
      <Ourclient />

      <div className="mx-auto mt-20 text-center md:w-1/2" id="service">
        <h2
          data-aos="fade-left"
          className="mb-3 text-4xl font-semibold text-naturalDGrey"
        >
          Check our Services
        </h2>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="text-naturalDGrey"
        >
          we offer a diverse range of IT products and services to elevate your
          business
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 mx-auto mt-14 lg:grid-cols-3 md:grid-cols-2 md:w-11/12">
        {services.map((service) => (
          <div
            data-aos="zoom-out-down"
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#D0CDFD] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="px-2 mb-2 text-2xl font-bold text-naturalDGrey">
                {service.title}
              </h4>
              <p className="text-sm text-naturalDGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
