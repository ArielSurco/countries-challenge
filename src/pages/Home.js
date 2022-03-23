import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountryByName } from '../redux/actions/actions';
import CountriesCard from '../components/countries/CountriesCard';

const Home = () => {
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryByName('Argentina'));
  }, []);
  return (
    (country?.name && <CountriesCard country={country} mode="detail" />) || (
      <div />
    )
  );
};

export default Home;
