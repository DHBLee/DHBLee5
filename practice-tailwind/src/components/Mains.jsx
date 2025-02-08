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

const Mains = React.forwardRef(({ className }, ref) => {

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
      <main ref={ref} className={`${className}`}>
        <section  className='flex flex-col gap-16 py-p-custom pinline'>
            <div className='grid gap-3'>
                <h2 className='text-5xl/tight font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
                <p className='information max-w-[50ch]'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
            </div>
            <div className=' grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6'>
                {nike.map((item, index) => (
                    <div key={index} className='grid gap-6 hover:scale-105 transition-all duration-300'>
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='grid gap-2'>
                            <div className='flex items-center gap-2'>
                                <img src={star} alt="" />
                                <p className='information'>({item.rating})</p>
                            </div>
                            <h3 className='text-2xl font-medium'>{item.name}</h3>
                            <p className='text-2xl font-semibold text-coral-red'>${(item.price).toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <section className='py-p-custom items-center flex flex-col lg:flex-row  lg:justify-center gap-10 pinline'>
            <div className='grid gap-3 items-start flex-1'>
                <h2 className='text-5xl/snug font-bold'>We Provide You <span className='text-coral-red'>Super</span> <span className='text-coral-red'>Quality</span> Shoes</h2>
                <p className='information'>
                    Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
                </p>
                <p className='information'>
                    Our dedication to detail and excellence ensures your satisfaction
                </p>
                <button className='button-orange w-max mt-6'>View details</button>
            </div>
            <div className='flex-1'>
                <img src={bigShoe8} alt="" className='ml-auto'/>
            </div>
        </section>
        <section className='py-p-custom grid gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] pinline'>
            <div className='flex flex-col gap-2 items-start py-16 px-10 shadow-xl rounded-2xl'>
                <span className='rounded-full bg-coral-red p-2'>
                    <img src={truckIcon} alt=""  className='w-5'/>
                </span>
                <h3 className='text-2xl font-bold mt-4'>Free shipping</h3>
                <p className='information'>Enjoy seamless shopping with our complimentary shipping service.</p>
            </div>
            <div className='flex flex-col gap-2 items-start py-16 px-10 shadow-xl rounded-2xl'>
                <span className='rounded-full bg-coral-red p-2'>
                    <img src={shieldIcon} alt="" className='w-5'/>
                </span>
                <h3 className='text-2xl font-bold mt-4'>Secure Payment</h3>
                <p className='information'>Experience worry-free transactions with our secure payment options.</p>
            </div>
            <div className='flex flex-col gap-2 items-start py-16 px-10 shadow-xl rounded-2xl'>
                <span className='rounded-full bg-coral-red p-2'>
                    <img src={supportIcon} alt="" className='w-5'/>
                </span>
                <h3 className='text-2xl font-bold mt-4'>Love to help you</h3>
                <p className='information'>Our dedicated team is here to assist you every step of the way.</p>
            </div>
        </section>
        <section className='py-p-custom items-center flex flex-col xl:flex-row-reverse gap-10 pinline'>
            <div className='grid gap-1 flex-1 items-start'>
                <h2 className='text-5xl/snug font-bold'><span className='text-coral-red'>Special</span> Offer</h2>
                <p className='information'>
                    Embark on a shopping journey that redefines your experience with unbeatable deals. from premier selections to incredible savings, we offer unparalleled value that sets us apart.
                </p>
                <p className='information'>
                    Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothings short of exceptional.
                </p>
                <div className='mt-7 flex flex-wrap gap-4'>
                    <button className='button-orange w-max'>
                        Shop now
                        <img src={rightArrow} alt="" />
                    </button>
                    <button className='button-transparent w-max hover:scale-105 hover:shadow-md hover:transition-all hover:duration-300'>Learn more</button>
                </div>
            </div>
            <div className='flex-1'>
                <img src={offerImage} alt="" />
            </div>
        </section>

        <section className='py-p-custom bg-pale-blue grid gap-4 items-center justify-center text-center w-full'>
            <div className='grid gap-2'>
                <h3 className='text-5xl/tight font-bold mt-4'>What Our <span className='text-coral-red'>Customers</span> Say?</h3>
                <p className='information max-w-[40ch] mx-auto'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
            </div>
            <div className='flex flex-col items-center xl:flex-row xl:justify-between gap-16 mt-16'>
                {testimonials.map((item, index) => (
                    <div key={index} className='grid gap-2 w-max'>
                        <img src={item.image} alt="" className='w-[7rem] mx-auto rounded-full'/>
                        <p className='information max-w-[40ch] mx-auto'>{item.info}</p>
                        <div className='flex gap-2 justify-center items-center'>
                            <img src={star} alt="" />
                            <p className='information'>({item.rating})</p>
                        </div>
                        <h3 className='text-2xl font-bold'>{item.name}</h3>
                    </div>
                ))}
            </div>
        </section>

        <section className='grid lg:grid-cols-2 lg:justify-between lg:items-center gap-7 py-[clamp(4rem,2.591549295774648rem+6.009389671361502vw,8rem)] pinline'>
            <h3 className='text-5xl/tight font-bold mt-4 lg:max-w-[20ch]'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter</h3>
            <div className='grid gap-5'>
                <form action="" className='flex items-center justify-between border border-solid border-slate-gray rounded-full p-3'>
                    <input type="text" placeholder='subscribe@nike.com' className='ml-5'/>
                    <button className='hidden button-orange md:inline-block'>Sign Up</button>
                </form>
                <button className='button-orange md:hidden'>Sign Up</button>
            </div>
        </section>
      </main>
    )
});

export default Mains