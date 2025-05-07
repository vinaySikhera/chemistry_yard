import React from 'react'

const page = () => {
    return (
        <>

            <div>welcome to the blog details page</div>
            <div>
                <iframe
                    className="w-full h-[100vh] md:h-[50vh]"
                    src="https://www.youtube.com/embed/-2RAq5o5pwc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className='flex flex-col items-center justify-center mt-4 mb-4 px-15'>
                <h1 className="text-2xl font-bold">Blog Title</h1>
                <p className="text-gray-700 mt-2">This is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    This is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    This is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    This is a platform
                    This is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
                    This is a platform that allows educators to create online classes whereby they can store the course materials online; manage .</p>
            </div>
            <div className="px-15">
                <hr className="border-t border-gray-300" />
            </div>
            <div className='flex items-center gap-2 mt-4  mb-4 px-15'>
                <div>
                    <img className='w-[40px] h-[40px]' src="/images/blogDetails.webp" alt="written by" />
                </div>
                <div>
                    <span>written by <br /> <strong>vinay sikhera</strong></span>
                </div>
            </div>
            <div className=' mt-4 mb-4 px-15'>
                <h1 className="text-2xl font-bold">related blog</h1>
                <div>
                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full md:w-1/2">
                            <img src="/images/blogDetails.webp" alt="" />
                            <h2 className="text-xl font-semibold">Related Blog 1</h2>
                            <p className="text-gray-600 mt-2">This is a brief description of the related blog.</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-full md:w-1/2">
                            <img src="/images/blogDetails.webp" alt="" />
                            <h2 className="text-xl font-semibold">Related Blog 2</h2>
                            <p className="text-gray-600 mt-2">This is a brief description of the related blog.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page