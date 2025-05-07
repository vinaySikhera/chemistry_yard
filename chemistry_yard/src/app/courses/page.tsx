import React from 'react'
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";
const page = () => {
    return (
        <>
         <Navbar />
            <div className='relative bg-cover bg-center bg-no-repeat h-[40vh] w-full' style={{ backgroundImage: "url('/images/course.jpg')" }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='absolute  inset-0 flex items-center justify-center bottom-1/2 '>
                    <input type="text" placeholder='Search Course' className='px-4 py-2 bg-white text-black rounded-md w-[60%]' />
                    <button className='cursor-pointer  px-4 py-2  bg-blue-500 text-white rounded-md ml-2'>Search</button>
                </div>
                {/* this section responsive also  */}
                <div className='absolute inset-0 flex flex-col items-center justify-center md:flex-row top-1/2  gap-4 text-white text-lg md:text-2xl font-bold p-4'>
                    <select name="" id="" className='cursor-pointer px-4 py-2 bg-white text-black rounded-md w-[80%] md:w-auto'>
                        <option value="">Select Course</option>
                        <option value="1">Course 1</option>
                        <option value="2">Course 2</option>
                        <option value="3">Course 3</option>
                        <option value="4">Course 4</option>
                    </select>
                    <select name="" id="" className='cursor-pointer px-4 py-2 bg-white text-black rounded-md w-[80%] md:w-auto'>
                        <option value="">Select Course</option>
                        <option value="1">Course 1</option>
                        <option value="2">Course 2</option>
                        <option value="3">Course 3</option>
                        <option value="4">Course 4</option>
                    </select>
                    <select name="" id="" className='cursor-pointer px-4 py-2 bg-white text-black rounded-md w-[80%] md:w-auto'>
                        <option value="">Select Course</option>
                        <option value="1">Course 1</option>
                        <option value="2">Course 2</option>
                        <option value="3">Course 3</option>
                        <option value="4">Course 4</option>
                    </select>
                    <select name="" id="" className='cursor-pointer px-4 py-2 bg-white text-black rounded-md w-[80%] md:w-auto'>
                        <option value="">Select Course</option>
                        <option value="1">Course 1</option>
                        <option value="2">Course 2</option>
                        <option value="3">Course 3</option>
                        <option value="4">Course 4</option>
                    </select>
                </div>
            </div>
            {/* i want to create a div and inside this div i create some box and it shoud be responsive also and box have some content first image and then heading,paragraph,written by like this
                and it should be responvie also*/}
            <div className='flex flex-wrap justify-center gap-4 mt-10'>
                <div className='bg-white shadow-lg rounded-lg p-4 w-[300px]'>
                    <img src="/images/course.jpg" alt="course" className='w-full h-[200px] object-cover rounded-t-lg' />
                    <h2 className='text-xl font-bold mt-2'>Course Title</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className='text-gray-500 text-sm mt-2'>Written by: John Doe</p>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-4 w-[300px]'>
                    <img src="/images/course.jpg" alt="course" className='w-full h-[200px] object-cover rounded-t-lg' />
                    <h2 className='text-xl font-bold mt-2'>Course Title</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className='text-gray-500 text-sm mt-2'>Written by: John Doe</p>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-4 w-[300px]'>
                    <img src="/images/course.jpg" alt="course" className='w-full h-[200px] object-cover rounded-t-lg' />
                    <h2 className='text-xl font-bold mt-2'>Course Title</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className='text-gray-500 text-sm mt-2'>Written by: John Doe</p>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-4 w-[300px]'>
                    <img src="/images/course.jpg" alt="course" className='w-full h-[200px] object-cover rounded-t-lg' />
                    <h2 className='text-xl font-bold mt-2'>Course Title</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className='text-gray-500 text-sm mt-2'>Written by: John Doe</p>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-4 w-[300px]'>
                    <img src="/images/course.jpg" alt="course" className='w-full h-[200px] object-cover rounded-t-lg' />
                    <h2 className='text-xl font-bold mt-2'>Course Title</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className='text-gray-500 text-sm mt-2'>Written by: John Doe</p>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-4 w-[300px]'>
                    <img src="/images/course.jpg" alt="course" className='w-full h-[200px] object-cover rounded-t-lg' />
                    <h2 className='text-xl font-bold mt-2'>Course Title</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className='text-gray-500 text-sm mt-2'>Written by: John Doe</p>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-4 w-[300px]'>
                    <img src="/images/course.jpg" alt="course" className='w-full h-[200px] object-cover rounded-t-lg' />
                    <h2 className='text-xl font-bold mt-2'>Course Title</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className='text-gray-500 text-sm mt-2'>Written by: John Doe</p>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-4 w-[300px]'>
                    <img src="/images/course.jpg" alt="course" className='w-full h-[200px] object-cover rounded-t-lg' />
                    <h2 className='text-xl font-bold mt-2'>Course Title</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className='text-gray-500 text-sm mt-2'>Written by: John Doe</p>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-8 mt-12 text-center bg-[#9DCCFF] h-auto w-[90%] m-auto rounded-lg p-6'>
                {/* Left Content */}
                <div className='rounded-lg p-4 w-full md:w-[40%]'>
                    <h1 className='text-2xl font-bold mt-2'>Lorem ipsum dolor sit amet.</h1>
                    <p className='text-gray-700 mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                    </p>
                    <button className='cursor-pointer px-6 py-3 text-lg font-bold bg-[#49BBBD] text-white rounded-lg mt-6 hover:bg-[#3aa9aa] transition'>
                        Start Learning Now
                    </button>
                </div>

                {/* Right Content */}
                <div className='rounded-lg p-4 w-full md:w-[50%]'>
                    <img className='h-auto w-full object-cover rounded-lg' src="/images/Group 71.png" alt="group image" />
                </div>
            </div>

            <div>
                <div className='px-4 py-2 bg-white text-black rounded-md w-[300px] mx-auto mt-10'>
                    <h1 className='text-2xl font-bold text-black mb-2 '>Recommended for you</h1>
                </div>
                <div className='flex flex-wrap justify-center gap-4 mt-10'>
                    <div className='bg-white shadow-lg rounded-lg p-4 w-[300px]'>
                        <img src="/images/course.jpg" alt="course" className='w-full h-[200px] object-cover rounded-t-lg' />
                        <h2 className='text-xl font-bold mt-2'>Course Title</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className='text-gray-500 text-sm mt-2'>Written by: John Doe</p>
                    </div>
                    <div className='bg-white shadow-lg rounded-lg p-4 w-[300px]'>
                        <img src="/images/course.jpg" alt="course" className='w-full h-[200px] object-cover rounded-t-lg' />
                        <h2 className='text-xl font-bold mt-2'>Course Title</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className='text-gray-500 text-sm mt-2'>Written by: John Doe</p>
                    </div>
                    <div className='bg-white shadow-lg rounded-lg p-4 w-[300px]'>
                        <img src="/images/course.jpg" alt="course" className='w-full h-[200px] object-cover rounded-t-lg' />
                        <h2 className='text-xl font-bold mt-2'>Course Title</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className='text-gray-500 text-sm mt-2'>Written by: John Doe</p>
                    </div>
                    <div className='bg-white shadow-lg rounded-lg p-4 w-[300px]'>
                        <img src="/images/course.jpg" alt="course" className='w-full h-[200px] object-cover rounded-t-lg' />
                        <h2 className='text-xl font-bold mt-2'>Course Title</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className='text-gray-500 text-sm mt-2'>Written by: John Doe</p>
                    </div>
                </div>
            </div>
             <Footer />
        </>
    )
}

export default page