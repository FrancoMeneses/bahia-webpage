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
    <footer className='w-full h-[300px] bg-[#F1F5F9] px-[50px] 2xl:px-[90px] flex flex-col justify-center items-center text-[#142e38]'>
      <div className='flex w-full h-full py-11 justify-center items-center'>
        <Link href='/' className='w-full h-full flex justify-start items-center'>
          <Image src={Logo} alt='Bahía Business Center Logo' className='w-[170px]' />
        </Link>
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
          <Link href='/espacios/sala-capacitacion' className='text-[18px] font-light hover:underline hover:underline-offset-2'>SALA DE CAPACITACIÓN</Link>
        </ul>
        <div className='flex flex-col w-full h-full justify-between items-center gap-3'>
          <ul className='w-full flex flex-col justify-center items-start gap-3'>
            <h4 className='text-[20px] font-semibold'>CONTACTO</h4>
            <a href='#' className='flex gap-3 w-full h-full justify-start items-center'>
              <Image src={MailIcon} alt='Mail icon' />
              <p>bahia.business.c@gmail.com</p>
            </a>
            <a href='#' className='flex gap-3 w-full h-full justify-start items-center'>
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
      <div className='flex w-full h-auto justify-center items-center gap-4'>
        <p>Derechos de autor © 2024 Bahía Business Center</p>
        <a href='/aviso-privacidad' className='hover:underline'> Aviso de privacidad</a>
      </div>
    </footer>
  )
}
