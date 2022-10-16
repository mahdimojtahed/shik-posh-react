import { takeLatest , put , all , call } from 'redux-saga/effects';

// Action Types
import UserActionTypes from './user.types';

// Helpers
import { 
   handleGoogleLogin, 
   handleSignUp,
   handleEmailLogin,
   handleCheckUserSession,
   handleSignOut } from '../../Helpers/users/users.utils';

// Actions
import {

   signInSuccess,
   signInFailure,
   signOutFailure,
   signOutSuccess, 
   signUpSuccess,
   signUpFailure} from './user.actions';


// Functions
export function* signUpUser({payload: {displayName, email, password, confirmPassword}}) {
   try{
      const status = yield handleSignUp(displayName, email, password, confirmPassword);
      yield console.log(status)
      const user = yield handleEmailLogin(email , password);
      yield put(signUpSuccess(user.data))
   } catch(e) {yield put(signUpFailure(e.message))}
}

export function* signInWithGoogle() {
   try {
      yield handleGoogleLogin();
   } catch(error) { yield put(signInFailure(error))}
};

export function* checkUserSession() {
   try {
      const { data } = yield handleCheckUserSession();
      yield put(signInSuccess(data));
   } catch(error) { yield put(signInFailure('no user signed in')) }
};

export function* signInWithEmail({payload: {email , password}}) {
   try {
      const user = yield handleEmailLogin(email , password);
      yield put(signInSuccess(user.data))
   } catch(error) { yield put(signInFailure(error))}
};

export function* signOutUser() {
   try {
      yield handleSignOut();
      yield put(signOutSuccess());
   } catch (e) { yield put(signOutFailure(e))}
};


// Events
export function* onGoogleSignInStart() {
   yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
};

export function* onEmailSignInStart() {
   yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
};

export function* onCheckUserSession() {
   yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserSession)
};

export function* onSignOutStart() {
   yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutUser)
};

export function* onSignUpStart() {
   yield takeLatest(UserActionTypes.SIGN_UP_START, signUpUser)
}

export function* userSagas() {
   yield all([
      call(onGoogleSignInStart),
      call(onSignUpStart),
      call(onEmailSignInStart),
      call(onCheckUserSession),
      call(onSignOutStart),
   ]);
}