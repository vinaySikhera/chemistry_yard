// app/components/LearningSection.jsx (Next 13+ or 14 structure)
"use client";

import Image from "next/image";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";

export default function Blog() {
  const cardData = [
    {
      image: "/images/card1.jpg",
      title: "Lorem ipsum dolor lorem",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      oldPrice: 100,
      newPrice: 80,
    },
    {
      image: "/images/card2.jpg",
      title: "Lorem ipsum dolor lorem",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      oldPrice: 100,
      newPrice: 80,
    },
    {
      image: "/images/card3.jpg",
      title: "Lorem ipsum dolor lorem",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      oldPrice: 100,
      newPrice: 80,
    },
    {
      image: "/images/card4.jpg",
      title: "Lorem ipsum dolor lorem",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      oldPrice: 100,
      newPrice: 80,
    },
  ];

  const blogs = [
    { id: 1, title: "Blog 1", image: "/images/Blog-hero.png" },
    { id: 2, title: "Blog 2", image: "/images/Blog-hero.png" },
    { id: 3, title: "Blog 3", image: "/images/Blog-hero.png" },
    { id: 4, title: "Blog 4", image: "/images/Blog-hero.png" },
  ];
  return (
    <>
      <Navbar />

      <div className="mt-16 mb-16 w-full">
        <div className="bg-blue-50 w-full border border-blue-300 rounded-none shadow-md font-sans py-20">
          
          {/* Container */}
          <div className="px-4 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">

            {/* Left Section - Text */}
            <div className="flex-1">
              <p className="text-gray-700 mb-4 text-lg">
                By <span className="font-semibold">Themadbrains</span> in <span className="text-teal-500 font-semibold">Inspiration</span>
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-tight mb-6">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, <br /> sed do eiusmod tempos
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos. <br /> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-all duration-300">
                Start learning now
              </button>
            </div>

            {/* Right Section - Image */}
            <div className="w-full md:w-[45%] mt-10 md:mt-0">
              <div className="relative w-full h-64 md:h-[450px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/Blog-hero.png"
                  alt="Learning Online"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </div>


      <div className="w-[92%] mx-auto py-12 px-4 md:px-12">
      <div className="border border-blue-400 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-8 text-black">Reading Blog List</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative rounded-xl overflow-hidden shadow-md group">
              <div className="relative w-full h-48 mx-auto">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white/70 backdrop-blur-md px-4 py-1 rounded-full text-center text-gray-800 font-semibold text-sm">
                {blog.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



    <main className="min-h-screen w-[85%] m-auto py-10 px-5 md:px-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-left">See all</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition">
          <div className="h-48 w-full relative">
            <img
              src="/images/Blog-hero.png"
              alt="Card 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div className="mb-4">
              <div className="text-xs text-gray-400 mb-2">
                LOREM
              </div>
              <h2 className="font-bold text-lg text-gray-800 mb-1">
                Lorem ipsum dolor
              </h2>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/sara-avatar.png"
                  alt="Sara"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-700 text-sm font-semibold">
                  Sara
                </span>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm line-through">$100</p>
                <p className="text-teal-500 text-lg font-bold">$80</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition">
          <div className="h-48 w-full relative">
            <img
              src="/images/Blog-hero.png"
              alt="Card 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div className="mb-4">
              <div className="text-xs text-gray-400 mb-2">
                IPSUM
              </div>
              <h2 className="font-bold text-lg text-gray-800 mb-1">
                Dolor sit amet
              </h2>
              <p className="text-gray-500 text-sm">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/john-avatar.png"
                  alt="John"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-700 text-sm font-semibold">
                  John
                </span>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm line-through">$120</p>
                <p className="text-teal-500 text-lg font-bold">$90</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition">
          <div className="h-48 w-full relative">
            <img
              src="/images/Blog-hero.png"
              alt="Card 3"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div className="mb-4">
              <div className="text-xs text-gray-400 mb-2">
                SIT AMET
              </div>
              <h2 className="font-bold text-lg text-gray-800 mb-1">
                Consectetur adipiscing
              </h2>
              <p className="text-gray-500 text-sm">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/emma-avatar.png"
                  alt="Emma"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-700 text-sm font-semibold">
                  Emma
                </span>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm line-through">$150</p>
                <p className="text-teal-500 text-lg font-bold">$110</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition">
          <div className="h-48 w-full relative">
            <img
              src="/images/Blog-hero.png"
              alt="Card 4"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div className="mb-4">
              <div className="text-xs text-gray-400 mb-2">
                ADIPISCING
              </div>
              <h2 className="font-bold text-lg text-gray-800 mb-1">
                Elit sed do eiusmod
              </h2>
              <p className="text-gray-500 text-sm">
                Tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="/alex-avatar.png"
                  alt="Alex"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-700 text-sm font-semibold">
                  Alex
                </span>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm line-through">$200</p>
                <p className="text-teal-500 text-lg font-bold">$160</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
      <Footer />
    </>
  );
}
