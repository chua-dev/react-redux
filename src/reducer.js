import * as actions from './actionType'

let lastId = 0;

// PURE FUNCTION, no matter how many times you call, result will always be the same
// Testing state without declare global variables
// Reducer using if else
/*
function reducerIfelse(state = [], action) {
  if (action.type === 'bugAdded')
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      }
    ];
  else if (action.type === 'bugRemoved')
    return state.filter(bug => bug.id !== action.payload.id)

  return state; //else if action type not exist, return state, wont break the code
}
*/


// Reducer using switch case
export default function reducer(state = [], action) {
  switch(action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        }
      ]

    case actions.BUG_REMOVE:
      return state.filter(bug => bug.id !== action.payload.id)

    case actions.BUG_RESOLVED:
      return state.map(bug => 
        bug.id !== action.payload.id ? bug : {...bug, resolved: true}
  )
    
    default:
      return state;
  }
}