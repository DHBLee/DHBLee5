import React, { useState } from 'react'
import headerLogo from '../assets/header-logo.svg';
import hamburgerIcon from '../assets/hamburger.svg';
import rightArrow from '../assets/arrow-right.svg';
import bigShoe1 from '../assets/big-shoe1.png';
import bigShoe2 from '../assets/big-shoe2.png';
import bigShoe3 from '../assets/big-shoe3.png';



const Header = () => {

  const record = [
    {
        number: "1k+",
        category: "Brands"
    },
    {
        number: "500+",
        category: "Shops"
    },
    {
        number: "250k+",
        category: "Customers"
    },
  ];

  const images = [
    bigShoe1,
    bigShoe2,
    bigShoe3
  ]

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const handleImageChange = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
        <header>
            <section className='flex items-center justify-between py-8'>
                <img src={headerLogo} alt=""/>
                
                <button>
                    <img src={hamburgerIcon} alt="" className='w-5' />
                </button>
                <div className='hidden md:flex'>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                    <button>
                        Sign in / Explore Now
                    </button>
                </div>
            </section>
            <section className='flex flex-col md:flex-row'>
                <div className='flex flex-col items-start'>
                    <p className=' text-xl text-coral-red tracking-wider font-light'>Our Summer collections</p>
                    <h1 className=' text-7xl font-bold mt-[40px]'>The New Arrival <span className='text-coral-red'>Nike</span> Shoes</h1>
                    <p className='information mt-6 mb-14 max-w-[25ch]'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
                    <button className='button-orange'>
                        Shop now 
                        <img src={rightArrow} alt="" />
                    </button>
                    <div className='mt-20 flex flex-wrap gap-12'>
                        {record.map((item, index) =>  (
                            <div key={index} className='grid'>
                                <p className=' text-5xl font-[Palanquin] font-bold'>{item.number}</p>
                                <p className='information' >{item.category}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className=''>
                    <img src={images[selectedImageIndex]} alt="" />
                    <div>
                        {images.map((image, index) => (
                            <button key={index} onClick={() => handleImageChange(index)} style={{ border: index === selectedImageIndex ? "2px solid red": "none"}} className='p-2 bg-background'>
                                <img src={image} alt="" />
                            </button>
                        ))}
                    </div>
                </div> 
            </section>
        </header>
        <div className='hidden'>
            hello
        </div>
    </>
  )
}

export default Header