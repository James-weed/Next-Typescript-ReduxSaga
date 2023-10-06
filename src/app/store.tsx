// store.ts
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // You can use redux-thunk for async actions
import rootReducer from './reducers'; // Import your root reducer

const middlewares = [thunk];

const store = createStore(
  rootReducer, // Your root reducer
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;