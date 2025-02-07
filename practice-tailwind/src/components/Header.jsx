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
            <section className='flex items-center justify-between'>
                <img src={headerLogo} alt="" />
                
                <button>
                    <img src={hamburgerIcon} alt="" />
                </button>
            </section>
            <section>
                <div>
                    <p>Our Summer collections</p>
                    <h1>The New Arrival <span>Nike</span> Shoes</h1>
                    <p>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
                    <button>
                        Shop now 
                        <img src={rightArrow} alt="" />
                    </button>
                    <div>
                        {record.map((item, index) =>  (
                            <div key={index}>
                                <p>{item.number}</p>
                                <p>{item.category}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <img src={images[selectedImageIndex]} alt="" />
                    <div>
                        {images.map((image, index) => (
                            <button key={index} onClick={() => handleImageChange(index)} style={{ border: index === selectedImageIndex ? "2px solid red": "none"}}>
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