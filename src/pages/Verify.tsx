// src/pages/Verify.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real-world scenario, this would involve calling an API
    // to validate the verification code. Here, we simulate success if the code is "123456".
    if (code === '123456') {
      // Redirect to the protected page after successful verification.
      navigate('/categories');
    } else {
      setError('Invalid verification code. Please try again.');
    }
  };

  return (
    <div className="my-20 bg-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="relative z-10 w-full max-w-[576px] bg-white rounded-[20px] border border-[#c1c1c1] shadow-md p-8">
        <h1 className="text-center text-3xl font-semibold mb-4">Email Verification</h1>
        <p className="text-center text-base mb-6">
          We’ve sent a verification code to your email. Please enter it below.
        </p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleVerification} className="space-y-6">
          <div className="mb-6">
            <label htmlFor="code" className="block text-base text-black mb-1">
              Verification Code
            </label>
            <input
              id="code"
              type="text"
              placeholder="Enter verification code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-12 px-4 py-2 bg-white rounded-md border border-[#c1c1c1] focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full h-14 bg-black text-white rounded-md border border-black uppercase tracking-wide font-medium flex items-center justify-center hover:bg-gray-800 transition"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
