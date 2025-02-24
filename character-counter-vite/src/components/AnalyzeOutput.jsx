import React from 'react'

const AnalyzeOutput = ({value, text, pattern, bgColor, info}) => {
  console.log(pattern);
  return (
    <div className={`w-full flex flex-col gap-[8px] px-[20px] py-[27px] ${bgColor} rounded-xl`} style={{background: `url(${pattern})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <span className='text1-mobile md:text1'>{value}</span>
        <p className='text3'>{text} {info}</p>
    </div>
  )
}

export default AnalyzeOutput