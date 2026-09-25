import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


function LoginForm(props) {
    let setIsLoggedIn=props.setIsLoggedIn
    let navigate=useNavigate();
    const[loginData,setLoginData]=useState({
        email:"",password:""
    })
    const[showPassword,setShowpassword]=useState(false)

    function changeHandler(event){
        setLoginData((prevData)=>(
           {
             ...prevData,
             [event.target.name]:event.target.value
           }
        ))
    }
    function submitDataHandler(event){
        event.preventDefault();
        setIsLoggedIn(true)
        toast.success("Logged In")
        navigate("/DashBoard")


    }
  return (
    <div >
        <form onSubmit={submitDataHandler}>
        <div className='ml-10'>
            <div>
               <label htmlFor='ei' className='text-white'>
                Email Address<sup className='text-red-500 ml-1'>*</sup>
                 </label>
            </div>
            <div className='mt-2'>
                <input
                className='w-80 h-10 rounded-md bg-[#161D29] pl-3 text-white'
                type="email"
                required
                name='email' 
                id='ei'
                value={loginData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
                />
              </div>
              </div>
            <div className='ml-10 relative'>
                   <div className='mt-3'>
                       <label htmlFor='pl' className='text-white'>
                          Password<sup className='text-red-500 ml-1'>*</sup>
                         </label>
                      </div>
                   <div className='mt-2'>
                       <input
                             className='w-80 h-10 rounded-md bg-[#161D29] pl-3 text-white'
                             type={showPassword ? ("text"):("password")}
                             required
                             id='pl'
                             name='password' 
                             value={loginData.password}
                             onChange={changeHandler}
                             placeholder='Enter your Pssword'
                       />
                   </div>
                <span onClick={()=>setShowpassword((prev)=>(!prev))}
                  className='absolute right-14 top-[45px] text-white text-xl'>
                    {showPassword ? (<AiOutlineEyeInvisible />):(<AiOutlineEye />)}
                </span>
           </div>
            <p className='text-[#47A5C5] text-sm ml-60'>Forgot Password</p>
            <div>
                <button className='bg-[#FFD60A] w-80 h-10 rounded-md ml-9 mt-2 '>
                    Sign In
                </button>
            </div>
        </form>
        <div className="flex items-center my-5 ml-11">
                   <div className="w-32 h-px bg-slate-300"></div>
                  <span className="mx-4 text-slate-500 text-lg">or</span>
                   <div className="w-32 h-px bg-slate-300"></div>
             </div>
             <div className="ml-10 flex">
               <button className="text-white w-80 h-12 rounded-md bg-[#161D29] border border-slate-500 flex items-center justify-center space-x-2">
               <FcGoogle className="text-xl" />
              <span>Sign in With Google</span> 
            </button>
            </div>
    </div>
  )
}

export default LoginForm