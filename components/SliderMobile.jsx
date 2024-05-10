'use client'
import { Carousel } from 'react-responsive-carousel'
import { ServiceCard } from './ServiceCard'
import ServiceCover from '../assets/rafiki.svg'

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
        image={ServiceCover}
        title='Coworking'
        text='Trabaja de forma independiente mientras disfrutas de los beneficios de la colaboración, el intercambio de ideas y el establecimiento de conexiones significativas.'
        link='/espacios/coworking'
        width='auto'
        height='h-[600px]'
      />
      <ServiceCard
        image={ServiceCover}
        title='Oficina privada'
        text='Área dedicada exclusivamente a una persona o equipo específico, separada físicamente del resto del espacio compartido.'
        link='/espacios/oficina-privada'
        width='auto'
        height='h-[600px]'
      />
      <ServiceCard
        image={ServiceCover}
        title='Oficina virtual'
        text='Área donde disfrutar de cierto grado de privacidad visual y acústica, manteniendo un sentido de conexión con la comunidad de trabajo más amplia.'
        link='/espacios/oficina-virtual'
        width='auto'
        height='h-[600px]'
      />
      <ServiceCard
        image={ServiceCover}
        title='Sala de juntas'
        text='Espacio designado específicamente para reuniones, presentaciones y discusiones entre equipos, clientes o socios comerciales, con tecnología audiovisual para facilitar la
                comunicación efectiva y la colaboración durante las reuniones.'
        height='h-[600px]'
        width='w-full'
        link='/espacios/sala-juntas'
      />
      <ServiceCard
        image={ServiceCover}
        title='Sala de capacitación (Training Room)'
        text='La atmósfera tranquila y profesional de la sala de capacitación la convierte en el lugar perfecto para sumergirse en el aprendizaje y la reflexión. Ya sea para una sesión de capacitación intensiva,
                un taller interactivo o una reunión estratégica.'
        height='h-[600px]'
        width='w-full'
        link='/espacios/sala-capacitacion'
      />
    </Carousel>
  )
}
