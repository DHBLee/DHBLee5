import { useState } from 'react'
import React from 'react';
import './App.css'
import Header from './components/Header'
import Mains from './components/Mains'
import Footer from './components/Footer'
import useVisibility from './hooks/useVisibility'

function App() {

  const [headerRef, isHeaderVisible] = useVisibility();
  const [mainRef, isMainVisible] = useVisibility();
  const [footerRef, isFooterVisible] = useVisibility();
  console.log(isHeaderVisible);
  console.log(isMainVisible);
  console.log("Header Ref:", headerRef.current);
  console.log("Main Ref:", mainRef.current);

  return (
    <>
        <Header ref={headerRef} className={`fade-in ${isHeaderVisible ? 'visible' : ''}`}/>
    
        <Mains ref={mainRef} className={`fade-in ${isMainVisible ? 'visible' : ''}`}/>
        <Footer ref={footerRef} className={`fade-in ${isFooterVisible ? 'visible' : ''}`}/>
    </>
  )
}

export default App
