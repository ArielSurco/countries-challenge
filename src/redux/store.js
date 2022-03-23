import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import countriesReducer from './reducers/countriesReducer';

const logger = createLogger();

const store = createStore(countriesReducer, applyMiddleware(thunk, logger));

export default store;
