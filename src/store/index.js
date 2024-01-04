// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga';
import callActivity from './callActivityRedux';
import rootSaga from './callActivitySaga'

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    callActivity
  });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;