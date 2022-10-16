import React from "react";


import SignInForm from '../Components/Sign-in/singin.component';
import SignUpForm from '../Components/Sing-up/singup.component';


class LoginPage extends React.Component {
   render() {
      return (
         <div className="login-page">
            <SignInForm />
            <SignUpForm />
         </div>
      )
   }
}

export default LoginPage;