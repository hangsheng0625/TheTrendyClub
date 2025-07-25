import React from 'react'
import { useSearchParams } from 'react-router-dom';
import {toast} from "react-toastify";
import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const VerifyPayment = () => {

    const {navigate, token, setCartItems, backendUrl} = useContext(ShopContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {
        try {
            if (!token) return;

            const response = await axios.post(
                backendUrl + '/api/order/verifyStripe',
                { orderId, success },
                { headers: { token } }
            );

            if (response.data.success) {
                setCartItems({});
                navigate('/orders');
            } else {
                navigate('/cart');
            }
        } catch (error) {
            console.error("Payment verification failed:", error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        verifyPayment();
    }, [token]);
}

export default VerifyPayment