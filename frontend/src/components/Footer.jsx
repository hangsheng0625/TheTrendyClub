import React from "react";
import { assets } from "../assets/assets";
import { Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-grey-800 via-grey-700 to-grey-600 text-white mt-20 w-full">
      {/* Main footer content */}
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <img
              src={assets.logo}
              className="mb-6 w-40 brightness-0 invert"
              alt="Logo"
            />
            <p className="text-grey-200 leading-relaxed mb-6 max-w-md text-body-secondary">
              Experience fashion excellence with The Trendy Club. We curate
              premium quality clothing that seamlessly blends contemporary style
              with timeless elegance. Join our community of fashion connoisseurs
              and elevate your wardrobe.
            </p>

            {/* Social media */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-grey-600 to-grey-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-grey-600 to-grey-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                <Instagram className="text-white w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-grey-500 to-grey-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                <Twitter className="text-white w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-grey-500 to-grey-700 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                <Linkedin className="text-white w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-grey-100 font-playfair">Company</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Story", "Careers", "Press"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-grey-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-body-secondary"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-grey-100 font-playfair">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-grey-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-body-secondary"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-grey-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-body-secondary"
                >
                  Size Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-grey-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-body-secondary"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-grey-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-body-secondary"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-grey-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-body-secondary"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <MapPin className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Visit Us</h4>
                <p className="text-gray-300 text-sm">
                  34, Jalan Bukit Kempas
                  <br />
                  Taman Bukit Kempas, 81200
                  <br />
                  Johor Bahru, Johor
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                <Phone className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Call Us</h4>
                <p className="text-gray-300 text-sm">
                  +60139846692
                  <br />
                  Mon-Fri: 9AM-6PM
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center">
                <Mail className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email Us</h4>
                <p className="text-gray-300 text-sm">
                  hangsheng279@gmail.com
                  <br />
                  We reply within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 bg-black/50">
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 TheTrendyClub. All rights reserved. Made with ❤️ for
              fashion lovers.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
