export const BannerEspacios = ({ width, height, bgColor, text, subtitle, description, position = 'bg-center', bgLink = 'https://res.cloudinary.com/dr3zld4hx/image/upload/v1716832219/Webpage/Coworking/qsaf8die9a3aqhegxysg.webp' }) => {
  return (
    <div className={`${width} ${height} ${bgColor} flex justify-center items-center px-4 md:px-[50px] 2xl:px-[90px] py-4 bg-local ${position} bg-no-repeat bg-cover -z-10`} style={{ backgroundImage: `url(${bgLink})` }}>
      <div className='bg-custom w-[600px] h-full flex flex-col justify-center items-center gap-5 md:gap-10 border border-[#2c8093] text-white shadow-sm rounded-[10px]'>
        <h1 className='text-[22px] md:text-[30px] font-medium text-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
          {text}
          <br />
          {subtitle && <span className='text-[18px] md:text-[24px] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>{subtitle}</span>}
        </h1>
        <p className='text-[18px] md:text-[22px] text-center w-full [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
          {description}
        </p>
      </div>
    </div>
  )
}
