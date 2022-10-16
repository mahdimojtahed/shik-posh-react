import { createSelector } from "reselect";

const selectPayment = state => state.payment;

export const selectCurrentPayment = createSelector(
   [selectPayment],
   (payment) => payment.currentPayment
)