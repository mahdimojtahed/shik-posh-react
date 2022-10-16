import React from 'react';
import './cart-dropdown.style.scss';

// Hooks
import { useNavigate } from 'react-router-dom';

// Components
import Button from '../button/button.component';
import CartItem from './cart-item.component';


// Redux
import { useSelector , useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = () => {
   const navigate = useNavigate();
   const cartItems = useSelector(selectCartItems);
   const dispatch = useDispatch();


   return (
      <div className='cart-dropdown'>
         <div className='cart-items'>
            {
               cartItems.length ? cartItems
               .map((item) => (
                  <CartItem key={item.id} item={item} />
               ))
               :
               <span className='empty'>Cart Is Empty</span>
            }
         </div>
         <Button onClick={() => {
            navigate('/checkout');
            dispatch(toggleCartHidden());
         }}>
            Go To Checkout
         </Button>
      </div>
   )
}


export default CartDropdown;