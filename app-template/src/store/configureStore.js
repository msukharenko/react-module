import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import createLogger from 'redux-logger';
import userDetails from '../reducers/userDetails';

//const logger = createLogger();
const reducer = combineReducers(
  {
    userDetails
    
  }
);

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
 // logger
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}