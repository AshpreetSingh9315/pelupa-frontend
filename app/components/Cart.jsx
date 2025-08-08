"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { openCart, removeFromCart } from "@/store/reducers/cartSlice";
import { X } from "lucide-react";

const Cart = () => {
  const isActive = useSelector((state) => state.cart.isActive);
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(openCart(!isActive));
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => {
    const price = item.discounted_price
      ? parseFloat(item.discounted_price)
      : parseFloat(item.price);
    return total + price * (item.quantity);
  }, 0);

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="cart-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(2px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#7f7f7f]/60 z-30"
          />
        )}

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isActive ? 0 : "100%" }}
          transition={{ type: "tween" }}
          className="w-[300px] lg:w-[400px] md:w-[400px] sm:w-[300px] h-full fixed right-0 top-0 z-40 bg-white shadow-xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <button onClick={handleCart} className="text-xl font-bold">
              <X />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border p-3 rounded-lg"
                >
                  <img
                    src={
                      item.image && item.image[0]
                        ? item.image[0]
                        : "https://via.placeholder.com/80"
                    }
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    <p className="text-sm font-semibold mt-1">
                      ₹
                      {item.discounted_price
                        ? item.discounted_price
                        : item.price}
                    </p>
                  </div>
                  <div
                    className="pb-10 text-sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    <X size={16} />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-sm text-gray-500">
                Your cart is empty.
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="border-t px-5 py-4 space-y-3">
            <div className="flex justify-between text-sm font-medium">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <button className="w-full bg-[#5D62B5] text-white py-2 rounded-lg text-sm hover:bg-[#25296e] transition-all">
              Proceed to Checkout
            </button>

            <button
              onClick={handleCart}
              className="w-full text-black border border-black py-2 rounded-lg text-sm hover:bg-gray-100 transition-all"
            >
              Continue Shopping
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Cart;
