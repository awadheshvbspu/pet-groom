import React from 'react';
import {navigation} from '../data'

export default function Nav() {
  return (
    <div className='text-[15px]'>
     <ul className='flex gap-x-10'>
     {navigation.map((item,i)=>{
        return(
          <li key={i}>
            <a href={item.href} className='capitalize hover:text-orange transition'>
              {item.name}
            </a>
          </li>
        )
      })}
     </ul>
    </div>
  )
}

