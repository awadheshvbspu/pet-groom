import React from 'react';
import logo from '../assets/img/logo.svg';
import {social} from '../data'

export default function Footer() {
  return (
    <div className='bg-orange py-8 lg:py-4'>
      <div className='container mx-auto'>
        <div className='flex text-white flex-col gap-y-6  lg:flex-row items-center justify-between'>
          <a href='#'>
          <img src={logo} alt='' />
        </a>
        <div className=' text-center'>
          &copy; 2023 All Right Reserved.
        </div>
        <div className='flex gap-x-4'>
          {social.map((item,i)=>{
            return(
              <a href={item.href} className='flex'>
                <div className='bg-[#fe8d71a9] hover:bg-[#fe8d71] w-10 h-10 items-center justify-center flex rounded-full transition-all text-2xl'>{item.icon}</div>
              </a>
            )
          })}
        </div>
        </div>
      </div>
    </div>
  )
}
