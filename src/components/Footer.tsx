import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='footer__container xl:w-[880px] xs:w-[400px] flex flex-col m-auto p-3 bg-first-gradient mt-20'>
        <div className='info flex flex-row items-center justify-center p-5 gap-20'>
            <div className='info__left w-[300px] flex flex-col items-start justify-center '>
                <h3 className='text-xl font-extrabold'>POKER <span className='text-red-main'>BRAND</span></h3>
                <p className='text-xs'>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
            </div>
            <div className='info__right w-[300px] flex flex-col gap-3'>
                <div className='info__right-contato flex flex-col gap-2'>
                <h2 className='font-semibold text-sm'><span className='text-red-main'>Contact</span> Us</h2>
                </div>
                <p className='font-thin text-xs'>contact@pokerbrand.com</p>
                <div className='info__right-social flex flex-col gap-2'>
                <h2 className='font-semibold text-sm'>Socials</h2>
                    <div className='info__right-social__icons flex flex-row gap-3'>
                        <div className='social__icons-ig flex flex-row items-center gap-1'>
                            <Image src='/instagram.png' alt='instagram logo' width={10} height={10} className='object-contain'/>
                            <p className='text-xs'>Instagram</p>
                        </div>
                        <div className='social__icons-dc flex flex-row items-center gap-1'>
                            <Image src='/discord.png' alt='discord logo' width={10} height={10} className='object-contain'/>
                            <p className='text-xs'>Discord</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='parceiros' className='partners__holder xs:w-[400px] xl:w-[880px] flex flex-row h-[70px] gap-4'>
            <Image src='/bodog.png' alt='bodog' width={140} height={100} sizes="(max-width: 140px)" className='object-contain'/>
            <Image src='/888-poker.png' alt='888poker' width={140} height={100} sizes="(max-width: 140px)" className='object-contain'/>
            <Image src='/ggpoker.png' alt='ggpoker' width={140} height={100} sizes="(max-width: 140px)" className='object-contain'/>
            <Image src='/party-poker.png' alt='party-poker' width={140} height={100} sizes="(max-width: 140px)" className='object-contain'/>
            <Image src='/pokerstars.png' alt='pokerstars' width={140} height={100} sizes="(max-width: 140px)" className='object-contain'/>
            <Image src='/wpn.png' alt='wpn' width={100} height={140} sizes="(max-width: 140px)" className='object-contain'/>
        </div>
        <div className='copyright flex flex-col items-center justify-center p-5'>
            <p className='font-semibold text-sm'>Copyright @2023</p>
            <p className='font-thin text-xs'>@mikingdev</p>
        </div>
    </footer>
  )
}
