"use client";
import React, { useState, useEffect } from "react";
import { Star, Heart, ShoppingCart, ArrowBigRightDash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { openCart, addToCart } from "@/store/reducers/cartSlice";

const CategoryCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const discountPercentage = Math.round(
    ((product.regularPrice - product.salePrice) / product.regularPrice) * 100
  );
  const isActive = useSelector((state) => state.cart.isActive);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {discountPercentage}% OFF
            </div>
          )}

          {/* Best Seller Badge */}
          {product.bestSeller && (
            <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              Best Seller
            </div>
          )}

          {/* Heart Icon */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <Heart
              size={16}
              className={`${
                isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </button>

          {/* Engraving Available */}
          {product.engravingAvailable && (
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
              ✍️ Engraving Available
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Product Name */}
          <h3 className="font-black text-gray-800  line-clamp-2 hover:text-[#354FAC] cursor-pointer transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center pb-2 border-b border-b-gray-200">
            <div className="flex text-yellow-400">
              {[...Array(1)].map((_, i) => (
                <Star key={i} size={14} className="fill-current" />
              ))}
            </div>
            <span className="text-xs text-gray-600 ml-1 font-black">
              {product.rating}
            </span>
            <span className="text-xs text-gray-400 ml-2">
              ({product.reviews})
            </span>
          </div>

          {/* Key Features */}
          {/* <div className="pb-1 ">
          {product.features.map((feature, index) => (
            <span key={index} className="inline-block bg-[#354FAC] text-white text-xs px-2 py-1 rounded mr-1 mb-1">
              {feature}
            </span>
          ))}
        </div> */}

          {/* Key Specs */}
          <div className="mt-3">
            {product.keySpec && (
              <div className="text-xs text-gray-600">
                <strong>{product.keySpec}</strong>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-lg font-bold text-red-600">
                ₹{product.salePrice.toLocaleString()}
              </span>
              {product.regularPrice > product.salePrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  ₹{product.regularPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function CategoryProduct() {
  const [sortBy, setSortBy] = useState("featured");
  const [products] = useState([
    {
      id: 9,
      name: "boAt Rockerz 255 Pro+",
      image:
        "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=300&fit=crop",
      salePrice: 1199,
      regularPrice: 3990,
      rating: 4.7,
      reviews: 298,
      features: ["10mm Drivers", "boAt Signature Sound", "ASAP Charge"],
      keySpec: "40 Hours Playback",
      bestSeller: true,
      engravingAvailable: false,
    },
  ]);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.salePrice - b.salePrice;
      case "price-high":
        return b.salePrice - a.salePrice;
      case "rating":
        return b.rating - a.rating;
      case "discount":
        const discountA =
          ((a.regularPrice - a.salePrice) / a.regularPrice) * 100;
        const discountB =
          ((b.regularPrice - b.salePrice) / b.regularPrice) * 100;
        return discountB - discountA;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      {/* Filters and Sort */}

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="">
          <h2 className="text-2xl font-black tracking-tight ">All Products</h2>
            <span className="font-medium text-gray-600">{products.length}</span> products
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="discount">Highest Discount</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <CategoryCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
