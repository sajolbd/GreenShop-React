import React from 'react'

const CategoryCard = ({name,image}) => {
  return (
    <div className='overflow-hidden transition-all hover:shadow-md border border-gray-200 rounded-xl'>
      <div className='hover:scale-105'>
        <div className='aspect-square relative bg-gray-200'>
            <img src={image} alt="" className='object-cover w-full h-full'/>
        </div>
        <div className='p-4 text-center'>
            <h4 className='font-medium'>{name}</h4>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
