'use client'

import Image from 'next/image'
import Logo from '../assets/Logo.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const pathname = usePathname()
  const isActive = (href) => pathname === href
  const URLS = ['/espacios', '/espacios/coworking', '/espacios/privado', '/espacios/oficina-virtual', '/espacios/sala-de-juntas', '/ubicacion']
  const hasNav = () => {
    return URLS.includes(pathname)
  }

  return (
    <header className='w-full h-[120px] flex justify-center items-center'>
      <div className='w-full h-full px-[50px] 2xl:px-[90px] flex justify-between items-center'>
        <Link href='/' className='w-[11%] h-full flex justify-start items-center'>
          <Image src={Logo} alt='Bahía Business Center Logo' className='h-[90px] w-[145px]' />
        </Link>
        <ul className='w-auto h-full flex flex-grow justify-center items-center gap-8 text-[23px] font-light'>
          <li className='hover:text-[#2c8093]'>
            <Link href='/' className={isActive('/') ? 'text-[#2c8093] font-semibold' : undefined}>INICIO</Link>
          </li>
          <li className='hover:text-[#2c8093]'>
            <Link href='/espacios' className={isActive('/espacios') || isActive('/espacios/coworking') || isActive('/espacios/oficina-privada') || isActive('/espacios/sala-juntas') || isActive('/espacios/sala-training') ? 'text-[#2c8093] font-semibold' : undefined}>ESPACIOS</Link>
          </li>
          <li className='hover:text-[#2c8093]'>
            <Link href='/ubicacion' className={isActive('/ubicacion') ? 'text-[#2c8093] font-semibold' : undefined}>UBICACIÓN</Link>
          </li>
          <li className='hover:text-[#2c8093]'>
            <Link href={hasNav() ? `${pathname}#contacto` : '/#contacto'}>CONTACTO</Link>
          </li>
        </ul>
        <div className='w-[11%] h-full flex justify-end items-center'>
          <button type='button' className='w-full h-[45px] text-[18px] bg-[#2c8093] text-white rounded-[10px] hover:scale-105 transition-all ease-in-out duration-150'>Cotizar ahora</button>
        </div>
      </div>
    </header>
  )
}
