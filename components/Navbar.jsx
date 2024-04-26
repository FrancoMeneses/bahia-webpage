import Image from 'next/image'
import Logo from '../assets/Logo.svg'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='w-full h-[120px] flex justify-center items-center border'>
      <div className='w-full h-full px-[50px] 2xl:px-[90px] flex justify-between items-center'>
        <div className='w-[20%] h-full flex justify-center items-center'>
          <Image src={Logo} className='h-[90px]' />
        </div>
        <ul className='w-[60%] h-full flex justify-center items-center gap-8 text-[23px] font-light'>
          <Link href='#'>INICIO</Link>
          <Link href='#'>ESPACIOS</Link>
          <Link href='#'>UBICACIÓN</Link>
          <Link href='#'>CONTACTO</Link>
        </ul>
        <div className='w-[20%] h-full flex justify-center items-center'>
          <button type='button' className='w-[173px] h-[60px] text-[18px] bg-[#2c8093] text-white rounded-[10px] hover:scale-105 transition-all ease-in-out duration-150'>Cotizar ahora</button>
        </div>
      </div>
    </div>
  )
}
