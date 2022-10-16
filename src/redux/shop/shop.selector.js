import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
   [selectShop],
   shop => shop.collections  
);


export const selectIsFetching = createSelector(
   [selectShop],
   shop => shop.isFetching
);

export const selectCollectionsForPreview = createSelector(
   // collections is a object
   // object.keys returns an array of all the keys inside an objects so now we have [hats , jackets , .... ]
   // then we use a map function on this array to do a function on all the elements inside this array
   // now we calling collections with a key like collections[hats] and ... then all of this stored inside an array
   
   // summarize : this code returns an array of objects
   // collections : object of objects 
   // object.keys(collections).map(key => collectios[key]) : array of objects

   [selectCollections],
   collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = (collectionPath) => createSelector(
   // our collections is a key-value pair , in here we can select any of our collection by passing a key inside []
   [selectCollections],
   collections => collections ? collections[collectionPath] : null
);
