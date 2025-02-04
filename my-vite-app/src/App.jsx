import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/favicon-32x32.png'
import './App.css'
import './index.css'
import SlideBar from './components/slideBar'
import Payment from './components/Payment'
import Features from './components/Features'

function App() {

  const pricingTable = {
    "10K": 8.00,
    "50K": 12.00,
    "100K": 16.00,
    "500K": 24.00,
    "1M": 36.00,
  }

  const [pageviews, setPageviews] = useState("100K");

  const [isYearly, setIsYearly] = useState(false);
  const price = (pricingTable[pageviews]).toFixed(2) || 12.00;
  const yearlyDiscount = 0.25;
  const yearlyPrice = (price * 12 * (1 - yearlyDiscount)).toFixed(2);


  const toggleBilling = () => setIsYearly((prev) => !prev)

  return (
    <div className='py-8' style={{ backgroundSize: '100% 320px'}}>
      <section className='flex gap-2 flex-col justify-center items-center text-center py-18  relative'>
          <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src="./pattern-circles.svg" alt="" />
          <h1 className='text-[#293356] text-2xl z-10 font-bold'>Simple, traffic-based pricing</h1>
          <p className='max-w-[22ch] md:max-w-full text-m z-10 '>Sign-up for our 30 day trial. No credit card required</p>
      </section>
      <section className='bg-[#FFFFFF] mx-5 px-5 py-7 grid place-items-center gap-7'>
          <SlideBar pageviews={pageviews} setPageviews={setPageviews} isYearly={isYearly} yearlyPrice={yearlyPrice} price={price} />
          <Payment isYearly={isYearly} yearlyPrice={yearlyPrice} price={price} toggleBilling={toggleBilling}/>
          <hr className=' w-full border border-[#F5F9FF]' />

          <div className=' w-full flex flex-col items-center md:flex-row md:justify-between gap-6'>
            <ul className='grid gap-2'>
              <Features info={'Unlimited websites'}/>
              <Features info={'100% data ownership'}/>
              <Features info={'Email reports'}/>
            </ul>
            <button className=' px-15 py-3 text-[#C2D3FF] bg-[#293356] rounded-[30px] hover:text-[#FFFFFF]'>
                Start my trial
            </button>
          </div>
      </section>
    </div>
  )
}

export default App
