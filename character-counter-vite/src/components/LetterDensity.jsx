import React from 'react'

const LetterDensity = ({letter, value, total}) => {
    const percentage = (value / total) * 100;
  
    return (
      <div className='flex align-middle gap-5 text-neutral900 dark:text-neutral200'>
        <span className='text4'>{letter}</span>
        <div className='w-full bg-neutral200 dark:bg-neutral800 rounded-3xl h-3 my-auto'>
          <div className='bg-blue500 h-full rounded-3xl' style={{width: `${percentage}%`}} aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100} role="progressbar"/>
        </div>
        <span className='text4 whitespace-nowrap'>{`${value} (${percentage.toFixed(2)}%)`}</span>
      </div>
    );
}

export default LetterDensity