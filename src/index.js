import store from './store';
import { bugAdded, bugResolved } from './actionsCreator';

// Subscribe to store
const unsubscribe = store.subscribe(() => {
  console.log('Store Change', store.getState())
})

store.dispatch(bugAdded("Bug 1"))

store.dispatch(bugResolved(1))

// Dispatch first addbug action
/*
store.dispatch({
 type: actions.BUG_ADDED,
 payload: {
  description: "Report Bug1"
 }
});
*/

unsubscribe(); //Unsubscribe to change

// Dispatch second removebug action
/*
store.dispatch({
  type: actions.BUG_REMOVE,
  payload: {
    id: 1    
  }
})*/


console.log(store.getState())

console.log("Hello World!");
