import React , { useState } from 'react';
import './singin.style.scss';

// Redux
import { googleSignInStart , emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

// Components
import FormInput from '../form-input/form-input.component';
import Button from "../button/button.component";



const SingIn = ( { googleSignInStart , emailSignInStart } ) => {
   const [userCredentials, setCredentials] = useState({email: '', password: ''})

   const handleChange = (e) => {
      const { name , value} = e.target;
      setCredentials({...userCredentials, [name] : value })
   }

   const { email , password } = userCredentials;
   
   const handleSubmit = async (e) => {
      e.preventDefault();
      emailSignInStart(email , password)
   }
   
   return (
      <div className="sign-in-form-container">
         <h2>already have an account ?</h2>
         <span>Sign in with your email and password </span>

         <form onSubmit={handleSubmit}>
               <FormInput
                  inputFor="email"
                  handleChange={handleChange}
                  value={email}
                  required>
               </FormInput>
               <FormInput
                  inputFor='password'
                  handleChange={handleChange}
                  value={password}
                  required
               >
               </FormInput>
               <div className="btns-container">
                  <Button type="submit">
                     sign in
                  </Button>
                  <Button type='button' onClick={googleSignInStart} googleBtn>
                     sign in with google
                  </Button>
               </div>
         </form>
      </div>
   )
}


const mapDispatchToProps = dispatch => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email , password) => dispatch(emailSignInStart({email , password}))
});

export default connect(null, mapDispatchToProps)(SingIn);