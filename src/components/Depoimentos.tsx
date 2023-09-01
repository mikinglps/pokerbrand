'use client';
import React from 'react'
import { Slider } from '.'

export const Depoimentos = () => {
  return (
    <section id='depoimentos' className='depoimentos xl:w-[880px] xs:w-[400px] mt-10 m-auto'>
        <div className='depoimentos__title flex flex-col items-center justify-center'>
            <h2 className='text-planos-titulo'>Depoimentos</h2>
            <hr className='w-2/4'/>
        <p className='text-section-title font-thin text-sm'>See what our clients are saying!</p>
        </div>
        <div className='depoimentos__slider mt-10'>
            <Slider type='depoimento'/>
        </div>
    </section>
  )
}
