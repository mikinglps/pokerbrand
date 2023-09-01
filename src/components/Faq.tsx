import React from 'react'
import { faq } from '@/constants/slides'

export const Faq = () => {
    const faqSize = faq.length
  return (
    <section className='faq flex flex-col xl:w-[1366px] xs:w-[400px] m-auto items-center mt-10 p-5'>
        <h2 className='text-planos-titulo text-xl'>FAQ</h2>
        <hr className='w-1/3'/>
        <p className='text-section-title mb-10 font-thin text-sm'>Frequently asked questions</p>
        <div className='faq__flex flex items-center justify-center text-left'>
        <div className='faq__holder flex flex-row max-w-[880px] gap-3'>
            <div className='faq__left w-1/2'>
                {faq.slice(0, faqSize / 2).map((item, index) => (
                    <div className='faq_single' key={index}>
                    <h2 className='text-sm text-planos-titulo'>{item.pergunta}</h2>
                    <p className='text-xs text-section-title'>{item.resposta}</p>
                    </div>
                ))}
            </div>
            <div className='faq__right w-1/2'>
                {faq.slice(faqSize / 2, faqSize).map((item, index) => (
                    <div className='faq_single' key={index}>
                    <h2 className='text-sm text-planos-titulo'>{item.pergunta}</h2>
                    <p className='text-xs text-section-title'>{item.resposta}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </section>
  )
}
