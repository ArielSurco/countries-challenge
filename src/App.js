import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountriesCard from './components/countries/CountriesCard';
import Layout from './components/layout/Layout';

const App = () => {
  const [country, setCountry] = useState(null);
  useEffect(() => {
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
