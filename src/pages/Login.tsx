// src/pages/Login.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useAuthStore } from '../store/auth';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      // Cross-check user's email and password using Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // If sign-in is successful, update the global auth state
      login(userCredential.user.email || '');
      // Navigate to the protected page
      navigate('/categories');
    } catch (err: any) {
      // Display the error message if login fails
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-20 bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Main Card */}
      <div className="relative z-10 w-full h-[600px] max-w-[576px] bg-white rounded-[20px] border border-[#c1c1c1] shadow-md p-8">
        <h1 className="text-center text-3xl font-semibold mb-4">Login</h1>
        <p className="text-center text-2xl font-medium mb-1">
          Welcome back to ECOMMERCE
        </p>
        <p className="text-center text-base mb-8">
          The next gen business marketplace
        </p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            disabled={isLoading}
            className="w-full h-14 bg-black text-white rounded-md border border-black uppercase tracking-wide font-medium flex items-center justify-center hover:bg-gray-800 transition"
          >
            {isLoading ? "Logging In..." : "Login"}
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
