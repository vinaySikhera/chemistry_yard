"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Footer from "../Footer/page";
import Navbar from "../Navbar/page";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Login successful!");
          window.location.href = "/dashboard";
        } else {
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert("An error occurred. Try again later.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 relative hidden md:block">
            <Image
              src="/register-image.png"
              alt="Login Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-l-lg"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h2 className="text-2xl font-bold">Welcome back</h2>
              <p>Login to continue</p>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-1/2 p-8 md:p-10">
            <h2 className="text-lg font-semibold mb-2">Login to lorem!</h2>
            <p className="text-sm text-gray-500 mb-6">
              Enter your credentials to access your account.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email Address"
                  className="w-full px-4 py-2 border text-xs text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    className="w-full px-4 py-2 border text-xs text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 pr-10"
                    required
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
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
