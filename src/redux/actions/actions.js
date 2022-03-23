import {
  getAll,
  getByName,
  getByRegion
} from '../../services/countriesService';
import * as actionTypes from './types';

export const setError = () => ({
  type: actionTypes.SET_ERROR
});

export const setLoading = () => ({
  type: actionTypes.SET_LOADING
});

export const setCountries = (payload) => ({
  type: actionTypes.SET_COUNTRIES,
  payload
});

export const setCountry = (payload) => ({
  type: actionTypes.SET_COUNTRY,
  payload
});

export const getAllCountries = () => async (dispatch) => {
  dispatch(setLoading());
  return getAll()
    .then((countries) => dispatch(setCountries(countries)))
    .catch(() => dispatch(setError()));
};

export const getCountriesByRegion = (region) => (dispatch) => {
  dispatch(setLoading());
  return getByRegion(region)
    .then((countries) => dispatch(setCountries(countries)))
    .catch(() => dispatch(setError()));
};

export const getCountryByName = (name) => (dispatch) => {
  dispatch(setLoading());
  return getByName(name)
    .then((country) => dispatch(setCountry(country)))
    .catch(() => dispatch(setError()));
};
