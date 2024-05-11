export const BannerEspacios = ({ width, height, bgColor, text, subtitle, description }) => {
  return (
    <div className={`${width} ${height} ${bgColor} flex justify-between items-center px-4 md:px-[50px] 2xl:px-[90px]`}>
      <div className='w-full h-full flex flex-col justify-center items-center gap-5 md:gap-10'>
        <h1 className='text-[22px] md:text-[30px] font-medium text-center'>
          {text}
          <br />
          {subtitle && <span className='text-[18px] md:text-[24px]'>{subtitle}</span>}
        </h1>
        <p className='text-[18px] md:text-[22px] text-center w-[88%] md:w-[50%]'>
          {description}
        </p>
      </div>
    </div>
  )
}
