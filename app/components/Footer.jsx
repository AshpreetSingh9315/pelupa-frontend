import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="text-3xl font-bold text-red-500">boAt</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's No.1 Earwear Audio Brand. Plug into Nirvana with boAt's audio products designed for your lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">True Wireless Earbuds</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wireless Headphones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wireless Speakers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wired Headphones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wired Earphones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Soundbars</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Smart Watches</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mobile Accessories</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Warranty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Service Centers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-500">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About boAt</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Read Our Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Phone size={20} className="text-red-500 mr-3" />
              <div>
                <p className="text-gray-300">Customer Care</p>
                <p className="text-white font-semibold">+91-9999-999-999</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail size={20} className="text-red-500 mr-3" />
              <div>
                <p className="text-gray-300">Email Support</p>
                <p className="text-white font-semibold">support@boat-lifestyle.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="text-red-500 mr-3" />
              <div>
                <p className="text-gray-300">Head Office</p>
                <p className="text-white font-semibold">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                <span className="text-red-500 font-semibold">India's No.1</span> Earwear Audio Brand
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Trusted by millions of boAtheads across India
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">5M+</div>
                <div className="text-xs text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">100+</div>
                <div className="text-xs text-gray-400">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">500+</div>
                <div className="text-xs text-gray-400">Service Centers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 px-4 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 boAt Lifestyle. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;