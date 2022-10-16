import react from "react";

// Redux
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import './item.style.scss';

const CollectionItem = ( { item } ) => {

   const { name , price , imageUrl } = item;
   const dispatch = useDispatch()

   return(
      <div className="collection-item">
         <div className="collection-item-image-container">
            <img src={imageUrl} className="collection-item-image"></img>
            <button className="collection-item-button"
            onClick={() => dispatch(addItem(item))}
            >add to cart</button>
         </div>
         <div className="collection-item-footer">
            <span className="collection-item-name">{name}</span>
            <span className="collection-item-price">${price}</span>
         </div>
      </div>
   )
}



export default CollectionItem;