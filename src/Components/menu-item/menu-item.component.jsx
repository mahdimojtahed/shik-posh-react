import React from "react";
import './menu-item.style.scss';

import { useNavigate } from 'react-router-dom'

const MenuItem = ( { title , imageUrl , size , linkUrl } ) => {
      let navigate = useNavigate();
      return (
            <div className={`${size ? size : null} menu-item`}
            onClick={() => navigate(`shop/${linkUrl}`)}
            >
                  <img className="menu-item-img" src={imageUrl} alt={title}></img>
                  <div className="content">
                        <h1 className="title">{title}</h1>
                        <span className="subtitle">Shop Now !</span>
                  </div>
            </div>
      )
}

export default MenuItem;