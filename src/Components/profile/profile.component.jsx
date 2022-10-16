import React from 'react';
import './profile.style.scss'


// Redux
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';

const ProfileCard = () => {

   const currentUser = useSelector(selectCurrentUser);
   const dispatch = useDispatch();

   if(currentUser) {
      const { id , status , email , name , createdAt , photoURL , orders } = currentUser
      return (
         <div className='profile-page'>
            <div className='profile-card'>
               <div className='profile-header'>
                  <img className='profile-img' src={photoURL} />
                  <h1> {name} </h1>
               </div>   
               <div className='profile-content'>
                  <p>Email : <span> {email} </span></p>
                  <p>Member Since : <span> {createdAt} </span></p>
                  <p>Orders Reference Id: <span> {orders
                  .map(order => <span>{order.ref_id } - </span>
                  )} </span></p>
                  <p>Account Status : <span> {status} </span></p>
                  {
                     status === 'Pending' ? <p>Please Active Your Account</p> : null
                  }
               </div>
               <a className='profile-button'
                  onClick={() => dispatch(signOutStart())}>
                  sign out
               </a>
            </div>
         </div>
      )
   }
}
   

export default React.memo(ProfileCard);


