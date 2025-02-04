import React from 'react'

const Features = ({ info }) => {
  return (
    <div className='flex items-center justify-center gap-4 md:justify-start'>
        <img src="./icon-check.svg" alt="" />
        <li><p>{info}</p></li>
    </div>
  )
}

export default Features