import { all , call , takeLatest , put } from 'redux-saga/effects';

// Action Types needed from other sagas
import UserActionTypes from '../user/user.types';

// Actions
import { clearCart } from './cart.actions';


// Functions
export function* clearCartOnSignOut() {
   yield put(clearCart())
}

// events 
export function* onSignOutSuccess() {
   yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}


export function* cartSagas() {
   yield(all([
      call(onSignOutSuccess)
   ]))
}