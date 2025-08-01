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
    <div className="my-20 px-4 sm:px-0 bg-gradient-to-br from-grey-50 via-white to-grey-100 py-16 rounded-3xl">
      {/* Section Header with enhanced styling */}
      <div
        className={`text-center py-12 animate-fadeInUp ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mb-6">
          <Title text1={"BEST"} text2={"SELLERS"} />
        </div>
        <p className="max-w-2xl mx-auto text-lg text-grey-800 leading-relaxed mb-8">
          Discover the pieces that define style and excellence. These customer
          favorites showcase our commitment to quality, comfort, and
          contemporary fashion that speaks to modern trendsetters.
        </p>

        {/* Stats bar */}
        <div className="flex justify-center gap-8 text-center mb-8">
          <div className="flex flex-col text-center">
            <span className="text-2xl font-bold text-grey-800">10K+</span>
            <span className="text-sm text-grey-600">Happy Customers</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="text-2xl font-bold text-grey-800">50+</span>
            <span className="text-sm text-grey-600">Premium Products</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="text-2xl font-bold text-grey-800">4.9</span>
            <span className="text-sm text-grey-600">Customer Rating</span>
          </div>
        </div>
      </div>

      {/* Products Grid with staggered animation */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {bestSeller.map((item, index) => (
          <div
            key={index}
            className="animate-fadeInUp relative"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Bestseller badge */}
            <div className="absolute -top-2 -left-2 z-10 bg-gradient-to-r from-grey-600 to-grey-800 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              #{index + 1}
            </div>
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div
        className={`text-center mt-16 animate-fadeInUp ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary">Shop Bestsellers</button>
          <button className="btn-secondary">Get Notified</button>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
