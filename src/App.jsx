import React from "react"
import { Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Contact from "./pages/Contact"
import { useState } from "react"
import Footer from "./components/Footer"
import Courses from "./pages/Courses"
import About from "./pages/About"
import DashBoard from "./pages/DashBoard"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
   const[isloggedIn,setIsLoggedIn]=useState(false)
  return (
    <div  className="bg-black min-h-screen">
     <Navbar isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="/SignUp" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/Contact" element={<ProtectedRoute isloggedIn={isloggedIn}><Contact/></ProtectedRoute>}/>
        <Route path="/Courses" element={<ProtectedRoute isloggedIn={isloggedIn}><Courses/></ProtectedRoute>}/>
        <Route path="/About" element={<ProtectedRoute isloggedIn={isloggedIn}><About/></ProtectedRoute>}/>
        <Route path="/DashBoard" element={<ProtectedRoute isloggedIn={isloggedIn}><DashBoard/></ProtectedRoute>}/>
      </Routes>
      <Footer/>
      
      </div>
  )
}

export default App
