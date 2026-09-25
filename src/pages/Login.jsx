import React from 'react'
import LoginImage from "../assets/login.png"
import Template from '../components/Template'

function Login(props) {
  let setIsLoggedIn=props.setIsLoggedIn
  return (
    <>
       <Template
         title="Welcome Back"
         dec1="Build skills for today, tomorrow, and beyond."
         dec2="Education to future-proof your career."
         formtype="login"
         image={LoginImage}
         setIsLoggedIn={setIsLoggedIn}

       />
    </>
  )
}

export default Login