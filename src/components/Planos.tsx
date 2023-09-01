import React from 'react'
import Image from 'next/image'
import { PlanosCard } from '.'

export const Planos = () => {
  return (
    <section id='planos' className='planos__container xl:object-cover xs:w-[400px] mt-4 py-2 h-auto bg-gradient-to-t from-first-gradient to-final-gradient'>
        <div className='planos__titulo text-center flex flex-col items-center justify-center p-5'>
            <h2 className='text-xl text-planos-titulo'>Planos</h2>
            <hr className='w-1/3 '/>
            <p className='text-xs text-section-title'>Choose your budget!</p>
        </div>
        <div className='planos__wrapper flex flex-row gap-8 items-center justify-center'>
            <PlanosCard title='Micro' price='9,00' description='Nullam malesuada hendrerit elementum. Duis tincidunt, quam' />
            <PlanosCard title='Low' price='15,00' description='Nullam malesuada hendrerit elementum. Duis tincidunt, quam' />
            <PlanosCard title='High' price='28,00' description='Nullam malesuada hendrerit elementum. Duis tincidunt, quam' />
        </div>
    </section>
  )
}
