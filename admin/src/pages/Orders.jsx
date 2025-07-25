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
      const response = await axios.post(backendUrl + '/api/order/status', {orderId, status:event.target.value}, {headers:{token}})
      if (response.data.success){
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message)
      
    }
  }

  

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">Orders</h3>
      <div className="space-y-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="relative border p-4 rounded-lg shadow-md bg-white"
          >
            {/* Status Dropdown - Top Right */}
            <div className="absolute top-4 right-4">
              <select onChange={(event)=>statusHandler(event, order._id)} className="border px-2 py-1 rounded text-sm">
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>

            <div className="flex items-start gap-4">
              <img
                src={assets.parcel_icon}
                alt="Parcel"
                className="w-10 h-10 mt-1"
              />

              <div className="text-sm space-y-1">
                <p>
                  <strong>Items:</strong> {order.items.length}
                </p>
                <div className="pl-4">
                  {order.items.map((item, idx) => (
                    <p key={idx}>
                      {item.name} x {item.quantity}{" "}
                      <span className="text-gray-500">({item.size})</span>
                      {idx !== order.items.length - 1 && ","}
                    </p>
                  ))}
                </div>

                <p>
                  <strong>Name:</strong> {order.address.firstName}{" "}
                  {order.address.lastName}
                </p>
                <p>
                  <strong>Address:</strong> {order.address.street},{" "}
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </p>
                <p>
                  <strong>Phone:</strong> {order.address.phone}
                </p>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
                <p>
                  <strong>Payment:</strong>{" "}
                  {order.payment ? "Done" : "Pending"}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(order.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>
                    {currency} {order.amount}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
