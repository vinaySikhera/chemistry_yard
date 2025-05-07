<<<<<<< HEAD
'use client';
import React from 'react'
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { useState } from 'react';
=======
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar/page';
>>>>>>> 5757a6b92479cb9a17e57245c219a8b37bf49f63

export default function Page() {
  const [eye, setEye] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  // console.log(email, password);
  const handleEye = () => {
    setEye(!eye)
  };
  interface RememberEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handleRemember = (e: RememberEvent): void => {
    setRemember(e.target.checked);
    console.log('Remember me:', remember);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    console.log('Form submitted:', { email, password , remember });
    const response = fetch('http://localhost:3000/api/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === 'success') {
          alert('Login successful');
          // Redirect to the dashboard or home page
          window.location.href = '/dashboard';
        } else {
          alert('Login failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    setEmail('');
    setPassword('');
    setRemember(false);
  }
  return <div className='flex justify-center items-center  h-screen bg-white text-black  p-4 font-poppins'>
    <div className='flex flex-col md:flex-row w-full max-w-2xl border-black rounded-lg shadow-lg '>
      <div className='w-full md:w-1/2 h-80 md:h-1/2 bg-gray-200'>
        <img src="/images/loginSignup.png" alt="loginSignup Image" className='w-full h-full object-cover rounded-lg' />
      </div>
      <div className=' p-6 rounded-lg '>
        <form action="" method="post">
          <div className=' mb-4'>
            <label htmlFor="name">Email
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='enter your email' className='border-2 border-gray-300 rounded-md p-2 w-full' />
=======
    // TODO: Handle login logic here
    console.log({ email, password, rememberMe });
  };



  return (
    <>
    <Navbar/>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
       
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span>Remember Me</span>
>>>>>>> 5757a6b92479cb9a17e57245c219a8b37bf49f63
            </label>
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={eye ? "text" : "password"}
                name="password"
                value={password}
                min={4}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="border-2 border-gray-300 rounded-md p-2 w-full pr-10"
              />
              {eye ? (<RxEyeOpen onClick={handleEye} className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer" />) : (<GoEyeClosed onClick={handleEye} className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer" />)}
            </div>
          </div>

          <div className='flex justify-between items-center'>
            <div>
              <label htmlFor="remember" className='flex items-center gap-2 text-sm'>
                <input onChange={handleRemember} checked={remember} type="checkbox" name='remember' className='border-2 border-black-300 rounded-md p-2' />
                Remember me
              </label>
            </div>
            <div>
              <label htmlFor="forgot" className='flex items-center gap-2 text-sm'>
                {/* <input type="checkbox" name='forgot' className='border-2 border-black-300 rounded-md p-2' /> */}
                Forgot password?
              </label>
            </div>
          </div>
          <div className='flex justify-center items-end gap-4 mt-4'>
            <button type='submit' onClick={handleSubmit} className='bg-[#49BBBD] text-white py-2 px-4 rounded hover:bg-[#3AA0A2] '>Login</button>
          </div>
        </form>
      </div>
    </div>
<<<<<<< HEAD
  </div>
}
=======
    </>
  
  );
};
>>>>>>> 5757a6b92479cb9a17e57245c219a8b37bf49f63

