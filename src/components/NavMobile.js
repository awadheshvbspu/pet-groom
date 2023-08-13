import React from 'react';
import {navigation} from '../data'

export default function NavMobile() {
  return (
    <div className='h-full'>
      <ul className='flex flex-col items-center justify-center h-full space-y-5'>
        {navigation.map((item,i) =>{
          return(
            <li className='capitalize font-medium text-blue' key={i}>
              <a href={item.href} >{item.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
