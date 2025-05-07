import Image from "next/image";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";

export default function Hero() {
  return (
    <section className="bg-teal-400 relative overflow-hidden">
      <Navbar />

      {/* Background Shapes */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-blue-900">Lorem</span> ipsum dolor sit <br />
            amet, consectetur
          </h1>
          <p className="mt-4 text-white/90">
            This is an interesting platform that will teach you <br />
            in more an interactive way
          </p>
          <button className="mt-6 bg-white text-teal-500 font-bold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
            Join for free
          </button>
        </div>

        {/* Right Image and Tags */}
        <div className="relative mt-12 md:mt-0">
          {/* Background Shape */}
          <div className="bg-cyan-300 w-72 h-96 rounded-[4rem] absolute top-0 left-1/2 -translate-x-1/2 blur-sm"></div>

          {/* Student Image */}
          <Image
            src="/student.png" // Replace with actual image path
            alt="Student"
            width={300}
            height={400}
            className="relative z-10"
          />

          {/* Tags */}
          <div className="absolute top-2 left-0 bg-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2 z-20">
            <Image src="/icon-students.png" width={20} height={20} alt="icon" />
            <div className="text-sm">
              <strong>250k</strong>
              <div className="text-gray-500 text-xs">Assisted Student</div>
            </div>
          </div>

          <div className="absolute top-24 right-0 bg-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2 z-20">
            <Image src="/icon-email.png" width={20} height={20} alt="icon" />
            <div className="text-sm">
              <strong>Congratulations</strong>
              <div className="text-gray-500 text-xs">Your admission completed</div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 bg-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2 z-20">
            <Image src="/avatar.png" width={20} height={20} alt="icon" className="rounded-full" />
            <div>
              <div className="text-sm font-medium">User Experience Class</div>
              <div className="text-xs text-gray-500">Today at 12.00 PM</div>
            </div>
            <button className="bg-pink-500 text-white text-sm px-4 py-1 rounded-full ml-2">
              Join Now
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </section>
  );
}
