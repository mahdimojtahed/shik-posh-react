import axios from "axios";

const handleGoogleLogin = async () => {
   window.open('http://localhost:4000/auth/google', "_self")   
}

const handleSignUp = async (displayName, email, password, confirmPassword) => {
   const SIGN_UP_URL = 'http://localhost:4000/auth/signup';    
   const data = {
      name : displayName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
   }
   if(password === confirmPassword) {
      try {return await axios.post(SIGN_UP_URL, data)}
      catch(e) {console.log(e)}
   } else {alert('passwords not match !')}
}

const handleEmailLogin = async (email , password) => {
   const SIGN_IN_URL = 'http://localhost:4000/auth/login'
   const data = { email: email, password: password }
   try {return await axios.post(SIGN_IN_URL, data, {withCredentials: true})}
   catch(e) {return e}
};

const handleCheckUserSession = async () => {
   const GET_USER_URL = 'http://localhost:4000/user';
   try {return await axios.get(GET_USER_URL, {withCredentials: true})}
   catch(e) { return e}
};

const handleSignOut = async () => {
   const SIGN_OUT_URL = 'http://localhost:4000/auth/logout'
   try {return axios.get(SIGN_OUT_URL, {withCredentials: true})}
   catch(e) {return e}
}

export {
   handleGoogleLogin,
   handleSignUp,
   handleEmailLogin,
   handleCheckUserSession,
   handleSignOut,
};