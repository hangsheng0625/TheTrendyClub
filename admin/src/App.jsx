import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Add from './pages/Add'
import Orders from './pages/Orders'
import List from './pages/List'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = 'RM'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token'): '');

  useEffect(()=>{
    localStorage.setItem('token', token)
  }, [token])


  return (
    <div className='min-h-screen' style={{background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 25%, #e9ecef 50%, #dee2e6 75%, #adb5bd 100%)'}}>
      <ToastContainer/>
      {token === "" 
      ? <Login setToken={setToken} /> 
      : <>
      <Navbar setToken={setToken}/>
      <hr className="border-gray-200" />
      <div className='flex w-full'>
        <Sidebar/>
        <div className='w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-body-primary'>
          <Routes>
            <Route path='/add' element={<Add token={token}></Add>}/>
            <Route path='/list' element={<List token={token}></List>}/>
            <Route path='/orders' element={<Orders token={token}></Orders>}/>
          </Routes>
        </div>
      </div>
      </>
      }
    </div>
    
  )
}

export default App