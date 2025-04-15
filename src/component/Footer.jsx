import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white py-12 md:px-0 px-4'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    <div>
                        <h3 className='text-xl font-bold mb-4'>GreenMart</h3>
                        <p className='mb-4'>Your One-stop shop for fresh food delivered to your doorstep</p>
                        <div>
                            <h2 className='font-medium mb-4'>Follow Us</h2>
                            <div className='space-x-4 flex'>
                                <FaFacebook size={25}></FaFacebook>
                                <FaInstagram size={25}></FaInstagram>
                                <FaTwitter size={25}></FaTwitter>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
                        <ul className='space-y-2'>
                            <li className='hover:text-green-400'>About Us</li>
                            <li className='hover:text-green-400'>Contact Us</li>
                            <li className='hover:text-green-400'>FAQ</li>
                            <li className='hover:text-green-400'>Privacy</li>
                        </ul>
                    </div>
                    <div className=''>
                        <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
                        <ul className='space-y-2'>
                            <li className='hover:text-green-400'>About Us</li>
                            <li className='hover:text-green-400'>Contact Us</li>
                            <li className='hover:text-green-400'>FAQ</li>
                            <li className='hover:text-green-400'>Privacy</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold text-xl mb-4'>Contact</h1>
                        <p className='mb-2'>Dhanmondi 32, Dhaka</p>
                        <p className='mb-2'>Phone: +880 1779024048</p>
                        <p className='mb-2'>Email: sajolibn@gmail.com</p>
                    </div>
                    
                </div>
                <hr className='my-4 text-gray-400'/>
                <p className='text-center'>@copyright {new Date().getFullYear()} GreenShop. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
