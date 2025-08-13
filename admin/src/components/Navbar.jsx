import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // sidebar icons
import { assets } from "../assets/assets";

const Navbar = ({ setToken, sidebarOpen, setSidebarOpen }) => {
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 lg:px-6">
        {/* Sidebar Toggle Icon (Left) - Only visible on mobile/tablet */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden flex items-center justify-center w-8 h-8 text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition-colors"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>

        {/* Center Text - Adjusted for mobile */}
        <div className="flex-1 text-center lg:text-left lg:flex-none leading-tight">
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
            Admin Panel
          </h2>
          <p className="text-xs text-gray-500 hidden sm:block">
            Dashboard Management
          </p>
        </div>

        {/* Logo (Right) */}
        <div className="flex items-center">
          <img
            src={assets.thetrendyclub}
            alt="Logo"
            className="h-6 w-auto sm:h-8 lg:h-10"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
