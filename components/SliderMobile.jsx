'use client'
import { Carousel } from 'react-responsive-carousel'
import { ServiceCard } from './ServiceCard'

export const SliderMobile = () => {
  const indicatorStyles = {
    background: '#fff',
    width: 8,
    height: 8,
    display: 'inline-block',
    margin: '0 8px',
    borderRadius: '50%'
  }

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      infiniteLoop
      interval={3000}
      autoPlay
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: '#000' }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          )
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role='button'
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        )
      }}
    >
      <ServiceCard
        image='https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832219/Webpage/Coworking/tclkqzehgwl6grsfbk2q.webp'
        title='Coworking'
        text='Trabaja de forma independiente mientras disfrutas de los beneficios de la colaboración, el intercambio de ideas y el establecimiento de conexiones significativas.'
        link='/espacios/coworking'
        width='auto'
        height='h-[600px]'
      />
      <ServiceCard
        image='https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832414/Webpage/Oficinas%20Privadas/ffg9wbr4pxjhbgrdqrhx.webp'
        title='Oficina privada'
        text='Área dedicada exclusivamente a una persona o equipo específico, separada físicamente del resto del espacio compartido.'
        link='/espacios/oficina-privada'
        width='auto'
        height='h-[600px]'
      />
      <ServiceCard
        image='https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832546/Webpage/Oficina%20Virtual/vwopybmv2nu52ctrvahp.webp'
        title='Oficina virtual'
        text='Área donde disfrutar de cierto grado de privacidad visual y acústica, manteniendo un sentido de conexión con la comunidad de trabajo más amplia.'
        link='/espacios/oficina-virtual'
        width='auto'
        height='h-[600px]'
      />
      <ServiceCard
        image='https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832469/Webpage/Sala%20de%20Juntas/f21htfihzjpgxr8lkcut.webp'
        title='Sala de juntas'
        text='Espacio designado específicamente para reuniones, presentaciones y discusiones entre equipos, clientes o socios comerciales, con tecnología audiovisual para facilitar la
                comunicación efectiva y la colaboración durante las reuniones.'
        height='h-[600px]'
        width='w-full'
        link='/espacios/sala-juntas'
      />
      <ServiceCard
        image='https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832512/Webpage/Sala%20de%20Capacitaci%C3%B3n/ch0dfrn93rfhjlo1rkw6.webp'
        title='Sala de capacitación (Training Room)'
        text='La atmósfera tranquila y profesional de la sala de capacitación la convierte en el lugar perfecto para sumergirse en el aprendizaje y la reflexión. Ya sea para una sesión de capacitación intensiva,
                un taller interactivo o una reunión estratégica.'
        height='h-[600px]'
        width='w-full'
        link='/espacios/sala-training'
      />
    </Carousel>
  )
}
