import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountriesCard from './components/countries/CountriesCard';

function App() {
  const [country, setCountry] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        'https://restcountries.com/v2/name/Argentina'
      );
      setCountry(res.data[0]);
    })();
  }, []);
  return country && <CountriesCard country={country} />;
}

export default App;
