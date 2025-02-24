import React from 'react'
import AnalyzeOutput from './AnalyzeOutput'

import patternChar from '../assets/pattern-character-count.svg';
import patternSentence from '../assets/pattern-sentence-count.svg';
import patternWord from '../assets/pattern-word-count.svg';
import LetterDensity from './LetterDensity';
import iconInfo from '../assets/icon-info.svg';

const Section2 = ({letterDensity, totalChar, wordCount, sentenceCount, isSpaceExcluded}) => {
  return (
    <section className='grid gap-6'>
        <div className='flex flex-col md:flex-row gap-4'>
            <AnalyzeOutput value={totalChar} text="Total Characters" bgColor="bg-blue400" pattern={patternChar} info={isSpaceExcluded ? "(no space)" : ""}/>
            <AnalyzeOutput value={wordCount} text="Word Count" bgColor="bg-yellow500" pattern={patternSentence}/>
            <AnalyzeOutput value={sentenceCount} text="Sentence Count" bgColor="bg-orange500" pattern={patternWord}/>
        </div>
        <div className='grid gap-5 text-neutral900 dark:text-neutral200'>
            <h3 className='text2'>Letter Density</h3>
            <div className='grid gap-[16.5px]'>

                {letterDensity && letterDensity.map((letter) => (
                    <LetterDensity key={letter.lettername} letter={letter.lettername} value={letter.letterfrequency} total={totalChar} />
                ))}
            </div>
            <button className='text3 text-left'>
                See more <span className='-rotate-90 '>&lt;</span>
            </button>
        </div>
    </section>
  )
}

export default Section2