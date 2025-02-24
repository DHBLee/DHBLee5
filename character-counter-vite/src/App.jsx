import { useState, useEffect } from 'react'

import './App.css'
import logoLight from './assets/logo-light-theme.svg';
import logoDark from './assets/logo-dark-theme.svg';
import sunIcon from './assets/icon-sun.svg';
import moonIcon from './assets/icon-moon.svg';
import Section1 from './components/Section1';
import Section2 from './components/Section2';


function App() {
  const [text, setText] = useState("");
  const [isDark, setIsDark] = useState(true);
  const [letterDensity, setletterDensity] = useState(null);
  const [totalChar, setTotalChar] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const logoImg = isDark ? logoDark : logoLight;
  const themeImg = isDark ? sunIcon : moonIcon;

  useEffect(() => {
    const html = document.documentElement; 
    if (isDark) {
      html.classList.add("dark"); 
      localStorage.setItem("theme", "dark"); 
    } else {
      html.classList.remove("dark"); 
      localStorage.setItem("theme", "light"); 
    }
  }, [isDark]);
  useEffect(() => {
    handleAnalyzeText({ target: { value: text } });
  }, [excludeSpaces]);

  function handleThemeColor() {
    setIsDark(prevState => !prevState);
  }

  function handleAnalyzeText(event) {
    const text = event.target.value;
    setText(text);
    const letterCount = {};

    for (let char of text) {
      if (/[a-zA-Z]/.test(char))  {
        const upperChar = char.toUpperCase();
        letterCount[upperChar] = (letterCount[upperChar] || 0) + 1;
      }
    }

    const letterDensityArray = [];
    for (const lettername in letterCount) {
      letterDensityArray.push({
        lettername,
        letterfrequency: letterCount[lettername]
      })
    }

    const lastChar = text.slice(-1);
    const wordsInText = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const sentencesInText = text.trim() === "" ? 0 : text.trim().split(/[.!?]\s+/).length;

    if (text.trim() === "") {
      setWordCount(0);
      setSentenceCount(0);
    } else {
      if (lastChar === " " && text.trim() !== "") {
          setWordCount(wordsInText);
      }
      if (/[.!?]/.test(lastChar)) {
          setSentenceCount(sentencesInText);
      }
    }

    setletterDensity(letterDensityArray);

    if(excludeSpaces) {
      console.log("dumaan dito")
      const textWithoutSpace = text.replace(/\s+/g, '');
      setTotalChar(textWithoutSpace.length)
    } else {
      setTotalChar(text.length);
    }

  }

  function handleExcludeSpaces() {
    console.log('hellosss')
    setExcludeSpaces((prevState) => !prevState)
  };


  return (
    <>
      <header className='flex justify-between align-middle py-[17px] md:py-[18px] min-[1440px]:pt-[34px]'>
        <img src={logoImg} alt="Logo Image" />

        <button onClick={handleThemeColor}>
          <img src={themeImg} alt="Theme Image" />
        </button>
      </header>
    
      <main className='flex flex-col gap-10 min-[1440px]:gap-[48px]'>
        <h1 className='text1-mobile md:text1 text-center text-neutral900 dark:text-neutral100 mt-10 min-[1440px]:mt-[30px]'>Analyze your text<br /> in real-time.</h1>
        <Section1 analyzeText={handleAnalyzeText} handleExcludeSpaces={handleExcludeSpaces} text={text}/>
        <Section2 letterDensity={letterDensity} totalChar={totalChar} wordCount={wordCount} sentenceCount={sentenceCount} isSpaceExcluded={excludeSpaces}/>
      </main>
    </>
  )
}

export default App
