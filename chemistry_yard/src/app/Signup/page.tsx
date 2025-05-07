
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Footer from '../Footer/page';
import Navbar from "../Navbar/page";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      console.log("Registering user:", { email, username, password });
      fetch("http://localhost:3000/api/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            alert("Registration successful!");
            window.location.href = "/login";
          } else {
            alert("Registration failed. Please check your details.");
          }
        })
        .catch((err) => {
          console.error("Registration error:", err);
          alert("An error occurred. Try again later.");
        });
  }

  return (
    <>
      <Navbar />
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

            <h2 className="text-lg font-semibold mb-2">Welcome to lorem!</h2>
            <p className="text-sm text-gray-500 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border text-xs text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your User Name"
                  className="w-full px-4 py-2 border text-xs text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
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
      <Footer />
    </>
  );
}
