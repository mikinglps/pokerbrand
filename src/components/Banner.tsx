
import React from 'react'
import Image from 'next/image'
import { CustomButton, NavBar } from '.'

export const Banner = () => {
  return (
    <header>
    <section className='banner h-screen relative shadow-sm'>
        <div className='banner__navbar xl:w-[1366px] m-auto'>
        <NavBar/>
        </div>
        <div className='banner__container flex justify-center items-center h-screen'>
        <div className='banner__typo flex items-center flex-col gap-3 absolute z-20 top-25'>
            <h2 className='banner__title tracking-wider font-semibold text-5xl'>Why Choose</h2>
              <h3 className='text-xl font-extrabold'>POKER BRAND</h3>
            <div className='banner__typo-sub'>
            <p className='text-sm tracking-wide'>Sed mollis nisl sed gravida aliquam. <b>Nunc lobortis</b></p> 
            <p className='text-sm tracking-wide'> nunc quis justo consequat placerat.</p>
            </div>
            <div className='banner__buttons flex flex-row gap-5'>
            <CustomButton 
            title='Join Discord'
            textStyles='text-sm'
            leftIcon='/discord.png'
            />
            <CustomButton 
            title='Our Plans'
            textStyles='text-sm'
            leftIcon='/planos.png'
            />
            </div>
        </div>
        <Image src="/wall2.jpg" alt='banner' fill className='object-cover opacity-30 absolute top-0 z-10'/>
        </div>
    </section>
    </header>
  )
}
