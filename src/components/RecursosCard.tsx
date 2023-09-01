import { RecursosCardProps } from '@/types'
import Image from 'next/image'
import React from 'react'

export const RecursosCard = ({title, icon, description}: RecursosCardProps) => {
  return (
    <div className='recurso__single bg-main w-[150px] flex flex-col items-center justify-center p-5 rounded'>
        <Image src={icon} alt='Icone de recurso' height={90} width={90} className='object-contain'/>
        <h3>{title}</h3>
    </div>
  )
}
