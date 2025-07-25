"use client";

import React, { useState } from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  Headphones,
  Battery,
  Bluetooth,
  Droplets,
  Mic,
  Volume2,
  Zap,
  Award,
} from "lucide-react";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");

  const productImages = [
    "https://www.boat-lifestyle.com/cdn/shop/products/main_2_53c3483e-38d0-4a88-a8e0-b75fe5b23584_600x.png?v=1685696997",
    "https://www.boat-lifestyle.com/cdn/shop/files/original-imagduskxywkxx6y_416x.webp?v=1685696815",
    "https://www.boat-lifestyle.com/cdn/shop/files/original-imagduskz5hcsf2a_416x.webp?v=1685696798",
    "https://www.boat-lifestyle.com/cdn/shop/files/original-imagduskzzt9vapa_416x.webp?v=1685696798",
    "https://www.boat-lifestyle.com/cdn/shop/files/original-imagdusksvsvgrpf_416x.webp?v=1685696804",
    "https://www.boat-lifestyle.com/cdn/shop/files/original-imagdusksvsvgrpf_416x.webp?v=1685696804",
    "https://www.boat-lifestyle.com/cdn/shop/files/original-imagdusksvsvgrpf_416x.webp?v=1685696804",
    "https://www.boat-lifestyle.com/cdn/shop/files/original-imagdusksvsvgrpf_416x.webp?v=1685696804",
    "https://www.boat-lifestyle.com/cdn/shop/files/original-imagdusksvsvgrpf_416x.webp?v=1685696804",
    "https://www.boat-lifestyle.com/cdn/shop/files/original-imagdusksvsvgrpf_416x.webp?v=1685696804",
  ];

  const colors = ["Black", "Blue", "Red"];

  const features = [
    {
      icon: <Battery className="w-5 h-5" />,
      title: "Up to 20 Hours Playback",
      description: "Long-lasting battery for all-day use",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "ASAP™ Charge",
      description: "10 min charge = 10 hours playback",
    },
    {
      icon: <Mic className="w-5 h-5" />,
      title: "ENx™ Technology",
      description: "Crystal clear call quality",
    },
    {
      icon: <Volume2 className="w-5 h-5" />,
      title: "BEAST™ Mode",
      description: "Low latency for gaming",
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "IPX5 Water Resistant",
      description: "Sweat and water protection",
    },
    {
      icon: <Bluetooth className="w-5 h-5" />,
      title: "Bluetooth v5.2",
      description: "Dual pairing support",
    },
  ];

  const specifications = [
    { label: "Headphone Type", value: "In-ear" },
    { label: "Driver Size", value: "10mm x 2" },
    { label: "Bluetooth Version", value: "v5.2" },
    { label: "Bluetooth Range", value: "10m" },
    { label: "Battery Capacity", value: "150mAh" },
    { label: "Playing Time", value: "Up to 20 Hours" },
    { label: "Charging Time", value: "About 1 Hour" },
    { label: "Charging Interface", value: "USB Type C" },
    { label: "Water Resistance", value: "IPX5" },
    { label: "Country Of Origin", value: "China" },
  ];

