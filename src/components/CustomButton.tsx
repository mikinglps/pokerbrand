"use client";
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

export const CustomButton = ({title, containerStyles, textStyles, leftIcon, handleClick} : CustomButtonProps) => {
  return (
    <button
    className={`flex flex-row gap-2 bg-red-main p-1 rounded-lg ${containerStyles} hover:bg-red-main-hover`}
    onClick={handleClick}
    >
    {leftIcon && (
        <div className='relative w-6 h-6'>
            <Image src={leftIcon} alt='Icon' fill className='object-contain'/>
        </div>
    )}
    <span className={textStyles}>
        {title}
    </span>
    </button>
  )
}
