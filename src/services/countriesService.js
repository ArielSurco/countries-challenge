import get from './publicAPI';

const baseEndpoint = process.env.REACT_APP_COUNTRIES_API_BASE_ENDPOINT;

export const getAll = () => get(baseEndpoint, 'all');

export const getByRegion = (region) => get(baseEndpoint, `region/${region}`);

export const getByName = (name) => get(baseEndpoint, `name/${name}`);
