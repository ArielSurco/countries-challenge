import get from './publicAPI';

const baseEndpoint = process.env.REACT_APP_COUNTRIES_API_BASE_ENDPOINT;

export const getAll = async () => {
  const allCountries = await get(baseEndpoint, 'all');
  return allCountries;
};

export const getByRegion = async (region) => {
  const countriesByRegion = await get(baseEndpoint, `region/${region}`);
  return countriesByRegion;
};
