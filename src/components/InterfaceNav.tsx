import Image from 'next/image';
import { Slider } from '.';

export const InterfaceNav = () => {
  return ( 
    <section id='interface' className='interface__holder flex flex-row justify-center xl:w-[1366px] xs:w-[400px] m-auto items-center'>
        <div className='interface__info w-2/4'>
            <h2 className='text-xl text-planos-titulo'>Interface perfectly designed</h2>
            <hr/>
            <p className='my-5 text-sm text-section-title'>in fringilla nunc ultricies. Praesent a arcu luctus, pretium mauris vitae, consequat nisl. Duis mollis accumsan lacus elementum tristique. Donec vel arcu vitae justo aliquam lacinia ac id ex.</p>
            <div className='interface__info-icons flex flex-row gap-5'>
            <div className='flex flex-row gap-1'>
                <div className='interface__info-icon-box'>
                    <Image src="/check.png" alt='Check icon' height={50} width={50} className='object-contain'/>
                </div>
                <div className='interface__info-icon-description'>
                <h2 className='font-bold text-section-title'>Easy Access</h2>
                <p className='text-xs text-section-title'>Aenean sit amet metus ut augue mattis cursus.</p>
                </div>
            </div>
            <div className='flex flex-row gap-1'>
                <div className='interface__info-icon-box'>
                    <Image src="/check.png" alt='Check icon' height={50} width={50} className='object-contain'/>
                </div>
                <div className='interface__info-icon-description'>
                <h2 className='font-bold text-section-title'>Optimized</h2>
                <p className='text-xs text-section-title'>Cras ac tincidunt tellus. Duis egestas dui urna, vel mattis felis viverra id. Vestibulum dignissim mauris sed augue placerat</p>
                </div>
            </div>
        </div>
        </div>
        <div className='interface__slider'>
             <Slider type='interface' />
        </div>
    </section>
  ) 
}
