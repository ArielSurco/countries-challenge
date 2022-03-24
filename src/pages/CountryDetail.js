import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MainButton from '../components/common/MainButton';
import CountriesCard from '../components/countries/CountriesCard';
import { getCountryByName } from '../redux/actions/actions';

const CountryDetail = () => {
  const { countryName } = useParams();
  const { country } = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryByName(countryName));
  }, [countryName]);
  return (
    <div className="country-container">
      <MainButton to="/" className="md btn-back">
        <span className="left-arrow-icon" /> Back
      </MainButton>
      {country?.name === countryName && (
        <CountriesCard country={country} mode="detail" />
      )}
    </div>
  );
};

export default CountryDetail;
