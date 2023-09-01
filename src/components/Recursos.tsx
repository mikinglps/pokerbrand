import React from 'react'
import { RecursosCard } from '.'

export const Recursos = () => {
  return (
    <section id='recursos' className='recursos xl:w-[1366px] xs:w-[400px] m-auto'>
      <div className='recursos__holder-text flex flex-col items-center justify-center'>
      <h2 className='text-xl text-planos-titulo'>Tools</h2>
      <hr className='w-1/3'/>
      <p className='text-sm text-section-title font-thin'>What will benefit you for working with us</p>
      </div>
      <div className='recursos__wrapper flex flex-row gap-5 align-center justify-center mt-10'>
        <RecursosCard title='Filters' icon='/filtros.png' />
        <RecursosCard title='Favorites' icon='/fav.png' />
        <RecursosCard title='Logs' icon='/registros.png' />
      </div>
      
    </section>
  )
}
