import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";
import {StripeProvider} from 'react-stripe-elements';

import MyStoreCheckout from './Components/StripeStuff/MyStoreCheckout';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import rootReducer from "./Reducers/index";
import ReduxPromise from "redux-promise";
import App from "./App";
import 
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, ReduxPromise, logger)
);



ReactDOM.render(
  <Provider store={store}>
  <StripeProvider apiKey="pk_test_H7uewnjg2jKXWSlnvBfFmxzo">
    <BrowserRouter>
      <App />
   
    <MyStoreCheckout />
    </BrowserRouter>
    </StripeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
