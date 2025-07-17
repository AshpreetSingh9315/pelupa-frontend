"use client";
import React from "react";
import { Search, User, ShoppingCart } from "lucide-react"; // Optional: for icons (or use your own)
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "@/store/reducers/cartSlice";

const Header = () => {
  const isActive = useSelector(state=>state.cart.isActive)
  const dispatch = useDispatch()
  const handleCart = ()=>{
    dispatch(openCart(!isActive))
  }
  return (
    <header className="w-full relative">

    {/* <button onClick={()=>handleCart()}>handleCart</button> */}

      {/* Top Offer Bar */}
      <div className="bg-[#E7EFF8] text-black text-xs text-center py-2">
        Get additional 5% off on Prepaid orders | Code:{" "}
        <strong>BOATHEAD</strong> |{" "}
        <span className="underline cursor-pointer">Shop Now</span>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm py-4 px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-15 items-center justify-center">
          <Link href="/" className="flex items-center">
            <img
              src="/download.webp"
              alt="boAt Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 text-md font-medium text-gray-700">
            <a href="#" className="hover:text-black">
              Shop
            </a>
            <div className="group relative">
              <a href="#" className="hover:text-black">
                Categories
              </a>

              {/* Dropdown (full-width) */}
              <div className="absolute left-0 top-full w-screen bg-white shadow-xl py-6 px-10 hidden group-hover:block z-50">
                <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6">
                  {/* Replace with real categories */}
                  <div>
                    <h4 className="font-semibold mb-2">Audio</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>
                        <a href="#">Wireless Earbuds</a>
                      </li>
                      <li>
                        <a href="#">Headphones</a>
                      </li>
                      <li>
                        <a href="#">Neckbands</a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Smart</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>
                        <a href="#">Smart Watches</a>
                      </li>
                      <li>
                        <a href="#">Fitness Bands</a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Wired</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>
                        <a href="#">Wired Earphones</a>
                      </li>
                      <li>
                        <a href="#">Aux Cables</a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Speakers</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>
                        <a href="#">Bluetooth</a>
                      </li>
                      <li>
                        <a href="#">Party Speakers</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="hover:text-black">
              Daily Deals
            </a>
            <a href="#" className="hover:text-black">
              Gift With boAt
            </a>
            <a href="#" className="hover:text-black">
              More
            </a>
          </nav>
        </div>
        {/* Icons */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
          <ShoppingCart onClick={()=>handleCart()} className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
