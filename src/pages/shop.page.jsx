// Modules
import React, {useEffect , lazy , Suspense} from "react";
import { Route, Routes , useParams } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { fetchCollectionsStart } from "../redux/shop/shop.actions";

import Spinner from "../Components/spinner/spinner.component";

// Components
const CollectionOverviewContainer = lazy(() => import("../Components/collection-overview/collection-overview.container"));
const CollectionPageContainer = lazy(() => import("../Components/collection-page/collection.container"));



const ShopPage = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchCollectionsStart())
   }, []);

   return (
      <div className="shop-page">
         <Suspense fallback={<Spinner/>}>
            <Routes >
               <Route index path='/*' element={<CollectionOverviewContainer />} />
               <Route path="/:routeName" element={<CollectionPageContainer />} />
            </Routes>
         </Suspense>
      </div>
   )
};


export default ShopPage