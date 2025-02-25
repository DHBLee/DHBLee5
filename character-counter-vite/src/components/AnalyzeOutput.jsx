import React from 'react'

const AnalyzeOutput = ({value, text, pattern, bgColor, info}) => {
  console.log(pattern);
  return (
    <div className={`relative w-full flex flex-col gap-[8px] px-[20px] py-[27px] ${bgColor} rounded-xl`}>
        <img src={pattern} alt="Pattern" className='absolute right-0 top-0 w-[50%] h-full object-cover z-0' />
        <span className='relative z-10 text1-mobile md:text1'>{value}</span>
        <p className='relative z-10 text3'>{text} {info}</p>
    </div>
  )
}

export default AnalyzeOutput