import {
  LOGGINGIN,
  LOGGEDIN,
  ERROR,
  SIGNINGUP,
  SIGNEDOUT,
  SIGNINGOUT, 
  PASSWORDCHANGED
} from "../Actions/LogIn";

import storage from 'redux-persist/lib/storage'

const initialState = {
  loggedIn: false,
  loggingIn: false,
  signingUp: false,
  user: null,
  error: null,
  signingOut: false,
  signedOut: false,
  passwordChanged: false,
};

const LogInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGINGIN:
      return { ...state, loggingIn: true };
    case LOGGEDIN:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        signingUp: false,
        error: null,
        user: action.payload
      };
    case SIGNINGUP:
      return { ...state, signingUp: true };
    case SIGNINGOUT:
      return {...state, signingOut: true, passwordChanged: false};
    case PASSWORDCHANGED:
      return {...state, passwordChanged: true, error: null}
    case ERROR:
      return { ...state, loggingIn: false, error: action.payload };
    case SIGNEDOUT:
      return {
        loggedIn: false,
        loggingIn: false,
        signingUp: false,
        user: null,
        error: null,
        signingOut: false,
        signedOut: false,
        passwordChanged: false,
      }
    default:
      return state;
  }
};

export default LogInReducer;
