import React from 'react'
import { Link } from 'react-router-dom'
import { FaBookOpen, FaCertificate, FaClock, FaUserCircle } from 'react-icons/fa'

const enrolledCourses = [
  {
    title: 'Web Development Bootcamp',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEjBilP-PBEbL7NAsVh5jU2PEYPgaGhh8-g&s',
    progress: 72,
  },
  {
    title: 'React.js Basics',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    progress: 40,
  },
  {
    title: 'Python for Data Science',
    image:
      'https://static.vecteezy.com/system/resources/previews/005/442/693/non_2x/data-science-analytics-internet-and-technology-concept-concept-photo.jpg',
    progress: 15,
  },
]

const stats = [
  { label: 'Enrolled Courses', value: enrolledCourses.length, icon: FaBookOpen },
  { label: 'Hours Learned', value: 34, icon: FaClock },
  { label: 'Certificates Earned', value: 1, icon: FaCertificate },
]

function DashBoard() {
  return (
    <div className="bg-[#0A0F1C] text-white min-h-screen px-6 md:px-20 py-10">
      {/* Profile header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#161D29] rounded-2xl p-6 mb-10">
        <div className="flex items-center gap-4">
          <FaUserCircle className="text-6xl text-gray-500" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Welcome back,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                Student
              </span>
            </h1>
            <p className="text-gray-400 mt-1">Here's what's happening with your learning today.</p>
          </div>
        </div>
        <Link to="/Courses">
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition">
            Browse Courses
          </button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        {stats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="bg-[#1E1E2F] rounded-2xl p-6 flex items-center gap-4 shadow-lg"
          >
            <Icon className="text-3xl text-cyan-400" />
            <div>
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-gray-400 text-sm">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Enrolled courses */}
      <h2 className="text-2xl font-bold mb-6">My Courses</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {enrolledCourses.map((course, index) => (
          <div
            key={index}
            className="bg-[#0a0f1c] border border-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-3">{course.title}</h3>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-green-400"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <p className="text-gray-400 text-sm">{course.progress}% complete</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashBoard
