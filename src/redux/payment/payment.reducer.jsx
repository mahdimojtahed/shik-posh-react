import { PaymentActionTypes } from './payment.types'

const INITIAL_STATE = {
   currentPayment: null,
   errorMessage : ''
}

const paymentReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case PaymentActionTypes.SET_CURRENT_PAYMENT:
         return {
            ...state,
            currentPayment: action.payload
         }
      
      case PaymentActionTypes.PAYMENT_SUCCESS:
         return {
            ...state,
            currentPayment: action.payload
         }
      case PaymentActionTypes.PAYMENT_FAILURE:
         return {
            ...state,
            errorMessage: action.payload
         }

      default:
         return state;
   }
}

export default paymentReducer;