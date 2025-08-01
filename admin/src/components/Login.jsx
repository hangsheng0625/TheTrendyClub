import React, { useState } from 'react'
import axios from 'axios'
import {backendUrl} from '../App'
import { toast } from 'react-toastify';

const Login = ({setToken}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', {email, password}) 
            if (response.data.success) {
                setToken(response.data.token)
            }  
            else {
                toast.error(response.data.message)
            }                     
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || error.message)
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center w-full'
         style={{background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 25%, #e9ecef 50%, #dee2e6 75%, #adb5bd 100%)'}}>
        <div className='admin-container max-w-md mx-4'>
            <div className="text-center mb-8">
                <h1 className='text-title text-3xl mb-2'>Admin Panel</h1>
                <p className="text-body-secondary">Sign in to manage your store</p>
            </div>
            
            <form onSubmit={onSubmitHandler} className="space-y-6">
                <div>
                    <label className='block text-body-primary font-medium mb-2'>Email Address</label>
                    <input 
                        onChange={(e)=>setEmail(e.target.value)} 
                        value={email} 
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-body-primary'
                        type="email" 
                        placeholder='admin@trendyclub.com' 
                        required 
                    />
                </div>

                <div>
                    <label className='block text-body-primary font-medium mb-2'>Password</label>
                    <input 
                        onChange={(e)=>setPassword(e.target.value)} 
                        value={password} 
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-body-primary'
                        type="password" 
                        placeholder='Enter your password' 
                        required 
                    />
                </div>
                
                <button 
                    className='w-full py-3 px-4 rounded-lg text-white bg-gray-800 hover:bg-gray-700 font-medium transition-all hover:shadow-lg' 
                    type='submit'
                >
                    Sign In
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login