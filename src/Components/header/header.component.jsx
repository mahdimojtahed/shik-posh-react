import React from "react";
import './header.style.scss';

// Hooks
import { Link , useNavigate } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

// Components
import CartIcon from '../cart/cart-icon.component';
import CartDropdown from "../cart/cart-dropdown.component";

const Nav = () => {
   
   let navigate = useNavigate();
   
   const currentUser = useSelector(selectCurrentUser);
   const hidden = useSelector(selectCartHidden);
   
   return (
      <header>
         <div className="header-container">
            <div className="header-logo-container">
               <h1
               onClick={() => {navigate('./')}}
               className="header-logo">
                  Semi<span>Colon</span>  Shop
               </h1>
            </div>

            <div className="header-nav-container">
               <nav className="header-nav-links">
                  <Link to="./shop">Shop</Link>
                  <Link to="./contact">Contact</Link>
                  {
                     currentUser ? 
                     <Link to='./user'>Profile</Link>            
                     :
                     <Link to='./user'>Sign In</Link>
                  }
               </nav>
               <CartIcon />
            </div>
            {
               hidden
               ?
               null
               :
               <CartDropdown />
            }
         </div>
      </header>
   )
};



export default Nav;