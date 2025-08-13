import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { Plus, List, Package, LogOut, User } from "lucide-react";

const Sidebar = ({ setToken, isOpen, setIsOpen }) => {
  const menuItems = [
    {
      path: "/add",
      icon: Plus,
      label: "Add Items",
      description: "Add new products",
    },
    {
      path: "/list",
      icon: List,
      label: "List Items",
      description: "Manage products",
    },
    {
      path: "/orders",
      icon: Package,
      label: "Orders",
      description: "Track orders",
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static top-0 left-0 h-full lg:h-screen
        w-56 lg:w-60 xl:w-64
        bg-white/95 backdrop-blur-sm border-r border-gray-200 shadow-lg lg:shadow-sm
        transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Admin Info Header */}
          <div className="p-4 lg:p-6 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">Admin</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-gray-800">
              Navigation
            </h3>
            <p className="text-xs text-gray-500 mt-1">Admin Dashboard</p>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 p-3 lg:p-4">
            <div className="space-y-1 lg:space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `
                      flex items-center gap-3 px-3 py-2.5 lg:px-4 lg:py-3 rounded-lg transition-all duration-200
                      ${
                        isActive
                          ? "bg-gray-100 text-gray-900 border-l-4 border-gray-800"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-gray-500 hidden lg:block">
                        {item.description}
                      </p>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </nav>

          {/* Footer with Logout */}
          <div className="p-3 lg:p-4 border-t border-gray-100 space-y-3">
            {/* Logout Button */}
            <button
              onClick={() => setToken("")}
              className="w-full flex items-center gap-3 px-3 py-2.5 lg:px-4 lg:py-3 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 hover:text-red-800 transition-all duration-200 font-medium"
            >
              <LogOut className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
              <span className="text-sm">Logout</span>
            </button>

            {/* Version Info */}
            <div className="text-xs text-gray-500 text-center">
              <p>Admin Panel v1.0</p>
              <p className="mt-1 hidden lg:block">© 2025 Forever</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
