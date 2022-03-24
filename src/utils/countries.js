import React from 'react';
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

export const getInfo = (country, mode) => {
  const {
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages
  } = country;
  let mainInfo;
  let extraInfo;
  if (mode === 'preview') {
    mainInfo = {
      population,
      region,
      capital
    };
  }
  if (mode === 'detail') {
    mainInfo = {
      nativeName,
      population,
      region,
      subregion,
      capital
    };
    extraInfo = {
      topLevelDomain,
      currencies,
      languages
    };
  }
  return {
    mainInfo,
    extraInfo
  };
};

export const showBorderCountries = (allCountries, borders = []) => {
  const countriesFiltered = allCountries.filter((country) =>
    borders.includes(country.alpha3Code)
  );
  const borderCountries = countriesFiltered.map((country) => country.name);
  return borderCountries.map((name) => (
    <MainButton key={name} to={`/countries/detail/${name}`}>
      {name}
    </MainButton>
  ));
};
