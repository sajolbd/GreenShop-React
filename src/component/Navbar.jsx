import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { FaBars, FaFilter, FaShoppingCart, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartComp from './CartComp'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const { cart } = useSelector(store => store.cart)
  const handleClick = () => {
    setIsOpen(false)
  }
  const handlerOpen = () => {
    setOpen(!open)
  }
  const handlerFilter = () => {
    setOpenFilter(!openFilter)
  }
  return (
    <div>
      <div className='mx-auto flex justify-between items-center px-8 py-3 fixed top-0 z-200 bg-green-100 w-full border border-gray-100 shadow-xl lg:px-[180px]'>
        {/* logo section  */}
        <Link to={'/'}><img src={logo} alt="" className='md:w-52 w-40' /></Link>
        {/* menu secton  */}
        <nav className='flex gap-5'>
          <ul className='text-xl font-semibold md:flex items-center gap-7 hidden'>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/shop'}><li>Shop</li></Link>
            <Link to={'/about'}><li>About</li></Link>
            <Link to={'/contact'}><li>Contact</li></Link>

          </ul>
          <Link className='relative'><FaShoppingCart onClick={() => setIsOpen(true)} size={25}></FaShoppingCart><span className='absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>{cart.length}</span></Link>




          {/*  mobile section  */}
          <div className='md:hidden z-105' onClick={handlerOpen}>
            {
              !open ? <FaBars size={25}></FaBars> : <FaTimes size={25}></FaTimes>
            }
            <div className={!open ? 'hidden' : 'absolute z-10 top-14 right-0 left-0   text-xl py-10  text-white font-semibold  bg-green-800  list-none '}>
              <ul className='text-xl font-semibold flex flex-col items-center  gap-7'>
                {/* Mobile Filter  */}
                <div className={`md:hidden bg-gray-100 text-black w-3/4 flex justify-between items-center mx-4 px-4 py-3 ${openFilter ? 'rounded-t-md' : 'rounded-md'}`}>
                  <h1 className='font-semibold text-lg'>Filters</h1>
                  <FaFilter size={20} onClick={handlerFilter}></FaFilter>
                </div>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/shop'}><li>Shop</li></Link>
                <Link to={'/about'}><li>About</li></Link>
                <Link to={'/contact'}><li>Contact</li></Link>
              </ul>
            </div>

          </div>
        </nav>


      </div>


      <CartComp isOpen={isOpen} handleClick={handleClick}></CartComp>

    </div>
  )
}

export default Navbar
