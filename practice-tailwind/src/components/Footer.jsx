import React from 'react'

import footerLogo from '../assets/footer-logo.svg'
import facebookLogo from '../assets/facebook.svg'
import twitterLogo from '../assets/twitter.svg'
import instagramLogo from '../assets/instagram.svg'
import copyrightLogo from '../assets/copyright-sign.svg'

const Footer = () => {
  return (
    <footer>
        <section>
            <div>
                <img src={footerLogo} alt="" />
                <p>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                <ul>
                    <li>
                        <a href="#">
                            <i className="ri-facebook-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="ri-twitter-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="ri-instagram-fill"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <div>
                    <h4>Products</h4>
                    <ul>
                        <li>
                            <a href="#">
                                Air Force 1
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Air Max 1
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Air Jordan 1
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Air Force 2
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Nike Waffle Racer
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Nike Cortez
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4>Help</h4>
                    <ul>
                        <li>
                            <a href="#">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                How it works
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Privacy policy
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Payment policy
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4>Get in touch</h4>
                    <ul>
                        <li>customer@nike.com</li>
                        <li>+92554862354</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <div>
                <img src={copyrightLogo} alt="" />
                <p>Copyright. All rights reserved.</p>
            </div>
            <p>Terms & Conditions</p>
        </section>
    </footer>
   
  )
}

export default Footer