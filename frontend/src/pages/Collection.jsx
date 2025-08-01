import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [isLoading, setIsLoading] = useState(true);

  // Toggle filter checkboxes
  const toggleItemInArray = (item, array, setter) => {
    setter(
      array.includes(item)
        ? array.filter((el) => el !== item)
        : [...array, item]
    );
  };

  // Filtering logic
  const applyFilter = () => {
    let result = [...products];

    if (category.length) {
      result = result.filter((item) => category.includes(item.category));
    }

    if (subCategory.length) {
      result = result.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (showSearch && search) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(result);
    setIsLoading(false);
  };

  // Sorting logic
  const applySort = () => {
    const sorted = [...filteredProducts];
    if (sortType === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sorted);
  };

  useEffect(() => {
    if (products && products.length > 0) {
      applyFilter();
    }
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      applySort();
    }
  }, [sortType]);

  // Initialize products when component mounts or products change
  useEffect(() => {
    if (products && products.length > 0 && filteredProducts.length === 0 && category.length === 0 && subCategory.length === 0) {
      setFilteredProducts([...products]);
      setIsLoading(false);
    }
  }, [products]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 py-10 border-t max-w-7xl mx-auto px-4">
      {/* Filter Sidebar */}
      <aside className="w-full sm:w-64">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center justify-center gap-2 text-lg font-medium sm:hidden w-full py-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 transition-transform ${
              showFilter ? "rotate-90" : ""
            }`}
            alt=""
          />
        </button>

        <div
          className={`mt-6 space-y-6 ${
            showFilter ? "block" : "hidden sm:block"
          }`}
        >
          {/* Category Filter */}
          <FilterGroup
            title="CATEGORIES"
            options={["Men", "Women", "Kids"]}
            selected={category}
            onToggle={(value) => toggleItemInArray(value, category, setCategory)}
          />

          {/* SubCategory Filter */}
          <FilterGroup
            title="TYPE"
            options={["Topwear", "Bottomwear", "Winterwear"]}
            selected={subCategory}
            onToggle={(value) =>
              toggleItemInArray(value, subCategory, setSubCategory)
            }
          />
        </div>
      </aside>

      {/* Product Grid */}
      <main className="flex-1">
        {/* Title & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="text-center sm:text-left">
            <Title text1="ALL" text2="COLLECTIONS" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 font-medium">Sort by:</span>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white shadow-sm min-w-[140px]"
            >
              <option value="relevant">Relevant</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {isLoading ? (
            <div className="col-span-full flex justify-center items-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
                <p className="text-gray-500">Loading products...</p>
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductItem
                key={item._id}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-lg mb-2">No products match your filters.</p>
              <p className="text-gray-400 text-sm">Try adjusting your search criteria or browse all products.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Collection;

/**
 * Reusable Filter Group component
 */
const FilterGroup = ({ title, options, selected, onToggle }) => (
  <div className="border border-gray-200 p-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
    <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-800 text-center border-b border-gray-100 pb-2">
      {title}
    </p>
    <div className="flex flex-col gap-3 text-sm text-gray-600">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-3 cursor-pointer hover:text-gray-800 transition-colors p-1 rounded hover:bg-gray-50">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500 focus:ring-2"
            value={option}
            checked={selected.includes(option)}
            onChange={() => onToggle(option)}
          />
          <span className="font-medium">{option}</span>
        </label>
      ))}
    </div>
  </div>
);
