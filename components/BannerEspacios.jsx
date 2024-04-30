export const BannerEspacios = ({ width, height, bgColor, text, description }) => {
  return (
    <div className={`${width} ${height} ${bgColor} flex justify-between items-center px-[50px] 2xl:px-[90px]`}>
      <div className='w-full h-full flex flex-col justify-center items-center gap-12'>
        <h1 className='text-[30px] font-medium text-center'>
          {text}
        </h1>
        <p className='text-[22px] text-center w-[50%]'>
          {description}
        </p>
      </div>
    </div>
  )
}
