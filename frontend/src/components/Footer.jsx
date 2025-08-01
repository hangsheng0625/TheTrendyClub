import React from "react";
import { assets } from "../assets/assets";

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
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-grey-100 font-playfair">
              Company
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Story", "Careers"].map(
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
            <h3 className="text-xl font-bold mb-6 text-grey-100 font-playfair">
              Support
            </h3>
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
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 bg-black/50">
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-6">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-sm text-center">
              © 2025 TheTrendyClub. All rights reserved. Made with ❤️ for fashion lovers.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
