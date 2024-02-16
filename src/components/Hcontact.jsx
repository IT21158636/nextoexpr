import React from 'react';
import { Link } from 'react-router-dom';

function Hcontact() {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
      <div className="section-title text-center">
        <h2 className='text-4xl text-naturalPrimary font-semibold mb-3'>Contact us</h2>
        <p>Feel free to get in touch with us. We'd love to hear from you!</p>
        
        {/* Use flex container to arrange buttons horizontally */}
        <div className="flex gap-4 justify-center mt-4">
          <button className='px-7 py-2 bg-naturalPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4'>
            Schedule a Call
          </button>
          <Link to="/contact" className='px-7 py-2 bg-naturalPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:translate-y-4'>
          Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hcontact;
