import React from 'react'

const pageviewOptions = ["10K", "50K", "100K", "500K", "1M"];

const SlideBar = ({ pageviews, setPageviews, isYearly, yearlyPrice, price}) => {

    const handleChange = (e) => {
        const index = parseInt(e.target.value);
        setPageviews(pageviewOptions[index]);
    };

    return (
        <div className='flex flex-col items-center w-full gap-4'>
            <div className=' md:w-full md:flex md:justify-between md:items-center'>
                <p className=' text-sm font-semibold tracking-[2px] '>{pageviews} PAGEVIEWS</p>
                <div className='hidden flex items-center gap-1.5 md:block'>
                    <span className='text-3xl font-bold '>${isYearly ? yearlyPrice : price}</span>
                    <span className='text-[#8C9AB2]'>/ {isYearly ? "year" : "month"}</span>
                </div>
            </div>
            <div className='relative w-full'>
                <input
                    type='range'
                    min="0"
                    max={pageviewOptions.length - 1}
                    step="1"
                    value={pageviewOptions.indexOf(pageviews)}
                    onChange={handleChange}
                    className='slider w-full appearance-none bg-gray-300 rounded-full h-2 outline-none cursor-pointer'
                    style={{
                        '--progress': `${(pageviewOptions.indexOf(pageviews) / (pageviewOptions.length - 1)) * 100}%`,
                      }}
                />
                
            </div>
        </div>
    )
}

export default SlideBar