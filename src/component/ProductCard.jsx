import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { setCart } from '../Redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
// import {toast} from 'react-hot-toast'

const ProductCard = ({product}) => {

    const dispatch = useDispatch()
        const {cart} = useSelector(store=>store.cart)  

    // Add to cart 
    const addToCart = (product)=>{
        const productExists = cart.some(item => item.id === product.id)
        if(productExists){
            let newUnit = product.unit
            newUnit+=1
            dispatch(setCart([...cart])) 
            // toast.success('Product is already in the cart')
        }
        else{
            dispatch(setCart([...cart,product]))
            // toast.success('Product is added to cart!')
        }
    }
  return (
    <div className='overflow-hidden transition-all hover:shadow-md border border-gray-200 rounded-lg'>
        <div>
            <div className='aspect-squire relative bg-gray-200'>
                <img src={product.image} alt="{product.name}" className='object-cover w-full h-full' />
            </div>
            <div className='px-3'>
                <p className='text-sm mt-1 text-gray-500'>{product.category}</p>
                <h3 className='font-semibold text-sm mt-1 h-[40px] text-gray-800 line-clamp-2'>{product.name}</h3>
                <p className='text-sm text-gray-600 mt-1'>{product.quantity}</p>
                <p className='font-bold mt-1 text-gray-70'>৳{product.price?.toFixed(2)}</p>
            </div>
        </div>
        <div className='p-4 pt-1'>
            <button onClick={()=>addToCart(product)} className='w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center py-2 rounded-lg cursor-pointer'><FaShoppingCart className='w-4 h-4 mr-2'></FaShoppingCart>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard
