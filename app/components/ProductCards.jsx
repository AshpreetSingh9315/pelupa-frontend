import React from "react";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
const products = [
  {
    id : 1,
    title: "Airdopes 161",
    price: "₹999",
    originalPrice: "₹2,499",
    image: "/products/p1.webp", // Replace with actual paths
  },
  {
    id : 2,
    title: "BassHeads 100",
    price: "₹399",
    originalPrice: "₹999",
    image: "/products/p2.webp",
  },
  {
    id : 3,
    title: "Rockerz 255 Pro+",
    price: "₹1,299",
    originalPrice: "₹3,499",
    image: "/products/p3.webp",
  },
  {
    id : 4,
    title: "Nirvana Ion",
    price: "₹1,899",
    originalPrice: "₹4,499",
    image: "/products/p4.webp",
  },
  {
    id : 5,
    title: "Nirvana Ion Spearker",
    price: "₹1,899",
    originalPrice: "₹4,499",
    image: "/products/p5.webp",
  },
];

const ProductCards = (props) => {
  return (
    <section className="max-w-7xl mx-auto py-10">
      {/* Section Heading */}
      <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold mb-6">{props.title}</h2>
      <h2 className="text-sm font-bold text-blue-700 flex justify-center items-center cursor-pointer">View All  <ArrowRight size={16} /></h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {products && products.length>0 &&  products.map((product, index) => (
          <Link href={`/products/${product.id}`}
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-98 cursor-pointer"
          >
            <div className="w-full h-52 bg-gray-100 relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover absolute rounded-lg"
              />
              <div className="absolute bottom-0 bg-yellow-400 w-full rounded-b-lg flex px-3 py-2 justify-between">
                <small className="text-xs font-bold ">50hrs Playback Time</small>
                <small className="text-xs font-bold px-2 bg-white">Star</small>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-black">{product.title}</h3>
              <div className="mt-3 flex items-center gap-2  border-t-2 border-gray-300 border-dotted">
                <span className="text-lg font-black text-black">{product.price}</span>
                <span className="text-sm line-through text-gray-500">
                  {product.originalPrice}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;
