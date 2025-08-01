import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-4 px-[4%] justify-between bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm'>
        <img className='w-[max(10%, 80px)]' src={assets.logo} alt="Logo" />
        <div className="flex items-center gap-4">
          <h2 className="text-title text-xl hidden sm:block">Admin Panel</h2>
          <button 
            onClick={()=>setToken('')}
            className='bg-gray-800 hover:bg-gray-700 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg'
          >
            Logout
          </button>
        </div>
    </div>
  )
}

export default Navbar