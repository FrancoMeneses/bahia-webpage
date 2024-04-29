import Image from 'next/image'
import WAIcon from '../assets/WAIcon.svg'

export default function WhatsApp () {
  return (
    <div className='group/whatsapp z-50 fixed right-4 bottom-4 size-14 md:size-16 border-2 rounded-[50%] bg-white flex justify-center items-center md:hover:-translate-y-1 md:hover:scale-110 transition ease-in duration-300'>
      <div className='bg-white w-40 rounded-md hidden group-hover/whatsapp:md:block absolute bottom-[65px] right-[-10px] border-2'>
        <p className='m-0 p-2 text-xs'>¡Haz click para obtener información! 😃</p>
      </div>
      <a href='https://wa.me/9831542955?text=¡Hola!%20Me%20gustaría%20más%20información' className='cursor-pointer flex justify-center items-center w-full h-full' target='_blank' rel='noreferrer'>
        <Image src={WAIcon} alt='WhatsApp Icon' width='auto' height='auto' className='size-8 md:size-10' />
      </a>
    </div>
  )
}