const renderStars = (count) =>
  Array.from({ length: count }, (_, i) => (
    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
  ));

  return (
    <div className="max-w-7xl mx-auto my-5 px-4">
      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={productImages[selectedImage]}
              alt="boAt Rockerz 235 Pro"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-x-auto">
            <div className="flex space-x-2 min-w-[500px] w-max">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-black text-gray-900 mb-1">
              boAt Rockerz 235 Pro
            </h1>
            <p className="text-gray-600 mb-2 text-md  leading-5">
              Wireless Bluetooth Neckband with Up To 20 Hours Playback, BEAST™
              Mode, ENx™ Technology
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center">
                {renderStars(4)}
                <span className="ml-2 text-sm text-gray-600">(4.5)</span>
              </div>
              <span className="text-sm text-green-600">In Stock</span>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-2 ">
                <span className="text-2xl font-bold text-gray-900">₹1,299</span>
                <span className="text-sm text-gray-600 line-through">
                  ₹2,990.00
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                  57% OFF
                </span>
              </div>
              <p className="text-sm text-gray-600">Inclusive of all taxes</p>
            </div>

            {/* Color Selection */}
            {/* <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Color:</h3>
              <div className="flex space-x-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 ${
                      selectedColor === color
                        ? "border-blue-500 bg-blue-50 text-blue-600"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Quantity:</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-16 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-6">
              <button type="button" className="flex-1 bg-[#5E62B5] cursor-pointer text-white py-3 px-6 rounded-lg font-semibold hover:[#5E62B5] transition-colors flex items-center justify-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Delivery Info */}
            <div className="border-t pt-4">
              <div className="flex items-center space-x-2 mb-2">
                <Truck className="w-5 h-5 text-green-600" />
                <span className="text-sm">
                  Free delivery on orders above ₹499
                </span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm">1 Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-blue-600">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Description */}
      <div className="mb-12">
        <h2 className="text-3xl font-black text-gray-900 mb-6">
          Product Description
        </h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            Let Rockerz 235 Pro fuel your passion like a pro. Take your hustle
            up a notch as its up to 20 Hours playback will keep you pumped up
            throughout. The BEAST™ Mode and its low latency will make you
            experience the best of both worlds.
          </p>
          <p className="text-gray-700 mb-4">
            #UnravelYourFlow as you get maximum call clarity with ENx™
            Technology equipped mics. Work hard & play harder with Rockerz 235
            Pro empowering both your worlds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                10 Minutes Charge = 10 Hours of Playback
              </h3>
              <p className="text-gray-700">
                Enjoy 10 Hours playback with 10 Minutes of ASAP™ Charge. Within
                a few minutes of ASAP™ charge, you can get yourself ready to
                shuffle through your favourite music playlist and binge-watch
                your favourite Netflix series.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                ENx™ Technology
              </h3>
              <p className="text-gray-700">
                Greatly enhance call quality and block out wind noise and
                background distractions with ENx™ Technology. This enables
                crystal clear sound, for you to be heard crystal clear, even in
                the most challenging conditions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                BEAST™ Mode (Low Latency)
              </h3>
              <p className="text-gray-700">
                Bionic. Engine. And. Sonic. Technology. It significantly reduces
                latency to keep the audio and video in sync to ensure that you
                live every moment you visualize.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                10mm Drivers Super Extra Bass
              </h3>
              <p className="text-gray-700">
                With 10mm dynamic drivers and boAt Signature Sound, you get to
                experience rich sound and superior music quality every time you
                press play. The bass is tuned for a thumping listening
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mb-12">
        <h2 className="text-3xl font-black text-gray-900 mb-6">
          Technical Specifications
        </h2>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="px-6 py-4 flex justify-between items-center"
              >
                <span className="font-medium text-gray-900">{spec.label}</span>
                <span className="text-gray-600">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="mb-12">
        <h2 className="text-3xl font-black text-gray-900 mb-6">
          Additional Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Magnetic Earbuds
            </h3>
            <p className="text-gray-600">
              The behind-the-neck design is shaped for comfortable, all-day
              listening. Live a tangle-free life with magnetic earbuds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Multi-Function Integrated Controls
            </h3>
            <p className="text-gray-600">
              Multi-Function Integrated controls lend an intuitive listening
              experience with volume increase/decrease and play/stop buttons.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Vibration Call Alert
            </h3>
            <p className="text-gray-600">
              This well-designed headset provides vibrational alerts for
              incoming calls and hence offers you effortless hands-free calling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Dual Pairing</h3>
            <p className="text-gray-600">
              Stay connected to your phone as well as laptop simultaneously with
              the dual pairing feature.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-black text-gray-900 mb-6">
          Customer Reviews
        </h2>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-4xl font-bold text-gray-900">4.5</div>
            <div>
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                Based on 1,250+ reviews
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="font-medium text-gray-900">
                  Excellent sound quality
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                "Great bass and clear audio. Battery life is impressive and the
                magnetic design is very convenient."
              </p>
              <div className="text-xs text-gray-500 mt-2">
                - Verified Purchase
              </div>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
                <span className="font-medium text-gray-900">
                  Good value for money
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                "Perfect for workouts and daily use. The water resistance works
                well during gym sessions."
              </p>
              <div className="text-xs text-gray-500 mt-2">
                - Verified Purchase
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
