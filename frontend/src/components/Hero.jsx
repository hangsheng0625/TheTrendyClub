import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col sm:flex-row bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-full opacity-40 animate-pulse-slow"></div>

      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0 px-8 relative z-10">
        <div className="text-[#2d3748] max-w-lg animate-slideInLeft">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 md:w-16 h-[3px] bg-gradient-to-r from-amber-700 to-amber-900 rounded-full"></div>
            <p className="font-semibold text-sm md:text-base text-amber-800 tracking-wider uppercase">
              Discover Your Style
            </p>
          </div>

          <h1 className="prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-amber-900 font-extrabold">
            Elevate Your Wardrobe
          </h1>

          <p className="text-amber-900 text-lg mb-8 leading-relaxed font-medium">
            Step into a world of timeless fashion. Explore our handpicked selection of premium pieces designed for those who set trends, not follow them. Uncover the latest arrivals and redefine your everyday look with confidence.
          </p>

          <div className="flex items-center gap-4 group cursor-pointer">
            <button className="px-8 py-3 rounded-lg bg-amber-900 text-white font-semibold shadow-md hover:bg-amber-800 transition-colors duration-300 group-hover:shadow-2xl">
              Shop the Collection
            </button>
            <div className="w-12 md:w-16 h-[2px] bg-gradient-to-r from-amber-700 to-amber-900 rounded-full transform transition-all duration-300 group-hover:w-20"></div>
            <span className="text-2xl text-amber-900 transform transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>
      </div>

      {/* Hero right side */}
      <div className="w-full sm:w-1/2 relative flex items-center justify-center">
        <div className="relative animate-fadeInUp">
          {/* Floating elements around the image */}
          <div
            className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg opacity-80 animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-70 animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 animate-bounce"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Main image with hover effects */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
            <img
              className="w-full h-auto object-cover filter brightness-105 contrast-105"
              src={assets.hero_img}
              alt="Fashion Collection"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
            <p className="text-sm font-semibold text-gray-800">
              Trending Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
