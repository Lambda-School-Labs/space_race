import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import logger from "redux-logger";
import ReduxPromise from "redux-promise";

import rootReducer from './Reducers/index';
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, ReduxPromise, logger))
  let persistor = persistStore(store)
  return { store, persistor }
}