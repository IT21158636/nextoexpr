import React from 'react';
import { Card } from 'flowbite-react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';


function Contactus() {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 '>
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        <Card className="max-w-sm text-center">
          <FaMapMarkerAlt className="text-5xl text-naturalDGrey mb-2 mx-auto" />
          <h1 className='text-4xl text-naturalDGrey font-semibold mb-2'>Our Address</h1>
          <p>Colombo, Sri Lanka</p>
        </Card>

        <Card className="max-w-sm text-center">
          <FaEnvelope className="text-5xl text-naturalDGrey mb-2 mx-auto" />
          <h1 className='text-4xl text-naturalDGrey font-semibold mb-2'>Email Us</h1>
          <p>work.nextoex@gmail.com</p>
        </Card>

        <Card className="max-w-sm text-center">
          <FaPhone className="text-5xl text-naturalDGrey mb-2 mx-auto" />
          <h1 className='text-4xl text-naturalDGrey font-semibold mb-2'>Call Us</h1>
          <p>+94713311593</p>
        </Card>
      </div>

      {/* form */}
      <div></div>
      
    </div>
  );
}

export default Contactus;
