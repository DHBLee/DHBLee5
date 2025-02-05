import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countdown from './components/Countdown'

function App() {
  return (
    <main>
        <div>
            <h1>WE'RE LAUNCHING SOON</h1>
            <Countdown />
        </div>
        <ul>
            <li>
                <a href="#">
                    <i class="ri-facebook-box-fill"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="ri-pinterest-fill"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="ri-instagram-line"></i>
                </a>
            </li>
        </ul>
    </main>
  )
}

export default App
