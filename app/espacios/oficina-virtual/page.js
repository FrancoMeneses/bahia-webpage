import { BannerEspacios } from '@/components/BannerEspacios'
import { ContactForm } from '@/components/Form'
import Image from 'next/image'
import Down from '../../../assets/down.svg'
import Comercial from '../../../assets/comercial.svg'
import Delivery from '../../../assets/delivery.svg'
import Briefcase from '../../../assets/briefcase.svg'
import TruckLoading from '../../../assets/truck-loading.svg'
import DHL from '../../../assets/dhl.svg'
import { CustomCarousel } from '@/components/Carousel'

export const metadata = {
  title: 'Renta de Oficinas Virtuales en Chetumal, Quintana Roo: Tu espacio de trabajo desde cualquier lugar',
  description: 'Encuentra oficinas virtuales flexibles en Chetumal, Quintana Roo. Trabaja desde cualquier lugar con nuestra solución profesional y eficiente con Bahía Business Center.'
}

export default function OficinaVirtual () {
  const BANNER_TEXT = 'OFICINA VIRTUAL'
  const BANNER_DESCRIPTION = 'Te ofrecemos una solución completa para tu empresa sin la necesidad de una ubicación física.'
  const carouselImages = [{
    image: 'https://placehold.co/600x400',
    description: 'Lugar 1'
  },
  {
    image: 'https://placehold.co/600x400',
    description: 'Lugar 2'
  },
  {
    image: 'https://placehold.co/600x400',
    description: 'Lugar 3'
  }]

  return (
    <main className='w-full h-full flex flex-col justify-center items-center'>
      <BannerEspacios
        height='h-[200px] md:h-[250px]'
        width='w-full'
        bgColor='bg-[#296675]/10'
        text={BANNER_TEXT}
        description={BANNER_DESCRIPTION}
      />
      <div className='flex flex-col w-full h-full px-4 md:px-[50px] 2xl:px-[90px] py-[50px] md:py-[65px]'>
        <section className='flex flex-col w-full h-full justify-center items-start gap-10'>
          <p className='text-[22px]'>¿Qué incluye?</p>
          <div className='flex md:flex-row flex-col w-full h-full justify-between items-start gap-8'>
            <div className='flex flex-col w-full justify-center items-start gap-8 text-[#142e38] self-start'>
              <section id='amenidades-juntas' className='w-full mx-auto'>
                <div className='overflow-hidden'>
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='1'>
                    <div className='group border border-[#142e38] border-b-0 rounded-t-xl flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                      <div className='text-[18px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                        <div className='w-full h-full flex justify-start items-center gap-4'>
                          <span className='size-auto flex justify-center items-center'>
                            <Image src={Comercial} alt='Building icon' className='size-[40px]' width='auto' />
                          </span>
                          <h2>
                            Domicilio Comercial
                          </h2>
                        </div>
                        <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                          <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                        </span>
                      </div>
                    </div>
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                      <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                        Proyecta una imagen profesional al establecer una presencia empresarial sólida, mientras gestionas tu negocio desde donde prefieras.
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='2'>
                    <div className='group border border-[#142e38] border-b-0 flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                      <div className='text-[18px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                        <div className='w-full h-full flex justify-start items-center gap-4'>
                          <span className='size-auto flex justify-center items-center'>
                            <Image src={Delivery} alt='Delivery icon' className='size-[40px]' width='auto' />
                          </span>
                          <h2>
                            Recepción de paquetería
                          </h2>
                        </div>
                        <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                          <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                        </span>
                      </div>
                    </div>
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                      <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                        Recibe tus paquetes con comodidad y seguridad, te ofrecemos un servicio rápido y confiable para recibir tus entregas.
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='3'>
                    <div className='group border border-[#142e38] border-b-0 flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                      <div className='text-[18px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                        <div className='w-full h-full flex justify-start items-center gap-4'>
                          <span className='size-auto flex justify-center items-center'>
                            <Image src={Briefcase} alt='Briefcase icon' className='size-[60px] md:size-[40px]' width='auto' />
                          </span>
                          <h2>
                            Documentación de clientes y proveedores
                          </h2>
                        </div>
                        <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                          <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                        </span>
                      </div>
                    </div>
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                      <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                        Organiza tus documentos con nosotros, te garantizamos un manejo eficiente y seguro de toda tu información. Simplifica tus procesos y mantén todo en orden con nuestra ayuda experta.
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='3'>
                    <div className='group border border-[#142e38] border-b-0 flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                      <div className='text-[18px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                        <div className='w-full h-full flex justify-start items-center gap-4'>
                          <span className='size-auto flex justify-center items-center'>
                            <Image src={DHL} alt='Mailbox icon' className='size-[40px]' width='auto' />
                          </span>
                          <h2>
                            Envío de paquetería o correos por DHL pick up
                          </h2>
                        </div>
                        <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                          <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                        </span>
                      </div>
                    </div>
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                      <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                        Facilita tus envíos con nuestra dirección para DHL Pick Up, puedes recibir tus paquetes y correos en nuestra ubicación, y DHL los recogerá para su entrega rápida y segura. Simplifica tus envíos con nuestra dirección designada para DHL Pick Up.
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                  {/* <!-- accordion-tab  --> */}
                  <div className='group outline-none accordion-section' tabIndex='5'>
                    <div className='group border border-[#142e38] rounded-b-xl group-focus:rounded-none group-focus:border-b-0 flex justify-between px-4 py-3 items-center transition-all ease-out duration-500 cursor-pointer pr-10 relative'>
                      <div className='text-[18px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                        <div className='w-full h-full flex justify-start items-center gap-4'>
                          <span className='size-auto flex justify-center items-center'>
                            <Image src={TruckLoading} alt='TruckLoading icon' className='size-[60px] md:size-[40px]' width='auto' />
                          </span>
                          <h2>
                            Entrega del paquete físico o digital al cliente
                          </h2>
                        </div>
                        <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                          <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                        </span>
                      </div>
                    </div>
                    <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x group-focus:border-b border-[#142e38] rounded-b-xl px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                      <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                        Ya sea un paquete físico o digital, garantizamos la llegada puntual y segura de tus productos o archivos directamente a tus manos. Confía en nosotros para una experiencia de entrega sin contratiempos.
                      </p>
                    </div>
                  </div>
                  {/* <!-- accordion-tab --> */}
                </div>
              </section>
            </div>
            <div className='w-full h-full border border-[#142e38]'>
              <CustomCarousel elements={carouselImages} />
            </div>
          </div>
        </section>
      </div>
      <section id='contacto' className='border-y-2 border-[#142e38] w-full'>
        <ContactForm />
      </section>
    </main>
  )
}
