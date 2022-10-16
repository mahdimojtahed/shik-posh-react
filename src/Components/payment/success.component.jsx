import axios from "axios";
import React from "react";

// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotalPrice } from "../../redux/cart/cart.selector";
import { setCurrentPayment } from "../../redux/payment/payment.actions";
import { selectCurrentPayment } from '../../redux/payment/payment.selector';
import { selectCurrentUser } from "../../redux/user/user.selector";



class Success extends React.Component {
   componentDidMount = async () => {
      const {setCurrentPayment , currentUser } = this.props    
      const { id } = currentUser   
      const URL = 'http://localhost:4000/purchase/zarinpal/getdata';
      const body = {
         id: id,
         authority: this.props.authority,
         amount: this.props.cartTotalPrice + 10000
      }

      const res = await axios.post(URL, body, {withCredentials: true});
      const payment = res.data.payment;
      setCurrentPayment(payment)
      
   }
   

   render() {
      return (
      <div>
         {
            this.props.currentPayment
            ?
               <div className="payment-status">
                  {
                     this.props.currentPayment.code === 101
                     ?
                     <h1>Payment Already Done</h1>
                     :
                     <h1>Payment Completed Succesfully</h1>
                  }
                  <h1>id : {this.props.currentUser.id}</h1>
                  <h1>Payment code : {this.props.currentPayment.code}</h1>
                  <h1>Reference ID : {this.props.currentPayment.ref_id}</h1>
                  <span>
                     <i className="fa fa-credit-card"></i>
                     <h1>Card : {this.props.currentPayment.card_pan}</h1>
                  </span>
               </div>
            :
            null
         }
      </div>
      )
   }
}


const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   cartItems: selectCartItems,
   cartTotalPrice: selectCartTotalPrice,
   currentPayment: selectCurrentPayment,
});

const mapDispatchToProps = dispatch => ({
   setCurrentPayment: payment => dispatch(setCurrentPayment(payment))
})

export default connect(mapStateToProps, mapDispatchToProps)(Success);