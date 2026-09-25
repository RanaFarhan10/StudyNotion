import React from 'react'
import SignUpImage from "../assets/signup.png"
import Template from '../components/Template'

function SignUp(props) {
  let setIsLoggedIn=props.setIsLoggedIn
  return (
     <>
      <Template
         title="Join the millions learning to code with StudyNotion for free"
         dec1="Build skills for today, tomorrow, and beyond."
         dec2="Education to future-proof your career."
         formtype="SignUp"
         image={SignUpImage}
         setIsLoggedIn={setIsLoggedIn}

       />
     </>
  )
}

export default SignUp