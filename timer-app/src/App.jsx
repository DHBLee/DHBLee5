import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countdown from './components/Countdown'

function App() {
  return (
    <main className='min-h-screen pt-30 pb-7 px-6 flex flex-col justify-between items-center text-center'>
        <div className='grid gap-8'>
            <h1 className='text-[#ffffff] tracking-[5px] font-bold'>WE'RE LAUNCHING SOON</h1>
            <Countdown />
        </div>
        <ul className='flex gap-6'>
            <li>
                <a href="#">
                    <i className="ri-facebook-box-fill text-3xl text-[#8486a9]"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="ri-pinterest-fill text-3xl text-[#8486a9]"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="ri-instagram-line text-3xl text-[#8486a9]"></i>
                </a>
            </li>
        </ul>
    </main>
  )
}

export default App
