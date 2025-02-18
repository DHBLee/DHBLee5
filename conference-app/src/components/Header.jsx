import React from 'react'
import logo from '/public/logo-full.svg';
import headerBg from '/public/pattern-lines.svg';
import squigglyLine from '/public/pattern-squiggly-line-top.svg'

const Header = ({formData}) => {
  const { fullName, email } = formData;

  return (
    <header className='relative grid place-items-center text-center gap-5 header-bg px-7 pt-10'>
        <img src={squigglyLine} alt="" className='absolute right-0 top-0 w-36 md:w-64 xl:w-80'/>
        <img src={headerBg} alt=""  className='absolute w-full h-full object-cover'/>
        <img src={logo} alt="" className='mb-6'/>
        <h1 className='text-neutral0  font-medium max-w-[25ch]' style={{fontSize: "clamp(1.875rem, 1.619718309859155rem + 1.0892018779342725vw, 2.6rem)"}}>
            {fullName ? (<>Congrats, <span className='bg-gradient-to-r from-[#FF5733] to-[#FFFFFF] bg-clip-text text-transparent'>{fullName}</span>! Your ticket is ready.</>) : 'Your Journey to Coding Conf 2025 Starts Here!'}
        </h1>
        <h5 className='text-neutral500 text-[1.2rem] font-medium max-w-[30ch]'>
            {email ? (<>We've emailed your ticket to <span className='text-orange500'>{email}</span> and will send updates in the run up to the event.</>) : "Secure your spot at next year's biggest coding conference."}
        </h5>
    </header>
  )
}

export default Header