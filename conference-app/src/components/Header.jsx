import React from 'react'
import logo from '/public/logo-full.svg';
import headerBg from '/public/pattern-lines.svg';
import squigglyLine from '/public/pattern-squiggly-line-top.svg'

const Header = () => {
  return (
    <header className='relative grid place-items-center text-center gap-5 header-bg px-7'>
        <img src={squigglyLine} alt="" className='absolute right-0 top-0 w-36'/>
        <img src={headerBg} alt=""  className='absolute w-full h-full object-cover'/>
        <img src={logo} alt="" className='mb-6'/>
        <h1 className='text-neutral0 text-3xl font-medium'>
            Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <h5 className='text-neutral500 text-[1.2rem] font-medium'>
            Secure your spot at next year's biggest coding conference.
        </h5>
    </header>
  )
}

export default Header