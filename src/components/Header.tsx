// src/components/Header.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from "../assets/Search.png";
import cartIcon from "../assets/Cart.png";
import { useAuthStore } from '../store/auth';

const Header = () => {

  // State for promo carousel
  const promos = [
    "Get 10% off on business sign up",
    "Free shipping on orders over $50",
    "Exclusive deals for our members"
  ];
  const [promoIndex, setPromoIndex] = useState(0);
  const handlePrev = () => {
    setPromoIndex((prev) => (prev === 0 ? promos.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setPromoIndex((prev) => (prev === promos.length - 1 ? 0 : prev + 1));
  };

  // State for sidebar toggle
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  // Logout functionality
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="w-full bg-white shadow-md relative">

      {/* Top Bar */}
      <div className="w-full h-9 bg-white flex justify-end items-center pr-10 gap-6 text-xs text-gray-700">
        <a href="#">Help</a>
        <a href="#">Orders & Returns</a>

        {/* Account Dropdown Trigger */}
        <div onClick={toggleSidebar} className="text-sm cursor-pointer select-none">
          Hi, John
        </div>
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

        {/* Right Section - Search, Cart */}
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer">
            <img src={searchIcon} alt="Search" className="w-8 h-8" />
          </div>
          <div className="relative cursor-pointer">
            <img src={cartIcon} alt="Cart" className="w-8 h-8" />
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

      {/* Sidebar (Account Dropdown) with smooth transition */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Account</h2>
          <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-800">
            Close
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-700 hover:text-black">Profile</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Orders</a></li>
            <li><a href="#" className="text-gray-700 hover:text-black">Settings</a></li>
            <li><button onClick={() => { handleLogout(); setSidebarOpen(false); }} className="text-gray-700 hover:text-black w-full text-left">Logout</button></li>
            </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
