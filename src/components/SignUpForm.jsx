import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
function SignUpForm(props) {
    let setIsLoggedIn=props.setIsLoggedIn
    let navigate=useNavigate()
    const[SignUpData,setSignUpData]=useState({
        firstname:"",lastname:"",emailadress:"",createpassword:"",confirmpassword:""
    })
    const[showPassword,setShowPassword]=useState(false)
    const[showConfirmPassword,setShowConfirmPassword]=useState(false)
    const[accountType,setAccountType]=useState("student")
    function changeHandler(event){
        setSignUpData((prev)=>(
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        ))
    }
    function dataHandler(event)
    {
        event.preventDefault();
        if(SignUpData.createpassword === SignUpData.confirmpassword)
        {
            navigate("/Login")
            toast.success("Account Created Successfully")
        }
        else
        {
            toast.warning("Password Doesn't Match")
        }
    }
  return (
    <div>
        <form onSubmit={dataHandler}>
            <div className='flex gap-3 ml-10 bg-[#161D29] w-56 h-10 border-t-0 border-r-0 border-l-0 border-b rounded-full border-slate-500 justify-center items-center text-xl'>
                <button 
                className={`${accountType === "student" ? 
                    "bg-black text-white border border-none rounded-full w-24 h-8" 
                    : "bg-transparent text-slate-500"}`}
                onClick={()=>setAccountType("student")}>
                    Student
                </button>
                <div>
                <button
                className={`${accountType === "instructor" ? 
                    "bg-black text-white border border-none rounded-full w-24 h-8" 
                    : "bg-transparent text-slate-500"}`}
                 onClick={()=>setAccountType("instructor")}>
                    Instructor
                </button>
                </div>
            </div>
            <div className='flex gap-4 ml-10 mt-4'>
                <div className='flex flex-col'>
                        <label className='text-white'>
                        First Name<sup className='text-red-500 ml-1'>*</sup>
                        </label>
                        <input
                        className='w-60 h-10 rounded-md bg-[#161D29] pl-3 text-white mt-2'
                        required
                         type="text"
                         name='firstname'
                         value={SignUpData.firstname}
                         placeholder='Enter first name'
                         onChange={changeHandler}
                          />
                </div>
                     <div className='flex flex-col'>
                        <label className='text-white'>
                        Last Name<sup className='text-red-500 ml-1'>*</sup>
                        </label>
                        <input
                        className='w-60 h-10 rounded-md bg-[#161D29] pl-3 text-white mt-2'
                        required
                         type="text"
                         name='lastname'
                         value={SignUpData.lastname}
                         placeholder='Enter last name'
                         onChange={changeHandler}
                          />
                   </div>
            </div>
                <div className='flex flex-col ml-10 mt-3'>
                        <label className='text-white'>
                        Email Adress<sup  className='text-red-500 ml-1'>*</sup>
                        </label>
                        <input
                        className='w-[488px] h-10 rounded-md bg-[#161D29] pl-3 text-white mt-2'
                        required
                         type="email"
                         name='emailadress'
                         value={SignUpData.emailadress}
                         placeholder='Enter email adress'
                         onChange={changeHandler}
                          />
                    
              </div>
            <div className='flex gap-4 ml-10'>
                 <div className='flex flex-col mt-3 relative'>
                       <label className='text-white'>
                        Create Password<sup className='text-red-500 ml-1'>*</sup>
                        </label>
                        <input
                        className='w-60 h-10 rounded-md bg-[#161D29] pl-3 text-white mt-2'
                        required
                         type={showPassword ? ("text"):("password")}
                         name='createpassword'
                         value={SignUpData.createpassword}
                         placeholder='Enter Password'
                         onChange={changeHandler}
                          />
                          <span onClick={()=>setShowPassword((prev)=>(!prev))}
                             className='absolute right-3 top-[45px] text-white text-xl'>
                             {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                          </span>
                 </div>
                 <div className='flex flex-col mt-3 relative'>
                       <label className='text-white'>
                        Confirm Password<sup className='text-red-500 ml-1'>*</sup>
                        </label>
                        <input
                        className='w-60 h-10 rounded-md bg-[#161D29] pl-3 text-white mt-2'
                        required
                         type={showConfirmPassword ? ("text"):("password")}
                         name='confirmpassword'
                         value={SignUpData.confirmpassword}
                         placeholder='Confirm Password'
                         onChange={changeHandler}
                          />
                          <span onClick={()=>setShowConfirmPassword((prev)=>(!prev))}
                           className='absolute right-3 top-[45px] text-white text-xl'>
                             {showConfirmPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                          </span>
                    
                 </div>
            </div>
            <div>
                <button className='bg-[#FFD60A] w-[488px] h-10 rounded-md ml-10 mt-5 '>
                    Create Account
                </button>
            </div>
        </form>
        <div className="flex items-center my-5 ml-11">
                   <div className="w-52 h-px bg-slate-300"></div>
                  <span className="mx-4 text-slate-500 text-lg">or</span>
                   <div className="w-52 h-px bg-slate-300"></div>
             </div>
             <div className="ml-10 flex">
               <button className="text-white w-[488px] h-12 rounded-md bg-[#161D29] border border-slate-500 flex items-center justify-center space-x-2">
               <FcGoogle className="text-xl" />
              <span>Sign in With Google</span> 
            </button>
            </div>
    </div>
  )
}

export default SignUpForm