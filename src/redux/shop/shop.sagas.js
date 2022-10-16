import { takeLatest , call , put , all } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';

// Helpers 
import { convertCollectionsToMap, getShopDataFromDB } from '../../Helpers/data/database.utils';

// Actions
import { fetchCollectionsSuccess , fetchCollectionsFailure } from './shop.actions';

// Functions
export function* fetchCollectionsAsync() {
   try{
      const collections = yield getShopDataFromDB();
      const collectionsMap = yield call(convertCollectionsToMap, collections);
      yield put(fetchCollectionsSuccess(collectionsMap));
   } catch(error) {yield put(fetchCollectionsFailure(error.message))}
}

// Events :
export function* onFetchCollectionsStart() {
   yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}


export function* shopSagas() {
   yield all([
      call(onFetchCollectionsStart)
   ])
}