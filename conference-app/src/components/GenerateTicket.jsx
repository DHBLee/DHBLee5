import React from 'react'
import { useEffect, useState } from 'react';
import iconGithub from '/public/icon-github.svg'
import ticket from '/public/pattern-ticket.svg'
import logoImg from '/public/logo-full.svg'

const GenerateTicket = ({formData, isVisible}) => {
  const {fullName, email, avatar, githubUsername} = formData;

  const [isAnimated, setIsAnimated] = useState(false);

   useEffect(() => {
    if (isVisible) {
      setIsAnimated(true);
    }
   }, [isVisible]);


  return (
    <div className={`relative w-[350px] h-[150px] md:w-[400px] md:h-[200px] mx-auto mt-24 transition-all duration-700 ease-out transform ${
        isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}>
      <img src={ticket} alt="Ticket" className="absolute w-full h-full object-contain" />

      <div className="absolute inset-0 flex flex-col justify-between py-5 px-7 md:py-6 md:px-3 text-white">

        <div className="flex flex-col gap-2 justify-between items-start">
          <img src={logoImg} alt="Logo" className="h-6" />
          <p className="text-xs text-neutral500 ml-9 tracking-widest">Jan 31, 2025 / Austin, TX</p>
        </div>

        <div className="flex items-center gap-3">
          <img src={avatar} alt="Avatar" className="w-12 h-12 rounded-lg" />
          <div>
            <h3 className="text-lg text-neutral300 font-extralight">{fullName}</h3>
            <p className="flex items-center gap-2 text-sm text-neutral500">
              <img src={iconGithub} alt="GitHub" className="w-4 h-4" />
              {githubUsername}
            </p>
          </div>
        </div>

        <span className="absolute top-1/2 right-2 -translate-y-1/2 text-sm  text-neutral500 font-normal rotate-90">#01609</span>
      </div>
    </div>
  )
}

export default GenerateTicket