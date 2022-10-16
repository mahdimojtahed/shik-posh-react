import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import './singup.style.scss';


import Button from "../button/button.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";



const SignUp = ({signUpStart}) => {
   const [userCredentials, setUserCredentials] = useState({
      displayName: '', 
      email: '', 
      password: '', 
      confirmPassword: ''
   });
   
   const handleChange = (e) => {
      const { name , value} = e.target;
      setUserCredentials({...userCredentials, [name] : value})
   }
   const { displayName , email , password , confirmPassword} = userCredentials;
   
   
   const handleSubmit = async (e) => {
      e.preventDefault()
      signUpStart(displayName, email, password, confirmPassword)
   }

   

   
   return (
      <div className="sign-up-form-container">
         <h2>Don't Have An Account ? Sign Up Now !</h2>
         <span>Sign up with email</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               inputFor="displayName"
               type="text"
               label="display name"
               value={displayName}
               handleChange={handleChange}
               required
            />
            <FormInput
               inputFor="email"
               value={email}
               handleChange={handleChange}
               required
            />
            <FormInput
               inputFor="password"
               label="password"
               value={password}
               handleChange={handleChange}
               required
            />
            <FormInput
               inputFor="confirmPassword"
               type='password'
               label="confirm password"
               value={confirmPassword}
               handleChange={handleChange}
               required
            />

            <Button type={'submit'}>
               Register
            </Button>
         </form>
      </div>
   )
   
}


const mapDispatchToProps = dispatch => ({
   signUpStart: (displayName, email, password, confirmPassword) => dispatch(signUpStart({displayName, email, password , confirmPassword}))
})

export default connect(null, mapDispatchToProps)(SignUp);