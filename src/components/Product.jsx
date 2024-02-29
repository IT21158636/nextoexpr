import React from 'react';

function Product() {
  return (
    <div>
      <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
        <div className='text-center my-8'>
          <h2 className='text-4xl text-naturalDGrey font-semibold mb-2'>Platforms & Technologies We Use</h2>
          <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
            <img src='/assets/java.png' alt='Java Logo' />
            <img src='/assets/java-script.png' alt='JavaScript Logo' />
            <img src='/assets/figma.png' alt='Figma Logo' />
            <img src='/assets/python.png' alt='Python Logo' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
