import React from 'react'
import { products } from '../Utils/Data'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

const FreatureProduct = () => {
  return (
    <div className='py-12 px-3 md:px-0'>
        <div className='max-w-6xl mx-auto'>
            <h3 className='text-3xl font-bold mb-8'>Featured Products</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 pd:px-8'>
                {
                    products.slice(0,5).map((product)=>{
                        return(
                            <ProductCard key={product.id} product={product} ></ProductCard>
                        )
                    })
                }
            </div>
            <div className='mt-8 text-center'>
                <Link to={'/shop'}><button className='rounded-full border py-2 px-3 border-gray-500 hover:bg-green-600 hover:text-white cursor-pointer'>View all Products</button></Link>
            </div>
        </div>
    </div>
  )
}

export default FreatureProduct
