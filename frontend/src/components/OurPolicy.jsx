import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="my-20 px-4 sm:px-0">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
          Why Choose Us
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're committed to providing you with the best shopping experience
          possible
        </p>
      </div>

      {/* Policy Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
        <div className="group text-center p-8 card hover-lift">
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img
                src={assets.exchange_icon}
                className="w-10 h-10"
                alt="Exchange"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
          <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
            Easy Exchange Policy
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Not satisfied with your purchase? No worries! We offer a hassle-free
            exchange policy to ensure you get exactly what you love.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center text-indigo-600 font-semibold group-hover:gap-2 transition-all duration-300">
              Learn More
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </div>
        </div>

        <div className="group text-center p-8 card hover-lift">
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-100 to-red-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img
                src={assets.quality_icon}
                className="w-10 h-10"
                alt="Return"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">7</span>
            </div>
          </div>
          <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">
            7 Days Return Policy
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Shop with confidence! You have a full week to return any item for a
            complete refund. No questions asked, no hassle involved.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center text-pink-600 font-semibold group-hover:gap-2 transition-all duration-300">
              Learn More
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </div>
        </div>

        <div className="group text-center p-8 card hover-lift">
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img
                src={assets.support_img}
                className="w-10 h-10"
                alt="Support"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">24/7</span>
            </div>
          </div>
          <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
            Best Customer Support
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our dedicated support team is available 24/7 to help you with any
            questions or concerns. Your satisfaction is our top priority.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all duration-300">
              Contact Us
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="mt-16 text-center">
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span className="text-sm text-gray-600">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚚</span>
            <span className="text-sm text-gray-600">Free Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="text-sm text-gray-600">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span className="text-sm text-gray-600">Award Winning</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
