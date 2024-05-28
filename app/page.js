import { ServiceCard } from '@/components/ServiceCard'
import Image from 'next/image'
import { ContactForm } from '@/components/Form'
import Pana from '../assets/pana.svg'
import Link from 'next/link'
import { SliderMobile } from '@/components/SliderMobile'
import { BannerVideo } from '@/components/BannerVideo'

export default function Home () {
  const BANNER_TEXT = 'Bienvenido a Bahía Business Center, la mejor opción para hacer negocios en la capital del Caribe mexicano.'

  return (
    <main className='w-full h-full flex flex-col justify-center items-center'>
      {/* <Banner
        height='h-[200px] md:h-[418px]'
        width='w-full'
        bgColor='bg-[#296675]/10'
        text={BANNER_TEXT}
        buttonText='Ver ubicación'
        image={Pana}
        link='/ubicacion#mapa'
      /> */}
      <BannerVideo
        height='h-[200px] md:h-[326px]'
        width='w-full'
        bgColor='bg-[#296675]/10'
        text={BANNER_TEXT}
        buttonText='Ver ubicación'
        videoLink={Pana}
        link='/ubicacion#mapa'
      />
      <div className='flex flex-col w-full h-full px-4 md:px-[50px] 2xl:px-[90px]'>
        <section id='inicio-espacios' className='flex flex-col w-full h-full py-[20px] md:py-[65px]'>
          <div className='flex flex-col w-full justify-center items-start gap-8 text-[#142e38] mb-[50px]'>
            <p className='text-[22px]'>Estamos comprometidos a proporcionarte el ambiente<br /> ideal para potencializar tu negocio</p>
            <p className='text-[18px] font-light'>Ecosistema completo diseñado para satisfacer todas tus necesidades<br /> profesionales.</p>
          </div>
          <div className='md:hidden'>
            <SliderMobile />
          </div>
          <div className='hidden md:flex flex-col w-full h-full justify-center items-center gap-[65px]'>
            <div className='flex justify-center 2xl:justify-between gap-[60px] items-center w-full h-full'>
              <ServiceCard
                image='https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832219/Webpage/Coworking/tclkqzehgwl6grsfbk2q.webp'
                title='Coworking'
                text='Trabaja de forma independiente mientras disfrutas de los beneficios de la colaboración, el intercambio de ideas y el establecimiento de conexiones significativas.'
                link='/espacios/coworking'
              />
              <ServiceCard
                image='https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832414/Webpage/Oficinas%20Privadas/ffg9wbr4pxjhbgrdqrhx.webp'
                title='Oficina privada'
                text='Área dedicada exclusivamente a una persona o equipo específico, separada físicamente del resto del espacio compartido.'
                link='/espacios/oficina-privada'
              />
              <ServiceCard
                image='https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832546/Webpage/Oficina%20Virtual/vwopybmv2nu52ctrvahp.webp'
                title='Oficina virtual'
                text='Solución que permite a los profesionales y a las empresas trabajar desde cualquier lugar, sin necesidad de tener un espacio físico propio, pero si un punto de reunión para tus clientes y proveedores.'
                link='/espacios/oficina-virtual'
              />
            </div>
            <div className='w-full flex justify-between items-center gap-[65px]'>
              <ServiceCard
                image='https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832469/Webpage/Sala%20de%20Juntas/f21htfihzjpgxr8lkcut.webp'
                title='Sala de juntas'
                text='Espacio designado específicamente para reuniones, presentaciones y discusiones entre equipos, clientes o socios comerciales, con tecnología audiovisual para facilitar la
                comunicación efectiva y la colaboración durante las reuniones.'
                height='h-auto'
                width='w-full'
                link='/espacios/sala-juntas'
              />
              <ServiceCard
                image='https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832512/Webpage/Sala%20de%20Capacitaci%C3%B3n/ch0dfrn93rfhjlo1rkw6.webp'
                title='Sala de capacitación (Training Room)'
                text='La atmósfera tranquila y profesional de la sala de capacitación la convierte en el lugar perfecto para sumergirse en el aprendizaje y la reflexión. Ya sea para una sesión de capacitación intensiva,
                un taller interactivo o una reunión estratégica.'
                height='h-auto'
                width='w-full'
                link='/espacios/sala-training'
              />
            </div>
          </div>
        </section>
      </div>
      <section id='inicio-guia' className='bg-[#142e38] h-[300px] md:h-[400px] 2xl:h-[500px] mt-[50px] md:mt-0 w-full flex justify-between items-center text-white'>
        <div className='h-full w-[45%] hidden md:flex'>
          <Image src='https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832512/Webpage/Sala%20de%20Capacitaci%C3%B3n/dcmdexqnwmy0w9dyarxg.webp' alt='Desk image' width={4160} height={3134} className='' />
        </div>
        <div className='flex flex-col h-full w-full py-4 px-4 md:p-0 md:w-[55%] justify-evenly items-center'>
          <p className='hidden md:block text-[20px]'>
            Recuerda que elegir el espacio adecuado es fundamental<br /> para tu éxito profesional.
            Tómate el tiempo necesario<br /> para explorar tus opciones y encontrar el espacio que se<br /> adapte mejor a tus necesidades y objetivos.
          </p>
          <p className='text-[16px] text-justify md:hidden'>
            Recuerda que elegir el espacio adecuado es fundamental para tu éxito profesional.
            Tómate el tiempo necesario para explorar tus opciones y encontrar el espacio que se adapte mejor a tus necesidades y objetivos.
          </p>
          <span className='text-center text-[18px] md:text-[22px] font-semibold'>
            ¡Tu futuro profesional comienza aquí!
          </span>
          <Link href='/espacios#guia' className='w-auto h-auto py-1.5 px-3 text-[18px] md:text-[20px] bg-[#f0fbfb] text-[#142e38] rounded-[10px] hover:scale-105 transition-all ease-in-out duration-150'>
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
