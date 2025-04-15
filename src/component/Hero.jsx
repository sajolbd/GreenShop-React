import React from 'react'
import hero from '../assets/Hero1.png'
const Hero = () => {
    return (
        <div className='relative bg-green-600 text-white mt-12 md:mt-15'>
            <div className='max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center px-6 md:px-0 gap-7'>
                <div className='md:w-1/2 mb-5 md:mb-0'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>Fresh <span className='text-orange-400'>Groceries</span> Delivered to Your Door</h2>
                    <p className='text-lg mb-5'>Shop from out wide selection of fresh fruits, vegetables, dairy, and more. Get same-day delivery!</p>
                    <div className='flex gap-4'>
                        <button className='bg-white text-green-600 hover:bg-gray-100 rounded-full px-3 py-2'>Shop Now</button>
                        <button className='text-white border border-white bg-transparent hover:text-black px-3 py-2 rounded-full'>Learn More</button>
                    </div>
                </div>
                <div className='relative flex justify-center'>

                    <img src={hero} alt="" className='z-100' />

                </div>
            </div>
        </div>
    )
}

export default Hero
