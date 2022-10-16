import { combineReducers  } from "redux";

// Reducers
import directoryReducer from "./directory/directory.reducer";
import userReducer from "./user/user.reducer";
import cartReducer from './cart/cart.reducer';
import shopReducer from "./shop/shop.reducer";
import paymentReducer from './payment/payment.reducer';

// Redux Persist
import { persistReducer } from 'redux-persist';
import { getPersistConfig } from 'redux-deep-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer,
   directory: directoryReducer,
   shop: shopReducer,
   payment: paymentReducer,
});

const persistConfig = getPersistConfig({
   key: 'root',
   storage,
   whitelist: ['cart.cartItems', 'shop.collections'],
   rootReducer,
})



export default persistReducer(persistConfig, rootReducer);