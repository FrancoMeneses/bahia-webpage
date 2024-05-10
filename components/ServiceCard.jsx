import Image from 'next/image'
import Link from 'next/link'

export const ServiceCard = ({ title, text, link, image, linkText = 'Conoce más', width = 'w-[400px]', height = 'h-[500px]' }) => {
  return (
    <div className={`bg-[#296675] ${width} ${height} flex flex-col justify-center md:justify-between items-center gap-4 px-5 pb-5 text-white rounded-[10px]`}>
      <div className='flex flex-col gap-4 w-full justify-center items-center'>
        <Image alt={title} src={image} width='auto' height={230} />
        <h2 className='text-[24px] font-light self-start'>{title}</h2>
      </div>
      <div className='flex flex-col w-full justify-between items-center gap-4 min-h-[160px]'>
        <p className='self-start text-[16px] text-justify font-light'>{text}</p>
        <Link href={link} className='bg-[#f0fbfb] text-[#142e38] rounded-[10px] text-[18px] px-6 py-2 hover:scale-105 transition-all ease-in-out duration-150 flex justify-center items-center'>
          {linkText}
        </Link>
      </div>
    </div>
  )
}
