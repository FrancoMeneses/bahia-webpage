'use client'

import Image from 'next/image'
import Logo from '../assets/Logo.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MenuIcon from '../assets/menu.svg'
import Down from '../assets/down.svg'
import { useState } from 'react'

export const Navbar = () => {
  const pathname = usePathname()
  const isActive = (href) => pathname === href
  const URLS = ['/espacios', '/espacios/coworking', '/espacios/privado', '/espacios/oficina-virtual', '/espacios/sala-de-juntas', '/ubicacion']
  const hasNav = () => {
    return URLS.includes(pathname)
  }
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [espaciosOpen, setEspaciosOpen] = useState(false)

  return (
    <header className='w-full h-[100px] z-50 sticky bg-[#F5F5F5] top-0 md:static md:h-[120px] flex justify-center items-center'>
      <div className='w-full h-full md:px-[50px] 2xl:px-[90px] flex justify-between items-center border relative'>
        <Link href='/' className='w-[35%] pl-3 md:w-[11%] h-full flex justify-start items-center'>
          <Image src={Logo} alt='Bahía Business Center Logo' className='w-[80px] md:h-[90px] md:w-[145px]' />
        </Link>
        <div className={'absolute bg-[#F5F5F5] top-0 w-full md:opacity-100 md:static md:w-auto transition-all duration-300 ease-in-out' + (navbarOpen ? ' mt-[90px] h-auto' : ' opacity-0 pointer-events-none')}>
          <ul className='flex flex-col md:flex-row w-auto h-full flex-grow justify-center items-center gap-8 text-[20px] font-light'>
            <li className='hover:text-[#2c8093]'>
              <Link
                href='/' onClick={() => {
                  setNavbarOpen(false)
                  setEspaciosOpen(false)
                }} className={isActive('/') ? 'text-[#2c8093] font-semibold' : undefined}
              >INICIO
              </Link>
            </li>

            {/* Escritorio */}
            <li className='hover:text-[#2c8093] relative group hidden md:block'>
              <Link
                href='/espacios' onClick={() => {
                  setNavbarOpen(false)
                  setEspaciosOpen(false)
                }} className={isActive('/espacios') || isActive('/espacios/coworking') || isActive('/espacios/oficina-privada') || isActive('/espacios/oficina-virtual') || isActive('/espacios/sala-juntas') || isActive('/espacios/sala-training') ? 'text-[#2c8093] font-semibold' : undefined}
              >ESPACIOS
              </Link>
              <ul className='hidden group-hover:flex absolute top-full flex-col gap-3 list-inside list-disc bg-[#142e38] text-[#f0fbfb] w-[280px]'>
                <Link
                  href='/espacios/coworking' onClick={() => {
                    setNavbarOpen(false)
                    setEspaciosOpen(false)
                  }} className={isActive('/espacios/coworking') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}
                >- Coworking
                </Link>
                <Link
                  href='/espacios/oficina-privada' onClick={() => {
                    setNavbarOpen(false)
                    setEspaciosOpen(false)
                  }} className={isActive('/espacios/oficina-privada') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}
                >- Oficina privada
                </Link>
                <Link
                  href='/espacios/oficina-virtual' onClick={() => {
                    setNavbarOpen(false)
                    setEspaciosOpen(false)
                  }} className={isActive('/espacios/oficina-virtual') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}
                >- Oficina virtual
                </Link>
                <Link
                  href='/espacios/sala-juntas' onClick={() => {
                    setNavbarOpen(false)
                    setEspaciosOpen(false)
                  }} className={isActive('/espacios/sala-juntas') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}
                >- Sala de juntas
                </Link>
                <Link
                  href='/espacios/sala-training' onClick={() => {
                    setNavbarOpen(false)
                    setEspaciosOpen(false)
                  }} className={isActive('/espacios/sala-training') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}
                >- Sala de capacitación
                </Link>
              </ul>
            </li>

            {/* Mobile */}
            <li className='flex gap-2 w-full justify-center items-center relative md:hidden'>
              <Link
                href='/espacios' onClick={() => {
                  setNavbarOpen(false)
                  setEspaciosOpen(false)
                }} className={isActive('/espacios') || isActive('/espacios/coworking') || isActive('/espacios/oficina-privada') || isActive('/espacios/oficina-virtual') || isActive('/espacios/sala-juntas') || isActive('/espacios/sala-training') ? 'text-[#2c8093] font-semibold pl-[47px]' : 'pl-[47px]'}
              >ESPACIOS
              </Link>
              <button
                className='size-auto z-[999]' onClick={() => {
                  setEspaciosOpen(!espaciosOpen)
                }}
              >
                <Image
                  src={Down} alt='Arrow Icon' className='size-[36px]' width='auto' onClick={() => {
                    setEspaciosOpen(!espaciosOpen)
                  }}
                />
              </button>
              <div className={'absolute w-full top-0 transition-all duration-300 ease-in-out' + (espaciosOpen ? ' mt-[50px] h-auto' : ' opacity-0 z-[-999] pointer-events-none')}>
                <ul className='flex flex-col gap-3 list-inside list-disc bg-[#142e38] text-[#f0fbfb] w-full'>
                  <Link
                    href='/espacios/coworking' onClick={() => {
                      setNavbarOpen(false)
                      setEspaciosOpen(false)
                    }} className={isActive('/espacios/coworking') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}
                  >- Coworking
                  </Link>
                  <Link
                    href='/espacios/oficina-privada' onClick={() => {
                      setNavbarOpen(false)
                      setEspaciosOpen(false)
                    }} className={isActive('/espacios/oficina-privada') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}
                  >- Oficina privada
                  </Link>
                  <Link
                    href='/espacios/oficina-virtual' onClick={() => {
                      setNavbarOpen(false)
                      setEspaciosOpen(false)
                    }} className={isActive('/espacios/oficina-virtual') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}
                  >- Oficina virtual
                  </Link>
                  <Link
                    href='/espacios/sala-juntas' onClick={() => {
                      setNavbarOpen(false)
                      setEspaciosOpen(false)
                    }} className={isActive('/espacios/sala-juntas') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}
                  >- Sala de juntas
                  </Link>
                  <Link
                    href='/espacios/sala-training' onClick={() => {
                      setNavbarOpen(false)
                      setEspaciosOpen(false)
                    }} className={isActive('/espacios/sala-training') ? 'bg-[#2c8093] w-full h-full px-4 py-2' : 'hover:bg-[#2c8093] transition-all duration-150 ease-in-out w-full h-full px-4 py-2'}
                  >- Sala de capacitación
                  </Link>
                </ul>
              </div>
            </li>

            <li className='hover:text-[#2c8093]'>
              <Link
                href='/ubicacion' onClick={() => {
                  setNavbarOpen(false)
                  setEspaciosOpen(false)
                }} className={isActive('/ubicacion') ? 'text-[#2c8093] font-semibold' : undefined}
              >UBICACIÓN
              </Link>
            </li>
            <li className='hover:text-[#2c8093]'>
              <Link
                href={hasNav() ? `${pathname}#contacto` : '/#contacto'} onClick={() => {
                  setNavbarOpen(false)
                  setEspaciosOpen(false)
                }}
              >CONTACTO
              </Link>
            </li>
          </ul>
        </div>
        <div className='w-[33%] md:w-[11%] h-full flex justify-end items-center'>
          <button type='button' className='w-auto px-4 md:p-0 md:w-full h-[45px] text-[13px] md:text-[18px] bg-[#2c8093] text-white rounded-[10px] hover:scale-105 transition-all ease-in-out duration-150'>Cotizar ahora</button>
        </div>

        <button
          className='text-white cursor-pointer z-10 lg:z-0 pr-3 text-xl leading-none py-1 flex justify-end items-center rounded bg-transparent md:hidden w-[33%] outline-none focus:outline-none'
          type='button'
          onClick={() => {
            setNavbarOpen(!navbarOpen)
            if (!navbarOpen && espaciosOpen) {
              setEspaciosOpen(false)
            }
          }}
        >
          <Image src={MenuIcon} alt='Menu Icon' className='w-[40px]' />
        </button>

      </div>
    </header>
  )
}
