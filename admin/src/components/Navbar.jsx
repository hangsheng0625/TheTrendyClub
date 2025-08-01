import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // sidebar icons
import { assets } from '../assets/assets';

const Navbar = ({ setToken }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
    // Optional: emit to parent or context for sidebar control
  };

  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="relative flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 lg:px-6">

        {/* Sidebar Toggle Icon (Left) */}
        <button
          onClick={toggleSidebar}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 hover:text-black"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Center Text */}
        <div className="mx-auto text-center leading-tight">
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
            Admin Panel
          </h2>
          <p className="text-xs text-gray-500 hidden sm:block">
            Dashboard Management
          </p>
        </div>

        {/* Logo (Right) */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <img
            src={assets.logo}
            alt="Logo"
            className="h-6 w-auto sm:h-8 lg:h-10"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
