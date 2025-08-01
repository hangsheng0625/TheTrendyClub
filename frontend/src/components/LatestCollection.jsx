import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";
    

const LatestCollection = () => {
  const navigate = useNavigate();

  const handleShopCollection = () => {
    navigate("/collection");
  };

  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [products]);

  return (
    <div className="my-20 bg-gradient-to-br from-white via-grey-50 to-grey-100 py-16 rounded-3xl w-full">
      {/* Section Header */}
      <div
        className={`text-center py-12 animate-fadeInUp ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mb-6">
          <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        </div>
        <p className="max-w-2xl mx-auto text-lg text-grey-700 leading-relaxed mb-8 text-body-primary">
          Discover our newest arrivals, carefully curated to bring you the
          latest trends in fashion. Each piece is selected for its unique style
          and exceptional quality.
        </p>
        {/* Animated loading dots */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <div
            className="w-2 h-2 bg-grey-600 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-2 h-2 bg-grey-800 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-grey-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>

      {/* Products Grid */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
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

      {/* View All Button */}
      <div className="text-center mt-12">
        <button
          onClick={handleShopCollection}
          className="bg-grey-800 hover:bg-grey-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          View All Collections
        </button>
      </div>
    </div>
  );
};

export default LatestCollection;
