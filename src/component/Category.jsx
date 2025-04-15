import React from 'react'
import fruit from '../assets/fruits.png'
import vegetable from '../assets/vegetabels.png'
import dairy from '../assets/dairy.png'
import bakery from '../assets/bakery.png'
import meat from '../assets/meat.png'
import beverage from '../assets/beverages.png'
import CategoryCard from './CategoryCard'

const items = [
    {
        name: 'Fruits',
        image: fruit,
    },
    {
        name: 'Vegetables',
        image: vegetable,
    },
    {
        name: 'Dairy',
        image: dairy,
    },
    {
        name: 'Bakery',
        image: bakery,
    },
    {
        name: 'Meat',
        image: meat,
    },
    {
        name: 'Beverage',
        image: beverage,
    },
]

const Category = () => {
  return (
    <div className='py-12 bg-gray-50 px-6 md:px-0'>
      <div className='max-w-6xl mx-auto'>
            <h1 className='text-3xl font-bold text-center mb-8'>Shop By Category</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                {
                    items.map((item,index)=>{
                        return  <CategoryCard key={index} name={item.name} image={item.image}></CategoryCard>
                    })
                }
            </div>
      </div>
    </div>
  )
}

export default Category
