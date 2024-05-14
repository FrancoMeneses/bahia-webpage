import Link from 'next/link'
import ErrorImage from '../assets/404Image.svg'
import Image from 'next/image'

export default function NotFound () {
  return (
    <div className='h-auto py-7 px-4 md:px-[50px] 2xl:px-[90px] w-full flex flex-col justify-center items-center gap-5'>
      <h2 className='text-[20px] font-semibold'>Página no encontrada</h2>
      <p className='text-justify'>No pudimos encontrar esta página, por favor regresa a la página principal</p>
      <Image src={ErrorImage} alt='404 Image error' />
      <Link className='w-auto flex justify-center items-center px-4 h-[45px] text-[13px] md:text-[18px] bg-[#2c8093] text-white rounded-[10px] hover:scale-105 transition-all ease-in-out duration-150' href='/'>Regresar a Inicio</Link>
    </div>
  )
}
