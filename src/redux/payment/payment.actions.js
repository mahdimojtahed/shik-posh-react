import { PaymentActionTypes } from "./payment.types";

export const setCurrentPayment = payment => ({
   type: PaymentActionTypes.SET_CURRENT_PAYMENT,
   payload: payment,
});

export const paymentStart = () => ({
   type: PaymentActionTypes.PAYMENT_START
});

export const paymentSuccess = (payment) => ({
   type: PaymentActionTypes.PAYMENT_SUCCESS,
   payload: payment
});

export const paymentFailure = (error) => ({
   type: PaymentActionTypes.PAYMENT_FAILURE,
   payload: error
});