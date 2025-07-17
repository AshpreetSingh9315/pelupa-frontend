import React from "react";

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

const Category = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">Shop by Categories</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow hover:shadow-lg transition-all h-35 cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full absolute h-fit object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="w-full text-black font-bold text-center py-2 text-sm absolute bottom-0">
              {category.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
