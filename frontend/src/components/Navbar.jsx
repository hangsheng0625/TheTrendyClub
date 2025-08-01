import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-between py-4 px-4 sm:px-6 font-medium relative">
        {/* Logo */}
        <Link
          to="/"
          className="transform transition-transform duration-300 hover:scale-105"
        >
          <img src={assets.logo} className="w-32 sm:w-36" alt="Logo" />
        </Link>

        {/* Navigation - Now visible on all screen sizes */}
        <ul className="flex gap-4 sm:gap-8 text-xs sm:text-sm text-amber-900 font-semibold tracking-wide overflow-x-auto">
          <NavLink
            to="/"
            className="group flex flex-col items-center gap-1 py-2 px-2 sm:px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 whitespace-nowrap"
          >
            <p className="group-hover:text-amber-700 transition-colors duration-300">
              HOME
            </p>
            <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-amber-700 to-amber-900 transition-all duration-300" />
          </NavLink>
          <NavLink
            to="/collection"
            className="group flex flex-col items-center gap-1 py-2 px-2 sm:px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 whitespace-nowrap"
          >
            <p className="group-hover:text-amber-700 transition-colors duration-300">
              COLLECTION
            </p>
            <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-amber-700 to-amber-900 transition-all duration-300" />
          </NavLink>
          <NavLink
            to="/about"
            className="group flex flex-col items-center gap-1 py-2 px-2 sm:px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 whitespace-nowrap"
          >
            <p className="group-hover:text-amber-700 transition-colors duration-300">
              ABOUT
            </p>
            <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-amber-700 to-amber-900 transition-all duration-300" />
          </NavLink>
          <NavLink
            to="/contact"
            className="group flex flex-col items-center gap-1 py-2 px-2 sm:px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 whitespace-nowrap"
          >
            <p className="group-hover:text-amber-700 transition-colors duration-300">
              CONTACT
            </p>
            <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-amber-700 to-amber-900 transition-all duration-300" />
          </NavLink>
        </ul>

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          <div
            onClick={() => setShowSearch(true)}
            className="p-2 rounded-full hover:bg-amber-100 transition-all duration-300 cursor-pointer group"
          >
            <img
              src={assets.search_icon}
              className="w-5 group-hover:scale-110 transition-transform duration-300 filter brightness-75"
              alt="Search"
            />
          </div>

          {/* Profile Dropdown */}
          <div className="group relative">
            <div
              onClick={() => (token ? null : navigate("/login"))}
              className="p-2 rounded-full hover:bg-amber-100 transition-all duration-300 cursor-pointer"
            >
              <img
                src={assets.profile_icon}
                className="w-5 group-hover:scale-110 transition-transform duration-300 filter brightness-75"
                alt="Profile"
              />
            </div>

            {/* Dropdown Menu */}
            {token && (
              <div className="group-hover:block hidden absolute right-0 pt-4">
                <div className="flex flex-col gap-1 w-44 py-4 px-2 bg-white/95 backdrop-blur-md text-amber-800 rounded-xl shadow-xl border border-amber-100 animate-fadeInUp">
                  <p className="cursor-pointer hover:text-amber-900 hover:bg-amber-50 px-4 py-2 rounded-lg transition-all duration-300">
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer hover:text-amber-900 hover:bg-amber-50 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    Orders
                  </p>
                  <hr className="my-1 border-amber-200" />
                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-red-800 hover:bg-red-50 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative group">
            <div className="p-2 rounded-full hover:bg-amber-100 transition-all duration-300">
              <img
                src={assets.cart_icon}
                className="w-5 min-w-5 group-hover:scale-110 transition-transform duration-300 filter brightness-75"
                alt="Cart"
              />
              {getCartCount() > 0 && (
                <p className="absolute -top-1 -right-1 w-5 h-5 text-center leading-5 bg-gradient-to-r from-amber-700 to-amber-900 text-white text-xs rounded-full animate-pulse-slow">
                  {getCartCount()}
                </p>
              )}
            </div>
          </Link>

          {/* Mobile Menu Button - Hidden for cleaner design */}
          <div className="hidden">
            <img src={assets.menu_icon} className="w-5" alt="Menu" />
          </div>
        </div>

        {/* Mobile Sidebar - Completely Hidden */}
        <div className="hidden">
          {/* Sidebar completely removed for cleaner design */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
