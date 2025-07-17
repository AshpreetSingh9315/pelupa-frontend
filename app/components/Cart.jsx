"use client";

import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "@/store/reducers/cartSlice";
import { X } from 'lucide-react';

const Cart = () => {
  const isActive = useSelector((state) => state.cart.isActive);
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(openCart(!isActive));
  };

  return (
    <>
    
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isActive ? 0 : "100%" }}
        transition={{ type: "tween" }}
        className="w-full sm:w-[400px] h-screen fixed right-0 top-0 z-40 bg-white shadow-xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={handleCart} className="text-xl font-bold">
           <X />
          </button>
        </div>

        {/* Cart Items (dummy) */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {/* Replace this block with dynamic items */}
          <div className="flex items-center gap-4 border p-3 rounded-lg">
            <img
              src="/dummy-product.jpg"
              alt="product"
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium">Wireless Headphones</h3>
              <p className="text-xs text-gray-500">Qty: 1</p>
              <p className="text-sm font-semibold mt-1">₹2,999</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t px-5 py-4 space-y-3">
          <div className="flex justify-between text-sm font-medium">
            <span>Subtotal</span>
            <span>₹2,999</span>
          </div>

          <button className="w-full bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>

          <button
            onClick={handleCart}
            className="w-full text-black border border-black py-2 rounded-lg text-sm hover:bg-gray-100 transition"
          >
            Continue Shopping
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Cart;
