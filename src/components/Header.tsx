// src/components/Header.tsx
import React, { useState } from 'react';
import searchIcon from "../assets/Search.png";
import cartIcon from "../assets/Cart.png";

const Header = () => {

  // Array of promotional messages
  const promos = [
    "Get 10% off on business sign up",
    "Free shipping on orders over $50",
    "Exclusive deals for our members"
  ];

  const [promoIndex, setPromoIndex] = useState(0);

  // Handle previous promo
  const handlePrev = () => {
    setPromoIndex((prev) => (prev === 0 ? promos.length - 1 : prev - 1));
  };

  // Handle next promo
  const handleNext = () => {
    setPromoIndex((prev) => (prev === promos.length - 1 ? 0 : prev + 1));
  };


  return (
    <header className="w-full bg-white shadow-md">
      {/* Top Bar */}
      <div className="w-full h-9 bg-white flex justify-end items-center pr-10 gap-6 text-xs text-gray-00">
        <a href="#">Help</a>
        <a href="#">Orders & Returns</a>
        {/* Account Dropdown */}
        <div className="text-sm">Hi, John</div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full h-[70px] px-10 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">ECOMMERCE</div>

        {/* Navigation Links */}
        <nav className="flex gap-8 text-base font-semibold">
          <a href="#" className="hover:text-gray-500">Categories</a>
          <a href="#" className="hover:text-gray-500">Sale</a>
          <a href="#" className="hover:text-gray-500">Clearance</a>
          <a href="#" className="hover:text-gray-500">New Stock</a>
          <a href="#" className="hover:text-gray-500">Trending</a>
        </nav>

        {/* Right Section - Search, Cart, and User */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
            <div className="relative cursor-pointer">
            <img src={searchIcon} alt="" className="w-8 h-8" />
            {/* <input type="text" placeholder="Search" className="border border-gray-300 rounded-md px-4 py-2" /> */}
            </div>

          {/* Cart Icon */}
          <div className="relative cursor-pointer">
          <img src={cartIcon} alt="" className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Sub-header with promotional carousel */}
      <div className="w-full h-9 bg-gray-200 flex items-center justify-center px-96 text-sm font-medium">
        {/* Left Arrow */}
        <button 
          onClick={handlePrev} 
          className="flex items-center justify-center p-2 text-gray-700 hover:text-gray-900"
          aria-label="Previous Promotion"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>

        {/* Promotional Message */}
        <div className="flex-1 text-center text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis px-2">
          {promos[promoIndex]}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNext} 
          className="flex items-center justify-center p-2 text-gray-700 hover:text-gray-900"
          aria-label="Next Promotion"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
