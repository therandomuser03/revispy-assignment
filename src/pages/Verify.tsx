// src/pages/Verify.tsx
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { sendEmailVerification } from 'firebase/auth';

const Verify: React.FC = () => {
  // Create state for an array of 8 digits for the verification code
  const [code, setCode] = useState<string[]>(Array(8).fill(''));
  const navigate = useNavigate();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle changes in any of the 8 input fields
  const handleChange = (index: number, value: string) => {
    // Allow only numeric input
    if (value && !/^[0-9]$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    // Automatically focus next input if available
    if (value && index < 7) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerify = () => {
    // Combine code digits into a single string
    const verificationCode = code.join('');
    // For demonstration, assume the correct code is "12345678"
    if (verificationCode === '12345678') {
      navigate('/categories');
    } else {
      alert('Invalid code. Please try again.');
    }
  };

  const handleResendVerification = async () => {
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser);
      alert('Verification email resent!');
    }
  };

  return (
    <div className="my-20 bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Card Container */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl border border-[#c1c1c1] shadow-md p-8">
        <h1 className="text-center text-3xl font-semibold mb-4">Verify your email</h1>
        <p className="text-center text-base mb-8">
          Enter the 8 digit code you have received on <br /> dev***@revispy.com
        </p>
        {/* Input fields for the verification code */}
        <div className="flex justify-center space-x-2 mb-8">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 text-center border border-[#c1c1c1] rounded-md"
            />
          ))}
        </div>
        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full h-14 bg-black text-white rounded-md border border-black uppercase tracking-wide font-medium flex items-center justify-center hover:bg-gray-800 transition mb-4"
        >
          Verify
        </button>
        {/* Resend Verification Email Button */}
        <button
          onClick={handleResendVerification}
          className="w-full h-14 bg-blue-500 text-white rounded-md border border-blue-500 uppercase tracking-wide font-medium flex items-center justify-center hover:bg-blue-600 transition"
        >
          Resend Verification Email
        </button>
      </div>
    </div>
  );
};

export default Verify;
