import React from 'react'

import footerLogo from '../assets/footer-logo.svg'
import copyrightLogo from '../assets/copyright-sign.svg'

const Footer = React.forwardRef(({ className }, ref) => {
  return (
    <footer ref={ref} className={`${className} grid items-start gap-20 py-p-custom pb-8 bg-black text-white-400 footer-pinline`}>
        <section className='flex flex-col lg:flex-row gap-16 lg:items-start 2xl:footer-pinline'>
            <div className='grid gap-5 w-max'>
                <img src={footerLogo} alt="" className='w-[9rem]' />
                <p className='max-w-[33ch]'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                <ul className='flex gap-5'>
                    <li className='grid place-items-center bg-white hover:bg-coral-red rounded-full w-12 h-12'>
                        <a href="#">
                            <i className="ri-facebook-fill text-black text-2xl"></i>
                        </a>
                    </li>
                    <li className='grid place-items-center bg-white hover:bg-coral-red rounded-full w-12 h-12'>
                        <a href="#">
                            <i className="ri-twitter-fill text-black text-2xl"></i>
                        </a>
                    </li>
                    <li className='grid place-items-center bg-white hover:bg-coral-red rounded-full w-12 h-12'>
                        <a href="#">
                            <i className="ri-instagram-fill text-black text-2xl"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='flex-grow lg:justify-between grid gap-16 items-start grid-cols-[repeat(auto-fit,minmax(150px,max-content))]'>
                <div className='grid gap-4 w-max'>
                    <h4 className='text-white text-2xl'>Products</h4>
                    <ul className='grid gap-3'>
                        <li>
                            <a href="#" className="hover:text-coral-red">
                                Air Force 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-coral-red">
                                Air Max 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-coral-red">
                                Air Jordan 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-coral-red">
                                Air Force 2
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-coral-red">
                                Nike Waffle Racer
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-coral-red">
                                Nike Cortez
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='grid gap-4 w-max'>
                    <h4 className='text-white text-2xl'>Help</h4>
                    <ul className='grid gap-3'>
                        <li>
                            <a href="#" className="hover:text-coral-red">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-coral-red">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-coral-red">
                                How it works
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-coral-red">
                                Privacy policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-coral-red">
                                Payment policy
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='grid gap-4 w-max'>
                    <h4 className='text-white text-2xl'>Get in touch</h4>
                    <ul className='grid gap-3'>
                        <li>customer@nike.com</li>
                        <li>+92554862354</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className='flex flex-col items-center md:flex-row md:justify-between 2xl:footer-pinline'>
            <div className='flex gap-2'>
                <img src={copyrightLogo} alt="" />
                <p>Copyright. All rights reserved.</p>
            </div>
            <p>Terms & Conditions</p>
        </section>
    </footer>
   
  )
});

export default Footer