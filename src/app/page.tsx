import { Depoimentos, Faq, InterfaceNav, Planos, Recursos } from '@/components'

export default function Home() {
  
  return (
    <main>
      <div className='m-w-[1366px] bg-main h-full overflow-hidden'>
        <Planos />
        <div className='post-half bg-first-gradient relative'>
          <InterfaceNav />
          <Recursos />
          <Faq />
          <Depoimentos />
        </div>
      </div>
    </main>
  )
}
