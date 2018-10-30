import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import rootReducer from "./Reducers/index";
import ReduxPromise from "redux-promise";
import App from "./App";
import { PersistGate } from 'redux-persist/integration/react'
import ConfigureStore from './configureStore';

const { persistor, store} = ConfigureStore()



// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk, ReduxPromise, logger)
// );

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <BrowserRouter>
        <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
