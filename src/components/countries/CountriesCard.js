import React from 'react';
import PropTypes from 'prop-types';
import CountriesCardInfo from './CountriesCardInfo';
// import { formatValue } from '../../utils/countryFormatter';

function CountriesCard(props) {
  const { className, country } = props;
  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages
  } = country;
  const mainInfo = {
    nativeName,
    population,
    region,
    subregion,
    capital
  };
  const extraInfo = {
    topLevelDomain,
    currencies,
    languages
  };
  return (
    <div className={`countries-card ${className}`}>
      <img src={flag} alt={`${name} flag`} />
      <h1>{name}</h1>
      <CountriesCardInfo info={mainInfo} />
      <CountriesCardInfo info={extraInfo} />
    </div>
  );
}

CountriesCard.propTypes = {
  className: PropTypes.string,
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    nativeName: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    subregion: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    topLevelDomain: PropTypes.arrayOf(PropTypes.string),
    currencies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    languages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    borders: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

CountriesCard.defaultProps = {
  className: ''
};

export default CountriesCard;
