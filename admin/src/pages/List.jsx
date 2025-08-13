import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-title text-2xl sm:text-3xl mb-2">
          All Products List
        </h1>
        <p className="text-body-secondary">
          Manage your product inventory from here.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {/* ---------------------- List Table Title -------------------------- */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 border bg-gray-100 text-sm font-medium rounded-lg">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* ------------------------ Product List --------------------------- */}
        <div className="space-y-2 md:space-y-0">
          {list.map((item, index) => (
            <div className="admin-card p-4 md:p-2" key={index}>
              {/* Mobile Layout */}
              <div className="md:hidden space-y-3">
                <div className="flex items-start gap-4">
                  <img
                    className="w-16 h-16 object-cover rounded-lg border border-gray-200 flex-shrink-0"
                    src={item.image[0]}
                    alt=""
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-body-primary truncate">
                      {item.name}
                    </h3>
                    <p className="text-sm text-body-secondary">
                      {item.category}
                    </p>
                    <p className="text-lg font-semibold text-body-primary">
                      {currency}
                      {item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => removeProduct(item._id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors text-lg font-bold"
                    aria-label="Delete product"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-2 px-2 text-sm">
                <img
                  className="w-12 h-12 object-cover rounded-lg border border-gray-200"
                  src={item.image[0]}
                  alt=""
                />
                <p className="font-medium text-body-primary">{item.name}</p>
                <p className="text-body-secondary">{item.category}</p>
                <p className="font-semibold text-body-primary">
                  {currency}
                  {item.price}
                </p>
                <button
                  onClick={() => removeProduct(item._id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded text-center cursor-pointer font-bold transition-colors"
                  aria-label="Delete product"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
