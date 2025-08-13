import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Order Placed":
        return "bg-blue-100 text-blue-800";
      case "Packing":
        return "bg-yellow-100 text-yellow-800";
      case "Shipped":
        return "bg-purple-100 text-purple-800";
      case "Out for delivery":
        return "bg-orange-100 text-orange-800";
      case "Delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-title text-2xl sm:text-3xl mb-2">
          Order Management
        </h1>
        <p className="text-body-secondary">
          Manage and track all customer orders from here.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="admin-card p-8 sm:p-12 text-center">
          <img
            src={assets.parcel_icon}
            alt="No orders"
            className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50"
          />
          <h3 className="text-subtitle text-lg sm:text-xl mb-2">
            No Orders Yet
          </h3>
          <p className="text-body-secondary text-sm sm:text-base">
            Orders will appear here once customers start placing them.
          </p>
        </div>
      ) : (
        <div className="space-y-4 sm:space-y-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="admin-card p-4 sm:p-6 hover:shadow-lg transition-shadow"
            >
              {/* Order Header */}
              <div className="flex flex-col gap-4 mb-4 sm:mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-start sm:items-center gap-3">
                  <img
                    src={assets.parcel_icon}
                    alt="Order"
                    className="w-6 h-6 sm:w-8 sm:h-8 mt-1 sm:mt-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-subtitle text-base sm:text-lg">
                      Order #{order._id.slice(-8)}
                    </h3>
                    <p className="text-body-secondary text-xs sm:text-sm">
                      {new Date(order.date).toLocaleDateString("en-MY", {
                        timeZone: "Asia/Kuala_Lumpur",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                  <select
                    onChange={(event) => statusHandler(event, order._id)}
                    value={order.status}
                    className="w-full sm:w-auto border border-gray-300 px-3 py-2 rounded-lg text-xs sm:text-sm focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
                {/* Product Items */}
                <div className="lg:col-span-2">
                  <h4 className="text-body-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                    Ordered Items ({order.items.length})
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    {order.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-12 h-12 sm:w-20 sm:h-20 bg-white rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                          {item.image && item.image.length > 0 ? (
                            <img
                              src={item.image[0]}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = assets.upload_area;
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                              <span className="text-gray-400 text-xs">
                                No Image
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h5 className="text-body-primary font-medium text-sm sm:text-base truncate">
                            {item.name}
                          </h5>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-body-secondary mt-1">
                            <span>Size: {item.size}</span>
                            <span>Qty: {item.quantity}</span>
                            <span className="font-medium text-body-primary">
                              {currency}
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer & Order Details */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Customer Info */}
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <h4 className="text-body-primary font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      Customer Details
                    </h4>
                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      <p>
                        <span className="font-medium">Name:</span>{" "}
                        {order.address.firstName} {order.address.lastName}
                      </p>
                      <p>
                        <span className="font-medium">Phone:</span>{" "}
                        {order.address.phone}
                      </p>
                      <p>
                        <span className="font-medium">Address:</span>
                      </p>
                      <p className="text-body-secondary pl-2 sm:pl-4 leading-relaxed">
                        {order.address.street}
                        <br />
                        {order.address.city}, {order.address.state}
                        <br />
                        {order.address.country} {order.address.zipcode}
                      </p>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <h4 className="text-body-primary font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                      Order Summary
                    </h4>
                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      <div className="flex justify-between">
                        <span>Payment Method:</span>
                        <span className="font-medium">
                          {order.paymentMethod}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payment Status:</span>
                        <span
                          className={`font-medium ${
                            order.payment ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {order.payment ? "Paid" : "Pending"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <span className="font-medium">Total Amount:</span>
                        <span className="text-base sm:text-lg font-bold text-body-primary">
                          {currency}
                          {order.amount}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
