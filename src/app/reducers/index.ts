// reducers/index.ts
import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer'; // Import your reducers here

const rootReducer = combineReducers({
  peoples: peopleReducer,
  // Add other reducers here
});

export default rootReducer;
