import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries } from '../redux/actions/actions';
import CountriesCard from '../components/countries/CountriesCard';

const Home = () => {
  const { countries } = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
  }, []);
  return (
    <div className="countries-container">
      {countries.length > 0 &&
        countries.map((country) => (
          <CountriesCard key={country.name} country={country} mode="preview" />
        ))}
    </div>
  );
};

export default Home;
