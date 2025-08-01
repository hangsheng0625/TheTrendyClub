import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
// import orderModel from "../../../backend/models/orderModel.js";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  // const initPay = (order) => {
  //   const options = {
  //     key: import.meta.env.VITE_RAZORPAY_KEY_ID,
  //     amount: order.amout,
  //     currency: order.currency,
  //     name: "Order Payment",
  //     description: "Order Payment",
  //     order_id: order.id,
  //     receipt: order.receipt,
  //     handler: async (response) => {
  //       console.log(response)
  //       try {
  //         const {data} = await axios.post(
  //           backendUrl + "/api/order/verifyRazorpay",
  //           response,
  //           { headers: { token } }
  //         );
  //         if (data.success) {
  //           setCartItems({});
  //           navigate("/orders");
  //         }

  //       } catch (error) {
  //         console.log(error);
  //         toast.error(error.message);

  //       }
  //     }
  //   }
  //   const razorpay = new window.Razorpay(options);
  //   razorpay.open();
  // }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        // api calls for COD
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        case "stripe":
          const stripeResponse = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            { headers: { token } }
          );
          if (stripeResponse.data.success) {
            const { session_url } = stripeResponse.data;
            window.location.replace(session_url);
          } else {
            toast.error(stripeResponse.data.message);
          }
          break;

        // case "razorpay":
        //   const razorpayResponse = await axios.post(
        //     backendUrl + "/api/order/razorpay",
        //     orderData,
        //     { headers: { token } }
        //   );
        //   if (razorpayResponse.data.success) {
        //     initPay(razorpayResponse.data.order);
        //   }

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-[80vh] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] animate-fadeIn">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col lg:flex-row justify-between gap-8 pt-8 sm:pt-14"
      >
        {/* {------------------ Left Side ------------------} */}
        <div className="flex flex-col gap-4 w-full lg:max-w-[500px] animate-slideInLeft">
          <div className="text-xl sm:text-2xl mb-6">
            <Title text1={"DELIVERY"} text2={"INFORMATION"}></Title>
          </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            type="text"
            placeholder="First name"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          type="email"
          placeholder="Email address"
        />
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          type="text"
          placeholder="Street"
        />

        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            type="text"
            placeholder="City"
          />
          <input
            required
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            type="text"
            placeholder="State"
          />
        </div>

        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            type="number"
            placeholder="Zipcode"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            type="text"
            placeholder="Country"
          />
        </div>

        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* {----------------------------- Right Side ----------------------} */}
      <div className="w-full lg:max-w-[400px] animate-slideInRight">
        <div className="sticky top-8">
          <CartTotal></CartTotal>
        </div>

        <div className="mt-8">
          <Title text1={"PAYMENT"} text2={"METHOD"}></Title>
          <div className="flex gap-3 flex-col sm:flex-row lg:flex-col mt-4">
            {/* {------------------------ Display payment method -----------------------------} */}
            <div
              onClick={() => setMethod("stripe")}
              className={`flex items-center gap-3 border-2 p-3 px-4 cursor-pointer rounded-lg transition-all ${
                method === "stripe" 
                  ? "border-green-400 bg-green-50" 
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border-2 rounded-full ${
                  method === "stripe" ? "bg-green-400 border-green-400" : "border-gray-300"
                }`}
              ></p>
              <img className="h-5 mx-2" src={assets.stripe_logo} alt="Stripe" />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className={`flex items-center gap-3 border-2 p-3 px-4 cursor-pointer rounded-lg transition-all ${
                method === "cod" 
                  ? "border-green-400 bg-green-50" 
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <p
                className={`min-w-3.5 h-3.5 border-2 rounded-full ${
                  method === "cod" ? "bg-green-400 border-green-400" : "border-gray-300"
                }`}
              ></p>
              <p className="text-gray-700 text-sm font-medium mx-2">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-8">
          <button
            type="submit"
            className="w-full bg-black text-white py-3 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 uppercase tracking-wide"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default PlaceOrder;
