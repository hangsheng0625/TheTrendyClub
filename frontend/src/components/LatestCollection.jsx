import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [products]);

  return (
    <div className="my-20 px-4 sm:px-0">
      {/* Section Header */}
      <div
        className={`text-center py-12 animate-fadeInUp ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mb-6">
          <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        </div>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
          Discover our newest arrivals, carefully curated to bring you the
          latest trends in fashion. Each piece is selected for its unique style
          and exceptional quality.
        </p>

        {/* Decorative elements */}
        <div className="flex justify-center mt-8 gap-2">
          <div
            className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>

      {/* Products Grid */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {latestProducts.map((item, index) => (
          <div
            key={index}
            className="animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
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
        <button className="btn-primary mx-auto">View All Collections</button>
      </div>
    </div>
  );
};

export default LatestCollection;
