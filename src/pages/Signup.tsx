// src/pages/Signup.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      // Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Optionally update profile with the name here if needed

      // Send a verification email
      await sendEmailVerification(userCredential.user);
      // Navigate to the verification screen
      navigate('/verify');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-20 bg-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="relative z-10 w-full max-w-[576px] bg-white rounded-[20px] border border-[#c1c1c1] shadow-md p-8">
        <h1 className="text-center text-3xl font-semibold mb-4">
          Create your account
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-6">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-base text-black mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 px-4 py-2 bg-white rounded-md border border-[#c1c1c1] focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>
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
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-14 bg-black text-white rounded-md border border-black uppercase tracking-wide font-medium flex items-center justify-center transition ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
            }`}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <br />
        {/* Login Link */}
        <div className="mt-4 flex justify-center items-center space-x-2">
          <span className="text-base text-[#333333]">Have an account?</span>
          <Link to="/" className="text-base text-black font-medium uppercase">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
