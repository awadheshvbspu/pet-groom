import React from 'react';
import dogImg from '../assets/img/dogs/dog-contact.png';

export default function Contact() {
  return (
    <section className='bg-yellow-secondary pt-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-around'>
        <div className='order-1 lg:order-1 lg:mt-16'>
          <img src={dogImg} alt='' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-orange font-semibold mb-3'>Contact</div>
          <div className='text-4xl text-blue font-extrabold'>+ 1 000 10 84 000</div>
          <div className='mb-7 text-blue'>Opening Hours: Mon - Sun: 10am - 6pm</div>
          <div className='btn items-center justify-center flex'>Get an appointment</div>
        </div>
        </div>
      </div>
    </section>
  )
}
