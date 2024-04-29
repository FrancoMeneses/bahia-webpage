export const CustomButton = ({ text, onC }) => {
  return (
    <button type='button' onClick={onC} className='w-full h-[60px] px-2.5 text-[18px] bg-[#2c8093] text-white rounded-[10px] hover:scale-105 transition-all ease-in-out duration-150'>{text}</button>
  )
}
