import React from 'react';
import './collection.style.scss';

// Components
import CollectionItem from '../collection-item/item.component';

// Hooks
import { useParams } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';


const CollectionPage = () => {
  
  const params = useParams();
  const collectionRoute = params.routeName
  const collection = useSelector(selectCollection(collectionRoute))

  
  const {title , items} = collection;

  return (
    <div className='collection-page'>
      <h1>{title}</h1>
      <div className='collection-container'>
        {
          items
            .map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default CollectionPage;

