import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import countriesReducer from './reducers/countriesReducer';

const store = createStore(
  countriesReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
