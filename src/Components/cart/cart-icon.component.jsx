import React from 'react';

// Redux
import { useSelector , useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShopingIcon } from '../../assets/122 shopping-bag.svg';

import './cart.style.scss';

const CartIcon = () => {
   const itemCount = useSelector(selectCartItemsCount);
   const dispatch = useDispatch();

   return (
      <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
         <ShopingIcon className='shoping-icon'/>
         <span className='item-count'>{itemCount}</span>
      </div>
   )
}

export default CartIcon;