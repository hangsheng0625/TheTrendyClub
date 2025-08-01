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

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-8 text-sm text-gray-700 font-semibold tracking-wide">
          <NavLink
            to="/"
            className="group flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
          >
            <p className="group-hover:text-indigo-600 transition-colors duration-300">
              HOME
            </p>
            <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300" />
          </NavLink>
          <NavLink
            to="/collection"
            className="group flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
          >
            <p className="group-hover:text-indigo-600 transition-colors duration-300">
              COLLECTION
            </p>
            <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300" />
          </NavLink>
          <NavLink
            to="/about"
            className="group flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
          >
            <p className="group-hover:text-indigo-600 transition-colors duration-300">
              ABOUT
            </p>
            <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300" />
          </NavLink>
          <NavLink
            to="/contact"
            className="group flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
          >
            <p className="group-hover:text-indigo-600 transition-colors duration-300">
              CONTACT
            </p>
            <hr className="w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300" />
          </NavLink>
        </ul>

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          <div
            onClick={() => setShowSearch(true)}
            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 cursor-pointer group"
          >
            <img
              src={assets.search_icon}
              className="w-5 group-hover:scale-110 transition-transform duration-300"
              alt="Search"
            />
          </div>

          {/* Profile Dropdown */}
          <div className="group relative">
            <div
              onClick={() => (token ? null : navigate("/login"))}
              className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            >
              <img
                src={assets.profile_icon}
                className="w-5 group-hover:scale-110 transition-transform duration-300"
                alt="Profile"
              />
            </div>

            {/* Dropdown Menu */}
            {token && (
              <div className="group-hover:block hidden absolute right-0 pt-4">
                <div className="flex flex-col gap-1 w-44 py-4 px-2 bg-white/95 backdrop-blur-md text-gray-600 rounded-xl shadow-xl border border-gray-100 animate-fadeInUp">
                  <p className="cursor-pointer hover:text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg transition-all duration-300">
                    👤 My Profile
                  </p>
                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer hover:text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    📦 Orders
                  </p>
                  <hr className="my-1 border-gray-200" />
                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    🚪 Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative group">
            <div className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300">
              <img
                src={assets.cart_icon}
                className="w-5 min-w-5 group-hover:scale-110 transition-transform duration-300"
                alt="Cart"
              />
              {getCartCount() > 0 && (
                <p className="absolute -top-1 -right-1 w-5 h-5 text-center leading-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs rounded-full animate-pulse-slow">
                  {getCartCount()}
                </p>
              )}
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div
            onClick={() => setVisible(true)}
            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 cursor-pointer sm:hidden"
          >
            <img src={assets.menu_icon} className="w-5" alt="Menu" />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-md z-50 transition-transform duration-300 transform ${
            visible ? "translate-x-0" : "translate-x-full"
          } shadow-2xl`}
        >
          <div className="flex flex-col text-gray-600 h-full">
            {/* Close button */}
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-6 cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300"
            >
              <img
                src={assets.dropdown_icon}
                className="h-4 rotate-180"
                alt=""
              />
              <p className="font-semibold">Back</p>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 py-6">
              <NavLink
                onClick={() => setVisible(false)}
                className="block py-4 px-6 border-b border-gray-50 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300 font-semibold tracking-wide"
                to="/"
              >
                🏠 HOME
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="block py-4 px-6 border-b border-gray-50 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300 font-semibold tracking-wide"
                to="/collection"
              >
                👕 COLLECTION
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="block py-4 px-6 border-b border-gray-50 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300 font-semibold tracking-wide"
                to="/about"
              >
                ℹ️ ABOUT
              </NavLink>
              <NavLink
                onClick={() => setVisible(false)}
                className="block py-4 px-6 border-b border-gray-50 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-600 transition-all duration-300 font-semibold tracking-wide"
                to="/contact"
              >
                📞 CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
