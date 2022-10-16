import React from 'react';
import './button.style.scss';

const Button = ( { children , type , googleBtn , zarin , onClick } ) => (
   <button
      onClick={onClick}
      type={`${type ? type : null}`}
      className={`${googleBtn ? 'google-btn' : ''} ${zarin ? 'zarin' : ''} custom-button`}>
      {children}
   </button>

)

export default Button;