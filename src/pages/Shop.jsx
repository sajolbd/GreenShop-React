import React, { useState } from 'react'
import { products } from '../Utils/Data'
import ProductCard from '../component/ProductCard'
import empty from '../assets/empty.jpg'

const Shop = () => {
    const [priceRange , setPriceRange] = useState([0,500])  
    const [search,setSearch] = useState('')
    const [category,setCategory] = useState('')

    const filteredProduct = products.filter((product)=>
        product.name.toLowerCase().includes(search.toLocaleLowerCase()) && 
        (category === '' || product.category===category) &&
        product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    return (
        <div className=' mt-24 max-w-6xl mx-auto flex flex-col lg:gap-6 my-7 lg:mt-28 h-max'>
            {/* filter section  */}
            <div className='col-span-1 p-4 bg-gray-100 h-max rounded-lg fixed w-[280px] mb-10 hidden md:block'>
                <h2 className='text-lg font-semibold mb-4'>Filters</h2>
                <input type="text" placeholder='Search....' className='bg-white p-2 w-full rounded-full' onChange={(e)=>setSearch(e.target.value)} value={search}/>
                <select name="" id="" className='w-full p-2 border rounded mb-4' 
                onChange={(e)=>setCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Meat">Meat</option>
                </select>
                <div className='flex flex-col'>
                    <label htmlFor=""> Price Range: {priceRange[0]}-{priceRange[1]}</label>
                    <input type="range" name="" id="" min='0' max='100' value={priceRange[1]} onChange={(e)=>setPriceRange([priceRange[0],Number(e.target.value)]) }/>
                </div>
                <button className='bg-red-500 px-3 py-1 rounded-md text-white cursor-pointer' onClick={()=>{setSearch('');setCategory('');setPriceRange([0,100])}}>Reset Filters</button>
            </div>
            {/* product section  */}
            
            {
                filteredProduct.length > 0 ? (<div className='col-span-3 grid grid-cols-1 lg:grid-cols-4 gap-4 lg:ml-[300px] px-4 md:px-0 mt-6 md:mt-0'>
                    {
                        filteredProduct.map((product)=>{
                            return (
                                <ProductCard key={product.id} product={product}></ProductCard>
                            )
                        })
                    }
                </div>) : (
                    <div className='lg:ml-[300px] flex justify-center'>
                        <img className='w-[500px]' src={empty} alt="" />
                    </div>
                )
            }

            
        </div>
    )
}

export default Shop
