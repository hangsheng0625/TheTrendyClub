import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen bg-white/80 backdrop-blur-sm border-r border-gray-200 shadow-sm'>
      <div className='flex flex-col gap-3 pt-8 pl-[15%] text-body-primary'>
        <h3 className="text-subtitle text-lg mb-4 px-3">Navigation</h3>
        
        <NavLink 
          className='flex items-center gap-3 border border-gray-200 border-r-0 px-4 py-3 rounded-l-lg hover:bg-gray-50 transition-all duration-300 text-sm font-medium' 
          to="/add"
        >
          <img className='w-5 h-5' src={assets.add_icon} alt="Add" />
          <p className='hidden md:block text-body-primary'>Add Items</p>
        </NavLink>

        <NavLink 
          className='flex items-center gap-3 border border-gray-200 border-r-0 px-4 py-3 rounded-l-lg hover:bg-gray-50 transition-all duration-300 text-sm font-medium' 
          to="/list"
        >
          <img className='w-5 h-5' src={assets.order_icon} alt="List" />
          <p className='hidden md:block text-body-primary'>List Items</p>
        </NavLink>

        <NavLink 
          className='flex items-center gap-3 border border-gray-200 border-r-0 px-4 py-3 rounded-l-lg hover:bg-gray-50 transition-all duration-300 text-sm font-medium' 
          to="/orders"
        >
          <img className='w-5 h-5' src={assets.order_icon} alt="Orders" />
          <p className='hidden md:block text-body-primary'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar