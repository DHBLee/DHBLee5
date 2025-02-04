
import React, { useState } from 'react'


const Payment = ({ isYearly, yearlyPrice, price, toggleBilling }) => {


  return (
    <>
        <div className='flex items-center gap-1.5 md:hidden'>
            <span className='text-3xl font-bold '>${isYearly ? yearlyPrice : price}</span>
            <span className='text-[#8C9AB2]'>/ {isYearly ? "year" : "month"}</span>
        </div>

        <div className='flex items-center justify-center gap-4 relative'>
            <p>Monthly Billing</p>

            <label className='m-auto cursor-pointer'>
                <input 
                    type="checkbox"
                    checked={isYearly}
                    onChange={toggleBilling}
                    className='sr-only' 
                />
                <div className='w-12 h-6 grid items-center bg-gray-300 rounded-full transition duration-300 ease-in-out hover:bg-cyan-400 active:scale-95 peer-checked:bg-cyan-500 peer-checked:hover:bg-cyan-600 peer-checked:active:scale-95'>
                    <div className={`w-4.5 h-4.5  bg-white rounded-full shadow-md transform transition duration-300 ${isYearly ? "translate-x-6" : "translate-x-1"} peer-checked:bg-white peer-hover:scale-105 `}></div>
                </div>
            </label>
            <p className='flex gap-3'>Yearly Billing 
                <span className='absolute -right-25 py-1 px-3 rounded-[25px] font-bold bg-[#FFE8E1] text-[#FF9F7A] text-[0.6rem] '>
                        25% discount
                </span>
            </p>
        </div>

    </>
  )
}

export default Payment