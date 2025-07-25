import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-zinc-300">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:justify-between md:justify-between gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-3 -ml-1">
              <img src="/download.png" alt="Pelupa Logo" className="h-12" />
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
             Your trusted partner in surveillance solutions. Empowering you to protect what matters most with cutting-edge security and hidden monitoring technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#354FAC] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#354FAC] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#354FAC] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#354FAC] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#354FAC]">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Memory Backup</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Photo Restoration</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Digital Archiving</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Cloud Storage</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Memory Sharing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Privacy Tools</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#354FAC]">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Service Status</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Account Help</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#354FAC]">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">About Pelupa</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#354FAC] transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200 md:hidden lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Phone size={20} className="text-[#354FAC] mr-3" />
              <div>
                <p className="text-gray-600">Customer Support</p>
                <p className="text-gray-800 font-semibold">+91(800) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail size={20} className="text-[#354FAC] mr-3" />
              <div>
                <p className="text-gray-600">Email Support</p>
                <p className="text-gray-800 font-semibold">support@pelupa.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="text-[#354FAC] mr-3" />
              <div>
                <p className="text-gray-600">Office</p>
                <p className="text-gray-800 font-semibold">Delhi, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 text-sm">
                <span className="text-[#354FAC] font-semibold">Trusted by</span> thousands worldwide
              </p>
              <p className="text-gray-500 text-center text-xs mt-1">
                Protecting since 2020
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#354FAC]">50K+</div>
                <div className="text-xs text-gray-500">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#354FAC]">10M+</div>
                <div className="text-xs text-gray-500">Memories Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#354FAC]">99.9%</div>
                <div className="text-xs text-gray-500">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 px-4 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Pelupa. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-sm justify-between items-center">
            <a href="#" className="text-gray-500 hover:text-[#354FAC] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[#354FAC] transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-[#354FAC] transition-colors">Accessibility</a>
            <a href="#" className="text-gray-500 hover:text-[#354FAC] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;