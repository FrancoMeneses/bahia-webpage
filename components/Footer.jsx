'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/Logo.svg'
import MailIcon from '../assets/mailIcon.svg'
import MapIcon from '../assets/mapIcon.svg'
import FBIcon from '../assets/fbIcon.svg'
import InsIcon from '../assets/insIcon.svg'
import { usePathname } from 'next/navigation'

export const Footer = () => {
  const pathname = usePathname()
  const URLS = ['/espacios', '/espacios/coworking', '/espacios/privado', '/espacios/oficina-virtual', '/espacios/sala-de-juntas', '/ubicacion']
  const hasNav = () => {
    return URLS.includes(pathname)
  }
  return (
    <footer className='w-full h-auto pt-4 md:pt-0 md:h-[320px] bg-[#F1F5F9] px-4 md:px-[50px] 2xl:px-[90px] flex flex-col justify-center items-center text-[#142e38]'>
      <div className='flex flex-col md:flex-row w-full h-full py-5 md:py-11 gap-4 justify-center items-center md:gap-0 md:justify-between md:items-center'>
        <Link href='/' className='hidden w-auto h-full md:flex justify-start items-center'>
          <Image src={Logo} alt='Bahía Business Center Logo' className='w-[200px]' />
        </Link>
        <div className='flex w-full md:w-auto h-full justify-between md:justify-start lg:gap-[150px]'>
          <ul className='w-full h-full flex flex-col justify-between items-start gap-3'>
            <h4 className='text-[20px] font-semibold'>MENÚ</h4>
            <Link href='/' className='text-[18px] font-light hover:underline hover:underline-offset-2'>INICIO</Link>
            <Link href='/espacios' className='text-[18px] font-light hover:underline hover:underline-offset-2'>ESPACIOS</Link>
            <Link href='/ubicacion' className='text-[18px] font-light hover:underline hover:underline-offset-2'>UBICACIÓN</Link>
            <Link href={hasNav() ? `${pathname}#contacto` : '/#contacto'} className='text-[18px] font-light hover:underline hover:underline-offset-2'>CONTACTO</Link>
          </ul>
          <ul className='w-full h-full flex flex-col justify-between items-start gap-3'>
            <h4 className='text-[20px] font-semibold'>SERVICIOS</h4>
            <Link href='/espacios/coworking' className='text-[18px] font-light hover:underline hover:underline-offset-2'>COWORKING</Link>
            <Link href='/espacios/oficina-privada' className='text-[18px] font-light hover:underline hover:underline-offset-2'>OFICINA PRIVADA</Link>
            <Link href='/espacios/oficina-virtual' className='text-[18px] font-light hover:underline hover:underline-offset-2'>OFICINA VIRTUAL</Link>
            <Link href='/espacios/sala-juntas' className='text-[18px] font-light hover:underline hover:underline-offset-2'>SALA DE JUNTAS</Link>
            <Link href='/espacios/sala-training' className='text-[18px] font-light hover:underline hover:underline-offset-2'>SALA DE CAPACITACIÓN</Link>
          </ul>
        </div>
        <div className='flex flex-col w-auto h-full justify-between items-center self-start gap-6 md:gap-3'>
          <ul className='w-full flex flex-col justify-center items-start gap-3'>
            <h4 className='text-[20px] font-semibold'>CONTACTO</h4>
            <a href='mailto:bahia.business.c@gmail.com?Subject=Información%20para%20renta%20de%20espacio' className='flex gap-3 w-full h-full justify-start items-center'>
              <Image src={MailIcon} alt='Mail icon' />
              <p>bahia.business.c@gmail.com</p>
            </a>
            <a href='https://maps.app.goo.gl/zYVKsyUsCjsW89QL9' target='_blank' rel='noreferrer' className='flex gap-3 w-full h-full justify-start items-center'>
              <Image src={MapIcon} alt='Map icon' />
              <p>Av. Rojo Gómez 595<br /> Esquina Bugambilias</p>
            </a>
          </ul>
          <ul className='w-full flex flex-col justify-center items-start gap-3'>
            <h4 className='text-[20px] font-semibold'>REDES SOCIALES</h4>
            <div className='flex w-full h-full justify-start items-center gap-8'>
              <a href='https://www.facebook.com/profile.php?id=100095184001712' target='_blank' rel='noreferrer' className='flex h-full justify-start items-center hover:scale-110 transition-all ease-in-out duration-150'>
                <Image src={FBIcon} alt='Facebook icon' />
              </a>
              <a href='https://www.instagram.com/bahiabusinesscenter' target='_blank' rel='noreferrer' className='flex h-full justify-start items-center hover:scale-110 transition-all ease-in-out duration-150'>
                <Image src={InsIcon} alt='Instagram icon' />
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div className='flex flex-col md:flex-row w-full h-auto justify-center items-center gap-1 text-[14px] md:gap-4 mt-5'>
        <p>Derechos de autor © 2024 Bahía Business Center</p>
        <a href='/aviso-privacidad' className='hover:underline'> Aviso de privacidad</a>
      </div>
    </footer>
  )
}
