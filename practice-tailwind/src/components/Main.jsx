import React from 'react'
import bigShoe4 from '../assets/shoe4.svg'
import bigShoe5 from '../assets/shoe5.svg'
import bigShoe6 from '../assets/shoe6.svg'
import bigShoe7 from '../assets/shoe7.svg'
import bigShoe8 from '../assets/shoe8.svg'
import star from '../assets/star.svg'

import truckIcon from '../assets/truck-fast.svg'
import shieldIcon from '../assets/shield-tick.svg'
import supportIcon from '../assets/support.svg' 

import rightArrow from '../assets/arrow-right.svg';

import offerImage from '../assets/offer.svg'
import customerImage1 from '../assets/customer1.jpeg'
import customerImage2 from '../assets/customer2.svg'

const Main = () => {

    const nike = [
        {
            "image": bigShoe4,
            "name": "Nike Air Jordan-01",
            "rating": 4.5,
            "price": 200.20,
        },
        {
            "image": bigShoe5,
            "name": "Nike Air Jordan-10",
            "rating": 4.5,
            "price": 210.20,
        },
        {
            "image": bigShoe6,
            "name": "Nike Air Jordan-100",
            "rating": 4.5,
            "price": 220.20,
        },
        {
            "image": bigShoe7,
            "name": "Nike Air Jordan-001",
            "rating": 4.5,
            "price": 230.20,
        }
    ];

    const testimonials = [
        {
            image: customerImage1,
            info: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
            rating: 4.5,
            name: "Morich Brown",
        },
        {
            image: customerImage2,
            info: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
            rating: 4.5,
            name: "Lota Mongeskar",
        }
    ]

    return (
      <main>
        <section>
            <div>
            <h2>Our <span>Popular</span> Products</h2>
            <p>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
            </div>
            <div>
                {nike.map((item, index) => (
                    <div key={index}>
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        <div>
                            <div>
                                <img src={star} alt="" />
                                <p>({item.rating})</p>
                            </div>
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <section>
            <div>
                <h2>We Provide You <span>Super Quality</span> Shoes</h2>
                <p>
                    Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
                </p>
                <p>
                    Our dedication to detail and excellence ensures your satisfaction
                </p>
                <button>View details</button>
            </div>
            <div>
                <img src={bigShoe8} alt="" />
            </div>
        </section>
        <section>
            <div>
                <span>
                    <img src={truckIcon} alt="" />
                </span>
                <h3>Free shipping</h3>
                <p>Enjoy seamless shopping with our complimentary shipping service.</p>
            </div>
            <div>
                <span>
                    <img src={shieldIcon} alt="" />
                </span>
                <h3>Secure Payment</h3>
                <p>Experience worry-free transactions with our secure payment options.</p>
            </div>
            <div>
                <span>
                    <img src={supportIcon} alt="" />
                </span>
                <h3>Love to help you</h3>
                <p>Our dedicated team is here to assist you every step of the way.</p>
            </div>
        </section>
        <section>
            <div>
                <h2><span>Special</span> Offer</h2>
                <p>
                    Embark on a shopping journey that redefines your experience with unbeatable deals. from premier selections to incredible savings, we offer unparalleled value that sets us apart.
                </p>
                <p>
                    Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothings short of exceptional.
                </p>
                <div>
                    <button>
                        Shop now
                        <img src={rightArrow} alt="" />
                    </button>
                    <button>Learn more</button>
                </div>
            </div>
            <div>
                <img src={offerImage} alt="" />
            </div>
        </section>

        <section>
            <div>
                <h3>What Our <span>Customers</span> Say?</h3>
                <p>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
            </div>
            <div>
                {testimonials.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt="" />
                        <p>{item.info}</p>
                        <div>
                            <img src={star} alt="" />
                            <p>({item.rating})</p>
                        </div>
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        </section>

        <section>
            <h3>Sign Up for <span>Updates</span> & Newsletter</h3>
            <form action="">
                <input type="text" />
                <button>Sign Up</button>
            </form>
        </section>
      </main>
    )
}

export default Main