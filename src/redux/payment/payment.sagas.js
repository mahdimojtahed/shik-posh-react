import { takeLatest , call , put , all} from 'redux-saga/effects';
import { PaymentActionTypes } from './payment.types';


// Helpers

// Actions
import { paymentFailure , paymentSuccess } from './payment.actions'

// Functions

export function* startPayment() {
   try {

      yield put(paymentSuccess(payment))
   } catch(e) {yield put(paymentFailure(e))}
}


// Events :
export function onPaymentStart() {
   yield takeLatest(PaymentActionTypes.PAYMENT_START, startPayment);
}

export function* paymentSagas() {
   yield all([
      call()
   ])
}