"use client";
import React, { useState } from "react";
import { Search, User, ShoppingCart, ChevronDown, Menu } from "lucide-react"; // Optional: for icons (or use your own)
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "@/store/reducers/cartSlice";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [hamBurgur, setHamBurgur] = useState(false);
  const categories = [
    {
      title: "Smartwatches",
      image: "/category/1c.webp", // Replace with real image paths
    },
    {
      title: "Wireless Earbuds",
      image: "/category/2c.png",
    },
    {
      title: "Wired Earphones",
      image: "/category/3c.png",
    },
    {
      title: "Wired Earphones",
      image: "/category/3c.png",
    },
    {
      title: "Wired Earphones",
      image: "/category/3c.png",
    },
    {
      title: "Wired Earphones",
      image: "/category/3c.png",
    },
    {
      title: "Neckbands",
      image: "/category/4c.png",
    },
    {
      title: "Headphones",
      image: "/category/5c.webp",
    },
    {
      title: "Wireless Earbuds",
      image: "/category/2c.png",
    },
    {
      title: "Wireless Earbuds",
      image: "/category/2c.png",
    },
  ];
  const products = [
    { id: 1, name: "Camera A", image: "/images/camera-a.jpg" },
    { id: 2, name: "Camera B", image: "/images/camera-b.jpg" },
    { id: 3, name: "Camera C", image: "/images/camera-c.jpg" },
  ];
  const [isDropdownActive, setisDropdownActive] = useState(false);
  const [issearchBar, setissearchBar] = useState(false);
  const [search, setSearch] = useState("");
  const isActive = useSelector((state) => state.cart.isActive);
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(openCart(!isActive));
  };
  const handleMenuLogic = () => {
    setHamBurgur(!hamBurgur);
  };
  const handleSearch = () => {
    setissearchBar(!issearchBar);
  };

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
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
      <div className="bg-white shadow-sm py-4 px-5 lg:px-10 md:px-10 sm:px-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 lg:gap-20 md:gap-20 sm:gap-3 ">
          <Menu
            onClick={() => handleMenuLogic()}
            className="block lg:hidden md:hidden sm:block"
          />
          <Link href="/" className="flex items-center">
            <img
              src="/download.png"
              alt="boAt Logo"
              className="h-11 w-full object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 text-md font-medium text-gray-700">
            <div className="group relative ">
              <a
                href="#"
                className="hover:text-black flex flex-row items-center  gap-[1px] effect_hover"
                onClick={() => setisDropdownActive(!isDropdownActive)}
              >
                Categories <ChevronDown size={18} />
              </a>
            </div>

            <a href="#" className="hover:text-black effect_hover">
              Daily Deals
            </a>
            <a href="#" className="hover:text-black effect_hover">
              Gift With boAt
            </a>
            <a href="#" className="hover:text-black effect_hover">
              More
            </a>
          </nav>
          {/* Dropdown (full-width) */}
          <AnimatePresence>
            {isDropdownActive && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "tween" }}
                className="absolute left-0 top-full w-full bg-white shadow-xl py-6 px-10 block z-50"
              >
                <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-end">
                  {categories.map((cat, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center group cursor-pointer hover:scale-105 transition-transform duration-200"
                    >
                      <div className="w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className="object-contain h-full w-full"
                        />
                      </div>
                      <p className="mt-2 text-sm font-medium text-gray-700 group-hover:text-black">
                        {cat.title}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SearchBar */}
        </div>
        {/* Icons */}
        <div className="flex items-center gap-4">
          <Search
            onClick={() => handleSearch()}
            className="w-5 h-5 cursor-pointer"
          />
          <User className="w-5 h-5 cursor-pointer" />
          <ShoppingCart
            onClick={() => handleCart()}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        <AnimatePresence>
          {issearchBar && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "tween" }}
              className="absolute left-0 top-full w-full bg-white shadow-xl pb-8 px-10 block z-20"
            >
              <div className="w-full lg:w-4xl md:w-4xl sm:w-full px-5 mx-auto gap-5 justify-end flex border-2 items-center border-black rounded-sm relative bg-white">
                {/* Search Bar */}
                <Search />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="focus:outline-0 w-full rounded-sm py-2 text-md font-bold"
                  placeholder="Search Product."
                />

                {/* Dropdown */}
                {search && (
                  <div className="absolute top-full left-0 z-50 w-full bg-white border border-gray-300 rounded-b shadow-md max-h-64 overflow-y-auto">
                    {filtered.length > 0 ? (
                      filtered.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <span className="text-sm font-medium">
                            {product.name}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-gray-500 text-sm">
                        No products found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {hamBurgur ? (
        <MobileMenu isActive={hamBurgur} setIsActive={setHamBurgur} />
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
