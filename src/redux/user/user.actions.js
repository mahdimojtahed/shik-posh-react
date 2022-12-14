import UserActionTypes from './user.types'

// Sign-Up Actions
export const signUpStart = (credentials) => ({
   type: UserActionTypes.SIGN_UP_START,
   payload: credentials
});

export const signUpSuccess = (user) => ({
   type: UserActionTypes.SIGN_UP_SUCCESS,
   payload: user
});

export const signUpFailure = (error) => ({
   type: UserActionTypes.SIGN_UP_FAILURE,
   payload: error
});

// Sign-In Actions 
export const googleSignInStart = () => ({
   type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPass) => ({
   type: UserActionTypes.EMAIL_SIGN_IN_START,
   payload: emailAndPass
});

export const signInSuccess = user => ({
   type: UserActionTypes.SIGN_IN_SUCCESS,
   payload: user
});

export const signInFailure = (errorMessage) => ({
   type: UserActionTypes.SIGN_IN_FAILURE,
   payload: errorMessage
});


// Sign-Out Actions 
export const signOutStart = () => ({
   type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
   type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
   type: UserActionTypes.SIGN_OUT_FAILURE,
   payload: error  
});


// Checking User Session Actions
export const checkUserSession = () => ({
   type: UserActionTypes.CHECK_USER_SESSION,
});

