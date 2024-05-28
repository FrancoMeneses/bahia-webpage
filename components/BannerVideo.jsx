// import Image from 'next/image'
import Link from 'next/link'

export const BannerVideo = ({ width, height, bgColor, text, buttonText, link, videoLink }) => {
  return (
    <div className={`${width} ${height} ${bgColor} flex gap-4 md:gap-0 md:justify-between items-center`}>
      <div className='w-[55%] md:w-[45%] h-full flex flex-col justify-center items-start gap-5 md:gap-12 pl-4 md:pl-[50px] 2xl:pl-[90px]'>
        <h1 className='text-[14px] md:text-[24px]'>
          {text}
        </h1>
        <Link href={link} className='w-auto py-1.5 px-4 text-[14px] md:p-0 md:w-[180px] md:h-[45px] md:text-[22px] bg-[#2c8093] text-white font-light rounded-[10px] flex justify-center items-center hover:scale-105 transition-all ease-in-out duration-150'>
          {buttonText}
        </Link>
      </div>
      <div className='w-[45%] md:w-auto h-full flex justify-center items-center pr-4 md:pr-0'>
        {/* <Image alt='Banner image' src='https://placehold.co/500x240' width={500} height={240} className='w-auto h-full' /> */}
        <video width='auto' height='auto' className='h-full' preload='none' autoPlay muted loop playsInline>
          <source src='https://res.cloudinary.com/dr3zld4hx/video/upload/v1716859879/Webpage/banner_as5mys.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
