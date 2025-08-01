import React from "react";
import { assets } from "../assets/assets";
import { Lock, Truck, Star, Trophy } from "lucide-react";

const OurPolicy = () => {
  return (
    <div className="my-20 px-4 sm:px-0">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-grey-800 mb-4">
          Why Choose Us
        </h2>
        <p className="text-lg text-grey-600 max-w-2xl mx-auto">
          Experience fashion excellence with our commitment to quality, service,
          and customer satisfaction that sets us apart
        </p>
      </div>

      {/* Policy Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
        <div className="group text-center p-8 card hover-lift">
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-grey-100 to-grey-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img
                src={assets.exchange_icon}
                className="w-10 h-10 filter brightness-75"
                alt="Exchange"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-grey-600 to-grey-800 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">•</span>
            </div>
          </div>
          <h3 className="font-bold text-xl text-grey-800 mb-3 group-hover:text-grey-700 transition-colors duration-300">
            Easy Exchange Policy
          </h3>
          <p className="text-grey-600 leading-relaxed">
            Experience peace of mind with our flexible exchange policy. Find the
            perfect fit and style with our customer-first approach to
            satisfaction.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center text-grey-700 font-semibold group-hover:gap-2 transition-all duration-300">
              Learn More
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </div>
        </div>

        <div className="group text-center p-8 card hover-lift">
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-grey-100 to-grey-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img
                src={assets.quality_icon}
                className="w-10 h-10 filter brightness-75"
                alt="Return"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-grey-600 to-grey-800 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">7</span>
            </div>
          </div>
          <h3 className="font-bold text-xl text-grey-800 mb-3 group-hover:text-grey-700 transition-colors duration-300">
            7 Days Return Policy
          </h3>
          <p className="text-grey-600 leading-relaxed">
            Shop with complete confidence knowing you have seven full days to
            ensure your purchase meets your expectations. Quality and
            satisfaction guaranteed.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center text-grey-700 font-semibold group-hover:gap-2 transition-all duration-300">
              Learn More
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </div>
        </div>

        <div className="group text-center p-8 card hover-lift">
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-grey-100 to-grey-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <img
                src={assets.support_img}
                className="w-10 h-10 filter brightness-75"
                alt="Support"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-grey-600 to-grey-800 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">24/7</span>
            </div>
          </div>
          <h3 className="font-bold text-xl text-grey-800 mb-3 group-hover:text-grey-700 transition-colors duration-300">
            Premium Customer Support
          </h3>
          <p className="text-grey-600 leading-relaxed">
            Experience unparalleled customer service with our dedicated support
            team available around the clock. Your style journey deserves
            exceptional care.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center text-grey-700 font-semibold group-hover:gap-2 transition-all duration-300">
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
            <Lock className="w-6 h-6" />
            <span className="text-sm text-grey-600">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-6 h-6" />
            <span className="text-sm text-grey-600">Free Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6" />
            <span className="text-sm text-grey-600">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6" />
            <span className="text-sm text-grey-600">Award Winning</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
