import { Banner } from '@/components/Banner'
import { ContactForm } from '@/components/Form'
import { ServiceCard } from '@/components/ServiceCard'
import Image from 'next/image'
import Down from '../../assets/down.svg'
import Wifi from '../../assets/wifi.svg'
import Air from '../../assets/air-conditioning.svg'
import Printer from '../../assets/printer.svg'
import Coffee from '../../assets/coffee.svg'
import Users from '../../assets/users.svg'
import Spray from '../../assets/spray.svg'
import Guia from '../../assets/Guia.svg'
import { SliderMobile } from '@/components/SliderMobile'

export const metadata = {
  title: 'Espacios Bahía: Coworking, Oficinas Privadas, Oficinas Virtuales, Salas de Reuniones y Capacitación en Renta',
  description: 'Explora Espacios Bahía: tu destino para coworking, oficinas privadas, virtuales, salas de reuniones y capacitación en Chetumal, Quintana Roo. ¡Encuentra el espacio perfecto para tu negocio hoy mismo!',
  openGraph: {
    images: 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832219/Webpage/Coworking/tclkqzehgwl6grsfbk2q.webp'
  }
}

export default function Espacios () {
  const BANNER_TEXT = '¡Ahorra hasta un 30% con nuestras membresías!'

  return (
    <main className='w-full h-full flex flex-col justify-center items-center'>
      <Banner
        height='h-[200px] md:h-[350px]'
        width='w-full'
        bgColor='bg-[#296675]/10'
        text={BANNER_TEXT}
        buttonText='Obtener información'
        link='/espacios#contacto'
      />
      <div className='flex flex-col w-full h-full px-4 md:px-[50px] 2xl:px-[90px]'>
        <section id='amenidades' className='flex flex-col w-full h-full py-[65px]'>
          <div className='flex flex-col w-full justify-center items-start gap-8 text-[#142e38] mb-[50px]'>
            <p className='text-[22px]'>En nuestro innovador espacio, no solo ofrecemos<br /> escritorios y salas de reuniones</p>
            <p className='text-[18px] font-light'>Descubre un nuevo estándar de trabajo colaborativo en nuestros espacios,<br /> donde la inspiración y la eficiencia se fusionan para impulsar tu éxito.</p>
          </div>
          <div className='flex flex-col w-full justify-center items-start gap-8 text-[#142e38] mb-[50px]'>
            <p className='text-[22px]'>Todos nuestros espacios incluyen</p>
            <section id='amenidades' className='w-full md:w-[65%] mx-auto mt-[25px]'>
              <div className='overflow-hidden'>
                {/* <!-- accordion-tab  --> */}
                <div className='group outline-none accordion-section' tabIndex='1'>
                  <div className='group border border-[#142e38] border-b-0 rounded-t-xl flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                    <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                      <div className='w-full h-full flex justify-start items-center gap-4'>
                        <span className='size-auto flex justify-center items-center'>
                          <Image src={Wifi} alt='Wifi icon' className='size-[40px]' width='auto' />
                        </span>
                        <h2 className='text-center'>
                          Internet de alta velocidad
                        </h2>
                      </div>
                      <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                        <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                      </span>
                    </div>
                  </div>
                  <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                    <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                      Conéctate sin interrupciones y lleva a cabo tus tareas con eficiencia gracias a nuestra conexión a Internet de alta velocidad.
                    </p>
                  </div>
                </div>
                {/* <!-- accordion-tab --> */}
                {/* <!-- accordion-tab  --> */}
                <div className='group outline-none accordion-section' tabIndex='2'>
                  <div className='group border border-[#142e38] border-b-0 flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                    <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                      <div className='w-full h-full flex justify-start items-center gap-6 md:gap-4'>
                        <span className='size-auto flex justify-center items-center'>
                          <Image src={Air} alt='Air icon' className='size-[40px]' width='auto' />
                        </span>
                        <h2 className='text-center'>
                          Espacios climatizados
                        </h2>
                      </div>
                      <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                        <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                      </span>
                    </div>
                  </div>
                  <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                    <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                      Trabaja en un ambiente cómodo y agradable durante todo el año, gracias a nuestro sistema de climatización que garantiza una temperatura óptima en todo momento.
                    </p>
                  </div>
                </div>
                {/* <!-- accordion-tab --> */}
                {/* <!-- accordion-tab  --> */}
                <div className='group outline-none accordion-section' tabIndex='3'>
                  <div className='group border border-[#142e38] border-b-0 flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                    <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                      <div className='w-full h-full flex justify-start items-center gap-4'>
                        <span className='size-auto flex justify-center items-center'>
                          <Image src={Printer} alt='Printer icon' className='size-[40px]' width='auto' />
                        </span>
                        <h2 className='text-center'>
                          Centro de copiado y escaneo
                        </h2>
                      </div>
                      <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                        <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                      </span>
                    </div>
                  </div>
                  <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                    <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                      Simplifica tus tareas administrativas con nuestro centro de copiado y escaneo, disponible para todos nuestros miembros.
                    </p>
                  </div>
                </div>
                {/* <!-- accordion-tab --> */}
                {/* <!-- accordion-tab  --> */}
                <div className='group outline-none accordion-section' tabIndex='4'>
                  <div className='group border border-[#142e38] border-b-0 flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                    <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                      <div className='w-full h-full flex justify-start items-center gap-[70px] md:gap-4'>
                        <span className='size-auto flex justify-center items-center'>
                          <Image src={Coffee} alt='Coffee icon' className='size-[40px]' width='auto' />
                        </span>
                        <h2 className='text-center self-center'>
                          Coffee Break
                        </h2>
                      </div>
                      <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                        <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                      </span>
                    </div>
                  </div>
                  <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                    <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                      Toma un descanso y recarga energías en nuestras áreas comunes diseñadas para el relax, donde podrás disfrutar de un café o socializar con otros miembros de la comunidad.
                    </p>
                  </div>
                </div>
                {/* <!-- accordion-tab --> */}
                {/* <!-- accordion-tab  --> */}
                <div className='group outline-none accordion-section' tabIndex='5'>
                  <div className='group border border-[#142e38] border-b-0 flex justify-between px-4 py-3 items-center transition ease duration-500 cursor-pointer pr-10 relative'>
                    <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                      <div className='w-full h-full flex justify-start items-center gap-4'>
                        <span className='size-auto flex justify-center items-center'>
                          <Image src={Users} alt='Users icon' className='size-[40px]' width='auto' />
                        </span>
                        <h2 className='text-center'>
                          Recepción y servicios administrativos
                        </h2>
                      </div>
                      <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                        <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                      </span>
                    </div>
                  </div>
                  <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x border-[#142e38] px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                    <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                      Nuestro personal de recepción estará siempre disponible para recibir a tus visitantes y ayudarte con cualquier consulta o gestión administrativa que necesites.
                    </p>
                  </div>
                </div>
                {/* <!-- accordion-tab --> */}
                {/* <!-- accordion-tab  --> */}
                <div className='group outline-none accordion-section' tabIndex='6'>
                  <div className='group border border-[#142e38] rounded-b-xl group-focus:rounded-none group-focus:border-b-0 flex justify-between px-4 py-3 items-center transition-all ease-out duration-500 cursor-pointer pr-10 relative'>
                    <div className='text-[20px] text-center w-full group-focus:font-semibold text-[#142e38] transition ease duration-500 flex'>
                      <div className='w-full h-full flex justify-start items-center gap-4'>
                        <span className='size-auto flex justify-center items-center'>
                          <Image src={Spray} alt='Spray icon' className='size-[40px]' width='auto' />
                        </span>
                        <h2 className='text-center'>
                          Limpieza y mantenimiento
                        </h2>
                      </div>
                      <span className='size-auto items-center h-full inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-0 mr-2'>
                        <Image src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' />
                      </span>
                    </div>
                  </div>
                  <div className='group-focus:max-h-screen max-h-0 bg-[#296675]/10 border-x group-focus:border-b border-[#142e38] rounded-b-xl px-4 overflow-hidden ease duration-500 flex flex-col justify-center items-center'>
                    <p className='p-2 text-[#142e38] text-justify max-w-6xl'>
                      Garantizamos un ambiente limpio, ordenado y seguro para que los profesionales puedan trabajar de manera productiva y cómoda.
                    </p>
                  </div>
                </div>
                {/* <!-- accordion-tab --> */}
              </div>
            </section>
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
          <div className='md:hidden'>
            <SliderMobile />
          </div>
        </section>
        <section id='guia' className='w-full flex flex-col justify-between items-center gap-8 text-[#142e38]'>
          <p className='text-[22px] self-start'>Guía para escoger tu mejor opción dentro de<br /> Bahía Business Center</p>
          <div className='flex flex-col w-full h-full justify-center items-start'>
            <ul className='list-decimal list-inside text-[18px] flex flex-col justify-start items-center gap-4'>
              <li>
                <span className='font-medium'>Define tus necesidades:</span> Antes de comenzar tu búsqueda, reflexiona sobre tus necesidades específicas.
                Considera el tipo de trabajo que realizas, la cantidad de tiempo que pasarás en el espacio, tus preferencias de ubicación y cualquier otro requisito importante para ti.
              </li>
              <li>
                <span className='font-medium'>Presupuesto:</span> Establece un presupuesto claro para tu membresía. Considera no solo el costo mensual de la membresía, sino también cualquier tarifa adicional, como depósitos de seguridad o cargos por servicios extra.
                Compara los precios de diferentes opciones y asegúrate de que se ajusten a tu presupuesto.
              </li>
              <li>
                <span className='font-medium'>Flexibilidad de membresía:</span> Busca un espacio que ofrezca flexibilidad en sus planes de membresía.
                Esto podría incluir opciones de membresía a tiempo completo, parcial o por horas, así como la capacidad de cambiar de plan según tus necesidades cambien con el tiempo.
              </li>
              <li>
                <span className='font-medium'>Tamaño:</span> Visita cada espacio en persona para evaluar el espacio de trabajo. Observa la disposición del espacio, el diseño, la iluminación y la atmósfera general.
                Busca un lugar que te inspire a ser productivo y que tenga una comunidad activa y colaborativa.
              </li>
              <li>
                <span className='font-medium'>Comunidad y networking:</span> Investiga la comunidad de cada espacio. ¿Hay oportunidades para conectarte y colaborar con otros profesionales en el espacio?
                Una comunidad fuerte puede ser un recurso valioso para tu crecimiento profesional.
              </li>
            </ul>
            <div className='flex w-full justify-center items-center mt-[50px]'>
              <Image src={Guia} alt='Guia image' width='auto' />
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
