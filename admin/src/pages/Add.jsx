import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}})

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-title text-2xl sm:text-3xl mb-2">Add New Product</h1>
        <p className="text-body-secondary text-sm sm:text-base">Fill in the product details below to add a new item to your inventory.</p>
      </div>

      <form onSubmit={onSubmitHandler} className='flex flex-col w-full gap-4 sm:gap-6'>
        <div className="admin-card p-4 sm:p-6">
          <h3 className="text-subtitle text-lg sm:text-xl mb-3 sm:mb-4">Product Images</h3>
          <p className='mb-3 sm:mb-4 text-body-secondary text-sm sm:text-base'>Upload up to 4 images of your product</p>
          <div className='grid grid-cols-2 sm:flex gap-3 sm:gap-4'>
            <label htmlFor="image1" className="cursor-pointer hover:opacity-80 transition-opacity">
              <img className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="Upload" />
              <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden/>
            </label>

            <label htmlFor="image2" className="cursor-pointer hover:opacity-80 transition-opacity">
              <img className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="Upload" />
              <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden/>
            </label>

            <label htmlFor="image3" className="cursor-pointer hover:opacity-80 transition-opacity">
              <img className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="Upload" />
              <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id='image3' hidden/>
            </label>

            <label htmlFor="image4" className="cursor-pointer hover:opacity-80 transition-opacity">
              <img className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="Upload" />
              <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden/>
            </label>
          </div>
        </div>

        <div className="admin-card p-4 sm:p-6">
          <h3 className="text-subtitle text-lg sm:text-xl mb-3 sm:mb-4">Product Information</h3>
          
          <div className='w-full mb-3 sm:mb-4'>
            <label className='block mb-2 text-body-primary font-medium text-sm sm:text-base'>Product Name</label>
            <input 
              onChange={(e)=>setName(e.target.value)} 
              value={name} 
              className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-body-primary text-sm sm:text-base' 
              type="text" 
              placeholder='Enter product name' 
              required 
            />
          </div>

          <div className='w-full mb-3 sm:mb-4'>
            <label className='block mb-2 text-body-primary font-medium text-sm sm:text-base'>Product Description</label>
            <textarea 
              onChange={(e)=>setDescription(e.target.value)} 
              value={description} 
              className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-body-primary h-24 sm:h-32 resize-none text-sm sm:text-base' 
              placeholder='Describe your product in detail...' 
            />
          </div>
        </div>

        <div className="admin-card p-4 sm:p-6">
          <h3 className="text-subtitle text-lg sm:text-xl mb-3 sm:mb-4">Product Details</h3>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            <div>
              <label className='block mb-2 text-body-primary font-medium text-sm sm:text-base'>Product Category</label>
              <select 
                onChange={(e)=>setCategory(e.target.value)} 
                value={category} 
                className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-body-primary text-sm sm:text-base'
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            <div>
              <label className='block mb-2 text-body-primary font-medium text-sm sm:text-base'>Sub Category</label>
              <select 
                onChange={(e)=>setSubCategory(e.target.value)} 
                value={subCategory} 
                className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-body-primary text-sm sm:text-base'
              >
                <option value="Topwear">Topwear</option>
                <option value="Bottomwear">Bottomwear</option>
                <option value="Winterwear">Winterwear</option>
              </select>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <label className='block mb-2 text-body-primary font-medium text-sm sm:text-base'>Product Price (RM)</label>
              <input 
                onChange={(e)=>setPrice(e.target.value)} 
                value={price} 
                className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-body-primary text-sm sm:text-base' 
                type="number" 
                placeholder='25.00' 
                step="0.01"
              />
            </div>
          </div>
        </div>

        <div className="admin-card p-4 sm:p-6">
          <h3 className="text-subtitle text-lg sm:text-xl mb-3 sm:mb-4">Product Sizes</h3>
          <p className='mb-3 sm:mb-4 text-body-secondary text-sm sm:text-base'>Select available sizes for this product</p>
          <div className='flex gap-2 sm:gap-3 flex-wrap'>
            <div 
              onClick={()=>setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, 'S'])}
              className="cursor-pointer"
            >
              <p className={`${sizes.includes("S") ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"} px-3 sm:px-4 py-2 rounded-lg font-medium hover:shadow-md transition-all text-sm sm:text-base`}>S</p>
            </div>

            <div 
              onClick={()=>setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, 'M'])}
              className="cursor-pointer"
            >
              <p className={`${sizes.includes("M") ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"} px-3 sm:px-4 py-2 rounded-lg font-medium hover:shadow-md transition-all text-sm sm:text-base`}>M</p>
            </div>

            <div 
              onClick={()=>setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, 'L'])}
              className="cursor-pointer"
            >
              <p className={`${sizes.includes("L") ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"} px-3 sm:px-4 py-2 rounded-lg font-medium hover:shadow-md transition-all text-sm sm:text-base`}>L</p>
            </div>

            <div 
              onClick={()=>setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, 'XL'])}
              className="cursor-pointer"
            >
              <p className={`${sizes.includes("XL") ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"} px-3 sm:px-4 py-2 rounded-lg font-medium hover:shadow-md transition-all text-sm sm:text-base`}>XL</p>
            </div>

            <div 
              onClick={()=>setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, 'XXL'])}
              className="cursor-pointer"
            >
              <p className={`${sizes.includes("XXL") ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-700"} px-3 sm:px-4 py-2 rounded-lg font-medium hover:shadow-md transition-all text-sm sm:text-base`}>XXL</p>
            </div>
          </div>
        </div>

        <div className="admin-card p-4 sm:p-6">
          <h3 className="text-subtitle text-lg sm:text-xl mb-3 sm:mb-4">Additional Options</h3>
          
          <div className='flex items-center gap-3'>
            <input 
              onChange={()=> setBestseller(prev => !prev)} 
              checked={bestseller} 
              type="checkbox" 
              id='bestseller' 
              className="w-4 h-4 text-gray-800 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 focus:ring-2"
            />
            <label className='cursor-pointer text-body-primary font-medium text-sm sm:text-base' htmlFor="bestseller">
              Add to bestseller collection
            </label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-4 sm:pt-6">
          <button 
            type='button' 
            onClick={() => {
              setName('');
              setDescription('');
              setPrice('');
              setImage1(false);
              setImage2(false);
              setImage3(false);
              setImage4(false);
              setSizes([]);
              setBestseller(false);
            }}
            className='w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all text-sm sm:text-base'
          >
            Clear Form
          </button>
          <button 
            type='submit' 
            className='w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-all hover:shadow-lg text-sm sm:text-base'
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  )
}

export default Add