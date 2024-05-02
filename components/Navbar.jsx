'use client'

import Image from 'next/image'
import Logo from '../assets/Logo.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MenuIcon from '../assets/menu.svg'

export const Navbar = () => {
  const pathname = usePathname()
  const isActive = (href) => pathname === href
  const URLS = ['/espacios', '/espacios/coworking', '/espacios/privado', '/espacios/oficina-virtual', '/espacios/sala-de-juntas', '/ubicacion']
  const hasNav = () => {
    return URLS.includes(pathname)
  }

  return (
    <header className='w-full h-[120px] flex justify-center items-center'>
      <div className='w-full h-full px-3 md:px-[50px] 2xl:px-[90px] flex justify-between items-center border'>
        <Link href='/' className='w-[33%] md:w-[11%] h-full flex justify-start items-center'>
          <Image src={Logo} alt='Bahía Business Center Logo' className='w-[80px] md:h-[90px] md:w-[145px]' />
        </Link>
        <ul className='hidden md:flex w-auto h-full flex-grow justify-center items-center gap-8 text-[20px] font-light'>
          <li className='hover:text-[#2c8093]'>
            <Link href='/' className={isActive('/') ? 'text-[#2c8093] font-semibold' : undefined}>INICIO</Link>
          </li>
          <li className='hover:text-[#2c8093] relative group'>
            <Link href='/espacios' className={isActive('/espacios') || isActive('/espacios/coworking') || isActive('/espacios/oficina-privada') || isActive('/espacios/oficina-virtual') || isActive('/espacios/sala-juntas') || isActive('/espacios/sala-training') ? 'text-[#2c8093] font-semibold' : undefined}>ESPACIOS</Link>
            <ul className='hidden group-hover:flex absolute top-full flex-col gap-3 list-inside list-disc bg-[#142e38] text-[#f0fbfb] w-[280px]'>
              <Link href='/espacios/coworking' className={isActive('/espacios/coworking') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}>- Coworking</Link>
              <Link href='/espacios/oficina-privada' className={isActive('/espacios/oficina-privada') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}>- Oficina privada</Link>
              <Link href='/espacios/oficina-virtual' className={isActive('/espacios/oficina-virtual') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}>- Oficina virtual</Link>
              <Link href='/espacios/sala-juntas' className={isActive('/espacios/sala-juntas') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}>- Sala de juntas</Link>
              <Link href='/espacios/sala-training' className={isActive('/espacios/sala-training') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}>- Sala de capacitación</Link>
            </ul>
          </li>
          <li className='hover:text-[#2c8093]'>
            <Link href='/ubicacion' className={isActive('/ubicacion') ? 'text-[#2c8093] font-semibold' : undefined}>UBICACIÓN</Link>
          </li>
          <li className='hover:text-[#2c8093]'>
            <Link href={hasNav() ? `${pathname}#contacto` : '/#contacto'}>CONTACTO</Link>
          </li>
        </ul>
        <div className='w-[33%] md:w-[11%] h-full flex justify-end items-center'>
          <button type='button' className='w-auto px-4 md:p-0 md:w-full h-[45px] text-[13px] md:text-[18px] bg-[#2c8093] text-white rounded-[10px] hover:scale-105 transition-all ease-in-out duration-150'>Cotizar ahora</button>
        </div>

        <button className='md:hidden w-[33%] flex justify-end items-center h-full'>
          <Image src={MenuIcon} alt='Menu Icon' className='w-[40px]' />
        </button>

      </div>
    </header>
  )
}
