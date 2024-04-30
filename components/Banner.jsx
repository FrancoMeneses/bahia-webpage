import Image from 'next/image'
import Link from 'next/link'

export const Banner = ({ width, height, bgColor, text, buttonText, link, image }) => {
  if (image) {
    return (
      <div className={`${width} ${height} ${bgColor} flex justify-between items-center px-[50px] 2xl:px-[90px]`}>
        <div className='w-[45%] h-full flex flex-col justify-center items-start gap-12'>
          <h1 className='text-[24px]'>
            {text}
          </h1>
          <Link href={link} className='w-[180px] h-[45px] bg-[#2c8093] text-white font-light rounded-[10px] text-[20px] flex justify-center items-center hover:scale-105 transition-all ease-in-out duration-150'>
            {buttonText}
          </Link>
        </div>
        <div className='w-auto'>
          <Image alt='Banner image' src={image} className='w-[500px]' />
        </div>
      </div>
    )
  } else {
    return (
      <div className={`${width} ${height} ${bgColor} flex justify-between items-center px-[50px] 2xl:px-[90px]`}>
        <div className='w-full h-full flex flex-col justify-center items-center gap-12'>
          <h1 className='text-[24px]'>
            {text}
          </h1>
          <Link href={link} className='w-[220px] h-[45px] bg-[#2c8093] text-white font-light rounded-[10px] text-[20px] flex justify-center items-center hover:scale-105 transition-all ease-in-out duration-150'>
            {buttonText}
          </Link>
        </div>
      </div>
    )
  }
}
