import axios from "axios"


export const getShopDataFromDB = async () => {
   const getDataURL = 'http://localhost:4000/shopdata/data'
   const result = await axios.get(getDataURL);
   const collections = await result.data.data;
   return collections;
}

export const convertCollectionsToMap = (collections) => {
   return collections.reduce((acc, collection) => {
      acc[collection.title.toLowerCase()] = collection;
      return acc
   }, {});
}