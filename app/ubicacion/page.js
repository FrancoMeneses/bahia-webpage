import { Banner } from '@/components/Banner'
import { ContactForm } from '@/components/Form'
import Image from 'next/image'
import Building from '../../assets/bro.svg'
import MapIcon from '../../assets/mapIcon.svg'
import Phone from '../../assets/phone.svg'
import Clock from '../../assets/clock.svg'

export default function Espacios () {
  const BANNER_TEXT = '¡Descubre la ubicación perfecta para impulsar tu negocio y tu creatividad!'

  return (
    <main className='w-full h-full flex flex-col justify-center items-center'>
      <Banner
        height='h-[350px]'
        width='w-full'
        bgColor='bg-[#296675]/10'
        text={BANNER_TEXT}
        buttonText='Ver ubicación'
        link='/espacios#mapa'
      />
      <div className='flex flex-col w-full h-full px-[50px] 2xl:px-[90px]'>
        <section id='ubicacion-estrategica' className='flex flex-col w-full h-full py-[65px]'>
          <div className='flex flex-col w-full justify-center items-start gap-8 text-[#142e38] mb-[50px]'>
            <p className='text-[22px]'>Nuestro espacio está estratégicamente ubicado en el<br /> corazón de la ciudad, ofreciéndote una dirección de<br /> prestigio y acceso conveniente a todo lo que necesitas:</p>
          </div>
          <div className='flex w-full h-[380px] justify-center items-center gap-8 text-[#142e38] mb-[50px]'>
            <ul className='list-disc list-inside flex flex-col h-full w-[50%] justify-between items-center'>
              <li>
                <span className='font-medium'>Accesibilidad incomparable:</span> Con una ubicación céntrica y fácil acceso al transporte público, llegar a nuestro espacio es rápido y sencillo para ti y tus clientes.
              </li>
              <li>
                <span className='font-medium'>Entorno dinámico:</span> Sumérgete en un entorno vibrante y lleno de vida, rodeado de restaurantes, cafeterías, tiendas y otros negocios locales. Nuestra ubicación te ofrece la comodidad de tener todo lo que necesitas a pocos pasos de distancia.
              </li>
              <li>
                <span className='font-medium'>Conexiones estratégicas:</span> Al estar ubicados en una zona de alto tráfico comercial, tendrás la oportunidad de establecer conexiones valiosas y ampliar tu red profesional con facilidad.
              </li>
              <li>
                <span className='font-medium'>Ambiente inspirador:</span> Disfruta de vistas impresionantes, arquitectura única y un ambiente inspirador que te motiva a alcanzar tus metas y objetivos.
              </li>
            </ul>
            <div className='w-[50%] flex justify-center items-center h-full'>
              <Image src={Building} alt='Building image' className='h-full' width='auto' height='auto' />
            </div>
          </div>
          <div className='flex flex-col w-full h-full justify-center items-center gap-[65px] mt-[65px]'>
            <p className='text-[22px]'>Visítanos</p>
            <div className='flex w-full h-auto py-6 justify-center items-start'>

              <div className='flex flex-col w-full h-full justify-center items-center flex-grow gap-4 px-8'>
                <div className='w-auto flex flex-col justify-center items-center gap-4'>
                  <span className='flex h-full w-full justify-start items-center gap-2'>
                    <Image src={MapIcon} alt='Map Icon' />
                    <p>Dirección</p>
                  </span>
                  <p className='w-full'>
                    Av. Rojo Gómez 595<br /> Esquina Bugambilias
                  </p>
                </div>
              </div>

              <div className='flex flex-col w-full h-full justify-center items-center flex-grow gap-4 px-8'>
                <div className='w-auto flex flex-col justify-center items-center gap-4'>
                  <span className='flex h-full w-full justify-start items-center gap-2'>
                    <Image src={Phone} alt='Phone Icon' />
                    <p>Contacto</p>
                  </span>
                  <div className='flex flex-col w-full gap-2'>
                    <a href='#'>
                      9831542955
                    </a>
                    <a href='#'>
                      bahia.business.c@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className='flex flex-col w-full h-full justify-center items-center flex-grow gap-4 px-8'>
                <div className='w-auto flex flex-col justify-center items-center gap-4'>
                  <span className='flex w-full h-full justify-start items-center gap-2'>
                    <Image src={Clock} alt='Clock Icon' />
                    <p>Horario</p>
                  </span>
                  <div className='flex w-full flex-col gap-2'>
                    <p>
                      Lunes a viernes <br />
                      9:00 am - 6:00 pm
                    </p>
                    <p>
                      Sábado <br />
                      9:00 am - 2:00 pm
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section id='mapa' className='w-full flex flex-col justify-between items-center gap-8 text-[#142e38]'>
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3480976980222!2d-88.32073102390633!3d18.513165282578903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5ba30cc17cd289%3A0x62d8529271a7ea06!2sBah%C3%ADa%20Business%20Center!5e0!3m2!1ses-419!2smx!4v1714422409662!5m2!1ses-419!2smx' width='100%' height='400' style={{ border: '0' }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
        </section>
      </div>
      <section id='contacto' className='border-y-2 border-[#142e38] mt-[65px] w-full'>
        <ContactForm />
      </section>
    </main>
  )
}