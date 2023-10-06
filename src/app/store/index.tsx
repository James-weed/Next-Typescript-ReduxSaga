// store.ts
import { configureStore } from '@reduxjs/toolkit';
// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // You can use redux-thunk for async actions
import rootReducer from './reducers'; // Import your root reducer
import createSagaMiddleware from 'redux-saga'
import mysaga from './saga'

const middlewares = [thunk]
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer : rootReducer, // Your root reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mysaga)

export default store