import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { LuNotebookText } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { setCart } from '../Redux/CartSlice';
import { Link } from 'react-router-dom';

const CartComp = ({ isOpen, handleClick }) => {
    const { cart } = useSelector(store => store.cart)
    const dispatch = useDispatch()

    const totalPrice = cart.reduce((total, item) => total + item.price * item.unit, 0)

    const updateQuantity = (cart, productId, action) => {
        dispatch(setCart(cart.map(item => {
            if (item.id === productId) {
                let newUnit = item.unit;
                if (action === 'increase') {
                    newUnit++;
                }
                else if (action === 'decrease') {
                    newUnit--;
                }
                return newUnit > 0 ? { ...item, unit: newUnit } : null
            }
            return item

        }).filter(item => item != null) // কার্ট এ শূন্য হলে
        ))
        
    }

    return (
        <div className={`fixed overflow-y-scroll top-0 right-0 h-full w-[400px] bg-gray-100 shadow-lg p-4 transform z-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>

            <h2 className='text-xl px-4 font-bold mb-4 flex justify-between'>My Cart <button onClick={handleClick} className='text-red-600 cursor-pointer'><FaTimes></FaTimes></button></h2>

            <div className=''>
                <div className='space-y-4'>
                    {
                        cart.length === 0 ? <p>Your Cart Is Empty</p> : (
                            cart.map((item) => {
                                return (
                                    <div key={item.id} className='flex items-center gap-4 p-2 bg-white rounded-md'>
                                        <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded border border-gray-200' />
                                        <div className='flex justify-between w-full items-center'>
                                            <div>
                                                <h2 className='text-sm line-clamp-2'>{item.name}</h2>
                                                <p className='text-gray-600'>{item.quantity}</p>
                                                <p className='text-gray-800'>৳{item.price} <span className='line-through ml-1 text-gray-500'>৳{item.price + 15}</span></p>
                                            </div>
                                        </div>
                                        <div className='flex justify-center items-center text-xl font-semibold px-5 py-1 rounded-md gap-3 mt-2 bg-green-600 text-white'>
                                            <button className='cursor-pointer' onClick={() => { updateQuantity(cart, item.id, 'decrease') }}>-</button>
                                            <span>{item.unit}</span>
                                            <button className='cursor-pointer' onClick={() => { updateQuantity(cart, item.id, 'increase') }}>+</button>

                                        </div>
                                        <hr />
                                    </div>
                                )
                            })
                        )
                    }
                </div>
                {
                    cart.length > 0 && (
                        <div className='bg-white rounded-md p-4 mt-4 space-y-1'>
                            <h1 className='text-gray-800 font-bold text-xl'>Bill Details</h1>
                            <div className='flex justify-between items-center'>
                                <h1 className='flex gap-1 items-center text-gray-700'>
                                    <span><LuNotebookText></LuNotebookText></span>Items Total
                                </h1>
                                <p>৳{totalPrice}</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <h1 className='flex gap-1 items-center text-gray-700'>
                                    <span><CiDeliveryTruck size={20}></CiDeliveryTruck></span>Delivery Charge
                                </h1>
                                <p>৳10</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-semibold text-lg flex gap-1 items-center'><span><FaShoppingBag size={20}></FaShoppingBag></span>Total</h1>
                                <p>৳{totalPrice + 10}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                cart.length > 0 && (
                    <div className='bg-white p-5 rounded-md'>
                        <div className='bg-green-600 text-white w-full py-2 px-3 rounded-md flex justify-between items-center cursor-pointer'>
                            <div>
                                <h1>৳{totalPrice + 10}</h1>
                                <p className='text-gray-100'>Total</p>
                            </div>
                            <Link to={'/'} >
                            <div className='flex gap-1 items-center font-bold'>
                                <h1 className='text-lg'>Login to Proceed </h1>
                                <span><MdOutlineKeyboardArrowRight size={25}></MdOutlineKeyboardArrowRight></span>
                            </div>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CartComp
