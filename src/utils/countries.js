import React from 'react';
import axios from 'axios';
import MainButton from '../components/common/buttons/MainButton';

export const formatKey = (key) => key.split(/(?=[A-Z])/).join(' ');

export const formatValue = (key, value) => {
  switch (key) {
    case 'topLevelDomain':
      return value.join(', ');
    case 'currencies':
      return value.map((curr) => curr.name).join(', ');
    case 'languages':
      return value.map((lang) => lang.name).join(', ');
    default:
      return value;
  }
};

export const showBorderCountries = async (borders) => {
  const res = await axios.get('https://restcountries.com/v2/all');
  const allCountries = res.data;
  const countriesFiltered = allCountries.filter((country) =>
    borders.includes(country.alpha3Code)
  );
  const borderCountries = countriesFiltered.map(
    (country) => country.nativeName
  );
  return borderCountries.map((name) => (
    <MainButton key={name}>{name}</MainButton>
  ));
};
