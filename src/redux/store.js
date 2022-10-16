import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

// Saga
import rootSaga from './root-saga';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();



const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
   middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);


// Redux Persist
export const persistor = persistStore(store);


