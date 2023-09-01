"use client";
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { slides, commentary } from '@/constants/slides';
import { CustomButton } from '.';
import { SliderProps } from '@/types';

const Slider = ({type}: SliderProps) => {
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const [ hydrated, setHydrated ] = useState(false);
    const prevSlide = () => {
        if(type == 'interface'){
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
        }else{
          const isFirstSlide = currentIndex === 0;
          const newIndex = isFirstSlide ? commentary.length - 1 : currentIndex - 1;
          setCurrentIndex(newIndex)
        }
    }

    const nextSlide = () => {
        if(type == 'interface'){
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        }else{
          const isLastSlide = currentIndex === commentary.length - 1;
          const newIndex = isLastSlide ? 0 : currentIndex + 1;
          setCurrentIndex(newIndex);
        }
    }

    useEffect(() => {
      setHydrated(true)
    }, [])   
    
  return  (type == 'interface' ?
    <div className='slider__holder p-3'>
          <Image src={`${slides[currentIndex].url}`} alt='Demonstração' width={150} height={100} className='object-contain'/>
          <div className='slider__button-holder flex flex-row gap-1 items-center justify-center'>
            <CustomButton title='<' containerStyles='bg-transparent' handleClick={prevSlide}/> 
            <CustomButton title='>' containerStyles='bg-transparent' handleClick={nextSlide}/>
          </div>
    </div> :
    <div className='slider__holder p3 flex flex-row align-start gap-3 relative'>
        <div className='slider__image-container'>
            <div className='slider__image-round rounded-full w-[80px] h-[80px] bg-indigo-100'>
              <Image src={`${commentary[currentIndex].photo}`} alt='Foto comentário' width={80} height={80} className='object-cover rounded-full min-w-[80px] h-[80px]'/>
            </div>
        </div>
        <div className='slider__text flex flex-col gap-1'>
          <h2 className='font-semibold'>{commentary[currentIndex].name}</h2>
          <h3 className='text-xs'>{commentary[currentIndex].occupation}</h3>
          <p className='text-sm font-thin'>{commentary[currentIndex].description}</p>
        </div>
        <div className='slider__button-holder'>
          <CustomButton title='<' containerStyles='absolute top-20 left-0' handleClick={prevSlide}/>
          <CustomButton title='>' containerStyles='absolute top-20 right-0' handleClick={nextSlide}/>
        </div>
    </div>
  ) 
}

export default Slider