// src/pages/Login.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, log in the user and navigate to Categories.
    login(email);
    navigate('/categories');
  };

  return (
    <div className="my-20 bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background elements (if needed, adjust or remove) */}

      {/* Main Card */}
      <div className="relative z-10 w-full h-[570px] max-w-[576px] bg-white rounded-[20px] border border-[#c1c1c1] shadow-md p-8">
        <h1 className="text-center text-3xl font-semibold mb-4">Login</h1>
        <p className="text-center text-2xl font-medium mb-1">
          Welcome back to ECOMMERCE
        </p>
        <p className="text-center text-base mb-8">
          The next gen business marketplace
        </p>

        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-base text-black mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 py-2 bg-white rounded-md border border-[#c1c1c1] focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-base text-black mb-1">
              Password
            </label>
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter"
              className="w-full h-12 px-4 py-2 bg-white rounded-md border border-[#c1c1c1] focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
            <span
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-4 top-10 text-black text-base cursor-pointer select-none font-semibold underline"
            >
              {passwordVisible ? "Hide" : "Show"}
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-14 bg-black text-white rounded-md border border-black uppercase tracking-wide font-medium flex items-center justify-center hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="mt-8 border-t border-[#c1c1c1]"></div>

        <br />

        {/* Sign Up Link */}
        <div className="mt-4 flex justify-center items-center space-x-2">
          <span className="text-base text-[#333333]">Don’t have an Account?</span>
          <Link to="/signup" className="text-base text-black font-medium uppercase">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
