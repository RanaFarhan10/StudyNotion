import React from 'react'
import ImageTemplate from "../assets/frame.png"
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import { FcGoogle } from "react-icons/fc";

function Template(props) {
    let title=props.title
    let dec1=props.dec1
    let dec2=props.dec2
    let image=props.image
    let formtype=props.formtype
    let setIsLoggedIn=props.setIsLoggedIn

  return (
    <div className='flex ml-12 mr-40 mt-5'>
        <div className='mt-5 ml-20' >
            <h1 className='text-white ml-11 text-3xl font-bold'>{title}</h1>
            <div className='ml-11 mt-4'>
                <p className='text-slate-300 text-lg'>{dec1}</p>
                <p className='text-[#47A5C5] italic text-lg'>{dec2}</p>
            </div>
            <div className='mt-3'>
               {
                formtype === "login"  ? (<LoginForm setIsLoggedIn={setIsLoggedIn}/>):(<SignUpForm setIsLoggedIn={setIsLoggedIn}/>)
               }
            </div>
     
      

        </div>

        <div className='ml-60 mt-24 mr-20 relative w-11/12 max-w-[450px]'>
             <img src={ImageTemplate}
             alt="frame"
             width={500}
             height={400}
             loading='lazy'
             />
            <img src={image}
             alt="Students"
             width={500}
             height={400}
             loading='lazy'
             className='absolute -top-4 right-4'
             />
        </div>

    </div>
  )
}

export default Template