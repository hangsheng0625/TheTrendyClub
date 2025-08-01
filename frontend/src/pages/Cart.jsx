import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { Trash2, ShoppingCart } from "lucide-react";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-t pt-8 sm:pt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-xl sm:text-2xl mb-8">
          <Title text1="YOUR" text2="CART" />
        </div>

        {cartData.length > 0 && (
          <>
            {/* Desktop Headers */}
            <div className="hidden sm:grid grid-cols-[2fr_1fr_100px_50px] items-center gap-6 mb-4 pb-3 border-b border-gray-200">
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                Product
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide text-center">
                Subtotal
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide text-center">
                Quantity
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide text-center">
                Remove
              </div>
            </div>
          </>
        )}

        <div className="space-y-4">
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            
            if (!productData) {
              return null; // Skip if product not found
            }

            return (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Mobile Layout */}
                <div className="flex flex-col sm:hidden gap-4">
                  <div className="flex gap-4">
                    <img
                      className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                      src={productData.image[0]}
                      alt={productData.name}
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-base mb-2">
                        {productData.name}
                      </p>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xl font-bold text-gray-900">
                          {currency}{productData.price}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border">
                          Size: {item.size}
                        </span>
                      </div>
                      <div className="text-lg font-semibold text-gray-600">
                        Subtotal: {currency}{(productData.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <label className="text-sm font-medium text-gray-700">Quantity:</label>
                      <input
                        onChange={(e) =>
                          e.target.value === "" || e.target.value === "0"
                            ? null
                            : updateQuantity(
                                item._id,
                                item.size,
                                Number(e.target.value)
                              )
                        }
                        className="border border-gray-300 rounded-lg px-3 py-2 w-20 text-center font-semibold"
                        type="number"
                        min={1}
                        defaultValue={item.quantity}
                      />
                    </div>
                    <button
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className="p-3 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:grid grid-cols-[2fr_1fr_100px_50px] items-center gap-6">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                      src={productData.image[0]}
                      alt={productData.name}
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-lg mb-2">
                        {productData.name}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-gray-900">
                          {currency}{productData.price}
                        </span>
                        <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full border">
                          {item.size}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-xl font-bold text-gray-600">
                      {currency}{(productData.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <input
                      onChange={(e) =>
                        e.target.value === "" || e.target.value === "0"
                          ? null
                          : updateQuantity(
                              item._id,
                              item.size,
                              Number(e.target.value)
                            )
                      }
                      className="border border-gray-300 rounded-lg px-3 py-2 w-20 text-center font-semibold"
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className="p-3 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {cartData.length === 0 && (
          <div className="text-center py-20">
            <div className="mb-6">
              <ShoppingCart className="w-32 h-32 mx-auto text-gray-300" />
            </div>
            <p className="text-gray-500 text-xl mb-6">Your cart is empty</p>
            <p className="text-gray-400 text-base mb-8">Discover amazing products in our collection</p>
            <button
              onClick={() => navigate("/collection")}
              className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
            >
              Continue Shopping
            </button>
          </div>
        )}

        {cartData.length > 0 && (
          <div className="mt-12 flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Items in cart:</span>
                    <span className="font-semibold">{cartData.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total quantity:</span>
                    <span className="font-semibold">
                      {cartData.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[450px]">
              <CartTotal />
              <div className="mt-6">
                <button
                  onClick={() => navigate("/place-order")}
                  className="w-full bg-gray-800 text-white px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-wide hover:bg-gray-700 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
