import react from "react";
import './preview.style.scss';
import Item from '../collection-item/item.component';
import { useNavigate } from "react-router-dom";

const PreviewCollection = ( { title , items } ) => {
   const Navigate = useNavigate();
   return (
      <div className="collection-preview">
         <h1 className="preview-title" onClick={ () => Navigate(`${title.toLowerCase()}`)}>
            {title}
         </h1>
   
         <div className="preview-container">
            {
               items
                  .filter((item, idx) => idx < 4)
                  .map((item) => (
                     <Item key={item.id} item={item} />
                  ))
            }
         </div>
      </div>
   )
}


export default PreviewCollection;