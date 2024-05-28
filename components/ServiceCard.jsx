import Image from 'next/image'
import Link from 'next/link'

export const ServiceCard = ({ title, text, link, image, linkText = 'Conoce más', width = 'w-[400px]', height = 'h-[550px]' }) => {
  return (
    <div className={`bg-[#296675] ${width} ${height} flex flex-col justify-between md:justify-between items-center gap-2 pb-5 text-white rounded-[10px]`}>
      <div className='flex flex-col w-full justify-center items-center'>
        <Image alt={title} src={image} width={230} height={230} className='h-[265px] w-full rounded-t-[10px] object-cover' />
      </div>
      <div className='flex flex-col w-full md:justify-between justify-center items-center gap-4 h-full md:min-h-[235px] px-5'>
        <div className='flex flex-col gap-4 justify-self-start'>
          <h2 className='text-[24px] font-light self-start'>{title}</h2>
          <p className='self-start text-[16px] text-justify font-light'>{text}</p>
        </div>
        <Link href={link} className='bg-[#f0fbfb] text-[#142e38] rounded-[10px] text-[18px] px-6 py-2 hover:scale-105 transition-all ease-in-out duration-150 flex justify-center items-center'>
          {linkText}
        </Link>
      </div>
    </div>
  )
}
