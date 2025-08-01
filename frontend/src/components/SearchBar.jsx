import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";
import { User, Users, Baby } from "lucide-react";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch ? (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 animate-fadeInUp">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl mx-4 animate-slideInLeft">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gradient">Search Products</h2>
          <button
            onClick={() => setShowSearch(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <img className="w-5 h-5" src={assets.cross_icon} alt="Close" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative mb-6">
          <div className="flex items-center bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-4 focus-within:border-indigo-500 focus-within:bg-white transition-all duration-300">
            <img
              className="w-5 h-5 text-gray-400 mr-3"
              src={assets.search_icon}
              alt="Search"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 outline-none bg-transparent text-lg placeholder-gray-500"
              type="text"
              placeholder="Search for clothes, brands, categories..."
              autoFocus
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="ml-2 p-1 hover:bg-gray-200 rounded-full transition-colors duration-200"
              >
                <span className="text-gray-400 text-sm">✕</span>
              </button>
            )}
          </div>
        </div>

        {/* Search Suggestions */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-3">
              Popular Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "T-shirts",
                "Jeans",
                "Dresses",
                "Sneakers",
                "Jackets",
                "Accessories",
              ].map((term, index) => (
                <button
                  key={index}
                  onClick={() => setSearch(term)}
                  className="px-4 py-2 bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 text-gray-700 text-sm rounded-full transition-all duration-200 hover:scale-105"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-3">
              Categories
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "Men", icon: User },
                { name: "Women", icon: Users },
                { name: "Kids", icon: Baby },
              ].map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSearch(category.name)}
                  className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 hover:from-indigo-50 hover:to-purple-50 border border-gray-200 hover:border-indigo-300 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <div className="text-2xl mb-1">
                    <category.icon className="w-6 h-6 mx-auto text-gray-600" />
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    {category.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
          <p className="text-sm text-gray-500">Press Enter to search</p>
          <div className="flex gap-2">
            <button
              onClick={() => setShowSearch(false)}
              className="btn-secondary text-sm py-2 px-4"
            >
              Cancel
            </button>
            <button
              onClick={() => setShowSearch(false)}
              className="btn-primary text-sm py-2 px-4"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default SearchBar;
