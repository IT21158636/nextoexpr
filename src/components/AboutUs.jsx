import React from 'react';
import abouImg from "../assets/abou.png";
import hardworksImg from "../assets/hardworks.png";
import briefingImg from "../assets/briefing.png";
import supportImg from "../assets/support.png";
import teamworkImg from "../assets/Teamwork.png";

function AboutUs() {
  return (
    <div>
      {/* aboutus text */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'id="about">
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 '>
          <div>
            <img src={abouImg} alt='' />
          </div>
          <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl text-naturalDGrey font-semibold mb-4 md:w-4/5'>
              Find Out More About Us.
            </h2>
            <p className='md:w-3/4 text-neutralGray text-sm mb-8'>
              We are passionate about leveraging technology to propel your business to new heights. With a dedicated team of creative minds and technical wizards, we offer a diverse range of IT products and services tailored to your unique needs. Trust us to revolutionize your workflow and operations. Our expert team specializes in designing customized software applications that streamline your processes, saving you time and resources.
            </p>
            <button className='px-7 py-2 bg-naturalPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4'>Learn more</button>
          </div>
        </div>
      </div>
      {/* company stats */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='md:w-1/2'>
            <h2 className='text-4xl text-naturalDGrey font-semibold mb-4 md:w-2/3'>
              Explore how we brought value to our clients
            </h2>
            <p>
              We reached here with our hard work and dedication.
            </p>
          </div>
          <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12 p-4 sm:p-0'>
        <div className='space-y-8'>
          <div className='flex items-center gap-4'>
            <img src={hardworksImg} alt='' style={{ width: '40px', height: '40px' }} />
            <div>
              <h4 className='text-2xl text-naturalDGrey font-semibold'>+100</h4>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <img src={briefingImg} alt='' style={{ width: '40px', height: '40px' }} />
            <div>
              <h4 className='text-2xl text-naturalDGrey font-semibold'>+200</h4>
              <p>Projects</p>
            </div>
          </div>
        </div>
        <div className='space-y-8'>
          <div className='flex items-center gap-4'>
            <img src={supportImg} alt='' style={{ width: '40px', height: '40px' }} />
            <div>
              <h4 className='text-2xl text-naturalDGrey font-semibold'>+100</h4>
              <p>Hours Of Support</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <img src={teamworkImg} alt='' style={{ width: '40px', height: '40px' }} />
            <div>
              <h4 className='text-2xl text-naturalDGrey font-semibold'>+200</h4>
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
