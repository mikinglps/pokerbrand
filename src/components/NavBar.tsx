import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.'

export const NavBar = () => {
  return (
    <div className='navbar flex justify-between items-end p-5 absolute z-40 top-0 xl:w-[1366px]'>
        <div className='navbar__logo w-{200}'>
          <h3 className='text-xl font-extrabold'>POKER <span className='text-red-main'>BRAND</span></h3>
        </div>
        <div className='navbar__options'>
            <ul className='flex flex-row gap-2.5'>
                <li><a className='text-md' href="#planos">Plans</a></li>
                <li><a className='text-md' href="#recursos">Tools</a></li>
                <li><a className='text-md' href="#depoimentos">Depositions</a></li>
                <li><a className='text-md' href="#interface">Interface</a></li>
                <li><a className='text-md' href="#parceiros">Partners</a></li>
                <li><CustomButton 
                title='Access Platform'
                textStyles='text-md' 
                />
                </li>
            </ul>
        </div>
    </div>
  )
}
