import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  const handleShopCollection = () => {
    navigate('/collection');
  };

  return (
    <div className="relative min-h-[70vh] sm:min-h-[75vh] flex flex-col sm:flex-row bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden w-full">
      {/* Decorative Background Circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-gray-300/30 to-gray-400/30 rounded-full opacity-50 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-gray-200/40 to-gray-300/40 rounded-full opacity-60 animate-pulse-slow"></div>

      {/* Text Content */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0 px-6 lg:px-16 relative z-10">
        <div className="text-gray-800 max-w-lg animate-slideInLeft">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 md:w-16 h-[3px] bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"></div>
            <p className="font-semibold text-sm md:text-base text-gray-600 tracking-wider uppercase font-inter">
              Discover Your Style
            </p>
          </div>

          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 font-extrabold">
            Elevate Your Wardrobe
          </h1>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
            Step into a world of timeless fashion. Explore our handpicked
            selection of premium pieces designed for those who set trends—not
            follow them. Uncover the latest arrivals and redefine your everyday
            look with confidence.
          </p>

          <div className="flex items-center gap-4 group cursor-pointer">
            <button 
              onClick={handleShopCollection}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold shadow-md hover:from-gray-700 hover:to-gray-900 transition-all duration-300 group-hover:shadow-2xl"
            >
              Shop the Collection
            </button>
            <div className="w-12 md:w-16 h-[2px] bg-gradient-to-r from-gray-600 to-gray-800 rounded-full transform transition-all duration-300 group-hover:w-20"></div>
            <span className="text-2xl text-gray-800 transform transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>
      </div>

      {/* Image Content */}
      <div className="w-full sm:w-1/2 relative flex items-center justify-center p-6 sm:p-8">
        <div className="relative max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] w-full animate-fadeInUp">
          {/* Floating decorations */}
          <div
            className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg opacity-80 animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-70 animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 -left-4 w-5 h-5 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 animate-bounce"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift aspect-[3/4]">
            <img
              className="w-full h-full object-cover filter brightness-105 contrast-105"
              src={assets.hero_img}
              alt="Fashion Collection"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Badge */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-lg border border-white/20">
            <p className="text-xs font-semibold text-gray-800">Trending Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
