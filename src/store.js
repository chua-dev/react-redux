import { createStore } from 'redux';
import reducer from './reducer'; // default export, without default export need to {}, can only have 1 default

// HIGH ORDER FUNCTION
const store = createStore(reducer) //passing function references instead of calling function

export default store;
