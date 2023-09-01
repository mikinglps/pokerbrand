import React from 'react'
import Image from 'next/image'
import { PlanosCardProps } from '@/types'
import { CustomButton } from '.'

export const PlanosCard = ({title, price, description}: PlanosCardProps) => {
  return (
    <div className='planos__card xl:w-80 xl:h-[350px] xs:w-[250px] xs:h-[400px] flex flex-col items-center justify-center gap-3 p-5'>
        <h3 className='text-xl font-extrabold'>POKER BRAND</h3>
        <hr className='w-2/3 h-0.5 border-0 bg-red-main'/>
        <h1 className='font-extrabold text-xl text-planos-titulo'>{title}</h1>
        <h3 className='font-extrabold text-xl text-red-main'>$ {price}</h3>
        <div className='description__holder w-2/4 xl:h-[80px] xs:h-[130px] text-center'>
        <p className='text-xs text-section-title'>{description}</p>
        </div>
        <CustomButton
        title='Subscribe'
        containerStyles='p-1.5'
        textStyles='text-sm'
        />
    </div>
  )
}
