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
    <div className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-grey-200 shadow-sm">
      <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 font-medium relative max-w-full">
        {/* Logo */}
        <Link
          to="/"
          className="transform transition-transform duration-300 hover:scale-105"
        >
          <img src={assets.thetrendyclub} className="w-32 sm:w-36" alt="Logo" />
        </Link>

        {/* Desktop Navigation - Hidden on Mobile */}
        <ul className="hidden md:flex gap-8 text-sm text-grey-800 font-semibold tracking-wide">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `group flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-grey-50 ${
                isActive ? "bg-grey-100" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <p className={`group-hover:text-grey-600 transition-colors duration-300 text-title font-inter font-semibold ${
                  isActive ? "text-grey-600" : ""
                }`}>
                  HOME
                </p>
                <hr className={`border-none h-[2px] bg-gradient-to-r from-grey-300 to-grey-300 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </>
            )}
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `group flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-grey-50 ${
                isActive ? "bg-grey-100" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <p className={`group-hover:text-grey-600 transition-colors duration-300 text-title font-inter font-semibold ${
                  isActive ? "text-grey-600" : ""
                }`}>
                  COLLECTION
                </p>
                <hr className={`border-none h-[2px] bg-gradient-to-r from-grey-600 to-grey-800 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </>
            )}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `group flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-grey-50 ${
                isActive ? "bg-grey-100" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <p className={`group-hover:text-grey-600 transition-colors duration-300 text-title font-inter font-semibold ${
                  isActive ? "text-grey-600" : ""
                }`}>
                  ABOUT
                </p>
                <hr className={`border-none h-[2px] bg-gradient-to-r from-grey-600 to-grey-800 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </>
            )}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `group flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-grey-50 ${
                isActive ? "bg-grey-100" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <p className={`group-hover:text-grey-600 transition-colors duration-300 text-title font-inter font-semibold ${
                  isActive ? "text-grey-600" : ""
                }`}>
                  CONTACT
                </p>
                <hr className={`border-none h-[2px] bg-gradient-to-r from-grey-600 to-grey-800 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </>
            )}
          </NavLink>
        </ul>

        {/* Action Icons */}
        <div className="flex items-center gap-4">
          <div
            onClick={() => setShowSearch(true)}
            className="p-2 rounded-full hover:bg-grey-100 transition-all duration-300 cursor-pointer group"
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
              className="p-2 rounded-full hover:bg-grey-100 transition-all duration-300 cursor-pointer"
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
                <div className="flex flex-col gap-1 w-44 py-4 px-2 bg-white/95 backdrop-blur-md text-grey-800 rounded-xl shadow-xl border border-grey-200 animate-fadeInUp">
                  <p className="cursor-pointer hover:text-grey-600 hover:bg-grey-50 px-4 py-2 rounded-lg transition-all duration-300 text-body-primary">
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer hover:text-grey-600 hover:bg-grey-50 px-4 py-2 rounded-lg transition-all duration-300 text-body-primary"
                  >
                    Orders
                  </p>
                  <hr className="my-1 border-grey-200" />
                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-red-800 hover:bg-red-50 px-4 py-2 rounded-lg transition-all duration-300 text-body-primary"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative group">
            <div className="p-2 rounded-full hover:bg-grey-100 transition-all duration-300">
              <img
                src={assets.cart_icon}
                className="w-5 min-w-5 group-hover:scale-110 transition-transform duration-300 filter brightness-75"
                alt="Cart"
              />
              {getCartCount() > 0 && (
                <p className="absolute -top-1 -right-1 w-5 h-5 text-center leading-5 bg-gradient-to-r from-grey-600 to-grey-800 text-white text-xs rounded-full animate-pulse-slow">
                  {getCartCount()}
                </p>
              )}
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setVisible(!visible)}
            className="md:hidden p-2 rounded-full hover:bg-grey-100 transition-all duration-300 cursor-pointer"
          >
            <img src={assets.menu_icon} className="w-5" alt="Menu" />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-grey-200 shadow-lg transition-all duration-300 md:hidden ${
            visible ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-6">
            <ul className="flex flex-col gap-4">
              <NavLink
                to="/"
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 hover:bg-grey-50 ${
                    isActive ? "bg-grey-100" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <p className={`font-semibold tracking-wide ${
                    isActive ? "text-grey-600" : "text-grey-800"
                  }`}>
                    HOME
                  </p>
                )}
              </NavLink>
              <NavLink
                to="/collection"
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 hover:bg-grey-50 ${
                    isActive ? "bg-grey-100" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <p className={`font-semibold tracking-wide ${
                    isActive ? "text-grey-600" : "text-grey-800"
                  }`}>
                    COLLECTION
                  </p>
                )}
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 hover:bg-grey-50 ${
                    isActive ? "bg-grey-100" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <p className={`font-semibold tracking-wide ${
                    isActive ? "text-grey-600" : "text-grey-800"
                  }`}>
                    ABOUT
                  </p>
                )}
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 hover:bg-grey-50 ${
                    isActive ? "bg-grey-100" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <p className={`font-semibold tracking-wide ${
                    isActive ? "text-grey-600" : "text-grey-800"
                  }`}>
                    CONTACT
                  </p>
                )}
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;