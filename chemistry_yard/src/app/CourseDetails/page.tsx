'use client';
// pages/CourseDetails.tsx
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";

export default function CourseDetails() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <div className="relative w-full">
          <Image
            src="/images/coursedetails-hero.jpg" // Replace with your hero image
            alt="Course Hero"
            width={1920}
            height={800}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />

          {/* Floating Sidebar Card */}
          <div className="absolute top-3/4 left-1/2 -translate-x-1/2 md:top-2/4 md:left-auto md:right-16 md:translate-x-0 w-full md:w-80">
            <div className="bg-white shadow-lg rounded-xl p-6 w-full space-y-6">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/coursedetails-hero.jpg" // Small thumbnail
                  alt="Course Thumbnail"
                  width={400}
                  height={200}
                  className="object-cover w-full h-40"
                />
              </div>

              {/* Price */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  $49.65
                  <span className="text-gray-400 line-through text-base ml-2">$99.99</span>
                  <span className="text-green-500 text-sm ml-2">50% Off</span>
                </h2>
                <p className="text-cyan-500 text-sm mt-1">11 hour left at this price</p>
              </div>

              {/* Buy Button */}
              <button className="bg-cyan-500 w-full py-3 text-white font-semibold rounded-full hover:bg-cyan-600 transition">
                Buy Now
              </button>

              {/* Features */}
              <div className="space-y-4">
                {[
                  "Money Back Guarantee",
                  "Access on all devices",
                  "Certification of completion",
                  "32 Modules",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                    <FaCheckCircle className="text-cyan-500" /> {feature}
                  </div>
                ))}
              </div>

              <hr />

              {/* Training info */}
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Training 5 or more people</h3>
                <p className="text-gray-600 text-sm">
                  Class launched less than a year ago by Blackboard co-founder Michael Chasen...
                </p>
              </div>

              <hr />

              {/* Social Icons */}
              <div className="flex items-center gap-4 text-cyan-500 text-xl justify-center">
                <FaFacebookF />
                <FaTwitter />
                <FaYoutube />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>

        {/* Rest of Content */}
        <div className="max-w-5xl ml-20  px-4 md:px-10 mt-10 space-y-10">
          
          {/* Overview Tabs */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {["Overview", "Overview", "Overview", "Overview"].map((item, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-semibold ${
                  index === 3 ? "bg-cyan-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Rating Section */}
          <div className="bg-[#9DCCFF4D] rounded-xl p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">4 out of 5</h2>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-1">Top Rating</p>
            </div>

            {/* Progress Bars */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">{star} Stars</span>
                  <div className="flex-1 bg-gray-300 rounded-full h-2 overflow-hidden">
                    <div className="bg-cyan-500 h-2" style={{ width: `${star * 20}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="space-y-6">
            {[1, 2].map((review) => (
              <div key={review} className="bg-blue-50 rounded-xl p-4 flex items-start gap-4 mt-6">
                <Image
                  src="/images/avatar.jpg" // Replace avatar
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">Sara</h3>
                    <span className="text-sm text-gray-500">3 Month</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    Class, launched less than a year ago by Blackboard co-founder Michael Chasen...
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

       <main className="min-h-0  bg-[#F5FAFF] w-[90%] m-auto pt-10 pb-18 px-5 md:px-10 ">

  <div className="flex justify-between items-center mb-8">
    <h1 className="text-3xl font-bold text-gray-800">Marketing Articles</h1>
    <a href="#" className="text-teal-500 font-semibold hover:underline">See all</a>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    {/* Repeat Card Structure Here */}
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-2xl transition duration-300">
      <div className="h-48 w-full relative">
        <img src="/images/Blog-hero.png" alt="Card 1" className="object-cover w-full h-full rounded-t-2xl" />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="mb-4">
          <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
            <span>LOREM</span>
            <div className="flex items-center gap-1">
              <i className="fas fa-clock"></i>
              <span>3 Month</span>
            </div>
          </div>
          <h2 className="font-bold text-lg text-gray-800 mb-1">Lorem ipsum dolor lorem</h2>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBjDpXr8FN9SoD7O9FS7ryOAak9CcSBd56Yqxdts5p7P4kkn_IvPEO4w&s" alt="Sara" className="w-9 h-9 rounded-full" />
            <span className="text-gray-700 text-sm font-semibold">Sara</span>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm line-through">$100</p>
            <p className="text-[#00C288] text-lg font-bold">$80</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-2xl transition duration-300">
      <div className="h-48 w-full relative">
        <img src="/images/Blog-hero.png" alt="Card 1" className="object-cover w-full h-full rounded-t-2xl" />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="mb-4">
          <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
            <span>LOREM</span>
            <div className="flex items-center gap-1">
              <i className="fas fa-clock"></i>
              <span>3 Month</span>
            </div>
          </div>
          <h2 className="font-bold text-lg text-gray-800 mb-1">Lorem ipsum dolor lorem</h2>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBjDpXr8FN9SoD7O9FS7ryOAak9CcSBd56Yqxdts5p7P4kkn_IvPEO4w&s" alt="Sara" className="w-9 h-9 rounded-full" />
            <span className="text-gray-700 text-sm font-semibold">Sara</span>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm line-through">$100</p>
            <p className="text-[#00C288] text-lg font-bold">$80</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-2xl transition duration-300">
      <div className="h-48 w-full relative">
        <img src="/images/Blog-hero.png" alt="Card 1" className="object-cover w-full h-full rounded-t-2xl" />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="mb-4">
          <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
            <span>LOREM</span>
            <div className="flex items-center gap-1">
              <i className="fas fa-clock"></i>
              <span>3 Month</span>
            </div>
          </div>
          <h2 className="font-bold text-lg text-gray-800 mb-1">Lorem ipsum dolor lorem</h2>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBjDpXr8FN9SoD7O9FS7ryOAak9CcSBd56Yqxdts5p7P4kkn_IvPEO4w&s" alt="Sara" className="w-9 h-9 rounded-full" />
            <span className="text-gray-700 text-sm font-semibold">Sara</span>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm line-through">$100</p>
            <p className="text-[#00C288] text-lg font-bold">$80</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-2xl transition duration-300">
      <div className="h-48 w-full relative">
        <img src="/images/Blog-hero.png" alt="Card 1" className="object-cover w-full h-full rounded-t-2xl" />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="mb-4">
          <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
            <span>LOREM</span>
            <div className="flex items-center gap-1">
              <i className="fas fa-clock"></i>
              <span>3 Month</span>
            </div>
          </div>
          <h2 className="font-bold text-lg text-gray-800 mb-1">Lorem ipsum dolor lorem</h2>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwBjDpXr8FN9SoD7O9FS7ryOAak9CcSBd56Yqxdts5p7P4kkn_IvPEO4w&s" alt="Sara" className="w-9 h-9 rounded-full" />
            <span className="text-gray-700 text-sm font-semibold">Sara</span>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm line-through">$100</p>
            <p className="text-[#00C288] text-lg font-bold">$80</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>



<main className="max-w-7xl mx-auto px-4 py-8">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-2xl font-semibold text-black">
      Top Education offers and deals are listed here
    </h2>
    <a href="#" className="text-blue-500 text-sm font-semibold hover:underline">
      See all
    </a>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-96">
      <img
        src="https://cdn.britannica.com/94/216094-050-DE56809C/teacher-at-chalkboard.jpg"
        alt="Instructor Offer"
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
      />
      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
        50%
      </div>
      {/* Centered text without black background */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
        <h3 className="text-white text-2xl font-semibold mb-2 drop-shadow-md">
          FOR INSTRUCTORS
        </h3>
        <p className="text-white text-sm max-w-xs drop-shadow-md">
          TOTC’s school management software helps traditional and online schools manage scheduling.
        </p>
      </div>
    </div>

    {/* Repeat Card 2 */}
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-96">
      <img
        src="https://cdn.britannica.com/94/216094-050-DE56809C/teacher-at-chalkboard.jpg"
        alt="Instructor Offer"
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
      />
      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
        50%
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
        <h3 className="text-white text-2xl font-semibold mb-2 drop-shadow-md">
          FOR INSTRUCTORS
        </h3>
        <p className="text-white text-sm max-w-xs drop-shadow-md">
          TOTC’s school management software helps traditional and online schools manage scheduling.
        </p>
      </div>
    </div>

    {/* Repeat Card 3 */}
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-96">
      <img
        src="https://cdn.britannica.com/94/216094-050-DE56809C/teacher-at-chalkboard.jpg"
        alt="Instructor Offer"
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
      />
      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
        50%
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
        <h3 className="text-white text-2xl font-semibold mb-2 drop-shadow-md">
          FOR INSTRUCTORS
        </h3>
        <p className="text-white text-sm max-w-xs drop-shadow-md">
          TOTC’s school management software helps traditional and online schools manage scheduling.
        </p>
      </div>
    </div>
  </div>
</main>


  </div>
      <Footer />
    </>
  );
}
