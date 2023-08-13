import React from 'react';
import DogImg from '../assets/img/dogs/dog-appointment.png'

export default function Appointment() {
  return (
    <div className='bg-yellow-secondary py-12 lg:pb-12 lg:mt-32 relative min-h-[584px]'>
      <div className='container mx-auto'>
        <div>
        <div className='hidden w-full max-w-[790px] lg:flex justify-center items-center mx-auto'>
          <img src={DogImg} alt='' />
        </div>
        <form className='bg-yellow py-8 px-6 w-full max-w-[790px] h-[500px] mx-auto lg:-mt-5 rounded-[60px] text-center flex flex-col justify-start items-center gap-y-4'>
          <h2 className='h2'>Get an appointment</h2>
          <input type='text'className="input-control" placeholder='Full Name'/>
          <input type='text' className="input-control" placeholder='Email address'/>
          <input type='text' className="input-control" placeholder='Phone number'/>
          <button className='btn w-full max-w-[514px]'>Send</button>
        </form>
        </div>
      </div>
    </div>
  )
}
