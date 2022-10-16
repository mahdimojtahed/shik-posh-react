import React from 'react';
import axios from 'axios';
import '../Styles/style.scss';

// Components
import CheckoutItem from '../Components/checkout-item/checkout-item.component';
import Button from '../Components/button/button.component'

// Redux
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotalPrice } from '../redux/cart/cart.selector';
import { selectCurrentUser } from '../redux/user/user.selector';


const CheckoutPage = () => {

   const currentUser = useSelector(selectCurrentUser);
   const cartTotalPrice = useSelector(selectCartTotalPrice);
   const cartItems = useSelector(selectCartItems);

   const pay = async () => {
      if(!currentUser) {
         alert('You need to sign in to complete order');
      } else {
         const zarinPayUrl = 'http://localhost:4000/purchase/zarinpal/pay';
         const data = {
            amount: cartTotalPrice + 10000,
            desc: 'desc'
         }
         const res = await axios.post(zarinPayUrl, data, {withCredentials: true})
         redirect(res)
      }
   }

   const redirect = async (res) => {
      window.open(await res.data, "_self")
   }

   return (
      <div className='checkout-page'>
         <div className='checkout-header'>
            <div className='header-block'>
               <span>Product</span>
            </div>
            <div className='header-block'>
               <span>Description</span>
            </div>
            <div className='header-block'>
               <span>Quantity</span>
            </div>
            <div className='header-block'>
               <span>Price</span>
            </div>
            <div className='header-block'>
               <span>Remove</span>
            </div>
         </div>

         {
            cartItems.map(cartItem => 
               <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
         }

         <div className='total-price'>
            <span>TOTAL : {cartTotalPrice} $</span>
         </div>

         <Button zarin onClick={() => pay()}>
            Pay with zarin pal
         </Button>

      </div>
   )
}

export default CheckoutPage;