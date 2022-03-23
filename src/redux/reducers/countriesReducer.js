/* eslint-disable default-param-last */
import * as actionTypes from '../actions/types';

const initialState = {
  countries: [],
  country: {},
  status: ''
};

const countries = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_COUNTRIES:
      return { ...state, countries: payload, status: 'success' };
    case actionTypes.SET_COUNTRY:
      return { ...state, country: payload, status: 'success' };
    case actionTypes.SET_LOADING:
      return { ...state, status: 'loading' };
    case actionTypes.SET_ERROR:
      return { ...state, status: 'error' };
    default:
      return state;
  }
};

export default countries;
