import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Add from './pages/Add'
import Orders from './pages/Orders'
import List from './pages/List'


const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <>
      <Navbar/>
      <hr />
      <div className='flex w-full '>
        <Sidebar/>
        <div className='w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base'>
          <Routes>
            <Route path='/add' element={<Add></Add>}/>
            <Route path='/list' element={<List></List>}/>
            <Route path='/orders' element={<Orders></Orders>}/>
          </Routes>
        </div>

      </div>
      </>
    </div>
    
  )
}

export default App