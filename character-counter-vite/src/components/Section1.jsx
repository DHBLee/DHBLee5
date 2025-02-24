import React from 'react'

const Section1 = ({analyzeText, handleExcludeSpaces, text}) => {
  const thisStyle = "text4 text-neutral900 dark:text-neutral200";
  const anotherStyle = "grid md:flex gap-3 align-middle";
  return (
    <section className='grid gap-4'>
        <textarea className="w-full bg-neutral100 dark:bg-neutral800 border-solid border-neutral200 dark:border-neutral700 rounded-md p-4 md:p-5 text-neutral900 dark:text-neutral200" value={text} onChange={analyzeText} onInput={(e) => {
            e.target.style.height = "auto";
            const minHeight = 200; 
            e.target.style.height = `${Math.max(e.target.scrollHeight, minHeight)}px`;
        }}
        style={{ overflow: "hidden", resize: "none", minHeight: "200px"}}>

        </textarea>
        <div className={`${anotherStyle} md:justify-between`}>
            <div className={`${anotherStyle} md:gap-6`}>
                <div className='flex gap-2 align-middle'>
                    <input type="checkbox"  onChange={handleExcludeSpaces}/>
                    <label htmlFor="" className={thisStyle}>Exclude Spaces</label>
                </div>
                <div className='flex gap-2 align-middle'>
                    <input type="checkbox"/>
                    <label htmlFor="" className={thisStyle}>Set Character Limit</label>
                </div>
            </div>
            <p className={thisStyle}>Approx. readting time: &lt;1 minute </p>
        </div>
    </section>
  )
}

export default Section1