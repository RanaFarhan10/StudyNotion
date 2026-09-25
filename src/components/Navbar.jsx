import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Navbar(props) {
    let isloggedIn=props.isloggedIn
    let setIsLoggedIn=props.setIsLoggedIn
  return (
    <div className='flex bg-[#161D29] h-14'>
     
         <div>
         <Link to="/">
            <img className='ml-20 mt-2' src={logo}/>
         </Link>
         </div>
         <div className='flex gap-4 ml-96 mt-3'>
         <Link to="/" className='text-white text-xl'>
           Home
         </Link>
         <Link  to="About" className='text-white text-xl'>
           AboutUs
         </Link>
         <Link  to="Contact" className='text-white text-xl'>
           ContactUS
         </Link>
         <Link  to="Courses" className='text-white text-xl'>
           Courses
         </Link>
         </div>

         <div className='ml-96 flex gap-3  mt-2'>
            {  !isloggedIn &&
             <Link to="Login" className='text-slate-300 text-xl'>
               <button className='bg-[#161D29] w-20 h-10 border rounded-md border-slate-500 '>Login</button>
             </Link>
             
             
            }
            { !isloggedIn &&
             <Link to="SignUp" className='text-slate-300 text-xl'>
               <button className='bg-[#161D29] w-20 h-10 border rounded-md border-slate-500 ' >Sign in</button>
             </Link>
            }
            { isloggedIn &&
             <Link to="/" className='text-slate-300 text-xl'>
               <button  className='bg-[#161D29] w-20 h-10 border rounded-md border-slate-500 '
               onClick={()=>{
                      setIsLoggedIn(false)
                      toast.success("sucessfully logout ")
               }}>
                Logout
                </button>
             </Link>
             }
             {
                isloggedIn &&
             <Link to="DashBoard" className='text-slate-300 text-xl'>
               <button  className='bg-[#161D29] w-28 h-10 border rounded-md border-slate-500 '>Dash Board</button>
             </Link>
            }
         </div>
    </div>
    
  )
}

export default Navbar