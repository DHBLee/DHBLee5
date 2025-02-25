import { React, useState } from 'react'
import AnalyzeOutput from './AnalyzeOutput'

import patternChar from '../assets/pattern-character-count.svg';
import patternSentence from '../assets/pattern-sentence-count.svg';
import patternWord from '../assets/pattern-word-count.svg';
import LetterDensity from './LetterDensity';


const Section2 = ({letterDensity, totalChar, wordCount, sentenceCount, isSpaceExcluded, totalLetters}) => {
    const [showAllLetters, setShowAllLetters] = useState(false);  

    const handleSeeMore = () => {
        setShowAllLetters(true); 
    };

    const handleSeeLess = () => {
        setShowAllLetters(false);  
    };

    const lettersToDisplay = letterDensity && Array.isArray(letterDensity) ? 
        (showAllLetters ? letterDensity : letterDensity.slice(0, 5)) 
        : [];

    return (
    <section className='grid gap-6'>
        <div className='flex flex-col md:flex-row gap-4'>
            <AnalyzeOutput value={totalChar} text="Total Characters" bgColor="bg-blue400" pattern={patternChar} info={isSpaceExcluded ? "(no space)" : ""}/>
            <AnalyzeOutput value={wordCount} text="Word Count" bgColor="bg-yellow500" pattern={patternWord}/>
            <AnalyzeOutput value={sentenceCount} text="Sentence Count" bgColor="bg-orange500" pattern={patternSentence}/>
        </div>
        <div className='grid gap-5 text-neutral900 dark:text-neutral200'>
            <h3 className='text2'>Letter Density</h3>
            <div className='grid gap-[16.5px]'>

                {lettersToDisplay && lettersToDisplay.sort((a, b) => b.letterfrequency - a.letterfrequency).map((letter) => (
                    <LetterDensity key={letter.lettername} letter={letter.lettername} value={letter.letterfrequency} total={totalLetters} />
                ))}
            </div>
            {showAllLetters ? (
                    <button className='text3 text-left' onClick={handleSeeLess}>
                        See less <span className='-rotate-90 '>&gt;</span>
                    </button>
                ) : (
                    <button className='text3 text-left' onClick={handleSeeMore}>
                        See more <span className='-rotate-90 '>&lt;</span>
                    </button>
            )}
        </div>
    </section>
  )
}

export default Section2