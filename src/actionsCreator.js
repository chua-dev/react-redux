import * as actions from './actionType';

export const bugAdded = description => ({
  type: actions.BUG_ADDED,
  payload: {
    description
    //description: description
  }
})

// Resolving bug action take ID as parameters
export const bugResolved = id => (
  {
    type: actions.BUG_RESOLVED,
    payload: {
      // Modern JS property & value are same
      //id: id
      id
    }
  }
);



// Traditional ways to create action creator
/*
export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: description,
    }
  }
}*/