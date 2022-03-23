import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries } from '../redux/actions/actions';
import CountriesCard from '../components/countries/CountriesCard';

const Home = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries('Argentina'));
  }, []);
  return (
    <div className="countries-container">
      {countries?.map((country) => (
        <CountriesCard country={country} mode="preview" />
      ))}
    </div>
  );
};

export default Home;
