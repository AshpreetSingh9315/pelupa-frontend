"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "@/store/actions/categoryActions";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.data);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-2xl font-black tracking-tight mb-6">
        Shop by Categories
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {categories && categories.length > 0 ? (
          categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow hover:shadow-lg transition-all h-35 cursor-pointer"
            >
              <img
                src={process.env.NEXT_PUBLIC_API_BASE_IMAGE_URL + category.cover || "/placeholder.png"}
                alt={category.name}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="w-full text-black font-bold text-center py-2 text-sm absolute bottom-0 bg-white/80">
                {category.name}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Loading categories...</p>
        )}
      </div>
    </section>
  );
};

export default Category;
