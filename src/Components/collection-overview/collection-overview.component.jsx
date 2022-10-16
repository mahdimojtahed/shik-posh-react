import React from 'react';
import './collection-overview.style.scss';

// Components
import Preview from '../collection-preview/preview.component';

// Redux
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionOverview = () => {
   const collections = useSelector(selectCollectionsForPreview);
   return(
      <div className='collections-overview'>
         {
            collections.map(({ id , ...props}) => (
               <Preview key={id} {...props} />
            ))
         }
      </div>
   )
};


export default CollectionOverview;