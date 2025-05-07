import React from "react";
import {
  Video,
  Mic,
  X,
  Monitor,
} from "lucide-react";

import { Clock, BookOpen, Lock, ChevronDown } from "lucide-react";


export default function Meeting() {
  const controls = [
    { icon: <Video />, label: "Camera" },
    { icon: <Mic />, label: "Mic" },
    { icon: <X />, label: "Close" },
    { icon: <Monitor />, label: "Screen" },
  ];
  return (
    <div className="min-h-screen bg-blue-50 p-4 md:p-8 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 w-[80%]">
        <div className="flex items-center gap-2">
          <button className="bg-white p-2 rounded-full shadow">⬅</button>
          <div>
            <h2 className="font-semibold text-lg text-black">Lorem ipsum dolor sit amet</h2>
            <p className="text-sm text-gray-500">9 Lesson 6h 30min</p>
          </div>
        </div>
        <button className="bg-white p-2 rounded-full shadow">⚙️</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Video Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-4 shadow">
          <div className="relative h-[700px] bg-gray-100 rounded-xl overflow-hidden">
            <img
              src="/images/Meeting-1.jpg"
              alt="Main Speaker"
              className="w-full h-full object-cover"
            />
            <div className="absolute right-4 top-4 flex flex-col gap-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/women/${i * 10}.jpg`}
                  alt="Participant"
                  className="w-16 h-16 rounded-lg border-2 border-white"
                />
              ))}
            </div>

         
          </div>
          <div className="mt-4 flex justify-center gap-4">
  {controls.map((control, i) => (
    <button
      key={i}
      className=" p-3 rounded-xl shadow hover:bg-blue-200 transition"
      aria-label={control.label}
    >
      {control.icon}
    </button>
  ))}
  </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Course Content */}
          <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="font-bold text-lg mb-1">Course Contents</h3>
      <p className="text-xs text-green-600">2/5 COMPLETED</p>

      {/* Progress bar */}
      <div className="w-full h-1 bg-gray-200 rounded-full my-3 overflow-hidden">
        <div className="h-full bg-teal-400 w-[40%]"></div>
      </div>

      <div className="space-y-3 text-sm mt-2">
        {/* Item: Get Started */}
        <div className="border border-gray-200 rounded-xl p-3 flex justify-between items-start">
          <div>
            <p className="font-semibold">Get Started</p>
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              1 Hour
              <BookOpen className="w-4 h-4 ml-3" />
              5 Lessons
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 mt-1" />
        </div>

        {/* Item: Illustrator Structuors - Active */}
        <div className="border-2 border-teal-400 rounded-xl p-3 bg-blue-50">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold text-teal-600">Illstarator Structuors</p>
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                2 Hour
                <BookOpen className="w-4 h-4 ml-3" />
                3 Lessons
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-teal-500 mt-1" />
          </div>

          {/* Inner lessons */}
          <div className="mt-3 space-y-2 text-sm text-gray-700">
            <div className="flex justify-between items-center">
              <span className="text-teal-600">1. Lorem ipsum dolor sit amet</span>
              <span className="text-sm">65:00</span>
            </div>
            <div className="flex justify-between items-center">
              <span>2. Lorem ipsum dolor</span>
              <div className="flex items-center gap-1">
                <span>25:00</span>
                <Lock className="w-4 h-4 text-black" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>3. Lorem ipsum dolor sit amet</span>
              <div className="flex items-center gap-1">
                <span>30:00</span>
                <Lock className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <div className="border border-gray-200 rounded-xl p-3 flex justify-between items-start">
          <div>
            <p className="font-semibold">Using Illustrator</p>
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              1 Hour
              <BookOpen className="w-4 h-4 ml-3" />
              4 Lessons
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 mt-1" />
        </div>

        <div className="border border-gray-200 rounded-xl p-3 flex justify-between items-start">
          <div>
            <p className="font-semibold">What is Pandas?</p>
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              12:54
              <BookOpen className="w-4 h-4 ml-3" />
              5 Lessons
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 mt-1" />
        </div>

        <div className="border border-gray-200 rounded-xl p-3 flex justify-between items-start">
          <div>
            <p className="font-semibold">Work with Numpy</p>
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              59:00
              <BookOpen className="w-4 h-4 ml-3" />
              3 Lessons
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 mt-1" />
        </div>
      </div>
    </div>

          {/* Book for */}
          <div className="bg-white p-4 rounded-2xl shadow">
  <h3 className="font-bold text-lg mb-4">Book for</h3>
  <div className="grid grid-cols-2 gap-4">
    {/* Card 1 */}
    <div className="bg-gray-100 rounded-xl p-3 text-center">
      <img
        src="/images/Meeting-kid.png"
        alt="Kid Learning"
        className="h-20 w-full object-cover rounded mb-2"
      />
      <p className="text-sm font-medium">All Benefits of PLUS</p>
      <p className="text-blue-600 font-bold">$24</p>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-100 rounded-xl p-3 text-center">
      <img
        src="/images/Meeting-kid.png"
        alt="Drawing Class"
        className="h-20 w-full object-cover rounded mb-2"
      />
      <p className="text-sm font-medium text-black">All Benefits of PLUS</p>
      <p className="text-blue-600 font-bold">$24</p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
