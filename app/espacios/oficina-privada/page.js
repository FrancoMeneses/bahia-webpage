import { BannerEspacios } from '@/components/BannerEspacios'
import { ContactForm } from '@/components/Form'
import { CustomCarousel } from '@/components/Carousel'
import { TabsPrivada } from '@/components/tabsPrivada'

export const metadata = {
  title: 'Renta de Oficinas Privadas en Chetumal, Quintana Roo: Espacios personalizados y flexibles para tu negocio',
  description: 'Descubre nuestros espacios para oficinas privadas en Chetumal, Quintana Roo. Espacios personalizados, flexibles y modernos para tu negocio en Bahía Business Center.'
}

export default function OficinaPrivada () {
  const BANNER_TEXT = 'OFICINA PRIVADA'
  const BANNER_DESCRIPTION = 'Espacio ejecutivo donde podrás crear, compartir y ejecutar con tus clientes o equipo de trabajo tus ideas, de una manera más cómoda.'
  const carouselImages = [{
    image: 'https://placehold.co/600x400',
    title: 'Lugar 1',
    description: 'Descripción del lugar 1'
  },
  {
    image: 'https://placehold.co/600x500',
    title: 'Lugar 2',
    description: 'Descripción del lugar 2'
  },
  {
    image: 'https://placehold.co/600x600',
    title: 'Lugar 3',
    description: 'Descripción del lugar 3'
  }]

  return (
    <main className='w-full h-full flex flex-col justify-center items-center'>
      <BannerEspacios
        height='h-[230px] md:h-[250px]'
        width='w-full'
        bgColor='bg-[#296675]/10'
        text={BANNER_TEXT}
        description={BANNER_DESCRIPTION}
      />
      <div className='flex flex-col w-full h-full px-4 md:px-[50px] 2xl:px-[90px]'>
        <section id='membresias' className='flex flex-col w-full h-full py-[50px] md:py-[65px]'>
          <div className='flex flex-col h-full w-full justify-center items-start gap-14 text-[#142e38]'>
            <div className='w-full flex flex-col justify-center items-start gap-8'>
              <p className='text-[22px]'>Contamos con 3 tipos de membresía para Oficina privada</p>
              <p className='text-[18px] font-light'>Nos adaptamos a tus necesidades</p>
            </div>
            <div className='w-full h-full flex flex-col justify-center items-start gap-10'>
              <TabsPrivada />
              <div className='w-full flex flex-col gap-10'>
                <h2 className='text-[22px]'>Instalaciones</h2>
                <div className='w-full min-h-full border border-[#142e38]'>
                  <CustomCarousel elements={carouselImages} height='h-[530px]' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id='contacto' className='border-y-2 border-[#142e38] mt-[65px] w-full'>
        <ContactForm />
      </section>
    </main>
  )
}
