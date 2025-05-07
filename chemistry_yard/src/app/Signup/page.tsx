<<<<<<< HEAD
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
=======
// 'use client'
// import React, { useState } from 'react';
// import Link from 'next/link';

// const Signup = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
>>>>>>> 5757a6b92479cb9a17e57245c219a8b37bf49f63

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Basic frontend validation
//     if (form.password !== form.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

<<<<<<< HEAD
    // TODO: Handle signup logic here
    console.log('Signup Data:', form);
  };
  // DEEA-EB5F
=======
//     // TODO: Handle signup logic here
//     console.log('Signup Data:', form);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded shadow">
//         <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={form.name}
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={form.email}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={form.password}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={form.confirmPassword}
//             onChange={handleChange}
//           />

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-sm text-center mt-4">
//           Already have an account?{' '}
//           <Link href="/login" className="text-blue-600 hover:underline">
//             Log In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Footer from '../Footer/page';
import Navbar from "../Navbar/page";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

>>>>>>> 5757a6b92479cb9a17e57245c219a8b37bf49f63
  return (
    <>
    <Navbar/>
     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 relative hidden md:block">
          <Image
            src="/register-image.png"
            alt="Register Illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-l-lg"
          />
          <div className="absolute bottom-5 left-5 text-white">
            <h2 className="text-2xl font-bold">Lorem Ipsum is simply</h2>
            <p>Lorem Ipsum is simply</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <div className="flex justify-end gap-2 mb-4">
            <button className="px-4 py-2 bg-gray-200 rounded-full text-gray-700">Login</button>
            <button className="px-4 py-2 bg-teal-400 text-white rounded-full">Register</button>
          </div>

          <h2 className="text-lg font-semibold mb-2">Welcome to lorem!</h2>
          <p className="text-sm text-gray-500 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="w-full px-4 py-2 border text-xs text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
              <input
                type="text"
                placeholder="Enter your User Name"
                className="w-full px-4 py-2 border text-xs text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="w-full px-4 py-2 border text-xs text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-teal-400 text-white rounded-full mt-4 hover:bg-teal-500 transition-colors"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
   
  );
}
