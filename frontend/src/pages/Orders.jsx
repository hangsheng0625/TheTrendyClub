import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshSingleOrder = async (dateToMatch) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success && Array.isArray(response.data.orders)) {
        let refreshedItems = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            refreshedItems.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });
          });
        });

        const updatedList = orderData.map((item) => {
          const match = refreshedItems.find(
            (refreshed) => refreshed.date === item.date
          );
          return match || item;
        });

        setOrderData(updatedList);
      } else {
        setError("Failed to refresh order.");
      }
    } catch (err) {
      setError("Error refreshing order: " + err.message);
    }
  };


  const loadOrderData = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!token) {
        setLoading(false);
        return;
      }

      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        if (!Array.isArray(response.data.orders)) {
          setError('Invalid orders format.');
          return;
        }

        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          if (!Array.isArray(order.items)) return;

          order.items.forEach((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });
          });
        });

        setOrderData(allOrdersItem.reverse());
      } else {
        setError(response.data.message || 'Failed to load orders');
      }
    } catch (err) {
      setError('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  const statusColor = {
    'Order Placed': 'bg-green-500',
    'Packing': 'bg-yellow-500',
    'Shipped': 'bg-blue-500',
    'Out for delivery': 'bg-purple-500',
    'Delivered': 'bg-green-600',
  };

  const statusProgress = {
    'Order Placed': 'w-1/5',
    'Packing': 'w-2/5',
    'Shipped': 'w-3/5',
    'Out for delivery': 'w-4/5',
    'Delivered': 'w-full',
  };

  if (loading) {
    return (
      <div className='border-t pt-16'>
        <Title text1='MY' text2='ORDERS' />
        <div className='py-12 text-center text-gray-500 text-lg'>Loading orders...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='border-t pt-16'>
        <Title text1='MY' text2='ORDERS' />
        <div className='py-12 text-center text-red-600 text-lg'>{error}</div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 py-10 px-4 sm:px-8'>
      <div className='max-w-5xl mx-auto'>
        <Title text1='MY' text2='ORDERS' />
        {orderData.length === 0 ? (
          <div className='text-center py-20 text-gray-500'>
            <p className='text-xl font-medium'>No orders found</p>
            <p className='text-sm mt-2'>Your orders will show up here once placed.</p>
          </div>
        ) : (
          <div className='space-y-6 mt-8'>
            {orderData.map((item, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-xl shadow hover:shadow-md transition'
              >
                <div className='flex flex-col md:flex-row gap-6'>
                  {/* Product Details */}
                  <div className='flex gap-4 flex-1'>
                    <img
                      src={item.image[0]}
                      alt={item.name}
                      className='w-24 h-24 object-cover rounded-lg border'
                    />
                    <div>
                      <h3 className='font-semibold text-lg text-gray-800 mb-1'>
                        {item.name}
                      </h3>
                      <div className='text-sm text-gray-600 space-y-1'>
                        <p>
                          <span className='font-medium'>Price:</span> {currency}
                          {item.price}
                        </p>
                        <p>
                          <span className='font-medium'>Qty:</span> {item.quantity}
                        </p>
                        <p>
                          <span className='font-medium'>Size:</span> {item.size}
                        </p>
                        <p>
                          <span className='font-medium'>Payment:</span> {item.paymentMethod}
                        </p>
                        <p>
                          <span className='font-medium'>Ordered on:</span>{' '}
                          {new Date(item.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Status & Button */}
                  <div className='flex flex-col justify-between md:items-end'>
                    <div className='flex items-center gap-2'>
                      <span
                        className={`h-3 w-3 rounded-full ${statusColor[item.status] || 'bg-gray-400'}`}
                      ></span>
                      <span className='text-sm font-medium text-gray-700'>
                        {item.status}
                      </span>
                    </div>
                    <button onClick={() => refreshSingleOrder(item.date)} className='mt-4 md:mt-0 bg-gray-900 hover:bg-gray-800 text-white text-sm px-5 py-2 rounded-md transition'>
                      Track Order
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                <div className='mt-5'>
                  <div className='flex justify-between text-xs text-gray-400 mb-1'>
                    <span>Order Placed</span>
                    <span>Packing</span>
                    <span>Shipped</span>
                    <span>Out for delivery</span>
                    <span>Delivered</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div
                      className={`h-2 rounded-full ${statusColor[item.status] || 'bg-gray-400'} ${statusProgress[item.status] || 'w-1/5'}`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
