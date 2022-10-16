import React from 'react';
import './checkout-item.style.scss';

// Redux
import { useDispatch } from 'react-redux';
import { clearItemFromCart , addItem , removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem }) => {
   const { name , quantity , price , imageUrl} = cartItem;
   const dispatch = useDispatch();

   return (
   <div className='checkout-item'>
      <div className='image-container'>
         <img src={imageUrl} />
      </div>

      <span className='name'>{name}</span>
      <span className='quantity'>
         <div className='arrow' onClick={() => dispatch(removeItem(cartItem))}> &#10094; </div>
         <span className='value'> {quantity} </span>
         <div className='arrow' onClick={() => dispatch(addItem(cartItem))}> &#10095; </div>
      </span>
      <span className='price'>{price}</span>
      <span className='fas fa-times' onClick={(() => dispatch(clearItemFromCart(cartItem)))}></span>
   </div>
   )
};


export default CheckoutItem;