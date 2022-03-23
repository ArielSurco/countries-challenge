import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountriesCard from './components/countries/CountriesCard';
import Layout from './components/layout/Layout';
import { getCountryByName } from './redux/actions/actions';

const App = () => {
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryByName('Argentina'));
  }, []);
  return (
    <Layout>
      {country?.name && <CountriesCard country={country} mode="detail" />}
    </Layout>
  );
};

export default App;
