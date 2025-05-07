'use client';
import Image from 'next/image';
import Navbar from '../Navbar/page';
import Footer from '../Footer/page';

export default function Aboutus() {
  return (
    <>
    <Navbar/>
    <div className="bg-white px-4 md:px-12 py-12">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
        {/* Text Side */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 leading-snug">
            <span className="text-black">Everything you can do in a</span> <br />
            <span className="text-black">physical classroom, </span>
            <span className="text-[#33EFA0]">you can do with This</span>
          </h2>
          <p className="text-gray-600 mb-4">
            This school management software helps traditional and online schools manage scheduling,
            attendance, payments and virtual classrooms all in one secure cloud-based system.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Learn more
          </a>
        </div>

        {/* Video Section */}
        <div className="flex-1 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border-4">
            <Image
              src="/images/About-1.png"
              width={350}
              height={400}
              alt="Classroom"
              className="object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white text-blue-600 p-3 rounded-full shadow-lg text-xl">▶️</div>
            </button>
          </div>
        </div>
      </div>

      {/* Creator Cards */}
      <div>
        <h3 className="text-xl font-semibold mb-20 text-center text-black">Classes taught by real creators</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          {[
            { name: 'Jane Cooper', image: '/images/About-1.png' },
            { name: 'Adam', image: '/images/About-1.png' },
            { name: 'Tomara', image: '/images/About-1.png' },
            { name: 'Jane Cooper', image: '/images/About-1.png' },
            { name: 'Jane Cooper', image: '/images/About-1.png' },
            { name: 'Jane Cooper', image: '/images/About-1.png' },
          ].map((creator, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white rounded-xl shadow hover:shadow-md transition text-center w-full pt-16 pb-6 px-4 relative">
                {/* Image - half inside, half outside */}
                <div className="absolute left-1/2 -top-12 transform -translate-x-1/2">
                  <Image
                    src={creator.image}
                    width={116}
                    height={96}
                    alt={creator.name}
                    
                  />
                </div>

                {/* Card Content */}
                <div className="mt-2"> {/* Push content slightly lower */}
                  <p className="font-semibold">{creator.name}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <section className="bg-[#EAF6FF] py-16 px-4 md:px-20">
  <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-black">
    What our students have to say
  </h2>

  <div className="bg-white w-[80%] m-auto rounded-3xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
    {/* Left Image Section */}
    <div className="relative w-60 h-60 shrink-0">
      {/* Colored circles behind image */}
      <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-[#C3FFF3] -z-10" />
      <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-[#FFD9B0] -z-10" />
      <div className="absolute -top-4 right-4 w-12 h-12 rounded-full bg-[#DFFB60] -z-10" />

      {/* Student image */}
      <Image
        src="/images/About-1.png" // Replace with your actual image
        alt="Student"
        fill
        className="rounded-full object-cover"
      />
    </div>

    {/* Middle Text Section */}
    <div className="flex-1">
      <h3 className="text-xl font-bold text-gray-800 mb-1">Savannah Nguyen</h3>
      <p className="text-sm font-medium text-gray-700 mb-3">tanya.hill@example.com</p>
      <p className="text-sm text-gray-500 mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </p>
      <p className="text-sm text-gray-500 mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </p>
      <p className="text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      </p>

      {/* Icon or CTA */}
      <div className="mt-6">
        <div className="w-10 h-10 bg-[#E0F7FF] text-center text-xl flex items-center justify-center rounded-full text-cyan-500">
          💬
        </div>
      </div>
    </div>

    {/* Right Side Images Section */}
    <div className="hidden md:flex flex-col gap-4">
      {[
        '/images/About-1.png',
        '/images/About-1.png',
        '/images/About-1.png',
        '/images/About-1.png'
      ].map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`profile-${i}`}
          width={48}
          height={48}
          className="rounded-full object-cover border-2 border-white shadow-md"
        />
      ))}
    </div>
  </div>
</section>

    </div>
    <Footer/>
    </>
  );
}

// -------------------------------------------------------------plain text -------------------------------------------------------

// create a folder for about us section added a page file 
// import some thing in the file and made setup for export 
// created a hero setcion in about us section 
// added some text related toabout section 
// in right addded a video play section 
// made Classes taught by real creators section 
// added some images and text in the bottom of the images 
// create what out student has say to us 
// added one big image and in middle some text and and after this in right some user image 
// added one msg icon 
// made this full about us section responsive for phone view 
