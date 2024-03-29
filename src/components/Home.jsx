import React from 'react';
import { Carousel } from 'flowbite-react';
import baner1 from '../assets/baner4.png';
import baner3 from '../assets/baner3.png';


function Home() {
  return (
    <div className='bg-neutralSilver' id="home">
      <div className='px-4 lg:px-14 max-w-screen-2xl max-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
          <div className="my-2 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={baner1} alt='' />
            </div>
            {/* hero text */}
            <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-anug '>Drive Your Digital Future <span className='text-brandPrimary leading-snug'> Forward with Us!</span> </h1>
                <p className='text-neutralGray text-base mb-8'>Innovate, Integrate, Inspire: Our Commitment to You</p>
                <button className='px-7 py-2 bg-naturalPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4'>TELL ABOUT YOUR PROJECT</button>
            </div>

          </div>
          <div className="my-2 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={baner3} alt='' />
            </div>
            {/* hero text */}
            <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-anug '>Your Gateway to Seamless   <span className='text-brandPrimary leading-snug'>IT Solutions</span> </h1>
                <p className='text-neutralGray text-base mb-8'>Let's Create a Future of Innovation Together</p>
                <button className='px-7 py-2 bg-naturalPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4'>TELL ABOUT YOUR PROJECT</button>
            </div>

          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
