import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, Reducer } from 'redux';
import defaultState, { AppState } from './state';
import reportWebVitals from './reportWebVitals';

import App from './components/App';
import CoreReducer from './reducers/core';
import ListReducer from './reducers/list';

const reducers: Reducer<AppState> = combineReducers<AppState>({
  core: CoreReducer,
  list: ListReducer,
});

const store = createStore(reducers, defaultState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
export default store;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
