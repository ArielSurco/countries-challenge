import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CountriesCardInfo from './CountriesCardInfo';
import { getInfo, showBorderCountries } from '../../utils/countries';

const CountriesCard = (props) => {
  const { className, country, mode } = props;
  const [borderCountries, setBorderCountries] = useState([]);
  const { name, flag, borders } = country;
  const { mainInfo, extraInfo } = getInfo(country, mode);
  const allCountries = useSelector((store) => store.countries);
  useEffect(() => {
    setBorderCountries(showBorderCountries(allCountries, borders));
  }, [borders, allCountries]);

  return (
    borderCountries && (
      <Link
        to={mode === 'preview' && `/countries/detail/${name}`}
        className={`country-card ${mode} ${className}`}
      >
        <img src={flag} alt={`${name} flag`} />
        <div className="content">
          <h1 className="title">{name}</h1>
          <div className="info-container">
            <CountriesCardInfo info={mainInfo} />
            {extraInfo && <CountriesCardInfo info={extraInfo} />}
          </div>
          {extraInfo && (
            <div className="border-countries">
              <span>Border Countries</span>
              <div className="btn-list">{borderCountries}</div>
            </div>
          )}
        </div>
      </Link>
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
  }).isRequired,
  mode: PropTypes.string.isRequired
};

CountriesCard.defaultProps = {
  className: ''
};

export default CountriesCard;
