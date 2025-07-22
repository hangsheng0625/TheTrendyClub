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
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">My Orders</h3>

      {orders.length === 0 ? (
        <p className="text-gray-500 text-center">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-md p-6 bg-white hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <img src={assets.parcel_icon} alt="Parcel" className="w-6 h-6 mr-2" />
                <h4 className="font-medium text-lg text-gray-700">
                  Order #{index + 1}
                </h4>
              </div>

              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Items:</strong> {order.items.length}</p>

                <ul className="pl-5 list-disc text-gray-600">
                  {order.items.map((item, idx) => (
                    <li key={idx}>
                      {item.name} x {item.quantity} <span className="text-gray-500">({item.size})</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-2"><strong>Name:</strong> {order.address.firstName} {order.address.lastName}</p>
                <p><strong>Address:</strong> {order.address.street}, {order.address.city}, {order.address.state}, {order.address.country} - {order.address.zipcode}</p>
                <p><strong>Phone:</strong> {order.address.phone}</p>
                <p><strong>Method:</strong> {order.paymentMethod}</p>
                <p><strong>Payment:</strong> {order.payment ? "✅ Done" : "⏳ Pending"}</p>
                <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                <p><strong>Amount:</strong> {currency} {order.amount}</p>

                <div className="mt-2">
                  <label htmlFor={`status-${index}`} className="mr-2 font-medium">Status:</label>
                  <select
                    id={`status-${index}`}
                    className="border rounded px-2 py-1 text-sm"
                    defaultValue={order.status || "Order Placed"}
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
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
