import React, { useState } from 'react'
import headerLogo from '../assets/header-logo.svg';
import hamburgerIcon from '../assets/hamburger.svg';
import closeIcon from '../assets/close-line.svg';
import rightArrow from '../assets/arrow-right.svg';
import bigShoe1 from '../assets/big-shoe1.png';
import bigShoe2 from '../assets/big-shoe2.png';
import bigShoe3 from '../assets/big-shoe3.png';



const Header = React.forwardRef(({ className }, ref) => {

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
  const [imageOpacity, setImageOpacity] = useState(1);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleImageChange = (index) => {
    setImageOpacity(0);
    setTimeout(() => {
        setSelectedImageIndex(index);
        setImageOpacity(1);
    }, 200);
  };

  const toggleNav = () => {
   setIsNavOpen(!isNavOpen); 
  }
  return (
    <>
        <header ref={ref} className={`${className} pinline`}>
            <section className='flex items-center justify-between py-8'>
                <img src={headerLogo} alt=""/>
                
                <button onClick={toggleNav}>
                    <img src={hamburgerIcon} alt="" className='w-5 lg:hidden' />
                </button>
                <div className='hidden lg:flex gap-16'>
                    <ul className='flex gap-14 text-slate-gray'>
                        <li>
                            <a href="#" className='relative before:absolute before:content-[""] before:bottom-[-10px] before:left-0 before:w-full before:h-[2px] before:bg-coral-red before:scale-0 hover:before:scale-100 before:transition-all before:duration-300'>Home</a>
                        </li>
                        <li>
                            <a href="#" className='relative before:absolute before:content-[""] before:bottom-[-10px] before:left-0 before:w-full before:h-[2px] before:bg-coral-red before:scale-0 hover:before:scale-100 before:transition-all before:duration-300'>About Us</a>
                        </li>
                        <li>
                            <a href="#" className='relative before:absolute before:content-[""] before:bottom-[-10px] before:left-0 before:w-full before:h-[2px] before:bg-coral-red before:scale-0 hover:before:scale-100 before:transition-all before:duration-300'>Products</a>
                        </li>
                        <li>
                            <a href="#" className='relative before:absolute before:content-[""] before:bottom-[-10px] before:left-0 before:w-full before:h-[2px] before:bg-coral-red before:scale-0 hover:before:scale-100 before:transition-all before:duration-300'>Contact Us</a>
                        </li>
                    </ul>
                    <button className='hover:scale-105 transition-all duration-500 ease-in-out'>
                        Sign in / Explore Now
                    </button>
                </div>
            </section>
            <section className='flex flex-col xl:flex-row mt-5 xl:mt-20'>
                <div className='flex flex-col items-start flex-1 overflow-visible basis-[45%] xl:w-2/5'>
                    <p className=' text-xl text-coral-red tracking-wider font-light'>Our Summer collections</p>
                    <h1 className=' text-7xl font-bold max-w-[17ch] xl:text-8xl xl:w-max relative z-10'><span className='bg-white pt-[40px] pb-[30px] pr-[40px]'>The New Arrival</span> <span className='text-coral-red'>Nike</span> Shoes</h1>
                    <p className='information mt-6 mb-14 max-w-[35ch]'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
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

                <div className='grid pb-14 mb-12 flex-1 basis-[55%] shrink-0 bg-primary bg-hero bg-no-repeat bg-center bg-cover' >
                    <img src={images[selectedImageIndex]} alt="" className='lg:mx-auto transition-opacity duration-500 ease-in-out' style={{ opacity: imageOpacity }}/>
                    <div className='flex gap-6 relative top-[80px] max-w-[35rem] xl:left-[80px]'>
                        {images.map((image, index) => (
                            <button key={index} onClick={() => handleImageChange(index)} style={{ border: index === selectedImageIndex ? "2px solid #FF6452": "none"}} className='p-2  bg-card bg-no-repeat bg-center bg-cover rounded-xl hover:scale-105 transition-all duration-300'>
                                <img src={image} alt="" />
                            </button>
                        ))}
                    </div>
                </div> 
            </section>
        </header>
        <div className='p-6 lg:hidden bg-white absolute h-screen top-0 right-0 z-20 w-[60%] text-slate-gray transform transition-transform duration-500 ease-in-out' style={{ transform: isNavOpen ? 'translateX(0)' : 'translateX(100%)' }}>
            <img src={closeIcon} alt="" className='w-8 ml-auto' onClick={toggleNav}/>
            <div className='flex flex-col gap-4'>
                <a href="#" className="px-4 py-2 hover:text-coral-red transition-colors duration-300 ease-in-out">Home</a>
                <a href="#" className="px-4 py-2 hover:text-coral-red transition-colors duration-300 ease-in-out">About Us</a>
                <a href="#" className="px-4 py-2 hover:text-coral-red transition-colors duration-300 ease-in-out">Products</a>
                <a href="#" className="px-4 py-2 hover:text-coral-red transition-colors duration-300 ease-in-out">Contact Us</a>
            </div>
        </div>
    </>
  );
});

export default Header