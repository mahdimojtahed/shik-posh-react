
import React from "react";
import './form-input.style.scss'

const FormInput = ( {handleChange , inputFor , value , label , type} ) => (
   <div className="form-row">
      <input
         className="form-input"
         type={type ? type : inputFor}
         name={inputFor}
         onChange={handleChange}
      />
      <label
         className={`${value ? 'shrink' : ''} form-input-label`}>
         {label ? label : inputFor}
      </label>
   </div>
)

export default FormInput;