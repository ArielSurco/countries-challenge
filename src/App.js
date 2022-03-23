import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import CountriesCard from './components/countries/CountriesCard';
import Layout from './components/layout/Layout';
import { getAllCountries } from './redux/actions/actions';

const App = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [country, setCountry] = useState(null);
  useEffect(() => {
    console.log(store);
  }, [store]);
  useEffect(() => {
    dispatch(getAllCountries());
    (async () => {
      const res = await axios.get(
        'https://restcountries.com/v2/name/Argentina'
      );
      setCountry(res.data[0]);
    })();
  }, []);
  return (
    <Layout>
      {country && <CountriesCard country={country} mode="preview" />}
    </Layout>
  );
};

export default App;
