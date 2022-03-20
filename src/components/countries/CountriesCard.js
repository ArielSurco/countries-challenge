import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CountriesCardInfo from './CountriesCardInfo';
import { showBorderCountries } from '../../utils/countries';

const CountriesCard = (props) => {
  const { className, country } = props;
  const [borderCountries, setBorderCountries] = useState([]);
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
    languages,
    borders
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
  useEffect(() => {
    (async () => {
      setBorderCountries(await showBorderCountries(borders));
    })();
  }, [borders]);

  return (
    borderCountries && (
      <div className={`countries-card ${className}`}>
        <img src={flag} alt={`${name} flag`} />
        <div>
          <h1>{name}</h1>
          <CountriesCardInfo info={mainInfo} />
          <CountriesCardInfo info={extraInfo} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>Border Countries</span>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                rowGap: '7px',
                columnGap: '7px'
              }}
            >
              {borderCountries}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

CountriesCard.propTypes = {
  className: PropTypes.string,
  country: PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    nativeName: PropTypes.string,
    population: PropTypes.number,
    region: PropTypes.string,
    subregion: PropTypes.string,
    capital: PropTypes.string,
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
