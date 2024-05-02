import { Banner } from '@/components/Banner'
import { ServiceCard } from '@/components/ServiceCard'
import ServiceCover from '../assets/rafiki.svg'
import Image from 'next/image'
import Desk from '../assets/desk.jpg'
import { ContactForm } from '@/components/Form'
import Pana from '../assets/pana.svg'
import Link from 'next/link'

export default function Home () {
  const BANNER_TEXT = 'Bienvenido a la capital del caribe mexicano, la mejor opción para un centro de negocio.'

  return (
    <main className='w-full h-full flex flex-col justify-center items-center'>
      <Banner
        height='h-[418px]'
        width='w-full'
        bgColor='bg-[#296675]/10'
        text={BANNER_TEXT}
        buttonText='Ver ubicación'
        image={Pana}
        link='/ubicacion#mapa'
      />
      <div className='flex flex-col w-full h-full px-[50px] 2xl:px-[90px]'>
        <section id='inicio-espacios' className='flex flex-col w-full h-full py-[65px]'>
          <div className='flex flex-col w-full justify-center items-start gap-8 text-[#142e38] mb-[50px]'>
            <p className='text-[22px]'>Estamos comprometidos a proporcionarte el ambiente<br /> ideal para que tu negocio prospere</p>
            <p className='text-[18px] font-light'>Ecosistema completo diseñado para satisfacer todas tus necesidades<br /> profesionales.</p>
          </div>
          <div className='flex flex-col w-full h-full justify-center items-center gap-[65px]'>
            <div className='flex justify-between items-center w-full h-full'>
              <ServiceCard
                image={ServiceCover}
                title='Coworking'
                text='Trabaja de forma independiente mientras disfrutas de los beneficios de la colaboración, el intercambio de ideas y el establecimiento de conexiones significativas.'
                link='/espacios/coworking'
              />
              <ServiceCard
                image={ServiceCover}
                title='Oficina privada'
                text='Área dedicada exclusivamente a una persona o equipo específico, separada físicamente del resto del espacio compartido.'
                link='/espacios/oficina-privada'
              />
              <ServiceCard
                image={ServiceCover}
                title='Oficina virtual'
                text='Área donde disfrutar de cierto grado de privacidad visual y acústica, manteniendo un sentido de conexión con la comunidad de trabajo más amplia.'
                link='/espacios/oficina-virtual'
              />
            </div>
            <div className='w-full flex justify-between items-center gap-[65px]'>
              <ServiceCard
                image={ServiceCover}
                title='Sala de juntas'
                text='Espacio designado específicamente para reuniones, presentaciones y discusiones entre equipos, clientes o socios comerciales, con tecnología audiovisual para facilitar la
                comunicación efectiva y la colaboración durante las reuniones.'
                height='h-auto'
                width='w-full'
                link='/espacios/sala-juntas'
              />
              <ServiceCard
                image={ServiceCover}
                title='Sala de capacitación (Training Room)'
                text='La atmósfera tranquila y profesional de la sala de capacitación la convierte en el lugar perfecto para sumergirse en el aprendizaje y la reflexión. Ya sea para una sesión de capacitación intensiva,
                un taller interactivo o una reunión estratégica.'
                height='h-auto'
                width='w-full'
                link='/espacios/sala-capacitacion'
              />
            </div>
          </div>
        </section>
      </div>
      <section id='inicio-guia' className='bg-[#142e38] h-[400px] w-full flex justify-between items-center text-white'>
        <div className='h-full w-[45%] flex'>
          <Image src={Desk} alt='Desk image' width='auto' height='auto' />
        </div>
        <div className='flex flex-col h-full w-[55%] justify-evenly items-center'>
          <p className='text-[20px]'>
            Recuerda que elegir el espacio adecuado es fundamental<br /> para tu éxito profesional.
            Tómate el tiempo necesario<br /> para explorar tus opciones y encontrar el espacio que se<br /> adapte mejor a tus necesidades y objetivos.
          </p>
          <span className='text-center text-[22px] font-semibold'>
            ¡Tu futuro profesional comienza aquí!
          </span>
          <Link href='/espacios#guia' className='w-auto h-auto py-1.5 px-3 text-[20px] bg-[#f0fbfb] text-[#142e38] rounded-[10px] hover:scale-105 transition-all ease-in-out duration-150'>
            Guía para escoger espacio
          </Link>
        </div>
      </section>
      <section id='contacto' className='border-y-2 border-[#142e38] mt-[65px] w-full'>
        <ContactForm />
      </section>
    </main>
  )
}
