import React, { useCallback, useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));

    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, [products]);

  return (
    <div className="my-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-grey-50 via-white to-grey-100 py-12 sm:py-16 rounded-3xl max-w-8xl mx-auto">
      {/* Section Header with enhanced styling */}
      <div
        className={`text-center py-8 sm:py-12 animate-fadeInUp ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mb-4 sm:mb-6">
          <Title text1={"BEST"} text2={"SELLERS"} />
        </div>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-grey-800 leading-relaxed mb-6 sm:mb-8 px-4">
          Discover the pieces that define style and excellence. These customer
          favorites showcase our commitment to quality, comfort, and
          contemporary fashion that speaks to modern trendsetters.
        </p>

        {/* Stats bar */}
        <div className="flex justify-center gap-6 sm:gap-8 lg:gap-12 text-center mb-12">
          <div className="flex flex-col text-center">
            <span className="text-2xl sm:text-3xl font-bold text-grey-800">10K+</span>
            <span className="text-xs sm:text-sm text-grey-600">Happy Customers</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="text-2xl sm:text-3xl font-bold text-grey-800">50+</span>
            <span className="text-xs sm:text-sm text-grey-600">Premium Products</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="text-2xl sm:text-3xl font-bold text-grey-800">4.9</span>
            <span className="text-xs sm:text-sm text-grey-600">Customer Rating</span>
          </div>
        </div>
      </div>

      {/* Products Grid with staggered animation */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 max-w-7xl mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {bestSeller.map((item, index) => (
          <div
            key={index}
            className="animate-fadeInUp relative group"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Bestseller badge */}
            <div className="absolute -top-1 -left-1 z-10 bg-gradient-to-r from-grey-600 to-grey-800 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-200">
              #{index + 1}
            </div>
            <div className="transform transition-transform duration-300 hover:scale-105">
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
