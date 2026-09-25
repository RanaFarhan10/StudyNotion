import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const changeInstructorHandler = () => {
    navigate("/SignUp");
  };

  return (
    <div className="bg-[#0A0F1C] text-white min-h-screen px-6 py-16">
      {/* Section 1: Become Instructor */}
      <div className="flex flex-col items-center justify-center text-center mb-24">
        <button
          onClick={changeInstructorHandler}
          className="bg-[#1E1E2F] text-white font-semibold py-2 px-6 rounded-full mb-6 hover:bg-[#2c2c42] transition"
        >
          Become an Instructor →
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empower Your Future With{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
            Coding Skills
          </span>
        </h1>

        <p className="text-gray-400 max-w-3xl text-lg">
          With our online coding courses, you can learn at your own pace, from anywhere in the world, 
          and get access to a wealth of resources, including hands-on projects, quizzes, and personalized 
          feedback from instructors.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition">
            Learn More
          </button>
          <button className="bg-[#1E1E2F] text-white font-semibold px-6 py-3 rounded hover:bg-[#2c2c42] transition">
            Book a Demo
          </button>
        </div>
      </div>

      {/* Section 2: Unlock Coding Potential */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              coding potential
            </span>{' '}
            with our online courses.
          </h2>
          <p className="text-gray-400 text-lg mb-6 max-w-xl">
            Our courses are designed and taught by industry experts who have years of experience in
            coding and are passionate about sharing their knowledge with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition flex items-center justify-center gap-2">
              Try it Yourself →
            </button>
            <button className="bg-[#1E1E2F] text-white font-semibold px-6 py-3 rounded hover:bg-[#2c2c42] transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
