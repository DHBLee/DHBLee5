import React from 'react'

import iconInfo from '../assets/icon-info.svg';

const Section1 = ({analyzeText, handleExcludeSpaces, text, handleCharacterLimit, handleMaximumCharacter, isLimit, characterLimit, showError, getReadingTime, wordCount}) => {
  const thisStyle = "text4 text-neutral900 dark:text-neutral200";
  const anotherStyle = "grid md:flex gap-3 align-middle";
  return (
    <section className='grid gap-4'>
        <textarea placeholder='Start typing here.. (or paste your text)' className="w-full bg-neutral100 dark:bg-neutral800 border-solid border-neutral200 dark:border-neutral700 focus:border-blue500 rounded-md p-4 md:p-5 text-neutral900 dark:text-neutral200" value={text} onChange={analyzeText} onInput={(e) => {
            e.target.style.height = "auto";
            const minHeight = 200; 
            e.target.style.height = `${Math.max(e.target.scrollHeight, minHeight)}px`;
        
        }}
        style={{ overflow: "hidden", resize: "none", minHeight: "200px", borderColor: showError ? "hsl(15, 99%, 67%)" : ""}}>

        </textarea>
        {showError && 
            <span className='flex text-orange500'>
                <img src={iconInfo} alt="Icon Image" />
                Limit reached! Your text exceeds {characterLimit} characters.
            </span> 
        }
        <div className={`${anotherStyle} md:justify-between`}>
            <div className={`${anotherStyle} md:gap-6`}>
                <div className='flex gap-2 align-middle'>
                    <input type="checkbox"  onChange={handleExcludeSpaces} className='my-auto'/>
                    <label htmlFor="" className={`${thisStyle} my-auto`}>Exclude Spaces</label>
                </div>
                <div className='flex gap-2 align-middle'>
                    <input type="checkbox" onChange={handleCharacterLimit} className='my-auto'/>
                    <label htmlFor="" className={`${thisStyle} my-auto`}>Set Character Limit</label>
                    {isLimit && <input type="number" onChange={handleMaximumCharacter} className='border-solid border-[1px] border-neutral200 w-14 rounded-md text-neutral900 dark:text-neutral200 text-center'/> }
                </div>
            </div>
            <p className={thisStyle}>Approx. readting time: {getReadingTime(wordCount)} </p>
        </div>
    </section>
  )
}

export default Section1