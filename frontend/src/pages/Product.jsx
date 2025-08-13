import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { Star } from "lucide-react";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-6 sm:pt-10 transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] animate-fadeIn">
      {/* {------------Product Data-------------} */}
      <div className="flex gap-6 sm:gap-12 flex-col lg:flex-row">
        {/* {----------Product Images------------} */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row animate-slideInLeft">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border rounded-lg hover:border-gray-400 transition-colors"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto rounded-lg" src={image} alt="" />
          </div>
        </div>

        {/* {-------------Product Information-------------} */}
        <div className="flex-1 mt-6 lg:mt-0 animate-slideInRight">
          <h1 className="font-medium text-xl sm:text-2xl mt-2">
            {productData.name}
          </h1>

          <div className="flex items-center gap-1 mt-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <Star className="w-4 h-4 text-gray-300" />
            <p className="pl-2 text-sm text-gray-600">(122)</p>
          </div>
          <p className="mt-4 text-2xl sm:text-3xl font-medium">
            {currency}
            {productData.price}
          </p>

          <p className="mt-4 text-gray-500 text-sm sm:text-base md:w-4/5 leading-relaxed">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-6 sm:my-8">
            <p className="font-medium">Select Size</p>

            <div className="flex gap-2 flex-wrap">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 rounded-md transition-colors hover:bg-gray-200 ${
                    item === size
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="w-full sm:w-auto bg-black text-white px-8 py-3 text-sm rounded-md hover:bg-gray-800 transition-colors active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-6 sm:mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-4 sm:mt-5 flex flex-col gap-2">
            <p>✓ 100% Original product.</p>
            <p>✓ Cash on delivery is available on this product.</p>
            <p>✓ Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* {Description and Review Section} */}
      <div className="mt-12 sm:mt-20">
        <div className="flex">
          <b className="border px-3 sm:px-5 py-3 text-sm bg-white">
            Description
          </b>
          <p className="border px-3 sm:px-5 py-3 text-sm bg-gray-50 text-gray-600">
            Reviews (122)
          </p>
        </div>

        <div className="flex flex-col gap-4 border px-4 sm:px-6 py-4 sm:py-6 text-sm text-gray-500 bg-gray-50">
          <p className="leading-relaxed">
            This is a high-quality product made from premium materials. It
            features excellent craftsmanship and attention to detail that
            ensures durability and comfort.
          </p>

          <p className="leading-relaxed">
            Perfect for everyday wear with a modern design that complements any
            style. Easy to care for and maintain, making it a great addition to
            your wardrobe.
          </p>
        </div>
      </div>

      {/* ---------------- {Display related products} -------------------*/}
      <div className="mt-12 sm:mt-16">
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        ></RelatedProducts>
      </div>
    </div>
  ) : (
    <div className="opacity-0"> </div>
  );
};

export default Product;
