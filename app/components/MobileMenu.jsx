"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X } from "lucide-react";

const MobileMenu = ({ isActive, setIsActive }) => {
  console.log(isActive);
  const handleCart = () => {
    setIsActive(!isActive);
  };

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
          initial={{ x: "-100%" }}
          animate={{ x: isActive ? 0 : "-100%" }}
          transition={{ type: "tween" }}
          className="w-[330px] lg:w-[400px] md:w-[400px] sm:w-[330px] h-full fixed left-0 top-0 z-40 bg-white shadow-xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={handleCart} className="text-xl font-bold">
              <X />
            </button>
          </div>

          {/* Cart Items (dummy) */}
          <Accordion
            type="single"
            collapsible
            className="w-full px-5"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1" className={"py-3"}>
              <AccordionTrigger className={"text-lg font-black"}>
                Categories
              </AccordionTrigger>
              <AccordionContent className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {categories.slice(0, 6).map((cat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center group cursor-pointer hover:scale-105 transition-transform duration-200"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
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

                <div className="col-span-full flex justify-center mt-4">
                  <button className="px-4 py-2 text-sm font-semibold text-white bg-theme rounded hover:bg-gray-800 transition">
                    View All
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className={"py-3"}>
              <AccordionTrigger className={"text-lg font-black"}>
                Shipping Details
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express
                  shipping ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className={"py-3"}>
              <AccordionTrigger className={"text-lg font-black"}>
                Return Policy
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
